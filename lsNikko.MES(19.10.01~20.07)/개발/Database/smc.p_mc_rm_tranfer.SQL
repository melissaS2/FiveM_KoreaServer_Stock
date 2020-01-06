-- Package: smc.p_mc_rm_tranfer

-- DROP PACKAGE p_mc_rm_tranfer;

CREATE OR REPLACE PACKAGE p_mc_rm_tranfer
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_rm_tranfer
 * Description      - SAP 인터페이스
 ******************************************************************************/

	TYPE v_cur IS REF CURSOR;
	
	--[SC2116] SAP Interface정보 조회
	PROCEDURE p_sc2116_search_sapinterface(p_op_dt character varying, OUT p_cur v_cur);
	
	--[SC2116] 차선 잔량 조회
	PROCEDURE p_sc2116_sch_no_search(p_op_dt character varying, OUT p_cur v_cur);
	
END p_mc_rm_tranfer;

CREATE OR REPLACE PACKAGE BODY p_mc_rm_tranfer
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_rm_tranfer
 * Description      - SAP 인터페이스
 ******************************************************************************/

	--************************************************************************
	-- SAP Interface정보 조회
	--************************************************************************
	PROCEDURE p_sc2116_search_sapinterface(p_op_dt character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
		    select wrk_dt
				 , bat_no
				 , mineral_tp
				 , wrk_bin
				 , out_wgt * 1000 as wmt
				 , to_char(to_date(hop_sta_dtm,'yyyymmddhh24mi'),'yyyymmdd hh24:mi') hop_sta_dtm
				 , nvl(if_rslt, '미전송') send_rslt
				 , nvl(if_upd_dtm, '미전송') upd_dtm
				 , nvl(if_msg, '미전송') message
			  from seai.t_if_tc204
			 where wrk_dt = replace(p_op_dt,'-','');
	END;

	--************************************************************************
	-- 차선 잔량 조회
	--************************************************************************
	PROCEDURE p_sc2116_sch_no_search(p_op_dt character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select wrk_sch_no
				 , mineral_tp
				 , nvl(close_yn, 'N') as close_yn
				 , in_wgt
				 , input_wgt
				 , sap_send_wgt
				 , in_wgt - sap_send_wgt as rem_wgt
			  from (select t1.wrk_sch_no
						 , t1.mineral_tp
						 , t1.close_yn
						 , (select nvl(sum(net_wgt),0)
							  from t_mc_rm_weigh_sum
							 where bat_no = 'SUB-TOT'
							   and lot_no = 'CN1'||T1.wrk_sch_no) as in_wgt
						 , (select nvl(sum(input_wgt),0)
							  from v_mc_hop_input_rslt
							 where bat_no = 'CN1'||t1.wrk_sch_no) as input_wgt
						 , (select nvl(sum(out_wgt),0)
							  from seai.t_if_tc204
							 where bat_no = 'CN1'||t1.wrk_sch_no
							   and if_rslt = 'S') as sap_send_wgt
					  from t_mc_hop_wrk_rslt t1
					 where t1.wrk_dt = replace(p_op_dt,'-','') --p_op_dt
					 ) s				
			  where mineral_tp is not null;
	END;
END p_mc_rm_tranfer;