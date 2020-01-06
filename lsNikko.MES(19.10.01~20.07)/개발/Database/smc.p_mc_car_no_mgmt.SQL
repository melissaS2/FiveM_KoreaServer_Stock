-- Package: smc.p_mc_car_no_mgmt

-- DROP PACKAGE p_mc_car_no_mgmt;

CREATE OR REPLACE PACKAGE p_mc_car_no_mgmt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_car_no_mgmt
 * Description      - 차량번호 관리
 ******************************************************************************/

	TYPE v_cur IS REF CURSOR;
	
	--운송업체 & 차량번호 List 조회
	PROCEDURE p_search(p_car_id character varying, p_trsp_cmp_nm character varying, OUT p_cur v_cur);
		
	--입고처 History List 조회
	PROCEDURE p_search_income_history(p_car_id character varying, OUT p_cur v_cur);
	
	--출고처 History List 조회
	PROCEDURE p_search_outcome_history(p_car_id character varying, OUT p_cur v_cur);
	
	--운송업체 & 차량번호 저장
	--PROCEDURE p_save(p_trsp_cmp_cd character varying, p_driver_nm character varying, p_car_wgt character varying, p_overtime_flag character varying, p_cnsnt_tgt_yn character varying, p_hand_phone_no character varying, p_car_id character varying);
	PROCEDURE p_save(p_car_no character varying, p_jqx_rs character varying, p_trsp_cmp_nm character varying, p_car_id_h character varying, p_car_id character varying, p_driver_nm character varying, p_hand_phone_no character varying, p_cnsnt_tgt_yn character varying, p_trsp_cmp_cd character varying, p_overtime_flag character varying, p_car_wgt numeric, p_car_load_wgt numeric, p_jqx_cb character varying);
	
	--운송업체 & 차량번호 삭제
	PROCEDURE p_delete(p_car_id character varying, p_trsp_cmp_cd character varying);
END p_mc_car_no_mgmt;

