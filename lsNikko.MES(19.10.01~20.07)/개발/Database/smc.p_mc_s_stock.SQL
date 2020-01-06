-- Package: smc.p_mc_s_stock

-- DROP PACKAGE p_mc_s_stock;

CREATE OR REPLACE PACKAGE p_mc_s_stock
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_s_stock
 * Description      - 부두황산재고현황 
 ******************************************************************************/

	TYPE v_cur IS REF CURSOR;
	
	-- 황산재고조회
	PROCEDURE p_search(p_op_dt_fr character varying, p_op_dt_to character varying, OUT p_cur v_cur);
	
	-- 황산재고수정
	PROCEDURE p_save(p_stock_dt character varying, p_lvl_a character varying, p_prod_a character varying, p_lvl_b character varying, p_prod_b character varying, p_lvl_c character varying, p_prod_c character varying, p_98_per character varying, p_96_per character varying, p_blk_s character varying, p_remark character varying, p_ins_time character varying, p_upd_time character varying);
	
	-- 황산재고삭제
	PROCEDURE p_delete(p_stock_dt character varying);
	
END p_mc_s_stock;

CREATE OR REPLACE PACKAGE BODY p_mc_s_stock
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_s_stock
 * Description      - 부두황산재고현황 
 ******************************************************************************/

	--************************************************************************
	-- 황산재고조회
	--************************************************************************
	PROCEDURE p_search(p_op_dt_fr character varying, p_op_dt_to character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
		    select scom.fc_client_date(STOCK_DT) AS STOCK_DT
				 , TANK_A_LVL AS LVL_A
				 , TANK_A_PROD_TP AS PROD_A
				 , TANK_B_LVL AS LVL_B
				 , TANK_B_PROD_TP AS PROD_B
				 , TANK_C_LVL AS LVL_C
				 , TANK_C_PROD_TP AS PROD_C
				 , STOCK_QTY_98_PER AS "98_PER"
				 , STOCK_QTY_96_PER AS "96_PER"
				 , STOCK_QTY_BLK_S AS BLK_S
				 , REMARK
				 , scom.fc_client_datetime(INS_DTM) AS INS_TIME
				 , scom.fc_client_datetime(UPD_DTM) AS UPD_TIME
			  from T_MC_S_STOCK
			 where stock_dt between p_op_dt_fr and p_op_dt_to
			 order by stock_dt;
	END;

	--************************************************************************
	-- 황산재고수정
	--************************************************************************
	PROCEDURE p_save(p_stock_dt character varying, p_lvl_a character varying, p_prod_a character varying, p_lvl_b character varying, p_prod_b character varying, p_lvl_c character varying, p_prod_c character varying, p_98_per character varying, p_96_per character varying, p_blk_s character varying, p_remark character varying, p_ins_time character varying, p_upd_time character varying) IS
		v_count number;
	    --TANK A
		v_tank_a_98		t_mc_s_stock.stock_qty_98_per%TYPE;
		v_tank_a_96		t_mc_s_stock.stock_qty_96_per%TYPE;
		v_tank_a_blk	t_mc_s_stock.stock_qty_blk_s%TYPE;
		--TANK B
		v_tank_b_98		t_mc_s_stock.stock_qty_98_per%TYPE;
		v_tank_b_96		t_mc_s_stock.stock_qty_96_per%TYPE;
		v_tank_b_blk	t_mc_s_stock.stock_qty_blk_s%TYPE;
		--TANK C
		v_tank_c_98		t_mc_s_stock.stock_qty_98_per%TYPE;
		v_tank_c_96		t_mc_s_stock.stock_qty_98_per%TYPE;
		v_tank_c_blk	t_mc_s_stock.stock_qty_blk_s%TYPE;
		--SUM
		v_stock_98 		t_mc_s_stock.stock_qty_98_per%TYPE;
		v_stock_96 		t_mc_s_stock.stock_qty_98_per%TYPE;
		v_stock_blk		t_mc_s_stock.stock_qty_blk_s%TYPE;
	BEGIN
		--calc TANK A ~ C value start
	    v_tank_a_98  := case when p_lvl_a > 0 and p_prod_a in ('SP01','SP03','SP04','SP06') then  spio.p_mst_biz_std.f_calc_cmpx('1000','MC_D0010','', 'A',p_lvl_a)  else 0 end;
		v_tank_a_96  := case when p_lvl_a > 0 and p_prod_a in ('SP02','SP07') then  spio.p_mst_biz_std.f_calc_cmpx('1000','MC_D0010','', 'A',p_lvl_a)  else 0 end;
		v_tank_a_blk := case when p_lvl_a > 0 and p_prod_a in ('SP05') then  spio.p_mst_biz_std.f_calc_cmpx('1000','MC_D0010','', 'A',p_lvl_a)  else 0 end;
		
		v_tank_b_98  := case when p_lvl_b > 0 and p_prod_a in ('SP01','SP03','SP04','SP06') then  spio.p_mst_biz_std.f_calc_cmpx('1000','MC_D0010','', 'B',p_lvl_b)  else 0 end;
		v_tank_b_96  := case when p_lvl_b > 0 and p_prod_a in ('SP02','SP07') then  spio.p_mst_biz_std.f_calc_cmpx('1000','MC_D0010','', 'B',p_lvl_b)  else 0 end;
		v_tank_b_blk := case when p_lvl_b > 0 and p_prod_a in ('SP05') then  spio.p_mst_biz_std.f_calc_cmpx('1000','MC_D0010','', 'B',p_lvl_b)  else 0 end;

		v_tank_c_98  := case when p_lvl_c > 0 and p_prod_a in ('SP01','SP03','SP04','SP06') then  spio.p_mst_biz_std.f_calc_cmpx('1000','MC_D0010','', 'C',p_lvl_c)  else 0 end;
		v_tank_c_96  := case when p_lvl_c > 0 and p_prod_a in ('SP02','SP07') then  spio.p_mst_biz_std.f_calc_cmpx('1000','MC_D0010','', 'C',p_lvl_c)  else 0 end;
		v_tank_c_blk := case when p_lvl_c > 0 and p_prod_a in ('SP05') then  spio.p_mst_biz_std.f_calc_cmpx('1000','MC_D0010','', 'C',p_lvl_c)  else 0 end;
		--end
		
		--sum TANK A~C value by prod type
		v_stock_98 := v_tank_a_98 + v_tank_b_98 + v_tank_c_98;
		v_stock_96 := v_tank_a_96 + v_tank_b_96 + v_tank_c_96;
		v_stock_blk:= v_tank_a_blk + v_tank_b_blk + v_tank_c_blk;
		
		select count(*) into v_count
		  from t_mc_s_stock
		 where stock_dt = p_stock_dt;
		
		IF v_count != 0 THEN
			GOTO P_UPDATE;
		ELSE
			GOTO P_INSERT;
		END IF;
		
		RETURN;
		
		<<P_UPDATE>>
		gf_t_mc_s_stock.p_select(p_stock_dt);

		gf_t_mc_s_stock.t_rec.stock_dt			:= p_stock_dt;
		gf_t_mc_s_stock.t_rec.tank_a_lvl		:= p_lvl_a;
		gf_t_mc_s_stock.t_rec.tank_a_prod_tp	:= p_prod_a;
		gf_t_mc_s_stock.t_rec.tank_a_prod_nm	:= fc_cd_nm('S_PROD_TP', p_prod_a);
		gf_t_mc_s_stock.t_rec.tank_b_lvl		:= p_lvl_b;
		gf_t_mc_s_stock.t_rec.tank_b_prod_tp	:= p_prod_b;
		gf_t_mc_s_stock.t_rec.tank_b_prod_nm	:= fc_cd_nm('S_PROD_TP', p_prod_b);
		gf_t_mc_s_stock.t_rec.tank_c_lvl		:= p_lvl_c;
		gf_t_mc_s_stock.t_rec.tank_c_prod_tp	:= p_prod_c;
		gf_t_mc_s_stock.t_rec.tank_c_prod_nm  	:= fc_cd_nm('S_PROD_TP', p_prod_c);
		gf_t_mc_s_stock.t_rec.stock_qty_98_per 	:= v_stock_98;
		gf_t_mc_s_stock.t_rec.stock_qty_96_per 	:= v_stock_96;
		gf_t_mc_s_stock.t_rec.stock_qty_blk_s 	:= v_stock_blk;
		gf_t_mc_s_stock.t_rec.remark 			:= p_remark;
		gf_t_mc_s_stock.t_rec.ins_dtm 			:= p_ins_time;
		gf_t_mc_s_stock.t_rec.upd_dtm 			:= to_char(sysdate,'yyyymmddhh24miss');

		gf_t_mc_s_stock.p_update;
		RETURN;
		
		<<P_INSERT>>
		gf_t_mc_s_stock.p_clear;

		gf_t_mc_s_stock.t_rec.stock_dt			:= p_stock_dt;
		gf_t_mc_s_stock.t_rec.tank_a_lvl		:= p_lvl_a;
		gf_t_mc_s_stock.t_rec.tank_a_prod_tp	:= p_prod_a;
		gf_t_mc_s_stock.t_rec.tank_a_prod_nm	:= fc_cd_nm('S_PROD_TP', p_prod_a);
		gf_t_mc_s_stock.t_rec.tank_b_lvl		:= p_lvl_b;
		gf_t_mc_s_stock.t_rec.tank_b_prod_tp	:= p_prod_b;
		gf_t_mc_s_stock.t_rec.tank_b_prod_nm	:= fc_cd_nm('S_PROD_TP', p_prod_b);
		gf_t_mc_s_stock.t_rec.tank_c_lvl		:= p_lvl_c;
		gf_t_mc_s_stock.t_rec.tank_c_prod_tp	:= p_prod_c;
		gf_t_mc_s_stock.t_rec.tank_c_prod_nm  	:= fc_cd_nm('S_PROD_TP', p_prod_c);
		gf_t_mc_s_stock.t_rec.stock_qty_98_per 	:= v_stock_98;
		gf_t_mc_s_stock.t_rec.stock_qty_96_per 	:= v_stock_96;
		gf_t_mc_s_stock.t_rec.stock_qty_blk_s 	:= v_stock_blk;
		gf_t_mc_s_stock.t_rec.remark 			:= p_remark;
		gf_t_mc_s_stock.t_rec.ins_dtm 			:= to_char(sysdate,'yyyymmddhh24miss');
		gf_t_mc_s_stock.t_rec.upd_dtm 			:= p_upd_time;
		
		gf_t_mc_s_stock.p_insert;
 		RETURN;

	END;
	--************************************************************************
	-- 황산재고삭제
	--************************************************************************
	PROCEDURE p_delete(p_stock_dt character varying) IS
	BEGIN
		gf_t_mc_s_stock.p_select(p_stock_dt);
		gf_t_mc_s_stock.p_delete();
	END;
	
END p_mc_s_stock;