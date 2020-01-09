-- Package: smc.p_mc_premtl_wip_mgmt

-- DROP PACKAGE p_mc_premtl_wip_mgmt;

CREATE OR REPLACE PACKAGE p_mc_premtl_wip_mgmt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_premtl_wip_mgmt
 * Description      - 기타제품재고조회
 ******************************************************************************/

	TYPE v_cur IS REF CURSOR;
	
	--[SC2343]조회
	PROCEDURE p_sc2343_search(p_find_dt character varying, OUT p_cur v_cur);
END p_mc_premtl_wip_mgmt;

CREATE OR REPLACE PACKAGE BODY p_mc_premtl_wip_mgmt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_premtl_wip_mgmt
 * Description      - 기타제품재고조회
 ******************************************************************************/

	--************************************************************************
	-- 기타제품재고조회
	--************************************************************************
	PROCEDURE p_sc2343_search(p_find_dt character varying, OUT p_cur v_cur) IS
	v_find_dt spio.t_ma_premtl_wip_mgmt.op_dt%TYPE;
    BEGIN
        v_find_dt := replace(p_find_dt,'-','');
		OPEN P_CUR FOR
            with rslt as (
                select 1 as seq											
                     , 'Ag Paste' as wrk_nm											
                     , a.wip_item_cd											
                     , b.cd_nm											
                     , (select cd_nm from scom.sco_code_detail where plant_cd = '1000' and master_cd = 'UOM' and use_yn = 'Y' and cd_val = b.attr2) as unit_cd											
                     , nvl(a.in_day, 0) as in_day
                     , nvl(a.in_mnt, 0) as in_mnt
                     , nvl(a.in_year, 0) as in_year
                     , nvl(a.out_day, 0) as out_day
                     , nvl(a.out_mnt, 0) as out_mnt
                     , nvl(a.out_year, 0) as out_year
                     , nvl(a.curr_wip, 0) as curr_wip
                  from spio.t_ma_premtl_wip_mgmt a											
                     , scom.sco_code_detail b											
                 where a.wip_item_cd = b.cd_val											
                 --and a.fac_cd = 'PM'    --아직 미정											
                 --and wip_top_tp = 'E6'  --아직 미정											
                   and a.op_dt = p_find_dt											
                   and b.plant_cd = '1000'											
                   and b.master_cd = 'PREMTL_WIP_ITEM_CD' 											
                 --and b.tags like 'MC3'    --아직 미정											
                   and use_yn = 'Y'											
                union all											
                select 3 as seq											
                     , 'Ag Powder'											
                     , a.wip_item_cd											
                     , b.cd_nm											
                     , (select cd_nm from scom.sco_code_detail where plant_cd = '1000' and master_cd = 'UOM' and use_yn = 'Y' and cd_val = b.attr2) as unit_cd											
                     , nvl(a.in_day, 0) as in_day
                     , nvl(a.in_mnt, 0) as in_mnt
                     , nvl(a.in_year, 0) as in_year
                     , nvl(a.out_day, 0) as out_day
                     , nvl(a.out_mnt, 0) as out_mnt
                     , nvl(a.out_year, 0) as out_year
                     , nvl(a.curr_wip, 0) as curr_wip											
                  from spio.t_ma_premtl_wip_mgmt a											
                     , scom.sco_code_detail b											
                 where a.wip_item_cd = b.cd_val											
                 --and a.fac_cd = 'PM'    --아직 미정											
                 --and wip_top_tp = 'E6'  --아직 미정											
                   and a.op_dt = p_find_dt											
                   and b.plant_cd = '1000'											
                   and b.master_cd = 'PREMTL_WIP_ITEM_CD' 											
                 --and b.tags like 'MC3'    --아직 미정											
                   and use_yn = 'Y'											
                union all											
                select 5 as seq											
                     , 'Bi/Sn 조업'											
                     , a.wip_item_cd											
                     , b.cd_nm											
                     , (select cd_nm from scom.sco_code_detail where plant_cd = '1000' and master_cd = 'UOM' and use_yn = 'Y' and cd_val = b.attr2) as unit_cd											
                     , nvl(a.in_day, 0) as in_day
                     , nvl(a.in_mnt, 0) as in_mnt
                     , nvl(a.in_year, 0) as in_year
                     , nvl(a.out_day, 0) as out_day
                     , nvl(a.out_mnt, 0) as out_mnt
                     , nvl(a.out_year, 0) as out_year
                     , nvl(a.curr_wip, 0) as curr_wip										
                  from spio.t_ma_premtl_wip_mgmt a											
                     , scom.sco_code_detail b											
                 where a.wip_item_cd = b.cd_val											
                   --and a.fac_cd = 'PM'    --아직 미정											
                   --and wip_top_tp = 'E6'  --아직 미정											
                   and a.op_dt = p_find_dt											
                   and b.plant_cd = '1000'											
                   and b.master_cd = 'PREMTL_WIP_ITEM_CD' 											
                   --and b.tags like 'MC3'    --아직 미정											
                   and use_yn = 'Y'											
                 order by seq						
            ) select seq
                   , wrk_nm as wrk_nm
                   , wip_item_cd as prod_cd
                   , decode(cd_nm,null,'Sub Total',cd_nm) as prod_nm
                   , unit_cd as unit_cd
                   , sum(in_day) as in_day
                   , sum(in_mnt) as in_mnt
                   , sum(in_year) as in_year
                   , sum(out_day) as out_day
                   , sum(out_mnt) as out_mnt
                   , sum(out_year) as out_year
                   , sum(curr_wip) as curr_wip
                from rslt
               group by grouping sets((seq,wrk_nm,wip_item_cd,cd_nm,unit_cd),
                        (seq,wrk_nm))
               order by seq;
	END;
END p_mc_premtl_wip_mgmt;

