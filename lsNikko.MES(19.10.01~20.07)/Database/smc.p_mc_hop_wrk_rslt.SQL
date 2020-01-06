-- Package: smc.p_mc_hop_wrk_rslt

-- DROP PACKAGE p_mc_hop_wrk_rslt;

CREATE OR REPLACE PACKAGE p_mc_hop_wrk_rslt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_hop_wrk_rslt
 * Description      - 저광사일지
 ******************************************************************************/

	TYPE v_cur IS REF CURSOR;
	
	-- [SC2110] Hopper작업실적 조회
	PROCEDURE p_search(p_find_dt character varying, p_ins_dt character varying, OUT p_cur v_cur);
	-- [SC2110] 광석 투입실적 조회(광석 1/2공장)
	PROCEDURE p_mineral_tp_search(p_find_dt character varying, p_ins_dt character varying, OUT p_cur v_cur);
	-- [SC2110] 고불순물 조회(불순물 1/2공장)
	PROCEDURE p_no_mineral_tp_search(p_find_dt character varying, p_ins_dt character varying, OUT p_cur v_cur);
	-- [SC2110] Hopper작업실적 등록
	PROCEDURE p_hopper_op_performance_regist(p_find_dt character varying, p_ins_dt character varying);
	-- [SC2110] Hopper작업실적 수정
	PROCEDURE p_hopper_op_performance_update(p_find_dt character varying, p_ins_dt character varying, p_end_fl character varying, p_wrk_seq character varying);
	-- [SC2112] 선박정보 조회
	PROCEDURE p_sc2112_search_vessel_info(p_find_dt character varying, p_ins_dt character varying, OUT p_cur v_cur);
	-- [SC2112] 창고작업실적 조회
	PROCEDURE p_sc2112_search_wrk_status(p_find_dt character varying, p_ins_dt character varying, OUT p_cur v_cur);
	-- [SC2112] 창고작업내역 조회
	PROCEDURE p_sc2112_search_wr_wrk_contents(p_chk_tp character varying, p_find_dt character varying, p_ins_dt character varying, OUT p_cur v_cur);
	-- [SC2112] 홀더별작업실적 조회
	PROCEDURE p_sc2112_search_holder_wrk_rslt(p_holder_no character varying, p_rm_wh_loc_cd character varying, p_chk_tp character varying, p_find_dt character varying, p_ins_dt character varying, OUT p_cur v_cur);
	-- [SC2112] 창고작업실적 등록 및 수정
	PROCEDURE p_sc2112_save_wr_wrk_status(p_ins_dt character varying, p_wrk_dt character varying, p_wrk_seq numeric, p_wrk_tp character varying, p_wrker_nm character varying, p_wrk_sta_time character varying, p_wrk_end_time character varying, p_wrk_dur numeric, p_wrk_sta_time2 character varying, p_wrk_end_time2 character varying, p_wrk_dur2 numeric, p_r_c numeric, p_bon_wgt numeric, p_r_t numeric, p_trbl_sta_time character varying, p_trbl_end_time character varying, p_trbl_dur numeric, p_remark character varying);
	-- [SC2112] 창고작업내역 등록 및 수정
	PROCEDURE p_sc2112_save_wr_wrk_contents(p_ins_dt character varying, p_wrk_dt character varying, p_chk_tp character varying, p_chk_seq numeric, p_chk_sta_time character varying, p_chk_end_time character varying, p_chk_contents character varying);
	-- [SC2112] 홀더별작업실적 등록 및 수정
	PROCEDURE p_sc2112_save_holder_wrk_rslt(p_ins_dt character varying, p_wrk_dt character varying, p_rm_wh_loc_cd character varying, p_holder_no character varying, p_holder_line character varying, p_mineral_tp character varying, p_stock_wgt character varying, p_wrk_sts character varying, p_in_dt character varying, p_1p_per character varying, p_2p_per character varying);
	-- [SC2112] 창고작업실적 삭제
	PROCEDURE p_sc2112_delete_wr_wrk_status(p_wrk_dt character varying, p_wrk_seq numeric);
	-- [SC2112] 창고작업내역 삭제
	PROCEDURE p_sc2112_delete_wr_wrk_contents(p_wrk_dt character varying, p_chk_tp character varying, p_chk_seq numeric);
	-- [SC2112] 홀더별작업실적 삭제
	PROCEDURE p_sc2112_delete_holder_wrk_rslt(p_wrk_dt character varying, p_rm_wh_loc_cd character varying);
	-- [SC2352] 황산작업조회
	PROCEDURE p_sc2352_search(p_find_dt character varying, p_ins_dt character varying, OUT p_cur v_cur);
	-- [SC2352] 황산작업 등록 및 수정
	PROCEDURE p_sc2352_save(p_ins_dt character varying,p_wrk_dt character varying, p_chk_tp character varying, p_chk_seq character varying, p_chk_sta_time character varying, p_chk_end_time character varying, p_op_contents character varying);
	-- [SC2352] 황산작업삭제
	PROCEDURE p_sc2352_delete(p_wrk_dt character varying, p_chk_tp character varying, p_chk_seq character varying);
END p_mc_hop_wrk_rslt;

