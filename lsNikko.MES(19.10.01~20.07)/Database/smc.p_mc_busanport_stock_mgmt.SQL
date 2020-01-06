-- Package: smc.p_mc_busan_stock_mgmt

-- DROP PACKAGE p_mc_busan_stock_mgmt;

CREATE OR REPLACE PACKAGE p_mc_busan_stock_mgmt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_busan_stock_mgmt
 * Description      - 부산항재고관리
 ******************************************************************************/

	TYPE v_cur IS REF CURSOR;
	
	--조회
	PROCEDURE p_search(p_find_mnt character varying, OUT p_cur v_cur);
	
	--추가/수정 저장
	PROCEDURE p_save(p_container_alwnc_days character varying, p_container_alwnc_end_dt character varying, p_container_delay_amt character varying, p_container_delay_days character varying, p_container_takeout_dt character varying, p_container_takeout_sch_dt character varying, p_cy_alwnc_days character varying, p_cy_alwnc_end_dt character varying, p_cy_delay_amt character varying, p_cy_delay_days character varying, p_cy_takeout_dt character varying, p_cy_takeout_sch_dt character varying, p_delay_rsn character varying, p_sch_no character varying);
	
END p_mc_busan_stock_mgmt;

CREATE OR REPLACE PACKAGE BODY p_mc_busan_stock_mgmt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_busan_stock_mgmt
 * Description      - 부산항재고관리
 ******************************************************************************/

	--************************************************************************
	-- 조회
	--************************************************************************
	PROCEDURE p_search(p_find_mnt character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			with t_result as (
				select CASE WHEN CAST(PROG_STS AS NUMERIC)>= 5 THEN 'A' ELSE 'P' END AS PROG_STS
					 , (select attr1 from scom.sco_code_detail where master_cd = 'RM_ITEM_CD' and cd_val = ITEM_CD) AS ITEM_TP
					 , (select cd_nm from scom.sco_code_detail where master_cd = 'RM_ITEM_CD' and cd_val = ITEM_CD)	AS ITEM_NM
					 , ITEM_CD
					 , A.SCH_NO
					 , SUPPLIER_NM
					 , MINERAL_TP
					 --, CASE WHEN PROG_STS = 'A' THEN sum(SHIPMT_WMT) ELSE sum(ARRIVAL_WMT) END AS STOCK_WMT
					 , CASE WHEN CAST(PROG_STS AS NUMERIC) >= 5 THEN sum(SHIPMT_WMT) ELSE sum(ARRIVAL_WMT) END AS STOCK_WMT
					 , scom.fc_client_date(ARRIVAL_DT) AS ARRIVAL_DT
					 , B.CONTAINER_ALWNC_DAYS
					 , scom.fc_client_date(B.CONTAINER_ALWNC_END_DT) AS CONTAINER_ALWNC_END_DT
					 , scom.fc_client_date(B.CONTAINER_TAKEOUT_SCH_DT) AS CONTAINER_TAKEOUT_SCH_DT
					 , scom.fc_client_date(B.CONTAINER_TAKEOUT_DT) AS CONTAINER_TAKEOUT_DT
					 , B.CONTAINER_DELAY_DAYS
					 , nvl(B.CONTAINER_DELAY_AMT,0) AS CONTAINER_DELAY_AMT
					 , B.CY_ALWNC_DAYS
					 , scom.fc_client_date(B.CY_ALWNC_END_DT) AS CY_ALWNC_END_DT
					 , scom.fc_client_date(B.CY_TAKEOUT_SCH_DT) AS CY_TAKEOUT_SCH_DT
					 , scom.fc_client_date(B.CY_TAKEOUT_DT) AS CY_TAKEOUT_DT
					 , B.CY_DELAY_DAYS
					 , nvl(B.CY_DELAY_AMT,0) AS CY_DELAY_AMT
					 , nvl(B.CONTAINER_DELAY_AMT,0) + nvl(B.CY_DELAY_AMT,0) AS TOT_DELAY_AMT
					 , B.DELAY_RSN
				  from T_MC_PURCHASE_SCH_MGMT A
					 , T_MC_BUSAN_STOCK_MGMT B
				 where A.SCH_NO = B.SCH_NO (+) AND CAST(PROG_STS AS NUMERIC) >= 5 -- A
				   and substring(ARRIVAL_DT,0,7) = replace(p_find_mnt,'-','')
				 group by grouping sets((prog_sts,(select attr1 from scom.sco_code_detail where master_cd = 'RM_ITEM_CD' and cd_val = ITEM_CD),item_cd,a.sch_no,supplier_nm,mineral_tp,shipmt_wmt,arrival_wmt,arrival_dt,b.container_alwnc_days,B.CONTAINER_ALWNC_END_DT,B.CONTAINER_TAKEOUT_SCH_DT,B.CONTAINER_TAKEOUT_DT,B.CONTAINER_DELAY_DAYS,B.CONTAINER_DELAY_AMT,B.CY_ALWNC_DAYS,B.CY_ALWNC_END_DT,B.CY_TAKEOUT_SCH_DT,B.CY_TAKEOUT_DT,B.CY_DELAY_DAYS,B.CY_DELAY_AMT,B.DELAY_RSN)
								,(prog_sts,(select attr1 from scom.sco_code_detail where master_cd = 'RM_ITEM_CD' and cd_val = ITEM_CD),item_cd)
								,(prog_sts,(select attr1 from scom.sco_code_detail where master_cd = 'RM_ITEM_CD' and cd_val = ITEM_CD))
								,(prog_sts))
				union all
				select CASE WHEN CAST(PROG_STS AS NUMERIC)>= 5 THEN 'A' ELSE 'P' END AS PROG_STS
					 , (select attr1 from scom.sco_code_detail where master_cd = 'RM_ITEM_CD' and cd_val = ITEM_CD) AS ITEM_TP
					 , (select cd_nm from scom.sco_code_detail where master_cd = 'RM_ITEM_CD' and cd_val = ITEM_CD)	AS ITEM_NM
					 , ITEM_CD
					 , A.SCH_NO
					 , SUPPLIER_NM
					 , MINERAL_TP
					 --, CASE WHEN PROG_STS = 'A' THEN sum(SHIPMT_WMT) ELSE sum(ARRIVAL_WMT) END AS STOCK_WMT
					 , CASE WHEN CAST(PROG_STS AS NUMERIC) >= 5 THEN sum(SHIPMT_WMT) ELSE sum(ARRIVAL_WMT) END AS STOCK_WMT
					 , scom.fc_client_date(ARRIVAL_DT) AS ARRIVAL_DT
					 , B.CONTAINER_ALWNC_DAYS
					 , scom.fc_client_date(B.CONTAINER_ALWNC_END_DT) AS CONTAINER_ALWNC_END_DT
					 , scom.fc_client_date(B.CONTAINER_TAKEOUT_SCH_DT) AS CONTAINER_TAKEOUT_SCH_DT
					 , scom.fc_client_date(B.CONTAINER_TAKEOUT_DT) AS CONTAINER_TAKEOUT_DT
					 , B.CONTAINER_DELAY_DAYS
					 , nvl(B.CONTAINER_DELAY_AMT,0) AS CONTAINER_DELAY_AMT
					 , B.CY_ALWNC_DAYS
					 , scom.fc_client_date(B.CY_ALWNC_END_DT) AS CY_ALWNC_END_DT
					 , scom.fc_client_date(B.CY_TAKEOUT_SCH_DT) AS CY_TAKEOUT_SCH_DT
					 , scom.fc_client_date(B.CY_TAKEOUT_DT) AS CY_TAKEOUT_DT
					 , B.CY_DELAY_DAYS
					 , nvl(B.CY_DELAY_AMT,0) AS CY_DELAY_AMT
					 , nvl(B.CONTAINER_DELAY_AMT,0) + nvl(B.CY_DELAY_AMT,0) AS TOT_DELAY_AMT
					 , B.DELAY_RSN
				  from T_MC_PURCHASE_SCH_MGMT A
					 , T_MC_BUSAN_STOCK_MGMT B
				 where A.SCH_NO = B.SCH_NO (+) AND CAST(PROG_STS AS NUMERIC) < 5	-- P	
				 group by grouping sets((prog_sts,(select attr1 from scom.sco_code_detail where master_cd = 'RM_ITEM_CD' and cd_val = ITEM_CD),item_cd,a.sch_no,supplier_nm,mineral_tp,shipmt_wmt,arrival_wmt,arrival_dt,b.container_alwnc_days,B.CONTAINER_ALWNC_END_DT,B.CONTAINER_TAKEOUT_SCH_DT,B.CONTAINER_TAKEOUT_DT,B.CONTAINER_DELAY_DAYS,B.CONTAINER_DELAY_AMT,B.CY_ALWNC_DAYS,B.CY_ALWNC_END_DT,B.CY_TAKEOUT_SCH_DT,B.CY_TAKEOUT_DT,B.CY_DELAY_DAYS,B.CY_DELAY_AMT,B.DELAY_RSN)
								,(prog_sts,(select attr1 from scom.sco_code_detail where master_cd = 'RM_ITEM_CD' and cd_val = ITEM_CD),item_cd)
								,(prog_sts,(select attr1 from scom.sco_code_detail where master_cd = 'RM_ITEM_CD' and cd_val = ITEM_CD))
								,(prog_sts))
				 order by 1)
				select PROG_STS
					 , ITEM_TP
					 , ITEM_CD
					 , case 
						when sch_no IS NOT NULL then ITEM_NM
						when ITEM_TP IS NULL then '총재고'
						when ITEM_NM IS NULL then '소계'
						when ITEM_NM IS NOT NULL then '재고'					
					  end AS ITEM_NM
					 , SCH_NO
					 , SUPPLIER_NM
					 , MINERAL_TP
					 , STOCK_WMT
					 , ARRIVAL_DT
					 , CONTAINER_ALWNC_DAYS
					 , CONTAINER_ALWNC_END_DT
					 , CONTAINER_TAKEOUT_SCH_DT
					 , CONTAINER_TAKEOUT_DT
					 , CONTAINER_DELAY_DAYS
					 , CONTAINER_DELAY_AMT
					 , CY_ALWNC_DAYS
					 , CY_ALWNC_END_DT
					 , CY_TAKEOUT_SCH_DT
					 , CY_TAKEOUT_DT
					 , CY_DELAY_DAYS
					 , CY_DELAY_AMT
					 , TOT_DELAY_AMT
					 , DELAY_RSN
				  from t_result;
	END;
	--************************************************************************
	--추가/수정 저장
	--************************************************************************
	PROCEDURE p_save(p_container_alwnc_days character varying, p_container_alwnc_end_dt character varying, p_container_delay_amt character varying, p_container_delay_days character varying, p_container_takeout_dt character varying, p_container_takeout_sch_dt character varying, p_cy_alwnc_days character varying, p_cy_alwnc_end_dt character varying, p_cy_delay_amt character varying, p_cy_delay_days character varying, p_cy_takeout_dt character varying, p_cy_takeout_sch_dt character varying, p_delay_rsn character varying, p_sch_no character varying) IS
	    v_count number;
		v_cd_nm character varying;
	BEGIN
	
		select count(*)
		  into v_count
		  from T_MC_BUSAN_STOCK_MGMT
		 where SCH_NO = P_SCH_NO;
		
		IF v_count = 0 THEN
			GOTO P_INSERT;
		ELSE
			GOTO P_UPDATE;
		END IF;
		
		RETURN;
		
		<<P_UPDATE>>
		gf_t_mc_busan_stock_mgmt.p_select(p_sch_no);
		
		gf_t_mc_busan_stock_mgmt.t_rec.container_alwnc_days 	:= p_container_alwnc_days;
		gf_t_mc_busan_stock_mgmt.t_rec.container_alwnc_end_dt 	:= p_container_alwnc_end_dt;
		gf_t_mc_busan_stock_mgmt.t_rec.container_takeout_sch_dt	:= p_container_takeout_sch_dt;
		gf_t_mc_busan_stock_mgmt.t_rec.container_takeout_dt		:= p_container_takeout_dt;
		gf_t_mc_busan_stock_mgmt.t_rec.container_delay_days		:= p_container_delay_days;
		gf_t_mc_busan_stock_mgmt.t_rec.container_delay_amt		:= p_container_delay_amt;
		gf_t_mc_busan_stock_mgmt.t_rec.cy_alwnc_days			:= p_cy_alwnc_days;
		gf_t_mc_busan_stock_mgmt.t_rec.cy_alwnc_end_dt			:= p_cy_alwnc_end_dt;
		gf_t_mc_busan_stock_mgmt.t_rec.cy_takeout_sch_dt		:= p_cy_takeout_sch_dt;
		gf_t_mc_busan_stock_mgmt.t_rec.cy_takeout_dt			:= p_cy_takeout_dt;
		gf_t_mc_busan_stock_mgmt.t_rec.cy_delay_days			:= p_cy_delay_days;
		gf_t_mc_busan_stock_mgmt.t_rec.cy_delay_amt				:= p_cy_delay_amt;
		gf_t_mc_busan_stock_mgmt.t_rec.delay_rsn				:= p_delay_rsn;
		
		gf_t_mc_busan_stock_mgmt.p_update;
		RETURN;
		
		<<P_INSERT>>
		--select cd_nm into v_cd_nm
		  --from scom.sco_code_detail
		 --where master_cd = 'RM_ITEM_CD' and cd_val = p_item_cd;
		
		-- GF_T_MC_PURCHASE_SCH_MGMT.P_CLEAR;
		
		-- GF_T_MC_PURCHASE_SCH_MGMT.T_REC.PROG_STS		:= 'P';
		-- GF_T_MC_PURCHASE_SCH_MGMT.T_REC.ITEM_TP			:= 'SLIME';
		-- GF_T_MC_PURCHASE_SCH_MGMT.T_REC.ITEM_CD			:= P_ITEM_CD;--'EN'; -- 은정광
		-- GF_T_MC_PURCHASE_SCH_MGMT.T_REC.SCH_NO			:= P_SCH_NO;
		-- GF_T_MC_PURCHASE_SCH_MGMT.T_REC.SUPPLIER_CD		:= '40221';
		-- GF_T_MC_PURCHASE_SCH_MGMT.T_REC.SUPPLIER_NM		:= P_MC_UTILS.F_VENDOR_NM('40221');
		-- GF_T_MC_PURCHASE_SCH_MGMT.T_REC.MINERAL_TP		:= 'MSC';
		-- GF_T_MC_PURCHASE_SCH_MGMT.T_REC.ARRIVAL_WMT		:= P_STOCK_WMT;
		-- GF_T_MC_PURCHASE_SCH_MGMT.T_REC.SHIPMT_WMT		:= P_STOCK_WMT;
		
		-- GF_T_MC_PURCHASE_SCH_MGMT.P_INSERT;
		
		gf_t_mc_busan_stock_mgmt.p_clear;
		
		gf_t_mc_busan_stock_mgmt.t_rec.sch_no					:= p_sch_no;
		gf_t_mc_busan_stock_mgmt.t_rec.container_alwnc_days 	:= p_container_alwnc_days;
		gf_t_mc_busan_stock_mgmt.t_rec.container_alwnc_end_dt 	:= p_container_alwnc_end_dt;
		gf_t_mc_busan_stock_mgmt.t_rec.container_delay_amt		:= p_container_delay_amt;
		gf_t_mc_busan_stock_mgmt.t_rec.container_delay_days		:= p_container_delay_days;
		gf_t_mc_busan_stock_mgmt.t_rec.container_takeout_dt		:= p_container_takeout_dt;
		gf_t_mc_busan_stock_mgmt.t_rec.container_takeout_sch_dt	:= p_container_takeout_sch_dt;
		gf_t_mc_busan_stock_mgmt.t_rec.cy_alwnc_days			:= p_cy_alwnc_days;
		gf_t_mc_busan_stock_mgmt.t_rec.cy_alwnc_end_dt			:= p_cy_alwnc_end_dt;
		gf_t_mc_busan_stock_mgmt.t_rec.cy_delay_amt				:= p_cy_delay_amt;
		gf_t_mc_busan_stock_mgmt.t_rec.cy_delay_days			:= p_cy_delay_days;
		gf_t_mc_busan_stock_mgmt.t_rec.cy_takeout_dt			:= p_cy_takeout_dt;
		gf_t_mc_busan_stock_mgmt.t_rec.cy_takeout_sch_dt		:= p_cy_takeout_sch_dt;
		gf_t_mc_busan_stock_mgmt.t_rec.delay_rsn				:= p_delay_rsn;
		
		gf_t_mc_busan_stock_mgmt.p_insert;
 		RETURN;
	END;
END p_mc_busan_stock_mgmt;