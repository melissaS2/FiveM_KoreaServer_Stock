-- Package: smc.p_mc_vessel_mgmt

-- DROP PACKAGE p_mc_vessel_mgmt;

CREATE OR REPLACE PACKAGE p_mc_vessel_mgmt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_vessel_mgmt
 * Description      - 운송선박 관리
 ******************************************************************************/

	TYPE v_cur IS REF CURSOR;
	
	--운송선박 List 조회
	PROCEDURE p_search(p_vessel_cd character varying, p_vessel_nm_id character varying, OUT p_cur v_cur);
	
	--운송선박 저장
	PROCEDURE p_save(p_vessel_no character varying, p_vessel_nm character varying, p_imo_no character varying, p_vessel_tp_nm character varying, p_vessel_const_cmp character varying, p_vessel_const_year character varying, p_vessel_capa character varying, p_vessel_draft character varying, p_vessel_beam character varying, p_hatch_cnt character varying, p_crn_cnt character varying, p_grap_cnt character varying, p_vessel_cmp_nm character varying, p_vessel_ownr character varying, p_vessel_ntnlty character varying, p_crew_ntnlty character varying, p_remark character varying);
	
	--운송선박 삭제
	PROCEDURE p_delete(p_vessel_no character varying);
	
END p_mc_vessel_mgmt;