CREATE OR REPLACE PACKAGE BODY p_mc_hop_wrk_rslt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_hop_wrk_rslt
 * Description      - 저광사일지
 ******************************************************************************/

	--************************************************************************
	-- [SC2110] Hopper작업실적 조회
	--************************************************************************
	PROCEDURE p_search(p_find_dt character varying, p_ins_dt character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select WRK_DT --hidden
				 , WRK_SEQ --hidden
				 , WRK_SCH_NO AS SCH_NO
				 , MINERAL_TP AS MINERAL_TP
				 --,	(select nvl(sum(nvl(net_wgt,0)),0) from rtpis.lims_anl_pis where bat_no = 'SUB-TOT' and sch_no = 'CN1'||a.wrk_sch_no) in_wgt
				 , 0 AS IN_WGT
				 , CLOSE_YN AS END_FL
				 , BIN_1_WGT AS BIN_1
				 , BIN_2_WGT AS BIN_2
				 , FLUX_WGT  AS BIN_F
				 , BIN_1_WGT + BIN_2_WGT + FLUX_WGT AS PLANT1_SUM
				 , BIN_A_WGT AS BIN_A
				 , BIN_B_WGT AS BIN_B
				 , BIN_C_WGT AS BIN_C
				 , BIN_A_WGT + BIN_B_WGT +BIN_C_WGT AS PLANT2_SUM
				 , BIN_1_WGT + BIN_2_WGT + FLUX_WGT + BIN_A_WGT + BIN_B_WGT +BIN_C_WGT AS TOT_SUM
				 , CURR_WGT  --hidden
				 , REAL_WGT  --hidden
				 , HOLDER_NO AS HOLDER
				 , H_WGT  --hidden
				 , I_WGT  --hidden
				 --,	f_jun_jan('A', p_find_dt, a.sch_no) curr_stock
				 , '' AS CURR_STOCK
			  from T_MC_HOP_WRK_RSLT
			 where WRK_DT = p_find_dt
			 union all 	
			select null  --hidden
				 , 0  --hidden
				 , null
				 , '합계'
				 , 0
				 , null
				 , nvl(sum(bin_1_wgt),0)
				 , nvl(sum(bin_2_wgt),0)
				 , nvl(sum(flux_wgt),0)
				 , nvl(sum(bin_1_wgt),0) + nvl(sum(bin_2_wgt),0) + nvl(sum(flux_wgt),0)
				 , nvl(sum(bin_a_wgt),0)
				 , nvl(sum(bin_b_wgt),0)
				 , nvl(sum(bin_c_wgt),0)
				 , nvl(sum(bin_a_wgt),0) + nvl(sum(bin_b_wgt),0) + nvl(sum(bin_c_wgt),0)
				 , nvl(sum(bin_1_wgt),0) + nvl(sum(bin_2_wgt),0) + nvl(sum(flux_wgt),0) + nvl(sum(bin_a_wgt),0) + nvl(sum(bin_b_wgt),0) + nvl(sum(bin_c_wgt),0)
				 , nvl(sum(curr_wgt),0) --hidden
				 , nvl(sum(real_wgt),0) --hidden
				 , null -- HOLDER_NO
				 , nvl(sum(h_wgt),0) --hidden
				 , nvl(sum(i_wgt),0) --hidden
				 --,	f_jun_jan('B', p_find_dt, ' ') 
				 , '' 
			  from T_MC_HOP_WRK_RSLT
			 where wrk_dt = p_find_dt
			 order by 1, 4;
	END;
	--************************************************************************
	-- [SC2110] 광석 투입실적 조회(광석 1/2공장)
	--************************************************************************
	PROCEDURE p_mineral_tp_search(p_find_dt character varying, p_ins_dt character varying, OUT p_cur v_cur) IS
	v_find_dt character varying;
	v_find_dt_to character varying;
	BEGIN
		v_find_dt := p_find_dt;
		v_find_dt_to := p_find_dt + 1;
		OPEN P_CUR FOR
			select '1P' as PLANT_TP
				 , wrk_dt  --hidden
				 , wrk_seq --hidden
				 , bin_cd	AS BIN_CD
				 , to_char(to_date(hop_sta_dtm,'yyyymmddhh24miss'),'hh24:mi') STA_TIME
				 , to_char(to_date(hop_end_dtm,'yyyymmddhh24miss'),'hh24:mi') END_TIME
				 , round(extract(EPOCH from to_date(hop_end_dtm, 'yyyymmddhh24miss') - to_date(hop_sta_dtm  , 'yyyymmddhh24miss')) / 60)	AS CALC_TIME
				 , hop_a_sch_no --hidden
				 , hop_a_mineral_tp	AS MINERAL_TP_A
				 , hop_a_input_wgt	AS CHANGE_WGT_A
				 , hop_b_sch_no --hidden
				 , hop_b_mineral_tp	AS MINERAL_TP_B
				 , hop_b_input_wgt	AS CHANGE_WGT_B
				 , hop_c_sch_no --hidden
				 , hop_c_mineral_tp	AS MINERAL_TP_C
				 , hop_c_input_wgt	AS CHANGE_WGT_C
				 , hop_d_sch_no --hidden
				 , hop_d_mineral_tp	AS MINERAL_TP_D
				 , hop_d_input_wgt	AS CHANGE_WGT_D
				 , hop_e_sch_no --hidden
				 , hop_e_mineral_tp	AS MINERAL_TP_E
				 , hop_e_input_wgt	AS CHANGE_WGT_E
				 , hop_f_sch_no --hidden
				 , hop_f_mineral_tp	AS MINERAL_TP_F
				 , hop_f_input_wgt	AS CHANGE_WGT_F
				 , hop_g_sch_no --hidden
				 , hop_g_mineral_tp	AS MINERAL_TP_G
				 , hop_g_input_wgt	AS CHANGE_WGT_G
				 , hop_a_input_wgt + hop_b_input_wgt + hop_c_input_wgt + hop_d_input_wgt + hop_e_input_wgt + hop_f_input_wgt + hop_g_input_wgt AS SUM_CHANGE_WGT
				 , hop_h_sch_no --hidden
				 , hop_h_mineral_tp --hidden
				 , hop_h_input_wgt	AS H_WGT
				 , hop_i_sch_no --hidden
				 , hop_i_mineral_tp --hidden
				 , hop_i_input_wgt	AS I_WGT
				 , in_wgt --hidden
			  from T_MC_HOP_INPUT_RSLT
			 where hop_sta_dtm >= v_find_dt||'0600'
			   and hop_sta_dtm < v_find_dt_to||'0600'
			   and bin_cd in ('1', '2', 'F')
		union all 	
			select '1P' as PLANT_TP
				 , null --hidden
				 , 0 --hidden
				 , 'Total'
				 , null
				 , null
				 , nvl(sum(to_number(round(extract(EPOCH from to_date(hop_end_dtm, 'yyyymmddhh24miss') - to_date(hop_sta_dtm  , 'yyyymmddhh24miss')) / 60))),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_a_input_wgt),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_b_input_wgt),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_c_input_wgt),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_d_input_wgt),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_e_input_wgt),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_f_input_wgt),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_g_input_wgt),0)
				 , nvl(sum(hop_a_input_wgt),0) + nvl(sum(hop_b_input_wgt),0) + nvl(sum(hop_c_input_wgt),0) + nvl(sum(hop_d_input_wgt),0) + nvl(sum(hop_e_input_wgt),0) + nvl(sum(hop_f_input_wgt),0) + nvl(sum(hop_g_input_wgt),0)
				 , null --hidden
				 , null --hidden
				 , nvl(sum(hop_h_input_wgt),0)
				 , null --hidden
				 , null --hidden
				 , nvl(sum(hop_i_input_wgt),0)
				 , nvl(sum(in_wgt),0) --hidden
			  from T_MC_HOP_INPUT_RSLT
			 where hop_sta_dtm >= v_find_dt||'0600'
			   and hop_sta_dtm < v_find_dt_to||'0600'
			   and bin_cd in ('1', '2', 'F')
		union all
			select '2P' as PLANT_TP
				 , wrk_dt  --hidden
				 , wrk_seq --hidden
				 , bin_cd	AS BIN_CD
				 , to_char(to_date(hop_sta_dtm,'yyyymmddhh24miss'),'hh24:mi') STA_TIME
				 , to_char(to_date(hop_end_dtm,'yyyymmddhh24miss'),'hh24:mi') END_TIME
				 , round(extract(EPOCH from to_date(hop_end_dtm, 'yyyymmddhh24miss') - to_date(hop_sta_dtm  , 'yyyymmddhh24miss')) / 60)	AS CALC_TIME
				 , hop_a_sch_no --hidden
				 , hop_a_mineral_tp	AS MINERAL_TP_A
				 , hop_a_input_wgt	AS CHANGE_WGT_A
				 , hop_b_sch_no --hidden
				 , hop_b_mineral_tp	AS MINERAL_TP_B
				 , hop_b_input_wgt	AS CHANGE_WGT_B
				 , hop_c_sch_no --hidden
				 , hop_c_mineral_tp	AS MINERAL_TP_C
				 , hop_c_input_wgt	AS CHANGE_WGT_C
				 , hop_d_sch_no --hidden
				 , hop_d_mineral_tp	AS MINERAL_TP_D
				 , hop_d_input_wgt	AS CHANGE_WGT_D
				 , hop_e_sch_no --hidden
				 , hop_e_mineral_tp	AS MINERAL_TP_E
				 , hop_e_input_wgt	AS CHANGE_WGT_E
				 , hop_f_sch_no --hidden
				 , hop_f_mineral_tp	AS MINERAL_TP_F
				 , hop_f_input_wgt	AS CHANGE_WGT_F
				 , hop_g_sch_no --hidden
				 , hop_g_mineral_tp	AS MINERAL_TP_G
				 , hop_g_input_wgt	AS CHANGE_WGT_G
				 , hop_a_input_wgt + hop_b_input_wgt + hop_c_input_wgt + hop_d_input_wgt + hop_e_input_wgt + hop_f_input_wgt + hop_g_input_wgt AS SUM_CHANGE_WGT
				 , hop_h_sch_no --hidden
				 , hop_h_mineral_tp --hidden
				 , hop_h_input_wgt	AS H_WGT
				 , hop_i_sch_no --hidden
				 , hop_i_mineral_tp --hidden
				 , hop_i_input_wgt	AS I_WGT
				 , in_wgt --hidden
			  from T_MC_HOP_INPUT_RSLT
			 where hop_sta_dtm >= v_find_dt||'0600'
			   and hop_sta_dtm < v_find_dt_to||'0600'
			   and bin_cd in ('A','B','C')
		union all 	
			select '2P' as PLANT_TP
				 , null --hidden
				 , 0 --hidden
				 , 'Total'
				 , null
				 , null
				 , nvl(sum(to_number(round(extract(EPOCH from to_date(hop_end_dtm, 'yyyymmddhh24miss') - to_date(hop_sta_dtm  , 'yyyymmddhh24miss')) / 60))),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_a_input_wgt),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_b_input_wgt),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_c_input_wgt),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_d_input_wgt),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_e_input_wgt),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_f_input_wgt),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_g_input_wgt),0)
				 , nvl(sum(hop_a_input_wgt),0) + nvl(sum(hop_b_input_wgt),0) + nvl(sum(hop_c_input_wgt),0) + nvl(sum(hop_d_input_wgt),0) + nvl(sum(hop_e_input_wgt),0) + nvl(sum(hop_f_input_wgt),0) + nvl(sum(hop_g_input_wgt),0)
				 , null --hidden
				 , null --hidden
				 , nvl(sum(hop_h_input_wgt),0)
				 , null --hidden
				 , null --hidden
				 , nvl(sum(hop_i_input_wgt),0)
				 , nvl(sum(in_wgt),0) --hidden
			  from T_MC_HOP_INPUT_RSLT
			 where hop_sta_dtm >= v_find_dt||'0600'
			   and hop_sta_dtm < v_find_dt_to||'0600'
			   and bin_cd in ('A','B','C')
		     order by 1, 2, 3;
	END;
	--************************************************************************
	-- [SC2110] 고불순물 조회(불순물 1/2공장)
	--************************************************************************
	PROCEDURE p_no_mineral_tp_search(p_find_dt character varying, p_ins_dt character varying, OUT p_cur v_cur) IS
	v_find_dt character varying;
	v_find_dt_to character varying;
	BEGIN
		v_find_dt := p_find_dt;
		v_find_dt_to := p_find_dt + 1;
		OPEN P_CUR FOR
			select '1P' as PLANT_TP
				 , wrk_dt  --hidden
				 , wrk_seq --hidden
				 , bin_cd AS BIN_CD
				 , to_char(to_date(hop_sta_dtm,'yyyymmddhh24miss'),'hh24:mi') STA_TIME
				 , to_char(to_date(hop_end_dtm,'yyyymmddhh24miss'),'hh24:mi') END_TIME
				 , round(extract(EPOCH from to_date(hop_end_dtm, 'yyyymmddhh24miss') - to_date(hop_sta_dtm  , 'yyyymmddhh24miss')) / 60)	AS CALC_TIME
				 , hop_a_sch_no_infurity --hidden
				 , hop_a_mineral_tp_infurity AS MINERAL_TP_A
				 , hop_a_input_wgt_infurity AS CHANGE_WGT_A
				 , hop_b_sch_no_infurity --hidden
				 , hop_b_mineral_tp_infurity AS MINERAL_TP_B
				 , hop_b_input_wgt_infurity AS CHANGE_WGT_B
				 , hop_c_sch_no_infurity --hidden
				 , hop_c_mineral_tp_infurity AS MINERAL_TP_C
				 , hop_c_input_wgt_infurity AS CHANGE_WGT_C
				 , hop_d_sch_no_infurity --hidden
				 , hop_d_mineral_tp_infurity AS MINERAL_TP_D
				 , hop_d_input_wgt_infurity AS CHANGE_WGT_D
				 , hop_e_sch_no_infurity --hidden
				 , hop_e_mineral_tp_infurity AS MINERAL_TP_E
				 , hop_e_input_wgt_infurity AS CHANGE_WGT_E
				 , hop_f_sch_no_infurity --hidden
				 , hop_f_mineral_tp_infurity AS MINERAL_TP_F
				 , hop_f_input_wgt_infurity AS CHANGE_WGT_F
				 , hop_g_sch_no_infurity --hidden
				 , hop_g_mineral_tp_infurity AS MINERAL_TP_G
				 , hop_g_input_wgt_infurity AS CHANGE_WGT_G
				 , hop_h_sch_no_infurity --hidden
				 , hop_h_mineral_tp_infurity AS MINERAL_TP_H
				 , hop_h_input_wgt_infurity AS CHANGE_WGT_H
				 , hop_a_input_wgt_infurity + hop_b_input_wgt_infurity + hop_c_input_wgt_infurity + hop_d_input_wgt_infurity + hop_e_input_wgt_infurity + hop_f_input_wgt_infurity + hop_g_input_wgt_infurity AS SUM_CHANGE_WGT
				 , in_wgt --hidden
			  from T_MC_HOP_INPUT_RSLT
			 where hop_sta_dtm >= v_find_dt||'0600'
			   and hop_sta_dtm < v_find_dt_to||'0600'
			   and bin_cd in ('1', '2', 'F')
		union all 	
			select '1P' as PLANT_TP
				 , null --hidden
				 , 0 --hidden
				 , 'Total' 
				 , null
				 , null
				 , nvl(sum(to_number(round(extract(EPOCH from to_date(hop_end_dtm, 'yyyymmddhh24miss') - to_date(hop_sta_dtm  , 'yyyymmddhh24miss')) / 60))),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_a_input_wgt_infurity),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_b_input_wgt_infurity),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_c_input_wgt_infurity),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_d_input_wgt_infurity),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_e_input_wgt_infurity),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_f_input_wgt_infurity),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_g_input_wgt_infurity),0)
				 , null --hidden
				 , null --hidden
				 , nvl(sum(hop_h_input_wgt_infurity),0)
				 , nvl(sum(hop_a_input_wgt_infurity),0) + nvl(sum(hop_b_input_wgt_infurity),0) + nvl(sum(hop_c_input_wgt_infurity),0) + nvl(sum(hop_d_input_wgt_infurity),0) + nvl(sum(hop_e_input_wgt_infurity),0) + nvl(sum(hop_f_input_wgt_infurity),0) + nvl(sum(hop_g_input_wgt_infurity),0) + nvl(sum(hop_h_input_wgt_infurity),0)
				 , nvl(sum(in_wgt),0) --hidden
			  from T_MC_HOP_INPUT_RSLT
			 where hop_sta_dtm >= v_find_dt||'0600'
			   and hop_sta_dtm < v_find_dt_to||'0600'
			   and bin_cd in ('1', '2', 'F')
		union all
			select '2P' as PLANT_TP
				 , wrk_dt  --hidden
				 , wrk_seq --hidden
				 , bin_cd AS BIN_CD
				 , to_char(to_date(hop_sta_dtm,'yyyymmddhh24miss'),'hh24:mi') STA_TIME
				 , to_char(to_date(hop_end_dtm,'yyyymmddhh24miss'),'hh24:mi') END_TIME
				 , round(extract(EPOCH from to_date(hop_end_dtm, 'yyyymmddhh24miss') - to_date(hop_sta_dtm  , 'yyyymmddhh24miss')) / 60)	AS CALC_TIME
				 , hop_a_sch_no_infurity --hidden
				 , hop_a_mineral_tp_infurity AS MINERAL_TP_A
				 , hop_a_input_wgt_infurity AS CHANGE_WGT_A
				 , hop_b_sch_no_infurity --hidden
				 , hop_b_mineral_tp_infurity AS MINERAL_TP_B
				 , hop_b_input_wgt_infurity AS CHANGE_WGT_B
				 , hop_c_sch_no_infurity --hidden
				 , hop_c_mineral_tp_infurity AS MINERAL_TP_C
				 , hop_c_input_wgt_infurity AS CHANGE_WGT_C
				 , hop_d_sch_no_infurity --hidden
				 , hop_d_mineral_tp_infurity AS MINERAL_TP_D
				 , hop_d_input_wgt_infurity AS CHANGE_WGT_D
				 , hop_e_sch_no_infurity --hidden
				 , hop_e_mineral_tp_infurity AS MINERAL_TP_E
				 , hop_e_input_wgt_infurity AS CHANGE_WGT_E
				 , hop_f_sch_no_infurity --hidden
				 , hop_f_mineral_tp_infurity AS MINERAL_TP_F
				 , hop_f_input_wgt_infurity AS CHANGE_WGT_F
				 , hop_g_sch_no_infurity --hidden
				 , hop_g_mineral_tp_infurity AS MINERAL_TP_G
				 , hop_g_input_wgt_infurity AS CHANGE_WGT_G
				 , hop_h_sch_no_infurity --hidden
				 , hop_h_mineral_tp_infurity AS MINERAL_TP_H
				 , hop_h_input_wgt_infurity AS CHANGE_WGT_H
				 , hop_a_input_wgt_infurity + hop_b_input_wgt_infurity + hop_c_input_wgt_infurity + hop_d_input_wgt_infurity + hop_e_input_wgt_infurity + hop_f_input_wgt_infurity + hop_g_input_wgt_infurity AS SUM_CHANGE_WGT
				 , in_wgt --hidden
			  from T_MC_HOP_INPUT_RSLT
			 where hop_sta_dtm >= v_find_dt||'0600'
			   and hop_sta_dtm < v_find_dt_to||'0600'
			   and bin_cd in ('A','B','C')
		union all 	
			select '2P' as PLANT_TP
				 , null --hidden
				 , 0 --hidden
				 , 'Total' 
				 , null
				 , null
				 , nvl(sum(to_number(round(extract(EPOCH from to_date(hop_end_dtm, 'yyyymmddhh24miss') - to_date(hop_sta_dtm  , 'yyyymmddhh24miss')) / 60))),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_a_input_wgt_infurity),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_b_input_wgt_infurity),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_c_input_wgt_infurity),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_d_input_wgt_infurity),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_e_input_wgt_infurity),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_f_input_wgt_infurity),0)
				 , null --hidden
				 , null
				 , nvl(sum(hop_g_input_wgt_infurity),0)
				 , null --hidden
				 , null --hidden
				 , nvl(sum(hop_h_input_wgt_infurity),0)
				 , nvl(sum(hop_a_input_wgt_infurity),0) + nvl(sum(hop_b_input_wgt_infurity),0) + nvl(sum(hop_c_input_wgt_infurity),0) + nvl(sum(hop_d_input_wgt_infurity),0) + nvl(sum(hop_e_input_wgt_infurity),0) + nvl(sum(hop_f_input_wgt_infurity),0) + nvl(sum(hop_g_input_wgt_infurity),0) + nvl(sum(hop_h_input_wgt_infurity),0)
				 , nvl(sum(in_wgt),0) --hidden
			  from T_MC_HOP_INPUT_RSLT
			 where hop_sta_dtm >= v_find_dt||'0600'
			   and hop_sta_dtm < v_find_dt_to||'0600'
			   and bin_cd in ('A','B','C')
			 order by 1, 2, 3;
	END;
	--************************************************************************
	-- [SC2110] Hopper작업실적 등록
	--************************************************************************	
	PROCEDURE p_hopper_op_performance_regist(p_find_dt character varying, p_ins_dt character varying) IS
	v_ins_dt character varying;
	v_ins_dt_to character varying;
	v_count number;
	v_idx number DEFAULT 0;
	BEGIN
		v_ins_dt := p_find_dt;		
		v_ins_dt_to := p_ins_dt;
		select count(*) into v_count from t_mc_hop_wrk_rslt where wrk_dt = v_ins_dt_to;				

		IF v_count != 0 THEN
		   delete from 	t_mc_hop_wrk_rslt where wrk_dt = v_ins_dt_to;		
		END IF;
		GOTO P_REGISTER;

		<<P_REGISTER>>
		FOR  cv_rec IN --Hopper 투입실적 조회
			(select wrk_sch_no
				  , mineral_tp
				  , nvl(sum(wgt0),0) input_wgt
				  , nvl(sum(wgt1),0) bin_1_wgt
				  , nvl(sum(wgt2),0) bin_2_wgt
				  , nvl(sum(wgt3),0) flux_wgt
				  , nvl(sum(wgt4),0) bin_a_wgt
				  , nvl(sum(wgt5),0) bin_b_wgt
				  , nvl(sum(wgt6),0) bin_c_wgt
				  , nvl(sum(wgth),0) h_wgt
				  , nvl(sum(wgti),0) i_wgt
			   from (select hop_a_sch_no as wrk_sch_no
						  ,	hop_a_mineral_tp as mineral_tp
						  ,	sum(hop_a_input_wgt) wgt0
						  ,	sum(decode(bin_cd,'1',hop_a_input_wgt)) wgt1
						  ,	sum(decode(bin_cd,'2',hop_a_input_wgt)) wgt2
						  ,	sum(decode(bin_cd,'F',hop_a_input_wgt)) wgt3
						  ,	sum(decode(bin_cd,'A',hop_a_input_wgt)) wgt4
						  ,	sum(decode(bin_cd,'B',hop_a_input_wgt)) wgt5
						  ,	sum(decode(bin_cd,'C',hop_a_input_wgt)) wgt6
						  ,	0 wgth
						  ,	0 wgti
					   from T_MC_HOP_INPUT_RSLT
					  where	hop_sta_dtm >= v_ins_dt||'0600'
					    and	hop_sta_dtm < v_ins_dt_to||'0600'
					  group by wrk_dt, hop_a_sch_no, hop_a_mineral_tp			
					  union all 				
					 select hop_b_sch_no as wrk_sch_no	
						  ,	hop_b_mineral_tp as mineral_tp			
						  , sum(hop_b_input_wgt) wgt0			
						  , sum(decode(bin_cd,'1',hop_b_input_wgt)) wgt1			
						  , sum(decode(bin_cd,'2',hop_b_input_wgt)) wgt2			
						  , sum(decode(bin_cd,'F',hop_b_input_wgt)) wgt3			
						  , sum(decode(bin_cd,'A',hop_b_input_wgt)) wgt4			
						  , sum(decode(bin_cd,'B',hop_b_input_wgt)) wgt5			
						  , sum(decode(bin_cd,'C',hop_b_input_wgt)) wgt6			
						  , 0 wgth			
						  , 0 wgti
					   from T_MC_HOP_INPUT_RSLT
					  where	hop_sta_dtm >= v_ins_dt||'0600'	
					    and	hop_sta_dtm < v_ins_dt_to||'0600'		
					  group by wrk_dt, hop_b_sch_no, hop_b_mineral_tp			
					  union all 				
					 select hop_c_sch_no as wrk_sch_no	
						  ,	hop_c_mineral_tp as mineral_tp			
						  , sum(hop_c_input_wgt) wgt0			
						  , sum(decode(bin_cd,'1',hop_c_input_wgt)) wgt1			
						  , sum(decode(bin_cd,'2',hop_c_input_wgt)) wgt2			
						  , sum(decode(bin_cd,'F',hop_c_input_wgt)) wgt3			
						  , sum(decode(bin_cd,'A',hop_c_input_wgt)) wgt4			
						  , sum(decode(bin_cd,'B',hop_c_input_wgt)) wgt5			
						  , sum(decode(bin_cd,'C',hop_c_input_wgt)) wgt6			
						  , 0 wgth			
						  , 0 wgti			
					   from T_MC_HOP_INPUT_RSLT			
					  where	hop_sta_dtm >= v_ins_dt||'0600'	
					    and	hop_sta_dtm < v_ins_dt_to||'0600'		
					  group by wrk_dt, hop_c_sch_no, hop_c_mineral_tp			
					  union all
					 select hop_d_sch_no as wrk_sch_no	
						  ,	hop_d_mineral_tp as mineral_tp			
						  , sum(hop_d_input_wgt) wgt0			
						  , sum(decode(bin_cd,'1',hop_d_input_wgt)) wgt1			
						  , sum(decode(bin_cd,'2',hop_d_input_wgt)) wgt2			
						  , sum(decode(bin_cd,'F',hop_d_input_wgt)) wgt3			
						  , sum(decode(bin_cd,'A',hop_d_input_wgt)) wgt4			
						  , sum(decode(bin_cd,'B',hop_d_input_wgt)) wgt5			
						  , sum(decode(bin_cd,'C',hop_d_input_wgt)) wgt6			
						  , 0 wgth			
						  , 0 wgti			
					   from T_MC_HOP_INPUT_RSLT			
					  where	hop_sta_dtm >= v_ins_dt||'0600'	
					    and	hop_sta_dtm < v_ins_dt_to||'0600'		
					  group by wrk_dt, hop_d_sch_no, hop_d_mineral_tp			
					  union all 				
					 select hop_e_sch_no as wrk_sch_no	
						  ,	hop_e_mineral_tp as mineral_tp			
						  , sum(hop_e_input_wgt) wgt0			
						  , sum(decode(bin_cd,'1',hop_e_input_wgt)) wgt1			
						  , sum(decode(bin_cd,'2',hop_e_input_wgt)) wgt2			
						  , sum(decode(bin_cd,'F',hop_e_input_wgt)) wgt3			
						  , sum(decode(bin_cd,'A',hop_e_input_wgt)) wgt4			
						  , sum(decode(bin_cd,'B',hop_e_input_wgt)) wgt5			
						  , sum(decode(bin_cd,'C',hop_e_input_wgt)) wgt6			
						  , 0 wgth			
						  , 0 wgti			
					   from T_MC_HOP_INPUT_RSLT			
					  where	hop_sta_dtm >= v_ins_dt||'0600'	
					    and	hop_sta_dtm < v_ins_dt_to||'0600'		
					  group by wrk_dt, hop_e_sch_no, hop_e_mineral_tp			
					  union all
					 select hop_f_sch_no as wrk_sch_no	
						  ,	hop_f_mineral_tp as mineral_tp			
						  , sum(hop_f_input_wgt) wgt0			
						  , sum(decode(bin_cd,'1',hop_f_input_wgt)) wgt1			
						  , sum(decode(bin_cd,'2',hop_f_input_wgt)) wgt2			
						  , sum(decode(bin_cd,'F',hop_f_input_wgt)) wgt3			
						  , sum(decode(bin_cd,'A',hop_f_input_wgt)) wgt4			
						  , sum(decode(bin_cd,'B',hop_f_input_wgt)) wgt5			
						  , sum(decode(bin_cd,'C',hop_f_input_wgt)) wgt6			
						  , 0 wgth			
						  , 0 wgti			
					   from T_MC_HOP_INPUT_RSLT			
					  where	hop_sta_dtm >= v_ins_dt||'0600'	
					    and	hop_sta_dtm < v_ins_dt_to||'0600'		
					  group by wrk_dt, hop_f_sch_no, hop_f_mineral_tp			
					  union all
					 select hop_g_sch_no as wrk_sch_no	
						  ,	hop_g_mineral_tp as mineral_tp			
						  , sum(hop_g_input_wgt) wgt0			
						  , sum(decode(bin_cd,'1',hop_g_input_wgt)) wgt1			
						  , sum(decode(bin_cd,'2',hop_g_input_wgt)) wgt2			
						  , sum(decode(bin_cd,'F',hop_g_input_wgt)) wgt3			
						  , sum(decode(bin_cd,'A',hop_g_input_wgt)) wgt4			
						  , sum(decode(bin_cd,'B',hop_g_input_wgt)) wgt5			
						  , sum(decode(bin_cd,'C',hop_g_input_wgt)) wgt6			
						  , 0 wgth			
						  , 0 wgti			
					   from T_MC_HOP_INPUT_RSLT			
					  where	hop_sta_dtm >= v_ins_dt||'0600'	
					    and	hop_sta_dtm < v_ins_dt_to||'0600'
					  group by wrk_dt, hop_g_sch_no, hop_g_mineral_tp			
					  union all 				
					 select '0002' as wrk_sch_no
						  ,	hop_i_mineral_tp as mineral_tp		
						  , 1			
						  ,	0			
						  ,	0			
						  ,	0			
						  ,	0			
						  ,	0			
						  ,	0			
						  ,	sum(hop_h_input_wgt) as wgth
						  ,	sum(hop_i_input_wgt) as wgti	
					   from T_MC_HOP_INPUT_RSLT			
					  where	hop_sta_dtm >= v_ins_dt||'0600'	
					    and	hop_sta_dtm < v_ins_dt_to||'0600'		
					  group by wrk_dt, hop_h_mineral_tp, hop_i_mineral_tp)				
					  where wgt0 > 0				
					  group by wrk_sch_no, mineral_tp
			)
		LOOP
			v_idx := v_idx + 1; -- rownumber
			--Hopper 투입실적 등록
			gf_t_mc_hop_wrk_rslt.p_clear;
			gf_t_mc_hop_wrk_rslt.t_rec.wrk_dt 		:= v_ins_dt_to;
			gf_t_mc_hop_wrk_rslt.t_rec.wrk_seq 		:= v_idx;
			gf_t_mc_hop_wrk_rslt.t_rec.wrk_sch_no 	:= cv_rec.wrk_sch_no;
			gf_t_mc_hop_wrk_rslt.t_rec.mineral_tp 	:= cv_rec.mineral_tp;
			gf_t_mc_hop_wrk_rslt.t_rec.bin_1_wgt 	:= cv_rec.bin_1_wgt;
			gf_t_mc_hop_wrk_rslt.t_rec.bin_2_wgt 	:= cv_rec.bin_2_wgt;
			gf_t_mc_hop_wrk_rslt.t_rec.flux_wgt 	:= cv_rec.flux_wgt;
			gf_t_mc_hop_wrk_rslt.t_rec.bin_a_wgt 	:= cv_rec.bin_a_wgt;
			gf_t_mc_hop_wrk_rslt.t_rec.bin_b_wgt 	:= cv_rec.bin_b_wgt;
			gf_t_mc_hop_wrk_rslt.t_rec.bin_c_wgt 	:= cv_rec.bin_c_wgt;
			gf_t_mc_hop_wrk_rslt.t_rec.holder_no	:= '1110';
			gf_t_mc_hop_wrk_rslt.t_rec.h_wgt 		:= cv_rec.h_wgt;
			gf_t_mc_hop_wrk_rslt.t_rec.i_wgt 		:= cv_rec.i_wgt;
			
			gf_t_mc_hop_wrk_rslt.p_insert;
		END LOOP;

		RETURN; -- <<P_INSERT>>
	END;
	--************************************************************************
	-- [SC2110] Hopper작업실적 수정
	--************************************************************************
	PROCEDURE p_hopper_op_performance_update(p_find_dt character varying, p_ins_dt character varying, p_end_fl character varying, p_wrk_seq character varying) IS
	    
	BEGIN
	    gf_t_mc_hop_wrk_rslt.p_select(p_find_dt, p_wrk_seq);

		gf_t_mc_hop_wrk_rslt.t_rec.close_yn					:= p_end_fl;
		gf_t_mc_hop_wrk_rslt.t_rec.wrk_dt					:= p_find_dt;
		gf_t_mc_hop_wrk_rslt.t_rec.wrk_seq					:= p_wrk_seq;
		
		gf_t_mc_hop_wrk_rslt.p_update;
	END;
	--************************************************************************
	-- [SC2112] 선박정보 조회
	--************************************************************************
	PROCEDURE p_sc2112_search_vessel_info(p_find_dt character varying, p_ins_dt character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select distinct sch_no as sch_no_1
				 , vessel_nm as vessel_nm_1
				 , mineral_tp as mineral_tp_1
				 , scom.fc_client_datetime(in_port_dtm) as in_port_dtm_1
				 , vessel_nm2 as vessel_nm_2
				 , sch_no2 as sch_no_2
				 , mineral_tp2 as mineral_tp_2
				 , scom.fc_client_datetime(in_port_dtm2) as in_port_dtm_2
				 , sch_no3 as sch_no_3
				 , vessel_nm3 as vessel_nm_3
				 , mineral_tp3 as mineral_tp_3
				 , scom.fc_client_datetime(in_port_dtm3) as in_port_dtm_3
				 , sch_no4 as sch_no_4
				 , vessel_nm4 as vessel_nm_4
				 , mineral_tp4 as mineral_tp_4
				 , scom.fc_client_datetime(in_port_dtm4) as in_port_dtm_4
			  from t_mc_rm_wh_wrk_rslt	
			 where wrk_dt = p_find_dt;
	END;
	--************************************************************************
	-- [SC2112] 창고작업실적 조회
	--************************************************************************
	PROCEDURE p_sc2112_search_wrk_status(p_find_dt character varying, p_ins_dt character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select wrk_dt  --hidden	
			     , wrk_seq  --hidden	
				 , wrk_tp
				 , wrker_nm
				 , wrk_sta_dtm as wrk_sta_time
				 , wrk_end_dtm as wrk_end_time
				 --, scom.fc_client_datetime(wrk_sta_dtm) as wrk_sta_time
				 --, scom.fc_client_datetime(wrk_end_dtm) as wrk_end_time
				 , wrk_dur
				 , unldg_wgt as r_c
				 , wrk_sta_dtm2 as wrk_sta_time2
				 , wrk_end_dtm2 as wrk_end_time2
				 --, scom.fc_client_datetime(wrk_sta_dtm2) as wrk_sta_time2
				 --, scom.fc_client_datetime(wrk_end_dtm2)	as wrk_end_time2
				 , wrk_dur2	
				 , bon_wgt
				 , trnsf_wgt as r_t
				 , trbl_sta_dtm as trbl_sta_time
				 , trbl_end_dtm as trbl_end_time
				 --, scom.fc_client_datetime(trbl_sta_dtm) as trbl_sta_time
				 --, scom.fc_client_datetime(trbl_end_dtm) as trbl_end_time
				 , trbl_dur
				 , remark
			  from t_mc_rm_wh_wrk_rslt
			 where wrk_dt = p_find_dt;
	END;
	--************************************************************************
	-- [SC2112] 창고작업내역 조회
	-- 신부두 하역사항 / 구부두 하역사항 / 급광사항 / 메모 조회
	-- 신부두 하역사항 	> CHK_TP = '3'
	-- 구부두 하역사항 	> CHK_TP = '0'
	-- 급광사항 		> CHK_TP = '1'
	-- 메모 			> CHK_TP = '2'
	--************************************************************************
	PROCEDURE p_sc2112_search_wr_wrk_contents(p_chk_tp character varying, p_find_dt character varying, p_ins_dt character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select wrk_dt  --hidden	
				 , chk_tp  --hidden	
				 , chk_seq  --hidden	
				 , chk_sta_time
				 , chk_end_time
				 , chk_contents
			  from t_mc_rm_wh_wrk_chk
			 where wrk_dt = p_find_dt
			   and chk_tp = p_chk_tp;
	END;
	--************************************************************************
	-- [SC2112] 홀더별작업실적 조회
	-- 공장저광사 / 제2저광사 / 신부두저광사 / 구부두저광사 / 외부보관장
	-- 공장저광사 	> P_RM_WH_LOC_CD = '1'
	-- 제2저광사 	> P_RM_WH_LOC_CD = '5'
	-- 신부두저광사 	> P_RM_WH_LOC_CD = '4'
	-- 구부두저광사 	> P_RM_WH_LOC_CD = '2'
	-- 외부보관장	> P_RM_WH_LOC_CD = '3'
	--************************************************************************
	PROCEDURE p_sc2112_search_holder_wrk_rslt(p_holder_no character varying, p_rm_wh_loc_cd character varying, p_chk_tp character varying, p_find_dt character varying, p_ins_dt character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select wrk_dt		
				 , rm_wh_loc_cd
				 , holder_no
				 , holder_line
				 , mineral_tp	as MINERAL_TP
				 , stock_wgt	as STOCK_WGT
				 , wrk_sts		AS WRK_STS
				 , input_rate1 as "1P_PER"
				 , input_rate2 as "2P_PER"
				 , in_dt		as IN_DT
			  from t_mc_holder_wrk_rslt
			 where wrk_dt = p_find_dt
			   and rm_wh_loc_cd = p_rm_wh_loc_cd;
	END;
	--************************************************************************
	-- [SC2112] 창고작업실적 등록 및 수정
	--************************************************************************
	PROCEDURE p_sc2112_save_wr_wrk_status(p_ins_dt character varying, p_wrk_dt character varying, p_wrk_seq numeric, p_wrk_tp character varying, p_wrker_nm character varying, p_wrk_sta_time character varying, p_wrk_end_time character varying, p_wrk_dur numeric, p_wrk_sta_time2 character varying, p_wrk_end_time2 character varying, p_wrk_dur2 numeric, p_r_c numeric, p_bon_wgt numeric, p_r_t numeric, p_trbl_sta_time character varying, p_trbl_end_time character varying, p_trbl_dur numeric, p_remark character varying) IS
	v_count number;
	v_seq number;
	BEGIN
		select count(*) into v_count
		  from t_mc_rm_wh_wrk_rslt
		 where wrk_dt = p_ins_dt
		   and wrk_seq = p_wrk_seq;

		IF v_count = 0 THEN
			GOTO P_INSERT;
		ELSE
			GOTO P_UPDATE;
		END IF;
		
		RETURN;
		
		<<P_INSERT>>
		
		select nvl(max(wrk_seq),0) +1 into v_seq
		  from t_mc_rm_wh_wrk_rslt
		 where wrk_dt = p_ins_dt;
		
		gf_t_mc_rm_wh_wrk_rslt.p_clear; 
		
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_dt			:= p_ins_dt;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_seq		:= v_seq;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_tp			:= p_wrk_tp;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrker_nm		:= p_wrker_nm;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_sta_dtm	:= p_wrk_sta_time;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_end_dtm	:= p_wrk_end_time;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_dur		:= p_wrk_dur;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_sta_dtm2	:= p_wrk_sta_time2;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_end_dtm2	:= p_wrk_end_time2;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_dur2		:= p_wrk_dur2;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.unldg_wgt		:= p_r_c;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.bon_wgt		:= p_bon_wgt;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.trnsf_wgt		:= p_r_t;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.trbl_sta_dtm	:= p_trbl_sta_time;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.trbl_end_dtm	:= p_trbl_end_time;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.trbl_dur		:= p_trbl_dur;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.remark			:= p_remark;
		
		gf_t_mc_rm_wh_wrk_rslt.p_insert;
		RETURN;
		 
		<<P_UPDATE>>
		gf_t_mc_rm_wh_wrk_rslt.p_select(p_wrk_dt, p_wrk_seq);
		
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_dt			:= p_wrk_dt;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_seq		:= p_wrk_seq;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_tp			:= p_wrk_tp;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrker_nm		:= p_wrker_nm;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_sta_dtm	:= p_wrk_sta_time;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_end_dtm	:= p_wrk_end_time;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_dur		:= p_wrk_dur;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_sta_dtm2	:= p_wrk_sta_time2;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_end_dtm2	:= p_wrk_end_time2;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.wrk_dur2		:= p_wrk_dur2;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.unldg_wgt		:= p_r_c;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.bon_wgt		:= p_bon_wgt;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.trnsf_wgt		:= p_r_t;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.trbl_sta_dtm	:= p_trbl_sta_time;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.trbl_end_dtm	:= p_trbl_end_time;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.trbl_dur		:= p_trbl_dur;
		gf_t_mc_rm_wh_wrk_rslt.t_rec.remark			:= p_remark;
		
		gf_t_mc_rm_wh_wrk_rslt.p_update; 
		RETURN;
		 
	END;
	--************************************************************************
	-- [SC2112] 창고작업내역 등록 및 수정
	-- 신부두 하역사항 	> CHK_TP = '3'
	-- 구부두 하역사항 	> CHK_TP = '0'
	-- 급광사항 		> CHK_TP = '1'
	-- 메모 			> CHK_TP = '2'
	--************************************************************************
	PROCEDURE p_sc2112_save_wr_wrk_contents(p_ins_dt character varying, p_wrk_dt character varying, p_chk_tp character varying, p_chk_seq numeric, p_chk_sta_time character varying, p_chk_end_time character varying, p_chk_contents character varying) IS
	v_count number;
	v_seq number;
	BEGIN
		select count(*) into v_count
		  from t_mc_rm_wh_wrk_chk
		 where wrk_dt = p_ins_dt
		   and chk_tp = p_chk_tp
		   and chk_seq = p_chk_seq;
		   
		IF v_count = 0 THEN
			GOTO P_INSERT;
		ELSE
			GOTO P_UPDATE;
		END IF;
		
		RETURN;
		
		<<P_INSERT>>
		select nvl(max(chk_seq),0) +1
		  from t_mc_rm_wh_wrk_chk
		  into v_seq
		 where wrk_dt = p_ins_dt;
		
		gf_t_mc_rm_wh_wrk_chk.p_clear;
		
		gf_t_mc_rm_wh_wrk_chk.t_rec.wrk_dt 			:= p_ins_dt;
		gf_t_mc_rm_wh_wrk_chk.t_rec.chk_tp			:= p_chk_tp;
		gf_t_mc_rm_wh_wrk_chk.t_rec.chk_seq			:= v_seq;
		gf_t_mc_rm_wh_wrk_chk.t_rec.chk_sta_time	:= p_chk_sta_time;
		gf_t_mc_rm_wh_wrk_chk.t_rec.chk_end_time	:= p_chk_end_time;
		gf_t_mc_rm_wh_wrk_chk.t_rec.chk_contents	:= p_chk_contents;

		gf_t_mc_rm_wh_wrk_chk.p_insert;
		RETURN;
		
		<<P_UPDATE>>
		gf_t_mc_rm_wh_wrk_chk.p_select(p_wrk_dt, p_chk_tp, p_chk_seq);
		
		gf_t_mc_rm_wh_wrk_chk.t_rec.wrk_dt 			:= p_wrk_dt;
		gf_t_mc_rm_wh_wrk_chk.t_rec.chk_tp			:= p_chk_tp;
		gf_t_mc_rm_wh_wrk_chk.t_rec.chk_seq			:= p_chk_seq;
		gf_t_mc_rm_wh_wrk_chk.t_rec.chk_sta_time	:= p_chk_sta_time;
		gf_t_mc_rm_wh_wrk_chk.t_rec.chk_end_time	:= p_chk_end_time;
		gf_t_mc_rm_wh_wrk_chk.t_rec.chk_contents	:= p_chk_contents;
		
		gf_t_mc_rm_wh_wrk_chk.p_update; 
		RETURN;
	END;
	--************************************************************************
	-- [SC2112] 홀더별작업실적 등록 및 수정
	-- 공장저광사 / 제2저광사 / 신부두저광사 / 구부두저광사 / 외부보관장
	-- 공장저광사 	> P_RM_WH_LOC_CD = '1'
	-- 제2저광사 	> P_RM_WH_LOC_CD = '5'
	-- 신부두저광사 	> P_RM_WH_LOC_CD = '4'
	-- 구부두저광사 	> P_RM_WH_LOC_CD = '2'
	-- 외부보관장	> P_RM_WH_LOC_CD = '3'
	--************************************************************************
	PROCEDURE p_sc2112_save_holder_wrk_rslt(p_ins_dt character varying, p_wrk_dt character varying, p_rm_wh_loc_cd character varying, p_holder_no character varying, p_holder_line character varying, p_mineral_tp character varying, p_stock_wgt character varying, p_wrk_sts character varying, p_in_dt character varying, p_1p_per character varying, p_2p_per character varying) IS
	v_count number;
	BEGIN
		select count(*) into v_count
		  from t_mc_holder_wrk_rslt
		 where wrk_dt = p_ins_dt
		   and rm_wh_loc_cd = p_rm_wh_loc_cd
		   and holder_no = p_holder_no
		   and holder_line = p_holder_line;
		   
		IF v_count = 0 THEN
			GOTO P_INSERT;
		ELSE
			GOTO P_UPDATE;
		END IF;
		
		RETURN;
		
		<<P_INSERT>>
		gf_t_mc_holder_wrk_rslt.p_clear;
		
		gf_t_mc_holder_wrk_rslt.t_rec.wrk_dt 			:= p_ins_dt;
		gf_t_mc_holder_wrk_rslt.t_rec.rm_wh_loc_cd		:= p_rm_wh_loc_cd;
		gf_t_mc_holder_wrk_rslt.t_rec.holder_no			:= p_holder_no;
		gf_t_mc_holder_wrk_rslt.t_rec.holder_line		:= p_holder_line;
		gf_t_mc_holder_wrk_rslt.t_rec.mineral_tp		:= p_mineral_tp;
		gf_t_mc_holder_wrk_rslt.t_rec.stock_wgt			:= p_stock_wgt;
		gf_t_mc_holder_wrk_rslt.t_rec.wrk_sts			:= p_wrk_sts;
		gf_t_mc_holder_wrk_rslt.t_rec.input_rate1		:= p_1p_per;
		gf_t_mc_holder_wrk_rslt.t_rec.input_rate2		:= p_2p_per;
		gf_t_mc_holder_wrk_rslt.t_rec.in_dt				:= p_in_dt;

		gf_t_mc_holder_wrk_rslt.p_insert;
		RETURN;
		
		<<P_UPDATE>>
		gf_t_mc_holder_wrk_rslt.p_select(p_ins_dt, p_rm_wh_loc_cd, p_holder_no, p_holder_line);
		--scom.pkg_error.pr_set_error(p_wrk_dt);
		gf_t_mc_holder_wrk_rslt.t_rec.wrk_dt 			:= p_ins_dt;
		gf_t_mc_holder_wrk_rslt.t_rec.rm_wh_loc_cd		:= p_rm_wh_loc_cd;
		gf_t_mc_holder_wrk_rslt.t_rec.holder_no			:= p_holder_no;
		gf_t_mc_holder_wrk_rslt.t_rec.holder_line		:= p_holder_line;
		gf_t_mc_holder_wrk_rslt.t_rec.mineral_tp		:= p_mineral_tp;
		gf_t_mc_holder_wrk_rslt.t_rec.stock_wgt			:= p_stock_wgt;
		gf_t_mc_holder_wrk_rslt.t_rec.wrk_sts			:= p_wrk_sts;
		gf_t_mc_holder_wrk_rslt.t_rec.input_rate1		:= p_1p_per;
		gf_t_mc_holder_wrk_rslt.t_rec.input_rate2		:= p_2p_per;
		gf_t_mc_holder_wrk_rslt.t_rec.in_dt				:= p_in_dt;
		
		gf_t_mc_holder_wrk_rslt.p_update; 
		RETURN;
	END;
	--************************************************************************
	-- [SC2112] 창고작업실적 삭제
	--************************************************************************
	PROCEDURE p_sc2112_delete_wr_wrk_status(p_wrk_dt character varying, p_wrk_seq numeric) IS
	BEGIN
		gf_t_mc_rm_wh_wrk_rslt.p_delete(p_wrk_dt, p_wrk_seq,'Y');
	END;
	--************************************************************************
	-- [SC2112] 창고작업내역 삭제
	--************************************************************************
	PROCEDURE p_sc2112_delete_wr_wrk_contents(p_wrk_dt character varying, p_chk_tp character varying, p_chk_seq numeric) IS
	BEGIN
		gf_t_mc_rm_wh_wrk_chk.p_delete(p_wrk_dt, p_chk_tp, p_chk_seq,'Y');
	END;
	--************************************************************************
	-- [SC2112] 홀더별작업실적 삭제
	--************************************************************************
	PROCEDURE p_sc2112_delete_holder_wrk_rslt(p_wrk_dt character varying, p_rm_wh_loc_cd character varying) IS
	p_flag character varying(2) DEFAULT 'Y';
	c_tablename CONSTANT character varying(30) DEFAULT 't_mc_holder_wrk_rslt';
	BEGIN
		--gf_t_mc_holder_wrk_rslt.p_delete(p_wrk_dt, p_rm_wh_loc_cd, p_holder_no, p_holder_line, 'Y');
		BEGIN
			DELETE
			  FROM smc.t_mc_holder_wrk_rslt
			 WHERE wrk_dt	= p_wrk_dt
			   AND rm_wh_loc_cd	= p_rm_wh_loc_cd;
			   --AND holder_no	= t_rec.holder_no;
			   --AND holder_line	= t_rec.holder_line;
		EXCEPTION WHEN OTHERS THEN
			scom.pkg_error.pr_chk_error(p_flag, c_tablename, '');
		END;
	END;
	--************************************************************************
	-- [SC2352] 황산작업조회
	--************************************************************************
	PROCEDURE p_sc2352_search(p_find_dt character varying, p_ins_dt character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select WRK_DT  --hidden
				 , CHK_TP  --hidden
				 , CHK_SEQ  --hidden
				 , CHK_STA_TIME
				 , CHK_END_TIME
				 , CHK_CONTENTS AS OP_CONTENTS
			  from T_MC_RM_WH_WRK_CHK
			 where wrk_dt = replace(p_find_dt,'-','')
			   and CHK_TP = '4';
	END;
	--************************************************************************
	-- [SC2352] 황산작업 등록 및 수정
	--************************************************************************	
	PROCEDURE p_sc2352_save(p_ins_dt character varying,p_wrk_dt character varying, p_chk_tp character varying, p_chk_seq character varying, p_chk_sta_time character varying, p_chk_end_time character varying, p_op_contents character varying) IS
	v_count number;
	v_seq	number;
	BEGIN
		select count(*) into v_count
		  from t_mc_rm_wh_wrk_chk
		 where wrk_dt = replace(p_wrk_dt,'-','')
		   and chk_tp = p_chk_tp
		   and chk_seq = p_chk_seq;
		   
		 IF v_count != 0 THEN
			GOTO P_UPDATE;
		 ELSE
			GOTO P_INSERT;
		 END IF;
		 
		 RETURN;
		 
		 <<P_UPDATE>>
			gf_t_mc_rm_wh_wrk_chk.p_select(replace(p_wrk_dt,'-',''), p_chk_tp, p_chk_seq);
			
			gf_t_mc_rm_wh_wrk_chk.t_rec.chk_contents	:= p_op_contents;
			
			gf_t_mc_rm_wh_wrk_chk.p_update;
		 RETURN;
		 
		 <<P_INSERT>>
			select nvl(max(chk_seq),0) +1 into v_seq
			  from t_mc_rm_wh_wrk_chk
			 where wrk_dt = p_ins_dt;
		 
			gf_t_mc_rm_wh_wrk_chk.p_clear;
			
			gf_t_mc_rm_wh_wrk_chk.t_rec.wrk_dt 			:= replace(p_ins_dt,'-','');
			gf_t_mc_rm_wh_wrk_chk.t_rec.chk_tp			:= p_chk_tp;
			gf_t_mc_rm_wh_wrk_chk.t_rec.chk_seq			:= p_chk_seq;
			gf_t_mc_rm_wh_wrk_chk.t_rec.chk_sta_time	:= p_chk_sta_time;
			gf_t_mc_rm_wh_wrk_chk.t_rec.chk_end_time	:= p_chk_end_time;
			gf_t_mc_rm_wh_wrk_chk.t_rec.chk_contents	:= p_op_contents;
			
			gf_t_mc_rm_wh_wrk_chk.p_insert;
		 RETURN;
		 
	END;
	--************************************************************************
	-- [SC2352] 황산작업삭제
	--************************************************************************	
	PROCEDURE p_sc2352_delete(p_wrk_dt character varying, p_chk_tp character varying, p_chk_seq character varying) IS
	BEGIN
		gf_t_mc_rm_wh_wrk_chk.p_select(replace(p_wrk_dt,'-',''), p_chk_tp, p_chk_seq);
		gf_t_mc_rm_wh_wrk_chk.p_delete();
	END;
END p_mc_hop_wrk_rslt;