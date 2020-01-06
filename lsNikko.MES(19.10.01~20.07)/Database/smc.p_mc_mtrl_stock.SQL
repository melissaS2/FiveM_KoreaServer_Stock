-- Package: smc.p_mc_mtrl_stock

-- DROP PACKAGE p_mc_mtrl_stock;

CREATE OR REPLACE PACKAGE p_mc_mtrl_stock
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_mtrl_stock
 * Description      - 저장품재고현황
 ******************************************************************************/

	TYPE v_cur IS REF CURSOR;
	
	--[SC3250]저장품 재고현황 조회(기간별)
	PROCEDURE p_sc3250_search(p_mtrl_fr character varying, p_mtrl_to character varying, p_find_fr character varying, p_find_to character varying, OUT p_cur v_cur);
	--[SC3251]저장품 재고현황 조회(기간별)
	PROCEDURE p_sc3251_search(p_mtrl_group character varying, p_find_fr character varying, p_find_to character varying, OUT p_cur v_cur);
	--[SC3252]저장품 재고현황 조회(기간별/Graph)
	PROCEDURE p_sc3252_search(p_find_fr character varying, p_find_to character varying, OUT p_cur v_cur);
	--[SC3253]저장품 재고현황 조회(연별)
	PROCEDURE p_sc3253_search(p_find_fr character varying, p_find_to character varying, OUT p_cur v_cur);
	--[SC3255]저장품 재고현황 조회(월별)
	PROCEDURE p_sc3255_search(p_find_fr character varying, p_find_to character varying, OUT p_cur v_cur);
	--[SC3257]고액저장품리스트조회
	PROCEDURE p_sc3257_search(p_mtrl_fr character varying, p_mtrl_to character varying, p_find_mnt character varying, OUT p_cur v_cur);
	--[SC3260]저장품보유기간별현황조회
	PROCEDURE p_sc3260_search(p_mtrl_fr character varying, p_mtrl_to character varying, p_find_fr character varying, OUT p_cur v_cur);
	--[SC3261]저장품보유기간별현황상세
	PROCEDURE p_sc3261_search(p_mtrl_group character varying, p_find_mnt character varying, OUT p_cur v_cur);
	--[SC3262]저장품보유기간별현황조회(Graph)
	PROCEDURE p_sc3262_search(p_find_fr character varying, OUT p_cur v_cur);
END p_mc_mtrl_stock;

