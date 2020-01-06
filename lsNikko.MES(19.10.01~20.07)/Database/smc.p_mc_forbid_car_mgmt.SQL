-- Package: smc.p_mc_forbid_car_mgmt

-- DROP PACKAGE p_mc_forbid_car_mgmt;

CREATE OR REPLACE PACKAGE p_mc_forbid_car_mgmt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_forbid_car_mgmt
 * Description      - 출입금지차량관리
 ******************************************************************************/

	TYPE v_cur IS REF CURSOR;
	
	--출입금지차량등록 LIST 조회
	PROCEDURE p_search(p_car_no_id character varying, OUT p_cur v_cur);
	
	--출입금지차량 저장
	PROCEDURE p_save(p_car_id character varying, p_forbid_seq character varying, p_forbid_rsn_tp character varying, p_forbid_dt_fr character varying, p_forbid_dt_to character varying, p_forbid_rsn character varying, p_forbid_cnt character varying, p_trsp_cmp_nm character varying);
	
	--출입금지차량관리 삭제
	PROCEDURE p_delete(p_car_id character varying, p_forbid_seq character varying);
	
	--과속차량 등록
	PROCEDURE p_bc401_speeding_car(p_speeding_dt character varying, p_speeding_tm character varying, p_trsp_cmp_nm character varying, p_car_id character varying, p_driver_nm character varying, p_car_tp_nm character varying, p_speeding_place character varying, p_speeding_tp_nm character varying, p_speeding_cnt numeric, p_speeding_action_tp character varying, p_remark character varying);
	
END p_mc_forbid_car_mgmt;

