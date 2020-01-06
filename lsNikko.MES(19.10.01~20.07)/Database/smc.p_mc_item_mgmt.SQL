-- Package: smc.p_mc_item_mgmt

-- DROP PACKAGE p_mc_item_mgmt;

CREATE OR REPLACE PACKAGE p_mc_item_mgmt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_item_mgmt
 * Description      - 아이템 관리
 ******************************************************************************/

	TYPE v_cur IS REF CURSOR;
	
	--Item List 조회
	PROCEDURE p_search(p_item_cd_id character varying, p_item_nm_id character varying, OUT p_cur v_cur);
	
	--Item 조회
	PROCEDURE p_search_detail(p_item_cd character varying, OUT p_cur v_cur);

	--Item 저장
	PROCEDURE p_save(p_item_cd character varying, p_item_nm character varying, p_item_tp character varying, p_inout_tp character varying, p_disp_inst character varying, p_sch_no_yn character varying, p_sms_send_yn character varying, p_in_slip_issue_yn character varying, p_hcs_yn character varying, p_cuscrap_inout_yn character varying, p_cond_use_yn character varying, p_cuscrap_time character varying, p_cuscrap_wgt character varying, p_egate_weigh_yn character varying, p_limit_inout_wkend character varying, p_limit_in_time character varying, p_limit_out_time character varying, p_limit_in_time_wkend character varying, p_limit_out_time_wkend character varying);
	
	--Item 삭제
	PROCEDURE p_delete(p_item character varying);
	
END p_mc_item_mgmt;