CREATE OR REPLACE PACKAGE BODY p_mc_vessel_mgmt
IS
/*******************************************************************************
 * PROGRAM HEADER  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * -----------------------------------------------------------------------------
 * System Name      - MES SYSTEM
 * Sub_System Name  - SMC_MODULE
 * Program Name     - p_mc_vessel_mgmt
 * Description      - 운송선박 관리
 ******************************************************************************/

	--************************************************************************
	-- 운송선박 List 조회
	--************************************************************************
	PROCEDURE p_search(p_vessel_cd character varying, p_vessel_nm_id character varying, OUT p_cur v_cur) IS
	BEGIN
		OPEN P_CUR FOR
		    select vessel_no
				 , vessel_nm
				 , imo_no
				 , vessel_tp_nm
				 , vessel_const_cmp
				 , vessel_const_year
				 , vessel_capa
				 , vessel_draft
				 , vessel_beam
				 , hatch_cnt
				 , crn_cnt
				 , grap_cnt
				 , vessel_cmp_nm
				 , vessel_ownr
				 , vessel_ntnlty
				 , crew_ntnlty
				 , remark
			  from t_mc_vessel_mgmt
			 where vessel_no like '%'||p_vessel_cd||'%'			
			   and vessel_nm like '%'||p_vessel_nm_id||'%'			
			   and nvl(del_flag, 'N') ='N'
			 order by vessel_nm,imo_no;	
	END;

	--************************************************************************
	-- 운송선박 저장
	--************************************************************************
	PROCEDURE p_save(p_vessel_no character varying, p_vessel_nm character varying, p_imo_no character varying, p_vessel_tp_nm character varying, p_vessel_const_cmp character varying, p_vessel_const_year character varying, p_vessel_capa character varying, p_vessel_draft character varying, p_vessel_beam character varying, p_hatch_cnt character varying, p_crn_cnt character varying, p_grap_cnt character varying, p_vessel_cmp_nm character varying, p_vessel_ownr character varying, p_vessel_ntnlty character varying, p_crew_ntnlty character varying, p_remark character varying) IS
	    v_vessel_no numeric(22,0);
	BEGIN
	    --check vaildation
		v_vessel_no := null;
		v_vessel_no := p_vessel_no;
		
		IF v_vessel_no IS NULL THEN
			select nvl(max(vessel_no),0) + 1 into v_vessel_no from t_mc_vessel_mgmt;
			GOTO P_INSERT;
		ELSE
			GOTO P_UPDATE;
		END IF;
		
		RETURN;
		
		<<P_UPDATE>>
		gf_t_mc_vessel_mgmt.p_select(p_vessel_no);

		gf_t_mc_vessel_mgmt.t_rec.vessel_no					:= p_vessel_no;
		gf_t_mc_vessel_mgmt.t_rec.vessel_nm					:= p_vessel_nm;
		gf_t_mc_vessel_mgmt.t_rec.imo_no					:= p_imo_no;
		gf_t_mc_vessel_mgmt.t_rec.vessel_tp_nm				:= p_vessel_tp_nm;
		gf_t_mc_vessel_mgmt.t_rec.vessel_const_cmp			:= p_vessel_const_cmp;
		gf_t_mc_vessel_mgmt.t_rec.vessel_const_year			:= p_vessel_const_year;
		gf_t_mc_vessel_mgmt.t_rec.vessel_capa				:= p_vessel_capa;
		gf_t_mc_vessel_mgmt.t_rec.vessel_draft				:= p_vessel_draft;
		gf_t_mc_vessel_mgmt.t_rec.vessel_beam				:= p_vessel_beam;
		gf_t_mc_vessel_mgmt.t_rec.hatch_cnt  				:= p_hatch_cnt;
		gf_t_mc_vessel_mgmt.t_rec.crn_cnt 					:= p_crn_cnt;
		gf_t_mc_vessel_mgmt.t_rec.grap_cnt 					:= p_grap_cnt;
		gf_t_mc_vessel_mgmt.t_rec.vessel_cmp_nm 			:= p_vessel_cmp_nm;
		gf_t_mc_vessel_mgmt.t_rec.vessel_ownr 				:= p_vessel_ownr;
		gf_t_mc_vessel_mgmt.t_rec.vessel_ntnlty 			:= p_vessel_ntnlty;
		gf_t_mc_vessel_mgmt.t_rec.crew_ntnlty 				:= p_crew_ntnlty;
		gf_t_mc_vessel_mgmt.t_rec.remark 					:= p_remark;
		gf_t_mc_vessel_mgmt.t_rec.del_flag 					:= 'N';

		gf_t_mc_vessel_mgmt.p_update;
		RETURN;
		
		<<P_INSERT>>
		gf_t_mc_vessel_mgmt.p_clear;
		
		gf_t_mc_vessel_mgmt.t_rec.vessel_no					:= v_vessel_no;
		gf_t_mc_vessel_mgmt.t_rec.vessel_nm					:= p_vessel_nm;
		gf_t_mc_vessel_mgmt.t_rec.imo_no					:= p_imo_no;
		gf_t_mc_vessel_mgmt.t_rec.vessel_tp_nm				:= p_vessel_tp_nm;
		gf_t_mc_vessel_mgmt.t_rec.vessel_const_cmp			:= p_vessel_const_cmp;
		gf_t_mc_vessel_mgmt.t_rec.vessel_const_year			:= p_vessel_const_year;
		gf_t_mc_vessel_mgmt.t_rec.vessel_capa				:= p_vessel_capa;
		gf_t_mc_vessel_mgmt.t_rec.vessel_draft				:= p_vessel_draft;
		gf_t_mc_vessel_mgmt.t_rec.vessel_beam				:= p_vessel_beam;
		gf_t_mc_vessel_mgmt.t_rec.hatch_cnt  				:= p_hatch_cnt;
		gf_t_mc_vessel_mgmt.t_rec.crn_cnt 					:= p_crn_cnt;
		gf_t_mc_vessel_mgmt.t_rec.grap_cnt 					:= p_grap_cnt;
		gf_t_mc_vessel_mgmt.t_rec.vessel_cmp_nm 			:= p_vessel_cmp_nm;
		gf_t_mc_vessel_mgmt.t_rec.vessel_ownr 				:= p_vessel_ownr;
		gf_t_mc_vessel_mgmt.t_rec.vessel_ntnlty 			:= p_vessel_ntnlty;
		gf_t_mc_vessel_mgmt.t_rec.crew_ntnlty 				:= p_crew_ntnlty;
		gf_t_mc_vessel_mgmt.t_rec.remark 					:= p_remark;
		gf_t_mc_vessel_mgmt.t_rec.del_flag 					:= 'N';
		
		gf_t_mc_vessel_mgmt.p_insert;
 		RETURN;

	END;
	--************************************************************************
	-- 운송선박 삭제
	--************************************************************************
	PROCEDURE p_delete(p_vessel_no character varying) IS
	BEGIN
		gf_t_mc_vessel_mgmt.p_select(p_vessel_no);

		gf_t_mc_vessel_mgmt.t_rec.del_flag 					:= 'Y';

		gf_t_mc_vessel_mgmt.p_update;
	END;
	
END p_mc_vessel_mgmt;