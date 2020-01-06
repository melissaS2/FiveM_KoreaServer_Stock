-- Package: smc.p_mc_dashboard

-- DROP PACKAGE p_mc_dashboard;

CREATE OR REPLACE PACKAGE p_mc_dashboard
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_dashboard
 * Description      - Dashboard
 ******************************************************************************/

	TYPE v_cur IS REF CURSOR;
	
	-- [SC3110] 구매 Dashboard 조회
	PROCEDURE p_sc3110_search(p_item_tp character varying,p_s_item_cd character varying,p_proceed_yn character varying,p_date_from character varying,p_date_to character varying,OUT p_cur v_cur);
	-- [SC3110] 구매 Dashboard 상세조회
	PROCEDURE p_sc3110_search_detail(p_item_tp character varying,p_proceed_yn character varying,p_date_from character varying,p_date_to character varying,OUT p_cur v_cur);

END p_mc_dashboard;

CREATE OR REPLACE PACKAGE BODY p_mc_dashboard
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_dashboard
 * Description      - Dashboard
 ******************************************************************************/

	--************************************************************************
	-- [SC3110] 구매 Dashboard 조회
	--************************************************************************
	PROCEDURE p_sc3110_search(p_item_tp character varying,p_s_item_cd character varying,p_proceed_yn character varying,p_date_from character varying,p_date_to character varying,OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			SELECT 'DUMMY' AS seq
				 , DECODE("선적전",NULL,'계',item_tp) AS item_tp
				 , SUM("선적전") ||'/'|| SUM("물량(1)") AS BF_LOADING
				 , SUM("항해중") ||'/'|| SUM("물량(2)") AS ON_BOARD
				 , SUM("입항") ||'/'|| SUM("물량(3)") AS IN_PORT
				 , SUM("하역중") ||'/'|| SUM("물량(4)") AS DISCHARGING
				 , SUM("하역완료") ||'/'|| SUM("물량(5)") AS AF_DISCHARGING
				 , SUM("납품준비") ||'/'|| SUM("물량(6)") AS READY
				 , SUM("운송중") ||'/'|| SUM("물량(7)") AS ON_LOAD
				 , SUM("도착") ||'/'|| SUM("물량(8)") AS ARRIVAL
				 , SUM("선적전"+"항해중"+"입항"+"하역중"+"하역완료"+"납품준비"+"운송중"+"도착") ||'/'|| SUM("물량(1)"+"물량(2)"+"물량(3)"+"물량(4)"+"물량(5)"+"물량(6)"+"물량(7)"+"물량(8)") AS TOTAL
			  FROM (SELECT item_tp
						 , SUM("선적전") AS "선적전"
						 , SUM("물량(1)") AS "물량(1)"
						 , SUM("항해중") AS "항해중"
						 , SUM("물량(2)") AS "물량(2)"
						 , SUM("입항") AS "입항"
						 , SUM("물량(3)") AS "물량(3)"
						 , SUM("하역중") AS "하역중"
						 , SUM("물량(4)") AS "물량(4)"
						 , SUM("하역완료") AS "하역완료"
						 , SUM("물량(5)") AS "물량(5)"
						 , SUM("납품준비") AS "납품준비"
						 , SUM("물량(6)") AS "물량(6)"
						 , SUM("운송중") AS "운송중"
						 , SUM("물량(7)") AS "물량(7)"
						 , SUM("도착") AS "도착"
						 , SUM("물량(8)") AS "물량(8)"
					  FROM (SELECT (SELECT attr1 FROM scom.sco_code_detail WHERE master_cd = 'RM_ITEM_CD' AND cd_val = item_cd) AS item_tp
								 , (SELECT COUNT(*) FROM t_mc_purchase_sch_mgmt WHERE prog_sts = '1' AND item_cd = A.item_cd) "선적전"
								 , NVL(sum(case when prog_sts = '1' then ARRIVAL_WMT end),0) AS "물량(1)" -- P
								 , (SELECT COUNT(*) FROM t_mc_purchase_sch_mgmt WHERE prog_sts = '2' AND item_cd = A.item_cd) "항해중"
								 , NVL(sum(case when prog_sts = '2' then ARRIVAL_WMT end),0) AS "물량(2)" -- P
								 , (SELECT COUNT(*) FROM t_mc_purchase_sch_mgmt WHERE prog_sts = '3' AND item_cd = A.item_cd) "입항"
								 , NVL(sum(case when prog_sts = '3' then ARRIVAL_WMT end),0) AS "물량(3)" --P
								 , (SELECT COUNT(*) FROM t_mc_purchase_sch_mgmt WHERE prog_sts = '4' AND item_cd = A.item_cd) "하역중"
								 , NVL(sum(case when prog_sts = '4' then ARRIVAL_WMT end),0) AS "물량(4)" --P
								 , (SELECT COUNT(*) FROM t_mc_purchase_sch_mgmt WHERE prog_sts = '5' AND item_cd = A.item_cd) "하역완료"
								 , NVL(sum(case when prog_sts = '5' then SHIPMT_WMT end),0) AS "물량(5)" --P
								 , (SELECT COUNT(*) FROM t_mc_purchase_sch_mgmt WHERE prog_sts = '6' AND item_cd = A.item_cd) "납품준비"
								 , NVL(sum(case when prog_sts = '6' then SHIPMT_WMT end),0) AS "물량(6)" -- A
								 , (SELECT COUNT(*) FROM t_mc_purchase_sch_mgmt WHERE prog_sts = '7' AND item_cd = A.item_cd) "운송중"
								 , NVL(sum(case when prog_sts = '7' then SHIPMT_WMT end),0) AS "물량(7)" -- A
								 , (SELECT COUNT(*) FROM t_mc_purchase_sch_mgmt WHERE prog_sts = '8' AND item_cd = A.item_cd) "도착"
								 , NVL(sum(case when prog_sts = '8' then SHIPMT_WMT end),0) AS "물량(8)" -- A
							  FROM t_mc_purchase_sch_mgmt A 
							 WHERE DECODE(p_proceed_yn,'PROCEED','1','0') = (CASE WHEN A.arrival_dt IS NULL THEN '1' ELSE '0' END)
							   AND CASE WHEN p_proceed_yn = 'COMPLETE' THEN arrival_dt BETWEEN p_date_from and p_date_to ELSE arrival_dt is null end
							   AND (SELECT ATTR1 FROM scom.sco_code_detail WHERE master_cd = 'RM_ITEM_CD' AND CD_VAL = ITEM_CD) LIKE '%'||p_item_tp||'%'
							   AND A.item_cd LIKE '%'||p_s_item_cd||'%'
							 GROUP BY item_cd,(select attr1 from scom.sco_code_detail where master_cd = 'RM_ITEM_CD' and cd_val = item_cd)) 
					 GROUP BY item_tp)
			  GROUP BY GROUPING SETS((seq,item_tp,
										"선적전","물량(1)",
										"항해중","물량(2)",
										"입항","물량(3)",
										"하역중","물량(4)",
										"하역완료","물량(5)",
										"납품준비","물량(6)",
										"운송중","물량(7)",
										"도착","물량(8)"),
									(SEQ));
	END;

	--************************************************************************
	-- [SC3110] 구매 Dashboard 상세조회
	--************************************************************************
	PROCEDURE p_sc3110_search_detail(p_item_tp character varying,p_proceed_yn character varying,p_date_from character varying,p_date_to character varying,OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select (select attr1 from scom.sco_code_detail where master_cd = 'RM_ITEM_CD' and cd_val = ITEM_CD) AS ITEM_TP
				 , (select cd_nm from scom.sco_code_detail where master_cd = 'RM_ITEM_CD' and cd_val = ITEM_CD)	AS ITEM_NM
				 , DECODE(PROG_STS,'1','선적전','2','항해중','3','입항','4','하역중','5','하역완료','6','납품준비','7','운송중','8','도착') AS PROG_STS
				 , SCH_NO
				 , ARRIVAL_WMT						
				 , ARRIVAL_DMT
				 , SUPPLIER_NM
				 , IMO_NO
				 , VESSEL_NM
				 , MINERAL_TP
				--,	'0' 품목별조합 기준 AS BLEND_TP
				 , ARRIVAL_SCH_DT
				 , ARRIVAL_DT
				 , UNLDG_STA_DT
				 , UNLDG_END_DT
				 , STORE_LOC1
				 , '0' AS STORE_DAYS_BASE
				 , '0' AS STORE_DAYS_RSLT
			  from T_MC_PURCHASE_SCH_MGMT a
			 where decode(p_proceed_yn,'PROCEED','1','0') = (case when a.arrival_dt is null then '1' else '0' end)
			   AND CASE WHEN p_proceed_yn = 'COMPLETE' THEN arrival_dt BETWEEN p_date_from and p_date_to ELSE arrival_dt is null end
			   and (select attr1 from scom.sco_code_detail where master_cd = 'RM_ITEM_CD' and cd_val = ITEM_CD) like '%'||p_item_tp||'%';
	END;
END p_mc_dashboard;