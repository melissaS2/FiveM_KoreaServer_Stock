-- Package: smc.p_mc_rm_stock

-- DROP PACKAGE p_mc_rm_stock;

CREATE OR REPLACE PACKAGE p_mc_rm_stock
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_rm_stock
 * Description      - 동정광재고현황조회
 ******************************************************************************/

	TYPE v_cur IS REF CURSOR;
	
	--[SC3210]조회
	PROCEDURE p_search(p_find_day character varying, OUT p_cur v_cur);
    --[SC3210]통계조회
    PROCEDURE p_search_summary(p_find_day character varying,OUT p_cur v_cur);
    --[SC3211]기간별 재고 조회 그래프
    PROCEDURE p_search_chart(p_item_cd character varying, p_find_fr character varying, p_find_to character varying, OUT p_cur v_cur);
    --[SC3212]위치별 재고 조회 
    PROCEDURE p_search_pos_stock(p_item_cd character varying, p_stock_dt character varying, p_wh_cd character varying, OUT p_cur v_cur);
END p_mc_rm_stock;

CREATE OR REPLACE PACKAGE BODY p_mc_rm_stock
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_rm_stock
 * Description      - 동정광재고현황조회
 ******************************************************************************/

	--************************************************************************
	-- 조회
	--************************************************************************
	PROCEDURE p_search(p_find_day character varying, OUT p_cur v_cur) IS
	v_find_day T_MC_RM_STOCK.STOCK_DT%TYPE;
    BEGIN
        v_find_day := replace(p_find_day,'-','');
		OPEN P_CUR FOR
			SELECT MAX(B.ITEM_CD) AS ITEM_CD
                 , SCOM.FC_CD_NM('RM_ITEM_CD', MAX(B.ITEM_CD)) AS ITEM_NM
                 , MAX(A.DISP_SEQ)
                 , NVL(B.STORE_LOC,'') AS STORE_LOC
                 , A.ATTR1 AS STORE_LOC_NM
                 , DECODE(B.STORE_LOC,NULL,'소계',A.ATTR2||'/'|| A.ATTR3) AS HOLD_CAPA
                 , DECODE(B.STORE_LOC,NULL,'',NVL(B.SCH_NO,'-')) AS SCH_NO
                 , DECODE(B.STORE_LOC,NULL,'',NVL(B.MINERAL_TP,'-')) AS MINERAL_TP
                 , DECODE(B.STORE_LOC,NULL,'',NVL(SCOM.FC_CD_NM('RM_COMB_CHAR', B.COMB_CHAR),'-')) AS COMB_CHAR
                 , DECODE(B.STORE_LOC,NULL,'',NVL(B.IN_WMT,0.000)) AS IN_WMT
                 , NVL(SUM(B.STOCK_WMT),0.000) AS STOCK_WMT
                 , NVL(SCOM.FC_CLIENT_DATE(B.RM_IN_DT),'') AS RM_IN_DT
                 , DECODE(B.STORE_LOC,NULL,'',NVL(A.ATTR4,'-')) AS STORE_DUR_BAS
                 , DECODE(B.STORE_LOC,NULL,'',TO_NUMBER(B.RM_IN_DT) - TO_CHAR(SYSDATE, 'YYYYMMDD')) AS STORE_DUR_RSLT
              FROM SCOM.SCO_CODE_DETAIL A, T_MC_RM_STOCK B
             WHERE A.MASTER_CD = 'RM_STORE_LOC_CU'
               AND A.PLANT_CD = '1000' AND A.CD_VAL = B.STORE_LOC
               AND B.STOCK_DT = v_find_day
             GROUP BY GROUPING SETS((B.STORE_LOC,A.ATTR1,A.ATTR2,A.ATTR3,B.SCH_NO,B.MINERAL_TP,B.COMB_CHAR,B.IN_WMT,B.RM_IN_DT,A.ATTR4)
                 , (A.ATTR1))
             ORDER BY MAX(A.DISP_SEQ),B.STORE_LOC;
	END;
    --************************************************************************
    --[SC3210]통계조회
    --************************************************************************
    PROCEDURE p_search_summary(p_find_day character varying, OUT p_cur v_cur) IS
    v_find_day T_MC_RM_STOCK.STOCK_DT%TYPE;
    BEGIN
        v_find_day := replace(p_find_day,'-','');
        OPEN P_CUR FOR
            WITH RSLT AS (
                SELECT '1' AS SEQ
                     , SCOM.FC_CD_NM('RM_COMB_CHAR', A.CD_VAL) AS DISP_COMB_CHAR
                     , A.CD_VAL AS CD_VAL
                     , NVL(A.ATTR1,0) AS ATTR1
                     , NVL(A.ATTR2,0) AS ATTR2
                     , NVL(A.ATTR3,0) AS ATTR3
                     , NVL(B.STOCK_WMT,0) AS STOCK_STATUS
                     , NVL(B.STOCK_WMT - A.ATTR3,0) AS AVG_STOCK
                  FROM (SELECT CD_VAL
                             , ATTR1
                             , ATTR2
                             , ATTR3
                          FROM SCOM.SCO_CODE_DETAIL
                         WHERE MASTER_CD = 'RM_COMB_CHAR'
                           AND PLANT_CD = '1000') A
                     , (SELECT COMB_CHAR
                             , SUM(STOCK_WMT) AS STOCK_WMT
                          FROM T_MC_RM_STOCK
                         WHERE STOCK_DT = v_find_day
                         GROUP BY COMB_CHAR) B
                 WHERE B.COMB_CHAR(+) = A.CD_VAL)
                SELECT SEQ
                     , CD_VAL
                     , DECODE(DISP_COMB_CHAR,NULL,'계',DISP_COMB_CHAR) AS DISP_COMB_CHAR
                     , SUM(ATTR1) AS ATTR1
                     , SUM(ATTR2) AS ATTR2
                     , SUM(ATTR3) AS ATTR3
                     , SUM(STOCK_STATUS) AS STOCK_STATUS
                     , SUM(AVG_STOCK) AS AVG_STOCK
                  FROM RSLT
                 GROUP BY GROUPING SETS((SEQ,CD_VAL,DISP_COMB_CHAR),(SEQ))
                 ORDER BY CD_VAL;
    END;
    --************************************************************************
    --[SC3211]그래프조회
    --************************************************************************
    PROCEDURE p_search_chart(p_item_cd character varying, p_find_fr character varying, p_find_to character varying, OUT p_cur v_cur) IS
    v_find_fr T_MC_RM_STOCK.STOCK_DT%TYPE;
    v_find_to T_MC_RM_STOCK.STOCK_DT%TYPE;
    BEGIN
        v_find_fr := replace(p_find_fr,'-','');
        v_find_to := replace(p_find_to,'-','');
        OPEN P_CUR FOR
            SELECT B.STOCK_DT
                 , A.ATTR3 AS OPTIMUM_STOCK
                 , B.STOCK_WMT AS STOCK_WGT
                 , ROUND(B.STOCK_WMT / A.ATTR3 * 100,0) AS STOCK_RATE
              FROM (SELECT SUM(ATTR3) AS ATTR3
                      FROM SCOM.SCO_CODE_DETAIL
                     WHERE MASTER_CD = 'RM_COMB_CHAR'
                       AND PLANT_CD = '1000') A
                 , (SELECT STOCK_DT
                         , SUM(STOCK_WMT) AS STOCK_WMT
                      FROM T_MC_RM_STOCK
                     WHERE STOCK_DT BETWEEN v_find_fr AND v_find_to
                       AND ITEM_CD = p_item_cd
                     GROUP BY STOCK_DT) B
              ORDER BY STOCK_DT;
    END;
    --************************************************************************
    --[SC3212]위치별 재고 조회 
    --************************************************************************
    PROCEDURE p_search_pos_stock(p_item_cd character varying, p_stock_dt character varying, p_wh_cd character varying, OUT p_cur v_cur) IS
    v_stock_dt T_MC_RM_STOCK.STOCK_DT%TYPE;
    BEGIN
    v_stock_dt := replace(p_stock_dt,'-','');
        OPEN P_CUR FOR
            WITH RSLT AS (
                SELECT B.ATTR2 AS STORE_LOC
                     , B.ATTR3 AS STORE_CAPA
                     , A.SCH_NO AS SCH_NO
                     , NVL(A.STOCK_WMT,0) AS STOCK_WMT
                     , NVL(ROUND(A.STOCK_WMT / B.ATTR3 * 100,0),0) || '%' AS STORE_RATE
                  FROM (SELECT STORE_LOC
                             , SCH_NO
                             , STOCK_WMT
                          FROM T_MC_RM_STOCK
                         WHERE STOCK_DT = v_stock_dt
                           AND ITEM_CD = p_item_cd) A,
                       (SELECT CD_VAL
                             , ATTR2
                             , ATTR3
                          FROM SCOM.SCO_CODE_DETAIL
                         WHERE PLANT_CD = '1000'
                           AND MASTER_CD = 'RM_STORE_LOC_CU'
                           AND ATTR5 = p_wh_cd) B
                 WHERE A.STORE_LOC = B.CD_VAL
            )   SELECT '1' SEQ
                     , DECODE(STORE_LOC,NULL,'합계',STORE_LOC) AS STORE_LOC
                     , SUM(STORE_CAPA) AS STORE_CAPA
                     , DECODE(SCH_NO,NULL,'-',SCH_NO) AS SCH_NO
                     , SUM(STOCK_WMT) AS STOCK_WMT
                     , STORE_RATE
                  FROM RSLT
                 GROUP BY GROUPING SETS((SEQ,STORE_LOC,SCH_NO,STORE_RATE),(SEQ))
                 ORDER BY SEQ, STORE_LOC;
    END;
END p_mc_rm_stock;