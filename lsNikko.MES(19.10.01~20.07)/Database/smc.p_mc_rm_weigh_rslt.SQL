-- Package: smc.p_mc_rm_weigh_rslt

-- DROP PACKAGE p_mc_rm_weigh_rslt;

CREATE OR REPLACE PACKAGE p_mc_rm_weigh_rslt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_rm_weigh_rslt
 * Description      - 부두Weighing List 관리
 ******************************************************************************/

	TYPE v_cur IS REF CURSOR;
	
	--계량위치 조회
	PROCEDURE p_search_weighing_loc(p_op_dt_fr character varying, p_op_dt_to character varying, OUT p_cur v_cur);

	--계량실적 조회
	PROCEDURE p_search_weighing_perform(p_lot_no character varying, OUT p_cur v_cur);
	
	--계량위치 저장
	PROCEDURE p_insert_weighing_loc(p_lot_no character varying, p_store_loc character varying);
	
	--LOT번호 상세조회
	PROCEDURE p_search_lot_no_detail(p_lot_no character varying, OUT p_cur v_cur);
END p_mc_rm_weigh_rslt;

CREATE OR REPLACE PACKAGE BODY p_mc_rm_weigh_rslt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_rm_weigh_rslt
 * Description      - 부두Weighing List 관리
 ******************************************************************************/

	--************************************************************************
	--계량위치 조회
	--************************************************************************
	PROCEDURE p_search_weighing_loc(p_op_dt_fr character varying, p_op_dt_to character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
		    select A.store_loc
				 , A.lot_no
				 , to_char(to_date(weigh_dt,'yyyymmdd'),'yyyy-mm-dd') as weigh_dt
			  from T_MC_RM_WEIGH_LOC A,
				 ( select LOT_NO,SUBSTR(MAX(WEIGH_DTM),1,8) AS WEIGH_DT
					 from T_MC_RM_WEIGH_RSLT
					where SUBSTR(WEIGH_DTM,1,8) BETWEEN P_OP_DT_FR AND P_OP_DT_TO
					group by LOT_NO) B
			 where A.lot_no = B.lot_no
			 order by 3;
	END;

	--************************************************************************
	--계량실적 조회
	--************************************************************************
	PROCEDURE p_search_weighing_perform(p_lot_no character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select min(t2.bat_no) bat_no
				 , scom.fc_client_datetime(min(t2.weigh_dtm)) weigh_dtm
				 , min(t2.net_wgt) net_wgt
				 , decode(min(t2.bat_no),'GND-TOT', min(t2.net_wgt), sum(t1.net_wgt)) acc_net_wgt
			  from T_MC_RM_WEIGH_RSLT t1
				 , T_MC_RM_WEIGH_RSLT t2
			 where t1.weigh_dtm <= t2.weigh_dtm
			   and t1.lot_no = t2.lot_no
			   and t2.lot_no = p_lot_no
			   and t2.bat_no in ('SUB-TOT','GND-TOT')
			   and t1.bat_no in ('SUB-TOT','GND-TOT')
			 group by t2.weigh_dtm
			 order by t2.weigh_dtm;
	END;
	--************************************************************************
	--계량위치 저장
	--************************************************************************
	PROCEDURE p_insert_weighing_loc(p_lot_no character varying, p_store_loc character varying) IS
		v_acc_wgt character varying;
		v_if_rslt character varying;
		v_if_msg character varying;
	BEGIN
		--계량위치 등록 start
		gf_t_mc_rm_weigh_loc.p_clear;
		
		gf_t_mc_rm_weigh_loc.t_rec.lot_no 		:= p_lot_no;
		gf_t_mc_rm_weigh_loc.t_rec.store_loc 	:= p_store_loc;
		
		gf_t_mc_rm_weigh_loc.p_insert;
		--계량위치 등록 end
		 
		--원료계량합계등록 start(LOOP)
		v_if_rslt 	:= 'Q';
		v_if_msg 	:= 'SUCCESS';
		
		FOR cv_rec IN
			(select lot_no -- 계량실적 조회
				  , p_store_loc as store_loc
				  , bat_no
				  , weigh_dtm
				  , net_wgt
			   into v_rec
			   from t_mc_rm_weigh_rslt
			  where lot_no = p_lot_no
			    and bat_no in('SUB-TOT','GND-TOT')
			  order by weigh_dtm
			)
		LOOP
			v_acc_wgt := CASE WHEN v_rec.bat_no = 'GND-TOT' THEN v_rec.net_wgt ELSE v_acc_wgt + v_rec.net_wgt END;
		
			gf_t_mc_rm_weigh_sum.p_clear;
			
			gf_t_mc_rm_weigh_sum.t_rec.lot_no 		:=	v_rec.lot_no;
			gf_t_mc_rm_weigh_sum.t_rec.weigh_loc	:=	v_rec.store_loc;
			gf_t_mc_rm_weigh_sum.t_rec.bat_no		:=	v_rec.bat_no;
			gf_t_mc_rm_weigh_sum.t_rec.weigh_dtm	:=	v_rec.weigh_dtm;
			gf_t_mc_rm_weigh_sum.t_rec.net_wgt		:=	v_rec.net_wgt;
			gf_t_mc_rm_weigh_sum.t_rec.acc_net_wgt	:=	v_acc_wgt;
			
			gf_t_mc_rm_weigh_sum.p_insert;
			begin 
			    p_mc_if_eai.t_if_tc202_s(v_rec.lot_no, v_rec.store_loc, v_rec.bat_no, v_rec.weigh_dtm, v_rec.net_wgt, v_acc_wgt);
		    exception when others then
			    null;
		    end;
		END LOOP;
	END;
	
	--************************************************************************
	--LOT번호 상세조회
	--************************************************************************
	PROCEDURE p_search_lot_no_detail(p_lot_no character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select distinct MINERAL_TP
				 , VESSEL_NM
			  from T_MC_RM_WEIGH_RSLT
			 where LOT_NO = p_lot_no;
	END;
END p_mc_rm_weigh_rslt;