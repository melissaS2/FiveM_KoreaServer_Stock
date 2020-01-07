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
                     , A.DISP_SEQ AS DISP_SEQ
                     , SCOM.FC_CD_NM('RM_COMB_CHAR',A.CD_VAL) AS DISP_COMB_CHAR
                     , A.ATTR1 AS ATTR1
                     , A.ATTR2 AS ATTR2
                     , A.ATTR3 AS ATTR3
                     , SUM(B.STOCK_WMT) AS STOCK_STATUS
                     , SUM(B.STOCK_WMT) - A.ATTR3 AS AVG_STOCK
                  FROM SCOM.SCO_CODE_DETAIL A, T_MC_RM_STOCK B
                 WHERE A.MASTER_CD = 'RM_COMB_CHAR'
                   AND A.PLANT_CD = '1000'
                   AND B.COMB_CHAR = A.CD_VAL
                   AND B.STOCK_DT = v_find_day
                 GROUP BY GROUPING SETS((SEQ,A.DISP_SEQ,CD_VAL,A.ATTR1,A.ATTR2,A.ATTR3))
                 ORDER BY SEQ DESC)
                    SELECT SEQ
                         , DISP_SEQ
                         , DECODE(DISP_COMB_CHAR,NULL,'계',DISP_COMB_CHAR) AS DISP_COMB_CHAR
                         , SUM(ATTR1) AS ATTR1
                         , SUM(ATTR2) AS ATTR2
                         , SUM(ATTR3) AS ATTR3
                         , SUM(STOCK_STATUS) AS STOCK_STATUS
                         , SUM(AVG_STOCK) AS AVG_STOCK
                      FROM RSLT GROUP BY GROUPING SETS((SEQ,DISP_SEQ,DISP_COMB_CHAR),(SEQ))
                     ORDER BY DISP_SEQ;
    END;
END p_mc_rm_stock;