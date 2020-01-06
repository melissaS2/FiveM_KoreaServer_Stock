-- Package: smc.p_mc_rtn_mgmt

-- DROP PACKAGE p_mc_rtn_mgmt;

CREATE OR REPLACE PACKAGE p_mc_rtn_mgmt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_rtn_mgmt
 * Description      - 소내Return물 관리
 ******************************************************************************/

	TYPE v_cur IS REF CURSOR;
	
	-- [SC2610] 소내Return물품목등록 LIST 조회
	PROCEDURE p_sc2610_search(p_item_cd_id character varying, p_item_nm_id character varying, OUT p_cur v_cur);

	-- [SC2610] 소내Return물품목등록 LIST 저장
	PROCEDURE p_sc2610_save(p_item_cd character varying, p_item_nm character varying, p_holder_nm character varying);
	
	-- [SC2610] 소내Return물품목등록 LIST 삭제
	PROCEDURE p_sc2610_delete(p_item_cd character varying);
	
	-- [SC2620] 소내Return물차량번호등록 LIST 조회
	PROCEDURE p_sc2620_search(p_car_no_id character varying, OUT p_cur v_cur);

	-- [SC2620] 소내Return물차량번호등록 LIST 저장
	PROCEDURE p_sc2620_save(p_car_id character varying, p_car_no character varying, p_driver_nm character varying, p_vendor_nm character varying);
	
	-- [SC2620] 소내Return물차량번호등록 LIST 삭제
	PROCEDURE p_sc2620_delete(p_car_id character varying, p_driver_nm character varying);
	
	-- [SC2630] 소내Return물계근등록 LIST 조회
	PROCEDURE p_sc2630_search(p_in_dt character varying, p_car_no_id character varying, OUT p_cur v_cur);

	-- [SC2630] 소내Return물계근등록 LIST 저장
	PROCEDURE p_sc2630_save(p_weigh_no character varying, p_car_no character varying, p_vendor_nm character varying, p_driver_nm character varying, p_item_cd character varying, p_item_nm character varying, p_in_time character varying, p_out_time character varying, p_tot_wgt character varying, p_empty_wgt character varying, p_real_wgt character varying, p_remark character varying);
	
	-- [SC2630] 소내Return물계근등록 LIST 삭제
	PROCEDURE p_sc2630_delete(p_weigh_no character varying);
	
	-- [SC2640] 소내Return물계근현황 LIST 조회
	PROCEDURE p_sc2640_search(p_car_no character varying, p_item_cd character varying, p_in_dt_fr character varying, p_in_dt_to character varying, OUT p_cur v_cur);
	
END p_mc_rtn_mgmt;