CREATE OR REPLACE PACKAGE BODY p_mc_car_no_mgmt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_car_no_mgmt
 * Description      - 차량번호 관리
 ******************************************************************************/

	--************************************************************************
	-- 운송업체 & 차량번호 List 조회
	--************************************************************************
	PROCEDURE p_search(p_car_id character varying, p_trsp_cmp_nm character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
		    select b.trsp_cmp_nm
				 , car_id
				 , car_id as car_id_h
				 , substr(car_id,-4) as car_no
				 , driver_nm
				 , last_inout_dt
				 , inout_cnt
				 , today_inout_cnt
				 , a.trsp_cmp_cd
				 , car_no
				 , car_wgt
				 , car_load_wgt
				 , fc_yn_to_boolean(overtime_flag) as overtime_flag
				 , fc_yn_to_boolean(cnsnt_tgt_yn) as cnsnt_tgt_yn
				 , fc_yn_to_boolean(cuscrap_in_yn) as cuscrap_in_yn
				 , cuscrap_time_assign
				 , cuscrap_wgt_assign
				 , replace(hand_phone_no,'-','') as hand_phone_no
			  from t_mc_car_mgmt a
			     , t_mc_trsp_cmp_mgmt b
			 where a.trsp_cmp_cd = b.trsp_cmp_cd
			   and nvl(a.del_flag,'N') = 'N'
			   and nvl(b.del_flag,'N') = 'N'
			   and car_id like '%'||p_car_id ||'%'
			   and b.trsp_cmp_nm like '%'||p_trsp_cmp_nm ||'%'
			 order by b.trsp_cmp_nm, car_id, substr(car_id,-4);
	END;
	--************************************************************************
	-- 입고처 History List 조회
	--************************************************************************
	PROCEDURE p_search_income_history(p_car_id character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select distinct vendor_cd
				 , p_mc_utils.f_vendor_nm_inout(vendor_cd,'1') as vendor_nm
				 , item_cd
				 , p_mc_utils.f_item_nm(item_cd) as  item_nm						
		 	  from t_mc_car_in_mgmt						
			 where car_id = p_car_id						
			 order by vendor_nm	;
	END;
	--************************************************************************
	-- 출고처 History List 조회
	--************************************************************************
 	PROCEDURE p_search_outcome_history(p_car_id character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
 			select b.vendor_cd
 				 , p_mc_utils.f_vendor_nm_inout(b.vendor_cd,'2') as vendor_nm
 				 , b.sub_vendor_cd
				 , p_mc_utils.f_sub_vendor_nm(b.vendor_cd, b.sub_vendor_cd) as sub_vendor_nm
 				 , b.item_cd
				 , p_mc_utils.f_item_nm(b.item_cd) as  item_nm							
 		 	  from (select distinct vendor_cd
 						 , max(car_inout_no) as car_inout_no							
 			  		  from t_mc_car_out_mgmt							
 			 		 where car_id = p_car_id							
 			 	     group by vendor_cd
				   ) a 
 				 , t_mc_car_out_mgmt b							
 			 where a.vendor_cd    = b.vendor_cd	
			   and a.car_inout_no = b.car_inout_no
 			   and p_mc_utils.f_vendor_nm_inout(b.vendor_cd,'2') is not null							
 			 order by vendor_nm	;
 	END;

	--************************************************************************
	-- 운송업체 & 차량번호 저장
	--************************************************************************
	--PROCEDURE p_save(p_trsp_cmp_cd character varying, p_driver_nm character varying, p_car_wgt character varying, p_overtime_flag character varying, p_cnsnt_tgt_yn character varying, p_hand_phone_no character varying, p_car_id character varying) IS
	PROCEDURE p_save(p_car_no character varying, p_jqx_rs character varying, p_trsp_cmp_nm character varying, p_car_id_h character varying, p_car_id character varying, p_driver_nm character varying, p_hand_phone_no character varying, p_cnsnt_tgt_yn character varying, p_trsp_cmp_cd character varying, p_overtime_flag character varying, p_car_wgt numeric, p_car_load_wgt numeric, p_jqx_cb character varying) IS
	    v_jqx_rs character varying(1);
		v_count number;
	BEGIN
		select count(*) into v_count
		  from t_mc_car_mgmt	
		 where car_id = p_car_id	
		   and trsp_cmp_cd = p_trsp_cmp_cd;

		IF v_count = 0 THEN
			GOTO P_INSERT;
		ELSE
			GOTO P_UPDATE;
		END IF;
		
		RETURN;
		
		<<P_UPDATE>>
		gf_t_mc_car_mgmt.p_select(p_car_id, p_trsp_cmp_cd);
		
		gf_t_mc_car_mgmt.t_rec.driver_nm 		:= p_driver_nm;
		gf_t_mc_car_mgmt.t_rec.car_wgt 			:= nvl(p_car_wgt,1);
		gf_t_mc_car_mgmt.t_rec.car_load_wgt		:= p_car_load_wgt;
		gf_t_mc_car_mgmt.t_rec.del_flag			:= 'N';
		gf_t_mc_car_mgmt.t_rec.overtime_flag 	:= nvl(p_overtime_flag,'N');
		gf_t_mc_car_mgmt.t_rec.cnsnt_tgt_yn 	:= nvl(p_cnsnt_tgt_yn,'N');
		gf_t_mc_car_mgmt.t_rec.hand_phone_no 	:= replace(p_hand_phone_no,'-','');
		
		gf_t_mc_car_mgmt.p_update;
		RETURN;
		
		<<P_INSERT>>
		gf_t_mc_car_mgmt.p_clear;
		
		gf_t_mc_car_mgmt.t_rec.car_id			:= p_car_id;
		gf_t_mc_car_mgmt.t_rec.car_no			:= substr(p_car_id,-4);
		gf_t_mc_car_mgmt.t_rec.driver_nm		:= p_driver_nm;
		gf_t_mc_car_mgmt.t_rec.hand_phone_no	:= replace(p_hand_phone_no,'-','');
		gf_t_mc_car_mgmt.t_rec.trsp_cmp_cd		:= p_trsp_cmp_cd;
		--gf_t_mc_car_mgmt.t_rec.trsp_cmp_nm		:= p_trsp_cmp_nm;
		gf_t_mc_car_mgmt.t_rec.car_wgt			:= p_car_wgt;
		gf_t_mc_car_mgmt.t_rec.car_load_wgt		:= p_car_load_wgt;
		gf_t_mc_car_mgmt.t_rec.del_flag			:= 'N';
		gf_t_mc_car_mgmt.t_rec.overtime_flag	:= nvl(p_overtime_flag,'N');
		gf_t_mc_car_mgmt.t_rec.cnsnt_tgt_yn		:= nvl(p_cnsnt_tgt_yn,'N');
		
		gf_t_mc_car_mgmt.p_insert;
 		RETURN;
	END;
	
	--************************************************************************
	-- 운송업체 & 차량번호 삭제
	--************************************************************************
	PROCEDURE p_delete(p_car_id character varying, p_trsp_cmp_cd character varying) IS
	BEGIN
		gf_t_mc_car_mgmt.p_select(p_car_id, p_trsp_cmp_cd);
		
		gf_t_mc_car_mgmt.t_rec.del_flag			:= 'Y';
		
		gf_t_mc_car_mgmt.p_update;
	END;
	
END p_mc_car_no_mgmt;