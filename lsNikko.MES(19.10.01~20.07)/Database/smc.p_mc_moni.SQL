-- Package: smc.p_mc_moni

-- DROP PACKAGE p_mc_moni;

CREATE OR REPLACE PACKAGE p_mc_moni
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_moni
 * Description      - 현황조회
 ******************************************************************************/

	TYPE v_cur IS REF CURSOR;
	
	--[SC2452] 전기동Clinch출고현황 조회
	PROCEDURE p_sc2452_search(p_find_dt character varying, OUT p_cur v_cur);
	--[SC2461] 품목별출고현황 조회
	PROCEDURE p_sc2461_search(p_out_dt_fr character varying, p_out_dt_to character varying, p_plant_no character varying, p_car_no character varying, p_item_cd character varying, p_item_nm character varying, p_vendor_cd character varying, p_vendor_nm character varying, OUT p_cur v_cur);
	--[SC2461] 품목별출고현황 상세조회
	PROCEDURE p_sc2461_search_detail(p_plant_no character varying, p_find_dt_fr character varying, p_find_dt_to character varying, p_item_cd character varying, p_vendor_cd character varying, OUT p_cur v_cur);
	--[SC2460] 전기동출고현황 조회
	PROCEDURE p_sc2460_search(p_out_dt_fr character varying, p_out_dt_to character varying, p_plant_no character varying, p_item_cd character varying, p_vendor_cd character varying, OUT p_cur v_cur);
	--[SC2460] 전기동출고현황 상세조회
	PROCEDURE p_sc2460_search_detail(p_out_dt_fr character varying, p_out_dt_to character varying, p_plant_no character varying, p_item_cd character varying, p_vendor_cd character varying, OUT p_cur v_cur);
	--[SC2460] Lot번호 조회
	PROCEDURE p_sc2460_search_lotno(p_car_inout_no character varying, p_plant_no character varying, OUT p_cur v_cur);
	--[SC2464] 월별출고현황 품목조회
	PROCEDURE p_sc2464_search_item(P_FIND_MNT_FR character varying, P_FIND_MNT_TO character varying, OUT p_cur v_cur);
	--[SC2464] 월별출고현황 월별조회
	PROCEDURE p_sc2464_search_month(p_item_cd character varying, p_find_mmt_fr character varying, p_find_mmt_to character varying, OUT p_cur v_cur);
	--[SC2464] 월별출고현황 차트조회
	PROCEDURE p_sc2464_search_chart(p_item_cd character varying, p_find_mmt_fr character varying, p_find_mmt_to character varying, OUT p_cur v_cur);
	--[SC2469] 출고상세현황 조회
	PROCEDURE p_sc2469_search(p_item_cd character varying, p_out_dt_to character varying, p_out_dt_fr character varying, OUT p_cur v_cur);
	--[SC2469] 출고상세현황 상세조회(판매처별)
	PROCEDURE p_sc2469_search_detail(p_item_cd character varying, p_car_in_dt character varying, OUT p_cur v_cur);
	--[SC2469] 출고상세현황 상세조회(납품처별)
	PROCEDURE p_sc2469_search_detail2(p_item_cd character varying, p_car_in_dt character varying, p_vendor_cd character varying, OUT p_cur v_cur);
	--[SC2510] 계근실적현황
	PROCEDURE p_sc2510_search(p_inout_flag character varying, p_find_dt_fr character varying, p_find_dt_to character varying, p_vendor_cd character varying, p_sub_vendor_cd character varying, p_item_cd character varying, p_trsp_cmp_cd character varying, p_car_no character varying, OUT p_cur v_cur);
END p_mc_moni;

