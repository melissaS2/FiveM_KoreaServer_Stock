-- Package: smc.p_mc_trsp_cmp_mgmt

-- DROP PACKAGE p_mc_trsp_cmp_mgmt;

CREATE OR REPLACE PACKAGE p_mc_trsp_cmp_mgmt
IS
	/*******************************************************************************
	* PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	* -----------------------------------------------------------------------------
	* System Name      - MES SYSTEM
	* Sub_System Name  - SMC_MODULE
	* Program Name     - p_mc_trsp_cmp_mgmt
	* Description      - 업체 관리
	******************************************************************************/
	TYPE v_cur IS REF CURSOR;
	
	-- [SC4230] 운송업체 조회
	PROCEDURE p_sc4230_search(p_trsp_cmp_id character varying, OUT p_cur v_cur);
	-- [SC4230] 운송업체 조회
	PROCEDURE p_sc4230_detail(p_trsp_cmp_cd character varying, OUT p_cur v_cur);
	-- [SC4230] 운송업체 저장
	PROCEDURE p_sc4230_save(p_trsp_cmp_cd character varying, p_trsp_cmp_nm character varying, p_jqx_rs character varying, p_trsp_cmp_tp character varying, p_trsp_cmp_no character varying, p_owner_nm character varying, p_owner_email character varying, p_manager_nm character varying, p_manager_email character varying, p_tel_no1 character varying, p_tel_no2 character varying, p_tel_no3 character varying, p_fax_no1 character varying, p_fax_no2 character varying, p_fax_no3 character varying, p_mobile_no1 character varying, p_mobile_no2 character varying, p_mobile_no3 character varying, p_trsp_cmp_zipcode character varying, p_trsp_cmp_addr character varying, p_sms_send_yn character varying, p_sms_sender_nm character varying, p_sms_phone_no character varying, p_jqx_cb character varying);
	-- [SC4230] 운송업체 삭제
	PROCEDURE p_sc4230_delete(p_trsp_cmp_cd character varying);
	-- [SC4230] 운송업체 패스워드 초기화
	PROCEDURE p_sc4230_initpwd(p_trsp_cmp_cd character varying);
	
	-- [SC4231] 운송업체 조회
	PROCEDURE p_select_4231(p_trsp_cmp_cd character varying, p_trsp_cmp_nm character varying, OUT p_cur v_cur);
	-- [SC4231] 운송업체 저장
	PROCEDURE p_save_4231(p_trsp_cmp_cd character varying, p_trsp_sect_cd character varying, p_trsp_sect_nm character varying, p_del_flag character varying, p_jqx_rs character varying);
	-- [SC4231] 운송업체 삭제
	PROCEDURE p_delete_4231(p_trsp_cmp_cd character varying, p_trsp_sect_cd character varying);
	
	-- [SC4232] 운송업체 조회
	PROCEDURE p_select_4232(p_trsp_cmp_cd character varying, p_trsp_cmp_nm character varying, OUT p_cur v_cur);
	-- [SC4232] 운송업체 조회
	PROCEDURE p_select_4232_check(p_trsp_cmp_cd character varying, p_trsp_cmp_nm character varying, OUT p_cur v_cur);
	-- [SC4232] 운송업체 상세조회
	PROCEDURE p_select_4232_detail(p_trsp_cmp_cd character varying, p_trsp_contract_cd character varying, OUT p_cur v_cur);
	-- [SC4232] 운송업체 저장
	PROCEDURE p_save_4232(p_trsp_cmp_cd character varying, p_trsp_contract_cd character varying, p_contract_dt_sta character varying, p_contract_dt_end character varying, p_bulk_ton numeric);
	-- [SC4232] 운송업체 저장
	PROCEDURE p_save_4232_detail(p_trsp_cmp_cd character varying, p_trsp_contract_cd character varying, p_trsp_sect_seq numeric, p_trsp_tp character varying, p_disp_trsp_tp character varying, p_item_cd character varying, p_trsp_unit_cd character varying, p_disp_trsp_unit_cd character varying, p_trsp_sect_cd_sta character varying, p_trsp_sect_nm_sta character varying, p_trsp_sect_cd_end character varying, p_trsp_sect_nm_end character varying, p_trsp_amt character varying, p_car_wgt character varying, p_jqx_rs character varying);
	-- [SC4232] 운송업체 삭제
	PROCEDURE p_delete_4232(p_trsp_cmp_cd character varying, p_trsp_contract_cd character varying);
	-- [SC4232] 운송구간 삭제
	PROCEDURE p_delete_4232_detail(p_trsp_cmp_cd character varying, p_trsp_contract_cd character varying, p_trsp_sect_seq numeric);
	
	
	-- 4250 List 조회
	PROCEDURE p_select_4250(p_trsp_cmp_nm character varying, OUT p_cur v_cur);
	-- 4251 List 조회
	PROCEDURE p_select_4251(p_trsp_cmp_nm character varying, OUT p_cur v_cur);
	-- 4252 List 조회
	PROCEDURE p_select_4252(p_find_dt_fr character varying, p_find_dt_to character varying, p_trsp_cmp_nm character varying, p_car_id character varying, OUT p_cur v_cur);
	-- 4253 List 조회
	PROCEDURE p_select_4253(p_receiver_phone_no character varying, p_send_dt_fr character varying, p_send_dt_to character varying, OUT p_cur v_cur);

	PROCEDURE p_insert(p_receiver_phone_no character varying, p_sender_phone_no character varying, p_send_msg character varying, p_sms_wk_tp character varying, p_daemok_loc character varying);
	