CREATE OR REPLACE PACKAGE BODY p_mc_rtn_mgmt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_rtn_mgmt
 * Description      - 소내Return물 관리
 ******************************************************************************/

	--************************************************************************
	-- [SC2610] 소내Return물품목등록 LIST 조회
	--************************************************************************
	PROCEDURE p_sc2610_search(p_item_cd_id character varying, p_item_nm_id character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select item_cd
				 , item_nm
				 , holder_nm
			  from t_mc_rtn_item_mgmt
			 where nvl(del_flag,'N') = 'N'
			   and item_cd like '%'||p_item_cd_id||'%'
			   and item_nm like '%'||p_item_nm_id||'%'		
			 order by 1;
	END;

	--************************************************************************
	-- [SC2610] 소내Return물품목등록 저장
	--************************************************************************
	PROCEDURE p_sc2610_save(p_item_cd character varying, p_item_nm character varying, p_holder_nm character varying) IS
	    v_count number;
	BEGIN
	    --check vaildation
		select count(*)	
		  into v_count
		  from t_mc_rtn_item_mgmt	
		 where item_cd = p_item_cd;	
		
		IF v_count = 0 THEN
			GOTO P_INSERT;
		ELSE
			GOTO P_UPDATE;
		END IF;
		
		RETURN;
		
		<<P_UPDATE>>
		gf_t_mc_rtn_item_mgmt.p_select(p_item_cd);

		gf_t_mc_rtn_item_mgmt.t_rec.item_cd					:= p_item_cd;
		gf_t_mc_rtn_item_mgmt.t_rec.item_nm					:= p_item_nm;
		gf_t_mc_rtn_item_mgmt.t_rec.holder_nm				:= p_holder_nm;

		gf_t_mc_rtn_item_mgmt.p_update;
		RETURN;
		
		<<P_INSERT>>
		gf_t_mc_rtn_item_mgmt.p_clear;
		
		gf_t_mc_rtn_item_mgmt.t_rec.item_cd					:= p_item_cd;
		gf_t_mc_rtn_item_mgmt.t_rec.item_nm					:= p_item_nm;
		gf_t_mc_rtn_item_mgmt.t_rec.holder_nm				:= p_holder_nm;
		gf_t_mc_rtn_item_mgmt.t_rec.del_flag				:= 'N';
		
		gf_t_mc_rtn_item_mgmt.p_insert;
 		RETURN;

	END;
	--************************************************************************
	-- [SC2610] 소내Return물품목등록 삭제
	--************************************************************************
	PROCEDURE p_sc2610_delete(p_item_cd character varying) IS
	BEGIN
	
		gf_t_mc_rtn_item_mgmt.p_select(p_item_cd);

		gf_t_mc_rtn_item_mgmt.t_rec.item_cd					:= p_item_cd;
		gf_t_mc_rtn_item_mgmt.t_rec.del_flag					:= 'Y';
		
		gf_t_mc_rtn_item_mgmt.p_update;
	END;
	
	------------------------------[2620]--------------------------------------
	
	--************************************************************************
	-- [SC2620] 소내Return물차량번호등록 LIST 조회
	--************************************************************************
	PROCEDURE p_sc2620_search(p_car_no_id character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select car_id
				 , car_no
				 , driver_nm
				 , vendor_nm			
			  from t_mc_rtn_car_mgmt			
			 where nvl(del_flag,'N') = 'N'
			   and car_id like '%'||p_car_no_id||'%'			
			 order by car_no;
	END;

	--************************************************************************
	-- [SC2620] 소내Return물차량번호등록 LIST 저장
	--************************************************************************
	PROCEDURE p_sc2620_save(p_car_id character varying, p_car_no character varying, p_driver_nm character varying, p_vendor_nm character varying) IS
	    v_count number;
	BEGIN
	    --check vaildation
		select count(*)	
		  into v_count	
		  from t_mc_rtn_car_mgmt	
		 where car_id = p_car_id	
		   and driver_nm = p_driver_nm;
		
		IF v_count = 0 THEN
			GOTO P_INSERT;
		ELSE
			GOTO P_UPDATE;
		END IF;
		
		RETURN;
		
		<<P_UPDATE>>
		gf_t_mc_rtn_car_mgmt.p_select(p_car_id,p_driver_nm);

		gf_t_mc_rtn_car_mgmt.t_rec.vendor_nm				:= p_vendor_nm;

		gf_t_mc_rtn_car_mgmt.p_update;
		RETURN;
		
		<<P_INSERT>>
		gf_t_mc_rtn_car_mgmt.p_clear;
		
		gf_t_mc_rtn_car_mgmt.t_rec.car_id					:= p_car_id;
		gf_t_mc_rtn_car_mgmt.t_rec.car_no					:= substr(p_car_id, -4);
		gf_t_mc_rtn_car_mgmt.t_rec.driver_nm				:= p_driver_nm;
		gf_t_mc_rtn_car_mgmt.t_rec.vendor_nm				:= p_vendor_nm;
		gf_t_mc_rtn_car_mgmt.t_rec.del_flag					:= 'N';
		
		gf_t_mc_rtn_car_mgmt.p_insert;
 		RETURN;

	END;
	--************************************************************************
	-- [SC2620] 소내Return물차량번호등록 LIST 삭제
	--************************************************************************
	PROCEDURE p_sc2620_delete(p_car_id character varying, p_driver_nm character varying) IS
	BEGIN
		gf_t_mc_rtn_car_mgmt.p_select(p_car_id,p_driver_nm);

		gf_t_mc_rtn_car_mgmt.t_rec.car_id					:= p_car_id;
		gf_t_mc_rtn_car_mgmt.t_rec.driver_nm				:= p_driver_nm;
		gf_t_mc_rtn_car_mgmt.t_rec.del_flag					:= 'Y';

		gf_t_mc_rtn_car_mgmt.p_update;
	END;
	
	------------------------------[2630]--------------------------------------
	
	--************************************************************************
	-- [SC2630] 소내Return물계근등록 LIST 조회
	--************************************************************************
	PROCEDURE p_sc2630_search(p_in_dt character varying, p_car_no_id character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select a.weigh_no as weigh_no
				 , a.car_id as car_no
				 , a.vendor_nm as vendor_nm
				 , a.driver_nm as driver_nm
				 , a.item_cd as item_cd
				 , b.item_nm as item_nm
				 , scom.fc_client_date(weigh_sta_dtm) as in_time
				 , scom.fc_client_date(weigh_end_dtm) as out_time
				 , nvl(a.empty_wgt,0) as empty_wgt
				 , nvl(a.real_wgt,0) as real_wgt
				 , nvl(a.tot_wgt,0) as tot_wgt
				 , a.remark
			  from t_mc_rtn_weigh_mgmt a
				 , t_mc_rtn_item_mgmt b
			 where a.item_cd = b.item_cd
			   and weigh_dt = p_in_dt
			   and car_id like '%'||p_car_no_id||'%'
			   and nvl(a.del_flag,'N') = 'N'
			 order by weigh_sta_dtm desc, weigh_no desc;
	END;

	--************************************************************************
	-- [SC2630] 소내Return물계근등록 LIST 저장
	--************************************************************************
	PROCEDURE p_sc2630_save(p_weigh_no character varying, p_car_no character varying, p_vendor_nm character varying, p_driver_nm character varying, p_item_cd character varying, p_item_nm character varying, p_in_time character varying, p_out_time character varying, p_tot_wgt character varying, p_empty_wgt character varying, p_real_wgt character varying, p_remark character varying) IS
		v_weigh_no character varying(11);		
		v_find_no character varying(10);		
		v_seq character varying(3);
		v_real_wgt character varying(10);
	BEGIN
	
		v_weigh_no := null;		
		v_find_no := 'I'||substr(p_in_time,3,6);		
		v_seq := null;	
		
	    --계근번호 발번
		select substr(max(weigh_no),-3)		
		  into v_seq		
		  from t_mc_rtn_weigh_mgmt		
		 where weigh_no like v_find_no||'%';
		
		IF v_seq IS NULL THEN
			v_seq := '001';
		ELSE
			v_seq := lpad(to_number(v_seq) + 1,3, '0');
		END IF;
		
		v_weigh_no := v_find_no||'-'||v_seq;
		--계근실적 등록 및 수정
		v_real_wgt := nvl(p_tot_wgt,0) - nvl(p_empty_wgt,0);			
		
		IF p_weigh_no = 0 THEN 
			GOTO P_INSERT;
		ELSE
			GOTO P_UPDATE;
		END IF;

		RETURN;
		
		<<P_UPDATE>>
		gf_t_mc_rtn_weigh_mgmt.p_select(p_weigh_no);

		gf_t_mc_rtn_weigh_mgmt.t_rec.driver_nm				:= p_driver_nm;
		gf_t_mc_rtn_weigh_mgmt.t_rec.vendor_nm				:= p_vendor_nm;
		gf_t_mc_rtn_weigh_mgmt.t_rec.item_cd				:= p_item_cd;
		gf_t_mc_rtn_weigh_mgmt.t_rec.empty_wgt				:= p_empty_wgt;
		gf_t_mc_rtn_weigh_mgmt.t_rec.real_wgt				:= p_real_wgt;
		gf_t_mc_rtn_weigh_mgmt.t_rec.tot_wgt				:= p_tot_wgt;
		gf_t_mc_rtn_weigh_mgmt.t_rec.remark					:= p_remark;

		gf_t_mc_rtn_weigh_mgmt.p_update;
		RETURN;
		
		<<P_INSERT>>
		gf_t_mc_rtn_weigh_mgmt.p_clear;
		
		gf_t_mc_rtn_weigh_mgmt.t_rec.weigh_no				:= v_weigh_no;
		gf_t_mc_rtn_weigh_mgmt.t_rec.car_id					:= p_car_no;
		gf_t_mc_rtn_weigh_mgmt.t_rec.item_cd				:= p_item_cd;
		gf_t_mc_rtn_weigh_mgmt.t_rec.empty_wgt				:= p_empty_wgt;
		gf_t_mc_rtn_weigh_mgmt.t_rec.real_wgt				:= p_real_wgt;
		gf_t_mc_rtn_weigh_mgmt.t_rec.tot_wgt				:= p_tot_wgt;
		gf_t_mc_rtn_weigh_mgmt.t_rec.remark					:= p_remark;
		gf_t_mc_rtn_weigh_mgmt.t_rec.weigh_sta_dtm			:= p_in_time;
		gf_t_mc_rtn_weigh_mgmt.t_rec.weigh_end_dtm			:= p_out_time;
		gf_t_mc_rtn_weigh_mgmt.t_rec.weigh_dt				:= substr(p_in_time,0,8);
		gf_t_mc_rtn_weigh_mgmt.t_rec.del_flag				:= 'N';
		gf_t_mc_rtn_weigh_mgmt.t_rec.driver_nm				:= p_driver_nm;
		gf_t_mc_rtn_weigh_mgmt.t_rec.vendor_nm				:= p_vendor_nm;
		
		gf_t_mc_rtn_weigh_mgmt.p_insert;
 		RETURN;

	END;
	--************************************************************************
	-- [SC2630] 소내Return물계근등록 LIST 삭제
	--************************************************************************
	PROCEDURE p_sc2630_delete(p_weigh_no character varying) IS
	BEGIN
		gf_t_mc_rtn_weigh_mgmt.p_select(p_weigh_no);

		gf_t_mc_rtn_weigh_mgmt.t_rec.weigh_no				:= p_weigh_no;
		gf_t_mc_rtn_weigh_mgmt.t_rec.del_flag				:= 'Y';

		gf_t_mc_rtn_weigh_mgmt.p_update;

	END;
	--************************************************************************
	-- [SC2640] 소내Return물계근현황 LIST 조회
	--************************************************************************
	PROCEDURE p_sc2640_search(p_car_no character varying, p_item_cd character varying, p_in_dt_fr character varying, p_in_dt_to character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select weigh_no as in_no
			     , car_id as car_no
				 , vendor_nm
				 , driver_nm
				 , a.item_cd
				 , b.item_nm
				 , scom.fc_client_date(weigh_sta_dtm) as in_time
				 , scom.fc_client_date(weigh_end_dtm) as out_time
				 , nvl(empty_wgt,0) empty_wgt
				 , nvl(real_wgt,0) real_wgt
				 , nvl(tot_wgt,0) tot_wgt
				 , remark
				 , weigh_dt as in_dt
			  from t_mc_rtn_weigh_mgmt a
			     , t_mc_rtn_item_mgmt b
			 where a.item_cd = b.item_cd
			   and weigh_dt between p_in_dt_fr and p_in_dt_to
			   and car_id like '%'||p_car_no||'%'					
			   and a.item_cd like '%'||p_item_cd||'%'			
			   and nvl(a.del_flag,'N') = 'N'  
			 union all					
			select ''
			     , ''
				 , ''
				 , ''
				 , ''
				 , ''
				 , ''
				 , ''
				 , sum(nvl(empty_wgt,0)) empty_wgt
				 , sum(nvl(real_wgt,0)) real_wgt
				 , sum(nvl(tot_wgt,0)) tot_wgt
				 , ''
				 , '* 합 계 *' as in_dt
			  from t_mc_rtn_weigh_mgmt a					
			 where weigh_dt between p_in_dt_fr and p_in_dt_to
			   and car_id like '%'||p_car_no||'%'	
			   and a.item_cd like '%'||p_item_cd||'%'	
			   and nvl(a.del_flag,'N') = 'N'
			 order by in_time desc, in_no desc;
	END;
END p_mc_rtn_mgmt;