CREATE OR REPLACE PACKAGE BODY p_mc_moni
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_moni
 * Description      - 현황조회
 ******************************************************************************/

	--************************************************************************
	-- [SC2452]전기동Clinch출고현황 조회
	--************************************************************************
	PROCEDURE p_sc2452_search(p_find_dt character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			with clinch_rslt as (						
				select a.car_inout_no as prod_out_no
					 , a.vendor_cd
					 , a.sub_vendor_cd		
					 , b.bundle_cnt
					 , b.real_wgt as prod_wgt
				  from (select car_inout_no
							 , vendor_cd
							 , sub_vendor_cd						
						  from t_mc_car_out_mgmt 						
						 where car_in_dt = p_find_dt
						   and item_cd = 'CU0' and nvl(del_flag,'N') = 'N') a					
							 , 
					   (select car_inout_no
							 , count(car_inout_no) as bundle_cnt
							 , sum(real_wgt) as real_wgt					
						  from t_mc_prod_out_rslt						
						 where nvl(del_flag,'N') = 'N'						
						   and clinch_flag = 'Y'						
						   and prod_cd = 'CU0'						
						   and plant_no = '1'						
						   and car_inout_no like '%'|| substr(p_find_dt,3,6) ||'%'					
						 group by car_inout_no ) b						
				where a.car_inout_no = b.car_inout_no)						
				select '1' seq						
					 , prod_out_no
					 , vendor_cd
					 , p_mc_utils.f_vendor_nm_inout(vendor_cd, '2') vendor_nm
					 , sub_vendor_cd
					 , p_mc_utils.f_sub_vendor_nm(vendor_cd, sub_vendor_cd) sub_vendor_nm
					 , bundle_cnt
					 , prod_wgt
				  from clinch_rslt
			union all						
				select '2'						
					 , ''						
					 , vendor_cd						
					 , p_mc_utils.f_vendor_nm_inout(vendor_cd, '2') || '  소계'	as vendor_nm 				
					 , ''					
					 , ''					
					 , nvl(sum(bundle_cnt),0)					
					 , nvl(sum(prod_wgt)  ,0)					
				  from clinch_rslt						
				 group by vendor_cd, p_mc_utils.f_vendor_nm_inout(vendor_cd, '2')						
			union all						
				select '3'						
					 , ''						
					 , ''						
					 , '합계'					
					 , ''					
					 , ''					
					 , nvl(sum(bundle_cnt),0)					
					 , nvl(sum(prod_wgt)  ,0)					
				  from clinch_rslt						
				 order by seq, vendor_cd, sub_vendor_cd;
	END;
	
	--************************************************************************
	-- [SC2461]품목별출고현황 조회
	--************************************************************************
	PROCEDURE p_sc2461_search(p_out_dt_fr character varying, p_out_dt_to character varying, p_plant_no character varying, p_car_no character varying, p_item_cd character varying, p_item_nm character varying, p_vendor_cd character varying, p_vendor_nm character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			with prod_rslt as 
			(				
				select vendor_cd
					 , p_mc_utils.f_vendor_nm_inout(vendor_cd,'2') as vendor_nm
					 , sub_vendor_cd
					 , p_mc_utils.f_sub_vendor_nm(vendor_cd,sub_vendor_cd) as sub_vendor_nm
					 , plant_no as load_place
					 , item_cd
					 , p_mc_utils.f_item_nm(item_cd) as item_nm
					 , nvl(sum(real_wgt),0) as pcs_wgt
				  from t_mc_car_out_mgmt
				 where car_in_dt between p_out_dt_fr and p_out_dt_to				
				   and plant_no like '%'||p_plant_no||'%'			 	
				   and item_cd like '%'||p_item_cd||'%'			 	
				   and item_cd <> 'CU0'				
				   and vendor_cd like '%'||p_vendor_cd||'%'		    		
				   and nvl(del_flag,'N') = 'N'				
				 group by vendor_cd
					 , p_mc_utils.f_vendor_nm_inout(vendor_cd,'2')
					 , sub_vendor_cd
					 , p_mc_utils.f_sub_vendor_nm(vendor_cd,sub_vendor_cd)
					 , load_place
					 , item_cd
					 , p_mc_utils.f_item_nm(item_cd)
				)select '1' seq				
					  , vendor_cd				
					  , vendor_nm				
					  , sub_vendor_cd			
					  , sub_vendor_nm			
					  , load_place			
					  , item_cd			
					  , item_nm
					  , pcs_wgt			
				   from prod_rslt				
			union all				
				 select '2' seq				
					  , '' as vendor_cd
					  , '합계' as vendor_nm				
					  , '' as sub_vendor_cd
					  , '' as sub_vendor_nm				
					  , ''
					  , ''
					  , ''
					  , nvl(sum(pcs_wgt),0) as pcs_wgt			
				   from prod_rslt				
				  order by seq, vendor_cd, vendor_nm;
	END;
	
	--************************************************************************
	-- [SC2461]품목별출고현황 상세조회
	--************************************************************************
	PROCEDURE p_sc2461_search_detail(p_plant_no character varying, p_find_dt_fr character varying, p_find_dt_to character varying, p_item_cd character varying, p_vendor_cd character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select s.vendor_cd				
				 , v.vendor_nm				
				 , s.trsp_cmp_cd				
				 , p_mc_utils.f_trsp_cmp_nm(s.trsp_cmp_cd) trsp_cmp_nm			
				 , s.item_cd			
				 , p_mc_utils.f_item_nm(s.item_cd) item_nm			
				 , s.car_id			
				 , p_mc_utils.f_car_out_driver(s.car_inout_no) driver_nm			
				 , s.car_in_dt			
				 , s.car_load_dtm			
				 , t.load_wgt			
				 , t.plant_no as load_place	
			  from t_mc_car_out_mgmt s				
				 , t_mc_vendor_mgmt  v				
				 , (select a.car_inout_no		
						 , a.plant_no		
						 , sum(a.real_wgt) load_wgt	
					  from t_mc_car_out_mgmt a		
					 where a.plant_no = p_plant_no   --p_plant_no		
					   and a.car_in_dt between replace(p_find_dt_fr,'-','') and replace(p_find_dt_to,'-','')  --p_find_dt_fr and p_find_dt_to		
					   and a.item_cd = p_item_cd  --p_item_cd		
					   and a.vendor_cd = p_vendor_cd	--p_vendor_cd		
					   and a.car_out_dtm is not null		
					 group by a.car_inout_no, a.plant_no) t			
			  where s.car_inout_no = t.car_inout_no				
				and s.vendor_cd    = v.vendor_cd				
				and v.inout_tp     = '2'				
			  order by s.vendor_cd, s.trsp_cmp_cd, s.car_load_dtm;
	END;
	--************************************************************************
	-- [SC2460] 전기동출고현황 조회
	--************************************************************************
	PROCEDURE p_sc2460_search(p_out_dt_fr character varying, p_out_dt_to character varying, p_plant_no character varying, p_item_cd character varying, p_vendor_cd character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			with prod_rslt as 
			(							
				select vendor_cd							
					 , p_mc_utils.f_vendor_nm_inout(vendor_cd,'2') as vendor_nm							
					 , sub_vendor_cd						
					 , p_mc_utils.f_sub_vendor_nm(vendor_cd,sub_vendor_cd) as sub_vendor_nm						
					 , plant_no, item_cd, p_mc_utils.f_item_nm(item_cd) as item_nm						
					 , nvl(sum(real_wgt),0) as pcs_wgt						
				  from t_mc_car_out_mgmt							
				 where car_in_dt between p_out_dt_fr and p_out_dt_to							
				   and plant_no like '%'||p_plant_no||'%'							
				   and item_cd like '%'||p_item_cd||'%'							
				   and vendor_cd like '%'||p_vendor_cd||'%'							
				   and nvl(del_flag,'N') = 'N'							
				 group by vendor_cd
						, p_mc_utils.f_vendor_nm_inout(vendor_cd,'2')
						, sub_vendor_cd
						, p_mc_utils.f_sub_vendor_nm(vendor_cd,sub_vendor_cd)
						, plant_no
						, item_cd
						, p_mc_utils.f_item_nm(item_cd)							
			)						
					select '1' seq							
						 , vendor_cd							
						 , vendor_nm							
						 , sub_vendor_cd						
						 , sub_vendor_nm						
						 , plant_no						
						 , item_cd						
						 , item_nm						
						 , pcs_wgt						
					  from prod_rslt							
			union all							
					select '2' seq							
						 , '' as vendor_cd
						 , '합계' as vendor_nm							
						 , '' as sub_vendor_cd
						 , '' as sub_vendor_nm							
						 , ''
						 , ''
						 , ''						
						 , nvl(sum(pcs_wgt),0) pcs_wgt						
					  from prod_rslt							
					 order by seq, vendor_cd, vendor_nm	;
	END;
	--************************************************************************
	-- [SC2460] 전기동출고현황 상세조회
	--************************************************************************
	PROCEDURE p_sc2460_search_detail(p_out_dt_fr character varying, p_out_dt_to character varying, p_plant_no character varying, p_item_cd character varying, p_vendor_cd character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select s.vendor_cd												
				 , v.vendor_nm												
				 , s.trsp_cmp_cd												
				 , p_mc_utils.f_trsp_cmp_nm(s.trsp_cmp_cd) trsp_cmp_nm											
				 , s.item_cd											
				 , p_mc_utils.f_item_nm(s.item_cd) item_nm											
				 , s.car_id											
				 , p_mc_utils.f_car_out_driver(s.car_inout_no) driver_nm											
				 , s.car_in_dt											
				 , to_char(to_date(car_load_dtm,'yyyymmddhh24miss'),'hh24:mi:ss') as car_load_dtm
				 , t.load_wgt											
				 , t.pcs_wgt											
				 , t.plant_no
				 , s.car_inout_no
			  from t_mc_car_out_mgmt s												
				 , t_mc_vendor_mgmt  v												
				 , (select a.car_inout_no									
						 , a.plant_no											
						 , a.load_wgt										
						 , nvl(b.pcs_wgt,0) pcs_wgt										
					  from (select t.car_inout_no									
								 , max(t.plant_no) plant_no										
								 , sum(t.real_wgt) load_wgt								
								 , 0 as pcs_wgt								
							  from t_mc_prod_out_rslt t									
								 , t_mc_car_out_mgmt u										
							 where t.car_inout_no = u.car_inout_no									
							   and t.plant_no = p_plant_no										
							   and u.car_in_dt between replace(p_out_dt_fr,'-','') and replace(p_out_dt_to,'-','') 
							   and u.item_cd = p_item_cd
							   and u.vendor_cd = p_vendor_cd
							   and u.car_out_dtm is not null									
							 group by t.car_inout_no) a										
				 , (select t.car_inout_no									
						 , max(t.plant_no) plant_no										
						 , 0 as load_wgt								
						 , sum(t.real_wgt) pcs_wgt								
					  from t_mc_pcs_out_rslt t									
						 , t_mc_car_out_mgmt u										
					 where t.car_inout_no = u.car_inout_no									
					   and t.plant_no = p_plant_no
					   and u.car_in_dt between replace(p_out_dt_fr,'-','') and replace(p_out_dt_to,'-','')
					   and u.item_cd = p_item_cd
					   and u.vendor_cd = p_vendor_cd
					   and u.car_out_dtm is not null									
					 group by t.car_inout_no) b										
					 where a.car_inout_no = b.car_inout_no (+)											
					   and a.plant_no     = b.plant_no (+)) t											
			where s.car_inout_no = t.car_inout_no												
			  and s.vendor_cd    = v.vendor_cd												
			  and v.inout_tp     = '2'												
			order by s.vendor_cd, s.trsp_cmp_cd, s.car_load_dtm;
	END;
	--************************************************************************
	-- [SC2460] Lot번호 상세조회
	--************************************************************************
	PROCEDURE p_sc2460_search_lotno(p_car_inout_no character varying, p_plant_no character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select '1' seq							
				 , lot_no || '(' || yard_loc_cd || ')' as lot_no							
				 , real_wgt							
				 , yard_col						
				 , prod_grd						
				 , fc_yn_to_boolean(clinch_flag) as clinch_flag					
				 , substr(p_mc_utils.f_mtrl_cd(plant_no, prod_cd ,prod_grd, clinch_flag),-4) mtrl_cd						
			  from t_mc_prod_out_rslt							
			 where car_inout_no = p_car_inout_no
			   and plant_no = p_plant_no
			union all							
			select '2' seq							
				 , lot_no || '(낱장)' as lot_no							
				 , real_wgt							
				 , '' yard_col						
				 , prod_grd						
				 , clinch_flag						
				 , substr(p_mc_utils.f_mtrl_cd(plant_no, prod_cd ,prod_grd, clinch_flag),-4) mtrl_cd						
			  from t_mc_pcs_out_rslt							
			 where car_inout_no =  p_car_inout_no
			   and plant_no = p_plant_no
			   and nvl(del_flag,'N') = 'N'							
			union all							
			select '3' seq							
				 , '합계'
				 , t.real_wgt, yard_col
				 , ''
				 , ''
				 , ''							
			  from (select sum(real_wgt) as real_wgt, '' as yard_col							
					  from (select real_wgt							
							  from t_mc_prod_out_rslt							
							 where car_inout_no =  p_car_inout_no
							   and plant_no = p_plant_no
							union all							
							select real_wgt							
							  from t_mc_pcs_out_rslt							
							 where car_inout_no =  p_car_inout_no
							   and plant_no = p_plant_no
							   and nvl(del_flag,'N') = 'N')) t							
			 order by seq, yard_col, lot_no;
	END;
	--************************************************************************
	--[SC2464] 월별출고현황 품목조회
	--************************************************************************
	PROCEDURE p_sc2464_search_item(P_FIND_MNT_FR character varying, P_FIND_MNT_TO character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select item_cd
				 , p_mc_utils.f_item_nm(item_cd) item_nm
			 from(select distinct	a.item_cd
					from t_mc_car_out_mgmt a
				   where car_in_dt between P_FIND_MNT_FR||'01' and P_FIND_MNT_TO||'31'
					 and car_out_dtm is not null
					 and nvl(del_flag,'N') = 'N') t
			 order by item_cd;
	END;
	--************************************************************************
	--[SC2464] 월별출고현황 월별조회
	--************************************************************************
	PROCEDURE p_sc2464_search_month(p_item_cd character varying, p_find_mmt_fr character varying, p_find_mmt_to character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select '1' as seq
				 , t.out_mnt
				 , t.vendor_cd
				 , s.vendor_nm
				 , t.car_cnt
				 , t.tot_wgt
			  from (select scom.fc_client_date(substr(car_in_dt,1,6)) out_mnt
					     , vendor_cd
						 , count(car_id) car_cnt
						 , nvl(sum(real_wgt),0) tot_wgt
					  from t_mc_car_out_mgmt a
					 where car_in_dt between p_find_mmt_fr||'01' and p_find_mmt_to||'31'
					   and item_cd = p_item_cd
					   and car_out_dtm is not null
					   and nvl(a.del_flag,'N') = 'N'
					   --and item_cd <> 'CU0'
					 group by substr(car_in_dt,1,6), vendor_cd
				   ) t
				   , t_mc_vendor_mgmt s
			 where t.vendor_cd = s.vendor_cd
			   and nvl(s.del_flag,'N') = 'N'
			   and s.inout_tp = '2'
			union all				
			select '2'
				 , '합계'
				 , ''
				 , ''
				 , count(car_id) as car_cnt
				 , nvl(sum(real_wgt),0) tot_wgt
			  from t_mc_car_out_mgmt				
			 where car_in_dt between p_find_mmt_fr||'01' and p_find_mmt_to||'31'
			   and item_cd = p_item_cd
			   and car_out_dtm is not null
			   and nvl(del_flag,'N') = 'N'
			   --and item_cd <> 'CU0'
			 order by seq,out_mnt,vendor_cd;
	END;
	--************************************************************************
	--[SC2464] 월별출고현황 차트조회
	--************************************************************************
	PROCEDURE p_sc2464_search_chart(p_item_cd character varying, p_find_mmt_fr character varying, p_find_mmt_to character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
				select s.vendor_nm
				  , sum(t.real_wgt) as tot_wgt
			 from (select vendor_cd
				        , sum(real_wgt) as real_wgt						  
					 from t_mc_car_out_mgmt
					where car_in_dt between p_find_mmt_fr||'01' and p_find_mmt_to||'31'
					  and item_cd = p_item_cd
					  and car_out_dtm is not null
					  and nvl(del_flag,'N') = 'N'
					group by vendor_cd) t,
					t_mc_vendor_mgmt s
			 where s.inout_tp = '2'
			   and nvl(s.del_flag,'N') = 'N'
			   and t.vendor_cd = s.vendor_cd
			group by s.vendor_nm;
	END;
	--************************************************************************
	--[SC2469] 출고상세현황 조회
	--************************************************************************
	PROCEDURE p_sc2469_search(p_item_cd character varying, p_out_dt_to character varying, p_out_dt_fr character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select scom.fc_client_datetime(car_in_dt) as out_dt
				 , car_in_dt
				 , item_cd					
				 , p_mc_utils.f_item_nm(item_cd) as prod_nm				
				 , nvl(sum(real_wgt),0) as input_wgt				
				 , count(*) as car_cnt				
			  from t_mc_car_out_mgmt					
			 where car_out_dtm is not null					
			   and nvl(del_flag,'N') = 'N'					
			   and car_in_dt between p_out_dt_fr and p_out_dt_to 
			   and item_cd   like '%'|| p_item_cd ||'%'   --p_item_cd					
			 group by car_in_dt, item_cd, p_mc_utils.f_item_nm(item_cd)					
		union all					
			select '합계'
				 , ''
				 , ''
				 , '' 					
				 , nvl(sum(real_wgt),0) as input_wgt				
				 , count(*) as car_cnt				
			  from t_mc_car_out_mgmt;
	END;
	--************************************************************************
	--[SC2469] 출고상세현황 상세조회(판매처별)
	--************************************************************************
	PROCEDURE p_sc2469_search_detail(p_item_cd character varying, p_car_in_dt character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select car_in_dt as out_dt			
				 , item_cd					
				 , p_mc_utils.f_item_nm(item_cd) as prod_nm				
				 , vendor_cd				
				 , p_mc_utils.f_vendor_nm(vendor_cd) as vendor_nm				
				 , nvl(sum(real_wgt),0) as out_wgt					
				 , count(*) as car_cnt 				
			  from t_mc_car_out_mgmt 					
			 where car_out_dtm is not null					
			   and nvl(del_flag,'N') = 'N'					
			   and car_in_dt = p_car_in_dt
			   and item_cd   = p_item_cd
			 group by car_in_dt, item_cd, p_mc_utils.f_item_nm(item_cd)					
				 , vendor_cd, p_mc_utils.f_vendor_nm(vendor_cd)				
		union all					
			select ''
				 ,''
				 ,''					
				 , '합계'
				 , ''					
				 , nvl(sum(real_wgt),0)
				 , count(*) as car_cnt 				
			  from t_mc_car_out_mgmt 					
			 where car_out_dtm is not null					
			   and nvl(del_flag,'N') = 'N'					
			   and car_in_dt = p_car_in_dt
			   and item_cd   = p_item_cd;
	END;
	--************************************************************************
	--[SC2469] 출고상세현황 상세조회(납품처별)
	--************************************************************************
	PROCEDURE p_sc2469_search_detail2(p_item_cd character varying, p_car_in_dt character varying, p_vendor_cd character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
			select car_in_dt					
				 , item_cd					
				 , p_mc_utils.f_item_nm(item_cd) as prod_nm				
				 , vendor_cd				
				 , p_mc_utils.f_vendor_nm(vendor_cd) as vendor_nm				
				 , sub_vendor_cd				
				 , p_mc_utils.f_sub_vendor_nm(vendor_cd, sub_vendor_cd) as sub_vendor_nm					
				 , nvl(sum(real_wgt),0) as out_wgt
				 , count(*) as car_cnt 				
			  from t_mc_car_out_mgmt 					
			 where car_out_dtm is not null					
			   and nvl(del_flag,'N') = 'N'					
			   and car_in_dt = p_car_in_dt
			   and item_cd   = p_item_cd
			   and vendor_cd = p_vendor_cd
			 group by car_in_dt, item_cd, p_mc_utils.f_item_nm(item_cd)					
				 , vendor_cd, p_mc_utils.f_vendor_nm(vendor_cd)				
				 , sub_vendor_cd, p_mc_utils.f_sub_vendor_nm(vendor_cd, sub_vendor_cd)				
		union all					
			select ''
				 ,''
				 ,''
				 ,''
				 ,''					
				 , '합계'
				 , ''					
				 , nvl(sum(real_wgt),0)
				 , count(*) as car_cnt 				
			  from t_mc_car_out_mgmt 					
			 where car_out_dtm is not null					
			   and nvl(del_flag,'N') = 'N'					
			   and car_in_dt = p_car_in_dt
			   and item_cd   = p_item_cd
			   and vendor_cd = p_vendor_cd;
	END;
	--************************************************************************
	--[SC2510] 계근실적현황
	--************************************************************************
	PROCEDURE p_sc2510_search(p_inout_flag character varying, p_find_dt_fr character varying, p_find_dt_to character varying, p_vendor_cd character varying, p_sub_vendor_cd character varying, p_item_cd character varying, p_trsp_cmp_cd character varying, p_car_no character varying, OUT p_cur v_cur) IS
	BEGIN
		IF p_inout_flag = 'InF' THEN
			GOTO INOUT_IN_SEARCH;
		ELSE
			GOTO INOUT_OUT_SEARCH;
		END IF;

		RETURN;
		
		<<INOUT_IN_SEARCH>>
			OPEN P_CUR FOR
				select car_inout_no
					 , car_in_dt as inout_dt
					 , vendor_cd
					 , p_mc_utils.f_vendor_nm(vendor_cd) as vendor_nm
					 , '' as sub_vendor_cd
					 , '' as sub_vendor_nm
					 , '' as mtrl_cd
					 , item_cd
					 , p_mc_utils.f_item_nm(item_cd) as item_nm
					 , car_id
					 , p_mc_utils.f_driver_nm(car_inout_no) as driver_nm
					 , nvl(empty_wgt,0) empty_wgt												
					 , nvl(real_wgt,0) real_wgt												
					 , nvl(tot_wgt,0) tot_wgt												
					 , scom.fc_client_datetime(car_in_dtm) as in_time
					 , scom.fc_client_datetime(car_out_dtm) as out_time
					 , remark
					 , trsp_cmp_cd
					 , p_mc_utils.f_trsp_cmp_nm(trsp_cmp_cd) as trsp_comp_nm
					 , car_inout_no as car_inout_no_h
				  from t_mc_car_in_mgmt													
				 where car_in_dt between p_find_dt_fr and p_find_dt_to
				   and item_cd       like '%'||p_item_cd||'%'
				   and vendor_cd     like '%'||p_vendor_cd||'%'
				   and trsp_cmp_cd  like '%'||p_trsp_cmp_cd||'%'
				   and car_id        like '%'||p_car_no||'%'
				   and nvl(del_flag,'N') = 'N'
			union all													
				select ''
					 , 'Sub Total'
					 , vendor_cd
					 , p_mc_utils.f_vendor_nm(vendor_cd) vendor_nm
					 , ''
					 , ''
					 , item_cd
					 , p_mc_utils.f_item_nm(item_cd) item_nm
					 , ''
					 , ''
					 , ''
					 , nvl(sum(empty_wgt),0) empty_wgt
					 , nvl(sum(real_wgt),0) real_wgt
					 , nvl(sum(tot_wgt),0) tot_wgt
					 , null
					 , null
					 , ''
					 , ''
					 , ''
					 , ''
				  from t_mc_car_in_mgmt
				 where car_in_dt between p_find_dt_fr and p_find_dt_to
				   and item_cd       like '%'||p_item_cd||'%'
				   and vendor_cd     like '%'||p_vendor_cd||'%'
				   and trsp_cmp_cd  like '%'||p_trsp_cmp_cd||'%'
				   and car_id        like '%'||p_car_no||'%'
				   and nvl(del_flag,'N') = 'N'
				 group by vendor_cd, p_mc_utils.f_vendor_nm(vendor_cd)
					 , item_cd, p_mc_utils.f_item_nm(item_cd)
			union all													
				select ''
					 , 'Total'
					 , ''
					 , ''
					 , ''
					 , ''
					 , ''
					 , ''
					 , ''
					 , ''
					 , ''
					 , nvl(sum(empty_wgt),0) empty_wgt
					 , nvl(sum(real_wgt),0) real_wgt
					 , nvl(sum(tot_wgt),0) tot_wgt
					 , null
					 , null
					 , ''												
					 , ''
					 , ''
					 , ''
				  from t_mc_car_in_mgmt
				 where car_in_dt between p_find_dt_fr and p_find_dt_to
				   and item_cd       like '%'||p_item_cd||'%'
				   and vendor_cd     like '%'||p_vendor_cd||'%'
				   and trsp_cmp_cd  like '%'||p_trsp_cmp_cd||'%'
				   and car_id        like '%'||p_car_no||'%'
				   and nvl(del_flag,'N') = 'N'
				 order by in_time, vendor_cd, item_cd;
		RETURN;
		
		<<INOUT_OUT_SEARCH>>
			OPEN P_CUR FOR
				select car_inout_no
					 , car_in_dt as inout_dt
					 , vendor_cd
					 , p_mc_utils.f_vendor_nm(vendor_cd) as vendor_nm
					 , sub_vendor_cd
					 , p_mc_utils.f_sub_vendor_nm(vendor_cd, sub_vendor_cd) as sub_vendor_nm
					 , substr(mtrl_cd, -4) mtrl_cd
					 , item_cd
					 , p_mc_utils.f_item_nm(item_cd) as item_nm
					 , car_id
					 , p_mc_utils.f_driver_nm(car_inout_no) as driver_nm
					 , nvl(empty_wgt,0) empty_wgt
					 , nvl(real_wgt,0) real_wgt
					 , nvl(tot_wgt,0) tot_wgt
					 , scom.fc_client_datetime(car_in_dtm) as in_time
					 , scom.fc_client_datetime(car_out_dtm) as out_time
					 , remark
					 , trsp_cmp_cd
					 , p_mc_utils.f_trsp_cmp_nm(trsp_cmp_cd) as trsp_comp_nm
					 , car_inout_no as car_inout_no_h
				  from t_mc_car_out_mgmt														
				 where car_in_dt between p_find_dt_fr and p_find_dt_to
				   and item_cd       like '%'||p_item_cd||'%'
				   and vendor_cd     like '%'||p_vendor_cd||'%'
				   and sub_vendor_cd like '%'||p_sub_vendor_cd||'%'  														
				   and trsp_cmp_cd  like '%'||p_trsp_cmp_cd||'%'
				   and car_id        like '%'||p_car_no||'%'
				   and nvl(del_flag,'N') = 'N'
			union all
				select ''														
					 , 'Sub Total'														
					 , vendor_cd													
					 , p_mc_utils.f_vendor_nm(vendor_cd) vendor_nm													
					 , sub_vendor_cd													
					 , p_mc_utils.f_sub_vendor_nm(vendor_cd, sub_vendor_cd) sub_vendor_nm													
					 , item_cd													
					 , p_mc_utils.f_item_nm(item_cd) item_nm													
					 , ''													
					 , ''													
					 , ''													
					 , nvl(sum(empty_wgt),0) empty_wgt													
					 , nvl(sum(real_wgt),0) real_wgt													
					 , nvl(sum(tot_wgt),0) tot_wgt													
					 , null													
					 , null													
					 , ''													
					 , ''													
					 , ''													
					 , ''													
				  from t_mc_car_out_mgmt														
				 where car_in_dt between p_find_dt_fr and p_find_dt_to
				   and item_cd       like '%'||p_item_cd||'%'
				   and vendor_cd     like '%'||p_vendor_cd||'%'
				   and sub_vendor_cd like '%'||p_sub_vendor_cd||'%'  														
				   and trsp_cmp_cd  like '%'||p_trsp_cmp_cd||'%'
				   and car_id        like '%'||p_car_no||'%'
				   and nvl(del_flag,'N') = 'N'													
				 group by vendor_cd, p_mc_utils.f_vendor_nm(vendor_cd)														
				     , sub_vendor_cd, p_mc_utils.f_sub_vendor_nm(vendor_cd, sub_vendor_cd)														
					 , item_cd, p_mc_utils.f_item_nm(item_cd)														
			union all														
			    select ''														
					 , 'Total'														
					 , ''													
					 , ''													
					 , ''													
					 , ''													
					 , ''													
					 , ''													
					 , ''													
					 , ''													
					 , ''													
					 , nvl(sum(empty_wgt),0) empty_wgt													
					 , nvl(sum(real_wgt),0) real_wgt													
					 , nvl(sum(tot_wgt),0) tot_wgt													
					 , null													
					 , null													
					 , ''													
					 , ''													
					 , ''													
					 , ''													
				  from t_mc_car_out_mgmt														
				 where car_in_dt between p_find_dt_fr and p_find_dt_to
				   and item_cd       like '%'||p_item_cd||'%'
				   and vendor_cd     like '%'||p_vendor_cd||'%'
				   and sub_vendor_cd like '%'||p_sub_vendor_cd||'%'  														
				   and trsp_cmp_cd  like '%'||p_trsp_cmp_cd||'%'
				   and car_id        like '%'||p_car_no||'%'
				   and nvl(del_flag,'N') = 'N'												
				 order by inout_dt, in_time, vendor_cd, sub_vendor_cd, item_cd;
		RETURN;
	END;
END p_mc_moni;