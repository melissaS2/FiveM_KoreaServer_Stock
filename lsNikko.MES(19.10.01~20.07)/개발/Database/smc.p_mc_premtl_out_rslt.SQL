-- Package: smc.p_mc_premtl_out_rslt

-- DROP PACKAGE p_mc_premtl_out_rslt;

CREATE OR REPLACE PACKAGE p_mc_premtl_out_rslt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_premtl_out_rslt
 * Description      - 귀금속제품등록 & 소재생산유닛등록
 ******************************************************************************/

	TYPE v_cur IS REF CURSOR;
	
	--[SC2340 / SC2341]귀금속&소재생산유닛등록 출고차량 조회
	PROCEDURE p_out_car_search(p_premtl_dept_tp character varying, p_out_dt character varying, OUT p_cur v_cur);
	
	--[SC2340 / SC2341] 승인여부 조회
	PROCEDURE p_approval_search(p_premtl_dept_tp character varying, p_car_inout_no character varying, OUT p_cur v_cur);
	
	--[SC2340 / SC2341] 금지금/은지금/기타지금 조회
	PROCEDURE p_premtl_detail_search(p_premtl_cd character varying,p_premtl_dept_tp character varying,p_car_inout_no character varying, OUT p_cur v_cur);

	--[SC2340 / SC2341] 금지금/은지금/기타지금 저장
	PROCEDURE p_save(p_car_inout_no character varying, p_bullion_cd character varying, p_bullion_nm character varying, p_prod_cnt character varying, p_prod_wgt character varying, p_unit_nm character varying, p_box_cnt character varying, p_remark character varying, p_load_seq character varying, p_premtl_cd character varying, p_premtl_dept_tp character varying);
	
	--[SC2340] 금지금/은지금/기타지금 삭제
	PROCEDURE p_delete(p_car_inout_no character varying, p_premtl_dept_tp character varying,p_premtl_cd character varying,p_load_seq character varying);
	
	--[SC2340 / SC2341] 승인
	PROCEDURE p_approval(p_car_inout_no character varying,p_premtl_dept_tp character varying,p_car_in_dtm character varying,p_car_id character varying,p_vendor_nm character varying,p_vendor_cd character varying,p_car_out_dtm character varying,p_chk_pic1 character varying,p_chk_pic2 character varying,p_chk_pic3 character varying);
	
	
END p_mc_premtl_out_rslt;