END p_mc_trsp_cmp_mgmt;

CREATE OR REPLACE PACKAGE BODY p_mc_trsp_cmp_mgmt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_trsp_cmp_mgmt
 * Description      - 운송업체
 ******************************************************************************/

	--************************************************************************
	-- [SC4230] 운송업체 조회
	--************************************************************************
	PROCEDURE p_sc4230_search(p_trsp_cmp_id character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select A.trsp_cmp_cd 
				 , A.trsp_cmp_nm
				 , A.trsp_cmp_no 
				 , B.trsp_cmp_passwd 
				 , fc_yn_to_boolean(A.trsp_cmp_tp) as trsp_cmp_tp
				 , A.tel_no1||A.tel_no2||A.tel_no3 as TEL_NO
				 , A.tel_no1 
				 , A.tel_no2 
				 , A.tel_no3 
				 , A.manager_email 
				 , A.owner_nm 
				 , A.manager_nm 
				 , A.fax_no1 
				 , A.fax_no2 
				 , A.fax_no3 
				 , A.trsp_cmp_zipcode 
				 , A.trsp_cmp_address as trsp_cmp_addr
				 , A.owner_email 
				 , A.mobile_no1 
				 , A.mobile_no2 
				 , A.mobile_no3 
				 , fc_yn_to_boolean(A.sms_send_yn) as sms_send_yn
				 , A.sms_sender_nm 
				 , A.sms_phone_no 	
			  from t_mc_trsp_cmp_mgmt as A, 
				   (select trsp_cmp_cd
						 , trsp_cmp_passwd
						 , del_flag
					  from t_mc_trsp_cmp_login
					 where nvl(del_flag,'N') = 'N') B
			 where A.trsp_cmp_cd = B.trsp_cmp_cd(+)
			   and A.trsp_cmp_nm like '%'||p_trsp_cmp_id||'%'
			   and nvl(A.del_flag,'N') = 'N'
			 order by 1, 3;
	END;
	
	--************************************************************************
	-- [SC4230] 운송업체 조회
	--************************************************************************
	PROCEDURE p_sc4230_detail(p_trsp_cmp_cd character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select A.trsp_cmp_cd 
				 , A.trsp_cmp_nm
				 , A.trsp_cmp_no 
				 , B.trsp_cmp_passwd 
				 , fc_yn_to_boolean(nvl(A.trsp_cmp_tp,'N')) as trsp_cmp_tp
				 , A.tel_no1||A.tel_no2||A.tel_no3 
				 , A.tel_no1 
				 , A.tel_no2 
				 , A.tel_no3 
				 , A.manager_email 
				 , A.owner_nm 
				 , A.manager_nm 
				 , A.fax_no1 
				 , A.fax_no2 
				 , A.fax_no3 
				 , A.trsp_cmp_zipcode 
				 , A.trsp_cmp_address as trsp_cmp_addr
				 , A.owner_email 
				 , A.mobile_no1 
				 , A.mobile_no2 
				 , A.mobile_no3 
				 , fc_yn_to_boolean(nvl(A.sms_send_yn,'N')) as sms_send_yn
				 , A.sms_sender_nm 
				 , A.sms_phone_no 	
			  from t_mc_trsp_cmp_mgmt as A, 
				   (select trsp_cmp_cd
						 , trsp_cmp_passwd
						 , del_flag
					  from t_mc_trsp_cmp_login
					 where nvl(del_flag,'N') = 'N') B
			 where A.trsp_cmp_cd = B.trsp_cmp_cd(+)
			   and A.trsp_cmp_cd = p_trsp_cmp_cd
			   and nvl(A.del_flag,'N') = 'N'
			 order by 1, 3;
	END;

	--************************************************************************
	-- [SC4230] 운송업체 저장
	--************************************************************************

	PROCEDURE p_sc4230_save(p_trsp_cmp_cd character varying, p_trsp_cmp_nm character varying, p_jqx_rs character varying, p_trsp_cmp_tp character varying, p_trsp_cmp_no character varying, p_owner_nm character varying, p_owner_email character varying, p_manager_nm character varying, p_manager_email character varying, p_tel_no1 character varying, p_tel_no2 character varying, p_tel_no3 character varying, p_fax_no1 character varying, p_fax_no2 character varying, p_fax_no3 character varying, p_mobile_no1 character varying, p_mobile_no2 character varying, p_mobile_no3 character varying, p_trsp_cmp_zipcode character varying, p_trsp_cmp_addr character varying, p_sms_send_yn character varying, p_sms_sender_nm character varying, p_sms_phone_no character varying, p_jqx_cb character varying) IS
	    v_jqx_rs character varying(1);
		v_count number;
		v_comp_login_count number;
	BEGIN
		--운송업체 정보 조회
		select count(*) into v_count	
		  from t_mc_trsp_cmp_mgmt	
		 where trsp_cmp_cd = p_trsp_cmp_cd;

		IF v_count = 0 THEN
			GOTO P_INSERT;
		ELSE
			GOTO P_UPDATE;
		END IF;
		
		RETURN;
		
		<<P_UPDATE>>
		gf_t_mc_trsp_cmp_mgmt.p_select(p_trsp_cmp_cd);
		
		gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_no			:= p_trsp_cmp_no;
		gf_t_mc_trsp_cmp_mgmt.t_rec.owner_nm 			:= p_owner_nm;
		gf_t_mc_trsp_cmp_mgmt.t_rec.owner_email 		:= p_owner_email;
		gf_t_mc_trsp_cmp_mgmt.t_rec.manager_nm 			:= p_manager_nm;
		gf_t_mc_trsp_cmp_mgmt.t_rec.manager_email 		:= p_manager_email;
		gf_t_mc_trsp_cmp_mgmt.t_rec.tel_no1 			:= p_tel_no1;
		gf_t_mc_trsp_cmp_mgmt.t_rec.tel_no2 			:= p_tel_no2;
		gf_t_mc_trsp_cmp_mgmt.t_rec.tel_no3 			:= p_tel_no3;
		gf_t_mc_trsp_cmp_mgmt.t_rec.fax_no1 			:= p_fax_no1;
		gf_t_mc_trsp_cmp_mgmt.t_rec.fax_no2 			:= p_fax_no2;
		gf_t_mc_trsp_cmp_mgmt.t_rec.fax_no3 			:= p_fax_no3;
		gf_t_mc_trsp_cmp_mgmt.t_rec.mobile_no1 			:= p_mobile_no1;
		gf_t_mc_trsp_cmp_mgmt.t_rec.mobile_no2			:= p_mobile_no2;
		gf_t_mc_trsp_cmp_mgmt.t_rec.mobile_no3			:= p_mobile_no3;
		
		gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_zipcode 	:= p_trsp_cmp_zipcode;
		gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_address 	:= p_trsp_cmp_addr;
		gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_tp			:= nvl(p_trsp_cmp_tp,'N');
		gf_t_mc_trsp_cmp_mgmt.t_rec.sms_send_yn			:= p_sms_send_yn;
		gf_t_mc_trsp_cmp_mgmt.t_rec.sms_sender_nm		:= p_sms_sender_nm;
		gf_t_mc_trsp_cmp_mgmt.t_rec.sms_phone_no		:= p_sms_phone_no;
		
		gf_t_mc_trsp_cmp_mgmt.t_rec.del_flag			:= 'N';
		gf_t_mc_trsp_cmp_mgmt.p_update;
		
			select count(*) into v_comp_login_count			
			  from t_mc_trsp_cmp_login			
			 where trsp_cmp_cd = p_trsp_cmp_cd;
		
			IF v_comp_login_count = 0 THEN
				RETURN;
			ELSE
				GOTO P_LOGIN_UPDATE;
			END IF;
		
			<<P_LOGIN_UPDATE>>
			gf_t_mc_trsp_cmp_login.p_select(p_trsp_cmp_cd);
			
			gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_no 		:= p_trsp_cmp_no;
			gf_t_mc_trsp_cmp_login.t_rec.owner_nm 			:= p_owner_nm;
			gf_t_mc_trsp_cmp_login.t_rec.owner_email 		:= p_owner_email;
			gf_t_mc_trsp_cmp_login.t_rec.manager_nm 		:= p_manager_nm;
			gf_t_mc_trsp_cmp_login.t_rec.manager_email 		:= p_manager_email;
			gf_t_mc_trsp_cmp_login.t_rec.tel_no1 			:= p_tel_no1;
			gf_t_mc_trsp_cmp_login.t_rec.tel_no2 			:= p_tel_no2;
			gf_t_mc_trsp_cmp_login.t_rec.tel_no3 			:= p_tel_no3;
			gf_t_mc_trsp_cmp_login.t_rec.fax_no1 			:= p_fax_no1;
			gf_t_mc_trsp_cmp_login.t_rec.fax_no2 			:= p_fax_no2;
			gf_t_mc_trsp_cmp_login.t_rec.fax_no3 			:= p_fax_no3;
			gf_t_mc_trsp_cmp_login.t_rec.mobile_no1 		:= p_mobile_no1;
			gf_t_mc_trsp_cmp_login.t_rec.mobile_no2 		:= p_mobile_no2;
			gf_t_mc_trsp_cmp_login.t_rec.mobile_no3 		:= p_mobile_no3;
			gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_zipcode 	:= p_trsp_cmp_zipcode;
			gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_address 	:= p_trsp_cmp_addr;
			gf_t_mc_trsp_cmp_login.t_rec.del_flag 			:= 'N';
			
			gf_t_mc_trsp_cmp_login.p_update;
			RETURN;
		
		RETURN;
		
		<<P_INSERT>>
		/*gf_t_mc_trsp_cmp_mgmt.p_clear;
		
		gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_cd			:= p_trsp_cmp_cd;
		gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_nm			:= p_trsp_cmp_nm;
		gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_no			:= p_trsp_cmp_no;
		gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_passwd		:= p_trsp_cmp_cd; --password
		gf_t_mc_trsp_cmp_mgmt.t_rec.owner_nm			:= p_owner_nm;
		gf_t_mc_trsp_cmp_mgmt.t_rec.owner_email			:= p_owner_email;
		gf_t_mc_trsp_cmp_mgmt.t_rec.manager_nm			:= p_manager_nm;
		gf_t_mc_trsp_cmp_mgmt.t_rec.manager_email		:= p_manager_email;
		gf_t_mc_trsp_cmp_mgmt.t_rec.tel_no1				:= p_tel_no1;
		gf_t_mc_trsp_cmp_mgmt.t_rec.tel_no2				:= p_tel_no2;
		gf_t_mc_trsp_cmp_mgmt.t_rec.tel_no3				:= p_tel_no3;
		gf_t_mc_trsp_cmp_mgmt.t_rec.fax_no1				:= p_fax_no1;
		gf_t_mc_trsp_cmp_mgmt.t_rec.fax_no2				:= p_fax_no2;
		gf_t_mc_trsp_cmp_mgmt.t_rec.fax_no3				:= p_fax_no3;
		gf_t_mc_trsp_cmp_mgmt.t_rec.mobile_no1			:= p_mobile_no1;
		gf_t_mc_trsp_cmp_mgmt.t_rec.mobile_no2			:= p_mobile_no2;
		gf_t_mc_trsp_cmp_mgmt.t_rec.mobile_no3			:= p_mobile_no3;
		gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_zipcode	:= p_trsp_cmp_zipcode;
		gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_address	:= p_trsp_cmp_addr;
		gf_t_mc_trsp_cmp_mgmt.t_rec.del_flag 			:= 'N';
		gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_tp			:= nvl(p_trsp_cmp_tp,'N');
		gf_t_mc_trsp_cmp_mgmt.t_rec.sms_send_yn			:= p_sms_send_yn;
		gf_t_mc_trsp_cmp_mgmt.t_rec.sms_sender_nm		:= p_sms_sender_nm;
		gf_t_mc_trsp_cmp_mgmt.t_rec.sms_phone_no		:= p_sms_phone_no;
		
		gf_t_mc_trsp_cmp_mgmt.p_insert;
		
			select count(*) into v_comp_login_count			
			  from T_MC_trsp_cmp_login			
			 where trsp_cmp_cd = p_trsp_cmp_cd;
			 
			 IF v_comp_login_count = 0 THEN
				GOTO P_LOGIN_INSERT;
			ELSE
				RETURN;
			END IF;
			
			<<P_LOGIN_INSERT>>
			gf_t_mc_trsp_cmp_login.p_clear;
			
			gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_cd 		:= p_trsp_cmp_cd;
			gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_nm 		:= p_trsp_cmp_nm;
			gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_no 		:= p_trsp_cmp_no;
			gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_passwd 	:= p_trsp_cmp_passwd;
			gf_t_mc_trsp_cmp_login.t_rec.owner_nm 			:= p_owner_nm;
			gf_t_mc_trsp_cmp_login.t_rec.owner_email 		:= p_owner_email;
			gf_t_mc_trsp_cmp_login.t_rec.manager_nm 		:= p_manager_nm;
			gf_t_mc_trsp_cmp_login.t_rec.manager_email 		:= p_manager_email;
			gf_t_mc_trsp_cmp_login.t_rec.tel_no1 			:= p_tel_no1;
			gf_t_mc_trsp_cmp_login.t_rec.tel_no2 			:= p_tel_no2;
			gf_t_mc_trsp_cmp_login.t_rec.tel_no3 			:= p_tel_no3;
			gf_t_mc_trsp_cmp_login.t_rec.fax_no1 			:= p_fax_no1;
			gf_t_mc_trsp_cmp_login.t_rec.fax_no2 			:= p_fax_no2;
			gf_t_mc_trsp_cmp_login.t_rec.fax_no3 			:= p_fax_no3;
			gf_t_mc_trsp_cmp_login.t_rec.mobile_no1 		:= p_mobile_no1;
			gf_t_mc_trsp_cmp_login.t_rec.mobile_no2 		:= p_mobile_no2;
			gf_t_mc_trsp_cmp_login.t_rec.mobile_no3 		:= p_mobile_no3;
			gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_zipcode 	:= p_trsp_cmp_zipcode;
			gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_address 	:= p_trsp_cmp_addr;
			gf_t_mc_trsp_cmp_login.t_rec.del_flag 			:= 'N';
			
			gf_t_mc_trsp_cmp_login.p_insert;
			RETURN;*/
			
 		RETURN;
	END;

	--************************************************************************
	-- [SC4230] 운송업체 삭제
	--************************************************************************
	PROCEDURE p_sc4230_delete(p_trsp_cmp_cd character varying) IS
	BEGIN
		gf_t_mc_trsp_cmp_mgmt.p_select(p_trsp_cmp_cd);
		
		gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_cd			:= p_trsp_cmp_cd;
		gf_t_mc_trsp_cmp_mgmt.t_rec.del_flag			:= 'Y';
		gf_t_mc_trsp_cmp_mgmt.p_update;
			   
		--login
		gf_t_mc_trsp_cmp_login.p_select(p_trsp_cmp_cd);
			
		gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_cd 		:= p_trsp_cmp_cd;
		gf_t_mc_trsp_cmp_login.t_rec.del_flag 			:= 'Y';
			
		gf_t_mc_trsp_cmp_login.p_update;
	END;
	
	--************************************************************************
	-- [SC4230] 비밀번호 초기화
	--************************************************************************
	PROCEDURE p_sc4230_initpwd(p_trsp_cmp_cd character varying) IS
		v_count number;
	BEGIN
		select count(*) into v_count		
		  from t_mc_trsp_cmp_mgmt		
		 where trsp_cmp_cd = p_trsp_cmp_cd		
		   and nvl(del_flag,'N') = 'N';
		   
		IF v_count = 0 THEN
			RETURN;
		ELSE
			GOTO P_PWD_INIT;
		END IF;
	
		<<P_PWD_INIT>>
		gf_t_mc_trsp_cmp_login.p_select(p_trsp_cmp_cd);
			
		gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_cd 		:= p_trsp_cmp_cd;
		gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_passwd 	:= p_trsp_cmp_cd;
		gf_t_mc_trsp_cmp_login.t_rec.del_flag 			:= 'N';
			
		gf_t_mc_trsp_cmp_login.p_update;
	END;
	
	--************************************************************************
	-- [SC4231] 운송업체 조회
	--************************************************************************
	PROCEDURE p_select_4231(p_trsp_cmp_cd character varying, p_trsp_cmp_nm character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select a.trsp_cmp_cd as trsp_cmp_cd 
			, b.trsp_cmp_nm as trsp_cmp_nm
			, a.trsp_sect_cd as trsp_sect_cd
			, a.trsp_sect_nm as trsp_sect_nm
			from t_mc_trsp_sect_mgmt a,
				t_mc_trsp_cmp_mgmt b
			where a.trsp_cmp_cd = b.trsp_cmp_cd (+)
				and b.trsp_cmp_nm like '%' || p_trsp_cmp_nm || '%'
				and nvl(a.del_flag, 'N') = 'N'
				and nvl(b.del_flag, 'N') = 'N'
				order by 1,3;
	END;
	
	--************************************************************************
	-- [SC4231] 운송업체 저장
	--************************************************************************
	PROCEDURE p_save_4231(p_trsp_cmp_cd character varying, p_trsp_sect_cd character varying, p_trsp_sect_nm character varying, p_del_flag character varying, p_jqx_rs character varying) IS
	BEGIN
		CASE p_jqx_rs
			WHEN 'U' THEN
				GOTO P_UPDATE;
			WHEN 'I' THEN
				GOTO P_INSERT;
		END CASE;
		
		<<P_UPDATE>>
			gf_t_mc_trsp_sect_mgmt.p_select(p_trsp_cmp_cd, p_trsp_sect_cd);
		
			gf_t_mc_trsp_sect_mgmt.t_rec.del_flag = 'N';
			
			gf_t_mc_trsp_sect_mgmt.p_update;
		RETURN;
		
		<<P_INSERT>>
		gf_t_mc_trsp_sect_mgmt.p_clear;
		
		gf_t_mc_trsp_sect_mgmt.t_rec.trsp_cmp_cd := p_trsp_cmp_cd;
		gf_t_mc_trsp_sect_mgmt.t_rec.trsp_sect_cd := p_trsp_sect_cd;
		gf_t_mc_trsp_sect_mgmt.t_rec.trsp_sect_nm := p_trsp_sect_nm;
		gf_t_mc_trsp_sect_mgmt.t_rec.del_flag := 'N';
			
		gf_t_mc_trsp_sect_mgmt.p_insert;
		
		RETURN;
	END;
	
	--************************************************************************
	-- [SC4231] 운송업체 삭제
	--************************************************************************
	PROCEDURE p_delete_4231(p_trsp_cmp_cd character varying, p_trsp_sect_cd character varying) IS
	BEGIN
		update t_mc_trsp_sect_mgmt
			set del_flag = 'Y'
			where trsp_cmp_cd = p_trsp_cmp_cd
				and trsp_sect_cd = p_trsp_sect_cd;
	END;
	
	--************************************************************************
	-- [SC4232] 운송업체 조회
	--************************************************************************
	PROCEDURE p_select_4232(p_trsp_cmp_cd character varying, p_trsp_cmp_nm character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select b.trsp_cmp_nm as trsp_cmp_nm
				, to_char(to_date(a.contract_dt_sta, 'yyyymmdd'), 'yyyy-mm-dd') as contract_dt_sta
				, to_char(to_date(a.contract_dt_end, 'yyyymmdd'), 'yyyy-mm-dd') as contract_dt_end
				, to_char(to_date(a.regist_dt, 'yyyymmdd'), 'yyyy-mm-dd') as regist_dt
				, a.trsp_cmp_cd as trsp_cmp_cd
				, a.trsp_contract_cd as trsp_contract_cd
				, 'OK' as valid_flag
				, a.container_ton as container_ton
				, a.bulk_ton as bulk_ton
			from t_mc_trsp_contract a,
				t_mc_trsp_cmp_mgmt b,
				(select trsp_cmp_cd
				, max(trsp_contract_cd) as trsp_contract_cd
				from t_mc_trsp_contract 
				where nvl(del_flag, 'N') = 'N'
				group by trsp_cmp_cd) c
			where a.trsp_cmp_cd = b.trsp_cmp_cd
				and b.trsp_cmp_nm like '%' || p_trsp_cmp_nm || '%'
				and nvl(a.del_flag, 'N') = 'N'
				and nvl(b.del_flag, 'N') = 'N'
				and sysdate < to_date(a.contract_dt_end)
				and a.trsp_cmp_cd = c.trsp_cmp_cd
				and a.trsp_contract_cd = c.trsp_contract_cd
			order by a.trsp_cmp_cd, a.contract_dt_sta desc;
	END;
	
	--************************************************************************
	-- [SC4232] 운송업체 체크 조회
	--************************************************************************
	PROCEDURE p_select_4232_check(p_trsp_cmp_cd character varying, p_trsp_cmp_nm character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select b.trsp_cmp_nm
				, to_char(to_date(a.contract_dt_sta, 'yyyymmdd'),'yyyy-mm-dd') as contract_dt_sta
				, to_char(to_date(a.contract_dt_end, 'yyyymmdd'),'yyyy-mm-dd') as contract_dt_end
				, to_char(to_date(a.regist_dt, 'yyyymmdd'),'yyyy-mm-dd') as regist_dt
				, a.trsp_cmp_cd as trsp_cmp_cd
				, a.trsp_contract_cd as trsp_contract_cd
				, case when sysdate < to_date(a.contract_dt_end) then 'OK' else '' end as valid_flag
				, a.container_ton as container_ton
				, a.bulk_ton as bulk_ton
			from t_mc_trsp_contract a,
				t_mc_trsp_cmp_mgmt b
			where a.trsp_cmp_cd = b.trsp_cmp_cd
				and b.trsp_cmp_nm like '%' || p_trsp_cmp_nm || '%'
				and nvl(a.del_flag, 'N') = 'N'
				and nvl(a.del_flag, 'N') = 'N'
			order by a.trsp_cmp_cd , a.contract_dt_sta desc;
	END;
	
	--************************************************************************
	-- [SC4232] 운송업체 상세조회
	--************************************************************************
	PROCEDURE p_select_4232_detail(p_trsp_cmp_cd character varying, p_trsp_contract_cd character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select a.trsp_tp_nm as trsp_tp_nm
			, a.item_cd as item_cd
			, a.trsp_sect_nm_sta as trsp_sect_nm_sta
			, a.trsp_sect_nm_end as trsp_sect_nm_end
			, a.trsp_amt as trsp_amt
			, b.item_nm as item_nm
			, a.trsp_tp as trsp_tp
			, a.trsp_tp_nm as trsp_tp_nm
			, a.trsp_unit_cd as trsp_unit_cd
			, a.trsp_unit_nm as trsp_unit_nm
			, a.trsp_sect_cd_sta as trsp_sect_cd_sta
			, a.trsp_sect_cd_end as trsp_sect_cd_end
			, a.car_wgt as car_wgt
			, a.trsp_sect_seq as trsp_sect_seq
			from t_mc_trsp_sect_dtl a,
				t_mc_item_mgmt b
			where a.item_cd = b.item_cd
				and nvl(a.del_flag, 'N') = 'N'
				and nvl(b.del_flag, 'N') = 'N'
				and a.trsp_contract_cd = p_trsp_contract_cd
				and a.trsp_cmp_cd = p_trsp_cmp_cd
			order by a.item_cd, a.trsp_unit_cd, a.trsp_sect_cd_sta;
	END;
	
	--************************************************************************
	-- [SC4232] 운송업체 저장
	--************************************************************************
	PROCEDURE p_save_4232(p_trsp_cmp_cd character varying, p_trsp_contract_cd character varying, p_contract_dt_sta character varying, p_contract_dt_end character varying, p_bulk_ton numeric) IS
	v_contract_cd character varying(10);
	v_jqx_rs character varying(1);
	v_chk_rslt boolean;
	BEGIN
		v_contract_cd := '10000';
		
	    --check vaildation
		v_chk_rslt := gf_t_mc_trsp_contract.f_rowexist(p_trsp_cmp_cd, v_contract_cd);
		
		if v_chk_rslt then
			v_jqx_rs := 'U';
		else
			v_jqx_rs := 'I';
		end if;
		
		CASE v_jqx_rs
			WHEN 'U' THEN
				GOTO P_UPDATE;
			WHEN 'I' THEN
				GOTO P_INSERT;
		END CASE;
		
		RETURN;	
		
		<<P_UPDATE>>
			gf_t_mc_trsp_contract.p_select(p_trsp_contract_cd, p_trsp_cmp_cd);
			
			gf_t_mc_trsp_contract.t_rec.contract_dt_sta = p_contract_dt_sta;
			gf_t_mc_trsp_contract.t_rec.contract_dt_end = p_contract_dt_end;
			gf_t_mc_trsp_contract.t_rec.container_ton = nvl(p_bulk_ton, 27);
			gf_t_mc_trsp_contract.t_rec.bulk_ton = nvl(p_bulk_ton, 27);
			gf_t_mc_trsp_contract.t_rec.del_flag = 'N';
			
			gf_t_mc_trsp_contract.p_update;
		RETURN;
		
		<<P_INSERT>>
		
		if gf_t_mc_trsp_contract.f_rowexist(p_trsp_contract_cd,p_trsp_cmp_cd) then
			gf_t_mc_trsp_contract.p_select(p_trsp_contract_cd, p_trsp_cmp_cd);
			
			gf_t_mc_trsp_contract.t_rec.contract_dt_sta = p_contract_dt_sta;
			gf_t_mc_trsp_contract.t_rec.contract_dt_end = p_contract_dt_end;
			gf_t_mc_trsp_contract.t_rec.container_ton = nvl(p_bulk_ton, 27);
			gf_t_mc_trsp_contract.t_rec.bulk_ton = nvl(p_bulk_ton, 27);
			gf_t_mc_trsp_contract.t_rec.del_flag = 'N';
			
			gf_t_mc_trsp_contract.p_update;
		
		else
			gf_t_mc_trsp_sect_mgmt.p_clear;
		
			gf_t_mc_trsp_contract.t_rec.trsp_contract_cd = v_contract_cd;
			gf_t_mc_trsp_contract.t_rec.trsp_cmp_cd = p_trsp_cmp_cd;
			gf_t_mc_trsp_contract.t_rec.regist_dt = to_char(sysdate,'yyyymmdd');
			gf_t_mc_trsp_contract.t_rec.contract_dt_sta = p_contract_dt_sta;
			gf_t_mc_trsp_contract.t_rec.contract_dt_end = p_contract_dt_end;
			gf_t_mc_trsp_contract.t_rec.container_ton = nvl(p_bulk_ton, 27);
			gf_t_mc_trsp_contract.t_rec.bulk_ton = nvl(p_bulk_ton, 27);
			gf_t_mc_trsp_contract.t_rec.del_flag := 'N';
			
			gf_t_mc_trsp_contract.p_insert;
		end if;
		RETURN;
	END;
	
	--************************************************************************
	-- [SC4232] 운송구간 저장
	--************************************************************************
	PROCEDURE p_save_4232_detail(p_trsp_cmp_cd character varying, p_trsp_contract_cd character varying, p_trsp_sect_seq numeric, p_trsp_tp character varying, p_disp_trsp_tp character varying, p_item_cd character varying, p_trsp_unit_cd character varying, p_disp_trsp_unit_cd character varying, p_trsp_sect_cd_sta character varying, p_trsp_sect_nm_sta character varying, p_trsp_sect_cd_end character varying, p_trsp_sect_nm_end character varying, p_trsp_amt character varying, p_car_wgt character varying, p_jqx_rs character varying) IS
 	v_sect_seq numeric(22);
	BEGIN
		CASE p_jqx_rs
			WHEN 'U' THEN
				GOTO P_UPDATE;
			WHEN 'I' THEN
				GOTO P_INSERT;
		END CASE;
		
		<<P_UPDATE>>
		gf_t_mc_trsp_sect_dtl.p_select(p_trsp_contract_cd, p_trsp_cmp_cd, p_trsp_sect_seq);
		
		gf_t_mc_trsp_sect_dtl.t_rec.car_wgt = p_car_wgt;
		gf_t_mc_trsp_sect_dtl.t_rec.trsp_amt = p_trsp_amt;
		gf_t_mc_trsp_sect_dtl.t_rec.del_flag = 'N';
		
		gf_t_mc_trsp_sect_dtl.p_update;
		RETURN;
		
		<<P_INSERT>>
		if gf_t_mc_trsp_sect_dtl.f_rowexist(p_trsp_contract_cd, p_trsp_cmp_cd, p_trsp_sect_seq) then 
			gf_t_mc_trsp_sect_dtl.p_select(p_trsp_contract_cd, p_trsp_cmp_cd, p_trsp_sect_seq);
		
			gf_t_mc_trsp_sect_dtl.t_rec.car_wgt = p_car_wgt;
			gf_t_mc_trsp_sect_dtl.t_rec.trsp_amt = p_trsp_amt;
			gf_t_mc_trsp_sect_dtl.t_rec.del_flag = 'N';
		
			gf_t_mc_trsp_sect_dtl.p_update;		
		else
			select nvl(max(trsp_sect_seq), 0)+1 into v_sect_seq
			from t_mc_trsp_sect_dtl;
			
			gf_t_mc_trsp_sect_dtl.p_clear;
			gf_t_mc_trsp_sect_dtl.t_rec.trsp_contract_cd = p_trsp_contract_cd;
			gf_t_mc_trsp_sect_dtl.t_rec.trsp_cmp_cd = p_trsp_cmp_cd;
			gf_t_mc_trsp_sect_dtl.t_rec.trsp_sect_seq = v_sect_seq;
			gf_t_mc_trsp_sect_dtl.t_rec.trsp_tp = p_trsp_tp;
			gf_t_mc_trsp_sect_dtl.t_rec.trsp_tp_nm = p_disp_trsp_tp;
			gf_t_mc_trsp_sect_dtl.t_rec.item_cd = p_item_cd;
			gf_t_mc_trsp_sect_dtl.t_rec.trsp_unit_cd = p_trsp_unit_cd;
			gf_t_mc_trsp_sect_dtl.t_rec.trsp_unit_nm = p_disp_trsp_unit_cd;
			gf_t_mc_trsp_sect_dtl.t_rec.trsp_sect_cd_sta = p_trsp_sect_cd_sta;
			gf_t_mc_trsp_sect_dtl.t_rec.trsp_sect_nm_sta = p_trsp_sect_nm_sta;
			gf_t_mc_trsp_sect_dtl.t_rec.trsp_sect_cd_end = p_trsp_sect_cd_end;
			gf_t_mc_trsp_sect_dtl.t_rec.trsp_sect_nm_end = p_trsp_sect_nm_end;
			gf_t_mc_trsp_sect_dtl.t_rec.trsp_amt = p_trsp_amt;
			gf_t_mc_trsp_sect_dtl.t_rec.car_wgt = p_car_wgt;
			gf_t_mc_trsp_sect_dtl.t_rec.del_flag = 'N';
			
			gf_t_mc_trsp_sect_dtl.p_insert;
		end if;
		RETURN;
	END;
	--************************************************************************
	-- [SC4232] 운송업체 삭제
	--************************************************************************
	PROCEDURE p_delete_4232(p_trsp_cmp_cd character varying, p_trsp_contract_cd character varying) IS
	BEGIN
		update t_mc_trsp_contract
		set del_flag = 'N'
		where trsp_contract_cd = p_trsp_contract_cd
			and trsp_cmp_cd = p_trsp_cmp_cd;
	END;
	
	--************************************************************************
	-- [SC4232] 운송구간 삭제
	--************************************************************************
	PROCEDURE p_delete_4232_detail(p_trsp_cmp_cd character varying, p_trsp_contract_cd character varying, p_trsp_sect_seq numeric) IS
	BEGIN
		delete from t_mc_trsp_sect_dtl
		where trsp_contract_cd = p_trsp_contract_cd
			and trsp_cmp_Cd = p_trsp_cmp_cd
			and trsp_sect_seq = p_trsp_sect_seq;
	END;
	
	--************************************************************************
	-- 4250 LIST 조회
	--************************************************************************
	PROCEDURE p_select_4250(p_trsp_cmp_nm character varying, OUT p_cur v_cur) IS
	BEGIN
	OPEN P_CUR FOR
		select trsp_cmp_cd,
		trsp_cmp_nm,
		scom.fc_cd_nm('TRSP_CMP_TP',trsp_cmp_tp) as trsp_cmp_tp_nm ,
		manager_nm,
		mobile_no1,
		mobile_no2,
		mobile_no3,
		mobile_no1||''||mobile_no2||''||mobile_no3 as PHONE
		from T_MC_TRSP_CMP_MGMT
		where trsp_cmp_nm like '%'||p_trsp_cmp_nm||'%'	
		and nvl(del_flag,'N') = 'N'
		order by 1, 3;
	END;


	--************************************************************************
	-- 4251 LIST 조회
	--************************************************************************
	PROCEDURE p_select_4251(p_trsp_cmp_nm character varying, OUT p_cur v_cur) IS
	BEGIN
	OPEN P_CUR FOR
    	select 
		trsp_cmp_cd,
		trsp_cmp_nm,
		sms_sender_nm,
		sms_phone_no
		from T_MC_TRSP_CMP_MGMT
		where trsp_cmp_nm like '%' || p_trsp_cmp_nm || '%'
		and sms_send_yn = 'Y'
		and nvl(del_flag, 'N') = 'N'
		order by 1, 3;
	END;

	PROCEDURE p_select_4252(p_find_dt_fr character varying, p_find_dt_to character varying, p_trsp_cmp_nm character varying, p_car_id character varying, OUT p_cur v_cur) IS
	BEGIN
	OPEN P_CUR FOR
	--************************************************************************
	-- 4252 LIST 조회
	--************************************************************************
	select p_mc_utils.f_driver_phone(car_id, driver_nm)            as hand_phone_no,
    speeding_dt,
    speeding_tm,
    trsp_cmp_nm,
    car_id,
    driver_nm,
    speeding_place,
    speeding_tp_nm,
    speeding_action_tp,
    scom.fc_cd_nm('SPEEDING_ACTION_TP', speeding_action_tp) as speeding_action
	from t_mc_car_speeding
	where speeding_dt between p_find_dt_fr and p_find_dt_to
  	and trsp_cmp_nm like '%' || p_trsp_cmp_nm || '%'
  	and car_id like '%' || p_car_id || '%'
	order by speeding_dt, speeding_tm;
	END;


	PROCEDURE p_select_4253(p_receiver_phone_no character varying, p_send_dt_fr character varying, p_send_dt_to character varying, OUT p_cur v_cur) IS
	BEGIN
	OPEN P_CUR FOR
	
	--************************************************************************
	-- 4253 LIST 조회
	--************************************************************************
	select sms_wk_tp
     , send_dtm
     , receiver_phone_no
     , sender_phone_no
     , scom.fc_user_nm(send_emp_id) sender_nm
     , send_msg
	from t_mc_sms
	where send_dtm between p_send_dt_fr||'000000' and p_send_dt_to||'235959'
    and receiver_phone_no like '%'|| p_receiver_phone_no ||'%';
	END;


PROCEDURE p_insert(p_receiver_phone_no character varying, p_sender_phone_no character varying, p_send_msg character varying, p_sms_wk_tp character varying, p_daemok_loc character varying) IS
	maxseq character varying;
	BEGIN

	select nvl(max(send_seq)+1,0) into maxseq from t_mc_sms;

	gf_t_mc_sms.p_clear;

	gf_t_mc_sms.t_rec.send_dtm 		:= to_char(sysdate,'yyyymmddhh24miss');
	gf_t_mc_sms.t_rec.send_seq 		:= maxseq;
	gf_t_mc_sms.t_rec.send_sts 	    := 1;
	gf_t_mc_sms.t_rec.msg_tp   		    := 0;
	gf_t_mc_sms.t_rec.receiver_phone_no    		    := p_receiver_phone_no;
	gf_t_mc_sms.t_rec.sender_phone_no  			    := p_sender_phone_no;
	gf_t_mc_sms.t_rec.send_msg 	    := p_send_msg;
	gf_t_mc_sms.t_rec.send_sys_nm  		    := 'MES운송창고';
	gf_t_mc_sms.t_rec.send_emp_id  		    := scom.get_user_id();
	gf_t_mc_sms.t_rec.sms_wk_tp    		    := CASE p_sms_wk_tp WHEN 'S' THEN p_daemok_loc ELSE null END;

	gf_t_mc_sms.p_insert;
	return;
END;
END p_mc_trsp_cmp_mgmt;