CREATE OR REPLACE PACKAGE BODY p_mc_mtrl_stock
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_mtrl_stock
 * Description      - 저장품재고현황
 ******************************************************************************/

	--************************************************************************
	--저장품 재고현황 조회(기간별)
	--************************************************************************
	PROCEDURE p_sc3250_search(p_mtrl_fr character varying, p_mtrl_to character varying, p_find_fr character varying, p_find_to character varying, OUT p_cur v_cur) IS
	v_find_mnt_fr t_mc_mtrl_stock_mntly.stock_mnt%TYPE;
	v_find_mnt_to t_mc_mtrl_stock_mntly.stock_mnt%TYPE;
	BEGIN
		v_find_mnt_fr := replace(p_find_fr,'-','');
		v_find_mnt_to := replace(p_find_to,'-','');
		OPEN P_CUR FOR
			with result as (select '1' as seq
								 , decode(mtrl_group,null,'총계',mtrl_group) as mtrl_group
								 , decode(mtrl_group,null,null,mtrl_group_nm) as mtrl_group_nm
								 , sum(bas_stock_qty) as bas_stock_qty
								 , sum(bas_stock_amt) as bas_stock_amt
								 , sum(in_qty) as in_qty
								 , sum(in_amt) as in_amt
								 , sum(out_qty) as out_qty
								 , sum(out_amt) as out_amt
								 , sum(endg_stock_amt) as endg_stock_amt
								 , sum(endg_stock_qty) as endg_stock_qty
								 , sum(stock_inc_dec_amt) as stock_inc_dec_amt
								 , sum(stock_inc_dec_qty) as stock_inc_dec_qty
							  from (select tbl_1.mtrl_group as mtrl_group
										 , scom.fc_cd_nm('MTRL_GROUP', tbl_1.mtrl_group) as mtrl_group_nm
										 , nvl((select bas_stock_qty from t_mc_mtrl_stock_mntly where mtrl_group = tbl_1.mtrl_group and stock_mnt = v_find_mnt_fr),0) as bas_stock_qty -- 기초재고량
										 , nvl((select bas_stock_amt from t_mc_mtrl_stock_mntly where mtrl_group = tbl_1.mtrl_group and stock_mnt = v_find_mnt_fr),0) as bas_stock_amt -- 기초재고액
										 , SUM(nvl(IN_QTY,0)) AS in_qty -- 입고수량
										 , SUM(nvl(IN_AMT,0)) AS in_amt --입고금액
										 , SUM(nvl(OUT_QTY,0)) AS out_qty -- 출고수량
										 , SUM(nvl(OUT_AMT,0)) AS out_amt -- 출고금액
										 , nvl((select endg_stock_amt from t_mc_mtrl_stock_mntly where mtrl_group = tbl_1.mtrl_group and stock_mnt = v_find_mnt_to),0) as endg_stock_amt --기말재고액
										 , nvl((select endg_stock_qty from t_mc_mtrl_stock_mntly where mtrl_group = tbl_1.mtrl_group and stock_mnt = v_find_mnt_to),0) as endg_stock_qty --기말재고량
										 , nvl((select bas_stock_qty from t_mc_mtrl_stock_mntly where mtrl_group = tbl_1.mtrl_group and stock_mnt = v_find_mnt_fr),0) - nvl((select endg_stock_qty from t_mc_mtrl_stock_mntly where mtrl_group = tbl_1.mtrl_group and stock_mnt = v_find_mnt_to),0) as stock_inc_dec_amt
										 , nvl((select bas_stock_amt from t_mc_mtrl_stock_mntly where mtrl_group = tbl_1.mtrl_group and stock_mnt = v_find_mnt_fr),0) - nvl((select endg_stock_amt from t_mc_mtrl_stock_mntly where mtrl_group = tbl_1.mtrl_group and stock_mnt = v_find_mnt_to),0) as stock_inc_dec_qty
									  from (select cd_val as mtrl_group 
											  from scom.sco_code_detail 
											 where plant_cd = '1000'
											   and master_cd = 'MTRL_GROUP' and use_yn = 'Y'
											   and cd_val between p_mtrl_fr and p_mtrl_to) tbl_1
										 , (select mtrl_group
												 , in_qty
												 , in_amt
												 , out_qty
												 , out_amt 
											  from t_mc_mtrl_stock_mntly 
											 where stock_mnt between v_find_mnt_fr and v_find_mnt_to) tbl_2
									--t_mc_mtrl_stock_mntly tbl_2
									 where tbl_1.mtrl_group = tbl_2.mtrl_group(+)
									 group by tbl_1.mtrl_group)
							 group by grouping sets((seq,mtrl_group,mtrl_group_nm,bas_stock_qty,bas_stock_amt,in_qty,in_amt,out_qty,out_amt,endg_stock_qty,endg_stock_amt,stock_inc_dec_amt,stock_inc_dec_qty)
													,(seq))
							) select decode(mtrl_group_nm,null,'0',seq) as seq
								   , mtrl_group
								   , mtrl_group_nm
								   , bas_stock_qty
								   , bas_stock_amt
								   , in_qty
								   , in_amt
								   , out_qty
								   , out_amt
								   , endg_stock_amt
								   , endg_stock_qty
								   , stock_inc_dec_amt
								   , stock_inc_dec_qty
								from result 
							   order by seq,mtrl_group;
	END;
	
	--************************************************************************
	--[SC3251]저장품 재고현황 조회(기간별)
	--************************************************************************
	PROCEDURE p_sc3251_search(p_mtrl_group character varying, p_find_fr character varying, p_find_to character varying, OUT p_cur v_cur) IS
	v_find_mnt_fr t_mc_mtrl_stock_mntly.stock_mnt%TYPE;
	v_find_mnt_to t_mc_mtrl_stock_mntly.stock_mnt%TYPE;
	BEGIN
		v_find_mnt_fr := replace(p_find_fr,'-','');
		v_find_mnt_to := replace(p_find_to,'-','');
		OPEN P_CUR FOR
			with result as(select '1' as seq 
								, mtrl_group
								, stock_mnt
								, mtrl_cd
								, mtrl_nm
								, wh_cd
								, sum(nvl(bas_stock_qty,0)) bas_stock_qty
								, sum(nvl(bas_stock_amt,0)) bas_stock_amt
								, sum(nvl(in_qty,0)) in_qty
								, sum(nvl(in_amt,0)) in_amt
								, sum(nvl(out_qty,0)) out_qty
								, sum(nvl(out_amt,0)) out_amt
								, sum(nvl(endg_stock_amt,0)) as endg_stock_amt
								, sum(nvl(endg_stock_qty,0)) as endg_stock_qty
								, sum(nvl(bas_stock_amt,0)) - sum(nvl(endg_stock_amt,0)) as stock_inc_dec_amt
								, sum(nvl(bas_stock_qty,0)) - sum(nvl(endg_stock_qty,0)) as stock_inc_dec_qty
							 from t_mc_mtrl_stock_summ 
							where stock_mnt between v_find_mnt_fr and v_find_mnt_to
							  and mtrl_group = p_mtrl_group
							  and plant_cd = '1000'
							group by grouping sets((seq,mtrl_group,stock_mnt,mtrl_cd,mtrl_nm, wh_cd)
												,(seq))
						  )select decode(mtrl_cd,null,'0','1') as seq
								, stock_mnt
								, decode(mtrl_cd,null,'총계',mtrl_cd) as mtrl_cd
								, mtrl_nm
								, bas_stock_qty
								, bas_stock_amt
								, in_qty
								, in_amt
								, out_qty
								, out_amt
								, endg_stock_amt
								, endg_stock_qty
								, stock_inc_dec_amt
								, stock_inc_dec_qty 
							 from result
							order by seq,stock_mnt; 
	END;
	--************************************************************************
	--[SC3252]저장품 재고현황 조회(기간별/Graph)
	--************************************************************************
	PROCEDURE p_sc3252_search(p_find_fr character varying, p_find_to character varying, OUT p_cur v_cur) IS
	v_find_mnt_fr t_mc_mtrl_stock_mntly.stock_mnt%TYPE;
	v_find_mnt_to t_mc_mtrl_stock_mntly.stock_mnt%TYPE;
	BEGIN
		v_find_mnt_fr := replace(p_find_fr,'-','');
		v_find_mnt_to := replace(p_find_to,'-','');
		OPEN P_CUR FOR
			select tbl_2.stock_mnt
				 , tbl_2.mtrl_group as mtrl_group
				 , scom.fc_cd_nm('MTRL_GROUP', tbl_2.mtrl_group) as mtrl_group_nm
				 , tbl_2.endg_stock_qty
				 , tbl_2.endg_stock_amt
			  from (select mtrl_group
						 , stock_mnt
						 , endg_stock_qty
						 , endg_stock_amt
					  from t_mc_mtrl_stock_mntly 
					 where stock_mnt between v_find_mnt_fr and v_find_mnt_to) tbl_2
			 order by 1,2;
	END;
	--************************************************************************
	--[SC3253]저장품 재고현황 조회(연별)
	--************************************************************************	
	PROCEDURE p_sc3253_search(p_find_fr character varying, p_find_to character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			SELECT STOCK_YEAR
				 , MTRL_GROUP
				 , SCOM.FC_CD_NM('MTRL_GROUP', MTRL_GROUP) AS MTRL_GROUP_NM
				 , ITEM_CNT
				 , STOCK_QTY
				 , STOCK_AMT
			  FROM T_MC_MTRL_STOCK_YEARLY
			 WHERE STOCK_YEAR BETWEEN P_FIND_FR AND P_FIND_TO
			 ORDER BY STOCK_YEAR,MTRL_GROUP;
	END;
	--************************************************************************
	--[SC3255]저장품 재고현황 조회(월별)
	--************************************************************************	
	PROCEDURE p_sc3255_search(p_find_fr character varying, p_find_to character varying, OUT p_cur v_cur) IS
	v_find_mnt_fr t_mc_mtrl_stock_mntly.stock_mnt%TYPE;
	v_find_mnt_to t_mc_mtrl_stock_mntly.stock_mnt%TYPE;
	BEGIN
		v_find_mnt_fr := replace(p_find_fr,'-','');
		v_find_mnt_to := replace(p_find_to,'-','');
		OPEN P_CUR FOR
			SELECT MTRL_GROUP
				 , SCOM.FC_CD_NM('MTRL_GROUP', MTRL_GROUP) AS MTRL_GROUP_NM
				 , STOCK_MNT
				 , ENDG_STOCK_AMT
				 , ENDG_STOCK_QTY
			  FROM T_MC_MTRL_STOCK_MNTLY
			 WHERE STOCK_MNT BETWEEN v_find_mnt_fr AND v_find_mnt_to
			 ORDER BY STOCK_MNT,MTRL_GROUP;
	END;
	--************************************************************************
	--[SC3257]고액저장품리스트조회
	--************************************************************************	
	PROCEDURE p_sc3257_search(p_mtrl_fr character varying, p_mtrl_to character varying, p_find_mnt character varying, OUT p_cur v_cur) IS
	v_find_mnt t_mc_mtrl_stock_summ.stock_mnt%TYPE;
	BEGIN
		v_find_mnt := replace(p_find_mnt,'-','');
		OPEN P_CUR FOR
			SELECT MTRL_CD
				 , MTRL_NM
				 , MTRL_GROUP
				 , SCOM.FC_CD_NM('MTRL_GROUP', MTRL_GROUP) AS MTRL_GROUP_NM
				 , UNIT_CD
				 , BAS_STOCK_QTY
				 , BAS_STOCK_AMT
				 , WH_CD
			  FROM T_MC_MTRL_STOCK_SUMM 
			 WHERE BAS_STOCK_AMT >= 10000000 AND STOCK_MNT = v_find_mnt
			   AND MTRL_GROUP BETWEEN p_mtrl_fr AND p_mtrl_to
			 ORDER BY MTRL_GROUP;
	END;
	--************************************************************************
	--[SC3260]저장품보유기간별현황조회
	--************************************************************************
	PROCEDURE p_sc3260_search(p_mtrl_fr character varying, p_mtrl_to character varying, p_find_fr character varying, OUT p_cur v_cur) IS
	v_find_mnt t_mc_mtrl_stock_hold.stock_mnt%TYPE;
	BEGIN
		v_find_mnt := replace(p_find_fr,'-','');
		OPEN P_CUR FOR
			SELECT DECODE(B.MTRL_GROUP,NULL,'합계',B.MTRL_GROUP) AS MTRL_GROUP
				 , DECODE(B.MTRL_GROUP,NULL,'',scom.fc_cd_nm('MTRL_GROUP', B.MTRL_GROUP)) AS MTRL_GROUP_NM 
				 , DECODE(B.MTRL_GROUP,NULL,'',MAX(STOCK_MNT)) AS STOCK_MNT
				 , SUM(STOCK_AMT_01) AS STOCK_AMT_01
				 , SUM(STOCK_QTY_01) AS STOCK_QTY_01
				 , SUM(STOCK_AMT_02) AS STOCK_AMT_02
				 , SUM(STOCK_QTY_02) AS STOCK_QTY_02
				 , SUM(STOCK_AMT_03) AS STOCK_AMT_03
				 , SUM(STOCK_QTY_03) AS STOCK_QTY_03
				 , SUM(STOCK_AMT_04) AS STOCK_AMT_04
				 , SUM(STOCK_QTY_04) AS STOCK_QTY_04
				 , SUM(STOCK_AMT_05) AS STOCK_AMT_05
				 , SUM(STOCK_QTY_05) AS STOCK_QTY_05
				 , SUM(STOCK_AMT_06) AS STOCK_AMT_06
				 , SUM(STOCK_QTY_06) AS STOCK_QTY_06
				 , SUM(STOCK_AMT_07) AS STOCK_AMT_07
				 , SUM(STOCK_QTY_07) AS STOCK_QTY_07
				 , SUM(STOCK_AMT_08) AS STOCK_AMT_08
				 , SUM(STOCK_QTY_08) AS STOCK_QTY_08
				 , SUM(STOCK_AMT_09) AS STOCK_AMT_09
				 , SUM(STOCK_QTY_09) AS STOCK_QTY_09
				 , SUM(STOCK_AMT_10) AS STOCK_AMT_10
				 , SUM(STOCK_QTY_10) AS STOCK_QTY_10
				 , SUM(STOCK_AMT_11) AS STOCK_AMT_11
				 , SUM(STOCK_QTY_11) AS STOCK_QTY_11
				 , SUM(STOCK_AMT_12) AS STOCK_AMT_12
				 , SUM(STOCK_QTY_12) AS STOCK_QTY_12
				 , SUM(STOCK_AMT_13) AS STOCK_AMT_13
				 , SUM(STOCK_QTY_13) AS STOCK_QTY_13
				 , SUM(STOCK_AMT_14) AS STOCK_AMT_14
				 , SUM(STOCK_QTY_14) AS STOCK_QTY_14
			  FROM T_MC_MTRL_STOCK_HOLD B,
				  (SELECT CD_VAL AS MTRL_GROUP 
					 FROM SCOM.SCO_CODE_DETAIL 
					WHERE PLANT_CD = '1000'
					  AND MASTER_CD = 'MTRL_GROUP' AND USE_YN = 'Y'
					  AND CD_VAL BETWEEN p_mtrl_fr AND p_mtrl_to) A
			 WHERE STOCK_MNT = v_find_mnt
			   AND B.MTRL_GROUP(+) = A.MTRL_GROUP
			 GROUP BY GROUPING SETS((B.MTRL_GROUP),(STOCK_MNT))
			 ORDER BY MTRL_GROUP;
	END;
	--************************************************************************
	--[SC3261]저장품보유기간별현황상세
	--************************************************************************
	PROCEDURE p_sc3261_search(p_mtrl_group character varying, p_find_mnt character varying, OUT p_cur v_cur) IS
	v_find_mnt t_mc_mtrl_stock_summ.stock_mnt%TYPE;
	BEGIN
		v_find_mnt := replace(p_find_mnt,'-','');
		OPEN P_CUR FOR
			SELECT MTRL_GROUP AS MTRL_GROUP
				 , SCOM.FC_CD_NM('MTRL_GROUP', MTRL_GROUP) AS MTRL_GROUP_NM
				 , STOCK_MNT AS STOCK_MNT
				 , MTRL_CD AS MTRL_CD
				 , MTRL_NM AS MTRL_NM
				 , FINAL_IN_DT AS FINAL_IN_DT
				 , STOCK_AMT_01 AS STOCK_AMT_01
				 , STOCK_QTY_01 AS STOCK_QTY_01
			  FROM T_MC_MTRL_STOCK_HOLD
			 WHERE STOCK_MNT = V_FIND_MNT AND MTRL_GROUP = P_MTRL_GROUP;
	END;
	--************************************************************************
	--[SC3262]저장품보유기간별현황조회(Graph)
	--************************************************************************
	PROCEDURE p_sc3262_search(p_find_fr character varying, OUT p_cur v_cur) IS
	v_find_mnt t_mc_mtrl_stock_summ.stock_mnt%TYPE;
	BEGIN
		v_find_mnt := replace(p_find_fr,'-','');
		OPEN P_CUR FOR
			SELECT DECODE(MTRL_GROUP,NULL,'합계',MTRL_GROUP) AS MTRL_GROUP
				 , DECODE(MTRL_GROUP,NULL,'',scom.fc_cd_nm('MTRL_GROUP', MTRL_GROUP)) AS MTRL_GROUP_NM 
				 , DECODE(MTRL_GROUP,NULL,'',MAX(STOCK_MNT)) AS STOCK_MNT
				 , SUM(STOCK_AMT_01) AS STOCK_AMT_01
				 , SUM(STOCK_QTY_01) AS STOCK_QTY_01
				 , SUM(STOCK_AMT_02) AS STOCK_AMT_02
				 , SUM(STOCK_QTY_02) AS STOCK_QTY_02
				 , SUM(STOCK_AMT_03) AS STOCK_AMT_03
				 , SUM(STOCK_QTY_03) AS STOCK_QTY_03
				 , SUM(STOCK_AMT_04) AS STOCK_AMT_04
				 , SUM(STOCK_QTY_04) AS STOCK_QTY_04
				 , SUM(STOCK_AMT_05) AS STOCK_AMT_05
				 , SUM(STOCK_QTY_05) AS STOCK_QTY_05
				 , SUM(STOCK_AMT_06) AS STOCK_AMT_06
				 , SUM(STOCK_QTY_06) AS STOCK_QTY_06
				 , SUM(STOCK_AMT_07) AS STOCK_AMT_07
				 , SUM(STOCK_QTY_07) AS STOCK_QTY_07
				 , SUM(STOCK_AMT_08) AS STOCK_AMT_08
				 , SUM(STOCK_QTY_08) AS STOCK_QTY_08
				 , SUM(STOCK_AMT_09) AS STOCK_AMT_09
				 , SUM(STOCK_QTY_09) AS STOCK_QTY_09
				 , SUM(STOCK_AMT_10) AS STOCK_AMT_10
				 , SUM(STOCK_QTY_10) AS STOCK_QTY_10
				 , SUM(STOCK_AMT_11) AS STOCK_AMT_11
				 , SUM(STOCK_QTY_11) AS STOCK_QTY_11
				 , SUM(STOCK_AMT_12) AS STOCK_AMT_12
				 , SUM(STOCK_QTY_12) AS STOCK_QTY_12
				 , SUM(STOCK_AMT_13) AS STOCK_AMT_13
				 , SUM(STOCK_QTY_13) AS STOCK_QTY_13
				 , SUM(STOCK_AMT_14) AS STOCK_AMT_14
				 , SUM(STOCK_QTY_14) AS STOCK_QTY_14
			  FROM T_MC_MTRL_STOCK_HOLD
			 WHERE STOCK_MNT = v_find_mnt
			 GROUP BY MTRL_GROUP
			 ORDER BY MTRL_GROUP;
	END;
END p_mc_mtrl_stock;