CREATE OR REPLACE PACKAGE BODY p_mc_item_mgmt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_item_mgmt
 * Description      - Item 관리
 ******************************************************************************/

	--************************************************************************
	-- Item LIST 조회
	--************************************************************************
	PROCEDURE p_search(p_item_cd_id character varying, p_item_nm_id character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
		    select item_cd as item
			     , item_nm
				 , scom.fc_cd_nm('ITEM_TP',item_tp) as item_tp
				 , scom.fc_cd_nm('ITEM_TP',item_tp) as item_tp_nm
				 , scom.fc_cd_nm('INOUT_TP',inout_tp) as inout_tp
				 , scom.fc_cd_nm('INOUT_TP',inout_tp) as inout_tp_nm
				 , fc_yn_to_boolean(disp_inst_yn) as disp_inst
				 , fc_yn_to_boolean(sch_no_yn) as sch_no_yn
				 , fc_yn_to_boolean(emerg_weigh_yn) as emerg_weigh
				 , fc_yn_to_boolean(in_slip_issue_yn) as in_slip_yn
				 , fc_yn_to_boolean(nvl(hcs_yn,'N')) as hcs_yn
				 , fc_yn_to_boolean(cuscrap_in_yn) as cuscrap_yn
				 , fc_yn_to_boolean(hq_gauge_in_yn) as cond_yn
				 , cuscrap_time_assign as cuscrap_time
				 , cuscrap_wgt_assign as cuscrap_wgt
				 , limit_in_time
				 , limit_out_time
				 , limit_in_time_wkend
				 , limit_out_time_wkend
				 , fc_yn_to_boolean(limit_inout_wkend_yn) as wkend_yn
				 , fc_yn_to_boolean(sms_send_yn) as sms_send
				--fc_client_datetime(ITEM_DT) as ITEM_DT
				--fc_yn_to_boolean()
              from t_mc_item_mgmt	
             where nvl(del_flag,'N') = 'N'	
               and item_cd like '%' || p_item_cd_id || '%'	
               and item_nm like '%' || p_item_nm_id || '%'	
             order by item_cd;
	END;

	--************************************************************************
	-- Item 조회
	--************************************************************************
	PROCEDURE p_search_detail(p_item_cd character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
		    select item_cd
			     , item_nm
				 , item_tp
				 , scom.fc_cd_nm('ITEM_TP',item_tp) as item_tp_nm
				 , inout_tp
				 , scom.fc_cd_nm('INOUT_TP',inout_tp) as inout_tp_nm
				 , fc_yn_to_boolean(disp_inst_yn) as disp_inst
				 , fc_yn_to_boolean(sch_no_yn) as sch_no_yn
				 , fc_yn_to_boolean(emerg_weigh_yn) as egate_weigh_yn
				 , fc_yn_to_boolean(in_slip_issue_yn) as in_slip_issue_yn
				 , fc_yn_to_boolean(nvl(hcs_yn,'N')) as hcs_yn
				 , fc_yn_to_boolean(cuscrap_in_yn) as cuscrap_inout_yn
				 , fc_yn_to_boolean(hq_gauge_in_yn) as cond_use_yn
				 , cuscrap_time_assign as cuscrap_time
				 , cuscrap_wgt_assign as cuscrap_wgt
				 , limit_in_time
				 , limit_out_time
				 , limit_in_time_wkend
				 , limit_out_time_wkend
				 , fc_yn_to_boolean(limit_inout_wkend_yn) as limit_inout_wkend
				 , fc_yn_to_boolean(sms_send_yn) as sms_send_yn
              from t_mc_item_mgmt	
             where nvl(del_flag,'N') = 'N'	
               and item_cd           = p_item_cd ;
	END;

	--************************************************************************
	-- ITEM 정보 저장
	--************************************************************************
	PROCEDURE p_save(p_item_cd character varying, p_item_nm character varying, p_item_tp character varying, p_inout_tp character varying, p_disp_inst character varying, p_sch_no_yn character varying, p_sms_send_yn character varying, p_in_slip_issue_yn character varying, p_hcs_yn character varying, p_cuscrap_inout_yn character varying, p_cond_use_yn character varying, p_cuscrap_time character varying, p_cuscrap_wgt character varying, p_egate_weigh_yn character varying, p_limit_inout_wkend character varying, p_limit_in_time character varying, p_limit_out_time character varying, p_limit_in_time_wkend character varying, p_limit_out_time_wkend character varying) IS
	    v_jqx_rs character varying(1);
		v_chk_rslt boolean;
	BEGIN
	    --check vaildation
		v_chk_rslt := gf_t_mc_item_mgmt.f_rowexist(p_item_cd);
		
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
		gf_t_mc_item_mgmt.p_select(p_item_cd);

		gf_t_mc_item_mgmt.t_rec.item_cd					:= p_item_cd;
		gf_t_mc_item_mgmt.t_rec.item_nm					:= p_item_nm;
		gf_t_mc_item_mgmt.t_rec.item_tp					:= p_item_tp;
		gf_t_mc_item_mgmt.t_rec.inout_tp				:= p_inout_tp;
		gf_t_mc_item_mgmt.t_rec.disp_inst_yn			:= nvl(p_disp_inst,'N');
		gf_t_mc_item_mgmt.t_rec.sch_no_yn				:= nvl(p_sch_no_yn,'N');
		gf_t_mc_item_mgmt.t_rec.emerg_weigh_yn			:= nvl(p_egate_weigh_yn,'N');
		gf_t_mc_item_mgmt.t_rec.in_slip_issue_yn		:= nvl(p_in_slip_issue_yn,'N');
		gf_t_mc_item_mgmt.t_rec.hcs_yn		            := nvl(p_hcs_yn,'N');
		gf_t_mc_item_mgmt.t_rec.cuscrap_in_yn			:= nvl(p_cuscrap_inout_yn,'N');
		gf_t_mc_item_mgmt.t_rec.hq_gauge_in_yn  		:= nvl(p_cond_use_yn,'N');
		gf_t_mc_item_mgmt.t_rec.cuscrap_time_assign 	:= p_cuscrap_time;
		gf_t_mc_item_mgmt.t_rec.cuscrap_wgt_assign 		:= p_cuscrap_wgt;
		gf_t_mc_item_mgmt.t_rec.limit_in_time 			:= lpad(p_limit_in_time, 4, '0');
		gf_t_mc_item_mgmt.t_rec.limit_out_time 			:= lpad(p_limit_out_time, 4, '0');
		gf_t_mc_item_mgmt.t_rec.limit_in_time_wkend 	:= lpad(p_limit_in_time_wkend, 4, '0');
		gf_t_mc_item_mgmt.t_rec.limit_out_time_wkend 	:= lpad(p_limit_out_time_wkend, 4, '0');
		gf_t_mc_item_mgmt.t_rec.limit_inout_wkend_yn 	:= p_limit_inout_wkend;
		gf_t_mc_item_mgmt.t_rec.sms_send_yn 			:= nvl(p_sms_send_yn,'N');

		gf_t_mc_item_mgmt.p_update;
		RETURN;
		
		<<P_INSERT>>
		gf_t_mc_item_mgmt.p_clear;
		
		gf_t_mc_item_mgmt.t_rec.item_cd					:= p_item_cd;
		gf_t_mc_item_mgmt.t_rec.item_nm					:= p_item_nm;
		gf_t_mc_item_mgmt.t_rec.item_tp					:= p_item_tp;
		gf_t_mc_item_mgmt.t_rec.inout_tp				:= p_inout_tp;
		gf_t_mc_item_mgmt.t_rec.disp_inst_yn			:= nvl(p_disp_inst,'N');
		gf_t_mc_item_mgmt.t_rec.sch_no_yn				:= nvl(p_sch_no_yn,'N');
		gf_t_mc_item_mgmt.t_rec.emerg_weigh_yn			:= nvl(p_egate_weigh_yn,'N');
		gf_t_mc_item_mgmt.t_rec.in_slip_issue_yn		:= nvl(p_in_slip_issue_yn,'N');
		gf_t_mc_item_mgmt.t_rec.hcs_yn		            := nvl(p_hcs_yn,'N');
		gf_t_mc_item_mgmt.t_rec.cuscrap_in_yn			:= nvl(p_cuscrap_inout_yn,'N');
		gf_t_mc_item_mgmt.t_rec.hq_gauge_in_yn  		:= nvl(p_cond_use_yn,'N');
		gf_t_mc_item_mgmt.t_rec.cuscrap_time_assign 	:= p_cuscrap_time;
		gf_t_mc_item_mgmt.t_rec.cuscrap_wgt_assign 		:= p_cuscrap_wgt;
		gf_t_mc_item_mgmt.t_rec.limit_in_time 			:= lpad(p_limit_in_time, 4, '0');
		gf_t_mc_item_mgmt.t_rec.limit_out_time 			:= lpad(p_limit_out_time, 4, '0');
		gf_t_mc_item_mgmt.t_rec.limit_in_time_wkend 	:= lpad(p_limit_in_time_wkend, 4, '0');
		gf_t_mc_item_mgmt.t_rec.limit_out_time_wkend 	:= lpad(p_limit_out_time_wkend, 4, '0');
		gf_t_mc_item_mgmt.t_rec.limit_inout_wkend_yn 	:= p_limit_inout_wkend;
		gf_t_mc_item_mgmt.t_rec.sms_send_yn 			:= nvl(p_sms_send_yn,'N');
		gf_t_mc_item_mgmt.t_rec.del_flag				:= 'N';
		
		gf_t_mc_item_mgmt.p_insert;
 		RETURN;

	END;
	--************************************************************************
	-- ITEM 정보 삭제
	--************************************************************************
	PROCEDURE p_delete(p_item character varying) IS
	BEGIN
		gf_t_mc_item_mgmt.p_select(p_item);

		gf_t_mc_item_mgmt.t_rec.item_cd					:= p_item;
		gf_t_mc_item_mgmt.t_rec.del_flag				:= 'Y';

		gf_t_mc_item_mgmt.p_update;
	END;
	
END p_mc_item_mgmt;