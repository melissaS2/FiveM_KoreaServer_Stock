-- Package: smc.p_mc_vendor_mgmt

-- DROP PACKAGE p_mc_vendor_mgmt;

CREATE OR REPLACE PACKAGE p_mc_vendor_mgmt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_vendor_mgmt
 * Description      - 거래처 관리
 ******************************************************************************/
	TYPE v_cur IS REF CURSOR;

	-- [SC4210] Vendor List 조회
	PROCEDURE p_sc4210_search(p_vendor_nm character varying, OUT p_cur v_cur);
	
	-- [SC4210] Vendor List 저장 
	PROCEDURE p_sc4210_save(p_vendor_cd character varying, p_inout_tp character varying, p_vendor_nm character varying, p_del_flag character varying, p_wgt_over_yn character varying, p_jqx_rs character varying);
	
	-- [SC4210] Vendor List 신규 저장 
	PROCEDURE p_sc4210_save_non(p_vendor_nm character varying);
	
	-- [SC4210]  Vendor List 삭제
	PROCEDURE p_sc4210_delete(p_vendor_cd character varying, p_inout_tp character varying);

	-- [SC4211] Vendor List 조회
	PROCEDURE p_sc4211_search(p_sub_vendor_nm character varying, p_trsp_cmp_nm character varying, OUT p_cur v_cur);
	
	-- [SC4211] Vendor List 저장
	PROCEDURE p_sc4211_save(p_vendor_cd character varying, p_sub_vendor_cd character varying, p_sub_vendor_nm character varying, p_trsp_cmp_cd character varying, p_del_flag character varying, p_trsp_cmp_nm character varying, p_trsp_poa_no character varying, p_poa_sta_dt character varying, p_poa_end_dt character varying, p_jqx_rs character varying);
	
	-- [SC4211] Vendor List 삭제
	PROCEDURE p_sc4211_delete(p_vendor_cd character varying, p_sub_vendor_cd character varying, p_trsp_cmp_cd character varying);
	
	-- [SC4212] Vendor List 조회
	PROCEDURE p_sc4212_search(p_vendor_id character varying, OUT p_cur v_cur);
	
	-- [SC4212] Vendor List 삭제
	PROCEDURE p_sc4212_delete(p_vendor_cd character varying, p_dmnd_cmp_cd character varying);
	
	-- [SC4212] Vendor List 저장
	PROCEDURE p_sc4212_save(p_vendor_cd character varying, p_vendor_nm character varying, p_dmnd_cmp_cd character varying, p_dmnd_cmp_nm character varying, p_dmnd_cmp_info character varying, p_jqx_rs character varying);
	
	-- [SC4213]  Vendor popup 조회
	PROCEDURE p_sc4213_search_supplier(p_vendor_cd character varying, p_inout_tp character varying, p_vendor_nm character varying, OUT p_cur v_cur);
	
	-- [SC4213]  Vendor popup 조회
	PROCEDURE p_sc4213_search_cust(p_vendor_cd character varying, p_inout_tp character varying, p_vendor_nm character varying, OUT p_cur v_cur);
END p_mc_vendor_mgmt;