CREATE OR REPLACE PACKAGE BODY p_mc_forbid_car_mgmt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_forbid_car_mgmt
 * Description      - 출입금지차량관리
 ******************************************************************************/

	--************************************************************************
	-- 출입금지차량등록 LIST 조회
	--************************************************************************
	PROCEDURE p_search(p_car_no_id character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select car_id
				 , forbid_rsn_cd as forbid_rsn_tp
				 , p_mc_utils.f_driver_nm(car_id) as driver_nm
				 , scom.fc_client_datetime(forbid_dt_fr) as forbid_dt_fr
				 , scom.fc_client_datetime(forbid_dt_to) as forbid_dt_to
				 , forbid_rsn
				 , forbid_cnt
				 , trsp_cmp_cd
				 , (case when trsp_cmp_cd is null 
				         then trsp_cmp_nm 
						 else p_mc_utils.f_trsp_cmp_nm(trsp_cmp_cd) 
						 end) as trsp_cmp_nm
				 , forbid_seq
				 , to_char(crt_tm,'yyyy-mm-dd hh24:mi:ss') as crt_tm
			  from t_mc_forbid_car_mgmt		
			 where nvl(del_flag,'N') = 'N'		
			   and car_id like '%'|| p_car_no_id ||'%'		
			 order by car_id;
	END;

	--************************************************************************
	-- 출입금지차량 저장
	--************************************************************************
	PROCEDURE p_save(p_car_id character varying, p_forbid_seq character varying, p_forbid_rsn_tp character varying, p_forbid_dt_fr character varying, p_forbid_dt_to character varying, p_forbid_rsn character varying, p_forbid_cnt character varying, p_trsp_cmp_nm character varying) IS
		v_count number;
	    v_seq number;
	BEGIN
		select count(*) into v_count	
		  from t_mc_forbid_car_mgmt	
		 where car_id = p_car_id;

		IF v_count = 0 THEN
			GOTO P_INSERT;
		ELSE
			GOTO P_UPDATE;
		END IF;
		
		RETURN;
		
		<<P_UPDATE>>
		gf_t_mc_forbid_car_mgmt.p_select(p_car_id, p_forbid_seq);
		
		gf_t_mc_forbid_car_mgmt.t_rec.forbid_rsn_cd		:= p_forbid_rsn_tp;
		gf_t_mc_forbid_car_mgmt.t_rec.forbid_dt_fr 		:= p_forbid_dt_fr;
		gf_t_mc_forbid_car_mgmt.t_rec.forbid_dt_to 		:= p_forbid_dt_to;
		gf_t_mc_forbid_car_mgmt.t_rec.forbid_rsn 		:= p_forbid_rsn;
		gf_t_mc_forbid_car_mgmt.t_rec.forbid_cnt 		:= p_forbid_cnt;
		gf_t_mc_forbid_car_mgmt.t_rec.trsp_cmp_cd 		:= p_trsp_cmp_cd;
		gf_t_mc_forbid_car_mgmt.t_rec.trsp_cmp_nm 		:= p_trsp_cmp_nm;
		gf_t_mc_forbid_car_mgmt.t_rec.del_flag 			:= 'N';
		
		gf_t_mc_forbid_car_mgmt.p_update;
		RETURN;
		
		<<P_INSERT>>
		
		select nvl(max(forbid_seq),0) + 1
		into v_seq
		from t_mc_forbid_car_mgmt;
		
		gf_t_mc_forbid_car_mgmt.p_clear;

		gf_t_mc_forbid_car_mgmt.t_rec.car_id 			:= p_car_id;
		gf_t_mc_forbid_car_mgmt.t_rec.forbid_rsn_cd 	:= p_forbid_rsn_tp;
		gf_t_mc_forbid_car_mgmt.t_rec.forbid_dt_fr 		:= p_forbid_dt_fr;
		gf_t_mc_forbid_car_mgmt.t_rec.forbid_dt_to 		:= p_forbid_dt_to;
		gf_t_mc_forbid_car_mgmt.t_rec.forbid_rsn 		:= p_forbid_rsn;
		gf_t_mc_forbid_car_mgmt.t_rec.forbid_cnt 		:= p_forbid_cnt;
		gf_t_mc_forbid_car_mgmt.t_rec.trsp_cmp_cd 		:= p_trsp_cmp_cd;
		gf_t_mc_forbid_car_mgmt.t_rec.trsp_cmp_nm 		:= p_trsp_cmp_nm;
		gf_t_mc_forbid_car_mgmt.t_rec.forbid_seq		:= v_seq;
		gf_t_mc_forbid_car_mgmt.t_rec.del_flag 			:= 'N';

		gf_t_mc_forbid_car_mgmt.p_insert;
 		RETURN;

	END;
	--************************************************************************
	-- 출입금지차량 삭제
	--************************************************************************
	PROCEDURE p_delete(p_car_id character varying, p_forbid_seq character varying) IS
	BEGIN
		gf_t_mc_forbid_car_mgmt.p_select(p_car_id, p_forbid_seq);
		
		gf_t_mc_forbid_car_mgmt.t_rec.car_id 			:= p_car_id;
		gf_t_mc_forbid_car_mgmt.t_rec.del_flag 			:= 'Y';
		
		gf_t_mc_forbid_car_mgmt.p_update;
	END;
	
	--************************************************************************
	-- 과속차량 등록
	--************************************************************************
	PROCEDURE p_bc401_speeding_car(p_speeding_dt character varying, p_speeding_tm character varying, p_trsp_cmp_nm character varying, p_car_id character varying, p_driver_nm character varying, p_car_tp_nm character varying, p_speeding_place character varying, p_speeding_tp_nm character varying, p_speeding_cnt numeric, p_speeding_action_tp character varying, p_remark character varying) IS
	
	    v_speeding_dt character varying(8);
	    v_speeding_tm character varying(6);
		v_car_id      character varying(20);
		
	BEGIN
	    if  p_remark = '물류차량' then
		    v_speeding_dt := trim(substr(p_speeding_dt,1,8));
		    v_speeding_tm := replace(trim(p_speeding_tm),':','');
			v_car_id      := trim(p_car_id);
			
			gf_t_mc_car_speeding.p_select(v_speeding_dt, v_speeding_tm, v_car_id);
			
			gf_t_mc_car_speeding.t_rec.speeding_dt		  := v_speeding_dt;
			gf_t_mc_car_speeding.t_rec.speeding_tm 		  := v_speeding_tm;
			gf_t_mc_car_speeding.t_rec.car_id 		      := v_car_id;
			
			gf_t_mc_car_speeding.t_rec.trsp_cmp_nm 		  := p_trsp_cmp_nm;
			gf_t_mc_car_speeding.t_rec.driver_nm 		  := p_driver_nm;
			gf_t_mc_car_speeding.t_rec.car_tp_nm 		  := p_car_tp_nm;
			gf_t_mc_car_speeding.t_rec.speeding_place 	  := p_speeding_place;
			gf_t_mc_car_speeding.t_rec.speeding_tp_nm     := p_speeding_tp_nm;
			gf_t_mc_car_speeding.t_rec.speeding_cnt 	  := p_speeding_cnt;
			gf_t_mc_car_speeding.t_rec.speeding_action_tp := p_speeding_action_tp;
			gf_t_mc_car_speeding.t_rec.remark 			  := p_remark;
			gf_t_mc_car_speeding.p_upsert;
			
			-- gf_t_mc_forbid_car_mgmt.clear;
			
			-- select nvl(max(forbid_seq),0) + 1
			-- into v_seq
			-- from t_mc_forbid_car_mgmt;
		
			-- gf_t_mc_forbid_car_mgmt.p_clear;

			-- gf_t_mc_forbid_car_mgmt.t_rec.car_id 			:= v_car_id;
			-- gf_t_mc_forbid_car_mgmt.t_rec.forbid_rsn_cd 	:= 'B';
			-- gf_t_mc_forbid_car_mgmt.t_rec.forbid_rsn 		:= scom.fc_cd_nm('FORBID_RSN_TP','B');
			-- gf_t_mc_forbid_car_mgmt.t_rec.forbid_cnt 		:= p_speeding_cnt;
			-- gf_t_mc_forbid_car_mgmt.t_rec.trsp_cmp_cd 		:= p_trsp_cmp_nm;
			-- gf_t_mc_forbid_car_mgmt.t_rec.forbid_seq		:= v_seq;
			-- gf_t_mc_forbid_car_mgmt.t_rec.del_flag 			:= 'N';

			-- gf_t_mc_forbid_car_mgmt.p_insert;
			return;
		end if;
	
	EXCEPTION WHEN OTHERS THEN
	    p_mc_utils.p_set_logs('speeding_car',v_car_id,'과속차량','기타 에러입니다.');
		return;
		
	END;
	
END p_mc_forbid_car_mgmt;