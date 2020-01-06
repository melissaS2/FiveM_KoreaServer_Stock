-- Package: smc.p_mc_s_wrk_rslt

-- DROP PACKAGE p_mc_s_wrk_rslt;

CREATE OR REPLACE PACKAGE p_mc_s_wrk_rslt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_s_wrk_rslt
 * Description      - 황산선박작업등록
 ******************************************************************************/

	TYPE v_cur IS REF CURSOR;
	
	-- 황산작업 조회
	PROCEDURE p_search(p_find_mnt_fr character varying, p_find_mnt_to character varying, OUT p_cur v_cur);

	-- 월별 MAX NO 조회
	PROCEDURE p_search_maxno(p_wrk_mnt character varying, OUT p_cur v_cur);

	-- 황산작업 저장
	PROCEDURE p_save(p_wrk_mnt character varying, p_wrk_no character varying, p_vessel_nm character varying, p_shipmt_qty character varying, p_in_port_dtm character varying, p_brhng_dtm character varying, p_wrk_end_dtm character varying, p_out_port_dtm character varying, p_brhng_time character varying, p_wrk_time character varying, p_port_nm character varying, p_wrk_mth character varying, p_etc_contents character varying, p_stock_qty character varying, p_remark character varying, p_acqstn_cmp_nm character varying, p_acqstn_cmp_addr character varying, p_acqstn_cmp_tel_no character varying);
	
	-- 황산작업 삭제
	PROCEDURE p_delete(wrk_mnt character varying, wrk_no character varying);
	
END p_mc_s_wrk_rslt;