CREATE OR REPLACE PACKAGE BODY p_mc_vendor_mgmt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_item_mgmt
 * Description      - Vendor 관리
 ******************************************************************************/

	--************************************************************************
	-- [SC4210] Vendor LIST 조회
	--************************************************************************
	PROCEDURE p_sc4210_search(p_vendor_nm character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
		    select 
				inout_tp,
				vendor_cd,
				vendor_nm,
				scom.fc_cd_nm('INOUT_TP', inout_tp) as inout_nm,
				fc_yn_to_boolean(wgt_over_yn) as wgt_over_yn
			from t_mc_vendor_mgmt
			where nvl(del_flag,'N') = 'N'
			and vendor_nm like '%'|| p_vendor_nm ||'%'
			order by vendor_nm;
	END;
	
	--************************************************************************
	-- [SC4210] Vendor save
	--************************************************************************
	PROCEDURE p_sc4210_save(p_vendor_cd character varying, p_inout_tp character varying, p_vendor_nm character varying, p_del_flag character varying, p_wgt_over_yn character varying, p_jqx_rs character varying) IS
	BEGIN
	    CASE p_jqx_rs
			WHEN 'U' THEN
				GOTO P_UPDATE;
			WHEN 'I' THEN
				GOTO P_INSERT;
		END CASE;
		
		<<P_UPDATE>>
    		gf_t_mc_vendor_mgmt.p_select(p_vendor_cd, p_inout_tp);
		
    		gf_t_mc_vendor_mgmt.t_rec.wgt_over_yn := p_wgt_over_yn;
    		gf_t_mc_vendor_mgmt.t_rec.del_flag := 'N';
			
    		gf_t_mc_vendor_mgmt.p_update;

		RETURN;
		
		<<P_INSERT>>
				
		if  gf_t_mc_vendor_mgmt.f_rowexist(p_vendor_cd, p_inout_tp) then 
		    gf_t_mc_vendor_mgmt.p_select(p_vendor_cd, p_inout_tp);
		
    		gf_t_mc_vendor_mgmt.t_rec.vendor_nm := p_vendor_nm;
    		gf_t_mc_vendor_mgmt.t_rec.wgt_over_yn := p_wgt_over_yn;
    		gf_t_mc_vendor_mgmt.t_rec.del_flag := 'N';
			
    		gf_t_mc_vendor_mgmt.p_update;
		
		else
		
		    gf_t_mc_vendor_mgmt.p_clear;
		
		    gf_t_mc_vendor_mgmt.t_rec.vendor_cd := p_vendor_cd;
		    gf_t_mc_vendor_mgmt.t_rec.inout_tp := p_inout_tp;
		    gf_t_mc_vendor_mgmt.t_rec.vendor_nm := p_vendor_nm;
			gf_t_mc_vendor_mgmt.t_rec.wgt_over_yn := p_wgt_over_yn;
			gf_t_mc_vendor_mgmt.t_rec.del_flag := 'N';
		
			gf_t_mc_vendor_mgmt.p_insert;
			
			-- 운송업체 추가
			if  gf_t_mc_trsp_cmp_mgmt.f_rowexist(p_vendor_cd) then 
				gf_t_mc_trsp_cmp_mgmt.p_select(p_vendor_cd);
		
    			gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_nm := p_vendor_nm;
    			gf_t_mc_trsp_cmp_mgmt.t_rec.del_flag := 'N';
			
    			gf_t_mc_trsp_cmp_mgmt.p_update;
			else
				gf_t_mc_trsp_cmp_mgmt.p_clear;
		
		    	gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_cd := p_vendor_cd;
		    	gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_nm := p_vendor_nm;
				gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_tp := 'N';
				gf_t_mc_trsp_cmp_mgmt.t_rec.del_flag    := 'N';
		
				gf_t_mc_trsp_cmp_mgmt.p_insert;
			end if;
			
			-- 운송업체 로그인 추가
			if  gf_t_mc_trsp_cmp_login.f_rowexist(p_vendor_cd) then 
			    scom.pkg_error.pr_set_error('1');
				gf_t_mc_trsp_cmp_login.p_select(p_vendor_cd);
		
    			gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_nm := p_vendor_nm;
    			gf_t_mc_trsp_cmp_login.t_rec.del_flag := 'N';
			
    			gf_t_mc_trsp_cmp_login.p_update;
			else
			    scom.pkg_error.pr_set_error('2');
				gf_t_mc_trsp_cmp_login.p_clear;
		
		    	gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_cd     := p_vendor_cd;
		    	gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_nm     := p_vendor_nm;
				gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_passwd := p_vendor_cd;
				gf_t_mc_trsp_cmp_login.t_rec.del_flag        := 'N';
		
				gf_t_mc_trsp_cmp_login.p_insert;
			end if;
			
		end if;
		RETURN;
	END;
	
	--************************************************************************
	-- [SC4210] Vendor save non VendorCd
	--************************************************************************
	PROCEDURE p_sc4210_save_non(p_vendor_nm character varying) IS	
		v_vendor_cd_new character varying(6);
	BEGIN
	
	    select 'U'||lpad(to_number(nvl(substr(max(vendor_cd),-4),'0')) + 1, 4, '0')
          into v_vendor_cd_new 
          from t_mc_vendor_mgmt where vendor_cd like 'U0%';		
	
	    gf_t_mc_vendor_mgmt.p_clear;
		
		gf_t_mc_vendor_mgmt.t_rec.vendor_cd := v_vendor_cd_new;
		gf_t_mc_vendor_mgmt.t_rec.inout_tp := '2';
		gf_t_mc_vendor_mgmt.t_rec.vendor_nm := p_vendor_nm;
		gf_t_mc_vendor_mgmt.t_rec.wgt_over_yn := 'N';
 		gf_t_mc_vendor_mgmt.t_rec.del_flag := 'N';
		
		gf_t_mc_vendor_mgmt.p_insert;
		
		--운송업체 추가
		gf_t_mc_trsp_cmp_mgmt.p_clear;
		
	    gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_cd := v_vendor_cd_new;
	    gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_nm := p_vendor_nm;
		gf_t_mc_trsp_cmp_mgmt.t_rec.trsp_cmp_tp := 'N';
		gf_t_mc_trsp_cmp_mgmt.t_rec.del_flag    := 'N';
		
		gf_t_mc_trsp_cmp_mgmt.p_insert;
		
		--운송업체 로그인 추가
		gf_t_mc_trsp_cmp_login.p_clear;
		
	    gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_cd     := v_vendor_cd_new;
	    gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_nm     := p_vendor_nm;
		gf_t_mc_trsp_cmp_login.t_rec.trsp_cmp_passwd := v_vendor_cd_new;
		gf_t_mc_trsp_cmp_login.t_rec.del_flag        := 'N';
		
		gf_t_mc_trsp_cmp_login.p_insert;
		
	    RETURN;
	END;

	--************************************************************************
	-- [SC4210] Vendor 삭제
	--************************************************************************
	PROCEDURE p_sc4210_delete(p_vendor_cd character varying, p_inout_tp character varying) IS
	BEGIN
		update t_mc_vendor_mgmt
		set del_flag = 'Y'
		where vendor_cd = p_vendor_cd
		and inout_tp = p_inout_tp;
	END;
	
	--************************************************************************
	-- [SC4211] Vendor List 조회
	--************************************************************************
	PROCEDURE p_sc4211_search(p_sub_vendor_nm character varying, p_trsp_cmp_nm character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
		    select 
			       a.vendor_cd as vendor_cd
		 	     , p_mc_utils.f_vendor_nm(a.vendor_cd) as vendor_nm
		 	     , a.sub_vendor_cd as sub_vendor_cd
		 	     , a.sub_vendor_nm as sub_vendor_nm
		 	     , a.trsp_cmp_cd as trsp_cmp_cd
		 	     , a.trsp_cmp_nm as trsp_cmp_nm
				 , c.tel_no1||c.tel_no2||c.tel_no3 as phone_no
			     , b.trsp_poa_no as trsp_poa_no
			     , b.poa_sta_dt as poa_sta_dt
			     , b.poa_end_dt as poa_end_dt
		      from t_mc_sub_vendor_mgmt a
			     , t_mc_trsp_poa_mgmt b
				 , t_mc_trsp_cmp_mgmt c
		     where a.vendor_cd         = b.vendor_cd(+)
			   and a.sub_vendor_cd     = b.sub_vendor_cd(+)
			   and a.trsp_cmp_cd       = b.trsp_cmp_cd(+)
			   and a.trsp_cmp_cd       = c.trsp_cmp_cd(+)
			   and nvl(a.del_flag,'N') = 'N'
			   and nvl(c.del_flag(+),'N') = 'N'
		 	   and a.trsp_cmp_nm like '%'|| p_trsp_cmp_nm ||'%'
		 	   and a.sub_vendor_nm like '%'|| p_sub_vendor_nm ||'%'
			   and b.poa_del_dtm(+) is null
		     order by a.vendor_cd;
	END;
	
	--************************************************************************
	-- [SC4211] Vendor List 저장
	--************************************************************************
	PROCEDURE p_sc4211_save(p_vendor_cd character varying, p_sub_vendor_cd character varying, p_sub_vendor_nm character varying, p_trsp_cmp_cd character varying, p_del_flag character varying, p_trsp_cmp_nm character varying, p_trsp_poa_no character varying, p_poa_sta_dt character varying, p_poa_end_dt character varying, p_jqx_rs character varying) IS
	BEGIN
		CASE p_jqx_rs
			WHEN 'U' THEN
				GOTO P_UPDATE;
			WHEN 'I' THEN
				GOTO P_INSERT;
		END CASE;
		RETURN;
		
		<<P_UPDATE>>
		
		gf_t_mc_sub_vendor_mgmt.p_select(p_vendor_cd, p_sub_vendor_cd, p_trsp_cmp_cd, false);
		
		gf_t_mc_sub_vendor_mgmt.t_rec.del_flag	:= 'N';
		
		gf_t_mc_sub_vendor_mgmt.p_update;
		
			if gf_t_mc_trsp_poa_mgmt.f_rowexist(p_vendor_cd, p_trsp_poa_no, p_sub_vendor_cd, p_trsp_cmp_no)  then
				if (p_poa_sta_dt <> p_poa_sta_dt) or (p_poa_end_dt <> p_poa_end_dt) then
					gf_t_mc_trsp_poa_mgmt.p_select(p_vednor_cd, p_trsp_poa_no, p_sub_vendor_cd, p_trsp_cmp_no);
					
					gf_t_mc_trsp_poa_mgmt.t_rec.poa_sta_dt := p_poa_sta_dt;
					gf_t_mc_trsp_poa_mgmt.t_rec.poa_end_dt := p_poa_end_dt;
					gf_t_mc_trsp_poa_mgmt.t_rec.poa_crt_dtm := to_char(sysdate, 'yyyymmddhh24mis');
					gf_t_mc_trsp_poa_mgmt.t_rec.poa_crt_user_id := scom.get_user_id();
					
					gf_t_mc_trsp_poa_mgmt.p_update;
				end if;
			end if;
			
		RETURN;

		<<P_INSERT>>
		gf_t_mc_sub_vendor_mgmt.p_clear;
		
		gf_t_mc_sub_vendor_mgmt.t_rec.vendor_cd		:= p_vendor_cd;
		gf_t_mc_sub_vendor_mgmt.t_rec.sub_vendor_cd := p_sub_vendor_cd;
		gf_t_mc_sub_vendor_mgmt.t_rec.sub_vendor_nm := p_sub_vendor_nm;
		gf_t_mc_sub_vendor_mgmt.t_rec.del_flag 		:= 'N';
		gf_t_mc_sub_vendor_mgmt.t_rec.trsp_cmp_cd 	:= p_trsp_cmp_cd;
		gf_t_mc_sub_vendor_mgmt.t_rec.trsp_cmp_nm 	:= p_trsp_cmp_nm;
		
		gf_t_mc_sub_vendor_mgmt.p_insert;
		RETURN;
	END;

	--************************************************************************
	-- [SC4211] Vendor List 삭제
	--************************************************************************
	PROCEDURE p_sc4211_delete(p_vendor_cd character varying, p_sub_vendor_cd character varying, p_trsp_cmp_cd character varying) IS
	BEGIN
		update t_mc_sub_vendor_mgmt
		set del_flag = 'Y'
		where vendor_cd = p_vendor_cd
			and sub_vendor_cd = p_sub_vendor_cd
			and trsp_cmp_cd = p_trsp_cmp_cd;
	END;
	
	--************************************************************************
	-- [SC4212]Vendor LIST 조회
	--************************************************************************
	PROCEDURE p_sc4212_search(p_vendor_id character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select vendor_cd
				 , vendor_nm
				 , dmnd_cmp_cd
				 , dmnd_cmp_nm
				 , dmnd_cmp_info
			  from t_mc_export_vendor_mgmt
			 where vendor_nm like '%'|| p_vendor_id
			   and nvl(del_flag,'N') = 'N'
			 order by 1, 3;
	END;
	--************************************************************************
	-- [SC4212] Vendor List 저장
	--************************************************************************

	PROCEDURE p_sc4212_save(p_vendor_cd character varying, p_vendor_nm character varying, p_dmnd_cmp_cd character varying, p_dmnd_cmp_nm character varying, p_dmnd_cmp_info character varying, p_jqx_rs character varying) IS
	BEGIN
		CASE p_jqx_rs
			WHEN 'U' THEN
				GOTO P_UPDATE;
			WHEN 'I' THEN
				GOTO P_INSERT;
		END CASE;
		RETURN;
		
		<<P_UPDATE>>
		gf_t_mc_export_vendor_mgmt.p_select(p_vendor_cd, p_dmnd_cmp_cd, false);

		gf_t_mc_export_vendor_mgmt.t_rec.vendor_nm 		:= p_vendor_nm;
		gf_t_mc_export_vendor_mgmt.t_rec.dmnd_cmp_cd	:= p_dmnd_cmp_cd;
		gf_t_mc_export_vendor_mgmt.t_rec.dmnd_cmp_nm 	:= p_dmnd_cmp_nm;
		gf_t_mc_export_vendor_mgmt.t_rec.dmnd_cmp_info 	:= p_dmnd_cmp_info;

		gf_t_mc_export_vendor_mgmt.p_update;
		RETURN;

		<<P_INSERT>>
		gf_t_mc_export_vendor_mgmt.p_clear;
		gf_t_mc_export_vendor_mgmt.t_rec.vendor_cd 		:= p_vendor_cd;
		gf_t_mc_export_vendor_mgmt.t_rec.vendor_nm 		:= p_vendor_nm;
		gf_t_mc_export_vendor_mgmt.t_rec.dmnd_cmp_cd 	:= p_dmnd_cmp_cd;
		gf_t_mc_export_vendor_mgmt.t_rec.dmnd_cmp_nm 	:= p_dmnd_cmp_nm;
		gf_t_mc_export_vendor_mgmt.t_rec.dmnd_cmp_info 	:= p_dmnd_cmp_info;
		gf_t_mc_export_vendor_mgmt.t_rec.del_flag 		:= 'N';

		gf_t_mc_export_vendor_mgmt.p_insert;
		RETURN;
	END;

	
	--************************************************************************
	-- [SC4212] Vendor List 삭제
	--************************************************************************
	PROCEDURE p_sc4212_delete(p_vendor_cd character varying, p_dmnd_cmp_cd character varying) IS
	BEGIN
		gf_t_mc_export_vendor_mgmt.p_select(p_vendor_cd, p_dmnd_cmp_cd, false);
		
		gf_t_mc_export_vendor_mgmt.t_rec.vendor_cd 		:= p_vendor_cd;
		gf_t_mc_export_vendor_mgmt.t_rec.dmnd_cmp_cd	:= p_dmnd_cmp_cd;
		gf_t_mc_export_vendor_mgmt.t_rec.del_flag 	:= 'Y';
		
		gf_t_mc_export_vendor_mgmt.p_update;
	END;
	
	--************************************************************************
	-- [SC4213] Vendor Popup 조회
	--************************************************************************
	PROCEDURE p_sc4213_search_supplier(p_vendor_cd character varying, p_inout_tp character varying, p_vendor_nm character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select supplier_cd as vendor_cd
				,nm as vendor_nm
			from smd.t_md_vendor
			where nm like '%' || p_vendor_nm || '%'
				and supplier_cd not in(
				select vendor_cd
				from t_mc_vendor_mgmt
				where vendor_nm like '%' || p_vendor_nm || '%'
					and inout_tp = p_inout_tp
				)
			group by supplier_cd, nm
			order by supplier_cd;
	END;
	
	--************************************************************************
	-- [SC4213] Vendor Popup 조회
	--************************************************************************
	PROCEDURE p_sc4213_search_cust(p_vendor_cd character varying, p_inout_tp character varying, p_vendor_nm character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select cust_cd as vendor_cd
					,nm as vendor_nm
			from smd.t_md_customer
			where nm like '%'|| p_vendor_nm || '%'
				and cust_cd not in (
				select vendor_cd 
				from t_mc_vendor_mgmt
				where vendor_nm like '%'|| p_vendor_nm || '%'
					and inout_tp =p_inout_tp
				)
			group by cust_cd, nm
			order by cust_cd;
	END;
	
END p_mc_vendor_mgmt;