CREATE OR REPLACE PACKAGE BODY p_mc_premtl_out_rslt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_premtl_out_rslt
 * Description      - 귀금속제품등록 & 소재생산유닛등록 
 ******************************************************************************/

	--************************************************************************
	--[SC2340 / SC2341]귀금속&소재생산유닛등록 출고차량 조회
	--************************************************************************
	PROCEDURE p_out_car_search(p_premtl_dept_tp character varying, p_out_dt character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select z.car_inout_no				
				 , z.car_id				
				 , z.driver_nm				
				 , z.vendor_cd				
				 , z.vendor_nm				
				 , z.car_in_dtm
				 , z.car_out_dtm
			     , z.premtl_dept_tp																															
				 , z.premtl_dept_nm
			from (select a.car_inout_no				
					   , a.car_id				
				       , nvl(b.driver_nm,p_mc_utils.f_car_out_driver(a.car_inout_no)) driver_nm				
				       , a.vendor_cd				
				       , p_mc_utils.f_vendor_nm_inout(a.vendor_cd, '2') vendor_nm				
				       , scom.fc_client_datetime(car_in_dtm) as car_in_dtm
				       , scom.fc_client_datetime(car_out_dtm) as car_out_dtm
			           , b.premtl_dept_tp																															
				       , scom.fc_cd_nm('PREMTL_DEPT_TP', b.premtl_dept_tp) as premtl_dept_nm
			        from t_mc_car_out_mgmt a				
				       , t_mc_premtl_mgmt  b				
			       where a.car_inout_no      = b.car_inout_no (+)				
			         and a.car_in_dt         = p_out_dt	
			         and a.item_cd           = 'JEW'				
			         and nvl(a.del_flag,'N') = 'N') z 
			where nvl(z.premtl_dept_tp, 'Z') not in (p_premtl_dept_tp) -- U & P 
		    order by z.car_inout_no;								
	END;
	--************************************************************************
	--[SC2340 / SC2341] 승인여부 조회
	--************************************************************************
	PROCEDURE p_approval_search(p_premtl_dept_tp character varying, p_car_inout_no character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select a.car_inout_no
				 , a.chk_pic1
				 , a.chk_pic2
				 , a.chk_pic3
				 , case when a.chk_pic1 is null then fc_yn_to_boolean(decode(null, null, 'N', 'Y')) else fc_yn_to_boolean('Y') end chk1
				 , case when a.chk_pic2 is null then fc_yn_to_boolean(decode(null, null, 'N', 'Y')) else fc_yn_to_boolean('Y') end chk2
				 , case when a.chk_pic3 is null then fc_yn_to_boolean(decode(null, null, 'N', 'Y')) else fc_yn_to_boolean('Y') end chk3
			  from t_mc_premtl_mgmt  a
				 , (select p_car_inout_no car_inout_no from dual) b
			 where a.car_inout_no(+) = b.car_inout_no
			   and a.car_inout_no(+) = p_car_inout_no
			   and a.premtl_dept_tp(+) = p_premtl_dept_tp; -- U & P
	END;
	--************************************************************************
	--[SC2340 / SC2341] 금지금/은지금/기타지금 조회
	--************************************************************************
	PROCEDURE p_premtl_detail_search(p_premtl_cd character varying,p_premtl_dept_tp character varying,p_car_inout_no character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select car_inout_no				
				 , bullion_cd				
				 , bullion_cd as bullion_nm				
				 , prod_cnt				
				 , prod_wgt				
				 , unit_cd as UNIT_NM				
				 , box_cnt				
				 , remark				
				 , load_seq  --hidden				
				 , unit_cd   --hidden
				 , premtl_cd -- hidden
			  from t_mc_premtl_out_rslt				
			 where car_inout_no      = p_car_inout_no	
			   and premtl_dept_tp    = p_premtl_dept_tp				
			   and premtl_cd         = p_premtl_cd				
			   and nvl(del_flag,'N') = 'N'				
			 order by load_seq;				
	END;
	--************************************************************************
	--[SC2340 / SC2341] 금지금/은지금/기타지금 저장
	--************************************************************************
	PROCEDURE p_save(p_car_inout_no character varying, p_bullion_cd character varying, p_bullion_nm character varying, p_prod_cnt character varying, p_prod_wgt character varying, p_unit_nm character varying, p_box_cnt character varying, p_remark character varying, p_load_seq character varying, p_premtl_cd character varying, p_premtl_dept_tp character varying) IS
	    v_car_inout_no 		t_mc_premtl_out_rslt.car_inout_no%TYPE;
		v_premtl_dept_tp 	t_mc_premtl_out_rslt.premtl_dept_tp%TYPE;
		v_premtl_cd 		t_mc_premtl_out_rslt.premtl_cd%TYPE;
		v_load_seq 			t_mc_premtl_out_rslt.load_seq%TYPE;
		v_jqx_rs 			boolean;
	BEGIN
		v_car_inout_no 		:= p_car_inout_no;
		v_premtl_dept_tp 	:= p_premtl_dept_tp;
	    v_premtl_cd 		:= p_premtl_cd;
		v_load_seq 			:= p_load_seq;
		v_jqx_rs  			:= gf_t_mc_premtl_out_rslt.f_rowexist(v_car_inout_no, v_premtl_dept_tp, v_premtl_cd, v_load_seq);
		
		-- IF v_premtl_cd = 'AU' THEN
			--금지금	
		-- ELSE IF v_premtl_cd = 'AG' THEN
			--은지금
		-- ELSE IF v_premtl_cd = 'ZZ' THEN
			--기타지금
		-- END IF;
		
		CASE v_jqx_rs
			WHEN TRUE THEN
				GOTO P_UPDATE;
			WHEN FALSE THEN
				GOTO P_INSERT;
		END CASE;
		
		RETURN;
		
		<<P_UPDATE>>
		gf_t_mc_premtl_out_rslt.p_select(p_car_inout_no, p_premtl_dept_tp, p_premtl_cd, p_load_seq);

		gf_t_mc_premtl_out_rslt.t_rec.bullion_cd		:= p_bullion_cd;
		gf_t_mc_premtl_out_rslt.t_rec.prod_cnt			:= p_prod_cnt;
		gf_t_mc_premtl_out_rslt.t_rec.prod_wgt			:= p_prod_wgt;
		gf_t_mc_premtl_out_rslt.t_rec.box_cnt			:= p_box_cnt;
		gf_t_mc_premtl_out_rslt.t_rec.remark			:= p_remark;
		gf_t_mc_premtl_out_rslt.t_rec.del_flag			:= 'N';
		gf_t_mc_premtl_out_rslt.t_rec.unit_cd			:= p_unit_nm; -- unit_cd
		gf_t_mc_premtl_out_rslt.t_rec.car_inout_no		:= p_car_inout_no;
		gf_t_mc_premtl_out_rslt.t_rec.premtl_dept_tp    := v_premtl_dept_tp;
		gf_t_mc_premtl_out_rslt.t_rec.premtl_cd			:= v_premtl_cd;
		gf_t_mc_premtl_out_rslt.t_rec.load_seq  		:= v_load_seq;

		gf_t_mc_premtl_out_rslt.p_update;
		RETURN;
		
		<<P_INSERT>>
			SELECT NVL(MAX(load_seq),0) +1 INTO v_load_seq
			  FROM t_mc_premtl_out_rslt
			 WHERE car_inout_no = p_car_inout_no
			   AND premtl_dept_tp = p_premtl_dept_tp
			   AND premtl_cd = p_premtl_cd;
			   
		gf_t_mc_premtl_out_rslt.p_clear;
		
		gf_t_mc_premtl_out_rslt.t_rec.car_inout_no		:= p_car_inout_no;
		gf_t_mc_premtl_out_rslt.t_rec.premtl_dept_tp    := v_premtl_dept_tp;
		gf_t_mc_premtl_out_rslt.t_rec.premtl_cd			:= v_premtl_cd;
		gf_t_mc_premtl_out_rslt.t_rec.load_seq  		:= v_load_seq;
		gf_t_mc_premtl_out_rslt.t_rec.bullion_cd		:= p_bullion_cd;
		gf_t_mc_premtl_out_rslt.t_rec.prod_cnt			:= p_prod_cnt;
		gf_t_mc_premtl_out_rslt.t_rec.prod_wgt			:= p_prod_wgt;
		gf_t_mc_premtl_out_rslt.t_rec.box_cnt			:= p_box_cnt;
		gf_t_mc_premtl_out_rslt.t_rec.remark			:= p_remark;
		gf_t_mc_premtl_out_rslt.t_rec.del_flag			:= 'N';
		gf_t_mc_premtl_out_rslt.t_rec.unit_cd			:= p_unit_nm; -- unit_cd
		
		gf_t_mc_premtl_out_rslt.p_insert;
 		RETURN;
	END;
	--************************************************************************
	--[SC2340 / SC2341] 금지금/은지금/기타지금 삭제
	--************************************************************************
	PROCEDURE p_delete(p_car_inout_no character varying, p_premtl_dept_tp character varying,p_premtl_cd character varying,p_load_seq character varying) IS
	BEGIN	
		gf_t_mc_premtl_out_rslt.p_select(p_car_inout_no, p_premtl_dept_tp, p_premtl_cd, p_load_seq);

		gf_t_mc_premtl_out_rslt.t_rec.car_inout_no			:= p_car_inout_no;
		gf_t_mc_premtl_out_rslt.t_rec.premtl_dept_tp		:= p_premtl_dept_tp;
		gf_t_mc_premtl_out_rslt.t_rec.premtl_cd				:= p_premtl_cd;
		gf_t_mc_premtl_out_rslt.t_rec.load_seq				:= p_load_seq;
		gf_t_mc_premtl_out_rslt.t_rec.del_flag				:= 'Y';

		gf_t_mc_premtl_out_rslt.p_update;
	END;
	--************************************************************************
	--[SC2340 / SC2341] 승인
	--************************************************************************
	PROCEDURE p_approval(p_car_inout_no character varying,p_premtl_dept_tp character varying,p_car_in_dtm character varying,p_car_id character varying,p_vendor_nm character varying,p_vendor_cd character varying,p_car_out_dtm character varying,p_chk_pic1 character varying,p_chk_pic2 character varying,p_chk_pic3 character varying) IS
		v_count number;
	BEGIN
		select count(*)						
		into v_count						
		from t_mc_premtl_mgmt						
		where car_inout_no = p_car_inout_no						
		and premtl_dept_tp = p_premtl_dept_tp;
		
		IF v_count = 0 THEN
			GOTO P_INSERT;
		ELSE
			GOTO P_UPDATE;
		END IF;
		
		RETURN;
		
		<<P_INSERT>>
		gf_t_mc_premtl_mgmt.p_clear;
		
		gf_t_mc_premtl_mgmt.t_rec.car_inout_no		:= p_car_inout_no;
		gf_t_mc_premtl_mgmt.t_rec.premtl_dept_tp	:= p_premtl_dept_tp;
		gf_t_mc_premtl_mgmt.t_rec.car_in_dt			:= p_car_in_dtm;
		gf_t_mc_premtl_mgmt.t_rec.car_id			:= p_car_id;
		gf_t_mc_premtl_mgmt.t_rec.driver_nm			:= p_vendor_nm;
		gf_t_mc_premtl_mgmt.t_rec.vendor_cd			:= p_vendor_cd;
		gf_t_mc_premtl_mgmt.t_rec.out_time			:= p_car_out_dtm;
		gf_t_mc_premtl_mgmt.t_rec.chk_pic1			:= p_chk_pic1;
		gf_t_mc_premtl_mgmt.t_rec.chk_pic2			:= p_chk_pic2;
		gf_t_mc_premtl_mgmt.t_rec.chk_pic3			:= p_chk_pic3;
		gf_t_mc_premtl_mgmt.t_rec.del_flag			:= 'N';
		
		gf_t_mc_premtl_mgmt.p_insert;
		RETURN;
			
		<<P_UPDATE>>
		gf_t_mc_premtl_mgmt.p_select(p_car_inout_no, p_premtl_dept_tp);

		gf_t_mc_premtl_mgmt.t_rec.chk_pic1			:= p_chk_pic1;
		gf_t_mc_premtl_mgmt.t_rec.chk_pic2			:= p_chk_pic2;
		gf_t_mc_premtl_mgmt.t_rec.chk_pic3			:= p_chk_pic3;
		gf_t_mc_premtl_mgmt.t_rec.del_flag			:= 'N';

		gf_t_mc_premtl_mgmt.p_update;
		RETURN;
	END;
	
END p_mc_premtl_out_rslt;