CREATE OR REPLACE PACKAGE BODY p_mc_s_wrk_rslt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_s_wrk_rslt
 * Description      - 황산선박 작업조회
 ******************************************************************************/

	--************************************************************************
	-- 황산작업 조회
	--************************************************************************
	PROCEDURE p_search(p_find_mnt_fr character varying, p_find_mnt_to character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select 
				'1' as seq
				 , case 
					when wrk_mnt IS NULL then '누계 (H)'
					when wrk_no IS NULL and c_month IS NOT NULL then substring(wrk_mnt,0,5)||'년'||lpad(substring(wrk_mnt,5),2,'0')||'월소계(H)' 
					when wrk_no IS NULL and c_month IS NULL then '월평균선적시간(H)' 
					else wrk_mnt end as wrk_mnt
				 , decode(wrk_no,null,null,wrk_no) as wrk_no
				 , c_month
				 , decode(wrk_no,null,null,vessel_nm) as vessel_nm
				 , decode(c_month,null,null,shipmt_qty) as shipmt_qty 
				 , decode(wrk_no,null,null,in_port_dtm) as in_port_dtm
				 , decode(wrk_no,null,null,brhng_dtm) as brhng_dtm 
				 , decode(wrk_no,null,null,wrk_end_dtm) as wrk_end_dtm
				 , decode(wrk_no,null,null,out_port_dtm) as out_port_dtm
				 , case 
					when wrk_mnt IS NULL then nvl(to_char(round(CAST(brhng_time/60 as numeric),2),'FM999,999,999.99'),'0') --누계
					when wrk_no IS NULL and c_month IS NOT NULL then to_char(round(CAST(brhng_time/60 as numeric),2),'FM999,999,990.00')  -- 월소계
					when wrk_no IS NULL and c_month IS NULL then to_char(round(CAST(brhng_time/60 / (select decode(count(*),0,1,count(*)) from t_mc_s_wrk_rslt a where a.wrk_mnt = b.wrk_mnt) as numeric),2),'FM999,999,990.00')
					else to_char(brhng_time,'FM999,999,999') end as brhng_time-- 접안일시 - 입항일시 ( brhng_dtm - in_port_dtm )
				 , case 
					when wrk_mnt IS NULL then nvl(to_char(round(CAST(wrk_time/60 as numeric),2),'FM999,999,999.99'),'0')  -- 누계 
					when wrk_no IS NULL and c_month IS NOT NULL then to_char(round(CAST(wrk_time/60 as numeric),2),'FM999,999,990.00')  -- 월소계
					when wrk_no IS NULL and c_month IS NULL then to_char(round(CAST(wrk_time/60 / (select decode(count(*),0,1,count(*)) from t_mc_s_wrk_rslt a where a.wrk_mnt = b.wrk_mnt) as numeric),2),'FM999,999,990.00')
					else to_char(wrk_time,'FM999,999,999') end as wrk_time -- 작업완료일시 - 접안일시 ( wrk_end_dtm - brhng_dtm)
				 , decode(wrk_no,null,null,port_nm) as port_nm
				 , decode(wrk_no,null,null,wrk_mth) as wrk_mth
				 , decode(wrk_no,null,null,etc_contents) as etc_contents
				 , decode(wrk_no,null,null,stock_qty) as stock_qty
				 , decode(wrk_no,null,null,acqstn_cmp_nm) as acqstn_cmp_nm
				 , decode(wrk_no,null,null,acqstn_cmp_addr) as acqstn_cmp_addr
				 , decode(wrk_no,null,null,acqstn_cmp_tel_no) as acqstn_cmp_tel_no
			  from (select wrk_mnt as wrk_mnt
				 	 	 , wrk_seq as wrk_no
				 	 	 , substring(wrk_mnt,5) as c_month
				 	 	 , max(vessel_nm) as vessel_nm
				 	 	 , sum(shipmt_qty) as shipmt_qty
				 		 , scom.fc_client_datetime(max(in_port_dtm)) as in_port_dtm
				 		 , scom.fc_client_datetime(max(brhng_dtm)) as brhng_dtm
				 		 , scom.fc_client_datetime(max(wrk_end_dtm)) as wrk_end_dtm
				 		 , scom.fc_client_datetime(max(out_port_dtm)) as out_port_dtm
				 		 , sum(brhng_dur) as brhng_time
						 , sum(wrk_dur) as wrk_time
				 		 , max(port_nm) as port_nm
				 		 , max(wrk_mth) as wrk_mth
				 		 , max(etc_contents) as etc_contents
				 		 , max(stock_qty) as stock_qty
				 		 , max(acqstn_cmp_nm) as acqstn_cmp_nm
				 		 , max(acqstn_cmp_addr) as acqstn_cmp_addr
				 		 , max(replace(acqstn_cmp_tel_no,'-','')) as acqstn_cmp_tel_no
			  		  from t_mc_s_wrk_rslt
			 		 where wrk_mnt between replace(p_find_mnt_fr,'-','') and replace(p_find_mnt_to,'-','')
			 		 group by rollup(wrk_mnt,c_month,(wrk_mnt,wrk_seq))) b
				union all 
					select 
						 '2' as seq
						 ,'누적평균선적시간(H)'
						 , null
						 , '　'
						 , null
						 , null
						 , null
						 , null
						 , null
						 , null
						 , to_char(round(CAST(sum(brhng_dur)/60 / (select nvl(count(*),0) from t_mc_s_wrk_rslt where wrk_mnt between '201911' and '201912') as numeric),2),'FM999,999,990.00')  as brhng_time
						 , to_char(round(CAST(sum(wrk_dur)/60 / (select nvl(count(*),0) from t_mc_s_wrk_rslt where wrk_mnt between '201911' and '201912') as numeric),2),'FM999,999,990.00')  as wrk_time
						 , null
						 , null
						 , null 
						 , null
						 , null
						 , null
						 , null
					  from t_mc_s_wrk_rslt
					 where wrk_mnt between replace(p_find_mnt_fr,'-','') and replace(p_find_mnt_to,'-','')
			 order by seq;
	END;
	
	--************************************************************************
	-- 월별 MAX NO 조회
	--************************************************************************
	PROCEDURE p_search_maxno(p_wrk_mnt character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select nvl(max(wrk_seq),0) +1 AS WRK_NO
			  from t_mc_s_wrk_rslt 
			 where wrk_mnt = p_wrk_mnt;
	END;
	
	--************************************************************************
	-- 황산작업 저장
	--************************************************************************
	PROCEDURE p_save(p_wrk_mnt character varying, p_wrk_no character varying, p_vessel_nm character varying, p_shipmt_qty character varying, p_in_port_dtm character varying, p_brhng_dtm character varying, p_wrk_end_dtm character varying, p_out_port_dtm character varying, p_brhng_time character varying, p_wrk_time character varying, p_port_nm character varying, p_wrk_mth character varying, p_etc_contents character varying, p_stock_qty character varying, p_remark character varying, p_acqstn_cmp_nm character varying, p_acqstn_cmp_addr character varying, p_acqstn_cmp_tel_no character varying) IS
	    v_jqx_rs character varying(1);
		v_chk_rslt boolean;
	BEGIN
	    --check vaildation
		v_chk_rslt := gf_t_mc_s_wrk_rslt.f_rowexist(p_wrk_mnt, p_wrk_no);
		
		if v_chk_rslt then
			v_jqx_rs := 'U';
		else
			v_jqx_rs := 'I';
		end if;
		 
		CASE v_jqx_rs
			WHEN 'U' THEN
				GOTO P_UPDATE;
			WHEN 'I' THEN
				GOTO P_INSERT;
		END CASE;
		
		RETURN;
		
		<<P_UPDATE>>
		gf_t_mc_s_wrk_rslt.p_select(p_wrk_mnt, p_wrk_no);
		
		gf_t_mc_s_wrk_rslt.t_rec.wrk_mnt			:= p_wrk_mnt;
		gf_t_mc_s_wrk_rslt.t_rec.wrk_seq			:= p_wrk_no;
		gf_t_mc_s_wrk_rslt.t_rec.vessel_nm			:= p_vessel_nm;
		gf_t_mc_s_wrk_rslt.t_rec.shipmt_qty			:= p_shipmt_qty;
		gf_t_mc_s_wrk_rslt.t_rec.in_port_dtm		:= p_in_port_dtm;
		gf_t_mc_s_wrk_rslt.t_rec.brhng_dtm			:= p_brhng_dtm;
		gf_t_mc_s_wrk_rslt.t_rec.wrk_end_dtm		:= p_wrk_end_dtm;
		gf_t_mc_s_wrk_rslt.t_rec.out_port_dtm		:= p_out_port_dtm;
		gf_t_mc_s_wrk_rslt.t_rec.brhng_dur			:= round(extract(EPOCH from to_date(p_brhng_dtm, 'yyyymmddhh24miss') - to_date(p_in_port_dtm  , 'yyyymmddhh24miss')) / 60);-- 접안일시 - 입항일시 ( brhng_dtm - in_port_dtm )
		gf_t_mc_s_wrk_rslt.t_rec.wrk_dur			:= round(extract(EPOCH from to_date(p_wrk_end_dtm, 'yyyymmddhh24miss') - to_date(p_brhng_dtm  , 'yyyymmddhh24miss')) / 60);-- 작업완료일시 - 접안일시 ( wrk_end_dtm - brhng_dtm)
		gf_t_mc_s_wrk_rslt.t_rec.port_nm			:= p_port_nm;
		gf_t_mc_s_wrk_rslt.t_rec.wrk_mth			:= p_wrk_mth;
		gf_t_mc_s_wrk_rslt.t_rec.etc_contents  		:= p_etc_contents;
		gf_t_mc_s_wrk_rslt.t_rec.stock_qty 			:= p_stock_qty;
		gf_t_mc_s_wrk_rslt.t_rec.remark 			:= p_remark;
		gf_t_mc_s_wrk_rslt.t_rec.acqstn_cmp_nm 		:= p_acqstn_cmp_nm;
		gf_t_mc_s_wrk_rslt.t_rec.acqstn_cmp_addr 	:= p_acqstn_cmp_addr;
		gf_t_mc_s_wrk_rslt.t_rec.acqstn_cmp_tel_no 	:= p_acqstn_cmp_tel_no;

		gf_t_mc_s_wrk_rslt.p_update;
		RETURN;
		
		<<P_INSERT>>
		gf_t_mc_s_wrk_rslt.p_clear;
		
		gf_t_mc_s_wrk_rslt.t_rec.wrk_mnt			:= p_wrk_mnt;
		gf_t_mc_s_wrk_rslt.t_rec.wrk_seq			:= p_wrk_no;
		gf_t_mc_s_wrk_rslt.t_rec.vessel_nm			:= p_vessel_nm;
		gf_t_mc_s_wrk_rslt.t_rec.shipmt_qty			:= p_shipmt_qty;
		gf_t_mc_s_wrk_rslt.t_rec.in_port_dtm		:= p_in_port_dtm;
		gf_t_mc_s_wrk_rslt.t_rec.brhng_dtm			:= p_brhng_dtm;
		gf_t_mc_s_wrk_rslt.t_rec.wrk_end_dtm		:= p_wrk_end_dtm;		
		gf_t_mc_s_wrk_rslt.t_rec.out_port_dtm		:= p_out_port_dtm;
		gf_t_mc_s_wrk_rslt.t_rec.brhng_dur			:= round(extract(EPOCH from to_date(p_brhng_dtm, 'yyyymmddhh24miss') - to_date(p_in_port_dtm  , 'yyyymmddhh24miss')) / 60);-- 접안일시 - 입항일시 ( brhng_dtm - in_port_dtm )
		gf_t_mc_s_wrk_rslt.t_rec.wrk_dur			:= round(extract(EPOCH from to_date(p_wrk_end_dtm, 'yyyymmddhh24miss') - to_date(p_brhng_dtm  , 'yyyymmddhh24miss')) / 60);-- 작업완료일시 - 접안일시 ( wrk_end_dtm - brhng_dtm
		gf_t_mc_s_wrk_rslt.t_rec.port_nm			:= p_port_nm;
		gf_t_mc_s_wrk_rslt.t_rec.wrk_mth			:= p_wrk_mth;
		gf_t_mc_s_wrk_rslt.t_rec.etc_contents  		:= p_etc_contents;
		gf_t_mc_s_wrk_rslt.t_rec.stock_qty 			:= p_stock_qty;
		gf_t_mc_s_wrk_rslt.t_rec.remark 			:= p_remark;
		gf_t_mc_s_wrk_rslt.t_rec.acqstn_cmp_nm 		:= p_acqstn_cmp_nm;
		gf_t_mc_s_wrk_rslt.t_rec.acqstn_cmp_addr 	:= p_acqstn_cmp_addr;
		gf_t_mc_s_wrk_rslt.t_rec.acqstn_cmp_tel_no 	:= p_acqstn_cmp_tel_no;
		
		gf_t_mc_s_wrk_rslt.p_insert;
 		RETURN;

	END;
	--************************************************************************
	-- 황산작업 삭제
	--************************************************************************
	PROCEDURE p_delete(wrk_mnt character varying, wrk_no character varying) IS
	BEGIN
		gf_t_mc_s_wrk_rslt.p_select(wrk_mnt, wrk_no);
		gf_t_mc_s_wrk_rslt.p_delete();
	END;
	
END p_mc_s_wrk_rslt;