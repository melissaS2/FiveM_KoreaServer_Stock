/**
 * Declare constants
 */

/**
 * Declare Variable
 */

/**
 * Declare Initial JS Function
 */
$(function() {
	fc_showLog(1, '***** sch.functions.js Main');

	// **
	$('#mnuSaveBtn').show();
}); // end of $(function ())
/*
 * ==========================================================================================================
 * MES Common Functions
 * =========================================================================================================
 */

/**
 * fm_getSearchItems
 *
 * @param sKey
 * @param sSubKey
 * @param attribute1
 * @param attribute2
 * @returns {___anonymous4016_4023}
 */
function fm_getSearchItems(sKey, sSubKey, attribute1, attribute2) {
	var objItems = null;

	switch (sKey) {

	case 'S_SC4110_SC2610' ://SC4110 , SC2610
		objItems = 	[
					{groupname: 'divSearchGrp',  caption: '품목코드' 		, name: 'ITEM_CD_ID' , width: 100, datatype: 'text' ,	maxlength: 3},
					{groupname: 'divSearchGrp',  caption: '품명'			, name: 'ITEM_NM_ID' , width: 200, datatype: 'text' },
					];
		break;
	case 'VENDOR_LIST' : //SC4210
    	objItems = [
					{groupname: 'divSearchGrp',  caption: '업체명' 		, name: 'VENDOR_NM' 	, width: 100, datatype: 'text'				  , isMultiLanguage:false},
					{groupname: 'divSearchGrp',  caption: '업체생성' 		, name: 'INOUT_BT' 		, width: 100, datatype: 'button', align:'left', isMultiLanguage:false},
					{groupname: 'divSearchGrp',  caption: 'SAP 미등록업체' , name: 'VENDOR_NM2' 	, width: 200, datatype: 'text'	, align:'left', isMultiLanguage:false, maxlength: 50},
					]
    	break;

    case 'SUB_VENDOR' : //SC4211
    	objItems = [
    	            {groupname: 'divSearchGrp', caption:'납품처명'		,  name:'SUB_VENDOR_NM'	, width: 100	, datatype:'text', isMultiLanguage:false},
    	            {groupname: 'divSearchGrp', caption:'운송업체명'	, name:'TRSP_CMP_NM'	, width: 100	, datatype:'text', isMultiLanguage:false},
    	            ];
    	break;

    case 'S_SC4212' ://SC4212
		objItems = 	[
					{groupname: 'divSearchGrp',  caption: '판매처명'	, name: 'VENDOR_ID' , width: 200, datatype: 'text' },
					];
		break;

    case 'S_SC4220' ://SC4220
		objItems = 	[
					{groupname: 'divSearchGrp',  caption: '운송업체명'	, name: 'TRSP_CMP_NM' , width: 100, datatype: 'text' },
					{groupname: 'divSearchGrp',  caption: '차량번호'	, name: 'CAR_ID' 	  , width: 100, datatype: 'text' },
					];
		break;

    case 'S_SC4221_SC2620' ://SC4221, SC2620
		objItems = 	[
					{groupname: 'divSearchGrp',  caption: '차량번호'	, name: 'CAR_NO_ID', width: 100, datatype: 'text'},
					];
		break;

    case 'TRSP_CMP_SEARCH_LIST' : //SC4231
    	objItems = [
    	            {groupname: 'divSearchGrp', caption:'운송업체',  name:'TRSP_CMP_NM', width: 150, datatype:'text', isMultiLanguage:false},
    	            ]
    	break;

    case 'S_SC4230' : //SC4230
    	objItems = [
    	            {groupname: 'divSearchGrp', caption:'운송업체',  name:'TRSP_CMP_ID', width: 100, datatype:'text'},
    	            ]
    	break;

    case 'SECT_SEARCH' : //SC4232
    	objItems = [
    	            {groupname: 'divSearchGrp', caption:'운송업체'		, name:'TRSP_CMP_NM'	, width:100	, datatype:'text'		, isMultLanguage:false},
    	            {groupname: 'divSearchGrp', caption:'모든내역보기'	, name:'TRSP_ALL_CHECK'	, width:30	, datatype:'checkbox'	, isMultLanguage:false, align:'center'},
    	            ];
    	
    	break;

    case 'S_SC2630' : //SC2630
    	objItems = [
    	            {groupname: 'divSearchGrp', caption:'입고일자', name:'IN_DT'	, width: 130, datatype: 'date'	, required:true},
    	            {groupname: 'divSearchGrp', caption:'차량번호', name:'CAR_NO'	, width: 100, datatype: 'text'	}
    	            ];
    	break;

    case 'S_SC2640' : //SC2640
    	objItems = [
    	            {groupname: 'divSearchGrp', caption:'입고일자'		, name:'IN_DT_FR'	, width: 130, datatype:'date'		, required:true},
    	            {groupname: 'divSearchGrp', caption:''			, name:'IN_DT_TO'	, width: 130, datatype:'date'		, required:true},
    	            {groupname: 'divSearchGrp', caption: '품목코드'	, name: 'ITEM_CD'	, width: 100, datatype:'popup'		},
					{groupname: 'divSearchGrp', caption: ''			, name: 'ITEM_NM'	, width: 150, datatype:'text'		, readonly: true},
    	            {groupname: 'divSearchGrp', caption:'차량번호'		, name:'CAR_NO'		, width: 100, datatype:'text'		}
    	            ]

			fc_addCodeList( {object: 'ITEM_CD', code: 'MC_RTN_ITEM_LIST', title: '품목 선택', manKey: '' });
    	break;

    case 'S_SC2452' : //SC2452
    	objItems = [
    	            {groupname: 'divSearchGrp', caption:'조회일자', name:'FIND_DT', width: 130, datatype: 'date' },
    	            ];
    	break;

    case 'MONI_LIST' : //SC2461, SC2460
    	objItems = [
    	            {groupname: 'divSearchGrp', caption:'출고일자'		, name:'OUT_DT_FR'	, width: 130, datatype: 'date'	, isMultiLanguage:false ,required:true},
    	            {groupname: 'divSearchGrp', caption:''			, name:'OUT_DT_TO'	, width: 130, datatype: 'date'	, isMultiLanguage:false ,required:true},
    	            {groupname: 'divSearchGrp', caption:'상차공장'		, name:'PLANT_NO'	, width: 150, datatype: 'lov'	, isMultiLanguage:false },
    	            {groupname: 'divSearchGrp', caption:'품목코드'		, name:'ITEM_CD'	, width: 100, datatype: 'popup'	, isMultiLanguage:false	},
    	            {groupname: 'divSearchGrp', caption:''			, name:'ITEM_NM'	, width: 200, datatype: 'text'	, isMultiLanguage:false ,readonly:true},
    	            {groupname: 'divSearchGrp', caption:'판매처'		, name:'VENDOR_CD'	, width: 100, datatype: 'popup'	, isMultiLanguage:false },
    	            {groupname: 'divSearchGrp', caption:''			, name:'VENDOR_NM'	, width: 200, datatype: 'text'	, isMultiLanguage:false ,readonly:true},

    	            ];
    	fc_addCodeList( {object: 'ITEM_CD'	, code: 'MC_ITEM_LIST'		, title: '품목 선택'	, manKey: '', cdParam: '1' });
    	fc_addCodeList( {object: 'VENDOR_CD', code: 'MC_SELECT_VENDOR_LIST'	, title: '판매처 선택'	, manKey: '', cdParam:'2' });

    	fc_addDataInGettedLov('', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
		fc_addDataInSettingLov({object : 'PLANT_NO',code : 'YARD_PLANT_TP',format : 'V',nullable:false, defval : ''});
    	break;

    case 'TAG_FUNC':// SC4330
		objItems = [
		             {groupname : 'divSearchGrp',caption : '공장',name : 'YARD_PLANT_TP',itemCd : 'YARD_PLANT_TP',width : 100,datatype : 'lov',isMultiLanguage : false,maxlength : 3},
		             ];
		fc_addDataInGettedLov('ITEM_REG_CD', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
		fc_addDataInSettingLov({object : 'YARD_PLANT_TP',code : 'YARD_PLANT_TP',format : 'V',nullable : false,defval : ''});
		break;

	case 'MC_TRSP_CMP_MGMT_SEARCH':// SC4250 & SC4251 & SC4252
		objItems = [
        {groupname : 'divSearchGrp',caption : '위반일자'	,name : 'FIND_DT_FR'	,width : 100,datatype : 'date',isMultiLanguage : false,maxlength : 15},
		{groupname : 'divSearchGrp',caption : '~'		,name : 'FIND_DT_TO'	,width : 100,datatype : 'date',isMultiLanguage : false,maxlength : 15},
		{groupname : 'divSearchGrp',caption : '전송일자'	,name : 'FIND_SEND_DT_FR'	,width : 100,datatype : 'date',isMultiLanguage : false,maxlength : 15},
		{groupname : 'divSearchGrp',caption : '~'		,name : 'FIND_SEND_DT_TO'	,width : 100,datatype : 'date',isMultiLanguage : false,maxlength : 15},
		{groupname : 'divSearchGrp',caption : '운송업체명'	,name : 'TRSP_CMP_NM'	,width : 100,datatype : 'text',isMultiLanguage : false,maxlength : 50},
		{groupname : 'divSearchGrp',caption : '차량번호'	,name : 'CAR_ID'		,width : 100,datatype : 'text',isMultiLanguage : false,maxlength : 15}, ];
		break;

	case 'HEADER_SEARCH_2320':// SC2320
		objItems = [
	        {groupname : 'divSearchGrp',caption : '공장'		,name : 'PLANT_NO', itemCd : 'YARD_PLANT_TP',width : 100	,datatype : 'lov'	,isMultiLanguage : false,maxlength : 15,required:true},
	        {groupname : 'divSearchGrp',caption : '입고일자'	,name : 'IN_DT_FR'							,width : 100	,datatype : 'date'	,isMultiLanguage : false,maxlength : 15},
			{groupname : 'divSearchGrp',caption : '~'		,name : 'IN_DT_TO'							,width : 100	,datatype : 'date'	,isMultiLanguage : false,maxlength : 15},
		];

		fc_addDataInGettedLov('', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
		fc_addDataInSettingLov({object : 'PLANT_NO',code : 'YARD_PLANT_TP',format : 'V',nullable : false,defval : ''});


		break;


	case 'HEADER_SEARCH_2321':// SC2321
		objItems = [
	        {groupname : 'divSearchGrp',caption : '공장'			,name : 'PLANT_NO'	, itemCd:'YARD_PLANT_TP', width : 100,datatype : 'lov'	,isMultiLanguage : false,maxlength : 15,required:true},
	        {groupname : 'divSearchGrp',caption : '   품목코드'	,name : 'PROD_CD'			,width : 100,datatype : 'text'	,defval:'CU0'	,isMultiLanguage : false,maxlength : 15,required:true,readonly:true},
	        {groupname : 'divSearchGrp',caption : ''			,name : 'IN_PROD_NMDT_FR'	,width : 100,datatype : 'text'	,defval:'전기동'	,isMultiLanguage : false,maxlength : 15,readonly:true},
			{groupname : 'divSearchGrp',caption : '   제품위치'	,name : 'YARD_LOC_CD'		,width : 100,datatype : 'popup'		,isMultiLanguage : false,maxlength : 15},
			{groupname : 'divSearchGrp',caption : ''			,name : 'GRD_NM'			,width : 100,datatype : 'text'		,isMultiLanguage : false,maxlength : 15,readonly:true},
		];

		fc_addDataInGettedLov('', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
		fc_addDataInSettingLov({object : 'PLANT_NO',code : 'YARD_PLANT_TP',format : 'V',nullable : false,defval : ''});


		fc_addCodeList( {object: 'YARD_LOC_CD', code: 'MC_2321_POPUP', title: '제품위치검색', manKey: '' ,cdParam:''});
		break;

	case 'HEADER_SEARCH_2322':// SC2322
		objItems = [
	        {groupname : 'divSearchGrp',caption : '검색년월', name : 'FIND_MNT', width : 100,datatype : 'text',isMultiLanguage : false,maxlength : 15,required:true},
		];

		break;

	case 'HEADER_SEARCH_2323':// SC2323
		objItems = [
		            {groupname : 'divSearchGrp',caption : '검색년월'	, name : 'FIND_YEAR_FR', width : 100,datatype : 'text',isMultiLanguage : false,maxlength : 15,required:true},
		            {groupname : 'divSearchGrp',caption : '　~　'		, name : 'FIND_YEAR_TO', width : 100,datatype : 'text',isMultiLanguage : false,maxlength : 15,required:true},
		            ];

		break;


	case 'FORWARD_STATUS' : //SC1410
    	objItems = [
    				{groupname: 'divSearchGrp', caption: '조회기간'	,name :'FIND_DT_GR' , width:100, datatype:'daterange'	, target: ['FIND_DT_FR', 'FIND_DT_TO', 'date'], itemCd: 'CAP_DATE'},
    	            {groupname: 'divSearchGrp', caption: '품목코드 '	,name:'ITEM_CD'		, width:100, datatype:'popup'		, isMultiLanguage:false},
    	            {groupname: 'divSearchGrp', caption: ''			,name:'ITEM_NM'		, width:150, datatype:'text'		, isMultiLanguage:false, readonly:true},
    	            {groupname: 'divSearchGrp', caption: '거래처코드 '	,name:'VENDOR_CD'	, width:100, datatype:'popup'		, isMultiLanguage:false},
    	            {groupname: 'divSearchGrp', caption: ''			,name:'VENDOR_NM'	, width:150, datatype:'text'		, isMultiLanguage:false, readonly:true},
    	            {groupname: 'divSearchGrp', caption:'입출고확인'	,name:'INOUT_TP'	, width:100, datatype:'radio'		, isMultiLanguage:false, itemCd: 'INOUT_TP' , hidden:true}
    	            ];
    	fc_addCodeList( {object: 'ITEM_CD', code: 'MC_ITEM_LIST', title: '품목 목록', manKey: '', cdParam:'2' });
		fc_addCodeList( {object: 'VENDOR_CD', code: 'MC_VENDOR_LIST', title: '판매처 목록', manKey: '' ,cdParam:'1'});

    	break;

	case 'CAR_SEARCH' : //SC1420
    	objItems = [
    				{groupname:'divSearchGrp',  caption: '조회기간'	,name : 'FIND_DT_GR' , width:100, datatype:'daterange'	, target: ['FIND_DT_FR', 'FIND_DT_TO', 'date'], itemCd: 'CAP_DATE'},
					{groupname: 'divSearchGrp', caption: '차량번호 '	,name:'CAR_NO'		 , width:100, datatype:'text'		, isMultiLanguage:false},
					{groupname: 'divSearchGrp', caption: '판매처'		,name:'VENDOR_CD'	 , width:100, datatype:'popup'		, isMultiLanguage:false},
					{groupname: 'divSearchGrp', caption: ''			,name:'VENDOR_NM'	 , width:150, datatype:'text'		, isMultiLanguage:false, readonly:true},
					{groupname: 'divSearchGrp', caption: '납품처'		,name:'SUB_VENDOR_CD', width:100, datatype:'popup'		, isMultiLanguage:false},
					{groupname: 'divSearchGrp', caption: ''			,name:'SUB_VENDOR_NM', width:150, datatype:'text'		, isMultiLanguage:false, readonly:true},
					{groupname: 'divSearchGrp', caption: '품목'		,name:'ITEM_CD'		 , width:100, datatype:'popup'		, isMultiLanguage:false},
					{groupname: 'divSearchGrp', caption: ''			,name:'ITEM_NM'		 , width:150, datatype:'text'		, isMultiLanguage:false, readonly:true},
					{groupname: 'divSearchGrp', caption: '운송업체'	,name:'TRSP_CMP_CD'  , width:100, datatype:'popup'		, isMultiLanguage:false},
					{groupname: 'divSearchGrp', caption: ''			,name:'TRSP_CMP_NM'  , width:150, datatype:'text'		, isMultiLanguage:false, readonly:true},
    	            ];
		fc_addCodeList( {object: 'VENDOR_CD'	, code: 'MC_CAR_VENDOR_LIST'		, title: 'Vendor List'	, manKey: '' });
		fc_addCodeList( {object: 'SUB_VENDOR_CD', code: 'MC_CAR_SUB_VENDOR_LIST'	, title: 'Trsp List'	, manKey: '' });
		fc_addCodeList( {object: 'ITEM_CD'		, code: 'MC_ITEM_LIST'			, title: 'Item List'	, manKey: '', cdParam:'2' });
		fc_addCodeList( {object: 'TRSP_CMP_CD'	, code: 'MC_CAR_TRSP_CMP_LIST'		, title: 'Trsp List'	, manKey: '' });

    	break;

	case 'CAR_ALLOC_SEARCH' : //SC1421
    	objItems = [
					{groupname: 'divSearchGrp', caption: '차량번호 '	, name:'CAR_ID'			, width:100, datatype:'text'	, isMultiLanguage:false},
					{groupname: 'divSearchGrp', caption: '판매처'		, name:'VENDOR_CD'		, width:100, datatype:'popup'	, isMultiLanguage:false},
					{groupname: 'divSearchGrp', caption: ''			, name:'VENDOR_NM'		, width:150, datatype:'text'	, isMultiLanguage:false, readonly:true},
					{groupname: 'divSearchGrp', caption: '납품처'		, name:'SUB_VENDOR_CD'	, width:100, datatype:'popup'	, isMultiLanguage:false},
					{groupname: 'divSearchGrp', caption: ''			, name:'SUB_VENDOR_NM'	, width:150, datatype:'text'	, isMultiLanguage:false, readonly:true},
					{groupname: 'divSearchGrp', caption: '품목'		, name:'ITEM_CD'		, width:100, datatype:'popup'	, isMultiLanguage:false},
					{groupname: 'divSearchGrp', caption: ''			, name:'ITEM_NM'		, width:150, datatype:'text'	, isMultiLanguage:false},
					{groupname: 'divSearchGrp', caption: '운송업체'	, name:'TRSP_CMP_CD'	, width:100, datatype:'popup'	, isMultiLanguage:false},
					{groupname: 'divSearchGrp', caption: ''			, name:'TRSP_CMP_NM'	, width:150, datatype:'text'	, isMultiLanguage:false, readonly:true},
    	            ];
    	fc_addCodeList( {object: 'VENDOR_CD',		code: 'MC_CAR_VENDOR_LIST',		title: '판매처 목록', 	manKey: '' });
    	fc_addCodeList( {object: 'SUB_VENDOR_CD',	code: 'MC_CAR_SUB_VENDOR_LIST', title: '납품처 목록',	manKey: '' });
    	fc_addCodeList( {object: 'ITEM_CD',			code: 'MC_ITEM_LIST',			title: '품목 목록',	manKey: '', cdParam: '1' });
    	fc_addCodeList( {object: 'TRSP_CMP_CD',		code: 'MC_CAR_TRSP_CMP_LIST',	title: '운송업체 목록',	manKey: '' });
    	break;

	case 'CAR_ALLOC_N_SEARCH' : //SC1422
    	objItems = [
					{groupname: 'divSearchGrp', caption: '개월전 '		, name:'MNT_BEF'	, width:100, datatype:'number'	, isMultiLanguage:false, required:true},
					{groupname: 'divSearchGrp', caption: '운송업체'	, name:'TRSP_CMP_CD', width:100, datatype:'popup'	, isMultiLanguage:false},
					{groupname: 'divSearchGrp', caption: ''			, name:'TRSP_CMP_NM', width:150, datatype:'text'	, isMultiLanguage:false, readonly:true},
					{groupname: 'divSearchGrp', caption: '품목'		, name:'ITEM_CD'	, width:100, datatype:'popup'	, isMultiLanguage:false},
					{groupname: 'divSearchGrp', caption: ''			, name:'ITEM_NM'	, width:150, datatype:'text'	, isMultiLanguage:false, readonly:true},
					{groupname: 'divSearchGrp', caption: '차번호'		, name:'CAR_NO'		, width:100, datatype:'text'	, isMultiLanguage:false},
					{groupname: 'divSearchGrp', caption: '입출고'		, name:'INOUT_TP'	, width:100, datatype:'radio'	, isMultiLanguage:false},
    	            ];
    	fc_addCodeList( {object: 'TRSP_CMP_CD', code: 'MC_TRSP_CMP_LIST', title: '운송업체 목록',	manKey: '', });
    	fc_addCodeList( {object: 'ITEM_CD', 	code: 'MC_ITEM_LIST', title: '품목 목록',		manKey: '', cdParam: '2' });

    	break;

	case 'S_SC4240' : //SC4240
    	objItems = [
    	            {groupname: 'divSearchGrp',  caption: '선박명'	, name: 'VESSEL_NM_ID'    , width: 100, datatype: 'text' }
					];
    	break;

	case 'S_SC3110' : //SC3110
    	objItems = [

    	            {groupname: 'divSearchGrp', caption: '품목구분'  	, name: 'ITEM_TP'		, width: 100, datatype: 'lov'	},
    	            {groupname: 'divSearchGrp', caption: '품목'		, name: 'S_ITEM_CD' 	, width: 100, datatype: 'lov' 	},
					{groupname: 'divSearchGrp', caption: '최종도착일'  , name: 'DATE_FROM'		, width: 130, datatype: 'date'  },
					{groupname: 'divSearchGrp', caption: '~'        , name: 'DATE_TO'		, width: 130, datatype: 'date'  },
					{groupname: 'divSearchGrp', caption: '진행여부'   	, name: 'PROCEED_YN'    , width: 130, datatype: 'radio' , itemCd: 'PROCEED_YN'  , required : true },

					];
		fc_addDataInGettedLov('', {code:'MC_ITEM_TP', tags : '' , alias : ''});
		fc_addDataInSettingLov({object:'ITEM_TP', code : 'MC_ITEM_TP', format : 'K', nullable : true , defval : ''});
		//품목
		fc_addDataInGettedLov('MC_ITEM_CD', {code:'MC_ITEM_CD', tags : '' , alias : ''});
		fc_addDataInSettingLov({object:'S_ITEM_CD', code : 'MC_ITEM_CD', format : 'V', nullable : true , defval : ''});
    	break;

	case 'S_SC2464' : //SC2464
    	objItems = [
    	            {groupname: 'divSearchGrp',  caption: '조회월'	, name: 'FIND_MNT_FR'    , width: 100, datatype: 'text', required:true},
    	            {groupname: 'divSearchGrp',  caption: '~'		, name: 'FIND_MNT_TO'    , width: 100, datatype: 'text', required:true}
					];
    	break;
    	
    	
	case 'HEADER_SEARCH_2331':// SC2331
		objItems = [
		            {groupname : 'divSearchGrp',caption : '검색일자', name : 'FIND_DT', width : 100,datatype : 'date',isMultiLanguage : false,maxlength : 15,required:true},
		            ];

		break;

		
	case 'HEADER_SEARCH_2310':// SC2310
		objItems = [
	        {groupname : 'divSearchGrp',caption : '공장', name : 'PLANT_NO', itemCd : 'YARD_PLANT_TP', width : 100, datatype : 'lov', isMultiLanguage : false,maxlength : 15,required:true},
		];

		fc_addDataInGettedLov('', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
		fc_addDataInSettingLov({object : 'PLANT_NO',code : 'YARD_PLANT_TP',format : 'V',nullable : false,defval : ''});


		break;
		
		
	case 'HEADER_SEARCH_2311':// SC2311
		objItems = [
	        {groupname : 'divSearchGrp',caption : '공장'		, name : 'PLANT_NO'		, width : 100, datatype : 'lov'		,isMultiLanguage : false,maxlength : 15,required:true},
	        {groupname : 'divSearchGrp',caption : '품목코드'	, name : 'ITEM_CD'		, width : 100, datatype : 'lov'		,isMultiLanguage : false,maxlength : 15,required:true},
	        {groupname : 'divSearchGrp',caption : ''		, name : 'ITEM_NM'		, width : 100, datatype : 'text'	,isMultiLanguage : false,maxlength : 15,required:true,readonly:true},
	        {groupname : 'divSearchGrp',caption : '제품위치'	, name : 'PROD_LOC'		, width : 100, datatype : 'popup'	,isMultiLanguage : false,maxlength : 15,required:true},
	        {groupname : 'divSearchGrp',caption : ''		, name : 'PROD_LOC_NM'	, width : 100, datatype : 'text'	,isMultiLanguage : false,maxlength : 15,required:true,readonly:true},
	        {groupname : 'divSearchGrp',caption : '낱장생성'	, name : 'BTN1'			, width : 100, datatype : 'button'	,isMultiLanguage : false},
	        //{groupname : 'divSearchGrp',caption : '위치조정'	, name : 'BTN2'			, width : 100, datatype : 'button'	,isMultiLanguage : false,maxlength : 15,required:true,readonly:true},
		];
	
		fc_addDataInGettedLov('YARD_PLANT_TP', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
		fc_addDataInSettingLov({object : 'PLANT_NO',code : 'YARD_PLANT_TP',format : 'V',nullable : false,defval : ''});
	
		fc_addDataInGettedLov('PROD_CD_ECC', {code : 'PROD_CD_ECC',tags : '',alias : ''});
		fc_addDataInSettingLov({object : 'ITEM_CD',code : 'PROD_CD_ECC',format : 'V',nullable : false,defval : ''});
	
		fc_addCodeList( {object: 'PROD_LOC', code: 'MC_2310_YARD_LOC', title: '전기동위치검색', manKey: '' });
		break;
		
	case 'S_SC2469':// SC2469
    	objItems = [
            {groupname: 'divSearchGrp',  caption: '출고일자'	, name: 'OUT_DT_FR'  , width: 100, datatype: 'date' , required:true},
            {groupname: 'divSearchGrp',  caption: '~'		, name: 'OUT_DT_TO'  , width: 100, datatype: 'date' , required:true},
            {groupname: 'divSearchGrp',  caption: '품목코드'	, name: 'ITEM_CD'    , width: 100, datatype: 'popup', maxlength:3},
            {groupname: 'divSearchGrp',  caption: ''		, name: 'ITEM_NM'    , width: 200, datatype: 'text'	, readonly:true}
			];
    	
		fc_addCodeList( {object: 'ITEM_CD', code: 'MC_ITEM_LIST', title: '품목선택', manKey: '', cdParam:'1' });
		
		break;
		
	case 'S_SC2510':// SC2510
    	objItems = [
    		{groupname: 'divSearchGrp', caption: '입출고확인'  , name: 'INOUT_FLAG' 	, width: 130, datatype: 'radio' , itemCd: 'INOUT_FLAG'	, required: true },
            {groupname: 'divSearchGrp', caption: '조회기간'	, name: 'FIND_DT_FR' 	, width: 100, datatype: 'date' 	, required:true},
            {groupname: 'divSearchGrp', caption: '~'		, name: 'FIND_DT_TO' 	, width: 100, datatype: 'date' 	, required:true},
            {groupname: 'divSearchGrp', caption: '판매처'		, name: 'VENDOR_CD'  	, width: 100, datatype: 'popup' , maxlength:3},
            {groupname: 'divSearchGrp', caption: ''			, name: 'VENDOR_NM'  	, width: 200, datatype: 'text' 	, readonly:true},
            {groupname: 'divSearchGrp', caption: '품목'		, name: 'ITEM_CD'    	, width: 100, datatype: 'popup' , maxlength:3},
            {groupname: 'divSearchGrp', caption: ''			, name: 'ITEM_NM'    	, width: 200, datatype: 'text' 	, readonly:true},
            
            {groupname: 'divSearchGrp1', caption: '납품처'	, name: 'SUB_VENDOR_CD'	, width: 100, datatype: 'popup' , maxlength:3},
            {groupname: 'divSearchGrp1', caption: ''		, name: 'SUB_VENDOR_NM'	, width: 200, datatype: 'text' 	, readonly:true},
            {groupname: 'divSearchGrp1', caption: '운송업체'	, name: 'TRSP_CMP_CD'  	, width: 100, datatype: 'popup' , maxlength:3},
            {groupname: 'divSearchGrp1', caption: ''		, name: 'TRSP_CMP_NM'   , width: 200, datatype: 'text' 	, readonly:true},
            {groupname: 'divSearchGrp1', caption: '차량번호'	, name: 'CAR_NO'    	, width: 100, datatype: 'text' 	, maxlength:15}
			];
    	
		fc_addCodeList( {object: 'VENDOR_CD', code: 'MC_SALES_VENDOR_LIST', title: '판매처선택', manKey: '', cdParam:'2' });
		fc_addCodeList( {object: 'ITEM_CD', code: 'MC_ITEM_LIST', title: '품목선택', manKey: '',cdParam: '2' });
		fc_addCodeList( {object: 'SUB_VENDOR_CD', code: 'MC_SALES_VENDOR_LIST', title: '납품처선택', manKey: '', cdParam:'2'});
		fc_addCodeList( {object: 'TRSP_CMP_CD', code: 'MC_TRSP_CMP_LIST', title: '운송업체선택', manKey: '' });
		
		break;
		
		
	case 'HEADER_SEARCH_2312':// SC2312
		objItems = [
	        {groupname : 'divSearchGrp',caption : '공장'			, name : 'PLANT_NO'			, width : 100,datatype : 'lov'		,isMultiLanguage : false,maxlength : 15,required:true},
	        {groupname : 'divSearchGrp',caption : '품목코드'		, name : 'ITEM_CD'			, width : 100,datatype : 'lov'		,isMultiLanguage : false,maxlength : 15,required:true},
	        {groupname : 'divSearchGrp',caption : ''			, name : 'ITEM_NM'			, width : 100,datatype : 'text'		,isMultiLanguage : false,maxlength : 15,required:true,readonly:true},
	        {groupname : 'divSearchGrp',caption : '제품위치'		, name : 'PROD_LOC'			, width : 100,datatype : 'popup'	,isMultiLanguage : false,maxlength : 15,required:true},
	        {groupname : 'divSearchGrp',caption : ''			, name : 'PROD_LOC_NM'		, width : 100,datatype : 'text'		,isMultiLanguage : false,maxlength : 15,required:true,readonly:true},
	        {groupname : 'divSearchGrp',caption : '지시중량'		, name : 'INST_WGT'			, width : 100,datatype : 'number'	,isMultiLanguage : false,maxlength : 15,required:true},
	        {groupname : 'divSearchGrp',caption : '변경 제품위치'	, name : 'PROD_LOC_TO'		, width : 100,datatype : 'popup'	,isMultiLanguage : false,maxlength : 15},
	        {groupname : 'divSearchGrp',caption : ''			, name : 'PROD_LOC_NM_TO'	, width : 100,datatype : 'text'		,isMultiLanguage : false,maxlength : 15,readonly:true},
	        {groupname : 'divSearchGrp',caption : '위치변경'		, name : 'BTN1'				, width : 100,datatype : 'button'	,isMultiLanguage : false},
		];
	
		fc_addDataInGettedLov('YARD_PLANT_TP', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
		fc_addDataInSettingLov({object : 'PLANT_NO',code : 'YARD_PLANT_TP',format : 'V',nullable : false,defval : ''});
	
		fc_addDataInGettedLov('PROD_CD_ECC', {code : 'PROD_CD_ECC',tags : '',alias : ''});
		fc_addDataInSettingLov({object : 'ITEM_CD',code : 'PROD_CD_ECC',format : 'V',nullable : false,defval : ''});
	
		fc_addCodeList( {object: 'PROD_LOC', code: 'MC_2310_YARD_LOC', title: '전기동위치검색', manKey: '' });
		fc_addCodeList( {object: 'PROD_LOC_TO', code: 'MC_2310_YARD_LOC', title: '전기동위치검색', manKey: '' });

		break;
		
		
		
	case 'HEADER_SEARCH_2410':// SC2410
		objItems = [
			//{groupname : 'divSearchGrp'     ,caption : '공장'		    , name : 'PLANT_NO'	        , width : 100	,		datatype : 'lov'		,isMultiLanguage : false	,required:true},
	        {groupname : 'divSearchGrp'     ,caption : '요청일자'		, name : 'REQ_DT_FR'	    , width : 100	,		datatype : 'date'		,isMultiLanguage : false	},
	        {groupname : 'divSearchGrp'     ,caption : ''		    , name : 'REQ_DT_TO'	    , width : 100	,		datatype : 'date'		,isMultiLanguage : false	},
	        {groupname : 'divSearchGrp'     ,caption : '마감오더보기'	, name : 'CLOSE_ORD_FLAG'	, width : 'auto',		datatype : 'checkbox'	,isMultiLanguage : false	},
	        {groupname : 'divSearchGrp'     ,caption : '품목코드'		, name : 'PROD_CD'	        , width : 100	,		datatype : 'popup'		,isMultiLanguage : false	},
	        {groupname : 'divSearchGrp'     ,caption : ''		    , name : 'PROD_NM'	        , width : 100	,		datatype : 'text'		,isMultiLanguage : false	},
	        {groupname : 'divSearchGrp'     ,caption : '판매처코드'	, name : 'VENDOR_CD'	    , width : 100	,		datatype : 'popup'		,isMultiLanguage : false	},
	        {groupname : 'divSearchGrp'     ,caption : ''		    , name : 'VENDOR_NM'	    , width : 100	,		datatype : 'text'		,isMultiLanguage : false	},
	        {groupname : 'divSearchGrp'     ,caption : '자재구분'		, name : 'MTRL_TP'	    	, width : 100	,		datatype : 'lov'		,isMultiLanguage : false	},
		];
		
		
		fc_addCodeList( {object: 'PROD_CD'		, code: 'MC_ITEM_LIST'			, title: 'Item List'	, manKey: '', cdParam:'' });
		
/*    	fc_addDataInGettedLov('PLANT_NO', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
		fc_addDataInSettingLov({object : 'PLANT_NO',code : 'YARD_PLANT_TP',format : 'V',nullable:false, defval : ''});
		*/
		
    	fc_addDataInGettedLov('MTRL_TP', {code : 'MTRL_TP',tags : '',alias : ''});
		fc_addDataInSettingLov({object : 'MTRL_TP',code : 'MTRL_TP',format : 'V',nullable:true, defval : ''});
		
		
		//setConditon = 지정 text 입력값이 팝업창 object 입력값으로 바로 들어가는거
		fc_addCodeList( {object: 'PROD_CD', code: 'MC_ITEM_LIST', title: 'TEST', manKey: '',cdParam:'1', setConditon:[{object:'INPUT_VAL1',colNm:'	'}]});
		fc_addCodeList( {object: 'VENDOR_CD', code: 'MC_VENDOR_LIST', title: 'TEST', manKey: '',cdParam:'2', setConditon:[{object:'INPUT_VAL1',colNm:'	'}]});
		break;
		
	case 'HEADER_SEARCH_2411':// SC2411
		objItems = [
	        {groupname : 'divSearchGrp',caption : '해당월'		, name : 'FIND_MNT'	, width : 100	,datatype : 'text'		,isMultiLanguage : false	,required:true},
	        {groupname : 'divSearchGrp',caption : '제품'			, name : 'PROD_CD'	, width : 50	,datatype : 'text'		,isMultiLanguage : false	,required:true,	readonly:true,	defval : 'CU0'},
	        {groupname : 'divSearchGrp',caption : ''			, name : 'PROD_NM'	, width : 100	,datatype : 'text'		,isMultiLanguage : false	,required:true,	readonly:true,	defval : '전기동'},
		];
	
		break;
		
	case 'HEADER_SEARCH_2412':// SC2412
		objItems = [
			{groupname : 'divSearchGrp',caption : '검사기관'		, name : 'INSP_AGENCY_CD'	, width : 100,datatype : 'lov'		,isMultiLanguage : false,maxlength : 15,required:true},
			{groupname : 'divSearchGrp',caption : '검사기관명'		, name : 'INSP_AGENCY_NM'	, width : 100,datatype : 'lov'		,isMultiLanguage : false,maxlength : 15,required:true},
			{groupname : 'divSearchGrp',caption : '사용여부'		, name : 'USE_YN'			, width : 100,datatype : 'button'	,isMultiLanguage : false,maxlength : 15},
			{groupname : 'divSearchGrp',caption : '품질표준번호'	, name : 'QLT_STD_SEQ'		, width : 100,datatype : 'button'	,isMultiLanguage : false,maxlength : 15},
			];
		
		break;
	case 'HEADER_SEARCH_2413':// SC2413
		objItems = [
			{groupname : 'divSearchGrp',caption : '해당월'		, name : 'FIND_MNT'	, width : 100,datatype : 'date'		,isMultiLanguage : false,maxlength : 15,required:true},
			{groupname : 'divSearchGrp',caption : '제품'		, name : 'PROD'	, width : 100,datatype : 'lov'		,isMultiLanguage : false,maxlength : 15,required:true},
			{groupname : 'divSearchGrp',caption : ''		, name : 'PROD_NM'	, width : 100, datatype : 'text'	,isMultiLanguage : false,maxlength : 15,required:true,readonly:true},
			];
		
		fc_addDataInGettedLov ( 'PROD', {code: 'PROD_CD_ECC', tags: '', alias: ''} );
		fc_addDataInSettingLov( {object: 'PROD', code: 'PROD_CD_ECC' , format: 'V', nullable: true , defval: ''} );

		break;
		
	case 'RMWH_DIARY_LIST':// SC2110, SC2112, SC2352
		objItems = [
			{groupname : 'divSearchGrp'	,caption : '조회일자'	, name : 'FIND_DT'	, width : 100,datatype : 'date'	, required:true},
			{groupname : 'divSearchGrp'	,caption : '등록일자'	, name : 'INS_DT'	, width : 100,datatype : 'date'	, required:true}
			];
		break;
		
	case 'S_SC2340_SC2341':// SC2340 , SC2341
		objItems = [
			{groupname : 'divSearchGrp'	,caption : '출고일자'	, name : 'OUT_DT'	, width : 100, datatype : 'date' , required:true}
			];
		break;
		
		
	case 'HEADER_SEARCH_2420':// SC2420
		objItems = [
	        {groupname : 'divSearchGrp'     ,caption : '요청일자'		, name : 'FIND_DT'	    , width : 100	,		datatype : 'date'		,isMultiLanguage : false	,required:true},
		];
		
		break;
	
	case 'CAR_IN_SEARCH': //SC1443
		objItems = [
			{groupname : 'divSearchGrp', caption: '조회기간', 		name : 'FIND_DT_GR',	 width: 100,  datatype: 'daterange', target: ['FIND_DT_FR', 'FIND_DT_TO', 'date'], itemCd: 'CAP_DATE'},
			{groupname : 'divSearchGrp', caption: '품목코드',  	name : 'ITEM_CD', 		 width: 100 , datatype : 'popup', 	isMultiLanguage : false},
			{groupname : 'divSearchGrp', caption: '', 		 	name : 'ITEM_NM',		 width: 200 , datatype : 'text',  	isMultiLanguage : false, readonly:true},
			{groupname : 'divSearchGrp', caption: '거래처코드', 	name : 'VENDOR_CD',		 width: 100 , datatype : 'popup', 	isMultiLanguage : false},
			{groupname : 'divSearchGrp', caption: '', 		 	name : 'VENDOR_NM',		 width: 200 , datatype : 'text',  	isMultiLanguage : false, readonly:true},
			{groupname : 'divSearchGrp', caption: '차량번호',  	name : 'CAR_ID',		 width: 100 , datatype : 'text',  	isMultiLanguage : false},
			{groupname : 'divSearchGrp', caption: '모든품목',		name : 'ITEM_ALL_CHECK', width: 100 , datatype : 'checkbox', isMultiLanguage : false},
		];
		fc_addCodeList( {object: 'ITEM_CD', code: 'MC_ITEM_LIST', title: '품목 목록', manKey: '', cdParam:'2' });
		fc_addCodeList( {object: 'VENDOR_CD', code: 'MC_VENDOR_LIST', title: '판매처 목록', manKey: '' ,cdParam:'1'});
		break;
	
	case 'CAR_IN_MONTH': //SC1444
		objItems = [
			{groupname : 'divSearchGrp', caption: '조회월',	name : 'FIND_MNT_FR', width: 100 , datatype : 'text', isMultiLanguage : false},
			{groupname : 'divSearchGrp', caption: '~',		name : 'FIND_MNT_TO', width: 100 , datatype : 'text', isMultiLanguage : false},
		];
		break;
		
	case 'CAR_IN_ITEM' : //SC1440
		objItems = [
			{groupname : 'divSearchGrp', caption: '조회기간', 		name : 'FIND_DT_GR',	 width: 100,  datatype: 'daterange', target: ['FIND_DT_FR', 'FIND_DT_TO', 'date'], itemCd: 'CAP_DATE'},
			{groupname : 'divSearchGrp', caption: '품목코드',  	name : 'ITEM_CD', 		 width: 100 , datatype : 'popup', 	isMultiLanguage : false},
			{groupname : 'divSearchGrp', caption: '', 		 	name : 'ITEM_NM',		 width: 200 , datatype : 'text',  	isMultiLanguage : false, readonly:true},
			{groupname : 'divSearchGrp', caption: '거래처코드', 	name : 'VENDOR_CD',		 width: 100 , datatype : 'popup', 	isMultiLanguage : false},
			{groupname : 'divSearchGrp', caption: '', 		 	name : 'VENDOR_NM',		 width: 200 , datatype : 'text',  	isMultiLanguage : false, readonly:true},
		];
		fc_addCodeList( {object: 'ITEM_CD', code: 'MC_ITEM_LIST', title: '품목 목록', manKey: '', cdParam:'2' });
		fc_addCodeList( {object: 'VENDOR_CD', code: 'MC_VENDOR_LIST', title: '판매처 목록', manKey: '' ,cdParam:'1'});
		break;
	
	case 'CAR_IN_ITEM_SEARCH': //SC1445, SC1446
		objItems = [
			{groupname : 'divSearchGrp', caption: '조회기간', 		name : 'FIND_DT_GR',	 width: 100,  datatype: 'daterange', target: ['FIND_DT_FR', 'FIND_DT_TO', 'date'], itemCd: 'CAP_DATE'},
		];
		break;
		
		
	case 'HEADER_SEARCH_2430':// SC2430
		objItems = [
	        {groupname : 'divSearchGrp'     ,caption : '공장'		, name : 'PLANT_NO'	    , width : 100	,		datatype : 'lov'		,isMultiLanguage : false	,required:true},
		];
		
		
		fc_addDataInGettedLov('PLANT_NO', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
		fc_addDataInSettingLov({object : "PLANT_NO",code : "YARD_PLANT_TP",format : "V",nullable : false,defval : ""});
		
		break;
		
	case 'HEADER_SEARCH_2431':// SC2431
		objItems = [
			{groupname : 'divSearchGrp'     ,caption : '공장'			, name : 'PLANT_NO'	    , width : 100	,		datatype : 'lov'		,isMultiLanguage : false	,required:true},
			{groupname : 'divSearchGrp'     ,caption : '검색일자'		, name : 'FIND_DT'	    , width : 100	,		datatype : 'date'		,isMultiLanguage : false	,required:true	/*,readonly:true*/},
			{groupname : 'divSearchGrp'     ,caption : '차량번호'		, name : 'CAR_ID'	    , width : 100	,		datatype : 'text'		,isMultiLanguage : false	,maxlength:15},
			];
		
		
		fc_addDataInGettedLov('PLANT_NO', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
		fc_addDataInSettingLov({object : "PLANT_NO",code : "YARD_PLANT_TP",format : "V",nullable : false,defval : ""});
		
		break;
		
	
		
	case 'SC2465_LIST' ://SC2465
		objItems = 	[
            {groupname: 'divSearchGrp',  caption: '조회기간'	, name: 'FIND_DT_FR'    , width: 100, datatype: 'date' , isMultiLanguage:false, required:true},
            {groupname: 'divSearchGrp',  caption: '~'	, name: 'FIND_DT_TO'    , width: 100, datatype: 'date' , isMultiLanguage:false, required:true},
            {groupname: 'divSearchGrp',  caption: '품목'	, name: 'ITEM_CD'    , width: 100, datatype: 'popup' , isMultiLanguage:false, maxlength:3},
            {groupname: 'divSearchGrp',  caption: ''	, name: 'ITEM_NM'    , width: 200, datatype: 'text' , isMultiLanguage:false,readonly:true},
            {groupname: 'divSearchGrp', caption:'입출고확인',  name:'INOUT_TP', width:100, datatype:'radio'},
					];
    	fc_addCodeList( {object: 'ITEM_CD', code: 'MC_ITEM_LIST', title: 'Item List', manKey: '', cdParam:'2' });
    break;
    
	case 'CAR_IN_SEARCH_SC2150': //SC2150
		objItems = [
			{groupname : 'divSearchGrp', caption:'조회기간',	name :'FIND_DT_GR',	width:100, datatype:'daterange', target: ['FIND_DT_FR', 'FIND_DT_TO', 'date'], itemCd: 'CAP_DATE'},
			{groupname : 'divSearchGrp', caption:'차량번호', 	name :'CAR_ID',	 	width:100, datatype:'text',  	 isMultiLanguage : false},
			
		];
		break;
	
	case 'CAR_IN_SEARCH_SC2151': //SC2151
		objItems = [ 
			{groupname : 'divSearchGrp', caption: '조회기간',  	name : 'FIND_DT',	width: 100 , datatype : 'date',  	isMultiLanguage : false},
			{groupname : 'divSearchGrp', caption: '차량번호', 		name : 'CAR_ID',	width: 100 , datatype : 'text',  	isMultiLanguage : false},
			
		];
		break;
	
	case 'CAR_SEACH_SC2152': //SC2152
		objItems = [
			{groupname : 'divSearchGrp', caption:'조회기간',	name :'FIND_DT_GR',	width:100, datatype:'daterange', target: ['FIND_DT_FR', 'FIND_DT_TO', 'date'], itemCd: 'CAP_DATE'},
			{groupname : 'divSearchGrp', caption: '입고품목 : itemin(본사 ▶  DO1, DO2, DO3 본사 ▶JS4, JPB)', 		name : 'ITEMIN',		width: 100 , datatype : 'label',  	isMultiLanguage : false},
			//color: orangered;
			{groupname : 'divSearchGrp', caption: 'itemin ▶ prodin',		name : 'ITEMIN_CHG',	width: 100 , datatype : 'button',  	isMultiLanguage : false},
			{groupname : 'divSearchGrp', caption: '품목수정',				name : 'ITEM_CHG',		width: 100 , height:50, datatype : 'button',  	isMultiLanguage : false},
			
			
			{groupname : 'divSearchGrp1', caption: '차량번호',				name : 'CAR_ID',		width: 100 , datatype : 'lov',  	isMultiLanguage : false},
			//margin-left: 132px;
			{groupname : 'divSearchGrp1', caption: '출고품목 : prodin(동설 ▶  JS1, JS2, JS3 본사 ▶ DO4, LPB)', 		name : 'PRODIN',		width: 100 , datatype : 'label',  	isMultiLanguage : false},
			//color: mediumblue;
			{groupname : 'divSearchGrp1', caption: 'prodin ▶ itemin', 	name : 'PRODIN_CHG',		width: 100 , datatype : 'button',  	isMultiLanguage : false},
			
			
		];
		fc_addDataInGettedLov('CAR_ID', {code : 'CUSCRAP_INOUT_CAR',tags : '',alias : ''});
		fc_addDataInSettingLov({object : 'CAR_ID',code : 'CUSCRAP_INOUT_CAR',format : 'V',nullable:false, defval : ''});
		break;
		
		case 'SMAPLE_MGMT_SEARCH' : //SC2130
			objItems = [
				{groupname : 'divSearchGrp', caption:'조회기간',  name: 'FIND_DT', 		width:100, datatype:'date', 	isMultiLanguage : false},
				{groupname : 'divSearchGrp', caption:'거래처',	name: 'VENDOR_CD_ID', 	width:100, datatype:'popup',	isMultiLanguage : false},
				{groupname : 'divSearchGrp', caption:'', 		name: 'VENDOR_NM_ID', 	width:200, datatype:'text', 	isMultiLanguage : false, readonly:true},
				{groupname : 'divSearchGrp', caption:'품목', 		name: 'ITEM_CD_ID', 	width:100, datatype:'popup', 	isMultiLanguage : false},
				{groupname : 'divSearchGrp', caption:'', 		name: 'ITEM_NM_ID', 	width:200, datatype:'text', 	isMultiLanguage : false, readonly:true},
			];
			fc_addCodeList( {object: 'ITEM_CD_ID'	, code: 'MC_ITEM_LIST'		, title: '품목 선택'	, manKey: '', cdParam: '2' });
			fc_addCodeList( {object: 'VENDOR_CD_ID', code: 'MC_VENDOR_LIST'	, title: '거래처 선택'	, manKey: '', cdParam: '1' });
		break;
		
		case 'SMAPLE_CAR_SEARCH' : //SC2132
			objItems = [
				{groupname : 'divSearchGrp', caption:'조회기간',	name :'FIND_DT_GR',		width:100, datatype:'daterange', target: ['FIND_DT_FR', 'FIND_DT_TO', 'date'], itemCd: 'CAP_DATE'},
				{groupname : 'divSearchGrp', caption:'품목',		name: 'ITEM_CD', 		width:100, datatype:'popup', 	 isMultiLanguage : false},
				{groupname : 'divSearchGrp', caption:'',		name: 'ITEM_NM', 		width:100, datatype:'text', 	 isMultiLanguage : false},
				{groupname : 'divSearchGrp', caption:'거채처',	name: 'VENDOR_CD',  	width:100, datatype:'popup', 	 isMultiLanguage : false},
				{groupname : 'divSearchGrp', caption:'',		name: 'VENDRO_NM',  	width:100, datatype:'text', 	 isMultiLanguage : false},
			];
		fc_addCodeList( {object: 'ITEM_CD'	, code: 'MC_ITEM_LIST'		, title: '품목 선택'	, manKey: '', cdParam: '2' });
		fc_addCodeList( {object: 'VENDOR_CD', code: 'MC_VENDOR_LIST'	, title: '거래처 선택'	, manKey: '', cdParam: '1' });
		break;
		
		
		case 'SMAPLE_CAR_TOT_SEARCH' : //SC2134
			objItems = [
				{groupname : 'divSearchGrp', caption:'조회기간',	name: 'FIND_MNT', width:100, datatype:'text', isMultiLanguage : false},
			];
		break;
		
		case 'SC2520_LIST' : //SC2520
	    	objItems = [
	            {groupname: 'divSearchGrp', caption: '조회기간 '	,name:'FIND_DT_FR'	 , width:100, datatype:'date'	, required:true},
				{groupname: 'divSearchGrp', caption: '~'		,name:'FIND_DT_TO'	 , width:100, datatype:'date'	, required:true},
				{groupname: 'divSearchGrp', caption: '차량번호 '	,name:'CAR_ID'		 , width:100, datatype:'text'	},
				{groupname: 'divSearchGrp', caption: '판매처'		,name:'VENDOR_CD'	 , width:100, datatype:'popup'	},
				{groupname: 'divSearchGrp', caption: ''			,name:'VENDOR_NM'	 , width:150, datatype:'text'	, readonly:true},
				{groupname: 'divSearchGrp', caption: '납품처'		,name:'SUB_VENDOR_CD', width:100, datatype:'popup'	},
				{groupname: 'divSearchGrp', caption: ''			,name:'SUB_VENDOR_NM', width:150, datatype:'text'	, readonly:true},
				{groupname: 'divSearchGrp', caption: '운송업체'	,name:'TRSP_CMP_CD'  , width:100, datatype:'popup'	},
				{groupname: 'divSearchGrp', caption: ''			,name:'TRSP_CMP_NM'  , width:150, datatype:'text'	, readonly:true},
	    	  ];
		
		fc_addCodeList( {object: 'VENDOR_CD', code: 'MC_VENDOR_LIST'	, title: '판매처 선택'	, manKey: '', cdParam: '2' });
		fc_addCodeList( {object: 'SUB_VENDOR_CD', code: 'MC_SUB_VENDOR_LIST_2'	, title: '납품처 선택'	, manKey: '', cdParam: '' });
		fc_addCodeList( {object: 'TRSP_CMP_CD'	, code: 'MC_CAR_TRSP_CMP_LIST'		, title: '운송회사 선택'	, manKey: '' });
		
		break;
		
		case 'S_SC2111' : //SC2111
			objItems = [
				{groupname : 'divSearchGrp', caption:'조업일자',	name: 'OP_DT_FR', width:100, datatype:'date'},
				{groupname : 'divSearchGrp', caption:'~', 		name: 'OP_DT_TO', width:100, datatype:'date'},
			];
		break;
		
		case 'HEADER_SEARCH_2440' :
			objItems = [
				{groupname : 'divSearchGrp', caption:'공장',	name: 'PLANT_NO', width:100, datatype:'lov', isMultiLanguage : false},
			];
			
			fc_addDataInGettedLov('PLANT_NO', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
			fc_addDataInSettingLov({object : "PLANT_NO",code : "YARD_PLANT_TP",format : "V",nullable : false,defval : ""});
		break;
		
		case 'HEADER_SEARCH_2441' :
			objItems = [
	            {groupname : 'divSearchGrp', caption:'공장'		,	name: 'PLANT_NO'        , width:80		, datatype:'lov'     	, isMultiLanguage : false   , required:true         },
	            {groupname : 'divSearchGrp', caption:'위치'		,	name: 'YARD_LOC_CD'     , width:80		, datatype:'popup'    	, isMultiLanguage : false   , required:true             ,maxlength:2},
	            {groupname : 'divSearchGrp', caption:'출하갯수'	,	name: 'INS_BUNDLE_CNT'      , width:80		, datatype:'number'  	, isMultiLanguage : false   , required:true             ,maxlength:4 },
	            {groupname : 'divSearchGrp', caption:'총번들'		,	name: 'BUNDLE_CNT'  , width:80		, datatype:'number'  	, isMultiLanguage : false   , readonly:true         },
	            {groupname : 'divSearchGrp', caption:'총중량'		,	name: 'BUNDLE_WGT'         , width:80		, datatype:'number'  	, isMultiLanguage : false   , readonly:true         },
	            {groupname : 'divSearchGrp', caption:'등급'		,	name: 'PROD_GRD'        , width:50		, datatype:'text'    	, isMultiLanguage : false   , readonly:true         },
	            {groupname : 'divSearchGrp', caption:'Clinch'	,	name: 'CLINCH_FLAG'     , width:100		, datatype:'checkbox'    , isMultiLanguage : false   , readonly:true        },
			];
			
			fc_addDataInGettedLov('PLANT_NO', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
			fc_addDataInSettingLov({object : "PLANT_NO",code : "YARD_PLANT_TP",format : "V",nullable : false,defval : ""});
			
			fc_addCodeList( {object: 'YARD_LOC_CD', code: 'MC_YARD_LIST_SC2441'	, title: '위치 선택'	, manKey: '', cdParam: '' });
			
		break;
		
		case 'HEADER_SEARCH_2442' :
			objItems = [
	            {groupname : 'divSearchGrp', caption:'공장'		,	name: 'PLANT_NO'        , width:80		, datatype:'lov'     	, required:true         },
	            {groupname : 'divSearchGrp', caption:'위치'		,	name: 'YARD_LOC_CD'     , width:80		, datatype:'lov'    	, required:true         },
	            {groupname : 'divSearchGrp', caption:'총번들'		,	name: 'BUNDLE_CNT'  	, width:80		, datatype:'number'  	, readonly:true         },
	            {groupname : 'divSearchGrp', caption:'출고량'		,	name: 'OUT_WGT'         , width:80		, datatype:'number'  	, required:true		, readonly:false	},
			];
			
			fc_addDataInGettedLov('PLANT_NO', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
			fc_addDataInSettingLov({object : "PLANT_NO",code : "YARD_PLANT_TP",format : "V",nullable : false,defval : ""});
			
			//fc_addCodeList( {object: 'YARD_LOC_CD', code: 'MC_YARD_LIST_SC2441'	, title: '위치 선택'	, manKey: '', cdParam: '' });
			
			fc_addDataInGettedLov('YARD_LOC_CD', {code : 'MC_PKG_YARD_CD_2442',tags : '',alias : ''});
			fc_addDataInSettingLov({object : "YARD_LOC_CD",code : "MC_PKG_YARD_CD_2442",format : "V",nullable : false,defval : ""});
			
		break;
		
		case 'HEADER_SEARCH_2443' :
			objItems = [
				{groupname : 'divSearchGrp', caption:'공장'		,	name: 'PLANT_NO'        , width:80		, datatype:'lov'     	, required:true         },
				];
			
			fc_addDataInGettedLov('PLANT_NO', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
			fc_addDataInSettingLov({object : "PLANT_NO",code : "YARD_PLANT_TP",format : "V",nullable : false,defval : ""});
			
			break;
			
			
		case 'HEADER_SEARCH_2444' :
			
			var now = new Date();
			var firstDate, lastDate;

			firstDate = new Date(now.getFullYear(),now.getMonth(),1);
			
			objItems = [
				{groupname : 'divSearchGrp', caption:'공장'		,	name: 'PLANT_NO'        , width:80		, datatype:'lov'     	, required:true         },
			    //{groupname : 'divSearchGrp', caption:'위치'		,	name: 'YARD_LOC_CD'     , width:80		, datatype:'lov'    	, required:true         },
				{groupname : 'divSearchGrp', caption:'출고일자'		,	name: 'OUT_DT_FR'        , width:80		, datatype:'date'     	, required:true         ,defval:firstDate.getFullYear()+'-'+(firstDate.getMonth()+1)+'-'+firstDate.getDate()},
				{groupname : 'divSearchGrp', caption:'~'		,	name: 'OUT_DT_TO'        , width:80		, datatype:'date'     	, required:true         },
				{groupname : 'divSearchGrp', caption:'차량번호'		,	name: 'CAR_ID'        , width:80		, datatype:'text'   },
				];
			
			fc_addDataInGettedLov('PLANT_NO', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
			fc_addDataInSettingLov({object : "PLANT_NO",code : "YARD_PLANT_TP",format : "V",nullable : false,defval : ""});
			
			
			//fc_addDataInGettedLov('YARD_LOC_CD', {code : 'MC_PKG_YARD_CD_2442',tags : '',alias : ''});
			//fc_addDataInSettingLov({object : "YARD_LOC_CD",code : "MC_PKG_YARD_CD_2442",format : "V",nullable : false,defval : ""});
			
			
			break;
			
		case 'HEADER_SEARCH_2445' :
			
			var now = new Date();
			var firstDate, lastDate;
			
			firstDate = new Date(now.getFullYear(),now.getMonth(),1);
			
			objItems = [
				{groupname : 'divSearchGrp', caption:'공장'		,	name: 'PLANT_NO'         , width:80		, datatype:'lov'     	, required:true         },
				{groupname : 'divSearchGrp', caption:'출고일자'	,	name: 'PKG_DT_FR'        , width:80		, datatype:'date'     	, required:true         },
				{groupname : 'divSearchGrp', caption:'~'		,	name: 'PKG_DT_TO'        , width:80		, datatype:'date'     	, required:true         },
				];
			
			fc_addDataInGettedLov('PLANT_NO', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
			fc_addDataInSettingLov({object : "PLANT_NO",code : "YARD_PLANT_TP",format : "V",nullable : false,defval : ""});
			
			
			
			
			break;
		
		case 'HEADER_SEARCH_2451' :
			objItems = [
				{groupname : 'divSearchGrp', caption:'공장',	name: 'PLANT_NO', width:100, datatype:'lov', isMultiLanguage : false},
				{groupname : 'divSearchGrp', caption:'조업일자',	name: 'OP_DT', width:100, datatype:'date', isMultiLanguage : false},
				];
			
			fc_addDataInGettedLov('PLANT_NO', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
			fc_addDataInSettingLov({object : "PLANT_NO",code : "YARD_PLANT_TP",format : "V",nullable : false,defval : ""});
			break;
			
		case 'S_SC2115' : //SC2115
			objItems = [
				{groupname : 'divSearchGrp', caption:'조업일자'	, name:'OP_DT'	, width:100, datatype:'date'},
				{groupname : 'divSearchGrp', caption:'입력일자'	, name:'INS_DT'	, width:100, datatype:'date'}
			];
		break;
		
		case 'S_SC2116' : //SC2116
			objItems = [
				{groupname : 'divSearchGrp', caption:'조회일자'	, name:'FIND_DT'	, width:100, datatype:'date', required:true },
			];
		break;
		
		case 'S_SC2350' : //SC2350
			objItems = [
				{groupname : 'divSearchGrp', caption:'조업일자',	name: 'OP_DT_FR', width:100, datatype:'date'},
				{groupname : 'divSearchGrp', caption:'~', 		name: 'OP_DT_TO', width:100, datatype:'date'},
			];
		break;
		
		case 'CAR_SAMPLE_LOT_SEARCH': //SC2135
			objItems = [
				{groupname : 'divSearchGrp', caption:'조회기간',	name :'FIND_DT_GR',		width:100, datatype:'daterange', target: ['FIND_DT_FR', 'FIND_DT_TO', 'date'], itemCd: 'CAP_DATE'},
				{groupname : 'divSearchGrp', caption:'품목', 		name:'ITEM_CD', 		width:100, datatype:'popup', 	isMultiLanguage:false},
				{groupname : 'divSearchGrp', caption:'', 		name:'ITEM_NM', 		width:100, datatype:'text', 	isMultiLanguage:false},
				{groupname : 'divSearchGrp', caption:'거래처', 	name:'VENDOR_CD', 		width:100, datatype:'popup', 	isMultiLanguage:false},
				{groupname : 'divSearchGrp', caption:'', 		name:'VENDOR_NM', 		width:100, datatype:'text', 	isMultiLanguage:false}
			];
			fc_addCodeList( {object: 'VENDOR_CD', code: 'MC_VENDOR_LIST_2'	, title: '판매처 선택'	, manKey: ''});
			fc_addCodeList( {object: 'ITEM_CD', code: 'MC_ITEM_LIST_3'	, title: '납품처 선택'	, manKey: ''});
			break;
			
		case 'S_SC2351' : //SC2351
			objItems = [
				{groupname : 'divSearchGrp', caption:'조회기간'	, name: 'FIND_MNT_FR'	, width:100, datatype:'text', required:true},
				{groupname : 'divSearchGrp', caption:'~'		, name: 'FIND_MNT_TO'	, width:100, datatype:'text', required:true},
				{groupname : 'divSearchGrp', caption:'등록월'		, name: 'INS_MNT'		, width:100, datatype:'text', required:true}
			];
		break;
		
		case 'S_SC2460' : //SC2460
	    	objItems = [
	    	            {groupname: 'divSearchGrp', caption:'출고일자'		, name:'OUT_DT_FR'	, width: 130, datatype: 'date'	,required:true},
	    	            {groupname: 'divSearchGrp', caption:''			, name:'OUT_DT_TO'	, width: 130, datatype: 'date'	,required:true},
	    	            {groupname: 'divSearchGrp', caption:'상차공장'		, name:'PLANT_NO'	, width: 150, datatype: 'lov'	},
	    	            {groupname: 'divSearchGrp', caption:'품목코드'		, name:'ITEM_CD'	, width: 100, datatype: 'popup'	,readonly:true},
	    	            {groupname: 'divSearchGrp', caption:''			, name:'ITEM_NM'	, width: 200, datatype: 'text'	,readonly:true},
	    	            {groupname: 'divSearchGrp', caption:'판매처'		, name:'VENDOR_CD'	, width: 100, datatype: 'popup'	},
	    	            {groupname: 'divSearchGrp', caption:''			, name:'VENDOR_NM'	, width: 200, datatype: 'text'	,readonly:true},

	    	            ];
	    	fc_addCodeList( {object: 'ITEM_CD'	, code: 'MC_ITEM_LIST'		, title: '품목 선택'	, manKey: '', cdParam: '1' });
	    	fc_addCodeList( {object: 'VENDOR_CD', code: 'MC_SELECT_VENDOR_LIST'	, title: '판매처 선택'	, manKey: '', cdParam:'2' });

	    	fc_addDataInGettedLov('', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
			fc_addDataInSettingLov({object : 'PLANT_NO',code : 'YARD_PLANT_TP',format : 'V',nullable:false, defval : ''});
	    	break;
	    	
		case 'S_SC2461' : //SC2461
	    	objItems = [
	    	            {groupname: 'divSearchGrp', caption:'출고일자'		, name:'OUT_DT_FR'	, width: 130, datatype: 'date'	,required:true},
	    	            {groupname: 'divSearchGrp', caption:''			, name:'OUT_DT_TO'	, width: 130, datatype: 'date'	,required:true},
	    	            {groupname: 'divSearchGrp', caption:'상차공장'		, name:'PLANT_NO'	, width: 150, datatype: 'lov'	},
	    	            {groupname: 'divSearchGrp', caption:'품목코드'		, name:'ITEM_CD'	, width: 100, datatype: 'popup'	},
	    	            {groupname: 'divSearchGrp', caption:''			, name:'ITEM_NM'	, width: 200, datatype: 'text'	},
	    	            {groupname: 'divSearchGrp', caption:'판매처'		, name:'VENDOR_CD'	, width: 100, datatype: 'popup'	},
	    	            {groupname: 'divSearchGrp', caption:''			, name:'VENDOR_NM'	, width: 200, datatype: 'text'	,readonly:true},

	    	            ];
	    	fc_addCodeList( {object: 'ITEM_CD'	, code: 'MC_ITEM_LIST'		, title: '품목 선택'	, manKey: '', cdParam: '1' });
	    	fc_addCodeList( {object: 'VENDOR_CD', code: 'MC_SELECT_VENDOR_LIST'	, title: '판매처 선택'	, manKey: '', cdParam:'2' });

	    	fc_addDataInGettedLov('', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
			fc_addDataInSettingLov({object : 'PLANT_NO',code : 'YARD_PLANT_TP',format : 'V',nullable:false, defval : ''});
	    	break;
			
	    case 'SC4331_SEARCH':// SC4331
			objItems = [
			             {groupname : 'divSearchGrp',caption : '계근대',name : 'GAUGE_CD',itemCd : 'GAUGE_CD',width : 100,datatype : 'lov',isMultiLanguage : false,maxlength : 3},
			             ];
			fc_addDataInGettedLov('ITEM_REG_CD', {code : 'GAUGE_CD',tags : '',alias : ''});
			fc_addDataInSettingLov({object : 'GAUGE_CD',code : 'GAUGE_CD',format : 'V',nullable : false,defval : ''});
			break;
		
	    case 'CAR_SAMPLE_IN_SEARCH': //SC2136
			objItems = [
				{groupname : 'divSearchGrp', caption:'조회년월', 	name:'FIND_MNT_FR', width:100, datatype:'text', 	isMultiLanguage:false},
				{groupname : 'divSearchGrp', caption:'~', 		name:'FIND_MNT_TO', width:100, datatype:'text', 	isMultiLanguage:false},
				{groupname : 'divSearchGrp', caption:'품목', 		name:'ITEM_CD', 	width:100, datatype:'popup', 	isMultiLanguage:false},
				{groupname : 'divSearchGrp', caption:'', 		name:'ITEM_NM', 	width:100, datatype:'text', 	isMultiLanguage:false},
				{groupname : 'divSearchGrp', caption:'거래처', 	name:'VENDOR_CD', 	width:100, datatype:'popup', 	isMultiLanguage:false},
				{groupname : 'divSearchGrp', caption:'', 		name:'VENDOR_NM', 	width:100, datatype:'text', 	isMultiLanguage:false}
			];
			fc_addCodeList( {object: 'VENDOR_CD', code: 'MC_VENDOR_LIST_2'	, title: '판매처 선택'	, manKey: ''});
			fc_addCodeList( {object: 'ITEM_CD', code: 'MC_ITEM_LIST_3'	, title: '납품처 선택'	, manKey: ''});
		break;
		
	    case  'MTRL_IN_SEARCH'://SC2210
	    	objItems = [
	    		{groupname : 'divSearchGrp', caption:'조회기간', 	name:'FIND_DT_FR', 	width:100, datatype:'date', isMultiLanguage:false},
	    		{groupname : 'divSearchGrp', caption:'~', 		name:'FIND_DT_TO', 	width:100, datatype:'date', isMultiLanguage:false},
	    		{groupname : 'divSearchGrp', caption:'자재그룹', 	name:'MTRL_GROUP', 	width:100, datatype:'text', isMultiLanguage:false},
	    		{groupname : 'divSearchGrp', caption:'자재코드',	name:'MTRL_CD', 	width:100, datatype:'text', isMultiLanguage:false},
	    		{groupname : 'divSearchGrp', caption:'', 		name:'MTRL_NM', 	width:150, datatype:'text', isMultiLanguage:false},
	    		{groupname : 'divSearchGrp', caption:'미완성',	name:'CHECK',		width:100, datatype:'checkbox', isMultiLanguage:false}	
	    	];
	    	
	    break;
	    
	    case  'S_SC3215'://SC3215
	    	objItems = [
	    		{groupname: 'divSearchGrp',  caption: '조회월'	, name: 'FIND_MNT'    , width: 100, datatype: 'text', required:true},
	    	];
	    	
	    break;
	    
	    case  'HEADER_SEARCH_2421'://SC2421
	    	objItems = [
	    		{groupname : 'divSearchGrp',    caption:'조회일자', name:'FIND_DT'      , 	width:100, datatype:'date'  , isMultiLanguage:false, required:true},
	    		{groupname : 'divSearchGrp',    caption:'운송업체', name:'TRSP_CMP_CD'  , 	width:100, datatype:'popup' , isMultiLanguage:false, required:true},
	    		{groupname : 'divSearchGrp',    caption:'', name:'TRSP_CMP_NM'          , 	width:100, datatype:'text'  , isMultiLanguage:false, readonly:true},
	    		
	    		];
	    	
	    	break;
	    	
	    case 'BUNKER_U_ORDER_SEARCH'://sc2160
	    	objItems = [
	    		{groupname: 'divSearchGrp', caption:'오더일자', name:'ORD_DT', width:100, datatype:'date', isMultiLanguage:false},
	    		{groupname: 'divSearchGrp', caption:' ', 	  name:'CAR_NO', width:100, datatype:'text', isMultiLanguage:false},
	    	];
	    	break;
	    	
	    case 'TEMP_SC3120' : //SC3120
	    	objItems = [

	    	            {groupname: 'divSearchGrp', caption: '품목구분'  	, name: 'ITEM_TP'		, width: 100, datatype: 'lov'	},
	    	            {groupname: 'divSearchGrp', caption: '품목'		, name: 'ITEM_CD' 	, width: 100, datatype: 'lov' 	},
						{groupname: 'divSearchGrp', caption: '최종도착일'  , name: 'DATE_FROM'			, width: 130, datatype: 'date'  },
						{groupname: 'divSearchGrp', caption: '~'        , name: 'DATE_TO'			, width: 130, datatype: 'date'  },
						{groupname: 'divSearchGrp', caption: '진행여부'   	, name: 'PROCEED_YN'      	, width: 130, datatype: 'radio' , itemCd: 'PROCEED_YN'  , required : true },

						];
			fc_addDataInGettedLov('', {code : 'RM_ITEM_CD',tags : '',	alias : ''});
			fc_addDataInSettingLov({object : 'ITEM_TP',code : 'RM_ITEM_CD',format : 'V',nullable : true,defval : ''});
			//제품
			fc_addDataInGettedLov('PSA_CONS_MTRL_CD', {code : 'PSA_CONS_MTRL_CD',tags : '',alias : ''});
			
			fc_addDataInSettingLov({object : 'ITEM_CD',code : 'RM_ITEM_CD',format : 'V',nullable : true,defval : ''});
	    	break;
	    	
	    case 'TRSP_COST_1310': //sc1310
	    	objItems = [
	    		{groupname : 'divSearchGrp', caption:'조회기간',	name :'FIND_DT_GR',		width:100, datatype:'daterange', target: ['FIND_DT_FR', 'FIND_DT_TO', 'date'], itemCd: 'CAP_DATE'},
	    		{groupname : 'divSearchGrp', caption:'품목', 		name:'ITEM_CD', 		width:100, datatype:'popup'},
	    		{groupname : 'divSearchGrp', caption:'', 		name:'ITEM_NM', 		width:150, datatype:'text'},
	    		{groupname : 'divSearchGrp', caption:'판매처', 	name:'VENDOR_CD',	 	width:100, datatype:'popup'},
	    		{groupname : 'divSearchGrp', caption:'', 		name:'VENDOR_NM',	 	width:150, datatype:'text'},
	    		{groupname : 'divSearchGrp', caption:'납품처', 	name:'SUB_VENDOR_CD',	width:100, datatype:'popup'},
	    		{groupname : 'divSearchGrp', caption:'', 		name:'SUB_VENDOR_NM',	width:150, datatype:'text'},
	    		{groupname : 'divSearchGrp', caption:'운송업체', 	name:'TRSP_CMP_CD', 	width:100, datatype:'popup'},
	    		{groupname : 'divSearchGrp', caption:'', 		name:'TRSP_CMP_NM', 	width:150, datatype:'text'},
	    		{groupname : 'divSearchGrp', caption:'구분',		name:'INOUT_TP', 		width:100, datatype:'lov'},
	    		{groupname : 'divSearchGrp', caption:'운송료마감',	name:'COST_CLOSE_BT', 	width:100, datatype:'button'},
	    	];
	    	fc_addCodeList( {object: 'ITEM_CD', code: 'MC_ITEM_LIST_4'	, title: '품목 선택'	, manKey: ''});
	    	fc_addCodeList( {object: 'VENDOR_CD', code: 'MC_VENDOR_LIST_4'	, title: '판매처 선택'	, manKey: ''});
	    	fc_addCodeList( {object: 'SUB_VENDOR_CD', code: 'MC_SUB_VENDOR_LIST_3'	, title: '납품처 선택'	, manKey: ''});
	    	fc_addCodeList( {object: 'TRSP_CMP_CD', code: 'MC_TRSP_CMP_LIST_2'	, title: '운송업체 선택'	, manKey: ''});
	    		
	    	fc_addDataInGettedLov('INOUT_TP', {code : 'INOUT_TP',tags : '',alias : ''});
			fc_addDataInSettingLov({object : 'INOUT_TP',code : 'INOUT_TP',format : 'V',nullable : false, defval : ''});
	    	break;
	    	
	    case 'S_SC3250'://SC3250
	    	objItems = [
	    		{groupname: 'divSearchGrp', caption:'조회기간(월)'	, name:'FIND_FR'	, width:100, datatype:'text'},
	    		{groupname: 'divSearchGrp', caption:'~'			, name:'FIND_TO'	, width:100, datatype:'text'},
	    		{groupname: 'divSearchGrp', caption:'자재그룹'		, name:'MTRL_FR'	, width:100, datatype:'lov'},
	    		{groupname: 'divSearchGrp', caption:'~'			, name:'MTRL_TO'	, width:100, datatype:'lov'}
	    	];
	    	
	    	fc_addDataInGettedLov('MTRL_GROUP', {code : 'MTRL_GROUP',tags : '',alias : ''});
			fc_addDataInSettingLov({object : 'MTRL_FR',code : 'MTRL_GROUP',format : 'K',nullable : false, defval : ''});
			fc_addDataInSettingLov({object : 'MTRL_TO',code : 'MTRL_GROUP',format : 'K',nullable : false, defval : ''});
	    	break;
	    	
	    case 'S_SC3253'://SC3253
	    	objItems = [
	    		{groupname: 'divSearchGrp', caption:'조회기간(년)'	, name:'FIND_FR'	, width:100, datatype:'lov'},
	    		{groupname: 'divSearchGrp', caption:'~'			, name:'FIND_TO'	, width:100, datatype:'lov'},
	    		{groupname: 'divSearchGrp', caption:'자재그룹'		, name:'MTRL_FR'	, width:100, datatype:'lov'},
	    		{groupname: 'divSearchGrp', caption:'~'			, name:'MTRL_TO'	, width:100, datatype:'lov'}
	    	];
	    	
	    	fc_addDataInGettedLov ( 'YEAR_LIST_LOV'    , {code: 'YEAR_LIST_LOV'   , tags: ''   , alias:'' } );
	    	fc_addDataInGettedLov('MTRL_GROUP', {code : 'MTRL_GROUP',tags : '',alias : ''});
	    	
	    	fc_addDataInSettingLov({object: 'FIND_FR', code: 'YEAR_LIST_LOV', format: 'V', nullable: false, defval: ''   });
	    	fc_addDataInSettingLov({object: 'FIND_TO', code: 'YEAR_LIST_LOV', format: 'V', nullable: false, defval: ''   });
	    	
			fc_addDataInSettingLov({object : 'MTRL_FR',code : 'MTRL_GROUP',format : 'K',nullable : false, defval : ''});
			fc_addDataInSettingLov({object : 'MTRL_TO',code : 'MTRL_GROUP',format : 'K',nullable : false, defval : ''});
	    	break;
	    
	    case 'CAR_DIESEL_SEARCH': //SC2161
			objItems = [
				{groupname : 'divSearchGrp', caption:'조회기간',		name :'FIND_DT_GR',		width:100, datatype:'daterange', target: ['FIND_DT_FR', 'FIND_DT_TO', 'date'], itemCd: 'CAP_DATE'},
				{groupname : 'divSearchGrp', caption:'업체명',		name:'CMP_NM',			width:100, datatype:'text'},
				{groupname : 'divSearchGrp', caption:'공정',			name:'PROD_CD', 		width:100, datatype:'lov', hidden:true },
				{groupname : 'divSearchGrp', caption:'경유카드관리', 	name:'REFUEL_CARD', 	width:100, datatype:'button'}
			];
			break;
	    
	    case 'DIESEL_CARD_SEARCH' : //SC2162
	    	objItems = [
	    		{groupname : 'divSearchGrp', caption:'경유카드번호', name:'CARD_NO', width:100, datatype:'text'}
	    	];
	    	break;
	    	
	    case 'S_SC3255'://SC3255
	    	objItems = [
	    		{groupname: 'divSearchGrp', caption:'조회기간(월)'	, name:'FIND_FR'	, width:100, datatype:'text'},
	    		{groupname: 'divSearchGrp', caption:'~'			, name:'FIND_TO'	, width:100, datatype:'text'},
	    		{groupname: 'divSearchGrp', caption:'자재그룹'		, name:'MTRL_FR'	, width:100, datatype:'lov'},
	    		{groupname: 'divSearchGrp', caption:'~'			, name:'MTRL_TO'	, width:100, datatype:'lov'}
	    	];
	    	
	    	fc_addDataInGettedLov('MTRL_GROUP', {code : 'MTRL_GROUP',tags : '',alias : ''});
			fc_addDataInSettingLov({object : 'MTRL_FR',code : 'MTRL_GROUP',format : 'K',nullable : false, defval : ''});
			fc_addDataInSettingLov({object : 'MTRL_TO',code : 'MTRL_GROUP',format : 'K',nullable : false, defval : ''});
	    	break;
	    	
	    case 'S_SC3257'://SC3257
	    	objItems = [
	    		{groupname: 'divSearchGrp', caption:'자재그룹'	, name:'MTRL_FR'	, width:100, datatype:'lov'	, required:true},
	    		{groupname: 'divSearchGrp', caption:'~'		, name:'MTRL_TO'	, width:100, datatype:'lov'	, required:true},
	    		{groupname: 'divSearchGrp', caption:'조회월'	, name:'FIND_MNT'		, width:100, datatype:'text', hidden:true},
	    	];
	    	
	    	fc_addDataInGettedLov('MTRL_GROUP', {code : 'MTRL_GROUP',tags : '',alias : ''});
			fc_addDataInSettingLov({object : 'MTRL_FR',code : 'MTRL_GROUP',format : 'K',nullable : false, defval : ''});
			fc_addDataInSettingLov({object : 'MTRL_TO',code : 'MTRL_GROUP',format : 'K',nullable : false, defval : ''});
	    	break;
	    	
	    case 'S_SC3260'://SC3260
	    	objItems = [
	    		{groupname: 'divSearchGrp', caption:'조회기간(월)'	, name:'FIND_FR'	, width:100, datatype:'text', required:true},
	    		{groupname: 'divSearchGrp', caption:'자재그룹'		, name:'MTRL_FR'	, width:100, datatype:'lov'	, required:true},
	    		{groupname: 'divSearchGrp', caption:'~'			, name:'MTRL_TO'	, width:100, datatype:'lov'	, required:true},
	    	];
	    	
	    	fc_addDataInGettedLov('MTRL_GROUP', {code : 'MTRL_GROUP',tags : '',alias : ''});
			fc_addDataInSettingLov({object : 'MTRL_FR',code : 'MTRL_GROUP',format : 'K',nullable : false, defval : ''});
			fc_addDataInSettingLov({object : 'MTRL_TO',code : 'MTRL_GROUP',format : 'K',nullable : false, defval : ''});
            break;
            
        case 'S_SC3210'://SC3210
	    	objItems = [
	    		{groupname: 'divSearchGrp', caption:'조회일자'	, name:'FIND_DAY'	, width:100, datatype:'date', required:true},
	    	];
	    	
	    	break;
	};
	
	return objItems;
}; // end of fm_getSearchItems

/**
 * fm_getHeaderItems
 *
 * @param sKey
 * @param caption_flag
 * @param attribute1
 * @param attribute2
 * @returns {___anonymous27085_27121}
 */
function fm_getHeaderItems(sKey, caption_flag, attribute1, attribute2) {
	var objItems = null;
	var groupCaption = null;
	var sCaption = '', sItemCd = '';

	switch (sKey) {

	case 'SCH_CAST_INFO': // SCHB0050
		if (caption_flag) {
			sCaption = 'CAST Information';
			sItemCd = '';
		}
		;
		objItems = [ 
					{groupname : 'DG_GRP',	caption : 'CAST Information', name : 'CAST_NAME'	, width : 0		, datatype : 'label'	, isMultiLanguage : false}, 
					{groupname : 'DG_GRP', 	caption : 'Up'				, name : 'CAST_UP'		, width : 100	, datatype : 'button'	, isMultiLanguage : false}, 
					{groupname : 'DG_GRP',	caption : 'Down'			, name : 'CAST_DOWN'	, width : 100 	, datatype : 'button'   , isMultiLanguage : false}, 
					{groupname : 'DG_GRP',	caption : 'Merge'			, name : 'CAST_MERGE'   , width : 100	, datatype : 'button'	, isMultiLanguage : false}, 
					{groupname : 'DG_GRP',	caption : '(>)Move to Cast'	, name : 'CAST_MOVE'	, width : 100	, datatype : 'button'	, isMultiLanguage : false}, 
					{groupname : 'DG_GRP',	caption : ''				, name : 'TO_CAST_MC'	, width : 70	, datatype : 'lov'		, isMultiLanguage : false} 
					 ];

		fc_addDataInGettedLov('MC_NO_BOF', {code : 'MC_NO_BOF',	tags : '', alias : ''});
		fc_addDataInSettingLov({object : 'TO_CAST_MC', code : 'MC_NO_BOF', format : 'V', nullable : true, defval : ''});
		break;

	case 'DEVELOPER_TABLE': // SCOZ0070
		if (caption_flag) {
			sCaption = 'DEVELOPER_TABLE';
			sItemCd = 'CAP_DEVELOPER_TABLE';
		}
		;
		objItems = [ 
					{groupname : 'divDomGrp1', 	caption : '품목코드'	, name : 'ITEM_CD'	, width : 100, datatype : 'text', readonly : true, itemCd : 'ITEM_CD', isMultiLanguage : false}, 
					{groupname : 'divDomGrp2',	caption : '품목명'	, name : 'ITEM_NM'	, width : 200, datatype : 'text', readonly : true, itemCd : 'ITEM_NM', isMultiLanguage : false}, 
					{groupname : 'divDomGrp3',	caption : '품목구분' 	, name : 'ITEM_TP'	, width : 500, datatype : 'text', readonly : true, itemCd : 'ITEM_TP', isMultiLanguage : false} 
					];
		break;

	case  'SECT_DOM_SEARCH' : //SC4232
		if (caption_flag) {
			sCaption = '운송업체 구간코드';
			sItemCd = '';
		};
		objItems = [
					{groupname : 'divDomGrp1',	caption : '운송업체코드', 	name : 'DOM_TRSP_CMP_CD',	width : 100, datatype : 'popup',	isMultiLanguage : false}, 
					{groupname : 'divDomGrp1',	caption : '', 			name : 'DOM_TRSP_CMP_NM',	width : 150, datatype : 'text',		isMultiLanguage : false, readonly:true}, 
					{groupname : 'divDomGrp1',	caption : '복사', 		name : 'COPY_BT', 			width : 200, datatype : 'button',	isMultiLanguage : false}
					];
		fc_addCodeList( {object: 'DOM_TRSP_CMP_CD',  code: 'MC_TRSP_CONTRACT_2',	title: '운송업체 목록', manKey: '' });
		break;

	case  'CAR_DOM_SEARCH' : //SC1420
		if (caption_flag) {
			sCaption = '';
			sItemCd = 'CAP_CAR_DOM_SEARCH';
		};
		objItems = [ 
					{groupname : 'divDomGrp1', caption : '출발지'		, name : 'DEP_POS_CD'		, width : 100, datatype : 'popup'	, isMultiLanguage : false}, 
					{groupname : 'divDomGrp1', caption : ''			, name : 'DEP_POS_NM'		, width : 100, datatype : 'text'	, isMultiLanguage : false, readonly:true}, 
					{groupname : 'divDomGrp1', caption : '출발지수정'	, name : 'DEP_BT'			, width : 150, datatype : 'button'	, isMultiLanguage : false}, 
					{groupname : 'divDomGrp1', caption : '도착지'		, name : 'ARRIVAL_POS_CD'	, width : 100, datatype : 'popup'	, isMultiLanguage : false},
					{groupname : 'divDomGrp1', caption : ''			, name : 'ARRIVAL_POS_NM'	, width : 100, datatype : 'text'	, isMultiLanguage : false, readonly:true},
					{groupname : 'divDomGrp1', caption : '도착지수정'	, name : 'ARRIVAL_BT'		, width : 150, datatype : 'button'	, isMultiLanguage : false}, 
					{groupname : 'divDomGrp1', caption : '품목'		, name : 'ITEM_CD_2'		, width : 100, datatype : 'popup'	, isMultiLanguage : false}, 
					{groupname : 'divDomGrp1', caption : ''			, name : 'ITEM_NM_2'		, width : 150, datatype : 'text'	, isMultiLanguage : false, readonly:true}, 
					{groupname : 'divDomGrp1', caption : '품목수정'	, name : 'ITEM_BT'			, width : 150, datatype : 'button'	, isMultiLanguage : false}, 
					{groupname : 'divDomGrp1', caption : '공장'		, name : 'PLANT'			, width : 100, datatype : 'lov'		, isMultiLanguage : false}, 
					{groupname : 'divDomGrp1', caption : '공장수정'	, name : 'PLANT_BT'			, width : 150, datatype : 'button'	, isMultiLanguage : false}, 
					];
		fc_addCodeList( {object: 'DEP_POS_CD', code: 'MC_TRSP_SECT_DTL_LIST_2', title: '구간조회', manKey: '', });
		fc_addCodeList( {object: 'ARRIVAL_POS_CD', code: 'MC_TRSP_SECT_DTL_LIST', title: '구간조회', manKey: '', });
		fc_addCodeList( {object: 'ITEM_CD_2', code: 'MC_ITEM_LIST_2', title: '퓸목코드조회', manKey: '', });
		
//		//lov
		fc_addDataInGettedLov ( 'PLANT', {code: 'YARD_PLANT_TP', tags: '', alias: ''} );
		fc_addDataInSettingLov( {object: 'PLANT', code: 'YARD_PLANT_TP' , format: 'V', nullable: true , defval: ''} );
		break;
	
	case 'CAR_IN_DOM' : //SC1443
		if(caption_flag) {
			sCaption = '';
			sItemCd = 'CAP_CAR_IN_DOM';
		};
		objItems = [
					{groupname : 'divDomGrp1', caption : '입고번호',		name : 'CAR_INOUT_NO',	width : 100, datatype : 'text',		isMultiLanguage :false, readonly:true},
					{groupname : 'divDomGrp1', caption : '',			name : 'CAR_IN_SEQ',	width : 100, datatype : 'number',	isMultiLanguage :false, readonly:true},
					{groupname : 'divDomGrp1', caption : '차량번호',		name : 'CAR_NO',		width : 100, datatype : 'text',		isMultiLanguage :false, readonly:true},
					{groupname : 'divDomGrp1', caption : '차선번호',		name : 'SCH_NO', 		width : 100, datatype : 'text',		isMultiLanguage :false},
					{groupname : 'divDomGrp1', caption : '컨테이너번호',	name : 'CONTAINER_NO',	width : 100, datatype : 'text',		isMultiLanguage :false},
					{groupname : 'divDomGrp1', caption : '중복차량삭제',	name : 'OVERLAP_BT',	width : 100, datatype : 'button',	isMultiLanguage :false},
					];
		break;
		
	case 'SUB_HEADER_L0' : //SC2430
		if(caption_flag) {
			sCaption = '';
			sItemCd = 'SUB_HEADER_L0_CD'
		};
		objItems = [
					{groupname : 'divDomGrp1', caption : '야적위치'     ,	name : 'YARD_LOC_CD1'    ,	width : 100     , datatype : 'popup'     ,		isMultiLanguage :false      , required : true},
					{groupname : 'divDomGrp1', caption : '지시중량'     ,	name : 'INST_WGT'       ,	width : 100     , datatype : 'number'     ,		isMultiLanguage :false      , required : true,	defval : '0'},
					{groupname : 'divDomGrp1', caption : '총중량'       ,	name : 'TOT_WGT'        ,	width : 100     , datatype : 'number'     ,		isMultiLanguage :false      , readonly  :   true,	defval : '0'},
					{groupname : 'divDomGrp1', caption : '지시량차이'   ,	name : 'DIFF_WGT'       ,	width : 100     , datatype : 'number'     ,		isMultiLanguage :false      , readonly  :   true,	defval : '0'},
					{groupname : 'divDomGrp1', caption : '조회'   ,	name : 'SUB_HEADER_L0_BTN1'       ,	width : 100     , datatype : 'button'     ,		isMultiLanguage :false      , readonly  :   true},
					{groupname : 'divDomGrp1', caption : '상차'   ,	name : 'SUB_HEADER_L0_BTN2'       ,	width : 100     , datatype : 'button'     ,		isMultiLanguage :false      , readonly  :   true},
					];
		
		fc_addCodeList( {object: 'YARD_LOC_CD1', code: 'MC_YARD_LIST', title: '야적위치조회', manKey: '', cdParam:'' });
		break;
		
	case 'SUB_HEADER_L1' : //SC2430
		if(caption_flag) {
			sCaption = '';
			sItemCd = 'SUB_HEADER_L1_CD'
		};
		objItems = [
			{groupname : 'divDomGrp2', caption : '등급'       ,	name : 'PROD_GRD1'                 ,	width : 100     , datatype : 'lov'          ,		isMultiLanguage :false      , required : true},
			{groupname : 'divDomGrp2', caption : 'clinch'    ,	name : 'CLINCH_FLAG'          	  ,	width : 100     , datatype : 'checkbox'     ,		isMultiLanguage :false      , defval : '0'},
			{groupname : 'divDomGrp2', caption : '계근중량'    ,	name : 'GAUGE_WGT'            	  ,	width : 100     , datatype : 'number'       ,		isMultiLanguage :false      , required : true},
			{groupname : 'divDomGrp2', caption : '조회'       ,	name : 'SUB_HEADER_L1_BTN1'       ,	width : 100     , datatype : 'button'       ,		isMultiLanguage :false},
			{groupname : 'divDomGrp2', caption : '상차'       ,	name : 'SUB_HEADER_L1_BTN2'       ,	width : 100     , datatype : 'button'       ,		isMultiLanguage :false},
			];

		
		fc_addDataInGettedLov("PROD_GRD1", {code : "MC_PROD_GRD",tags : "",alias : ""});
		fc_addDataInSettingLov({object : "PROD_GRD1",code : "MC_PROD_GRD",format : "V",nullable : false,defval : ""});
		
		break;
		
	case 'SUB_HEADER_L2' : //SC2430
		if(caption_flag) {
			sCaption = '';
			sItemCd = 'SUB_HEADER_L2_CD'
		};
		objItems = [
			{groupname : 'divDomGrp3', caption : ''       ,	name : 'PROD_GRD'                 ,	width : 'auto'     , datatype : 'text'          ,		isMultiLanguage :false  ,	readonly:true},
			{groupname : 'divDomGrp3', caption : '낱장생성'       ,	name : 'SUB_HEADER_L2_BTN1'       ,	width : 100     , datatype : 'button'       ,		isMultiLanguage :false},
			{groupname : 'divDomGrp3', caption : '상차'       ,	name : 'SUB_HEADER_L2_BTN2'       ,	width : 100     , datatype : 'button'       ,		isMultiLanguage :false},
			];
		
		break;
		
	case 'BOTTOM_TBL_HEADER1' : // SC2112
		if ( caption_flag ) {
			sCaption = '';
			sItemCd  = 'BOTTOM_TBL_HEADER';
		};
		objItems = [
			{groupname: 'divDomGrp'+attribute1, caption: 'TOTAL'	, name: 'DIALY_NAME1'			, width: 200, datatype: 'label'},
			{groupname: 'divDomGrp'+attribute1, caption: ''			, name: 'TOTAL_VAL_'+attribute1	, width: 100, datatype: 'number'},
			{groupname: 'divDomGrp'+attribute1, caption: '(WMT)' 	, name: 'DIALY_NAME2'			, width: 100, datatype: 'label' },
			{groupname: 'divDomGrp'+attribute1, caption: '저장'		, name: 'SAVEBTN1'				, width: 50	, datatype: 'button' },
			{groupname: 'divDomGrp'+attribute1, caption: '삭제'		, name: 'DELETEBTN1'			, width: 50	, datatype: 'button' }
			];
		break;
	case 'BOTTOM_TBL_HEADER2' : // SC2112
		if ( caption_flag ) {
			sCaption = '';
			sItemCd  = 'BOTTOM_TBL_HEADER';
		};
		objItems = [
			{groupname: 'divDomGrp'+attribute1, caption: 'TOTAL'	, name: 'DIALY_NAME1'			, width: 200, datatype: 'label'},
			{groupname: 'divDomGrp'+attribute1, caption: ''			, name: 'TOTAL_VAL_'+attribute1	, width: 100, datatype: 'number'},
			{groupname: 'divDomGrp'+attribute1, caption: '(WMT)' 	, name: 'DIALY_NAME2'			, width: 100, datatype: 'label' },
			{groupname: 'divDomGrp'+attribute1, caption: '저장'		, name: 'SAVEBTN2'				, width: 50	, datatype: 'button' },
			{groupname: 'divDomGrp'+attribute1, caption: '삭제'		, name: 'DELETEBTN2'			, width: 50	, datatype: 'button' }
			];
		break;
		
		

	case 'BOTTOM_TBL_HEADER3' : // SC2112
		if ( caption_flag ) {
			sCaption = '';
			sItemCd  = 'BOTTOM_TBL_HEADER';
		};
		objItems = [
			{groupname: 'divDomGrp'+attribute1, caption: 'TOTAL'	, name: 'DIALY_NAME1'			, width: 200, datatype: 'label'},
			{groupname: 'divDomGrp'+attribute1, caption: ''			, name: 'TOTAL_VAL_'+attribute1	, width: 100, datatype: 'number'},
			{groupname: 'divDomGrp'+attribute1, caption: '(WMT)' 	, name: 'DIALY_NAME2'			, width: 100, datatype: 'label' },
			{groupname: 'divDomGrp'+attribute1, caption: '저장'		, name: 'SAVEBTN3'				, width: 50	, datatype: 'button' },
			{groupname: 'divDomGrp'+attribute1, caption: '삭제'		, name: 'DELETEBTN3'			, width: 50	, datatype: 'button' }
			];
		break;
	case 'BOTTOM_TBL_HEADER4' : // SC2112
		if ( caption_flag ) {
			sCaption = '';
			sItemCd  = 'BOTTOM_TBL_HEADER';
		};
		objItems = [
			{groupname: 'divDomGrp'+attribute1, caption: 'TOTAL'	, name: 'DIALY_NAME1'			, width: 200, datatype: 'label'},
			{groupname: 'divDomGrp'+attribute1, caption: ''			, name: 'TOTAL_VAL_'+attribute1	, width: 100, datatype: 'number'},
			{groupname: 'divDomGrp'+attribute1, caption: '(WMT)' 	, name: 'DIALY_NAME2'			, width: 100, datatype: 'label' },
			{groupname: 'divDomGrp'+attribute1, caption: '저장'		, name: 'SAVEBTN4'				, width: 50	, datatype: 'button' },
			{groupname: 'divDomGrp'+attribute1, caption: '삭제'		, name: 'DELETEBTN4'			, width: 50	, datatype: 'button' }
			];
		break;
	case 'BOTTOM_TBL_HEADER5' : // SC2112
		if ( caption_flag ) {
			sCaption = '';
			sItemCd  = 'BOTTOM_TBL_HEADER';
		};
		objItems = [
			{groupname: 'divDomGrp'+attribute1, caption: 'TOTAL'	, name: 'DIALY_NAME1'			, width: 200, datatype: 'label'},
			{groupname: 'divDomGrp'+attribute1, caption: ''			, name: 'TOTAL_VAL_'+attribute1	, width: 100, datatype: 'number'},
			{groupname: 'divDomGrp'+attribute1, caption: '(WMT)' 	, name: 'DIALY_NAME2'			, width: 100, datatype: 'label' },
			{groupname: 'divDomGrp'+attribute1, caption: '저장'		, name: 'SAVEBTN5'				, width: 50	, datatype: 'button' },
			{groupname: 'divDomGrp'+attribute1, caption: '삭제'		, name: 'DELETEBTN5'			, width: 50	, datatype: 'button' }
			];
		break;
	case 'SUB_HEADER_R0' : //SC2430
		if(caption_flag) {
			sCaption = '';
			sItemCd = 'SUB_HEADER_R0_CD'
		};
		objItems = [
			{groupname : 'divDomGrp4', caption : '상차취소'     ,	name : 'PROD_SUB_HEADER_R_BTN'		, width : 100     , datatype : 'button'       ,		isMultiLanguage :false},
			];

		break;
		
	case 'SAMPLE_CAR_DOM' : //SC2132
		if(caption_flag) {
			sCaption = '';
			sItemCd = 'CAP_SAMPLE_CAR_DOM';
		};
		objItems = [
			{groupname : 'divDomGrp1', caption : 'LOT NO',		name : 'SAMPLE_NO',			width : 100, datatype : 'text',		isMultiLanguage :false},
			{groupname : 'divDomGrp1', caption : '',			name : 'SAMPLE_SEQ',		width : 80, datatype : 'number',	isMultiLanguage :false},
			{groupname : 'divDomGrp1', caption : '비고',			name : 'SAMPLE_REMARK',	width : 200, datatype : 'text',		isMultiLanguage :false},
			{groupname : 'divDomGrp1', caption : '입출고',		name : 'CAR_INOUT_NO',		width : 100, datatype : 'text',		hidden:true},
			{groupname : 'divDomGrp1', caption : 'SEQ',			name : 'INOUT_SEQ',			width : 100, datatype : 'text',		hidden:true},
			
			];

		break;	
		
	case 'SC2431_SUB_HEADER_L' : //SC2431
		if(caption_flag) {
			sCaption = '';
			sItemCd = 'SUB_HEADER_R0_CD';
		};
		objItems = [
			{groupname : 'divDomGrp1', caption : '차량삭제'     ,	name : 'L_BTN1'		, width : 100     , datatype : 'button'       ,		isMultiLanguage :false},
			{groupname : 'divDomGrp1', caption : '1차계근'     ,	name : 'L_BTN2'		, width : 100     , datatype : 'button'       ,		isMultiLanguage :false},
			];
		
		break;
	case 'SC2431_SUB_HEADER_R' : //SC2431
		if(caption_flag) {
			sCaption = '';
			sItemCd = 'SUB_HEADER_R0_CD';
		};
		objItems = [
			{groupname : 'divDomGrp2', caption : '번들/낱장 삭제'     ,	name : 'R_BTN1'		, width : 100     , datatype : 'button'       ,		isMultiLanguage :false},
			];
		
		break;
		
	case 'H_SC2111' : //SC2111
		if(caption_flag) {
			sCaption = '';
			sItemCd = '';
		};
		objItems = [
			{groupname : 'divDomGrp1', caption : 'L / C - NO'	,	name : 'LOT_NO_H'		, width : 100	, datatype : 'text'	, isMultiLanguage :false},
			{groupname : 'divDomGrp1', caption : '저장위치'		,	name : 'STORE_LOC_H'	, width : 100	, datatype : 'number' , isMultiLanguage :false, maxlength:40},
			];
		
		break;
		
		
	case 'SC2440_SUB_HEADER_L1' : //SC2440
		if(caption_flag) {
			sCaption = '';
			sItemCd = 'SC2440_SUB_HEADER_L1_CD'
		};
		objItems = [
			//{groupname : 'divDomGrp1', caption : '공장'     ,	name : 'PLANT_NO'		, width : 100     , datatype : 'lov'       ,		isMultiLanguage :false},
			{groupname : 'divDomGrp1', caption : '총중량 합계'     ,	name : 'TOT_WGT_SUM'		, width : 100     , datatype : 'number'       ,		isMultiLanguage :false},
			{groupname : 'divDomGrp1', caption : 'L 위치 지시중량'     ,	name : 'INST_WGT'		, width : 100     , datatype : 'number'       ,		isMultiLanguage :false},
			{groupname : 'divDomGrp1', caption : '조회'     ,	name : 'L_SEARCH_BTN'		, width : 100     , datatype : 'button'       ,		isMultiLanguage :false},
			{groupname : 'divDomGrp1', caption : '변경'     ,	name : 'L_MOVE_BTN'		, width : 100     , datatype : 'button'       ,		isMultiLanguage :false},
			];
		
		//fc_addDataInGettedLov('PLANT_NO', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
		//fc_addDataInSettingLov({object : "PLANT_NO",code : "YARD_PLANT_TP",format : "V",nullable : false,defval : ""});
		
		break;
	case 'SC2440_SUB_HEADER_R' : //SC2440
		if(caption_flag) {
			sCaption = '';
			sItemCd = 'SC2440_SUB_HEADER_R_CD'
		};
		objItems = [
			{groupname : 'divDomGrp2', caption : '야적위치'     ,	name : 'YARD_LOC_CD'		, width : 100       , datatype : 'popup'       ,		isMultiLanguage :false},
			{groupname : 'divDomGrp2', caption : ''     	  ,	name : 'YARD_LOC_NM'	, width : 100  		, datatype : 'text'       ,		isMultiLanguage :false, readonly:true},
			{groupname : 'divDomGrp2', caption : '작업일자'     ,	name : 'WRK_DT'		, width : 100       , datatype : 'date'       ,		isMultiLanguage :false},
			];
		
		
		fc_addCodeList( {object: 'YARD_LOC_CD', code: 'MC_YARD_LIST_SC2440', title: '품목 선택', manKey: '' });
		
		break;
		
	case '2421_SUB_HEADER' : //SC2421_SUBHEADER
		if(caption_flag) {
			sCaption = '';
			sItemCd = '2421_SUB_HEADER_CD'
		};
		objItems = [
			{groupname : 'divDomGrp2', caption : '차량번호'     ,	name : 'CAR_NO'		, width : 100       , datatype : 'popup'       ,		isMultiLanguage :false},
			];
		break;
		
		
	case 'SC2411_SUB_HEADER' : //SC2411
		if(caption_flag) {
			sCaption = '';
			sItemCd = 'SC2411_SUB_HEADER_CD'
		};
		objItems = [
					{groupname : 'divDomGrp1', caption : '해당일'		,	name : 'FIND_DT'       ,	width : 100     , datatype : 'date'     ,		isMultiLanguage :false      , required : true},
					{groupname : 'divDomGrp2', caption : '변경/복사일'	,	name : 'CHG_COPY_DT'   ,	width : 100     , datatype : 'date'     ,		isMultiLanguage :false      , required : true},
					{groupname : 'divDomGrp2', caption : '복사'		,	name : 'COPY_BTN'      ,	width : 100     , datatype : 'button'     ,		isMultiLanguage :false      },
					{groupname : 'divDomGrp2', caption : '변경'		,	name : 'CHG_BTN'       ,	width : 100     , datatype : 'button'     ,		isMultiLanguage :false      },
					];
		

		break;
		
		
		
		
	case 'SC2444CUSPOPUP_HEADER' : //SC2444
		if(caption_flag) {
			sCaption = '';
			sItemCd = 'SC2444CUSPOPUP_HEADER_CD'
		};
		objItems = [
			{groupname : 'divDomGrp2', caption : 'Stuffing List Upload'	,	name : 'BTN1'	,	width : 100	, datatype : 'button'	,	isMultiLanguage :false},
			];
		
		break;
		
		
	case 'SC2411SUB_HEADER' : //SC2411
		if(caption_flag) {
			sCaption = '';
			sItemCd = 'SC2411SUB_HEADER_CD'
		};
		objItems = [
			{groupname : 'divDomGrp1', caption : 'Stuffing List Upload'	,	name : 'BTN1'	,	width : 100	, datatype : 'button'	,	isMultiLanguage :false},
			];
		
		break;

		
	};
	
	
	

	groupCaption = (sCaption == '') ? null : sCaption;
	var ret = {
		item : objItems,
		caption : groupCaption
	};

	return ret;
}; // end of fm_getHeaderItems
/**
 * fm_getTabPages
 *
 * @param pages
 * @param sKey
 * @param sSubKey
 * @param attribute1
 * @param attribute2
 * @returns {Array}
 */
function fm_getTabPages(pages, sKey, sSubKey, attribute1, attribute2) {
	var objTabs = [];
	var sCaption = '', sItemCd = '';

	for (var i = 0; i < pages.length; i++) {
		switch (pages[i].id.toUpperCase()) {
		case 'WORK_SPEC_RCP_HEAT': // SCHB0020
			sCaption = 'Heat';
			sItemCd = 'CAP_HEAT';
			break;
		case 'WORK_SPEC_RCP_SLAB': // SCHB0020
			sCaption = 'Slab';
			sItemCd = 'CAP_SLAB';
			break;
		case "TABTEST": // Overview
			sCaption = "Overview";
			sItemCd = "OVERVIEW";
			break;
		case 'DEVELOPER_GF_SPEC': // SCOZ0070
			sCaption = 'GF Spec';
			sItemCd = 'CAP_GF_SPEC';
			break;
		case 'GRINDER_RESULT_CHART': // 4250
			sCaption = 'GF Spec';
			sItemCd = 'CAP_GF_SPEC';
			break;
		}

		objTabs[i] = {
			caption : sCaption,
			name : pages[i].id.toUpperCase(),
			itemCd : sItemCd,
			itemValue : 0
		};
	}

	return objTabs;
}; // end of fm_getTabItems
/**
 * fm_getTableItems
 *
 * @param sKey
 * @param sSubKey
 * @param caption_flag
 * @param attribute1
 * @param attribute2
 * @param attribute3
 * @param attribute4
 * @param attribute5
 * @returns {___anonymous31084_31113}
 */
function fm_getTableItems(sKey, sSubKey, caption_flag, attribute1, attribute2,
		attribute3, attribute4, attribute5) {
	var colWidths = null;
	var objCols = null;
	var tableId = 'tbl_' + sKey;
	var sCaption = '';
	var sItemCd = '';

	switch (sKey) {

		   case 'ITEM_REG_RESULT_LIST1' : // SC4110
			if ( caption_flag ) {
				sCaption = '';
				sItemCd  = '';
			};
			colWidths = [ 116, 116, 348 ];
			objCols   = [
			             {caption: '품목코드'			, name: 'ITEM_CD_H'				, width: '100%', datatype: 'header'	, align:'right'},
			             {caption: ' '				, name: 'ITEM_CD'				, width: '100%', datatype: 'text' 	, required:true, maxlength:3, align:'center'},
			             {caption: ' '				, name: 'ITEM_CD_SPAN2' 		, width: '100%', datatype: 'header'	},

			             {caption: '품목명'			, name: 'ITEM_NM_H'				, width: '100%', datatype: 'header'	},
			             {caption: ' '				, name: 'ITEM_NM'				, width: '100%', datatype: 'text'	, required:true, maxlength:30, align:'left' },
			             {caption: ' '				, name: 'ITEM_NM_SPAN2'			, width: '100%', datatype: 'text'	, required:true, align:'center' },

			             {caption: '품목구분'			, name: 'ITEM_TP_H'				, width: '100%', datatype: 'header'	},
			             {caption: ' '				, name: 'ITEM_TP'				, width: '100%', datatype: 'lov'	},
			             {caption: ' '				, name: 'ITEM_TP_NM'			, width: '100%', datatype: 'text'	,readonly:true, align:'left' },

			             {caption: '입출고구분'		, name: 'INOUT_TP_H'			, width: '100%', datatype: 'header'	},
			             {caption: ' '				, name: 'INOUT_TP'				, width: '100%', datatype: 'lov'	},
			             {caption: ' '				, name: 'INOUT_TP_NM'			, width: '100%', datatype: 'text'	,readonly:true, align:'left' },

			             {caption: '출하지시유무'		, name: 'DISP_INST_H'			, width: '100%', datatype:'header'	,align:'right'},
			             {caption: ' '				, name: 'DISP_INST'				, width: '100%', datatype:'checkbox', readonly: false},
			             {caption: '　유'				, name: 'DISP_INST_SPAN'		, width: '100%', datatype:'header'	},

			             {caption: '차선유무'			, name: 'SCH_NO_YN_H'			, width: '100%', datatype:'header'	,align:'right'},
			             {caption: ' '				, name: 'SCH_NO_YN'				, width: '100%', datatype:'checkbox', readonly: false},
			             {caption: '　유'				, name: 'SCH_NO_YN_SPAN'		, width: '100%', datatype:'header'	},

			             {caption: 'SMS발송여부'		, name: 'SMS_SEND_YN_H'			, width: '100%', datatype:'header'	,align:'right'},
			             {caption: ' '				, name: 'SMS_SEND_YN'			, width: '100%', datatype:'checkbox', readonly: false},
			             {caption: '　유'				, name: 'SMS_SEND_YN_SPAN'		, width: '100%', datatype:'header'	},

			             {caption: '입고전표발행유무'	, name: 'IN_SLIP_ISSUE_YN_H'	, width: '100%', datatype:'header'	,align:'right'},
			             {caption: ' '				, name: 'IN_SLIP_ISSUE_YN'		, width: '100%', datatype:'checkbox', readonly: false},
			             {caption: '　유'				, name: 'IN_SLIP_ISSUE_YN_SPAN'	, width: '100%', datatype:'header'	},
			             
			             {caption: '유해화학물질여부'	, name: 'HCS_YN_H'				, width: '100%', datatype:'header'	,align:'right'},
			             {caption: ' '				, name: 'HCS_YN'				, width: '100%', datatype:'checkbox', readonly: false},
			             {caption: '　유'				, name: 'HCS_YN_SPAN'			, width: '100%', datatype:'header'	},
			             ];

			fc_addDataInGettedLov ( 'ITEM_TP', {code: 'ITEM_TP', tags: '', alias: ''} );
			fc_addDataInSettingLov( {object: 'ITEM_TP', code: 'ITEM_TP' , format: 'K:V', nullable: true , defval: ''} );

			fc_addDataInGettedLov ( 'INOUT_TP', {code: 'INOUT_TP', tags: '', alias: ''} );
			fc_addDataInSettingLov( {object: 'INOUT_TP', code: 'INOUT_TP' , format: 'K:V', nullable: true , defval: ''} );
			break;

	   case 'ITEM_REG_RESULT_LIST2' : // SC4110
			if ( caption_flag ) {
				sCaption = '본사계근 * 동설장계근 정보';
				sItemCd  = '';
			};
			colWidths = [ 116,116,30,116,182,20 ];
			objCols   = [
						{caption: '동설장출입'	, name: 'CUSCRAP_INOUT_YN_H', width:'100%', datatype:'header'	,  itemValue:'0'},
						{caption: ' '		, name: 'CUSCRAP_INOUT_YN'	, width:'100%', datatype:'checkbox'	,  itemValue:'0'},
						{caption: '유'		, name: 'CUSCRAP_INOUT_YN_D', width:'100%', datatype:'header'},
						{caption: ' '		, name: 'ROW_COL_SPAN'		, width:'100%', datatype:'header'	,  itemValue:'0'},
						{caption: ' '		, name: 'ROW_COL_SPAN'		, width:'100%', datatype:'header'	,  itemValue:'0'},
						{caption: ' '		, name: 'ROW_COL_SPAN'		, width:'100%', datatype:'header'	,  itemValue:'0'},

						{caption: '조건사용여부'	, name: 'COND_USE_YN_H' , width:'100%', datatype:'header' 	, itemValue:'0'},
						{caption: ' '			, name: 'COND_USE_YN' 	, width:'100%', datatype:'checkbox' , itemValue:'0'},
						{caption: '유'			, name: 'COND_USE_YN_D' , width:'100%', datatype:'header' },
						{caption: ' '			, name: 'ROW_COL_SPAN'	, width:'100%', datatype:'header'	,  itemValue:'0'},
						{caption: ' '			, name: 'ROW_COL_SPAN'	, width:'100%', datatype:'header'	,  itemValue:'0'},
						{caption: ' '			, name: 'ROW_COL_SPAN'	, width:'100%', datatype:'header'	,  itemValue:'0'},

						{caption: '제2동설장시간'	, name: 'CUSCRAP_TIME_H', width:'100%', datatype:'header' 	, itemValue:'0'},
						{caption: ' '			, name: 'CUSCRAP_TIME' 	, width:'100%', datatype:'integer' 	, itemValue:'0', maxlength:2},
						{caption: '(분)'			, name: 'CUSCRAP_TIME_D', width:'100%', datatype:'header' 	, itemValue:'0'},

						{caption: '제2동설장무게'	, name: 'CUSCRAP_WGT_H' , width:'100%', datatype:'header' 	, itemValue:'0'},
						{caption: ' '			, name: 'CUSCRAP_WGT' 	, width:'100%', datatype:'integer' 	, itemValue:'0', maxlength:4},
						{caption: '(Kg)'		, name: 'CUSCRAP_WGT_D' , width:'100%', datatype:'header' 	, itemValue:'0'},
						];
			break;

	   case 'ITEM_REG_RESULT_LIST3' : // SC4110
			if ( caption_flag ) {
				sCaption = '동문계근대 입고정보';
				sItemCd  = '';
			};
			colWidths = [ 116,80,40,116,80,148 ];
			objCols   = [
						{caption: '동문계근유무'	, name: 'EGATE_WEIGH_YN_H'		, width:'100%'	, datatype:'header'		,  itemValue:'0'},
						{caption: ' '			, name: 'EGATE_WEIGH_YN'		, width:'100%'	, datatype:'checkbox'	,  itemValue:'0'},
						{caption: '유'			, name: 'EGATE_WEIGH_YN_D'		, width:'100%'	, datatype:'header'},
						{caption: '주말허용(토,일)'	, name: 'LIMIT_INOUT_WKEND_H' 	, width:'100%'	, datatype:'header'		, itemValue:'0'},
						{caption: ' '			, name: 'LIMIT_INOUT_WKEND' 	, width:'100%'	, datatype:'checkbox'	, itemValue:'0'},
						{caption: '　유'			, name: 'LIMIT_INOUT_WKEND_D' 	, width:'100%'	, datatype:'header'},

						{caption: '출입시간(평일)'		, name: 'LIMIT_IN_TIME_H'		, width:'100%'	, datatype:'header'		,  itemValue:'0'},
						{caption: ' '				, name: 'LIMIT_IN_TIME'			, width:'100%'	, datatype:'text'		, itemValue:'0', maxlength:4, defval: '0000', align:'right' },
						{caption: ' '				, name: 'LIMIT_IN_TIME_SPAN'	, width:'100%'	, datatype:'text'		, itemValue:'0', maxlength:4, defval: '0000', align:'right' },
						{caption: '~'				, name: '~'						, width:'100%'	, datatype:'header'},
						{caption: ' '				, name: 'LIMIT_OUT_TIME' 		, width:'100%'	, datatype:'text'		, itemValue:'0', maxlength:4, defval: '2400', align:'right'},
						{caption: '예) 시분 (2400)'	, name: 'LIMIT_OUT_TIME_SPAN' 	, width:'100%'	, datatype:'header' 	, itemValue:'0'},

						{caption: '출입시간(토일)'		, name: 'LIMIT_IN_TIME_WKEND_H'		, width:'100%', datatype:'header'	,  itemValue:'0'},
						{caption: ' '				, name: 'LIMIT_IN_TIME_WKEND'		, width:'100%', datatype:'text'		,  itemValue:'0', maxlength:4, defval: '0000', align:'right'},
						{caption: ' '				, name: 'LIMIT_IN_TIME_WKEND_SPAN'	, width:'100%', datatype:'text'		,  itemValue:'0', maxlength:4, defval: '0000', align:'right'},
						{caption: '~'				, name: '~'							, width:'100%', datatype:'header'},
						{caption: ' '				, name: 'LIMIT_OUT_TIME_WKEND' 		, width:'100%', datatype:'text' 	, itemValue:'0'	, maxlength:4, defval: '2400', align:'right'},
						{caption: '예) 시분 (2400)'	, name: 'LIMIT_OUT_TIME_SPAN' 		, width:'100%', datatype:'header' 	, itemValue:'0'},

						];
			break;

	   case 'TRSP_CMP_SEARCH' : // SC4230
			if ( caption_flag ) {
				sCaption = '';
				sItemCd  = '';
			};
			colWidths = [100, 100, 50, 100 ,50 ,100];

			objCols   = [
			             {caption: '운송업체코드'	, name: 'TRSP_CMP_CD_H'   		, width: '100%', datatype: 'header'},
			             {caption: ' '			, name: 'TRSP_CMP_CD'   		, width: '100%', datatype: 'text'	, readonly:true	, align :'center'},
			             {caption: ' '			, name: 'TRSP_CMP_SPAN'   		, width: '100%', datatype: 'text'	, readonly:true},
			             {caption: ' '			, name: 'TRSP_CMP_NM'   		, width: '100%', datatype: 'text'	, readonly:true	, align :'left'},
			             {caption: ' '			, name: 'TRSP_CMP_NM_SPAN'   	, width: '100%', datatype: 'text'	, readonly:true},
			             {caption: ' '			, name: 'TRSP_CMP_NM_SPAN2'   	, width: '100%', datatype: 'text'	, readonly:true},

			             {caption: '사업자번호'	, name: 'TRSP_CMP_NO_H'			, width: '100%', datatype: 'header'},
			             {caption: ' '			, name: 'TRSP_CMP_NO'			, width: '100%', datatype: 'text'	, align :'left'	, maxlength: 20},
			             {caption: ' '			, name: 'TRSP_CMP_NO_SPAN1'		, width: '100%', datatype: 'header'},
			             {caption: ' '			, name: 'TRSP_CMP_NO_SPAN2'		, width: '100%', datatype: 'header'},
			             {caption: ' '			, name: 'TRSP_CMP_NO_SPAN3'		, width: '100%', datatype: 'header'},
			             {caption: ' '			, name: 'TRSP_CMP_NO_SPAN4'		, width: '100%', datatype: 'header'},

			             {caption: '비밀번호'		, name: 'TRSP_CMP_PASSWD_H' 	, width: '100%', datatype: 'header'},
			             {caption: ''			, name: 'TRSP_CMP_PASSWD'   	, width: '100%', datatype: 'text'	, readonly:true	, align :'left', maxlength: 32},
			             {caption: ''			, name: 'TRSP_CMP_PASSWD_SPAN1'	, width: '100%', datatype: 'text'	, readonly:true},
			             {caption: ''			, name: 'TRSP_CMP_PASSWD_SPAN2'	, width: '100%', datatype: 'text'	, readonly:true},
			             {caption: ''			, name: 'TRSP_CMP_PASSWD_SPAN3'	, width: '100%', datatype: 'text'	, readonly:true},
			             {caption: '초기화'		, name: 'PWD_RESET_BTN'			, width: '100' , datatype: 'button'},

			             {caption: '대표자'		, name: 'OWNER_NM_H'   			, width: '100%', datatype: 'header'},
			             {caption: ''			, name: 'OWNER_NM'   			, width: '100%', datatype: 'text'	, maxlength: 10},
			             {caption: ''			, name: 'OWNER_NM_SPAN'   		, width: '100%', datatype: 'text'},
			             {caption: '담당자'		, name: 'MANAGER_NM_H' 			, width: '100%', datatype: 'header'},
			             {caption: ''			, name: 'MANAGER_NM' 			, width: '100%', datatype: 'text'	, maxlength: 10},
			             {caption: ''			, name: 'MANAGER_NM_SPAN' 		, width: '100%', datatype: 'text'},

			             {caption: '대표이메일'	, name: 'OWNER_EMAIL_H'			, width: '100%', datatype: 'header'},
			             {caption: ''			, name: 'OWNER_EMAIL'			, width: '100%', datatype: 'text'	, maxlength: 30},
			             {caption: ''			, name: 'OWNER_EMAIL_SPAN1'		, width: '100%', datatype: 'text'},
			             {caption: ''			, name: 'OWNER_EMAIL_SPAN2'		, width: '100%', datatype: 'text'},
			             {caption: ''			, name: 'OWNER_EMAIL_SPAN3'		, width: '100%', datatype: 'text'},
			             {caption: ''			, name: 'OWNER_EMAIL_SPAN4'		, width: '100%', datatype: 'text'},

			             {caption: '담당자이메일'	, name: 'MANAGER_EMAIL_H'		, width: '100%', datatype: 'header'},
			             {caption: ''			, name: 'MANAGER_EMAIL'			, width: '100%', datatype: 'text'	, maxlength: 30},
			             {caption: ''			, name: 'MANAGER_EMAIL_SPAN1'	, width: '100%', datatype: 'text'},
			             {caption: ''			, name: 'MANAGER_EMAIL_SPAN2'	, width: '100%', datatype: 'text'},
			             {caption: ''			, name: 'MANAGER_EMAIL_SPAN3'	, width: '100%', datatype: 'text'},
			             {caption: ''			, name: 'MANAGER_EMAIL_SPAN4'	, width: '100%', datatype: 'text'},

			             {caption: '전화번호'		, name: 'TEL_NO_H'				, width: '100%', datatype: 'header'},
			             {caption: ''			, name: 'TEL_NO1'				, width: '100%', datatype: 'text'	, maxlength:4	, align:'center'},
			             {caption: 'ㅡ'			, name: 'TEL_NO_H'				, width: '100%', datatype: 'header'},
			             {caption: ''			, name: 'TEL_NO2'				, width: '100%', datatype: 'text'	, maxlength:4	, align:'center'},
			             {caption: 'ㅡ'			, name: 'TEL_NO_H'				, width: '100%', datatype: 'header'},
			             {caption: ''			, name: 'TEL_NO3'				, width: '100%', datatype: 'text'	, maxlength:4	, align:'center'},

			             {caption: 'FAX'		, name: 'FAX_NO_H'				, width: '100%', datatype: 'header'},
			             {caption: ''			, name: 'FAX_NO1'				, width: '100%', datatype: 'text'	, maxlength:4	, align:'center'},
			             {caption: 'ㅡ'			, name: 'FAX_NO_H'				, width: '100%', datatype: 'header'},
			             {caption: ''			, name: 'FAX_NO2'				, width: '100%', datatype: 'text'	, maxlength:4	, align:'center'},
			             {caption: 'ㅡ'			, name: 'FAX_NO_H'				, width: '100%', datatype: 'header'},
			             {caption: ''			, name: 'FAX_NO3'				, width: '100%', datatype: 'text'	, maxlength:4	, align:'center'},

			             {caption: '휴대폰'		, name: 'MOBILE_NO_H'			, width: '100%', datatype: 'header'},
			             {caption: ''			, name: 'MOBILE_NO1'			, width: '100%', datatype: 'text'	, maxlength:3	, align:'center'},
			             {caption: 'ㅡ'			, name: 'MOBILE_NO_H'			, width: '100%', datatype: 'header'},
			             {caption: ''			, name: 'MOBILE_NO2'			, width: '100%', datatype: 'text'	, maxlength:4	, align:'center'},
			             {caption: 'ㅡ'			, name: 'MOBILE_NO_H'			, width: '100%', datatype: 'header'},
			             {caption: ''			, name: 'MOBILE_NO3'			, width: '100%', datatype: 'text'	, maxlength:4	, align:'center'},

			             {caption: '주소'			, name: 'TRSP_CMP_ADDR_H'		, width: '100%', datatype: 'header'},
			             {caption: ''			, name: 'TRSP_CMP_ZIPCODE'		, width: '100%', datatype: 'text'	, maxlength:6	, align:'center'},
			             {caption: ''			, name: 'TRSP_CMP_ZIPCODE_SPAN'	, width: '100%', datatype: 'text'},
			             {caption: '[우편번호]'	, name: 'TRSP_CMP_ZIPCODE_H'	, width: '100%', datatype: 'header'},
			             {caption: '[우편번호]'	, name: 'TRSP_CMP_ZIPCODE_H'	, width: '100%', datatype: 'header'},
			             {caption: '[우편번호]'	, name: 'TRSP_CMP_ZIPCODE_H'	, width: '100%', datatype: 'header'},

			             {caption: '주소'			, name: 'TRSP_CMP_ADDR_H'		, width: '100%', datatype: 'header'},
			             {caption: ''			, name: 'TRSP_CMP_ADDR'			, width: '100%', datatype: 'text'	, maxlength: 100},
			             {caption: ''			, name: 'TRSP_CMP_ADDR_SPAN'	, width: '100%', datatype: 'text'},
			             {caption: ''			, name: 'TRSP_CMP_ADDR_SPAN'	, width: '100%', datatype: 'text'},
			             {caption: ''			, name: 'TRSP_CMP_ADDR_SPAN'	, width: '100%', datatype: 'text'},
			             {caption: ''			, name: 'TRSP_CMP_ADDR_SPAN'	, width: '100%', datatype: 'text'},

			             {caption: '하차도운송업체'	, name: 'TRSP_CMP_TP_H'			, width: '100%', datatype: 'header'},
			             {caption: ' '			, name: 'TRSP_CMP_TP'			, width: '100%', datatype: 'checkbox'},
			             {caption: ' '			, name: 'TRSP_CMP_TP_H'			, width: '100%', datatype: 'header'},
			             {caption: ' '			, name: 'TRSP_CMP_TP_H'			, width: '100%', datatype: 'header'},
			             {caption: ' '			, name: 'TRSP_CMP_TP_H'			, width: '100%', datatype: 'header'},
			             {caption: ' '			, name: 'TRSP_CMP_TP_H'			, width: '100%', datatype: 'header'},
						];
			break;

	   case 'TRSP_CMP_SEARCH2' : // SC4230
			if ( caption_flag ) {
				sCaption = '부재료업체 SMS정보';
				sItemCd  = 'TRSP_CMP_SEARCH8_ID';
			};
			colWidths = [100, 100, 300];
			objCols   = [
			             {caption: 'SMS발송여부'	, name: 'SMS_SEND_YN_H'	, width: '100%', datatype: 'header'},
			             {caption: ''			, name: 'SMS_SEND_YN'	, width: '100%', datatype: 'checkbox'},
			             {caption: ''			, name: 'SMS_SEND_SPAN'	, width: '100%', datatype: 'header'},

			             {caption: 'SMS담당자'	, name: 'SMS_SENDER__H'	, width: '100%', datatype: 'header'},
			             {caption: ' '			, name: 'SMS_SENDER_NM'	, width: '100%', datatype: 'text'	, maxlength:10	, align:'center'},
			             {caption: ''			, name: 'SMS_SEND_SPAN'	, width: '100%', datatype: 'header'},

			             {caption: 'SMS휴대폰'	, name: 'SMS_PHONE_NO_H', width: '100%', datatype: 'header'},
			             {caption: ' '			, name: 'SMS_PHONE_NO'	, width: '100%', datatype: 'text'	, maxlength:12	, align:'center'},
			             {caption: '( - 제외)'	, name: 'SMS_PHONE_NO_D', width: '100%', datatype: 'header'}
						];
			break;

	   case 'MC_TRSP_CMP_MGMT_SMS_VIEW': // SC4250_sms_view
			if (caption_flag) {
				sCaption = '';
				sItemCd = 'MC_TRSP_CMP_MGMT';
			}
			;
			colWidths = [ 200, 400 ];
			objCols = [ {
				caption : '수신자번호',
				name : 'RECEIVER_PHONE_NO_ARR_H',
				datatype : 'header',
				itemValue : '0',
				isMultiLanguage : false
			}, {
				caption : ' ',
				name : 'RECEIVER_PHONE_NO_ARR',
				datatype : 'custpopup',
				width : '100%',
				itemValue : '0',
				isMultiLanguage : false,
				maxlength : 100
			},

			{
				caption : '발신자번호',
				name : 'SENDER_PHONE_NO_H',
				width : '100%',
				datatype : 'header',
				itemValue : '0',
				isMultiLanguage : false
			}, {
				caption : ' ',
				name : 'SENDER_PHONE_NO',
				width : '100%',
				datatype : 'text',
				itemValue : '0',
				isMultiLanguage : false,
				required : true,
				maxlength : 11
			}, ];
			break;
			
			
			
	   case 'TABLE_2310': // SC2310
			if (caption_flag) {
				sCaption = '';
				sItemCd = 'TABLE_2310_CD';
			};
			colWidths = [ 120, 200 ];
			objCols = [
	              {caption : '생산입고번호'		,name : 'PROD_IN_NO_H'		,datatype : 'header',isMultiLanguage : false},
	              {caption : ''             ,name : 'PROD_IN_NO'		,datatype : 'text',itemValue : '0',isMultiLanguage : false,maxlength : 11,readonly:true},

	              {caption : ''             ,name : 'BR'				,datatype : 'header',itemValue : '0',isMultiLanguage : false},
	              {caption : ''             ,name : 'BR'				,datatype : 'header',itemValue : '0',isMultiLanguage : false},

	              {caption : '품목명'         ,name : 'ITEM_NM_H'			,width : '100%'	,datatype : 'header',itemValue : '0',isMultiLanguage : false},
	              {caption : ''             ,name : 'ITEM_NM'			,width : '100%'	,datatype : 'lov',itemValue : '0',isMultiLanguage : false,maxlength : 11,required:true},
	              {caption : '품목코드'      	,name : 'ITEM_CD_H'			,width : '100%'	,datatype : 'header',itemValue : '0',isMultiLanguage : false},
	              {caption : ''             ,name : 'ITEM_CD'			,width : '100%'	,datatype : 'text',itemValue : '0',isMultiLanguage : false,readonly:true,maxlength : 11},
	              {caption : '등급'          ,name : 'GRD_H'				,width : '100%'	,datatype : 'header',itemValue : '0',isMultiLanguage : false,required:true},
	              {caption : ''             ,name : 'GRD'				,width : '100%'		,datatype : 'lov',itemValue : '0',isMultiLanguage : false,maxlength : 11},
	              {caption : '클린칭'         ,name : 'CLINCH_H'			,width : '100%'	,datatype : 'header',itemValue : '0',isMultiLanguage : false},
	              {caption : ''            	,name : 'CLINCH'			,width : '100%'	,datatype : 'checkbox',itemValue : '0',isMultiLanguage : false,maxlength : 11},

	              {caption : ''             ,name : 'BR'								,datatype : 'header',itemValue : '0',isMultiLanguage : false},
	              {caption : ''				,name : 'BR'								,datatype : 'header',itemValue : '0',isMultiLanguage : false},

	              {caption : 'LOT NO.'		,name : 'LOT_NO_H'							,datatype : 'header',itemValue : '0',isMultiLanguage : false},
	              {caption : ' '			,name : 'LOT_NO'			,width : '100%'	,datatype : 'date',itemValue : '0',isMultiLanguage : false,maxlength : 6},
	              {caption : 'Section No.'	,name : 'SECT_NO_H'			,width : '100%'	,datatype : 'header',itemValue : '0',isMultiLanguage : false},
	              {caption : ' '			,name : 'SECT_NO'			,width : '100%'	,datatype : 'text',itemValue : '0',isMultiLanguage : false,maxlength : 2,required:true},
	              {caption : '야적위치'		,name : 'YARD_LOC_H'		,width : '100%'	,datatype : 'header',itemValue : '0',isMultiLanguage : false},
	              {caption : ' '			,name : 'YARD_LOC'			,width : '100%'	,datatype : 'popup',itemValue : '0',isMultiLanguage : false,required:true},
	              {caption : '위치번호'		,name : 'LOC_NO_H'			,width : '100%'	,datatype : 'header',itemValue : '0',isMultiLanguage : false},
	              {caption : ' '			,name : 'LOC_NO'			,width : '100%'	,datatype : 'text',itemValue : '0',isMultiLanguage : false,readonly:true},

	              {caption : ''				,name : 'BR'								,datatype : 'header',itemValue : '0',isMultiLanguage : false},
	              {caption : ''				,name : 'BR'								,datatype : 'header',itemValue : '0',isMultiLanguage : false},

	              {caption : '계근중량'		,name : 'INPUT_WGT_H'		,width : '100%'	,datatype : 'header',itemValue : '0',isMultiLanguage : false},
	              {caption : ' '			,name : 'INPUT_WGT'			,width : '100%'	,datatype : 'number',itemValue : '0',isMultiLanguage : false, required:true, maxlength : 4},
         ];
			
			
			fc_addDataInGettedLov ( 'ITEM_NM', {code: 'PROD_CD_ECC', tags: '', alias: ''} );
			fc_addDataInSettingLov( {object: 'ITEM_NM', code: 'PROD_CD_ECC' , format: 'V', nullable: true , defval: ''} );
			
			fc_addDataInGettedLov ( 'GRD', {code: 'PROD_GRD_ECC', tags: '', alias: ''} );
			fc_addDataInSettingLov( {object: 'GRD', code: 'PROD_GRD_ECC' , format: 'V', nullable: true , defval: ''} );
			
			
			fc_addCodeList  ( {object: 'YARD_LOC', code: 'MC_2310_YARD_LOC', title: '제품위치검색', manKey: '' }, { itemCd: 'INPUT_VAL2', itemValue: '0' } );
/*			
			fc_addDataInGettedLov("PROD_GRD", {code : "PROD_GRD_ECC",tags : "",alias : ""});
			fc_addDataInSettingLov({object : gridId + ".PROD_GRD",code : "PROD_GRD_ECC",format : "V",nullable : false,defval : ""});
*/
			break;
			
	   case 'RK_APPROVAL_P_FORM' : // SC2340
			if ( caption_flag ) {
				sCaption = '승인처리';
				sItemCd  = 'RK_APPROVAL_FORM_ID';
			};
			colWidths = [ 100, 100, 100];
			objCols   = [
						{caption: '구분', name: 'APPROVAL_H', width:'100%', datatype:'header'		},
						{caption: '구분', name: 'APPROVAL_H', width:'100%', datatype:'header'		},
						{caption: '구분', name: 'APPROVAL_H', width:'100%', datatype:'header'		},
						
						{caption: '인계자', name: 'CHK_PIC1_H', width:'100%', datatype:'header'		},
						{caption: ''	, name: 'CHK_PIC1'	, width:'100%', datatype:'text'			, required:true, align:'center', maxlength:10},
						{caption: ''	, name: 'CHK1'		, width:'100%', datatype:'checkbox'		, required:true},
						
						{caption: '입회자(운송책임자)'	, name: 'CHK_PIC2_H', width:'100%', datatype:'header'		},
						{caption: ''				, name: 'CHK_PIC2'	, width:'100%', datatype:'text'			, required:true, align:'center', maxlength:10},
						{caption: ''				, name: 'CHK2'		, width:'100%', datatype:'checkbox'		, required:true},
						
						{caption: '승인자(귀금속팀)'	, name: 'CHK_PIC3_H'	, width:'100%', datatype:'header'		},
						{caption: ''				, name: 'CHK_PIC3'		, width:'100%', datatype:'popup'		, required:true, align:'center', maxlength:10},
						{caption: ''				, name: 'CHK3'			, width:'100%', datatype:'checkbox'		, required:true},
						
						];
			
			fc_addCodeList  ( {object: 'CHK_PIC3', code: 'EMP_LIST', title: '직원조회', manKey: '',cdParam:'A' });
			break;
			
	   case 'RK_APPROVAL_U_FORM' : // SC2341
			if ( caption_flag ) {
				sCaption = '승인처리';
				sItemCd  = '';
			};
			colWidths = [ 100, 100, 100];
			objCols   = [
						{caption: '구분', name: 'APPROVAL_H', width:'100%', datatype:'header'		},
						{caption: '구분', name: 'APPROVAL_H', width:'100%', datatype:'header'		},
						{caption: '구분', name: 'APPROVAL_H', width:'100%', datatype:'header'		},
						
						{caption: '인계자', name: 'CHK_PIC1_H', width:'100%', datatype:'header'		},
						{caption: ''	, name: 'CHK_PIC1'	, width:'100%', datatype:'text'		, required:true, align:'center', maxlength:10},
						{caption: ''	, name: 'CHK1'		, width:'100%', datatype:'checkbox'	, required:true},
						
						{caption: '승인자(소재생산Unit)', name: 'CHK_PIC3_H'	, width:'100%', datatype:'header'		},
						{caption: ''				, name: 'CHK_PIC3'		, width:'100%', datatype:'popup'		, required:true, align:'center', maxlength:10},
						{caption: ''				, name: 'CHK3'			, width:'100%', datatype:'checkbox'		, required:true},
						
						];
			
			fc_addCodeList  ( {object: 'CHK_PIC3', code: 'EMP_LIST', title: '직원조회', manKey: '',cdParam:'A' });
			break;

	   case 'RMWH_DIARY_TBL_LIST' : // SC2112
			if ( caption_flag ) {
				sCaption = '선박정보';
				sItemCd  = '';
			};
			colWidths = [ 40,100,70,30,100];
			objCols   = [
						//HEADER
						{caption: ''		, name: 'HEADER'				, width:'100%', datatype:'header'	},
						{caption: '선박명'	, name:	'VESSEL_NM_HEADER_H'	, width:'100%', datatype:'header'	},
						{caption: '차선'		, name:	'SCH_NO_HEADER_H'		, width:'100%', datatype:'header'	},
						{caption: '광종'		, name:	'SCH_NO_HEADER_H'		, width:'100%', datatype:'header'	},
						{caption: '입항일시'	, name:	'IN_PORT_DTM_HEADER'	, width:'100%', datatype:'header'	},
						//1차
						{caption: '1차'		, name: 'FST'				, width:'100%', datatype:'header'	},
						{caption: ''		, name: 'VESSEL_NM_1'		, width:'100%', datatype:'text'		},
						{caption: ''		, name: 'SCH_NO_1'			, width:'100%', datatype:'text'		},
						{caption: ''		, name: 'MINERAL_TP_1'		, width:'100%', datatype:'text'  	},
						{caption: ''		, name: 'IN_PORT_DTM_1'		, width:'100%', datatype:'datemin'	},
						//2차
						{caption: '2차'		, name: '2ND'				, width:'100%', datatype:'header'	},
						{caption: ''		, name: 'VESSEL_NM_2'		, width:'100%', datatype:'text'		},
						{caption: ''		, name: 'SCH_NO_2'			, width:'100%', datatype:'text'		},
						{caption: ''		, name: 'MINERAL_TP_2'		, width:'100%', datatype:'text'  	},
						{caption: ''		, name: 'IN_PORT_DTM_2'		, width:'100%', datatype:'datemin'	},
						//3차
						{caption: '3차'		, name: '3RD'				, width:'100%', datatype:'header'	},
						{caption: ''		, name: 'VESSEL_NM_3'		, width:'100%', datatype:'text'		},
						{caption: ''		, name: 'SCH_NO_3'			, width:'100%', datatype:'text'		},
						{caption: ''		, name: 'MINERAL_TP_3'		, width:'100%', datatype:'text'  	},
						{caption: ''		, name: 'IN_PORT_DTM_3'		, width:'100%', datatype:'datemin'	},
						//4차
						{caption: '4차'		, name: '4TH'				, width:'100%', datatype:'header'	},
						{caption: ''		, name: 'VESSEL_NM_4'		, width:'100%', datatype:'text'		},
						{caption: ''		, name: 'SCH_NO_4'			, width:'100%', datatype:'text'		},
						{caption: ''		, name: 'MINERAL_TP_4'		, width:'100%', datatype:'text'  	},
						{caption: ''		, name: 'IN_PORT_DTM_4'		, width:'100%', datatype:'datemin'	},
						];
			break;
			
	   case '2430_LEFT_TAB_2' : // SC2430
		   if ( caption_flag ) {
			   sCaption = '차량조회 및 선택';
			   sItemCd  = '2430_LEFT_TAB_2_CD';
		   };
		   colWidths = [ 150, 'auto', 150, 'auto'];
		   objCols   = [
			   {caption: '생산입고번호'		, name: 'PROD_IN_NO_H'		, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false      },
			   {caption: ''	            , name: 'PROD_IN_NO'		, width:'100%'		,align:'center'		,		datatype:'text'		    ,	 isMultiLanguage:false      ,       readonly:true		},
			   {caption: '계근중량'	    , name: 'WEIGH_WGT_H'		, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		,defval : '0'},
			   {caption: ''	            , name: 'WEIGH_WGT'		    , width:'100%'		,align:'right'		,		datatype:'number'		,	 isMultiLanguage:false      ,       readonly:true		},
			   {caption: '품목명'	    	, name: 'PROD_NM_H'		    , width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		,required:true},
			   {caption: ''	            , name: 'PROD_NM'		    , width:'100%'		,align:'center'		,		datatype:'lov'		    ,	 isMultiLanguage:false		},
			   {caption: '품목코드'	    , name: 'ITEM_CD_H'		    , width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false	},
			   {caption: ''	            , name: 'ITEM_CD'		    , width:'100%'		,align:'left'		,		datatype:'text'		    ,	 isMultiLanguage:false		,       readonly:true,defval : 'CU0'},
			   {caption: 'Lot번호'	    , name: 'LOT_NO_H'		    , width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		},
			   {caption: ''	            , name: 'LOT_NO'		    , width:'100%'		,align:'center'		,		datatype:'text'		    ,	 isMultiLanguage:false		,       maxlength:6,	required:true},
			   {caption: 'Section번호'	, name: 'SECT_NO_H'		    , width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		},
			   {caption: ''	            , name: 'SECT_NO'		    , width:'100%'		,align:'center'		,		datatype:'number'		,	 isMultiLanguage:false		,       maxlength:3,	required:true},
			   {caption: '위치'	        , name: 'YARD_LOC_CD_H'		, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		},
			   {caption: ''	            , name: 'YARD_LOC_CD'		, width:'100%'		,align:'center'		,		datatype:'popup'		,	 isMultiLanguage:false		,       maxlength:2, required:true},
			   {caption: '위치번호'	    , name: 'YARD_COL_H'		, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		},
			   {caption: ''	            , name: 'YARD_COL'		    , width:'100%'		,align:'center'		,		datatype:'text'		,	 isMultiLanguage:false		,       readonly:true, required:true},
			   {caption: '등급'	        , name: 'PROD_GRD_H'		, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		},
			   {caption: ''	            , name: 'PROD_GRD2'		    , width:'100%'		,align:'center'		,		datatype:'lov'		    ,	 isMultiLanguage:false		,       maxlength:2},
			   {caption: 'Clinch'	    , name: 'CLINCH_FLAG_H'		, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		},
			   {caption: ''	            , name: 'CLINCH_FLAG'		, width:'100%'		,align:'center'		,		datatype:'checkbox'		,	 isMultiLanguage:false		},

			   ];
		   
		   fc_addDataInGettedLov('PROD_CD_ECC', {code : 'PROD_CD_ECC',tags : '',alias : ''});
		   fc_addDataInSettingLov({object : 'PROD_NM',code : 'PROD_CD_ECC',format : 'V',nullable : false,defval : 'CU0'});
		
		   	
		   fc_addCodeList( {object: 'YARD_LOC_CD', code: 'MC_2430_YARD', title: '야적위치조회', manKey: '', cdParam:'1' });
			
		   
		   fc_addDataInGettedLov("PROD_GRD2", {code : "MC_PROD_GRD",tags : "",alias : ""});
		   fc_addDataInSettingLov({object : "PROD_GRD2",code : "MC_PROD_GRD",format : "V",nullable : false,defval : ""});
			
		   
		   break;	
			
	   case 'SUB_HEADER_L1_1' : // SC2430
		   if ( caption_flag ) {
			   sCaption = '등급별조회';
			   sItemCd  = 'SUB_HEADER_L1_1_CD';
		   };
		   colWidths = [ 80, 'auto', 80, 'auto', 80, 'auto', 80, 'auto'];
		   objCols   = [
			   {caption: 'S등급 (Y)'	, name: 'CU0_S_Y_H'		, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		,},
			   {caption: ''			, name: 'CU0_S_Y'		, width:'100%'		,align:'right'		,		datatype:'number'		,	 isMultiLanguage:false		,	readonly:true},
			   {caption: 'S등급 (N)'	, name: 'CU0_S_N_H'		, width:'100%'		,align:'center'		, 		datatype:'header'		,	 isMultiLanguage:false		,},
			   {caption: ''			, name: 'CU0_S_N'		, width:'100%'		,align:'right'		, 		datatype:'number'		,	 isMultiLanguage:false		,	readonly:true},
			   {caption: 'E등급 (Y)'	, name: 'CU0_E_Y_H'		, width:'100%'		,align:'center'		, 		datatype:'header'		,	 isMultiLanguage:false		,},
			   {caption: ''			, name: 'CU0_E_Y'		, width:'100%'		,align:'right'		, 		datatype:'number'		,	 isMultiLanguage:false		,	readonly:true},
			   {caption: 'E등급 (N)'	, name: 'CU0_E_N_H'		, width:'100%'		,align:'center'		, 		datatype:'header'		,	 isMultiLanguage:false		,},
			   {caption: ''			, name: 'CU0_E_N'		, width:'100%'		,align:'right'		, 		datatype:'number'		,	 isMultiLanguage:false		,	readonly:true},
			   
			   {caption: 'G등급'		, name: 'CU0_G_H'		, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		,},
			   {caption: ''			, name: 'CU0_G'			, width:'100%'		,align:'right'		,		datatype:'number'		,	 isMultiLanguage:false		,	readonly:true},
			   {caption: 'R등급 (N)'	, name: 'CU0_R_H'		, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		,},
			   {caption: ''			, name: 'CU0_R'			, width:'100%'		,align:'right'		,		datatype:'number'		,	 isMultiLanguage:false		,	readonly:true},
			   {caption: '기타'		, name: 'CU0_ETC_H'		, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		,},
			   {caption: ''			, name: 'CU0_ETC'		, width:'100%'		,align:'right'		,		datatype:'number'		,	 isMultiLanguage:false		,	readonly:true},
			   {caption: 'I (EW)'	, name: 'CUA_EW_H'		, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		,},
			   {caption: ''			, name: 'CUA_EW'		, width:'100%'		,align:'right'		,		datatype:'number'		,	 isMultiLanguage:false		,	readonly:true},
			   ];
		   
		   break;
		   
		   
	   case '2430_TABLE_T' : // SC2430
		   if ( caption_flag ) {
			   sCaption = '차량조회 및 선택';
			   sItemCd  = '2430_TABLE_T_CD';
		   };
		   colWidths = [ 100, 'auto', 100, 'auto', 100, 'auto', 100, 'auto', 100, 'auto', 100, 'auto', 100, 'auto', 80, 80];
		   objCols   = [
			   {caption: '상차지시량'	, name: 'LOAD_INST_WGT_H'		, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		},
			   {caption: ''			, name: 'LOAD_INST_WGT'			, width:'100%'		,align:'right'		,		datatype:'number'		,	 isMultiLanguage:false		,	required:true	,	defval:0},
			   {caption: '출하잔량'	, name: 'DISP_REMAIN_WGT_H'		, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		},
			   {caption: ''			, name: 'DISP_REMAIN_WGT'		, width:'100%'		,align:'right'		,		datatype:'number'		,	 isMultiLanguage:false		,	readonly:true	,	defval:0},
			   {caption: '번들수량'	, name: 'BUNDLE_WGT_H'			, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		},
			   {caption: ''			, name: 'BUNDLE_WGT'			, width:'100%'		,align:'right'		,		datatype:'number'		,	 isMultiLanguage:false		,	readonly:true	,	defval:0},
			   {caption: '낱장수량'	, name: 'PCS_WGT_H'				, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		},
			   {caption: ''			, name: 'PCS_WGT'				, width:'100%'		,align:'right'		,		datatype:'number'		,	 isMultiLanguage:false		,	readonly:true	,	defval:0},
			   {caption: '총상차중량'	, name: 'TOT_LOAD_WGT_H'		, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		},
			   {caption: ''			, name: 'TOT_LOAD_WGT'			, width:'100%'		,align:'right'		,		datatype:'number'		,	 isMultiLanguage:false		,	readonly:true	,	defval:0},
			   {caption: '상차잔량'	, name: 'LOAD_REMAIN_WGT_H'		, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		},
			   {caption: ''			, name: 'LOAD_REMAIN_WGT'		, width:'100%'		,align:'right'		,		datatype:'number'		,	 isMultiLanguage:false		,	readonly:true	,	defval:0},
			   {caption: '계근실중량'	, name: 'REAL_WGT_H'			, width:'100%'		,align:'center'		,		datatype:'header'		,	 isMultiLanguage:false		},
			   {caption: ''			, name: 'REAL_WGT'				, width:'100%'		,align:'right'		,		datatype:'number'		,	 isMultiLanguage:false		,	readonly:true	,	defval:0},
			   {caption: '차량선택'	, name: '2430_TABLE_T_BTN1'		, width:'100%'		,align:'center'		,		datatype:'button'		,	 isMultiLanguage:false		},
			   {caption: '차량삭제'	, name: '2430_TABLE_T_BTN2'		, width:'100%'		,align:'center'		,		datatype:'button'		,	 isMultiLanguage:false		},
			   ];
		   
		   break;
			
		   //attribute1 == TAB INDEX
	   case 'HOLDER_WRK_LIST_HEADER' : // SC2112
		   	var tCaption = '1';
		   	var line0 = 0;
		   	var line1 = 1;
			if ( caption_flag ) {
				sCaption = '';
				sItemCd  = 'HOLDER_WRK_LIST_HEADER';
			};
			
			if(attribute1 == 2){
				tCaption = "B"+tCaption;
			}
			
			colWidths = [ 100,100,100];
			objCols   = [
						{caption: ''		, name: 'HEADER_H'			, width:'100%'	, datatype:'header'	},
						{caption: tCaption	, name: 'HEADER'			, width:'100%'	, datatype:'header'	},
						{caption: tCaption	, name: 'HEADER'			, width:'100%'	, datatype:'header'	},
						//광종
						{caption: '광종'		, name: 'MINERAL_TP_H'						, width:'100%'	, datatype:'header'	},
						{caption: ''		, name: 'MINERAL_TP_'+attribute1+'_1_'+line0, width:'100%'	, datatype:'text'	, align:'right', maxlength:16},
						{caption: ''		, name: 'MINERAL_TP_'+attribute1+'_1_'+line1, width:'100%'	, datatype:'text'	, align:'right', maxlength:16},
						//재고량
						{caption: '재고량'	, name: 'STOCK_WGT_H'						, width:'100%'	, datatype:'header'	},
						{caption: ''		, name: 'STOCK_WGT_'+attribute1+'_1_'+line0	, width:'100%'	, datatype:'number'	, maxlength:22},
						{caption: ''		, name: 'STOCK_WGT_'+attribute1+'_1_'+line1	, width:'100%'	, datatype:'number'	, maxlength:22},
						//작업상태
						{caption: '작업상태'	, name: 'WRK_STS_H'							, width:'100%'	, datatype:'header'	},
						{caption: ''		, name: 'WRK_STS_'+attribute1+'_1_'+line0	, width:'100%'	, datatype:'text'	, align:'center', maxlength:10},
						{caption: ''		, name: 'WRK_STS_'+attribute1+'_1_'+line1	, width:'100%'	, datatype:'text'	, align:'center', maxlength:10},
						//1P(%)
						{caption: '1P(%)'	, name: '1P_PER_H'							, width:'100%'	, datatype:'header'	},
						{caption: ''		, name: '1P_PER_'+attribute1+'_1_'+line0	, width:'100%'	, datatype:'number1', maxlength:22},
						{caption: ''		, name: '1P_PER_'+attribute1+'_1_'+line1	, width:'100%'	, datatype:'number1', maxlength:22},
						//2P(%)
						{caption: '2P(%)'	, name: '2P_PER_H'							, width:'100%'	, datatype:'header'	},
						{caption: ''		, name: '2P_PER_'+attribute1+'_1_'+line0	, width:'100%'	, datatype:'number1', maxlength:22},
						{caption: ''		, name: '2P_PER_'+attribute1+'_1_'+line1	, width:'100%'	, datatype:'number1', maxlength:22},
						//입고일
						{caption: '입고일'	, name: 'IN_DT_H'							, width:'100%'	, datatype:'header'	},
						{caption: ''		, name: 'IN_DT_'+attribute1+'_1_'+line0		, width:'100%'	, datatype:'number'	, align:'right', maxlength:8},
						{caption: ''		, name: 'IN_DT_'+attribute1+'_1_'+line1		, width:'100%'	, datatype:'number'	, align:'right', maxlength:8},
						//합계
						{caption: '합계'		, name: 'SUM_H'								, width:'100%'	, datatype:'header'	},
						{caption: ''		, name: 'SUM_'+attribute1+'_1_'+line0		, width:'100%'	, datatype:'number'	, align:'left', readonly:true},
						{caption: ''		, name: 'SUM_'+attribute1+'_1_'+line1		, width:'100%'	, datatype:'number'	, align:'left', readonly:true},
						];
			break;
			
			//attribute1 = TAB INDEX, attribute2 = HOLDER_NO
	   case 'HOLDER_WRK_LIST_BODY' : // SC2112
		   	var tCaption = attribute2;
		   	var line0 = 0;
		   	var line1 = 1;
			if ( caption_flag ) {
				sCaption = '';
				sItemCd  = 'HOLDER_WRK_LIST_BODY';
			};
			if(attribute1 == 2){
				tCaption = "B"+attribute2;
			}
			var no = sSubKey;
			colWidths = [ 100,100];
			objCols   = [
						{caption: tCaption	, name: 'HEADER'		, width:'100%'	, datatype:'header'	},
						{caption: tCaption	, name: 'HEADER'		, width:'100%'	, datatype:'header'	},
						//광종 
						{caption: ''		, name: 'MINERAL_TP_'+attribute1+'_'+attribute2+'_'+line0	, width:'100%'	, datatype:'text'	},
						{caption: ''		, name: 'MINERAL_TP_'+attribute1+'_'+attribute2+'_'+line1	, width:'100%'	, datatype:'text'	, align:'right', maxlength:16},
						//재고량
						{caption: ''		, name: 'STOCK_WGT_'+attribute1+'_'+attribute2+'_'+line0	, width:'100%'	, datatype:'number'	},
						{caption: ''		, name: 'STOCK_WGT_'+attribute1+'_'+attribute2+'_'+line1	, width:'100%'	, datatype:'number'	, maxlength:22},
						//작업상태
						{caption: ''		, name: 'WRK_STS_'+attribute1+'_'+attribute2+'_'+line0		, width:'100%'	, datatype:'text'	},
						{caption: ''		, name: 'WRK_STS_'+attribute1+'_'+attribute2+'_'+line1		, width:'100%'	, datatype:'text'	, align:'center', maxlength:10},
						//1P(%)
						{caption: ''		, name: '1P_PER_'+attribute1+'_'+attribute2+'_'+line0		, width:'100%'	, datatype:'number1'},
						{caption: ''		, name: '1P_PER_'+attribute1+'_'+attribute2+'_'+line1		, width:'100%'	, datatype:'number1', maxlength:22},
						//2P(%)
						{caption: ''		, name: '2P_PER_'+attribute1+'_'+attribute2+'_'+line0		, width:'100%'	, datatype:'number1'},
						{caption: ''		, name: '2P_PER_'+attribute1+'_'+attribute2+'_'+line1		, width:'100%'	, datatype:'number1', maxlength:22},
						//입고일
						{caption: ''		, name: 'IN_DT_'+attribute1+'_'+attribute2+'_'+line0		, width:'100%'	, datatype:'text'	},
						{caption: ''		, name: 'IN_DT_'+attribute1+'_'+attribute2+'_'+line1		, width:'100%'	, datatype:'text'	, align:'right', maxlength:8},
						//합계
						{caption: ''		, name: 'SUM_'+attribute1+'_'+attribute2+'_'+line0			, width:'100%'	, datatype:'number'	},
						{caption: ''		, name: 'SUM_'+attribute1+'_'+attribute2+'_'+line1			, width:'100%'	, datatype:'number'	, align:'left', readonly:true},
						];
			break;
		
	   case 'SAMPLE_MGMT_INFO' : //SC2130
		   if( caption_flag){
			   sCaption = '';
			   sItemCd  = '샘플정보등록';
		   };
		   colWidths  = [116, 116, 50, 116, 116, 30, 30, 30];
		   objCols = [
			    {caption: '거래처'	, name: 'VENDOR_H'			, width:'100%'	, datatype:'header'	, isMultiLanguage:false},
				{caption: ''		, name: 'VENDOR_CD'			, width:'100%'	, datatype:'popup'	, isMultiLanguage:false, required:true},
				{caption: ''		, name: 'VENDOR_NM'			, width:'100%'	, datatype:'text'	, isMultiLanguage:false, readonly:true},
				{caption: ' '		, name: 'VENDOR_NM_SPAN2'	, width: '100%', datatype: 'text'	, isMultiLanguage:false},
				{caption: ' '		, name: 'VENDOR_NM_SPAN2'	, width: '100%', datatype: 'text'	, isMultiLanguage:false},
				{caption: ' '		, name: 'VENDOR_NM_SPAN2'	, width: '100%', datatype: 'text'	, isMultiLanguage:false},
				{caption: ' '		, name: 'VENDOR_NM_SPAN2'	, width: '100%', datatype: 'text'	, isMultiLanguage:false},
				{caption: ' '		, name: 'VENDOR_NM_SPAN2'	, width: '100%', datatype: 'text'	, isMultiLanguage:false},
				
				{caption: '품목'		, name: 'ITEM_H'			, width:'100%'	, datatype:'header'	, isMultiLanguage:false},
				{caption: ''		, name: 'ITEM_CD'			, width:'100%'	, datatype:'popup'	, isMultiLanguage:false, required:true},
				{caption: ''		, name: 'ITEM_NM'			, width:'100%'	, datatype:'text'	, isMultiLanguage:false, readonly:true},
				{caption: ' '		, name: 'ITEM_NM_SPAN2'		, width: '100%'	, datatype: 'text'	, isMultiLanguage:false},
				{caption: ' '		, name: 'ITEM_NM_SPAN2'		, width: '100%'	, datatype: 'text'	, isMultiLanguage:false},
				{caption: ' '		, name: 'ITEM_NM_SPAN2'		, width: '100%'	, datatype: 'text'	, isMultiLanguage:false},
				{caption: ' '		, name: 'ITEM_NM_SPAN2'		, width: '100%'	, datatype: 'text'	, isMultiLanguage:false},
				{caption: ' '		, name: 'ITEM_NM_SPAN2'		, width: '100%'	, datatype: 'text'	, isMultiLanguage:false},
				
				{caption: '일자'		, name: 'FIND_DT_2_H'		, width:'100%'	, datatype:'header'		, isMultiLanguage:false},
				{caption: ''		, name: 'FIND_DT_2'			, width:'100%'	, datatype:'date'		, isMultiLanguage:false, required:true},
				{caption: ''		, name: 'ROW_COL_SPAN'		, width:'100%'	, datatype:'header'		, isMultiLanguage:false,},
				{caption: ' '		, name: 'ROW_COL_SPAN'		, width:'100%'	, datatype:'header'		, isMultiLanguage:false,},
				{caption: ' '		, name: 'ROW_COL_SPAN'		, width:'100%'	, datatype:'header'		, isMultiLanguage:false},
				{caption: ' '		, name: 'ROW_COL_SPAN'		, width:'100%'	, datatype:'header'		, isMultiLanguage:false},
				{caption: ' '		, name: 'ROW_COL_SPAN'		, width:'100%'	, datatype:'header'		, isMultiLanguage:false},
				{caption: ' '		, name: 'ROW_COL_SPAN'		, width:'100%'	, datatype:'header'		, isMultiLanguage:false},

				{caption: '샘플시간'			, name: 'SAMPLE_TIME_H'		, width:'100%'	, datatype:'header'		, isMultiLanguage:false},
				{caption: ''				, name: 'SAMPLE_TIME_STA'	, width:'100%'	, datatype:'text'		, isMultiLanguage:false, maxlength:4, defval: '0000', required:true},
				{caption: '~'				, name: 'SAMPLE_TIME_SPAN2'	, width:'100%'	, datatype:'header'		, isMultiLanguage:false},
				{caption: ' '				, name: 'SAMPLE_TIME_END'	, width:'100%'	, datatype:'text'		, isMultiLanguage:false, maxlength:4, defval: '2400', required:true},
				{caption: '예) (2400) 시분'	, name: 'SAMPLE_TIME_H2'	, width:'100%'	, datatype:'header'		, isMultiLanguage:false},
				{caption: ' '				, name: 'ROW_COL_SPAN'		, width:'100%'	, datatype:'header'		, isMultiLanguage:false},
				{caption: ' '				, name: 'ROW_COL_SPAN'		, width:'100%'	, datatype:'header'		, isMultiLanguage:false},
				{caption: ' '				, name: 'ROW_COL_SPAN'		, width:'100%'	, datatype:'header'		, isMultiLanguage:false},
			 	
				{caption: '사용여부'		, name: 'USE_YN_H'			, width:'100%'	, datatype:'header'		, isMultiLanguage:false,},
				{caption: ''			, name: 'USE_YN_2'			, width:'100%'	, datatype:'lov'		, isMultiLanguage:false, required:true},
				{caption: ''			, name: 'ROW_COL_SPAN'		, width:'100%'	, datatype:'header'		, isMultiLanguage:false,},
				{caption: ' '			, name: 'ROW_COL_SPAN'		, width:'100%'	, datatype:'header'		, isMultiLanguage:false,},
				{caption: '초기값/배수'	, name: 'SEQ_H'				, width:'100%'	, datatype:'header'		, isMultiLanguage:false},
				{caption: ' '			, name: 'STA_SEQ'			, width:'100%'	, datatype:'text'		, isMultiLanguage:false, required:true},
				{caption: ' '			, name: 'MULTIPLE_SEQ'		, width:'100%'	, datatype:'text'		, isMultiLanguage:false, required:true},
				{caption: ' '			, name: 'SAMPLE_END_CNT'	, width:'100%'	, datatype:'text'		, isMultiLanguage:false},
				
				{caption: '샘플주기'		, name: 'SAMPLE_CYCLE_H'	, width:'100%'	, datatype:'header'	, isMultiLanguage:false},
				{caption: ' '			, name: 'SAMPLE_CYCLE_T'	, width:'100%'	, datatype:'lov'	, isMultiLanguage:false, required:true},
				{caption: ' '			, name: 'ROW_COL_SPAN'		, width:'100%'	, datatype:'header'	, isMultiLanguage:false},
				{caption: ' '			, name: 'ROW_COL_SPAN'		, width:'100%'  , datatype:'header'	, isMultiLanguage:false},
				{caption: ' '			, name: 'ROW_COL_SPAN'		, width:'100%'  , datatype:'header'	, isMultiLanguage:false},
				{caption: ' '			, name: 'ROW_COL_SPAN'		, width:'100%'  , datatype:'header'	, isMultiLanguage:false},
				{caption: ' '			, name: 'ROW_COL_SPAN'		, width:'100%'  , datatype:'header'	, isMultiLanguage:false},
				{caption: ' '			, name: 'ROW_COL_SPAN'		, width:'100%'  , datatype:'header'	, isMultiLanguage:false},
				
				{caption: '비고'			, name: 'REMARK_H'			, width:'100%'	, datatype:'header'	, isMultiLanguage:false},
				{caption: ' '			, name: 'REMARK_T'			, width:'100%'	, datatype:'text'	, isMultiLanguage:false},
				{caption: ' '			, name: 'REMARK_T_SPAN2'	, width:'100%'	, datatype:'text'	, isMultiLanguage:false},
				{caption: ' '			, name: 'REMARK_T_SPAN2'	, width:'100%'  , datatype:'text'	, isMultiLanguage:false},
				{caption: ' '			, name: 'REMARK_T_SPAN2'	, width:'100%'  , datatype:'text'	, isMultiLanguage:false},
				{caption: ' '			, name: 'REMARK_T_SPAN2'	, width:'100%'  , datatype:'text'	, isMultiLanguage:false},
				{caption: ' '			, name: 'REMARK_T_SPAN2'	, width:'100%'  , datatype:'text'	, isMultiLanguage:false},
				{caption: ' '			, name: 'REMARK_T_SPAN2'	, width:'100%'  , datatype:'text'	, isMultiLanguage:false},
				
				{caption: 'SEQ'			, name: 'SEQ'		, width:'100%'  , datatype:'text'	, isMultiLanguage:false , hidden:true},
				{caption: ' '			, name: 'SEQ_SPAN'	, width:'100%'  , datatype:'text'	, isMultiLanguage:false , hidden:true},
				{caption: ' '			, name: 'SEQ_SPAN'	, width:'100%'  , datatype:'text'	, isMultiLanguage:false , hidden:true},
				{caption: ' '			, name: 'SEQ_SPAN'	, width:'100%'  , datatype:'text'	, isMultiLanguage:false , hidden:true},
				{caption: ' '			, name: 'SEQ_SPAN'	, width:'100%'  , datatype:'text'	, isMultiLanguage:false , hidden:true},
				{caption: ' '			, name: 'SEQ_SPAN'	, width:'100%'  , datatype:'text'	, isMultiLanguage:false , hidden:true},
				{caption: ' '			, name: 'SEQ_SPAN'	, width:'100%'  , datatype:'text'	, isMultiLanguage:false , hidden:true},
				{caption: ' '			, name: 'SEQ_SPAN'	, width:'100%'  , datatype:'text'	, isMultiLanguage:false , hidden:true},
				];
		   
		   fc_addCodeList( {object: 'ITEM_CD'	, code: 'MC_ITEM_LIST'		, title: '품목 선택'	, manKey: '', cdParam: '2' });
		   fc_addCodeList( {object: 'VENDOR_CD', code: 'MC_VENDOR_LIST'	, title: '거래처 선택'	, manKey: '', cdParam: '1' });
			
		   fc_addDataInGettedLov('USE_YN_2', {code : 'USE_YN',tags : '',alias : ''});
		   fc_addDataInSettingLov({object : 'USE_YN_2',code : 'USE_YN',format : 'V',nullable:true, defval : ''});
		   
		   fc_addDataInGettedLov('SAMPLE_CYCLE_T', {code : 'SAMPLE_CYCLE',tags : '',alias : ''});
		   fc_addDataInSettingLov({object : 'SAMPLE_CYCLE_T',code : 'SAMPLE_CYCLE',format : 'V',nullable:true, defval : ''});
		   break;
			
			
	   case 'SAMPLE_MGMT_TABLE_1' : //sc2130
		   if ( caption_flag ) {
			   sCaption = '일자복사';
			   sItemCd  = '';
		   };
		   colWidths = [ 116, 116, 116, 202 ];
		   objCols   = [
					{caption: '기존일자'	, name: 'SAMPLE_OLD_H'		, width:'100%'	, datatype:'header'	, isMultiLanguage:false},
					{caption: ''		, name: 'SAMPLE_DT_OLD'		, width:'100%'	, datatype:'date'	, isMultiLanguage:false},
					{caption: ' '		, name: 'ROW_COL_SPAN	'	, width: '100%', datatype: 'header'	, isMultiLanguage:false, itemValue:'0'},
					{caption: '복사'		, name: 'COPY_BT'			, width: '100%', datatype: 'button'	, isMultiLanguage:false, align:'center'},
					
					{caption: '신규일자'	, name: 'SAMPLE_NEW_H'		, width:'100%'	, datatype:'header'	, isMultiLanguage:false},
					{caption: ''		, name: 'SAMPLE_DT_NEW'		, width:'100%'	, datatype:'date'	, isMultiLanguage:false},
					{caption: ''		, name: 'ROW_COL_SPAN'  	, width: '100%', datatype: 'header'	, isMultiLanguage:false, itemValue:'0'},
					{caption: ''		, name: 'SAMPLE_SPAN'  		, width: '100%', datatype: 'header'	, isMultiLanguage:false},
					
					];
		   break;
		   
	   case 'SAMPLE_MGMT_TABLE_2' : //sc2130
		   if ( caption_flag ) {
			   sCaption = '시간 설정 일괄 처리';
			   sItemCd  = '';
		   };
		   colWidths = [ 116, 116, 116, 202 ];
		   objCols   = [
					{caption: '시작시간'			, name: 'STA_TIME_H'		, width:'100%'	, datatype:'header'	, isMultiLanguage:false},
					{caption: ''				, name: 'SAMPLE_STA_TIME'	, width:'100%'	, datatype:'text'	, isMultiLanguage:false, maxlength:4, defval: '0000',},
					{caption: '예) (2400) 시분'	, name: 'ROW_COL_SPAN'		, width: '100%', datatype: 'header'	, isMultiLanguage:false, itemValue:'0'},
					{caption: '일괄처리'			, name: 'SUBMIT_BT'			, width: '100%', datatype: 'button'	, isMultiLanguage:false, align:'center'},
					
					
					{caption: '종료시간'			, name: 'END_TIME_H'		, width:'100%'	, datatype:'header'	, isMultiLanguage:false},
					{caption: ''				, name: 'SAMPLE_END_TIME'	, width:'100%'	, datatype:'text'	, isMultiLanguage:false, maxlength:4, defval: '2400',},
					{caption: '예) (2400) 시분'	, name: 'ROW_COL_SPAN'  	, width: '100%', datatype: 'header'	, isMultiLanguage:false, itemValue:'0'},
					{caption: ''				, name: 'END_TIME_SPAN'  	, width: '100%', datatype: 'header'	, isMultiLanguage:false,},
					
					];
		   break;
		   
	   case 'SAMPLE_MGMT_TABLE_3' : //sc2130
		   if ( caption_flag ) {
			   sCaption = '사용 여부 일괄 처리';
			   sItemCd  = '';
		   };
		   colWidths = [ 116, 116, 116, 52, 150];
		   objCols   = [
					{caption: '사용여부'	, name: 'USE_YN_H'			, width:'100%'	, datatype:'header'		, isMultiLanguage:false},
					{caption: ''		, name: 'USE_YN'			, width:'100%'	, datatype:'lov'		, isMultiLanguage:false},
					{caption: ' '		, name: 'ROW_COL_SPAN'		, width:'100%'	, datatype: 'header'	, isMultiLanguage:false, itemValue:'0'},
					{caption: ' '		, name: 'ROW_COL_SPAN'		, width:'100%'	, datatype: 'header'	, isMultiLanguage:false, itemValue:'0'},
					{caption: ' 일괄처리'	, name: 'SUBMIT_BT_2'		, width:'100%'	, datatype:'button'		, isMultiLanguage:false, align:'center'},

					
					{caption: '초기값/배수', name: 'STA_SEQ_H'			, width:'100%'	, datatype:'header'	, isMultiLanguage:false},
					{caption: ''		, name: 'SAMPLE_STA_SEQ'	, width:'100%'	, datatype:'text'	, isMultiLanguage:false},
					{caption: ''		, name: 'SAMPLE_MULTIPLE'  	, width:'100%'	, datatype:'text'	, isMultiLanguage:false},
					{caption: ' '		, name: 'ROW_COL_SPAN'		, width:'100%'	, datatype: 'header', isMultiLanguage:false, itemValue:'0'},
					{caption: '적용'		, name: 'APPLY_BT'  		, width:'100%'	, datatype:'button'	, isMultiLanguage:false, align:'center'},
					];
		   fc_addDataInGettedLov('USE_YN', {code : 'USE_YN',tags : '',alias : ''});
		   fc_addDataInSettingLov({object : 'USE_YN',code : 'USE_YN',format : 'V',nullable:true, defval : ''});
		   break;
		   
	   case 'SAMPLE_MGMT_TABLE_4' : //sc2130
		   if ( caption_flag ) {
			   sCaption = '월단위복사';
			   sItemCd  = '';
		   };
		   colWidths = [ 116, 116, 116, 202 ];
		   objCols   = [
					{caption: '기준년월'	, name: 'SAMPLE_MNT_H'	, width:'100%'	, datatype:'header'	, isMultiLanguage:false},
					{caption: ''		, name: 'SAMPLE_MNT'	, width:'100%'	, datatype:'text'	, isMultiLanguage:false},
					{caption: ''		, name: 'ROW_COL_SPAN'	, width: '100%', datatype: 'header'	, isMultiLanguage:false, itemValue:'0'},
					{caption: '복사'		, name: 'COPY_BT_2'		, width: '100%', datatype: 'button'	, isMultiLanguage:false, align:'center'},
					
					
					
					{caption: '복사년월'	, name: 'COPY_MNT_H'	, width:'100%'	, datatype:'header'	, isMultiLanguage:false},
					{caption: ''		, name: 'COPY_MNT'		, width:'100%'	, datatype:'text'	, isMultiLanguage:false},
					{caption: ''		, name: 'ROW_COL_SPAN'	, width: '100%', datatype: 'header'	, isMultiLanguage:false, itemValue:'0'},
					{caption: ''		, name: 'MNT_SPAN'		, width: '100%', datatype: 'header'	, isMultiLanguage:false},
					
					];
		break;
		
	   case 'SC2441TABLE_R' : //sc2441
		   if ( caption_flag ) {
			   sCaption = 'Packing List 작성';
			   sItemCd  = '';
		   };
		   colWidths = [ 116, 116, 116, 202 ];
		   objCols   = [
			   {caption: 'Packing일자'	, name: 'PKG_DT_H'	, width:'100%'	, datatype:'header'	, isMultiLanguage:false},
			   {caption: ''		, name: 'PKG_DT'		, width:'100%'	, datatype:'date'	, isMultiLanguage:false},
			   {caption: ''		, name: 'dummy2'	, width: '100%', datatype: 'header'	, isMultiLanguage:false, itemValue:'0'},
			   {caption: ''		, name: 'dummy3'		, width: '100%', datatype: 'header'	, isMultiLanguage:false},
			   
			   {caption: '거래처코드'	, name: 'VENDOR_CD_H'	, width:'100%'	, datatype:'header'	, isMultiLanguage:false},
			   {caption: ''		, name: 'VENDOR_CD'	, width:'100%'	, datatype:'popup'	, isMultiLanguage:false,required:true},
			   {caption: ''		, name: 'VENDOR_NM'	, width: '100%', datatype: 'text'	, isMultiLanguage:false,required:true}, 
			   {caption: ''		, name: 'remove1'		, width: '100%', datatype: 'header'	, hidden:true},
			   
			   {caption: '운송업체'	, name: 'TRSP_CMP_CD_H'	, width:'100%'	, datatype:'header'	, isMultiLanguage:false},
			   {caption: ''		, name: 'TRSP_CMP_CD'		, width:'100%'	, datatype:'popup'	, isMultiLanguage:false,required:true},
			   {caption: ''		, name: 'TRSP_CMP_NM'	, width: '100%', datatype: 'text'	, isMultiLanguage:false, itemValue:'0',required:true},
			   {caption: ''		, name: 'remove2'		, width: '100%', datatype: 'header'	, isMultiLanguage:false},
			   
			   {caption: '포워딩업체'	, name: 'FORWARD_CMP_CD_H'	, width:'100%'	, datatype:'header'	, isMultiLanguage:false},
			   {caption: ''		, name: 'FORWARD_CMP_CD'		, width:'100%'	, datatype:'popup'	, isMultiLanguage:false,required:true},
			   {caption: ''		, name: 'FORWARD_CMP_NM'	, width: '100%', datatype: 'text'	, isMultiLanguage:false, itemValue:'0',required:true},
			   {caption: ''		, name: 'remove3'		, width: '100%', datatype: 'header'	, isMultiLanguage:false},
			   
			   {caption: '최종수요처'	, name: 'SUB_VENDOR_CD_H'	, width:'100%'	, datatype:'header'	, isMultiLanguage:false},
			   {caption: ''		, name: 'SUB_VENDOR_CD'		, width:'100%'	, datatype:'popup'	, isMultiLanguage:false,required:true},
			   {caption: ''		, name: 'SUB_VENDOR_NM'	, width: '100%', datatype: 'text'	, isMultiLanguage:false, itemValue:'0',required:true},
			   {caption: ''		, name: 'remove4'		, width: '100%', datatype: 'header'	, isMultiLanguage:false},
			   
			   ];
		   
		   
		   fc_addCodeList( {object: 'TRSP_CMP_CD'	, code: 'MC_2441_CMP_LIST'		, title: '품목 선택'	, manKey: '', cdParam: '' });
		   fc_addCodeList( {object: 'FORWARD_CMP_CD'	, code: 'MC_2441_VENDOR_LIST'		, title: '품목 선택'	, manKey: '', cdParam: '' });
		   fc_addCodeList( {object: 'VENDOR_CD'	, code: 'MC_2441_VENDOR_LIST'		, title: '품목 선택'	, manKey: '', cdParam: '' });
		   fc_addCodeList( {object: 'SUB_VENDOR_CD'	, code: 'MC_2441_EXPORT_VENDOR_LIST'		, title: '품목 선택'	, manKey: '', cdParam: '' });
		   break;
		
		   
	   case 'SC2442TABLE_R' : //sc2442
		   if ( caption_flag ) {
			   sCaption = 'List 작성';
			   sItemCd  = '';
		   };
		   colWidths = [ 100, 'auto', 100, 'auto'];
		   objCols   = [
			   {caption: '컨테이너수'				, name: 'CONTAINER_CNT_H'				, datatype:'header'	},
			   {caption: ''						, name: 'CONTAINER_CNT'					, datatype:'number' 	, required:true},
			   {caption: '번들수'					, name: 'CONTAINER_BUNDLE_CNT_H'		, datatype:'header'	},
			   {caption: ''						, name: 'CONTAINER_BUNDLE_CNT'			, datatype:'number'		, required:true},
			   
			   {caption: '잔여 컨테이너/번들'		, name: 'VENDOR_CD_H'					, datatype:'header'	},
			   {caption: ''						, name: 'remove1'						, datatype:'header'	},
			   {caption: ''						, name: 'remove2'						, datatype:'header'	},
			   {caption: ''						, name: 'remove3'						, datatype:'header'	},
			   
			   {caption: '컨테이너수'				, name: 'REM_CONTAINER_CNT_H'			, datatype:'header'	},
			   {caption: ''						, name: 'REM_CONTAINER_CNT'				, datatype:'number'		},
			   {caption: '번들수'					, name: 'REM_CONTAINER_BUNDLE_CNT_H'	, datatype:'header'	},
			   {caption: ''						, name: 'REM_CONTAINER_BUNDLE_CNT'		, datatype:'number'		},
			   
			   
			   {caption: '패킹일자'				, name: 'PKG_DT_H'						, datatype:'header'	},
			   {caption: ''						, name: 'PKG_DT'						, datatype:'text'		, width: '100%'		, align:'center'	, readonly:true},
			   {caption: ''						, name: 'remove4'						, datatype:'header'	},
			   {caption: ''						, name: 'remove5'						, datatype:'header'	},
			   
			   {caption: 'Stuffing List 작성'		, name: 'STUFFINGBTN'					, datatype:'button'	},
			   {caption: ''						, name: 'remove6'						, datatype:'header'	},
			   {caption: ''						, name: 'remove7'						, datatype:'header'	},
			   {caption: ''						, name: 'remove8'						, datatype:'header'	},
			   
			   ];
		   
		   break;
		   
	   case 'SC2443TABLE_R' : //sc2442
		   if ( caption_flag ) {
			   sCaption = '상차차량 상세정보';
			   sItemCd  = '';
		   };
		   colWidths = [ 'auto', '30%', 'auto', '30%'];
		   objCols   = [
			   {caption: '출고번호'				, name: 'CAR_INOUT_NO_H'	, datatype:'header'		},
			   {caption: ''						, name: 'CAR_INOUT_NO'		, datatype:'text' 	,	readonly:true},
			   {caption: ''						, name: 'dummy1'			, datatype:'header'		},
			   {caption: ''						, name: 'dummy2'			, datatype:'header'		},
			   

			   {caption: '차량번호'				, name: 'CAR_ID_H'			, datatype:'header'		},
			   {caption: ''						, name: 'CAR_ID'			, datatype:'text'		,	readonly:true},
			   {caption: '기사명'					, name: 'WRKER_NM_H'		, datatype:'header'		},
			   {caption: ''						, name: 'WRKER_NM'			, datatype:'text'		,	readonly:true},
			   
			   
			   {caption: '입고시간'				, name: 'CAR_IN_DTM_H'		, datatype:'header'		},
			   {caption: ''						, name: 'CAR_IN_DTM'		, datatype:'text' 		,	readonly:true},
			   {caption: '품목코드'				, name: 'ITEM_CD_H'			, datatype:'header'		},
			   {caption: ''						, name: 'ITEM_CD'			, datatype:'text'		,	readonly:true},
			   
			   
			   {caption: '공차중량'				, name: 'EMPTY_WGT_H'		, datatype:'header'		},
			   {caption: ''						, name: 'EMPTY_WGT'			, datatype:'number' 		,	readonly:true},
			   {caption: '품목명'					, name: 'ITEM_NM_H'			, datatype:'header'		},
			   {caption: ''						, name: 'ITEM_NM'			, datatype:'text'		,	readonly:true},
			   
			   {caption: '판매처코드'				, name: 'VENDOR_CD_H'	, datatype:'header'		},
			   {caption: ''						, name: 'VENDOR_CD'		, datatype:'text' 		,	readonly:true},
			   {caption: '납품처코드'				, name: 'SUB_VENDOR_CD_H'			, datatype:'header'		},
			   {caption: ''						, name: 'SUB_VENDOR_CD'			, datatype:'text'		,	readonly:true},
			   
			   {caption: '판매처'					, name: 'VENDOR_NM_H'	, datatype:'header'		},
			   {caption: ''						, name: 'VENDOR_NM'		, datatype:'text' 		,	readonly:true},
			   {caption: '납품처'					, name: 'SUB_VENDOR_NM_H'			, datatype:'header'		},
			   {caption: ''						, name: 'SUB_VENDOR_NM'			, datatype:'text'		,	readonly:true},
			   ];
		   
		   break;
		   
		   
		   
	   case 'SC2443TABLE_R2' : //sc2442
		   if ( caption_flag ) {
			   sCaption = '';
			   sItemCd  = '';
		   };
		   colWidths = [ 'auto', '30%', 'auto', '30%'];
		   objCols   = [
			   {caption: '공차중량'				, name: 'INS_EMPTY_WGT_H'		, datatype:'header'	},
			   {caption: ''						, name: 'INS_EMPTY_WGT'			, datatype:'number' 					, required:true},
			   {caption: '상차중량'				, name: 'INS_CONTAINER_WGT_H'	, datatype:'header'	},
			   {caption: ''						, name: 'INS_CONTAINER_WGT'	, datatype:'number' 					, required:true},

			   {caption: '총중량'					, name: 'INS_TOT_WGT_H'			, datatype:'header'	},
			   {caption: ''						, name: 'INS_TOT_WGT'			, datatype:'number' 					, required:true},
			   {caption: ''						, name: 'dummy3'				, datatype:'header'		, hidden:true},
			   {caption: ''						, name: 'dummy4'				, datatype:'header'		, hidden:true		, required:true},
			   
			   {caption: '차량선택'				, name: 'CAR_INS_BTN'			, datatype:'button'	, align:'center'},
			   {caption: ''						, name: 'dummy5'				, datatype:'header' 						},
			   {caption: '차량삭제'				, name: 'CAR_REMOVE_BTN'		, datatype:'button'	, align:'center'},
			   {caption: ''						, name: 'dummy6'				, datatype:'header'		, hidden:true		},
			 
			   ];
		   
		   break;
		   
		   
		   
	   case 'SC2445TABLELB' : //SC2445
		   if ( caption_flag ) {
			   sCaption = '';
			   sItemCd  = '';
		   };
		   colWidths = [ '20%', 'auto','20%', 'auto'];
		   objCols   = [
			   {caption: 'Batch번호'	, name: 'BAT_NO_H'		, datatype:'header'	,	align:'center'	},
			   {caption: ''			, name: 'BAT_NO'		, datatype:'text'	,	align:'center'	, width: '100%'},
			   {caption: 'CY출고일'	, name: 'CY_OUT_DT_H'	, datatype:'header'	,	align:'center'	},
			   {caption: ''			, name: 'CY_OUT_DT'		, datatype:'date'	,	align:'center'  , width: '100%'},
			   
			   {caption: '출하요청일'	, name: 'DISP_REQ_DT_H'	, datatype:'header' ,	align:'center'  },
			   {caption: ''			, name: 'DISP_REQ_DT'	, datatype:'date' 	,	align:'center'  , width: '100%'},
			   {caption: '출하유형'	, name: 'DISP_TP_H'		, datatype:'header'	,	align:'center'  },
			   {caption: ''			, name: 'DISP_TP'	    , datatype:'lov' 	,	align:'center'  , width: '100%'},
			   
			   ];
		   
			fc_addDataInGettedLov ( 'DISP_TP', {code: 'DISP_TP', tags: '', alias: ''} );
			fc_addDataInSettingLov( {object: 'DISP_TP', code: 'DISP_TP' , format: 'V', nullable: true , defval: ''} );
		   
		   break;
		   
		   
	   case 'SC2445TABLELB2' : //SC2445
		   if ( caption_flag ) {
			   sCaption = '';
			   sItemCd  = '';
		   };
		   colWidths = [ '25%', '25%','25%', '25%'];
		   objCols   = [
			   {caption: 'CY전송'		, name: 'CY_SEND_BTN'		, datatype:'button' ,	align:'left'  , width: '100%'},
			   {caption: 'CY전송삭제'	, name: 'CY_REMOVE_BTN'		, datatype:'button'	,	align:'center'  , width: '95%'},
			   {caption: '계근처리'	, name: 'GAEGUN_SUCCES_BTN'	, datatype:'button' ,	align:'center'  , width: '95%'},
			   {caption: '계근취소'	, name: 'GAEGUN_CANCEL_BTN'	, datatype:'button'	,	align:'left'  , width: '100%'},
			   ];
		   
		   break;
	};

	var tableCaption = fc_makeTableCaption(sCaption, sItemCd, 0);
	var ret = {
		width : colWidths,
		col : objCols,
		caption : tableCaption,
		id : tableId
	};
	return ret;
}; // end of fm_getTableItems
/**
 *
 * @param sKey
 * @param sSubKey
 */
function fm_makeSpan(tableId, sKey, sSubKey) {

	switch (sKey) {
	case 'SCH_CC':
		$('#' + tableId).colspan(0);
		break;
	case 'SCH_CUT':
		$('#' + tableId).rowspan(0);
		$('#' + tableId).rowspan(3);
		break;
	case 'ORDER_PROG':
		$('#' + tableId).colspan(0);
		break;
	default:
		break;
	}
	;

	return;
}; // end of fc_makeSpan
/**
 * fm_getGridItems
 *
 * @param sKey
 * @param sSubKey
 * @param caption_flag
 * @param attribute1
 * @param attribute2
 * @returns {___anonymous117455_117522}
 */
function fm_getGridItems(sKey, sSubKey, caption_flag, attribute1, attribute2) {
	var objItems = null;
	var objGrpItems = null;
	var gridId = '';
	var gridKey = sKey;
	var sCaption = '', sItemCd = '';

	switch (sKey) {

	case 'G_SC4110': // SC4110
			gridId = 'gridItemReg';
			if ( caption_flag ) {
				sCaption = '';
				sItemCd  = 'CAP_ITEM_REG_INFO';
			};
			objItems = 	[
			           	{caption: '품목'			, name: 'ITEM'					, width: 50		, datatype: 'text'		, readonly:true, align:'center'},
			           	{caption: '품목명'		, name: 'ITEM_NM'				, width: 140	, datatype: 'text'		, readonly:true, align:'left'},
			           	{caption: '품목구분'		, name: 'ITEM_TP'				, width: 60		, datatype: 'text'		, readonly:true, align:'center'},
						{caption: '입출고구분'		, name: 'INOUT_TP'				, width: 75		, datatype: 'text'		, readonly:true, align:'center'},
						{caption: '출하지시'		, name: 'DISP_INST'				, width: 60		, datatype: 'checkbox'	, readonly:true},
						{caption: '차선유무'		, name: 'SCH_NO_YN'				, width: 57		, datatype: 'checkbox'	, readonly:true},
						{caption: '비상계근'		, name: 'EMERG_WEIGH'			, width: 57		, datatype: 'checkbox'	, readonly:true},
						{caption: '입고전표'		, name: 'IN_SLIP_YN'			, width: 57		, datatype: 'checkbox'	, readonly:true},
						{caption: '유해화학'		, name: 'HCS_YN'				, width: 57		, datatype: 'checkbox'	, readonly:true},
						{caption: '동설장'		, name: 'CUSCRAP_YN'			, width: 45		, datatype: 'checkbox'	, readonly:true},
						{caption: '조건여부'		, name: 'COND_YN'				, width: 57		, datatype: 'checkbox'	, readonly:true},
						{caption: '시간'			, name: 'CUSCRAP_TIME'			, width: 35		, datatype: 'number'	, readonly:true, align:'right'},
						{caption: '무게'			, name: 'CUSCRAP_WGT'			, width: 35		, datatype: 'number'	, readonly:true, align:'right'},
						{caption: '평일동문입고'	, name: 'LIMIT_IN_TIME'			, width: 83		, datatype: 'text'		, readonly:true, align:'center'},
						{caption: '평일동문출고'	, name: 'LIMIT_OUT_TIME'		, width: 83		, datatype: 'text'		, readonly:true, align:'center'},
						{caption: '주말동문입고'	, name: 'LIMIT_IN_TIME_WKEND'	, width: 83		, datatype: 'text'		, readonly:true, align:'center'},
						{caption: '주말동문출고'	, name: 'LIMIT_OUT_TIME_WKEND'	, width: 83		, datatype: 'text'		, readonly:true, align:'center'},
						{caption: '주말허용'		, name: 'WKEND_YN'				, width: 60		, datatype: 'checkbox'	, readonly:true},
						{caption: 'SMS발송'		, name: 'SMS_SEND'				, width:60		, datatype: 'checkbox'	, readonly:true}
						];
			break;

		case 'VENDOR_MGMT' : //SC4210
			gridId		= 'gridTagFrml';
			if(caption_flag){
				sCaption = '';
				sItemCd = 'CAP_VENDOR_MGMT';
			};
			objItems = [
		            	{caption: '입출고구분', 	name: 'INOUT_TP',	 			width: 150	, datatype: 'lov', 		 isMultiLanguage:false, readonly:false, required: true},
		            	{caption: '업체코드', 		name: 'VENDOR_CD', 				width: 200	, datatype: 'text', 	 isMultiLanguage:false, readonly:false, cellbeginedit: f_cellbeginedit},
		            	{caption: '업체명', 		name: 'VENDOR_NM', 				width: 200	, datatype: 'popup', 	 isMultiLanguage:false, readonly:false, cellbeginedit: f_cellbeginedit, required: true},
		            	{caption: '44ton', 		name: 'WGT_OVER_YN', 			width: 150	, datatype: 'checkbox'},
		            	{caption: '운송업체 여부',  name: 'TRSP_CMP_ASSIGN_FLAG', 	width: 150	, datatype: 'checkbox', cellbeginedit: f_trsp_cmp_assign_flag_cellbeginedit},
		            	];
			//lov
			fc_addDataInGettedLov ("INOUT_TP", {code: "INOUT_TP", tags: "MC", alias: ""});
			fc_addDataInSettingLov( {object: gridId+'.INOUT_TP', code: 'INOUT_TP', format: 'V',nullable:true, defval: ""} );
			fc_addCodeList( {object: gridId+'.VENDOR_NM', code: 'MC_VENDOR_MGMT_LIST1', title: '입출고업체 목록', manKey: '', setConditon:[{object:'INPUT_VAL1',colNm:'VENDOR_NM'}]});
			
			fc_setAlignInCol(gridId, ['INOUT_TP', 'VENDOR_CD', 'WGT_OVER_YN', 'TRSP_CMP_ASSIGN_FLAG'], 'center');
		break;

		case 'SUB_VENDOR_LIST': //SC4211
			gridId		= 'gridSubVendorList';
			if(caption_flag){
				sCaption ='';
				sItemCd = 'CAP_SUB_VENDOR_LIST';
			};
			objItems = [
			            {caption: '판매처',		name: 'VENDOR_CD',	 	width: 120, datatype: 'popup', isMultiLanguage:false, readonly:false, inputreadonly:true},
			            {caption: '판매처명',		name: 'VENDOR_NM',	 	width: 200, datatype: 'text', readonly:true},
			            {caption: '납품처',		name: 'SUB_VENDOR_CD',	width: 120, datatype: 'popup', isMultiLanguage:false, readonly:false, inputreadonly:true},
			            {caption: '납품처명',		name: 'SUB_VENDOR_NM',  width: 200, datatype: 'text', readonly:true},
			            {caption: '운송업체',		name: 'TRSP_CMP_CD', 	width: 120, datatype: 'popup', isMultiLanguage:false, readonly:false, inputreadonly:true},
			            {caption: '운송업체명',	name: 'TRSP_CMP_NM', 	width: 200, datatype: 'text', readonly:true},
			            {caption: '전화번호',		name: 'PHONE_NO', 	 	width: 150, datatype: 'text', readonly:true},
			            {caption: '운송위임장번호', name: 'TRSP_POA_NO',	width: 150, datatype: 'text'},
			            {caption: '위임시작일자',	name: 'POA_STA_DT', 	width: 120, datatype: 'date'},
			            {caption: '위임종료일자',	name: 'POA_END_DT', 	width: 120, datatype: 'date'}
			            ];
			//popup
			fc_addCodeList( {object: gridId+'.VENDOR_CD',	  code: 'MC_VENDOR_LIST_3'	 , title: '판매처 목록'		, manKey: '',  setConditon:[{object:'INPUT_VAL1',colNm:'VENDOR_CD'}, {object:'INPUT_VAL2',colNm:'VENDOR_NM'}] });
			fc_addCodeList( {object: gridId+'.SUB_VENDOR_CD', code: 'MC_VENDOR_LIST_3'	 , title: '납품처 목록'		, manKey: '',  setConditon:[{object:'INPUT_VAL1',colNm:'SUB_VENDOR_CD'}, {object:'INPUT_VAL2',colNm:'SUB_VENDOR_NM'}]});
			fc_addCodeList( {object: gridId+'.TRSP_CMP_CD',	  code: 'MC_SC_TRSP_CMP_LIST', title: '운송업체 목록'	, manKey: '',  setConditon:[{object:'INPUT_VAL1',colNm:'TRSP_CMP_CD'}, {object:'INPUT_VAL2',colNm:'TRSP_CMP_NM'}]});

			fc_setAlignInCol	( gridId, ['VENDOR_NM', 'SUB_VENDOR_NM', 'TRSP_CMP_NM'], 'left');
			fc_setAlignInCol	( gridId, ['VENDOR_CD', 'SUB_VENDOR_CD', 'TRSP_CMP_CD', 'PHONE_NO', 'TRSP_POA_NO', 'POA_STA_DT', 'POA_END_DT' ], 'center');
			fc_setRequiredInCol ( gridId, [ 'VENDOR_CD','SUB_VENDOR_CD','TRSP_CMP_CD'] );
			fc_setKeysInCol     ( gridId, [ 'VENDOR_CD', 'VENDOR_NM', 'SUB_VENDOR_CD', 'SUB_VENDOR_NM', 'TRSP_CMP_CD', 'TRSP_CMP_NM'] );
			break;

		case 'G_SC4212': // SC4212
			gridId = 'G_SC4212_ID';
			if ( caption_flag ) {
				sCaption = '';
				sItemCd  = '';
			};
			objItems = 	[
			           	{caption: '판매처'	, name: 'VENDOR_CD'		, width: '3%'	, datatype: 'popup'	, inputreadonly: true	, align: 'center'	, maxlength :6},
			           	{caption: '판매처명'	, name: 'VENDOR_NM'		, width: '15%'	, datatype: 'text'	, readonly:true			, align: 'left'		, maxlength :50},
			           	{caption: '수요처'	, name: 'DMND_CMP_CD'	, width: '3%'	, datatype: 'text'	, readonly:true			, align: 'center'},
						{caption: '수요처명'	, name: 'DMND_CMP_NM'	, width: '15%'	, datatype: 'text'	, readonly:false		, align: 'left'		, maxlength :50},
			           	{caption: '수요처정보' , name: 'DMND_CMP_INFO'	, width: '20%'	, datatype: 'text'	, readonly:false		, align: 'left'		, maxlength :30},
			           	];

			fc_addCodeList 	   ( { object: gridId+'.VENDOR_CD', code: 'MC_SELECT_VENDOR_LIST', title: '판매처선택', manKey: '',cdParam:'%'} );

			fc_setKeysInCol    ( gridId, [ 'VENDOR_CD','VENDOR_NM'] );
			fc_setRequiredInCol( gridId, [ 'VENDOR_CD','VENDOR_NM','DMND_CMP_NM'] );
			break;

		case 'G_SC4220': // SC4220
			gridId = 'gridCarNoReg';
			if ( caption_flag ) {
				sCaption = '';
				sItemCd  = 'CAR_NO_REG_INFO';
			};
			objItems = 	[
			           	{caption: '운송업체코드'		, name: 'TRSP_CMP_CD'	, width: '5%'	, datatype: 'popup'		, align: 'center'	, maxlength :10, inputreadonly: true},
			           	{caption: '운송업체명'			, name: 'TRSP_CMP_NM'	, width: '12%'	, datatype: 'text'		, align: 'left'		, readonly:true,  maxlength :50},
			           	{caption: '차량번호(전체)'		, name: 'CAR_ID'		, width: '8%'	, datatype: 'text'		, align: 'center'	, maxlength :14},
						{caption: ''				, name: 'CAR_ID_H'		, width: 0		, datatype: 'text'		, hidden:true},
						{caption: '차량번호(숫자)'		, name: 'CAR_NO'		, width: '7%'	, datatype: 'text'		, align: 'center'	, readonly:true},
						{caption: '차무게(Ton)'		, name: 'CAR_WGT'		, width: '6%'	, datatype: 'number'	, align: 'right'	, maxlength: 3},
						{caption: '차량적재무게(Kg)'	, name: 'CAR_LOAD_WGT'	, width: '8%'	, datatype: 'number'	, align: 'right'	, maxlength: 6},
			           	{caption: '기사명'			, name: 'DRIVER_NM'		, width: '4%'	, datatype: 'text'		, align: 'center'	, maxlength :10},
			           	{caption: '시간외'			, name: 'OVERTIME_FLAG'	, width: '3%'	, datatype: 'checkbox'	, align:'center'},
			           	{caption: '허가대상'			, name: 'CNSNT_TGT_YN'	, width: '4%'	, datatype: 'checkbox'	, align:'center'},
						{caption: '핸드폰'			, name: 'HAND_PHONE_NO'	, width: '6%'	, datatype: 'text'		, align: 'center'	, maxlength :40},

			           	];
			fc_addCodeList 	   ( { object: gridId+'.TRSP_CMP_CD', code: 'MC_TRSP_CMP_LIST', title: '운송업체선택', manKey: '' } );
			fc_setKeysInCol    ( gridId, [ 'TRSP_CMP_CD','TRSP_CMP_NM','CAR_ID'] );
			break;

		case 'G_SC4220_1': // SC4220
			gridId = 'G_SC4220_1_ID';
			if ( caption_flag ) {
				sCaption = '입고처History';
				sItemCd  = '';
			};
			objItems = 	[
						{caption: '거래처코드'		, name: 'VENDOR_CD'	, width: '12%'	, datatype: 'text', readonly:true, align: 'center'},
			           	{caption: '거래처명'		, name: 'VENDOR_NM'	, width: '30%'	, datatype: 'text', readonly:true, align: 'left'},
			           	{caption: '품목코드'		, name: 'ITEM_CD'	, width: '10%'	, datatype: 'text', readonly:true, align: 'center'},
						{caption: '품목명'		, name: 'ITEM_NM'	, width: '30%'	, datatype: 'text', readonly:true, align: 'left'}
			           	];
			break;

		case 'G_SC4220_2': // SC4220
			gridId = 'G_SC4220_2_ID';
			if ( caption_flag ) {
				sCaption = '출고처History';
				sItemCd  = '';
			};
			objItems = 	[
			           	{caption: '판매처코드' 	, name: 'VENDOR_CD'		, width: '10%'	, datatype: 'text'		, readonly:true, align: 'center'},
			           	{caption: '판매처명' 		, name: 'VENDOR_NM'		, width: '20%'	, datatype: 'text'		, readonly:true, align: 'left'},
			           	{caption: '납품처코드' 	, name: 'SUB_VENDOR_CD'	, width: '10%'	, datatype: 'text'		, readonly:true, align: 'center'},
						{caption: '납품처명' 		, name: 'SUB_VENDOR_NM'	, width: '20%'	, datatype: 'text'		, readonly:true, align: 'left'},
			           	{caption: '품목코드' 		, name: 'ITEM_CD'		, width: '10%'	, datatype: 'text'		, readonly:true, align: 'center'},
			           	{caption: '품목명' 		, name: 'ITEM_NM'		, width: '20%'	, datatype: 'text'		, readonly:true, align: 'left'}
			           	];
			break;

		case 'G_SC4221': // SC4221
			gridId = 'G_SC4221_ID';
			if ( caption_flag ) {
				sCaption = '';
				sItemCd  = '';
			};
			objItems = 	[
			           	{caption: '금지사유구분' 	, name: 'FORBID_RSN_TP'	, width: '6%'	, datatype: 'lov'		, align: 'center'},
			           	{caption: '차량번호' 		, name: 'CAR_ID'		, width: '5%'	, datatype: 'text'		, align: 'center'	, maxlength :14},
			           	{caption: '기사명' 		, name: 'DRIVER_NM'		, width: '4%'	, datatype: 'text'		, align: 'center'	, maxlength :10, cellbeginedit: f_cellbeginedit},
			           	{caption: '출입금지(From)'	, name: 'FORBID_DT_FR'	, width: '6%'	, datatype: 'date'		, align: 'center'},
						{caption: '출입금지(To)' 	, name: 'FORBID_DT_TO'	, width: '6%'	, datatype: 'date'		, align: 'center'},
			           	{caption: '금지사유' 		, name: 'FORBID_RSN'	, width: '20%'	, datatype: 'text'		, align: 'left'		, maxlength :40},
			           	{caption: '금지횟수' 		, name: 'FORBID_CNT'	, width: '4%'	, datatype: 'number'	, align: 'right'	, maxlength :22},
			           	{caption: '운송업체' 		, name: 'TRSP_CMP_CD'	, width: '4%'	, datatype: 'popup'		, align: 'center'	, maxlength :6 , inputreadonly: true},
			           	{caption: '운송업체명' 	, name: 'TRSP_CMP_NM'	, width: '9%'	, datatype: 'text'		, align: 'left'		, readonly:true, maxlength :30},
			           	{caption: '등록일시' 		, name: 'CRT_TM'		, width: '8%'	, datatype: 'text'		, align: 'center'	, readonly:true},
			           	{caption: 'FORBID_SEQ' 	, name: 'FORBID_SEQ'	, width: 0		, datatype: 'number'	, hidden:true}
			           	];

			fc_addDataInGettedLov ("FORBID_RSN_TP", {code: "FORBID_RSN_TP", tags: "", alias: ""});
			fc_addDataInSettingLov( {object: gridId+'.FORBID_RSN_TP', code: 'FORBID_RSN_TP', format: 'V', nullable: true, defval: ''} );

			fc_addCodeList ( { object: gridId+'.TRSP_CMP_CD', code: 'MC_TRSP_CMP_LIST', title: '운송업체선택', manKey: '' } );

			fc_setKeysInCol( gridId, ['CAR_ID'] );
			fc_setRequiredInCol( gridId, [ 'FORBID_RSN_TP','FORBID_DT_FR','FORBID_DT_TO'] );
			break;

		case 'G_SC4230' : //SC4230
			gridId		= 'G_SC4230_ID';
			if(caption_flag){
				sCaption ='';
				sItemcd = '';
			};
			objItems = [
			            {caption: '운송업체'		, name: 'TRSP_CMP_CD'		, width: 57		, datatype: 'text'		, align: 'center'},
			            {caption: '운송업체명'		, name: 'TRSP_CMP_NM'		, width: 225	, datatype: 'text'		},
			            {caption: '사업자번호'		, name: 'TRSP_CMP_NO'		, width: 90		, datatype: 'text'		, align: 'center'},
			            {caption: '구분'			, name: 'TRSP_CMP_TP'		, width: 40		, datatype: 'checkbox'	, align: 'center'},
			            {caption: '전화'			, name: 'TEL_NO'			, width: 90		, datatype: 'text'		, align: 'center'},
			            {caption: '담당자이메일'	, name: 'MANAGER_EMAIL'		, width: 210	, datatype: 'text'		},
			            {caption: '대표자명'		, name: 'OWNER_NM'			, width: 60		, datatype: 'text'		, align: 'center'},
			            {caption: '담당자명'		, name: 'MANAGER_NM'		, width: 57		, datatype: 'text'		, align: 'center'},
			            {caption: '우편번호'		, name: 'TRSP_CMP_ZIPCODE'	, width: 60		, datatype: 'text'		, align: 'center'},
			            {caption: '주소'			, name: 'TRSP_CMP_ADDR'		, width: 320	, datatype: 'text'		},
			            {caption: '대표자이메일'	, name: 'OWNER_EMAIL'		, width: 150	, datatype: 'text'		},
			            {caption: 'BuSMS'		, name: 'SMS_SEND_YN'		, width: 57		, datatype: 'checkbox'	},
			            {caption: '담당자SMS'		, name: 'SMS_SENDER_NM'		, width: 80		, datatype: 'text'		, align: 'center'},
			            {caption: '휴대폰SMS'		, name: 'SMS_PHONE_NO'		, width: 100	, datatype: 'text'		, align: 'center', maxlength:12 },
			            ];

			break;

		case 'G_SC4240' : //SC4240
			   gridId		= 'G_SC4240_ID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '';
			   };
			   objItems = [
			               	{caption: '선박번호' 		, name: 'VESSEL_NO'			, width:0			, datatype: 'number'	, hidden:true},
							{caption: '선박명 ' 		, name: 'VESSEL_NM'			, width:'4%'		, datatype: 'text'		, align: 'center'	, maxlength:100},
							{caption: 'IMO번호 ' 		, name: 'IMO_NO'			, width:'4%'		, datatype: 'number'	, align: 'right'	, maxlength:7},
							{caption: '선박유형명' 	, name: 'VESSEL_TP_NM'		, width:'5%'		, datatype: 'text'		, align: 'center'	, maxlength:100},
							{caption: '선박건조회사' 	, name: 'VESSEL_CONST_CMP'	, width:'6%'		, datatype: 'text'		, align: 'center'	, maxlength:100},
							{caption: '선박건조년도' 	, name: 'VESSEL_CONST_YEAR'	, width:'6%'		, datatype: 'number'	, align: 'right'	, maxlength:4},
							{caption: '선박Capacity'	, name: 'VESSEL_CAPA'		, width:'5%'		, datatype: 'number'	, align: 'right'	, maxlength:6},
							{caption: '선박Draft' 	, name: 'VESSEL_DRAFT'		, width:'4%'		, datatype: 'number'	, align: 'right'	, maxlength:6},
							{caption: '선박Beam'		, name: 'VESSEL_BEAM'		, width:'4%'		, datatype: 'number'	, align: 'right'	, maxlength:6},
							{caption: 'Hatch수'		, name: 'HATCH_CNT'			, width:'4%'		, datatype: 'number'	, align: 'right'	, maxlength:2},
							{caption: 'Crane수'		, name: 'CRN_CNT'			, width:'4%'		, datatype: 'number'	, align: 'right'	, maxlength:2},
							{caption: 'Grap수 '		, name: 'GRAP_CNT'			, width:'3%'		, datatype: 'number'	, align: 'right'	, maxlength:2},
							{caption: '선박회사명 '		, name: 'VESSEL_CMP_NM'		, width:'10%'		, datatype: 'text'		, align: 'center'	, maxlength:100},
							{caption: '선주'			, name: 'VESSEL_OWNR'		, width:'5%'		, datatype: 'text'		, align: 'center'	, maxlength:100},
							{caption: '선박국적'		, name: 'VESSEL_NTNLTY'		, width:'7%'		, datatype: 'text'		, align: 'center'	, maxlength:100},
							{caption: '선원국적'		, name: 'CREW_NTNLTY'		, width:'7%'		, datatype: 'text'		, align: 'center'	, maxlength:100},
							{caption: '비고 '			, name: 'REMARK'			, width:'10%'		, datatype: 'text'		, align: 'left'	, maxlength:1000}
			               ];

			   fc_setKeysInCol    ( gridId, [ 'VESSEL_NO'] );
			   fc_setRequiredInCol( gridId, [ 'VESSEL_NM'] );
			   break;

		case 'TRSP_SECT_LIST' : //SC4231
			gridId		= 'gridTrspCmpList';
			if(caption_flag){
				sCaption ='';
				sItemCd = 'CAP_TRSP_CMP_LIST';
			};
			objItems = [
			            {caption: '운송업체코드',	name: 'TRSP_CMP_CD',	 width: 100	, datatype: 'popup', isMultiLanguage:false, inputreadonly:true},
			            {caption: '운송업체명',	name: 'TRSP_CMP_NM',	 width: 200	, datatype: 'text', readonly:true},
			            {caption: '구간코드',		name: 'TRSP_SECT_CD', 	 width: 100	, datatype: 'popup', isMultiLanguage:false, inputreadonly:true},
			            {caption: '구간명',		name: 'TRSP_SECT_NM', 	 width: 120	, datatype: 'text', readonly:true},
			            ];
			//popup
			fc_addCodeList( {object: gridId+'.TRSP_CMP_CD',  code: 'MC_SC_TRSP_CMP_LIST',	title: '운송업체 목록', manKey: '' });
			fc_addCodeList( {object: gridId+'.TRSP_SECT_CD', code: 'MC_SECT_LIST',			title: '운송구간 목록', manKey: '' });

			fc_setAlignInCol(gridId, ['TRSP_CMP_CD', 'TRSP_SECT_CD'], 'center');
			fc_setAlignInCol(gridId, ['TRSP_CMP_NM', 'TRSP_SECT_NM'], 'left');
			fc_setKeysInCol( gridId, ['TRSP_CMP_CD', 'TRSP_CMP_NM', 'TRSP_SECT_CD', 'TRSP_SECT_NM'] );
			fc_setRequiredInCol( gridId, [ 'TRSP_CMP_CD','TRSP_SECT_CD'] );
			break;

		case 'SECT_LIST' : //SC4232
			gridId		= 'gridTrspFrml';
			if (caption_flag){
				sCaption ='';
				sItemCd = 'CAP_SECT_LIST';
			};
			objItems = [
						{caption:'운송계약코드',	name:'TRSP_CONTRACT_CD', width: 0, 	 datatype:'text',	isMultiLanguage:false, hidden:true},
			            {caption:'운송업체코드',	name:'TRSP_CMP_CD', 	 width: 250, datatype:'popup',	isMultiLanguage:false, inputreadonly:true},
			            {caption:'운송업체명',		name:'TRSP_CMP_NM', 	 width: 350, datatype:'text',	isMultiLanguage:false, align:'left', readonly:true},
			            {caption:'계약시작일',		name:'CONTRACT_DT_STA',  width: 250, datatype:'date',	isMultiLanguage:false},
			            {caption:'계약마지막일',	name:'CONTRACT_DT_END',  width: 250, datatype:'date',	isMultiLanguage:false},
			            {caption:'벌크기준톤수',	name:'BULK_TON',		 width: 250, datatype:'number', isMultiLanguage:false, align:'right'},
			            {caption:'작성일자',		name:'REGIST_DT',		 width: 250, datatype:'text',	isMultiLanguage:false, readonly:true},
			            ];
			//popup
			fc_addCodeList( {object: gridId+'.TRSP_CMP_CD', code: 'MC_TRSP_CONTRACT', title: '운송업체 목록', manKey: '' ,setConditon:[{object:'INPUT_VAL1',colNm:'TRSP_CMP_CD'}, {object:'INPUT_VAL2',colNm:'TRSP_CMP_NM'}]});
			
			fc_setKeysInCol( gridId, ['TRSP_CMP_CD', 'TRSP_CMP_NM'] );
			fc_setAlignInCol(gridId, ['TRSP_CMP_CD', 'CONTRACT_DT_STA', 'CONTRACT_DT_END', 'REGIST_DT'], 'center');
			break;

		case 'SECT_LIST_DTL' : //SC4232
			gridId		= 'gridTrspFrmSub';
			if(caption_flag){
				sCaption = '운송업체 구간코드';
				sItemCd = '';
			};
			objItems = [
			            {caption:'운송업체코드',		name:'TRSP_CMP_CD',			width: 0, 	datatype:'text', 	isMultiLanguage:false, hidden:true},
			            {caption:'운송계약코드',		name:'TRSP_CONTRACT_CD',	width: 0, 	datatype:'text', 	isMultiLanguage:false, hidden:true},
			            {caption:'운송구간순번',		name:'TRSP_SECT_SEQ',		width: 0, 	datatype:'number', hidden:true},
			            {caption:'운송구분코드',		name:'TRSP_TP_NM',			width: 0, 	datatype:'text', 	isMultiLanguage:false, hidden:true},
			            {caption:'운송단위코드',		name:'TRSP_UNIT_NM',		width: 0, 	datatype:'text',	isMultiLanguage:false, hidden:true},
			            {caption:'품목코드',			name:'ITEM_CD',				width: 100, datatype:'popup',	isMultiLanguage:false, inputreadonly:true},
			            {caption:'품목명',			name:'ITEM_NM',				width: 200, datatype:'text',	isMultiLanguage:false, inputreadonly:true},
			            {caption:'운송구분',			name:'TRSP_TP',				width: 200, datatype:'lov',		isMultiLanguage:false, },
			            {caption:'운송단위',			name:'TRSP_UNIT_CD',		width: 200, datatype:'lov',		isMultiLanguage:false},
			            {caption:'운송구간 (출발지)',	name:'TRSP_SECT_CD_STA',	width: 150, datatype:'popup',	isMultiLanguage:false, inputreadonly:true},
			            {caption:'운송구간 (출발지)',	name:'TRSP_SECT_NM_STA',	width: 200, datatype:'text',	isMultiLanguage:false, inputreadonly:true},
			            {caption:'운송구간(도착지)', 	name:'TRSP_SECT_CD_END',	width: 150, datatype:'popup',	isMultiLanguage:false, inputreadonly:true},
			            {caption:'운송구간(도착지)',	name:'TRSP_SECT_NM_END',	width: 200, datatype:'text',	isMultiLanguage:false, inputreadonly:true},
			            {caption:'차무게',			name:'CAR_WGT',				width: 100, datatype:'number',	isMultiLanguage:false,	align:'right'},
			            {caption:'운송금액',			name:'TRSP_AMT',			width: 100, datatype:'number',	isMultiLanguage:false,	align:'right'},
			            ];
			//lov
			fc_addDataInGettedLov("TRSP_TP", {code : "TRSP_TP",tags : "",alias : ""});
			fc_addDataInSettingLov({object : gridId + ".TRSP_TP", code : "TRSP_TP",format : "V",nullable : true,defval : ""});
			//lov
			fc_addDataInGettedLov("TRSP_UNIT_CD", {code : "TRSP_UNIT_CD",tags : "",alias : ""});
			fc_addDataInSettingLov({object : gridId + ".TRSP_UNIT_CD", code : "TRSP_UNIT_CD",format : "V",nullable : true,defval : ""});
			//popup
			fc_addCodeList( {object: gridId+'.ITEM_CD', 		 code: 'MC_ITEM_LIST',	title: '퓸목코드조회', manKey: '', cdParam:''  });
			fc_addCodeList( {object: gridId+'.TRSP_SECT_CD_STA', code: 'MC_SECT_LIST',	title: '운송구간조회', manKey: '' });
			fc_addCodeList( {object: gridId+'.TRSP_SECT_CD_END', code: 'MC_SECT_LIST',	title: '운송구간조회', manKey: '' });
			
			fc_setAlignInCol(gridId, ['ITEM_CD', 'TRSP_TP', 'TRSP_UNIT_CD', 'TRSP_SECT_CD_STA', 'TRSP_SECT_CD_END'], 'center');
			fc_setAlignInCol(gridId, ['ITEM_NM', 'TRSP_TP', 'TRSP_SECT_NM_STA', 'TRSP_SECT_NM_END'], 'left');
			fc_setKeysInCol( gridId, ['ITEM_CD', 'ITEM_NM', 'TRSP_TP', 'TRSP_UNIT_CD', 'TRSP_SECT_CD_STA', 'TRSP_SECT_NM_STA', 'TRSP_SECT_CD_END', 'TRSP_SECT_NM_END'] );
			break;

		case 'G_SC2610': // SC2610
			gridId = 'G_SC2610_ID';
			if ( caption_flag ) {
				sCaption = '';
				sItemCd  = '';
			};
			objItems = 	[
			           	{caption: '품목코드'	, name: 'ITEM_CD'	, width: '5%'	, datatype: 'text', align: 'center'	, maxlength: 3	, required:true},
			           	{caption: '품목명' 	, name: 'ITEM_NM'	, width: '14%'	, datatype: 'text', align: 'left'	, maxlength: 40	, required:true},
			           	{caption: '홀더명' 	, name: 'HOLDER_NM'	, width: '14%'	, datatype: 'text', align: 'left'	, maxlength: 10},
			           	];
			fc_setKeysInCol    ( gridId, [ 'ITEM_CD'] );
			fc_setRequiredInCol( gridId, [ 'ITEM_CD', 'ITEM_NM'] );
			break;

		case 'G_SC2620': // SC2620
			gridId = 'G_SC2620_ID';
			if ( caption_flag ) {
				sCaption = '';
				sItemCd  = '';
			};
			objItems = 	[
			           	{caption: '차량번호(전체)' 	, name: 'CAR_ID'	, width: '6%'	, datatype: 'text', align: 'center'	, maxlength:14},
			           	{caption: '차량번호(숫자)' 	, name: 'CAR_NO'	, width: '6%'	, datatype: 'text', align: 'center'	, maxlength:11, readonly: true},
			           	{caption: '기사명' 		, name: 'DRIVER_NM'	, width: '4%'	, datatype: 'text', align: 'center'	, maxlength:10},
			           	{caption: '거래처 명' 		, name: 'VENDOR_NM'	, width: '10%'	, datatype: 'text', align: 'left'	, maxlength:20}
			           	];
			fc_setKeysInCol    ( gridId, [ 'CAR_ID','DRIVER_NM'] );
			fc_setRequiredInCol( gridId, [ 'CAR_ID', 'CAR_NO', 'VENDOR_NM'] );
			break;

		case 'G_SC2630': // SC2630
			gridId = 'G_SC2630_ID';
			if ( caption_flag ) {
				sCaption = '';
				sItemCd  = '';
			};
			objItems = 	[
			           	{caption: '계근번호' 	, name: 'WEIGH_NO'	, width: 0		, datatype: 'text'		, readonly: true		, hidden: true		, maxlength: 11},
			           	{caption: '차량번호' 	, name: 'CAR_NO'	, width: '5%'	, datatype: 'popup'		, inputreadonly: true	, maxlength: 14},
			           	{caption: '업체명' 	, name: 'VENDOR_NM'	, width: '10%'	, datatype: 'text'		, readonly: true		, maxlength: 20},
			           	{caption: '운전자' 	, name: 'DRIVER_NM'	, width: '4%'	, datatype: 'text'		, readonly: true		, align:'center'	, maxlength: 12},
			           	{caption: '품목코드' 	, name: 'ITEM_CD'	, width: '4%'	, datatype: 'popup'		, inputreadonly: true	, align:'center' 	, maxlength: 3},
			           	{caption: '품목명' 	, name: 'ITEM_NM'	, width: '10%'	, datatype: 'text'		, readonly: true},
			           	{caption: '입고시간' 	, name: 'IN_TIME'	, width: '5%'	, datatype: 'date'		, readonly: false		, align:'center'},//datetime
			           	{caption: '출고시간' 	, name: 'OUT_TIME'	, width: '5%'	, datatype: 'date'		, readonly: false		, align:'center'},//datetime
			           	{caption: '총중량' 	, name: 'TOT_WGT'	, width: '4%'	, datatype: 'number'	, maxlength: 22},
			           	{caption: '공중량' 	, name: 'EMPTY_WGT'	, width: '4%'	, datatype: 'number'	, maxlength: 22},
			           	{caption: '실중량' 	, name: 'REAL_WGT'	, width: '4%'	, datatype: 'number'	, readonly: false 		, maxlength: 22},
			           	{caption: '비고' 		, name: 'REMARK'	, width: '15%'	, datatype: 'text'		, maxlength: 50}
			           	];

			fc_setKeysInCol    ( gridId, [ 'WEIGH_NO'] );
			fc_setRequiredInCol( gridId, [ 'CAR_NO', 'VENDOR_NM', 'DRIVER_NM', 'ITEM_CD', 'ITEM_NM', 'IN_TIME', 'OUT_TIME', 'TOT_WGT', 'EMPTY_WGT', 'REAL_WGT'] );
			fc_addCodeList 	   ( { object: gridId+'.CAR_NO'		, code: 'MC_RTN_CAR_LIST'	, title: '차량선택', manKey: '' } );
			fc_addCodeList 	   ( { object: gridId+'.ITEM_CD'	, code: 'MC_RTN_ITEM_LIST'	, title: '품목선택', manKey: '' } );

			break;

		case 'G_SC2640': // SC2640
			gridId = 'G_SC2640_ID';
			if ( caption_flag ) {
				sCaption = '';
				sItemCd  = '';
			};
			objItems = 	[
			           	{caption: '입고일자'	, name: 'IN_DT'		, width: '4%'	, datatype: 'text'		, readonly: true	, align:'center'},
			           	{caption: '입고번호'	, name: 'IN_NO'		, width: '5%'	, datatype: 'text'		, align:'center'},
			           	{caption: '차량번호'	, name: 'CAR_NO'	, width: '5%'	, datatype: 'text'		, readonly: true	, align:'left'},
			           	{caption: '업체명' 	, name: 'VENDOR_NM'	, width: '10%'	, datatype: 'text'		, readonly: true	, align:'left'},
			           	{caption: '운전자'	, name: 'DRIVER_NM'	, width: '4%'	, datatype: 'text'		, align:'left'},
			           	{caption: '품목'		, name: 'ITEM_CD'	, width: '3%'	, datatype: 'text'		, readonly: true	, align:'center'},
			           	{caption: '품목명' 	, name: 'ITEM_NM'	, width: '10%'	, datatype: 'text'		, readonly: false	, align:'left'},//datetime
			           	{caption: '입고시간' 	, name: 'IN_TIME'	, width: '7%'	, datatype: 'date'		, readonly: false	, align:'center'},//datetime
			           	{caption: '출고시간' 	, name: 'OUT_TIME'	, width: '7%'	, datatype: 'date'		, align:'center'},
			           	{caption: '총중량' 	, name: 'TOT_WGT'	, width: '4%'	, datatype: 'number'	},
			           	{caption: '공중량' 	, name: 'EMPTY_WGT'	, width: '4%'	, datatype: 'number'	, readonly: false},
			           	{caption: '실중량' 	, name: 'REAL_WGT'	, width: '4%'	, datatype: 'number'	},
			           	{caption: '비고' 		, name: 'REMARK'	, width: '10%'	, datatype: 'text'		}
			           	];
			//fc_setRequiredInCol( gridId, [ 'ITEM_CD', 'ITEM_NM'] );
			break;
		case 'G_SC2452': // SC2452
			gridId = 'G_SC2452_ID';
			if ( caption_flag ) {
				sCaption = '';
				sItemCd  = '';
			};
			objItems = 	[
			           	{caption: '출고번호' 	, name: 'PROD_OUT_NO'	, width: 130, datatype: 'text'	, align:'center'},
			           	{caption: '판매처코드' , name: 'VENDOR_CD'		, width: 100, datatype: 'text'	, align:'center'},
			           	{caption: '판매처명' 	, name: 'VENDOR_NM'		, width: 200, datatype: 'text'	, align:'left'},
			           	{caption: '납품처코드' , name: 'SUB_VENDOR_CD'	, width: 100, datatype: 'text'	, align:'center'},
			           	{caption: '납품처명' 	, name: 'SUB_VENDOR_NM'	, width: 200, datatype: 'text'	, align:'left'},
			           	{caption: '번들수' 	, name: 'BUNDLE_CNT'	, width: 80	, datatype: 'number', align:'right'},
			           	{caption: '중량' 		, name: 'PROD_WGT'		, width: 80	, datatype: 'number', align:'right'}
			           	];
			break;

		case 'TAG_FUNC': // SC4330
			gridId = 'GRIDMCYARDMGMT';
			if (caption_flag) {
				sCaption = '';
				sItemCd = 'CAP_SPECT_LIST_DTL';
			}
			;
			objItems = [
                {caption : '공장', name : 'PLANT_NO',width:205,datatype : 'text',isMultiLanguage : false},
                {caption : '제품위치', name : 'YARD_LOC_CD',	width:205,	datatype : 'text',	align : 'center',	isMultiLanguage : false,maxlength:2, required:true, uppercase: true},
                {caption : '최대열수',name : 'MAX_COL',width:205,datatype : 'integer',align : 'center',isMultiLanguage : false,maxlength: 4},
                {caption : '등급',name : 'PROD_GRD',width:205,datatype : 'lov',align : 'center',isMultiLanguage : false},
                {caption : '클린징',name : 'CLINCH_TP',itemCd : 'CLINCH_TP_CD',width:205,datatype : 'lov',align : 'center',isMultiLanguage : false},
                
                {caption : '할당',name : 'GRD_ASSIGN_FLAG',width:190,datatype : 'checkbox',align : 'center',isMultiLanguage : false},
                {caption : '등급명',name : 'GRD_NM',width:205,datatype : 'text',align : 'left',isMultiLanguage : false,maxlength: 40},
                {caption : 'INTERRUPT위치',name : 'INTR_LOC',width:205,datatype : 'text',align : 'center',isMultiLanguage : false,maxlength: 2},
                {caption : 'INTERRUPT중량',name : 'INTR_WGT',width:205,datatype : 'number',align : 'right',isMultiLanguage : false,maxlength: 4},
                {caption : 'S급3대목',name : 'DAEMOK_LOC',width:180,datatype : 'text',align : 'center',isMultiLanguage : false,maxlength: 2},
            ];

			fc_setHiddenInCol(gridId, [ 'PLANT_NO' ]);
			fc_setKeysInCol(gridId, [ 'YARD_LOC_CD' ]);

			fc_addDataInGettedLov("PROD_GRD", {code : "PROD_GRD_ECC",tags : "",alias : ""});
			fc_addDataInSettingLov({object : gridId + ".PROD_GRD",code : "PROD_GRD_ECC",format : "V",nullable : false,defval : ""});

			fc_addDataInGettedLov("CLINCH_TP", {code : "CLINCH_TP",tags : "",alias : ""});
			fc_addDataInSettingLov({object : gridId + ".CLINCH_TP",code : "CLINCH_TP",format : "V",nullable : false,defval : ""});
			break;
			
		case 'GRID_4250':
			gridId = 'GRIDSMS0';
			if (caption_flag) {
				sCaption = 'gridMftList0';
				sItemCd = 'CAP_MFT_LIST0';
			}
			;
			objItems = [
			// {caption: 'PROC_CD' , name: 'PROC_CD' , width: 150 , datatype: 'lov'
			// }
			{caption : '운송업체',name : 'TRSP_CMP_CD',width : '100',datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
            {caption : '운송업체명',name : 'TRSP_CMP_NM',width : '200',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true},
            {caption : '담당자명',name : 'MANAGER_NM',width : '100',datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
            {caption : '핸드폰번호',name : 'PHONE',width : '200',datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
            {caption : '-',name : 'DUMMY',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true},
            {caption : 'HPHONE1',name : 'MOBILE_NO1',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true},
            {caption : 'HPHONE2',name : 'MOBILE_NO2',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true},
            {caption : 'HPHONE3',name : 'MOBILE_NO3',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true},
            {caption : '수신자번호',name : 'RECEIVER_PHONE_NO',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true},
            {caption : '발신자번호',name : 'SENDER_PHONE_NO',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true},
            {caption : '문자내용',name : 'SEND_MSG',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true}, 
			];

			fc_setHiddenInCol(gridId, [ 'MOBILE_NO1','MOBILE_NO2','MOBILE_NO3' ]);

			break;


		case 'GRID_4251':
			gridId = 'GRIDSMS1';
			if (caption_flag) {
				sCaption = 'gridMftList1';
				sItemCd = 'CAP_MFT_LIST1';
			}
			;
			objItems = [
			{caption : '부재료업체코드',name : 'TRSP_CMP_CD',width : '100',datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
            {caption : '부재료업체명',name : 'TRSP_CMP_NM',width : '200',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true},
            {caption : '담당자명',name : 'sms_sender_nm',width : '100',datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
            {caption : '핸드폰번호',name : 'PHONE',width : '200',datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
            {caption : '-',name : 'DUMMY',width : 'auto',datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
            {caption : 'HPHONE1',name : 'MOBILE_NO1',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true},
            {caption : 'HPHONE2',name : 'MOBILE_NO2',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true},
            {caption : 'HPHONE3',name : 'MOBILE_NO3',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true},
            {caption : '수신자번호',name : 'RECEIVER_PHONE_NO',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true},
            {caption : '발신자번호',name : 'SENDER_PHONE_NO',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true},
            {caption : '문자내용',name : 'SEND_MSG',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true}, 
            ];
			break;

		case 'GRID_4252':
			gridId = 'GRIDSMS2';
			if (caption_flag) {
				sCaption = 'gridMftList2';
				sItemCd = 'CAP_MFT_LIST2';
			}
			;
			objItems = [
			// {caption: 'PROC_CD' , name: 'PROC_CD' , width: 150 , datatype: 'lov'
			// }
            {caption : '일자',name : 'SPEEDING_DT',width : '100',datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
            {caption : '시간',name : 'SPEEDING_TM',width : '100',datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
            {caption : '업체명',name : 'TRSP_CMP_NM',width : '150',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true},
            {caption : '차량번호',name : 'CAR_ID',width : '140',datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
            {caption : '기사명',name : 'DRIVER_NM',width : '80',datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
            {caption : '분류',name : 'SPEEDING_TP_NM',width : '80',datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
            {caption : '조치',name : 'SPEEDING_ACTION_TP',width : '100',datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
            {caption : '장소',name : 'SPEEDING_PLACE',width : '400',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true},
            {caption : '핸드폰번호',name : 'PHONE',width : 'auto',datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
            {caption : 'HPHONE1',name : 'MOBILE_NO1',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true},
            {caption : 'HPHONE2',name : 'MOBILE_NO2',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true},
            {caption : 'HPHONE3',name : 'MOBILE_NO3',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true},
            {caption : '수신자번호',name : 'RECEIVER_PHONE_NO',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true},
            {caption : '발신자번호',name : 'SENDER_PHONE_NO',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true},
            {caption : '문자내용',name : 'SEND_MSG',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true},
            {caption : '',name : 'SMS_WK_TP',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true,hidden:true}, 
			];
			break;

		case 'GRID_4253':
			gridId = 'GRIDSMS3';
			if (caption_flag) {
				sCaption = 'gridMftList';
				sItemCd = 'CAP_MFT_LIST';
			};
			objItems = [
			   		 {caption : 'SMS작업구분',name : 'SMS_WK_TP',width : 100,datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
			   		 {caption : '발송일시',name : 'SEND_DTM',width : 200,datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
			   		 {caption : '수신자번호',name : 'RECEIVER_PHONE_NO',width : 150,datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
			   		 {caption : '발신자번호',name : 'SENDER_PHONE_NO',width : 150,datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
			   		 {caption : '발신자명',name : 'SENDER_NM',width : 150,datatype : 'text',align : 'center',isMultiLanguage : false,readonly : true},
			   		 {caption : '내용',name : 'SMS_MSG',width : 'auto',datatype : 'text',align : 'left',isMultiLanguage : false,readonly : true},
			       ];
			break;

		case 'FORWARD_VENDOR_STATUS' ://SC1410
			   gridId		= 'gridWatingVendorStatus';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = 'CAP_FORWARD_VENDOR_STATUS';
			   };
			   objItems = [
			               	{caption: '출고번호',		name: 'CAR_INOUT_NO',	width: 150, datatype: 'text',		isMultiLanguage:false,	readonly:true},
							{caption: '판매처명',		name: 'VENDOR_NM',		width: 250, datatype: 'text',		isMultiLanguage:false,	readonly:true},
							{caption: '납품처명',		name: 'SUB_VENDOR_NM',	width: 250, datatype: 'text',		isMultiLanguage:false,	readonly:true},
							{caption: '품목명',		name: 'ITEM_NM',		width: 230, datatype: 'text',		isMultiLanguage:false,	readonly:true},
							{caption: '공장',			name: 'PLANT_NO',		width: 100, datatype: 'text',		isMultiLanguage:false,	readonly:true},
				           	{caption: '상차유무',		name: 'LOAD_YN',		width: 100, datatype: 'checkbox',	isMultiLanguage:false,	readonly:true},
				           	{caption: '차량번호',		name: 'CAR_ID',			width: 180, datatype: 'text',		isMultiLanguage:false,	readonly:true},
				           	{caption: '기사명',		name: 'DRIVER_NM',		width: 150, datatype: 'text',		isMultiLanguage:false,	readonly:true},
				           	{caption: '입차시각',		name: 'CAR_IN_DTM',		width: 150, datatype: 'text',		isMultiLanguage:false,	readonly:true},
				           	{caption: '공차중량(kg)',	name: 'EMPTY_WGT',		width: 100, datatype: 'number',		isMultiLanguage:false,	readonly:true},
				           	{caption: '계근자',		name: 'WRKER_NM',		width: 150, datatype: 'text',		isMultiLanguage:false,	readonly:true},
			               ];
			 fc_setAlignInCol(gridId, ['VENDOR_NM', 'SUB_VENDOR_NM', 'ITEM_NM'], 'left');
			 fc_setAlignInCol(gridId, ['CAR_INOUT_NO','PLANT_NO', 'CAR_ID', 'DRIVER_NM', 'CAR_IN_DTM', 'WRKER_NM'], 'center');
			 
			 
			break;

		case 'RECEIVE_VENDOR_STATUS' : //SC1411
			   gridId		= 'gridReceiveVendorStatus';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = 'CAP_RECEIVE_VENDOR_STATUS';
			   };
			   objItems = [
			               	{caption: '입고번호',		name: 'CAR_INOUT_NO',	width: 150, datatype: 'text',	isMultiLanguage:false,	readonly:true, align:'center'},
							{caption: '거래처코드',	name: 'VENDOR_CD',		width: 100, datatype: 'text',	isMultiLanguage:false,	readonly:true, align:'center'},
							{caption: '거래처명',		name: 'VENDOR_NM',		width: 250, datatype: 'text',	isMultiLanguage:false,	readonly:true},
							{caption: '품목코드',		name: 'ITEM_CD',		width: 100, datatype: 'text',	isMultiLanguage:false,	readonly:true, align:'center'},
							{caption: '품목명',		name: 'ITEM_NM',		width: 250, datatype: 'text',	isMultiLanguage:false,	readonly:true},
				           	{caption: '차량번호',		name: 'CAR_ID',			width: 150, datatype: 'text',   isMultiLanguage:false,	readonly:true, align:'center'},
				           	{caption: '입고량(kg)',	name: 'TOT_WGT',		width: 100, datatype: 'number',	isMultiLanguage:false,	readonly:true},
				           	{caption: '기사명',		name: 'DRIVER_NM',		width: 100, datatype: 'text',	isMultiLanguage:false,	readonly:true, align:'center'},
				           	{caption: '입고시각',		name: 'CAR_IN_DTM',		width: 150, datatype: 'text',	isMultiLanguage:false,	readonly:true, align:'center'},
				           	{caption: '차선번호',		name: 'SCH_NO',			width: 150, datatype: 'number', isMultiLanguage:false,	readonly:true, align:'center'},
				           	{caption: '비고',			name: 'REMARK',			width: 150, datatype: 'text',	isMultiLanguage:false,	readonly:true},
				           	{caption: '샘플링',		name: 'SAMPLE_CONFIRM', width: 150, datatype: 'text',	isMultiLanguage:false,	readonly:true, align:'center'},
			               ];
			   fc_setAlignInCol(gridId, ['VENDOR_NM', 'ITEM_NM'], 'left');
			   //fc_setAlignInCol(gridId, ['CAR_INOUT_NO', 'TOT_WGT', 'SCH_NO'], 'right');
			   break;

		case 'CAR_MGMT' : //SC1420
			   gridId		= 'gridCarMgmt';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = 'CAP_CAR_MGMT';
			   };
			   objItems = [
						   {caption: '' ,		name: 'CAR_ALLOC_CD',	width: 0, 	datatype: 'text',	isMultiLanguage:false, hidden:true},
						   {caption: '일자',		name: 'CAR_ALLOC_DT',	width: 150, datatype: 'text',	isMultiLanguage:false, readonly:true},
						   {caption: '차량번호',	name: 'CAR_ID',			width: 150, datatype: 'text',	isMultiLanguage:false, readonly:true},
						   {caption: '기사명 ',	name: 'DRIVER_NM',		width: 100, datatype: 'text',	isMultiLanguage:false, readonly:true},
						   {caption: '배차중량',	name: 'CAR_ALLOC_WGT',	width: 127, datatype: 'number', isMultiLanguage:false, readonly:true},
						   {caption: '배차상태',	name: 'CAR_ALLOC_STS',	width: 150, datatype: 'text', 	isMultiLanguage:false, readonly:true},
						   {caption: '출발지코드',	name: 'DEP_POS_CD',		width: 150, datatype: 'text',	isMultiLanguage:false, hidden:true},
						   {caption: '도착지코드',	name: 'ARRIVAL_POS_CD',	width: 150, datatype: 'text',	isMultiLanguage:false, hidden:true},
						   {caption: '출발지',	name: 'DEP_POS',		width: 150, datatype: 'text',	isMultiLanguage:false, readonly:true},
						   {caption: '도착지',	name: 'ARRIVAL_POS',	width: 150, datatype: 'text',	isMultiLanguage:false, readonly:true},
						   {caption: '판매처명',	name: 'VENDOR_NM',		width: 200, datatype: 'text',	isMultiLanguage:false, readonly:true},
						   {caption: '납품처명',	name: 'SUB_VENDOR_NM',	width: 200, datatype: 'text',	isMultiLanguage:false, readonly:true},
						   {caption: '품목',		name: 'ITEM_CD',		width: 100, datatype: 'text',	isMultiLanguage:false, readonly:true},
						   {caption: '운송업체',	name: 'TRSP_CMP_NM',	width: 200, datatype: 'text',	isMultiLanguage:false, readonly:true},
						   {caption: '공장',		name: 'PLANT_NO',		width: 120, datatype: 'lov',	isMultiLanguage:false, readonly:true},
						  ];
			   fc_setAlignInCol	( gridId, ['CAR_ALLOC_DT', 'CAR_ID', 'DRIVER_NM', 'CAR_ALLOC_STS','DEP_POS', 'ARRIVAL_POS', 'ITEM_CD', 'PLANT_NO', ], 'center');
			    //lov
				fc_addDataInGettedLov ( 'PLANT_NO', {code: 'YARD_PLANT_TP', tags: '', alias: ''} );
				fc_addDataInSettingLov( {object: gridId+'.PLANT_NO', code: 'YARD_PLANT_TP' , format: 'V', nullable: true , defval: ''} );
				//lov
//				fc_addDataInGettedLov ( 'ARRIVAL_POS', {code: 'TRSP_SECT_CD', tags: '', alias: ''} );
//				fc_addDataInSettingLov( {object: 'ARRIVAL_POS', code: 'TRSP_SECT_CD' , format: 'V', nullable: true , defval: ''} );
			   break;

		case 'CAR_ALLOC_MGMT' : //SC1421
			   gridId		= 'gridCarAllocMgmt';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = 'CAP_CAR_ALLOC_MGMT';
			   };
			   objItems = [
			                {caption: '차량번호',	name: 'CAR_ID', 		width: 200, datatype: 'text', isMultiLanguage:false, readonly:true, align:'center'},
							{caption: '기사명 ',	name: 'DRIVER_NM',		width: 180, datatype: 'text', isMultiLanguage:false, readonly:true, align:'center'},
							{caption: '판매처명', name: 'VENDOR_NM',		width: 300, datatype: 'text', isMultiLanguage:false, readonly:true},
							{caption: '납품처명', name: 'SUB_VENDOR_NM',	width: 300, datatype: 'text', isMultiLanguage:false, readonly:true},
				           	{caption: '품목',		name: 'ITEM_CD',		width: 200, datatype: 'text', isMultiLanguage:false, readonly:true, align:'center'},
				           	{caption: '품목명',	name: 'ITEM_NM',		width: 200, datatype: 'text', isMultiLanguage:false, readonly:true},
				        	{caption: '운송업체',	name: 'TRSP_CMP_NM',	width: 300, datatype: 'text', isMultiLanguage:false, readonly:true},
				        	{caption: '',		name: 'VENDOR_CD',		width: 300, datatype: 'text', isMultiLanguage:false, hidden:true},
				        	{caption: '',		name: 'SUB_VENDOR_CD',	width: 300, datatype: 'text', isMultiLanguage:false, hidden:true},
				        	{caption: '',		name: 'TRSP_CMP_CD',	width: 300, datatype: 'text', isMultiLanguage:false, hidden:true},
				        	{caption: '',		name: 'INOUT_TP',		width: 300, datatype: 'text', isMultiLanguage:false, hidden:true},
			               ];
			   break;

		case 'CAR_ALLOC_MGMT_N' : //SC1422
			   gridId		= 'gridCarAllocMgmtN';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = 'CAP_CAR_ALLOC_MGMT_N';
			   };
			   objItems = [
			               	{caption: '차량번호',	name: 'CAR_ID', 		width: 200, datatype: 'text', isMultiLanguage:false, readonly:true, align:'center'},
							{caption: '기사명 ',	name: 'DRIVER_NM',		width: 200, datatype: 'text', isMultiLanguage:false, readonly:true, align:'center'},
							{caption: '판매처명 ',	name: 'VENDOR_NM',		width: 300, datatype: 'text', isMultiLanguage:false, readonly:true},
							{caption: '납품처명',	name: 'SUB_VENDOR_NM',	width: 300, datatype: 'text', isMultiLanguage:false, readonly:true},
				           	{caption: '품목',		name: 'ITEM_CD',		width: 150, datatype: 'text', isMultiLanguage:false, readonly:true, align:'center'},
				           	{caption: '품목명',	name: 'ITEM_NM',		width: 250, datatype: 'text', isMultiLanguage:false, readonly:true},
				           	{caption: '',		name: 'VENDOR_CD',		width: 0, 	datatype: 'text', isMultiLanguage:false, hidden:true},
				        	{caption: '',		name: 'SUB_VENDOR_CD',	width: 0, 	datatype: 'text', isMultiLanguage:false, hidden:true},
				        	{caption: '',		name: 'TRSP_CMP_CD',	width: 0, 	datatype: 'text', isMultiLanguage:false, hidden:true},
				        	{caption: '',		name: 'INOUT_TP',		width: 0, 	datatype: 'text', isMultiLanguage:false, hidden:true},
			               ];
			   break;

		 case '2320_LEFT_TAB_0_0':
			 gridId		= '2320_LEFT_TAB_0_0_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2320_LEFT_TAB_0_0_ITEMCD';
			   };
			   objItems = [
				           	{caption: '입고일자S' , name: 'IN_DT_FR', align: 'center', width: 'auto', datatype: 'text', readonly:true,hidden:true},
				           	{caption: '입고일다E' , name: 'IN_DT_TO', align: 'center', width: 'auto', datatype: 'text', readonly:true,hidden:true},
				           	{caption: '공장' , name: 'PLANT_NO', width: 'auto', datatype: 'text', readonly:true,hidden:true},
				           	{caption: 'Lot No' , name: 'LOT_NO', align: 'center', width: 'auto', datatype: 'text', readonly:true},
				           	{caption: '입고 총중량' , name: 'REAL_WGT', align: 'right', width:'auto', datatype: 'number', isMultiLanguage:false, readonly:true},

			               ];
			   break;

		 case '2320_LEFT_TAB_0_1':
			 gridId		= '2320_LEFT_TAB_0_1_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2320_LEFT_TAB_0_1_ITEMCD';
			   };
			   objItems = [
			               	{caption: '야적위치' , name: 'LOT_NO', align: 'center', width: 'auto', datatype: 'text', isMultiLanguage:false},
			               	{caption: '입고중량' , name: 'REAL_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false},
			               	{caption: '비고' , name: 'REMARK', align: 'left', width: 'auto', datatype: 'text', isMultiLanguage:false},
			               ];
			   
			   break;



		 case '2320_RIGHT_TAB_0_0':
			 gridId		= '2320_RIGHT_TAB_0_0_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2320_RIGHT_TAB_0_0_ITEMCD';
			   };
			   objItems = [
			               	{caption: '생산입고번호' , name: 'PROD_IN_NO', width: 'auto', datatype: 'text', align:'center', isMultiLanguage:false},
			               	{caption: '품목명' , name: 'ITEM_NM', width: 'auto', datatype: 'text', align:'center', isMultiLanguage:false},
			               	{caption: '입고시간' , name: 'IN_TIME', width: 'auto', datatype: 'text', align:'center', isMultiLanguage:false},
			               	{caption: '등급' , name: 'GRD', width: 'auto', datatype: 'text', align:'center', isMultiLanguage:false},
			               	{caption: '야적위치' , name: 'YARD_LOC', width: 'auto', datatype: 'text', align:'center', isMultiLanguage:false},
			               	{caption: '야적번호' , name: 'YARD_NO', width: 'auto', datatype: 'text', align:'center', isMultiLanguage:false},
			               	{caption: '낱장갯수' , name: 'PCS_CNT', width: 'auto', datatype: 'number', isMultiLanguage:false},
			               	{caption: 'CLINCH' , name: 'CLINCH', width: 'auto', datatype: 'checkbox', isMultiLanguage:false},
			               	{caption: '실중량' , name: 'REAL_WGT', width: 'auto', datatype: 'number', isMultiLanguage:false},
			               	{caption: '전송구분' , name: 'SEND_FLAG', width: '80', datatype: 'text', align:'center', isMultiLanguage:false},
			               ];
			   break;


		 case '2320_LEFT_TAB_1_0':
			 gridId		= '2320_LEFT_TAB_1_0_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2320_LEFT_TAB_1_0_ITEMCD';
			   };
			   objItems = [
			               	{caption: 'Lot번호' , name: 'LOT_NO', align: 'left', width: '150', datatype: 'text', align:'center', isMultiLanguage:false, readonly:true},
			               	{caption: '입고중량' , name: 'REAL_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               ];
			   break;


		 case '2320_RIGHT_TAB_1_0':
			 gridId		= '2320_RIGHT_TAB_1_0_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2320_RIGHT_TAB_1_0_ITEMCD';
			   };
			   objItems = [
			               	{caption: '입고일자' , name: 'PROD_IN_DT', align: 'left', width: 'auto', datatype: 'text', align:'center', isMultiLanguage:false, readonly:true},
			               	{caption: '등급' , name: 'PROD_GRD', align: 'left', width: 'auto', datatype: 'text', align:'center', isMultiLanguage:false, readonly:true},
			               	{caption: '야적위치' , name: 'YARD_LOC_CD', align: 'left', width: 'auto', datatype: 'text', align:'center', isMultiLanguage:false, readonly:true},
			               	{caption: '번들수량' , name: 'BUNDLE_CNT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '총중량' , name: 'REAL_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               ];
			   break;


		 case '2320_LEFT_TAB_2_0':
			 gridId		= '2320_LEFT_TAB_2_0_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2320_LEFT_TAB_2_0_ITEMCD';
			   };
			   objItems = [
			               	{caption: 'Sec No.' , name: 'SECT_NO', align: 'left', width: '80', datatype: 'text', align:'center', isMultiLanguage:false, readonly:true},
			               	{caption: 'Bundle수량' , name: 'ORD_NO', align: 'right', width: '100', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '생산량' , name: 'REAL_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               ];
			   break;


		 case '2320_LEFT_TAB_2_1':
			 gridId		= '2320_LEFT_TAB_2_1_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2320_LEFT_TAB_2_1_ITEMCD';
			   };
			   objItems = [
			               	{caption: 'Sec No.' , name: 'SECT_NO', align: 'left', width: '80', datatype: 'text', align:'center', isMultiLanguage:false, readonly:true},
			               	{caption: '대목' , name: 'DAEMOK_FLAG', align: 'left', width: '60', datatype: 'text', align:'center', isMultiLanguage:false, readonly:true},
			               	{caption: 'Order No' , name: 'ORD_NO', align: 'center', width: 'auto', datatype: 'text', align:'center', isMultiLanguage:false, readonly:true},
			               	{caption: '생산량' , name: 'REAL_WGT', align: 'right', width: '100', datatype: 'number', isMultiLanguage:false, readonly:true},
			               ];
			   break;


		 case '2320_RIGHT_TAB_2_0':
			 gridId		= '2320_RIGHT_TAB_2_0_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2320_RIGHT_TAB_2_0_ITEMCD';
			   };
			   objItems = [
			               	{caption: 'Batch No' , name: 'BAT_NO', align: 'left', width: '200', datatype: 'text', align:'center',isMultiLanguage:false, readonly:true},
			               	{caption: 'Section No' , name: 'SECT_NO', align: 'left', width: '200', datatype: 'text', align:'center', isMultiLanguage:false, readonly:true},
			               	{caption: '대목' , name: 'DAEMOK_FLAG', align: 'left', width: '150', datatype: 'text', align:'center', isMultiLanguage:false, readonly:true},
			               	{caption: 'Order No' , name: 'ORD_NO', align: 'center', width: '300', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '생산량' , name: 'REAL_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               ];
			   break;

		 case '2321_LEFT_GRID':
			 gridId		= '2321_LEFT_GRID_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2321_LEFT_GRID_ITEMCD';
			   };
			   objItems = [
			               	{caption: '공장' , name: 'PLANT_NO', align: 'center', width: '100', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '야적위치' , name: 'YARD_LOC_CD', align: 'center', width: '100', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '야적중량' , name: 'REAL_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               ];
			   break;


		 case '2321_RIGHT_GRID':
			 gridId		= '2321_RIGHT_GRID_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2321_RIGHT_GRID_ITEMCD';
			   };
			   objItems = [
//			               	{caption: '번들구분' , name: 'PROD_GRD', align: 'center', width: '100', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '번들구분' , name: 'BUNDLE_FLAG', align: 'center', width: '100', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: 'Lot 번호' , name: 'LOT_NO', align: 'center', width: 'auto', datatype: 'text', isMultiLanguage:false, readonly:true},
//			               	{caption: '등급' , name: 'YARD_COL', align: 'left', width: 'auto', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '등급' , name: 'PROD_GRD', align: 'center', width: 'auto', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '위치번호' , name: 'LOC_NO', align: 'center', width: 'auto', datatype: 'center', isMultiLanguage:false, readonly:true},
			               	{caption: '번들수' , name: 'PROD_CNT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: 'CLINCH' , name: 'CLINCH_FLAG', align: 'center', width: 'auto', datatype: 'checkbox', isMultiLanguage:false, readonly:true},
			               	{caption: '야적중량' , name: 'REAL_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               ];
			   break;

		 case '2322_LEFT_GRID':
			 gridId	= '2322_LEFT_GRID_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2322_LEFT_GRID_ITEMCD';
			   };
			   objItems = [
			               	{caption: '생산일자' , name: 'FISCAL_DT', align: 'center', width: 'auto', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '생산량' , name: 'PROD_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '낱장생산량' , name: 'PCS_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '오류생산량' , name: 'DEFECT_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '총생산량' , name: 'TOTAL_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               ];

			   break;


		 case '2322_RIGHT_GRID':
			 gridId	= '2322_RIGHT_GRID_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2322_RIGHT_GRID_ITEMCD';
			   };
			   objItems = [
			               	{caption: '생산일자' , name: 'FISCAL_DT', align: 'center', width: 'auto', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '생산량' , name: 'PROD_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '낱장생산량' , name: 'PCS_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '오류생산량' , name: 'DEFECT_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '총생산량' , name: 'TOTAL_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               ];

			   break;



		 case '2323_LEFT_GRID':
			 gridId	= '2323_LEFT_GRID_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2323_LEFT_GRID_ITEMCD';
			   };
			   objItems = [
			               	{caption: '생산년도' , name: 'FISCAL_YT', align: 'center', width: 'auto', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '생산월자' , name: 'FISCAL_MT', align: 'center', width: 'auto', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '생산량' , name: 'PROD_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '낱장생산량' , name: 'PCS_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '오류생산량' , name: 'DEFECT_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '총생산량' , name: 'TOTAL_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               ];

			   break;


		 case '2323_RIGHT_GRID':
			 gridId	= '2323_RIGHT_GRID_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2323_RIGHT_GRID_ITEMCD';
			   };
			   objItems = [
			               	{caption: '생산년도' , name: 'FISCAL_YT', align: 'center', width: 'auto', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '생산월자' , name: 'FISCAL_MT', align: 'center', width: 'auto', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '생산량' , name: 'PROD_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '낱장생산량' , name: 'PCS_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '오류생산량' , name: 'DEFECT_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '총생산량' , name: 'TOTAL_WGT', align: 'right', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               ];

			   break;


		 case '2323_RIGHT_GRID':
			 gridId	= '2323_RIGHT_GRID_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2323_RIGHT_GRID_ITEMCD';
			   };
			   objItems = [
			               	{caption: '생산연' , name: 'PROD_YT', align: 'left', width: 'auto', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '생산일자' , name: 'PROD_DT', align: 'left', width: 'auto', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '생산량' , name: 'PROD_WGT', align: 'left', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '낱장생산량' , name: 'PCS_WGT', align: 'left', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '오류생산량' , name: 'ERR_WGT', align: 'left', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '총생산량' , name: 'TOT_WGT', align: 'left', width: 'auto', datatype: 'number', isMultiLanguage:false, readonly:true},
			               ];

			   break;





		case 'TEMP_GRID_SC3120'://SC3120
			 gridId		= 'TEMP_GRID_SC3120_ID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '';
			   };
			   objGrpItems = [
	   				{caption: '수출', name: 'GROUP1', align: 'center'},
					{caption: '내수', name: 'GROUP2', align: 'center'},
				];
			   objItems = [
			               	{caption: '구분' 			, name: 'A'		, width: 200, datatype: 'text', readonly:true,align:'center'},
			               	{caption: '수출준비' 		, name: 'AA'	, width: 170, datatype: 'text', readonly:true,align:'center',group:'GROUP1'},
			               	{caption: '국내운송(수출)' 	, name: 'AAA'	, width: 170, datatype: 'text', readonly:true,align:'center',group:'GROUP1'},
			               	{caption: '선적대기.' 		, name: 'AAAA'	, width: 170, datatype: 'text', readonly:true,align:'center',group:'GROUP1'},
			               	{caption: '항해중' 		, name: 'B'		, width: 170, datatype: 'text', readonly:true,align:'center',group:'GROUP1'},
			               	{caption: '입항' 			, name: 'BB'	, width: 170, datatype: 'text', readonly:true,align:'center',group:'GROUP1'},
			               	{caption: '상차준비' 		, name: 'BBB'	, width: 170, datatype: 'text', readonly:true,align:'center',group:'GROUP2'},
			               	{caption: '상차중' 		, name: 'BBBB'	, width: 170, datatype: 'text', readonly:true,align:'center',group:'GROUP2'},
			               	{caption: '국내운송' 		, name: 'C'		, width: 170, datatype: 'text', readonly:true,align:'center',group:'GROUP2'},
			               	{caption: '도착' 			, name: 'CC'	, width: 170, datatype: 'text', readonly:true,align:'center',group:'GROUP2'},
			               	{caption: '계' 			, name: 'CCC'	, width: 150, datatype: 'text', readonly:true,align:'center'}
			               ];
			   break;

		 case 'TEMP_GRID_2_SC3120'://SC3120
			 gridId		= 'TEMP_GRID_2_SC3120_ID';
			   if(caption_flag){
				   sCaption = '판매원료운송현황';
				   sItemCd = '';
			   };
			   objItems = [
			               	{caption: '제품그룹' 		, name: 'A1'	, width: 80	, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: '제품' 			, name: 'A2'	, width: 80	, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: '판매구분' 		, name: 'A3'	, width: 80	, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: '진행단계' 		, name: 'A4'	, width: 80	, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: '판매오더번호' 	, name: 'A5'	, width: 100, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: '구매자명' 		, name: 'A6'	, width: 150, datatype: 'text'	, readonly:true, align:'left'},
			               	{caption: '인도조건' 		, name: 'A7'	, width: 100, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: '단위' 			, name: 'A8'	, width: 0	, datatype: 'text'	, readonly:true, align:'center', hidden:true},
			               	{caption: '판매물량' 		, name: 'A9'	, width: 100, datatype: 'number', readonly:true, align:'right'},
			               	{caption: 'Packing일자' 	, name: 'A10'	, width: 100, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: '최종목적지' 	, name: 'A11'	, width: 150, datatype: 'text'	, readonly:true, align:'left'},
			               	{caption: '내륙운송차량ID' 	, name: 'A12'	, width: 100, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: '내륙운송운전자' 	, name: 'A13'	, width: 100, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: '이동위치' 		, name: 'A14'	, width: 0	, datatype: 'text'	, readonly:true, align:'center', hidden:true},
			               	{caption: '최종도착일' 	, name: 'A15'	, width: 100, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: '판매등급' 		, name: 'A16'	, width: 100, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: '운전자전화' 	, name: 'A17'	, width: 100, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: '고객사입고여부' 	, name: 'A18'	, width: 100, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: 'IMO번호' 		, name: 'A19'	, width: 100, datatype: 'text'	, readonly:true, align: 'right'},
			               	{caption: '선적업체' 		, name: 'A20'	, width: 100, datatype: 'text'	, readonly:true, align: 'right'},
			               	{caption: 'BL번호' 		, name: 'A21'	, width: 100, datatype: 'text'	, readonly:true, align: 'center'},
			               	{caption: '컨테이너번호' 	, name: 'A22'	, width: 100, datatype: 'text'	, readonly:true, align: 'right'},
			               	{caption: 'ETD' 		, name: 'A23'	, width: 100, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: 'ETA' 		, name: 'A24'	, width: 100, datatype: 'text'	, readonly:true, align: 'right'},
			               	{caption: '목적항입항일' 	, name: 'A25'	, width: 100, datatype: 'text'	, readonly:true, align: 'right'},
			               	{caption: 'CY명' 		, name: 'A26'	, width: 100, datatype: 'text'	, readonly:true, align: 'center'},
			               	{caption: 'CY반출일' 		, name: 'A27'	, width: 100, datatype: 'text'	, readonly:true, align: 'right'},
			               	{caption: '공항도착일' 	, name: 'A28'	, width: 100, datatype: 'text'	, readonly:true, align: 'right'},
			               	{caption: '배송업체명' 	, name: 'A29'	, width: 100, datatype: 'text'	, readonly:true, align: 'center'},
			               	{caption: '항공편번호' 	, name: 'A30'	, width: 100, datatype: 'text'	, readonly:true, align: 'right'},
			               	{caption: '항공출발일' 	, name: 'A31'	, width: 100, datatype: 'text'	, readonly:true, align: 'right'},
			               	{caption: '경유예정일' 	, name: 'A32'	, width: 100, datatype: 'text'	, readonly:true, align: 'center'},
			               	{caption: '경유지' 		, name: 'A33'	, width: 100, datatype: 'text'	, readonly:true, align: 'right'},
			               ];
			   break;

		 case 'G_SC3110'://SC3110
			 gridId		= 'G_SC3110_ID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '';
			   };
			   objGrpItems = [
	   				{caption: '선박', name: 'GROUP1', align: 'center'},
					{caption: '육송', name: 'GROUP2', align: 'center'},
				];
			   objItems = [
			               	{caption: '구분' 		, name: 'ITEM_TP'		, width: 220, datatype: 'text', align:'center', readonly:true},
			               	{caption: '선적전' 	, name: 'BF_LOADING'	, width: 190, datatype: 'text', align:'center', readonly:true, group:'GROUP1'},
			               	{caption: '항해중' 	, name: 'ON_BOARD'		, width: 190, datatype: 'text', align:'center', readonly:true, group:'GROUP1'},
			               	{caption: '입항' 		, name: 'IN_PORT'		, width: 190, datatype: 'text', align:'center', readonly:true, group:'GROUP1'},
			               	{caption: '하역중' 	, name: 'DISCHARGING'	, width: 190, datatype: 'text', align:'center', readonly:true, group:'GROUP1'},
			               	{caption: '하역완료' 	, name: 'AF_DISCHARGING', width: 190, datatype: 'text', align:'center', readonly:true, group:'GROUP1'},
			               	{caption: '납품준비' 	, name: 'READY'			, width: 190, datatype: 'text', align:'center', readonly:true, group:'GROUP2'},
			               	{caption: '운송중' 	, name: 'ON_LOAD'		, width: 190, datatype: 'text', align:'center', readonly:true, group:'GROUP2'},
			               	{caption: '도착' 		, name: 'ARRIVAL'		, width: 190, datatype: 'text', align:'center', readonly:true, group:'GROUP2'},
			               	{caption: '계' 		, name: 'TOTAL'			, width: 150, datatype: 'text', align:'center', readonly:true}
			               ];
			   break;

		 case 'G_SC3110_1'://SC3110
			 gridId		= 'G_SC3110_1_ID';
			   if(caption_flag){
				   sCaption = '구매원료운송현황';
				   sItemCd = '';
			   };
			   objGrpItems = [
				   				{caption: '물량'		, name: 'GROUP_QUANTITY', align: 'center'},
								{caption: '저장일수'	, name: 'GROUP_QTY1'	, align: 'center'},
								{caption: '유가금속'	, name: 'GROUP_QTY2'	, align: 'center'},
								{caption: '불순물'	, name: 'GROUP_QTY3'	, align: 'center'},
								{caption: '조합고려'	, name: 'GROUP_QTY4'	, align: 'center'}
							];

			   objItems = [
			               	{caption: '품목구분' 	, name: 'ITEM_TP'			, align: 'center'	, width: 150, datatype: 'text'	, readonly:true},
			               	{caption: '품목'		, name: 'ITEM_NM'			, align: 'center'	, width: 80	, datatype: 'text'	, readonly:true},
			               	{caption: '운송단계' 	, name: 'PROG_STS'			, align: 'center'	, width: 80	, datatype: 'text'	, readonly:true},
			               	{caption: '차선번호' 	, name: 'SCH_NO'			, align: 'center'	, width: 90	, datatype: 'text'	, readonly:true},
			               	{caption: 'WMT' 	, name: 'ARRVAL_WMT'		, align: 'right'	, width: 80	, datatype: 'number', readonly:true, group: 'GROUP_QUANTITY'},
			               	{caption: 'DMT' 	, name: 'ARRIVAL_DMT'		, align: 'right'	, width: 80	, datatype: 'number', readonly:true, group: 'GROUP_QUANTITY'},
			               	{caption: '공급선' 	, name: 'SUPPLIER_NM'		, align: 'left'		, width: 170, datatype: 'text'	, readonly:true},
			               	{caption: 'IMO번호' 	, name: 'IMO_NO'			, align: 'center'	, width: 100, datatype: 'text'	, readonly:true},
			               	{caption: '선명' 		, name: 'VESSEL_NM'			, align: 'left'		, width: 130, datatype: 'text'	, readonly:true},
			               	{caption: '광종' 		, name: 'MINERAL_TP'		, align: 'center'	, width: 80	, datatype: 'text'	, readonly:true},
			               	{caption: '조합구분' 	, name: 'BLEND_TP'			, align: 'center'	, width: 80	, datatype: 'text'	, readonly:true},
			               	{caption: '도착예정일' , name: 'ARRVAL_SCH_DT'		, align: 'center'	, width: 100, datatype: 'text'	, readonly:true},
			               	{caption: '도착일자' 	, name: 'ARRIVAL_DT'		, align: 'center'	, width: 100, datatype: 'text'	, readonly:true},
			               	{caption: '하역시작일' , name: 'UNLDG_STA_DT'		, align: 'center'	, width: 100, datatype: 'text'	, readonly:true},
			               	{caption: '하역완료일' , name: 'UNLDG_END_DT'		, align: 'center'	, width: 100, datatype: 'text'	, readonly:true},
			               	{caption: '하역위치' 	, name: 'STORE_LOC1'		, align: 'center'	, width: 100, datatype: 'text'	, readonly:true},
			               	{caption: '기준' 		, name: 'STORE_DAYS_BASE'	, align: 'center'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY1'},
			               	{caption: '실적' 		, name: 'STORE_DAYS_RSLT'	, align: 'center'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY1'},
			               	{caption: 'Source' 	, name: 'A17'				, align: 'center'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY2'},
			               	{caption: 'Cu(%)' 	, name: 'A18'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY2'},
			               	{caption: 'Au(g/t)' , name: 'A19'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY2'},
			               	{caption: 'Ag(g/t)' , name: 'A20'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY2'},
			               	{caption: 'Pt(ppm)' , name: 'A21'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY2'},
			               	{caption: 'Pd(ppm)' , name: 'A22'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY2'},
			               	{caption: 'Ni(%)' 	, name: 'A23'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY2'},
			               	{caption: 'As(%)' 	, name: 'A24'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY3'},
			               	{caption: 'Bi(ppm)' , name: 'A25'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY3'},
			               	{caption: 'Sb(ppm)' , name: 'A26'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY3'},
			               	{caption: 'Zn(%)' 	, name: 'A27'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY3'},
			               	{caption: 'Pb(%)' 	, name: 'A28'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY3'},
			               	{caption: 'Sn(%)' 	, name: 'A29'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY3'},
			               	{caption: 'Cd(ppm)' , name: 'A30'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY3'},
			               	{caption: 'F(ppm)' 	, name: 'A31'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY3'},
			               	{caption: 'Cl(ppm)' , name: 'A32'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY3'},
			               	{caption: 'S(%)' 	, name: 'A33'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY4'},
			               	{caption: 'Fe(%)' 	, name: 'A34'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY4'},
			               	{caption: 'SiO2(%)' , name: 'A35'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY4'},
			               	{caption: 'Al2O3(%)', name: 'A36'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY4'},
			               	{caption: 'S/Cu' 	, name: 'A37'				, align: 'right'	, width: 100, datatype: 'text'	, readonly:true, group: 'GROUP_QTY4'},
			               ];
			   break;

		 case 'G_SC2461'://SC2461
			 gridId		= 'G_SC2461_ID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '';
			   };
			   objItems = [
			               	{caption: '판매처' 	, name: 'VENDOR_CD'		, width: 80	, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: '판매처명' 	, name: 'VENDOR_NM'		, width: 200, datatype: 'text'	, readonly:true},
			               	{caption: '납품업체' 	, name: 'SUB_VENDOR_CD'	, width: 80	, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: '납품업체명' , name: 'SUB_VENDOR_NM'	, width: 200, datatype: 'text'	, readonly:true},
			               	{caption: '공장' 		, name: 'LOAD_PLACE'	, width: 60, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: '품목' 		, name: 'ITEM_CD'		, width: 70, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: '품목명' 	, name: 'ITEM_NM'		, width: 200, datatype: 'text'	, readonly:true},
			               	{caption: '총중량' 	, name: 'PCS_WGT'		, width: 100, datatype: 'number', readonly:true}
			               ];
			   break;

		 case 'G_SC2461_1'://SC2461
			 gridId		= 'G_SC2461_1_ID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '';
			   };
			   objItems = [
			               	{caption: '거래처코드' , name: 'VENDOR_CD'		, width: 80	, datatype: 'text'		, readonly:true, align:'center'},
			               	{caption: '거래처명' 	, name: 'VENDOR_NM'		, width: 150, datatype: 'text'		, readonly:true},
			               	{caption: '운송업체' 	, name: 'TRSP_CMP_CD'	, width: 80	, datatype: 'text'		, readonly:true, align:'center'},
			               	{caption: '운송업체명' , name: 'TRSP_CMP_NM'	, width: 150, datatype: 'text'		, readonly:true},
			               	{caption: '품목' 		, name: 'ITEM_CD'		, width: 70	, datatype: 'text'		, readonly:true, align:'center'},
			               	{caption: '품목명' 	, name: 'ITEM_NM'		, width: 150, datatype: 'text'		, readonly:true},
			               	{caption: '차량번호' 	, name: 'CAR_ID'		, width: 100, datatype: 'integer'	, readonly:true},
			               	{caption: '운전자명' 	, name: 'DRIVER_NM'		, width: 80	, datatype: 'text'		, readonly:true},
			               	{caption: '출고일자' 	, name: 'CAR_IN_DT'		, width: 100, datatype: 'text'		, readonly:true, align:'center'},
			               	{caption: '상차시간' 	, name: 'CAR_LOAD_DTM'	, width: 120, datatype: 'text'		, readonly:true, align:'center',hidden:true},
			               	{caption: '상차중량' 	, name: 'LOAD_WGT'		, width: 100, datatype: 'number'	, readonly:true},
			               	{caption: '상차장소' 	, name: 'LOAD_PLACE'	, width: 80	, datatype: 'text'		, readonly:true, align:'center'}
			               ];
			   break;

		 case 'G_SC2464'://SC2464
			 gridId		= 'G_SC2464_ID';
			   if(caption_flag){
				   sCaption = '품목현황';
				   sItemCd = '';
			   };
			   objItems = [
			               	{caption: '품목코드' 	, name: 'ITEM_CD'	, width: 100	, datatype: 'text'	, readonly:true	, align:'center'},
			               	{caption: '품목명' 	, name: 'ITEM_NM'	, width: 200	, datatype: 'text'	, readonly:true	, align:'left'},
			               ];
			   break;

		 case 'G_SC2464_1'://SC2464
			 gridId		= 'G_SC2464_1_ID';
			   if(caption_flag){
				   sCaption = '월별현황';
				   sItemCd = '';
			   };
			   objItems = [
			               	{caption: '출고월' 	, name: 'OUT_MNT'	, width: 150, datatype: 'date'	, readonly:true, align:'center'},
			               	{caption: '거래처코드'	, name: 'VENDOR_CD'	, width: 130, datatype: 'text'	, readonly:true, align:'center'},
			               	{caption: '거래처명' 	, name: 'VENDOR_NM'	, width: 300, datatype: 'text'	, readonly:true, align:'left'},
			               	{caption: '차량대수' 	, name: 'CAR_CNT'	, width: 130, datatype: 'number', readonly:true},
			               	{caption: '총출고중량' , name: 'TOT_WGT'	, width: 130, datatype: 'number', readonly:true},
			               ];
			   break;
			   
			   
			   
			   
		   case '2330_LEFT_GRID': //SC2330
			 gridId	= '2330_LEFT_GRID_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2330_LEFT_GRID_ITEMCD';
			   };
			   objItems = [
                           	{caption: '제품명' , name: 'PROD_NM', align: 'left', width: 'auto', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '위치' , name: 'YARD_LOC_CD', align: 'center', width: '100', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '등급명' , name: 'PROD_GRD', align: 'center', width: '100', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: 'CLINCH' , name: 'CLINCH_FLAG', align: 'center', width: '100', datatype: 'checkbox', isMultiLanguage:false},
			               	{caption: '총중량' , name: 'TOT_WGT', align: 'right', width: '200', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '번들수량' , name: 'BUNDLE_CNT', align: 'right', width: '200', datatype: 'number', isMultiLanguage:false, readonly:true},
			               ];

			   break;



		 case '2330_RIGHT_GRID': //SC2330
			 gridId	= '2330_RIGHT_GRID_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2330_RIGHT_GRID_ITEMCD';
			   };
			   objItems = [
                          	{caption: '제품명' , name: 'PROD_NM', align: 'left', width: 'auto', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '위치' , name: 'YARD_LOC_CD', align: 'center', width: '100', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '등급명' , name: 'PROD_GRD', align: 'center', width: '100', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: 'CLINCH' , name: 'CLINCH_FLAG', align: 'center', width: '100', datatype: 'checkbox', isMultiLanguage:false},
			               	{caption: '총중량' , name: 'TOT_WGT', align: 'right', width: '200', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '번들수량' , name: 'BUNDLE_CNT', align: 'right', width: '200', datatype: 'number', isMultiLanguage:false, readonly:true},
			               ];

			   break;



		 case '2330_BOTTOM_GRID' : //SC2330
				gridId		= '2330_BOTTOM_GRID_GRIDID';
				if(caption_flag){
					sCaption = '';
					sItemCd = '2330_BOTTOM_GRID_ITEMCD';
				};

				 objGrpItems = [
								{caption: '1PLANT', name: 'GROUP_QTY1', align: 'center', isMultiLanguage:false },
								{caption: '2PLANT', name: 'GROUP_QTY2', align: 'center', isMultiLanguage:false },
								{caption: 'TOTAL', name: 'GROUP_QTY3', align: 'center', isMultiLanguage:false },
							];


				objItems = [
                            //{caption: '구분'  , name: 'STOCK_TP',	 	width: '100', datatype: 'text', 	isMultiLanguage:false, align:'center', required:true},
                            {caption: '품목'  , name: 'PROD_NM',	 	width: 'auto', datatype: 'text', 	isMultiLanguage:false, align:'left', required:true},
				            {caption: '등급'   	, name: 'PROD_GRD', 	width: '100'	, datatype: 'number', isMultiLanguage:false, uppercase: true, align:'center' },
				            //{caption: '번들수량'	 	, name: 'TOT_BUNDLE1', 	width: '200'	, datatype: 'number', isMultiLanguage:false, align:'right',group: 'GROUP_QTY1'},
				            {caption: '번들수량'	 	, name: 'BUNDLE_CNT1', 	width: '200'	, datatype: 'number', isMultiLanguage:false, align:'right',group: 'GROUP_QTY1'},
				            {caption: '총중량'   , name: 'TOT_WGT1', 	width: '200'	, datatype: 'number', isMultiLanguage:false, align:'right',group: 'GROUP_QTY1'},
				            {caption: '번들수량'   , name: 'BUNDLE_CNT2', 	width: '200'	, datatype: 'number', isMultiLanguage:false, align:'right',group: 'GROUP_QTY2'},
				            {caption: '총중량'   , name: 'TOT_WGT2', 	width: '200'	, datatype: 'number', isMultiLanguage:false, align:'right',group: 'GROUP_QTY2'},
				            {caption: '번들수량-합계'   , name: 'TOTAL_BUNDLE_CNT', 	width: '200'	, datatype: 'number', isMultiLanguage:false, align:'right',group: 'GROUP_QTY3'},
				            {caption: '총중량-합계'   , name: 'TOTAL_WGT_SUM', 	width: '200'	, datatype: 'number', isMultiLanguage:false, align:'right',group: 'GROUP_QTY3'},

				            ];
				break;



		case '2331_LEFT_GRID': //SC2331
			gridId	= '2331_LEFT_GRID_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2331_LEFT_GRID_ITEMCD';
			   };
			   objItems = [	
                           	{caption: '제품코드' , name: 'PROD_CD', align: 'center', width: '100', datatype: 'text', isMultiLanguage:false, readonly:true},
                           	{caption: '제품명' , name: 'PROD_NM', align: 'left', width: 'auto', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '위치' , name: 'YARD_LOC_CD', align: 'center', width: '100', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '등급명' , name: 'PROD_GRD', align: 'center', width: '100', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: 'CLINCH' , name: 'CLINCH_FLAG', align: 'center', width: '100', datatype: 'checkbox', isMultiLanguage:false},
			               	{caption: '총중량' , name: 'STOCK_WGT', align: 'right', width: '150', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '번들수량' , name: 'BUNDLE_CNT', align: 'right', width: '150', datatype: 'number', isMultiLanguage:false, readonly:true},
			               ];

			   break;



		 case '2331_RIGHT_GRID' : //SC2331
			 gridId	= '2331_RIGHT_GRID_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2331_RIGHT_GRID_ITEMCD';
			   };
			   objItems = [
                          	{caption: '제품코드' , name: 'PROD_CD', align: 'center', width: '100', datatype: 'text', isMultiLanguage:false, readonly:true},
                          	{caption: '제품명' , name: 'PROD_NM', align: 'left', width: 'auto', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '위치' , name: 'YARD_LOC_CD', align: 'center', width: '100', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: '등급명' , name: 'PROD_GRD', align: 'center', width: '100', datatype: 'text', isMultiLanguage:false, readonly:true},
			               	{caption: 'CLINCH' , name: 'CLINCH_FLAG', align: 'center', width: '100', datatype: 'checkbox', isMultiLanguage:false},
			               	{caption: '총중량' , name: 'STOCK_WGT', align: 'right', width: '150', datatype: 'number', isMultiLanguage:false, readonly:true},
			               	{caption: '번들수량' , name: 'BUNDLE_CNT', align: 'right', width: '150', datatype: 'number', isMultiLanguage:false, readonly:true},
			               ];

			   break;



		 case '2331_BOTTOM_GRID' : //SC2331
				gridId		= '2331_BOTTOM_GRID_GRIDID';
				if(caption_flag){
					sCaption = '';
					sItemCd = '2331_BOTTOM_GRID_ITEMCD';
				};

				 objGrpItems = [
								{caption: '1PLANT', name: 'GROUP_QTY1', align: 'center', isMultiLanguage:false },
								{caption: '2PLANT', name: 'GROUP_QTY2', align: 'center', isMultiLanguage:false },
								{caption: 'TOTAL', name: 'GROUP_QTY3', align: 'center', isMultiLanguage:false },
							];


				objItems = [
                            {caption: '구분'  , name: 'STOCK_TP',	 	width: '100', datatype: 'text', 	isMultiLanguage:false, align:'center', required:true},
                            {caption: '품목'  , name: 'PROD_NM',	 	width: 'auto', datatype: 'text', 	isMultiLanguage:false, align:'left', required:true},
				            {caption: '등급'   	, name: 'PROD_GRD', 	width: '80'	, datatype: 'number', isMultiLanguage:false, uppercase: true, align:'center' },
				            {caption: 'CLINCH'	 	, name: 'CLINCH_FALG', 	width: '80'	, datatype: 'checkbox', isMultiLanguage:false, align:'center'},
				            {caption: '번들수량'	 	, name: 'TOT_BUNDLE1', 	width: '200'	, datatype: 'number', isMultiLanguage:false, align:'right',group: 'GROUP_QTY1'},
				            {caption: '총중량'   , name: 'TOT_WGT1', 	width: '200'	, datatype: 'number', isMultiLanguage:false, align:'right',group: 'GROUP_QTY1'},
				            {caption: '번들수량'   , name: 'TOT_BUNDLE2', 	width: '200'	, datatype: 'number', isMultiLanguage:false, align:'right',group: 'GROUP_QTY2'},
				            {caption: '총중량'   , name: 'TOT_WGT2', 	width: '200'	, datatype: 'number', isMultiLanguage:false, align:'right',group: 'GROUP_QTY2'},
				            {caption: '번들수량-합계'   , name: 'TOT_BUNDLE_SUM', 	width: '200'	, datatype: 'number', isMultiLanguage:false, align:'right',group: 'GROUP_QTY3'},
				            {caption: '총중량-합계'   , name: 'TOT_WGT_SUM', 	width: '200'	, datatype: 'number', isMultiLanguage:false, align:'right',group: 'GROUP_QTY3'},

				            ];
				break;
				
				
		 case '2310_GRID': //SC2310
			 gridId		= '2310_GRID_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2310_GRID_ITEMCD';
			   };
			   objItems = [
		            {caption: 'PLANT_NO'	, name: 'PLANT_NO'		, width: '200'  , align:'center'     , datatype: 'text', readonly:true},
		            {caption: 'GRD'			, name: 'GRD'			, width: '200'  , align:'center'     , datatype: 'text', readonly:true},
		            {caption: 'CLINCH'		, name: 'CLINCH'		, width: '200'  , align:'center'     , datatype: 'text', readonly:true},
		            {caption: 'SECT_NO.'	, name: 'SECT_NO'		, width: '200'  , align:'center'     , datatype: 'text', readonly:true},
		            {caption: '생산입고번호'	, name: 'PROD_IN_NO'	, width: '200'  , align:'center'     , datatype: 'text', readonly:true},
		            {caption: '품목코드'		, name: 'ITEM_CD'		, width: '200'  , align:'center'     , datatype: 'text', readonly:true},
		            {caption: '품목명'		, name: 'ITEM_NM'		, width: 'auto' , align:'left'       , datatype: 'text', readonly:true},
		            {caption: 'Lot No.'		, name: 'LOT_NO'		, width: '200'  , align:'center'     , datatype: 'text', readonly:true},
		            {caption: '야적위치'		, name: 'YARD_LOC'		, width: '200'  , align:'center'     , datatype: 'text', isMultiLanguage:false, readonly:true},
		            {caption: '위치번호' 		, name: 'LOC_NO'		, width: '200'  , align:'center'     , datatype: 'text', isMultiLanguage:false, readonly:true},
		            {caption: '계근중량' 		, name: 'INPUT_WGT'		, width: '200'  , align:'right'      , datatype: 'number', isMultiLanguage:false, readonly:true},
			               ];
			   break;
			   
		 case 'G_SC2460': //SC2460
			 gridId		= 'G_SC2460_ID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '';
			   };
			   objItems = [
				           	{caption: '판매처' 	, name: 'VENDOR_CD'		, width: 60, datatype: 'text'	, readonly:true, align: 'center'},
				           	{caption: '판매처명' 	, name: 'VENDOR_NM'		, width: 170, datatype: 'text'	, readonly:true},
				           	{caption: '납품업체' 	, name: 'SUB_VENDOR_CD'	, width: 60, datatype: 'text'	, readonly:true, align: 'center'},
				           	{caption: '납품업체명' , name: 'SUB_VENDOR_NM'	, width: 200, datatype: 'text'	, readonly:true},
				           	{caption: '공장' 		, name: 'PLANT_NO'		, width: 40, datatype: 'text'	, readonly:true, align: 'center'},
				           	{caption: '품목' 		, name: 'ITEM_CD'		, width: 50, datatype: 'text'	, readonly:true, align: 'center'},
				           	{caption: '품목명' 	, name: 'ITEM_NM'		, width: 60, datatype: 'text'	, readonly:true},
				           	{caption: '총중량' 	, name: 'PCS_WGT'		, width: 80, datatype: 'number'	, readonly:true}
			               ];
			   break;
			   
		 case 'G_SC2460_1': //SC2460
			 gridId		= 'G_SC2460_1_ID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '';
			   };
			   objItems = [
				           	{caption: '거래처코드' 	, name: 'VENDOR_CD'		, width: 0	, datatype: 'text'	, readonly:true, hidden:true},
				           	{caption: '거래처명' 		, name: 'VENDOR_NM'		, width: '13%', datatype: 'text'	, readonly:true},
				           	{caption: '운송업체' 		, name: 'TRSP_CMP_CD'	, width: 0	, datatype: 'text'	, readonly:true, hidden:true},
				           	{caption: '운송업체명' 	, name: 'TRSP_CMP_NM'	, width: '13%', datatype: 'text'	, readonly:true},
				           	{caption: '품목' 			, name: 'ITEM_CD'		, width: 0	, datatype: 'text'	, readonly:true, hidden:true},
				           	{caption: '품목명' 		, name: 'ITEM_NM'		, width: '6%'	, datatype: 'text'	, readonly:true},
				           	{caption: '차량번호' 		, name: 'CAR_ID'		, width: '10%', datatype: 'text'	, readonly:true, align: 'center'},
				           	{caption: '운전자명' 		, name: 'DRIVER_NM'		, width: '10%'	, datatype: 'text'	, readonly:true, align: 'center'},
				           	{caption: '출고일자' 		, name: 'CAR_IN_DT'		, width: '12%'	, datatype: 'text'	, readonly:true, align: 'center'},
				           	{caption: '상차시간' 		, name: 'CAR_LOAD_DTM'	, width: '10%', datatype: 'text'	, readonly:true, align: 'center'},
				           	{caption: '상차중량' 		, name: 'LOAD_WGT'		, width: '10%'	, datatype: 'number', readonly:true},
				           	{caption: '상차장소' 		, name: 'PLANT_NO'		, width: '10%'	, datatype: 'text'	, readonly:true, align: 'center'},
				           	{caption: '차량입출고번호' 	, name: 'CAR_INOUT_NO'	, width: 0	, datatype: 'text'	, readonly:true, hidden:true}
			               ];
			   break;
			   
		 case 'G_SC2460_2': //SC2460
			 gridId		= 'G_SC2460_2_ID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '';
			   };
			   objItems = [
				   			{caption: 'Lot번호' 	, name: 'LOT_NO'		, width:150, datatype: 'text'		, readonly:true, align: 'center'},
				   			{caption: '상차중량' 	, name: 'REAL_WGT'		, width:150, datatype: 'number'		, readonly:true},
				   			{caption: '야적순번' 	, name: 'YARD_COL'		, width:150, datatype: 'text'		, readonly:true, align: 'center'},
				   			{caption: '등급' 		, name: 'PROD_GRD'		, width:100, datatype: 'text'		, readonly:true, align: 'center'},
				   			{caption: 'Clinch' 	, name: 'CLINCH_FLAG'	, width:130, datatype: 'checkbox'	, readonly:true},
				   			{caption: '자재코드' 	, name: 'MTRL_CD'		, width:100, datatype: 'text'		, readonly:true, align: 'center'},
			               ];
			   break;   
			   
			   
			   
		 case '2311_GRID': //SC2311
			 gridId		= '2311_GRID_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2311_GRID_ITEMCD';
			   };
			   objItems = [
				   {caption: '등급' , name: 'GRD', align: 'center', width: 'auto', datatype: 'text', readonly:true},
				   {caption: '제품위치' , name: 'PROD_LOC', align: 'center', width: 'auto', datatype: 'text', readonly:true},
				   {caption: '위치번호' , name: 'LOC_NO', align: 'center', width: 'auto', datatype: 'text', readonly:true},
				   {caption: 'Lot 번호' , name: 'LOT_NO', align: 'center', width: 'auto', datatype: 'text', readonly:true},
				   {caption: '품목코드' , name: 'ITEM_CD', align: 'center', width: 'auto', datatype: 'text', readonly:true},
				   {caption: '품목명' , name: 'ITEM_NM', align: 'left', width: 'auto', datatype: 'text', readonly:true},
				   {caption: '입고번호' , name: 'IN_NO', align: 'center', width: 'auto', datatype: 'text', readonly:true},
				   {caption: 'PCS' , name: 'PCS', align: 'right', width: 'auto', datatype: 'number', readonly:true},
				   {caption: '클린칭' , name: 'CLINCH', align: 'center', width: 'auto', datatype: 'checkbox', readonly:true},
				   {caption: '야적중량' , name: 'YARD_WGT', align: 'right', width: 'auto', datatype: 'number', readonly:true},
			               ];
			   break;
			   
		 case 'G_SC2469': //SC2469
			 gridId		= 'G_SC2469_ID';
			   if(caption_flag){
				   sCaption = '출고 현황조회(제품별)';
				   sItemCd = '';
			   };
			   objItems = [
				   {caption: '출고일자'	, name: 'OUT_DT'	, width: 120, datatype: 'date'	, readonly:true, align: 'center'},
				   {caption: '출고일자'	, name: 'CAR_IN_DT'	, width: 120, datatype: 'text'	, readonly:true, hidden:true},
				   {caption: '품목'		, name: 'ITEM_CD'	, width: 100, datatype: 'text'	, readonly:true, align: 'center'},
				   {caption: '제품명'		, name: 'PROD_NM'	, width: 230, datatype: 'text'	, readonly:true, align: 'left'},
				   {caption: '당일입고량'	, name: 'INPUT_WGT'	, width: 100, datatype: 'number', readonly:true, align: 'right'},
				   {caption: '차량대수'	, name: 'CAR_CNT'	, width: 100, datatype: 'number', readonly:true, align: 'right'},
			               ];
			   break;
			   
		 case 'G_SC2469_1': //SC2469
			 gridId		= 'G_SC2469_1_ID';
			   if(caption_flag){
				   sCaption = '출고 현황조회(판매처별)';
				   sItemCd = '';
			   };
			   objItems = [
				   {caption: '출고일자' 	, name: 'OUT_DT'	, width: 120	, datatype: 'text'	, readonly:true, align: 'center'	, hidden:true},
				   {caption: '품목' 		, name: 'ITEM_CD'	, width: 80		, datatype: 'text'	, readonly:true, align: 'center'	, hidden:true},
				   {caption: '제품명' 	, name: 'PROD_NM'	, width: 200	, datatype: 'text'	, readonly:true, align: 'left'		, hidden:true},
				   {caption: '판매처코드' 	, name: 'VENDOR_CD'	, width: 80		, datatype: 'text'	, readonly:true, align: 'center'},
				   {caption: '판매처명' 	, name: 'VENDOR_NM'	, width: 200	, datatype: 'text'	, readonly:true, align: 'left'},
				   {caption: '당일출고량' 	, name: 'OUT_WGT'	, width: 100	, datatype: 'number', readonly:true, align: 'right'},
				   {caption: '차량대수' 	, name: 'CAR_CNT'	, width: 100	, datatype: 'number', readonly:true, align: 'right'},
			               ];
			   break;
			   
		 case 'G_SC2469_2': //SC2469
			 gridId		= 'G_SC2469_2_ID';
			   if(caption_flag){
				   sCaption = '출고 현황조회(납품처별)';
				   sItemCd = '';
			   };
			   objItems = [
				   {caption: '출고일자' 	, name: 'OUT_DT'		, width: 'auto'	, datatype: 'text'	, readonly:true, align: 'center', hidden:true},
				   {caption: '품목' 		, name: 'ITEM_CD'		, width: 'auto'	, datatype: 'text'	, readonly:true, align: 'center', hidden:true},
				   {caption: '제품명' 	, name: 'PROD_NM'		, width: 'auto'	, datatype: 'text'	, readonly:true, align: 'left'	, hidden:true},
				   {caption: '판매처코드' 	, name: 'VENDOR_CD'		, width: 'auto'	, datatype: 'text'	, readonly:true, align: 'center', hidden:true},
				   {caption: '판매처명' 	, name: 'VENDOR_NM'		, width: 'auto'	, datatype: 'text'	, readonly:true, align: 'left'	, hidden:true},
				   {caption: '납품처코드' 	, name: 'SUB_VENDOR_CD'	, width:  80	, datatype: 'text'	, readonly:true, align: 'center'},
				   {caption: '납품처명' 	, name: 'SUB_VENDOR_NM'	, width:  200	, datatype: 'text'	, readonly:true, align: 'left'},
				   {caption: '당일출고량' 	, name: 'OUT_WGT'		, width:  100	, datatype: 'number', readonly:true, align: 'right'},
				   {caption: '차량대수' 	, name: 'CAR_CNT'		, width:  100	, datatype: 'number', readonly:true, align: 'right'},
			               ];
			   break;
			   
			   
			   
		 case '2312_GRID_L': //SC2312
			 gridId		= '2312_GRID_L_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2312_GRID_L_ITEMCD';
			   };
			   objItems = [
				   {caption: 'PROD_IN_NO' , name: 'PROD_IN_NO', align: 'center', width: 'auto', datatype: 'hidden', hidden:true},
				   {caption: '품목명' , name: 'ITEM_NM', align: 'center', width: 'auto', datatype: 'text', readonly:true},
				   {caption: 'Lot번호' , name: 'LOT_NO', align: 'center', width: 'auto', datatype: 'text', readonly:true},
				   {caption: '등급' , name: 'GRD', align: 'center', width: 'auto', datatype: 'text', readonly:true},
				   {caption: '야적위치' , name: 'YARD_LOC', align: 'center', width: 'auto', datatype: 'text', readonly:true},
				   {caption: '야적번호' , name: 'YARD_NO', align: 'center', width: 'auto', datatype: 'text', readonly:true},
				   {caption: 'Pieces' , name: 'PCS', align: 'right', width: 'auto', datatype: 'text', readonly:true},
				   {caption: 'Clinch' , name: 'CLINCH', align: 'center', width: 'auto', datatype: 'checkbox', readonly:true},
				   {caption: '실중량' , name: 'REAL_WGT', align: 'right', width: 'auto', datatype: 'number', readonly:true},
			               ];
			   break;

		 case '2312_GRID_R': //SC2312
			 gridId		= '2312_GRID_R_GRIDID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '2312_GRID_R_ITEMCD';
			   };
			   objItems = [
				   {caption: 'PROD_IN_NO' , name: 'PROD_IN_NO', align: 'center', width: 'auto', datatype: 'hidden', hidden:true},
				   {caption: '품목명' , name: 'ITEM_NM', align: 'center', width: 'auto', datatype: 'text', readonly:true},
				   {caption: 'Lot번호' , name: 'LOT_NO', align: 'center', width: 'auto', datatype: 'text', readonly:true},
				   {caption: '등급' , name: 'GRD', align: 'center', width: 'auto', datatype: 'text', readonly:true},
				   {caption: '야적위치' , name: 'YARD_LOC', align: 'center', width: 'auto', datatype: 'text', readonly:true},
				   {caption: '야적번호' , name: 'YARD_NO', align: 'center', width: 'auto', datatype: 'text', readonly:true},
				   {caption: 'Pieces' , name: 'PCS', align: 'right', width: 'auto', datatype: 'text', readonly:true},
				   {caption: 'Clinch' , name: 'CLINCH', align: 'center', width: 'auto', datatype: 'checkbox', readonly:true},
				   {caption: '실중량' , name: 'REAL_WGT', align: 'right', width: 'auto', datatype: 'number', readonly:true},
			               ];
			   break;
			   
		 case 'G_SC2510': //SC2510
			 gridId		= 'G_SC2510_ID';
			   if(caption_flag){
				   sCaption = '';
				   sItemCd = '';
			   };
			   objItems = [
				   {caption: '입출고일자' 	, name: 'INOUT_DT'		, width: 70	, datatype: 'text'		, readonly:true, align: 'center'},
				   {caption: '판매처' 	, name: 'VENDOR_CD'		, width: 50	, datatype: 'text'		, readonly:true, align: 'center'},
				   {caption: '판매처명' 	, name: 'VENDOR_NM'		, width: 175, datatype: 'text'		, readonly:true, align: 'left'},
				   {caption: '납품처' 	, name: 'SUB_VENDOR_CD'	, width: 50	, datatype: 'text'		, readonly:true, align: 'center'},
				   {caption: '납품처명' 	, name: 'SUB_VENDOR_NM'	, width: 140, datatype: 'text'		, readonly:true, align: 'left'},
				   {caption: '자재코드' 	, name: 'MTRL_CD'		, width: 60	, datatype: 'text'		, readonly:true, align: 'center'},
				   {caption: '품목' 		, name: 'ITEM_CD'		, width: 50	, datatype: 'text'		, readonly:true, align: 'center'},
				   {caption: '품목명' 	, name: 'ITEM_NM'		, width: 130, datatype: 'text'		, readonly:true, align: 'left'},
				   {caption: '차량번호' 	, name: 'CAR_ID'		, width: 90	, datatype: 'text'		, readonly:true, align: 'center'},
				   {caption: '기사명' 	, name: 'DRIVER_NM'		, width: 60	, datatype: 'text'		, readonly:true, align: 'centert'},
				   {caption: '공중량' 	, name: 'EMPTY_WGT'		, width: 45	, datatype: 'number'	, readonly:true, align: 'right'},
				   {caption: '실중량' 	, name: 'REAL_WGT'		, width: 45	, datatype: 'number'	, readonly:true, align: 'right'},
				   {caption: '총중량' 	, name: 'TOT_WGT'		, width: 45	, datatype: 'number'	, readonly:true, align: 'right'},
				   {caption: '입고일시' 	, name: 'IN_TIME'		, width: 130, datatype: 'datetime'	, readonly:true, align: 'center'},
				   {caption: '출고일시' 	, name: 'OUT_TIME'		, width: 130, datatype: 'datetime'	, readonly:true, align: 'center'},
				   {caption: '비고' 		, name: 'REMARK'		, width: 100, datatype: 'text'		, readonly:true, align: 'left'},
				   {caption: '운송회사' 	, name: 'TRSP_CMP_CD'	, width: 60	, datatype: 'text'		, readonly:true, align: 'center'},
				   {caption: '운송회사명' 	, name: 'TRSP_CMP_NM'	, width: 140, datatype: 'text'		, readonly:true, align: 'left'},
				   {caption: '입출고번호' 	, name: 'CAR_INOUT_NO'	, width: 80	, datatype: 'text'		, readonly:true, align: 'center'}
			               ];
			   break;
			   
		 case 'RECEIVER_GRID_4250': //SC4250 POPUP
			 gridId		= 'RECEIVER_GRID_4250_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = 'RECEIVER_GRID_4250_CD';
			 };
			 objItems = [
				 {caption: '수신자번호' , name: 'RECEIVER_PHONE_NO',width: 'auto', datatype: 'text',align: 'left'},
				 ];
			 break;

		 case '2410_GRID': //SC2410
			 gridId		= '2410_GRID_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '2410_GRID_CD';
			 };

			 objItems = [
				 {caption: '오더'			, name: 'MTRL_TP'			,	width: 'auto', datatype: 'text'		,	align: 'center'		,	readonly:true  	,width:100},
				 {caption: '출지번호'		, name: 'DISP_ORD_NO'		,	width: 'auto', datatype: 'text'		,	align: 'center'		,	readonly:true  	,width:150},
				 {caption: '공장'			, name: 'PLANT_NO'			,	width: 'auto', datatype: 'text'		,	align: 'center'		,	readonly:true  	,width:80},
				 {caption: '요청일'		, name: 'DISP_REQ_DT'		,	width: 'auto', datatype: 'text'		,	align: 'center'		,	readonly:true  	,width:100},
				 {caption: '품목'			, name: 'PROD_CD'			,	width: 'auto', datatype: 'text'		,	align: 'center'		,	readonly:true  	,width:80},
				 {caption: '자재코드'		, name: 'MTRL_CD'			,	width: 'auto', datatype: 'text'		,	align: 'center'		,	readonly:true  	,width:100},
				 {caption: '등급'			, name: 'PROD_GRD'			,	width: 'auto', datatype: 'text'		,	align: 'center'		,	readonly:true  	,width:80},
				 {caption: 'Clinch'		, name: 'CLINCH_FLAG'		,	width: 'auto', datatype: 'checkbox'	,	align: 'center'		,	readonly:true  	,width:80},
				 {caption: '요청중량'		, name: 'DISP_ORD_WGT'		,	width: 'auto', datatype: 'number'	,	align: 'right'		,	readonly:true  	,width:200},
				 {caption: '잔량'			, name: 'REMAIN_WGT'		,	width: 'auto', datatype: 'number'	,	align: 'right'		,	readonly:true  	,width:200},
				 {caption: '납품처명'		, name: 'SUB_VENDOR_NM'		,	width: 'auto', datatype: 'text'		,	align: 'left'		,	readonly:true  	,width:300},
				 {caption: '판매처명'		, name: 'VENDOR_NM'			,	width: 'auto', datatype: 'text'		,	align: 'left'		,	readonly:true  	,width:300},
				 {caption: '납품처코드'	, name: 'SUB_VENDOR_CD'		,	width: 'auto', datatype: 'text'		,	align: 'center'		,	readonly:true  	,width:200},
				 {caption: '판매처코드'	, name: 'VENDOR_CD'			,	width: 'auto', datatype: 'text'		,	align: 'center'		,	readonly:true  	,width:200},
				 {caption: '공장비고'		, name: 'MTRL_DESCR'		,	width: 'auto', datatype: 'text'		,	align: 'center'		,	readonly:true  	,width:200},
				 {caption: '오더순번'		, name: 'DISP_ORD_SEQ'		,	width: 'auto', datatype: 'number'	,	align: 'right'		,	readonly:true  	,width:100},
			 ];
			 break;
			 
			 
			 
			 
		 
			 
			 
			 
			 
		 case '2412_GRID': //SC2412
			 gridId		= '2412_GRID_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '2412_GRID_CD';
			 };

			 objGrpItems = [
				 {caption: '검사기관1', name: 'AGENCY1', align: 'center', isMultiLanguage:false },
				 {caption: '검사기관2', name: 'AGENCY2', align: 'center', isMultiLanguage:false },
				 {caption: '검사기관3', name: 'AGENCY3', align: 'center', isMultiLanguage:false },
			 ];

			 objItems = [
				 {caption: '표준일련번호'	, name: 'QLT_STD_SEQ'			,	width: 'auto', datatype: 'number',	align: 'center',	required:true,  maxlength: 8	},
				 {caption: '검사기관코드'	, name: 'INSP_AGENCY_CD'		,	width: 'auto', datatype: 'text'  ,	align: 'center',	required:true,	maxlength: 3	},
				 {caption: '검사기관명'	, name: 'INSP_AGENCY_NM'		,	width: 'auto', datatype: 'text'  ,	align: 'left'  ,	required:true,	maxlength: 50	},
				 {caption: '검사기관유형'	, name: 'INSP_AGENCY_TY'		,	width: 'auto', datatype: 'lov'   ,	align: 'center',	required:true,	maxlength: 1	},

				 {caption: '코드'			, name: 'INSP_AGENCY_CD1'		,	width: 'auto', datatype: 'number',	align: 'center',	required:true, group:'AGENCY1'	},
				 {caption: '약호'	   		, name: 'INSP_AGENCY_ABBR_NM1'	,	width: 'auto', datatype: 'text'  ,	align: 'center',	required:true, group:'AGENCY1'	},
				 {caption: '기관명'    	, name: 'INSP_AGENCY_NM1'		,	width: 'auto', datatype: 'text'  ,	align: 'left'  ,	required:true, group:'AGENCY1'	},
				 {caption: '기관영문명'	, name: 'INSP_AGENCY_ENG_NM1'	,	width: 'auto', datatype: 'lov'   ,	align: 'center',	required:true, group:'AGENCY1'	},

				 {caption: '코드'			, name: 'INSP_AGENCY_CD2'		,	width: 'auto', datatype: 'number',	align: 'center',	required:true, group:'AGENCY2'	},
				 {caption: '약호'	   		, name: 'INSP_AGENCY_ABBR_NM2'	,	width: 'auto', datatype: 'text'  ,	align: 'center',	required:true, group:'AGENCY2'	},
				 {caption: '기관명'    	, name: 'INSP_AGENCY_NM2'		,	width: 'auto', datatype: 'text'  ,	align: 'left'  ,	required:true, group:'AGENCY2'	},
				 {caption: '기관영문명'	, name: 'INSP_AGENCY_ENG_NM2'	,	width: 'auto', datatype: 'lov'   ,	align: 'center',	required:true, group:'AGENCY2'	},

				 {caption: '코드'			, name: 'INSP_AGENCY_CD3'		,	width: 'auto', datatype: 'number',	align: 'center',	required:true, group:'AGENCY3'	},
				 {caption: '약호'	   		, name: 'INSP_AGENCY_ABBR_NM3'	,	width: 'auto', datatype: 'text'  ,	align: 'center',	required:true, group:'AGENCY3'	},
				 {caption: '기관명'    	, name: 'INSP_AGENCY_NM3'		,	width: 'auto', datatype: 'text'  ,	align: 'left'  ,	required:true, group:'AGENCY3'	},
				 {caption: '기관영문명'	, name: 'INSP_AGENCY_ENG_NM3'	,	width: 'auto', datatype: 'lov'   ,	align: 'center',	required:true, group:'AGENCY3'	},


				 {caption: '선급사판정여부'	, name: 'SHIP_ORG_INST_YN'		,	width: 'auto', datatype: 'number',	align: 'center',	required:true,  maxlength: 8	},
				 {caption: '수정자'		, name: 'UPD_USER_ID'			,	width: 'auto', datatype: 'text'  ,	align: 'center',	required:true,	maxlength: 3	},
				 {caption: '수정일'		, name: 'UPD_TM'				,	width: 'auto', datatype: 'text'  ,	align: 'left'  ,	required:true,	maxlength: 50	},
				 {caption: '사용여부'		, name: 'USE_YN'				,	width: 'auto', datatype: 'lov'   ,	align: 'center',	required:true,	maxlength: 1	},
				 {caption: '비고'			, name: 'QLT_REMARKS'			,	width: 'auto', datatype: 'lov'   ,	align: 'center',	required:true,	maxlength: 1	},
			 ];
			 break;
			 
			 
			 
		 case '2413_LEFT_GRID': //SC2413
			 gridId		= '2413_LEFT_GRID_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '2413_LEFT_GRID_CD';
			 };

			 objItems = [
				 {caption: 'key'    , name: 'PLAN_DT'		,	width: '80', datatype: 'text',	align: 'center',	required:true,  maxlength: 8	,hidden:true	},
				 {caption: '일자'		, name: 'PLAN_DT_TXT'	,	width: '80', datatype: 'text',	align: 'center',	required:true,  maxlength: 8	},
				 {caption: '1공장'	, name: 'PLANT1'		,	width: '100', datatype: 'text'  ,	align: 'center',	required:true,	maxlength: 3	},
				 {caption: '2공장'	, name: 'PLANT2'		,	width: '100', datatype: 'text'  ,	align: 'center'  ,	required:true,	maxlength: 50	},
				 {caption: '계'		, name: 'TOT'			,	width: 'auto', datatype: 'text'   ,	align: 'center',	required:true,	maxlength: 1	},
			 ];
			 break;
			 
			 
		 case '2413_RIGHT_TOP_GRID': //SC2413
			 gridId		= '2413_RIGHT_TOP_GRID_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '2413_RIGHT_TOP_GRID_CD';
			 };
			 
			 objItems = [
				 {caption: 'KEY'		, name: 'PLAN_SEQ'		,	width: 'auto', datatype: 'text'    ,	align: 'center', hidden:true},
				 {caption: 'DAY'		, name: 'PLAN_DT'		,	width: 'auto', datatype: 'text'    ,	align: 'center', hidden:true},
				 {caption: '판매처'		, name: 'VENDOR_CD'		,	width: 'auto', datatype: 'text'    ,	align: 'center',	hidden:true	},
				 {caption: '판매처'		, name: 'VENDOR_NM'		,	width: 'auto', datatype: 'popup'   ,	align: 'center',				},
				 {caption: '클린칭'		, name: 'CLINCH_FLAG'		,	width: 'auto', datatype: 'checkbox'   ,	align: 'center',				},
				 {caption: '물량'			, name: 'PLAN_WGT'			,	width: 'auto', datatype: 'number'  ,	align: 'center',				},
				 {caption: '공장'			, name: 'PLANT_NO'			,	width: 'auto', datatype: 'lov'     ,	align: 'center',				},
				 {caption: '등급'			, name: 'PROD_GRD'			,	width: 'auto', datatype: 'lov'     ,	align: 'center',				},
				 {caption: '납품처'		, name: 'SUB_VENDOR_CD'	,	width: 'auto', datatype: 'text'    ,	align: 'center',	hidden:true	},
				 {caption: '납품처'		, name: 'SUB_VENDOR_NM'	,	width: 'auto', datatype: 'popup'   ,	align: 'center',				},
				 {caption: '운송업체'		, name: 'TRSP_CMP_CD'		,	width: 'auto', datatype: 'text'    ,	align: 'center',	hidden:true	},
				 {caption: '운송업체'		, name: 'TRSP_CMP_NM'	,	width: 'auto', datatype: 'popup'   ,	align: 'center',				},
				 {caption: '출발지'		, name: 'TRSP_SECT_CD_STA'		,	width: 'auto', datatype: 'text'    ,	align: 'center',	hidden:true	},
				 {caption: '출발지'		, name: 'TRSP_SECT_NM_STA'	,	width: 'auto', datatype: 'popup'   ,	align: 'center',				},
				 {caption: '도착지'		, name: 'TRSP_SECT_CD_END'	,	width: 'auto', datatype: 'text'    ,	align: 'center',	hidden:true	},
				 {caption: '도착지'		, name: 'TRSP_SECT_NM_END',	width: 'auto', datatype: 'popup'   ,	align: 'center',				},
				 ];
			 
			fc_addDataInGettedLov ( 'PLANT_NO', {code: 'YARD_PLANT_TP', tags: '', alias: ''} );
			fc_addDataInSettingLov( {object: gridId+'.PLANT_NO', code: 'YARD_PLANT_TP' , format: 'V', nullable: true , defval: ''} );
			
			fc_addDataInGettedLov("PROD_GRD", {code : "PROD_GRD_ECC",tags : "MC",alias : ""});
			fc_addDataInSettingLov({object : gridId + ".PROD_GRD",code : "PROD_GRD_ECC",format : "V",nullable : false,defval : ""});
			
			
			//popup
			fc_addCodeList( {object: gridId+'.VENDOR_NM', code: 'MC_2413_VENDOR_LIST'	 , title: '판매처 목록'		, manKey: '', cdParam:'%'});
			fc_addCodeList( {object: gridId+'.SUB_VENDOR_NM', code: 'MC_2413_SUB_VENDOR_LIST'	 , title: '납품처 목록'		, manKey: '', cdParam:'%'});
			fc_addCodeList( {object: gridId+'.TRSP_CMP_NM',	  code: 'MC_2413_MGMT', title: '운송업체 목록'	, manKey: '', setConditon:[{object:'INPUT_VAL1',colNm:'VENDOR_CD'},{object:'INPUT_VAL2',colNm:'SUB_VENDOR_CD'}]});

			
			
			fc_addCodeList( {object: gridId+'.TRSP_SECT_NM_STA',	  code: 'MC_2413_CMP_SE', title: '출발지 목록'	, manKey: '', setConditon:[{object:'INPUT_VAL1',colNm:'TRSP_CMP_CD'}]});
			fc_addCodeList( {object: gridId+'.TRSP_SECT_NM_END',	  code: 'MC_2413_CMP_SE', title: '도착지 목록'	, manKey: '', setConditon:[{object:'INPUT_VAL1',colNm:'TRSP_CMP_CD'}]});
			
			fc_setRequiredInCol ( gridId, [ 'VENDOR_CD','PLAN_WGT','PLANT_NO','PROD_GRD','TRSP_SECT_CD_END'] );
			
	/*		
		 	fc_addCodeList( {object: gridId+'.TRSP_CMP_CD',	  code: 'MC_TRSP_CMP_LIST'	 , title: '판매처 목록'		, manKey: '', cdParam:'%'	, setConditon:[{object:'INPUT_VAL1',colNm:'VENDOR_CD'}, {object:'INPUT_VAL2',colNm:'VENDOR_NM'}] });
   */

			 
			break;
			 
			 
		 case '2413_RIGHT_BOTTOM_GRID': //SC2413
			 gridId		= '2413_RIGHT_BOTTOM_GRID_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '2413_RIGHT_BOTTOM_GRID_CD';
			 };
			 
			 objItems = [
				 {caption: 'key'		, name: 'PLAN_SEQ'		,	width: 'auto', datatype: 'text'    ,	align: 'center',	hidden:true},
				 {caption: '판매처'		, name: 'VENDOR_CD'		,	width: 'auto', datatype: 'text'    ,	align: 'center',	hidden:true},
				 {caption: '판매처'		, name: 'VENDOR_NM'		,	width: 'auto', datatype: 'popup'   ,	align: 'center',},
				 {caption: '1주'  		, name: 'WEEK1'			,	width: 'auto', datatype: 'number'   ,	align: 'center',	},
				 {caption: '2주'  		, name: 'WEEK2'			,	width: 'auto', datatype: 'number'  ,	align: 'center',	},
				 {caption: '3주'  		, name: 'WEEK3'			,	width: 'auto', datatype: 'number'     ,	align: 'center',	},
				 {caption: '4주'  		, name: 'WEEK4'			,	width: 'auto', datatype: 'number'     ,	align: 'center',	},
				 {caption: '5주'  		, name: 'WEEK5'			,	width: 'auto', datatype: 'number'    ,	align: 'center',	hidden:true},
				 {caption: '계'			, name: 'WEEK_SUM'		,	width: 'auto', datatype: 'number'   ,	align: 'center',	readonly:true},
				 ];
			 
			 	fc_addCodeList( {object: gridId+'.VENDOR_NM',	  code: 'MC_2413_VENDOR_LIST'	 , title: '판매처 목록'		, manKey: '', cdParam:'%'	/*, setConditon:[{object:'INPUT_VAL1',colNm:'VENDOR_CD'}, {object:'INPUT_VAL2',colNm:'VENDOR_NM'}]*/ });
			 	fc_setRequiredInCol ( gridId, [ 'VENDOR_CD'] );
			 break;
		case '2413_LEFT_GRID': //SC2413
			 gridId		= '2413_LEFT_GRID_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '2413_LEFT_GRID_CD';
			 };

			 objItems = [
				 {caption: '일자'		, name: 'PLAN_DT'	,	width: 'auto', datatype: 'number',	align: 'center',	required:true,  maxlength: 8	},
				 {caption: '1공장'	, name: 'PLANT1'	,	width: 'auto', datatype: 'text'  ,	align: 'center',	required:true,	maxlength: 3	},
				 {caption: '2공장'	, name: 'PLANT2'	,	width: 'auto', datatype: 'text'  ,	align: 'left'  ,	required:true,	maxlength: 50	},
				 {caption: '계'		, name: 'TOT'		,	width: 'auto', datatype: 'lov'   ,	align: 'center',	required:true,	maxlength: 1	},
			 ];
			 break;
			 
			 
		 case '2413_RIGHT_TOP_GRID': //SC2413
			 gridId		= '2413_RIGHT_TOP_GRID_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '2413_RIGHT_TOP_GRID_CD';
			 };
			 
			 objItems = [
				 {caption: '판매처'		, name: 'VENDOR'		,	width: 'auto', datatype: 'text'    ,	align: 'center',	hidden:true	},
				 {caption: '판매처'		, name: 'VENDOR_NM'		,	width: 'auto', datatype: 'popup'   ,	align: 'center',				},
				 {caption: '클린칭'		, name: 'CLINCH'		,	width: 'auto', datatype: 'check'   ,	align: 'center',				},
				 {caption: '물량'			, name: 'WGT'			,	width: 'auto', datatype: 'number'  ,	align: 'center',				},
				 {caption: '공장'			, name: 'PLANT'			,	width: 'auto', datatype: 'LOV'     ,	align: 'center',				},
				 {caption: '등급'			, name: 'GRD'			,	width: 'auto', datatype: 'LOV'     ,	align: 'center',				},
				 {caption: '납품처'		, name: 'SUB_VENDOR'	,	width: 'auto', datatype: 'text'    ,	align: 'center',	hidden:true	},
				 {caption: '납품처'		, name: 'SUB_VENDOR_NM'	,	width: 'auto', datatype: 'popup'   ,	align: 'center',				},
				 {caption: '운송업체'		, name: 'TRSP_CMP'		,	width: 'auto', datatype: 'text'    ,	align: 'center',	hidden:true	},
				 {caption: '운송업체'		, name: 'TRSP_CMP_NM'	,	width: 'auto', datatype: 'popup'   ,	align: 'center',				},
				 {caption: '출발지'		, name: 'DEP_POS'		,	width: 'auto', datatype: 'text'    ,	align: 'center',	hidden:true	},
				 {caption: '출발지'		, name: 'DEP_POS_NM'	,	width: 'auto', datatype: 'popup'   ,	align: 'center',				},
				 {caption: '도착지'		, name: 'ARRIVAL_POS'	,	width: 'auto', datatype: 'text'    ,	align: 'center',	hidden:true	},
				 {caption: '도착지'		, name: 'ARRIVAL_POS_NM',	width: 'auto', datatype: 'popup'   ,	align: 'center',				},
				 ];
			 break;
			 
			 
		 case '2413_RIGHT_BOTTOM_GRID': //SC2413
			 gridId		= '2413_RIGHT_BOTTOM_GRID_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '2413_RIGHT_BOTTOM_GRID_CD';
			 };
			 
			 objItems = [
				 {caption: '판매처'		, name: 'VENDOR'		,	width: 'auto', datatype: 'text'    ,	align: 'center',	hidden:true},
				 {caption: '판매처'		, name: 'VENDOR_NM'		,	width: 'auto', datatype: 'popup'   ,	align: 'center',	},
				 {caption: '1주'  		, name: 'CLINCH'		,	width: 'auto', datatype: 'check'   ,	align: 'center',	},
				 {caption: '2주'  		, name: 'WGT'			,	width: 'auto', datatype: 'number'  ,	align: 'center',	},
				 {caption: '3주'  		, name: 'PLANT'			,	width: 'auto', datatype: 'LOV'     ,	align: 'center',	},
				 {caption: '4주'  		, name: 'GRD'			,	width: 'auto', datatype: 'LOV'     ,	align: 'center',	},
				 {caption: '5주'  		, name: 'SUB_VENDOR'	,	width: 'auto', datatype: 'text'    ,	align: 'center',	hidden:true},
				 {caption: '계'			, name: 'SUB_VENDOR_NM'	,	width: 'auto', datatype: 'popup'   ,	align: 'center',	},
				 ];
			 break;
			 
		 case 'RK_RMWH_TOP_DIARY_GRID': //SC2110
			 gridId		= 'RK_RMWH_TOP_DIARY_GRID_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '';
			 };
			  objGrpItems = [
	   			{caption: '구분'	, name: 'TP'		, align: 'center' },
	   			{caption: '구분'	, name: 'TP2'		, align: 'center' },
	   			{caption: '공장1', name: 'PLANT1'		, align: 'center', parent: "TP2" },
				{caption: '공장2', name: 'PLANT2'		, align: 'center', parent: "TP2" }
				];
			   
			 objItems = [
				 {caption: 'WRK_DT'	, name: 'WRK_DT'		,	width: 0	, datatype: 'text'   , align: 'center'	,readonly:false, hidden:true},
				 {caption: 'WRK_SEQ', name: 'WRK_SEQ'		,	width: 0	, datatype: 'text'   , align: 'center'	,readonly:false, hidden:true},
				 
				 {caption: '차선'		, name: 'SCH_NO'		,	width: 100	, datatype: 'text'   , align: 'center'	,group: "TP",readonly:false, cellbeginedit: f_cellbeginedit},
				 {caption: '광종'		, name: 'MINERAL_TP'	,	width: 100	, datatype: 'text'   , align: 'center'	,group: "TP",readonly:false, cellbeginedit: f_cellbeginedit},
				 {caption: '홀더'  	, name: 'HOLDER'		,	width: 100	, datatype: 'text'   , align: 'center'	,group: "TP",readonly:false, cellbeginedit: f_cellbeginedit},
				 
				 {caption: '입고량'  	, name: 'IN_WGT'		,	width: 100	, datatype: 'number3', align: 'right'	,readonly:false, cellbeginedit: f_cellbeginedit},
				 
				 {caption: '종료여부' 	, name: 'END_FL'		,	width: 80	, datatype: 'lov'    , align: 'center'	,readonly:false, cellbeginedit: f_cellbeginedit},
				 
				 {caption: 'BIN-1'  , name: 'BIN_1'			,	width: 100	, datatype: 'number3', align: 'right'	,readonly:false, cellbeginedit: f_cellbeginedit, group: "PLANT1"},
				 {caption: 'BIN-2'	, name: 'BIN_2'			,	width: 100	, datatype: 'number3', align: 'right'	,readonly:false, cellbeginedit: f_cellbeginedit, group: "PLANT1"},
				 {caption: 'BIN-F'	, name: 'BIN_F'			,	width: 100	, datatype: 'number3', align: 'right'	,readonly:false, cellbeginedit: f_cellbeginedit, group: "PLANT1"},
				 {caption: '합계'		, name: 'PLANT1_SUM'	,	width: 100	, datatype: 'number3', align: 'right'	,readonly:false, cellbeginedit: f_cellbeginedit, group: "PLANT1"	},
				 
				 {caption: 'BIN-A'  , name: 'BIN_A'			,	width: 100	, datatype: 'number3', align: 'right'	,readonly:false, cellbeginedit: f_cellbeginedit, group: "PLANT2"	},
				 {caption: 'BIN-B'  , name: 'BIN_B'			,	width: 100	, datatype: 'number3', align: 'right'	,readonly:false, cellbeginedit: f_cellbeginedit, group: "PLANT2"	},
				 {caption: 'BIN-C' 	, name: 'BIN_C'			,	width: 100	, datatype: 'number3', align: 'right'	,readonly:false, cellbeginedit: f_cellbeginedit, group: "PLANT2"	},
				 {caption: '합계'  	, name: 'PLANT2_SUM'	,	width: 100	, datatype: 'number3', align: 'right'	,readonly:false, cellbeginedit: f_cellbeginedit, group: "PLANT2"},
				 
				 {caption: 'TOTAL'	, name: 'TOT_SUM'		,	width: 100	, datatype: 'number3', align: 'right'	,readonly:false, cellbeginedit: f_cellbeginedit},
				 {caption: '현재고'	, name: 'CURR_STOCK'	,	width: 100	, datatype: 'number3', align: 'right'	,readonly:false, cellbeginedit: f_cellbeginedit}
				 ];
			 
			 
			 fc_addDataInGettedLov("COM_YN", {code : "COM_YN",tags : "",alias : ""});
			 fc_addDataInSettingLov({object : gridId + ".END_FL",code : "COM_YN",format : "K",nullable : true,defval : ""});
			 
			 break;
			 
		 case 'RK_RMWH_DIARY_TAB1_GRID': //SC2110
			 gridId		= 'RK_RMWH_DIARY_TAB1_GRID_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '';
			 };
			  objGrpItems = [
	   			{caption: '장입시간'		, name: 'CHARGE_TIME'	, align: 'center'},
	   			{caption: 'A Hopper'	, name: 'A_HOP'			, align: 'center'},
	   			{caption: 'B Hopper'	, name: 'B_HOP'			, align: 'center'},
	   			{caption: 'C Hopper'	, name: 'C_HOP'			, align: 'center'},
	   			{caption: 'D Hopper'	, name: 'D_HOP'			, align: 'center'},
	   			{caption: 'E Hopper'	, name: 'E_HOP'			, align: 'center'},
	   			{caption: 'F Hopper'	, name: 'F_HOP'			, align: 'center'},
	   			{caption: 'G Hopper'	, name: 'G_HOP'			, align: 'center'},
	   			{caption: 'Return물'		, name: 'RTN_MTRL'		, align: 'center'},
				];
			   
			 objItems = [
				 {caption: '공장'			, name: 'PLANT_TP'		,	width: 50	, datatype: 'text'    	,	align: 'center'},
				 {caption: 'BIN'		, name: 'BIN_CD'		,	width: 100	, datatype: 'text'    	,	align: 'center'},
				 
				 {caption: '시작'  		, name: 'STA_TIME'		,	width: 50	, datatype: 'hourmin' 	,	align: 'center'	,group: "CHARGE_TIME" },
				 {caption: '종료'  		, name: 'END_TIME'		,	width: 50	, datatype: 'hourmin' 	,	align: 'center'	,group: "CHARGE_TIME" },
				 {caption: '계' 			, name: 'CALC_TIME'		,	width: 50	, datatype: 'number'  	,	align: 'right'	,group: "CHARGE_TIME" },
				 
				 {caption: '광종'  		, name: 'MINERAL_TP_A'	,	width: 60	, datatype: 'text'  	,	align: 'center'	,group: "A_HOP"},
				 {caption: '장입량'		, name: 'CHANGE_WGT_A'	,	width: 100	, datatype: 'number'  	,	align: 'right'	,group: "A_HOP"},
				 
				 {caption: '광종'			, name: 'MINERAL_TP_B'	,	width: 60	, datatype: 'text'  	,	align: 'center'	,group: "B_HOP"},
				 {caption: '장입량'		, name: 'CHANGE_WGT_B'	,	width: 100	, datatype: 'number'  	,	align: 'right'	,group: "B_HOP"	},
				 
				 {caption: '광종'  		, name: 'MINERAL_TP_C'	,	width: 60	, datatype: 'text'  	,	align: 'center'	,group: "C_HOP"	},
				 {caption: '장입량'  		, name: 'CHANGE_WGT_C'	,	width: 100	, datatype: 'number'  	,	align: 'right'	,group: "C_HOP"	},
				 
				 {caption: '광종'  		, name: 'MINERAL_TP_D'	,	width: 60	, datatype: 'text'  	,	align: 'center'	,group: "D_HOP"	},
				 {caption: '장입량'  		, name: 'CHANGE_WGT_D'	,	width: 100	, datatype: 'number'  	,	align: 'right'	,group: "D_HOP"	},
				 
				 {caption: '광종'  		, name: 'MINERAL_TP_E'	,	width: 60	, datatype: 'text'  	,	align: 'center'	,group: "E_HOP"	},
				 {caption: '장입량'  		, name: 'CHANGE_WGT_E'	,	width: 100	, datatype: 'number'  	,	align: 'right'	,group: "E_HOP"	},
				 
				 {caption: '광종'  		, name: 'MINERAL_TP_F'	,	width: 60	, datatype: 'text'  	,	align: 'center'	,group: "F_HOP"	},
				 {caption: '장입량'  		, name: 'CHANGE_WGT_F'	,	width: 100	, datatype: 'number'  	,	align: 'right'	,group: "F_HOP"	},
				 
				 {caption: '광종'  		, name: 'MINERAL_TP_G'	,	width: 60	, datatype: 'text'  	,	align: 'center'	,group: "G_HOP"	},
				 {caption: '장입량'  		, name: 'CHANGE_WGT_G'	,	width: 100	, datatype: 'number'  	,	align: 'right'	,group: "G_HOP"	},
				 
				 {caption: '장입량'  		, name: 'SUM_CHANGE_WGT',	width: 100	, datatype: 'number'  	,	align: 'right'},
				 
				 {caption: 'H'			, name: 'H_WGT'			,	width: 60	, datatype: 'number'  	,	align: 'right'	,group: "RTN_MTRL"	},
				 {caption: 'I'			, name: 'I_WGT'			,	width: 60	, datatype: 'number'  	,	align: 'right'	,group: "RTN_MTRL"	},
				 ];
			 break;
			 
		 case 'RK_RMWH_DIARY_TAB2_GRID': //SC2110
			 gridId		= 'RK_RMWH_DIARY_TAB2_GRID_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '';
			 };
			  objGrpItems = [
	   			{caption: '장입시간'		, name: 'CHARGE_TIME'	, align: 'center'},
	   			{caption: 'A Hopper'	, name: 'A_HOP'			, align: 'center'},
	   			{caption: 'B Hopper'	, name: 'B_HOP'			, align: 'center'},
	   			{caption: 'C Hopper'	, name: 'C_HOP'			, align: 'center'},
	   			{caption: 'D Hopper'	, name: 'D_HOP'			, align: 'center'},
	   			{caption: 'E Hopper'	, name: 'E_HOP'			, align: 'center'},
	   			{caption: 'F Hopper'	, name: 'F_HOP'			, align: 'center'},
	   			{caption: 'G Hopper'	, name: 'G_HOP'			, align: 'center'},
	   			{caption: 'H Hopper'	, name: 'H_HOP'			, align: 'center'},
	   			{caption: 'Return물'		, name: 'RTN_MTRL'		, align: 'center'},
				];
			   
			 objItems = [
				 {caption: '공장'			, name: 'PLANT_TP'		,	width: 50	, datatype: 'text'    	, align: 'center'},
				 {caption: 'BIN'		, name: 'BIN_CD'		,	width: 100	, datatype: 'text'    	, align: 'center'},
				 
				 {caption: '시작'  		, name: 'STA_TIME'		,	width: 50	, datatype: 'hourmin' 	, align: 'center'	, group: "CHARGE_TIME" },
				 {caption: '종료'  		, name: 'END_TIME'		,	width: 50	, datatype: 'hourmin' 	, align: 'center'	, group: "CHARGE_TIME" },
				 {caption: '계' 			, name: 'CALC_TIME'		,	width: 50	, datatype: 'number'  	, align: 'right'	, group: "CHARGE_TIME" },
				 
				 {caption: '광종'  		, name: 'MINERAL_TP_A'	,	width: 60	, datatype: 'text'  	, align: 'center'	, group: "A_HOP"},
				 {caption: '장입량'		, name: 'CHANGE_WGT_A'	,	width: 100	, datatype: 'number'  	, align: 'right'	, group: "A_HOP"},
				 
				 {caption: '광종'			, name: 'MINERAL_TP_B'	,	width: 60	, datatype: 'text'  	, align: 'center'	, group: "B_HOP"},
				 {caption: '장입량'		, name: 'CHANGE_WGT_B'	,	width: 100	, datatype: 'number'  	, align: 'right'	, group: "B_HOP"	},
				 
				 {caption: '광종'  		, name: 'MINERAL_TP_C'	,	width: 60	, datatype: 'text'  	, align: 'center'	, group: "C_HOP"	},
				 {caption: '장입량'  		, name: 'CHANGE_WGT_C'	,	width: 100	, datatype: 'number'  	, align: 'right'	, group: "C_HOP"	},
				 
				 {caption: '광종'  		, name: 'MINERAL_TP_D'	,	width: 60	, datatype: 'text'  	, align: 'center'	, group: "D_HOP"	},
				 {caption: '장입량'  		, name: 'CHANGE_WGT_D'	,	width: 100	, datatype: 'number'  	, align: 'right'	, group: "D_HOP"	},
				 
				 {caption: '광종'  		, name: 'MINERAL_TP_E'	,	width: 60	, datatype: 'text'  	, align: 'center'	, group: "E_HOP"	},
				 {caption: '장입량'  		, name: 'CHANGE_WGT_E'	,	width: 100	, datatype: 'number'  	, align: 'right'	, group: "E_HOP"	},
				 
				 {caption: '광종'  		, name: 'MINERAL_TP_F'	,	width: 60	, datatype: 'text'  	, align: 'center'	, group: "F_HOP"	},
				 {caption: '장입량'  		, name: 'CHANGE_WGT_F'	,	width: 100	, datatype: 'number'  	, align: 'right'	, group: "F_HOP"	},
				 
				 {caption: '광종'  		, name: 'MINERAL_TP_G'	,	width: 60	, datatype: 'text'  	, align: 'center'	, group: "G_HOP"	},
				 {caption: '장입량'  		, name: 'CHANGE_WGT_G'	,	width: 100	, datatype: 'number'  	, align: 'right'	, group: "G_HOP"	},
				 
				 {caption: '광종'  		, name: 'MINERAL_TP_H'	,	width: 60	, datatype: 'text'  	, align: 'center'	, group: "H_HOP"	},
				 {caption: '장입량'  		, name: 'CHANGE_WGT_H'	,	width: 100	, datatype: 'number'  	, align: 'right'	, group: "H_HOP"	},
				 
				 {caption: '장입량'  		, name: 'SUM_CHANGE_WGT',	width: 100	, datatype: 'number'  	, align: 'right'},
				 ];
			 break;
			 
		 case 'RK_PREMTL_TOP_GRID_LIST': //SC2340 , SC2341
			 gridId		= 'RK_PREMTL_TOP_GRID_LIST_ID';
			 if(caption_flag){
				 sCaption = '배차현황';
				 sItemCd = '';
			 };
			   
			 objItems = [
				 {caption: '차량번호'		, name: 'CAR_ID'			,	width: 100	, datatype: 'text'	, align: 'center'},
				 {caption: '기사명'		, name: 'DRIVER_NM'			,	width: 80	, datatype: 'text'	, align: 'center'},
				 {caption: '업체코드'		, name: 'VENDOR_CD'			,	width: 80	, datatype: 'text'	, align: 'center'},
				 {caption: '업체명'		, name: 'VENDOR_NM'			,	width: 170	, datatype: 'text'	, align: 'left'},
				 {caption: '입차일시'		, name: 'CAR_IN_DTM'		,	width: 100	, datatype: 'date'	, align: 'center'},
				 {caption: '출차일시'		, name: 'CAR_OUT_DTM'		,	width: 100	, datatype: 'date'	, align: 'center'},
				 {caption: '차량입출고번호'	, name: 'CAR_INOUT_NO'		,	width: 100	, datatype: 'text'	, align: 'center'},
				 {caption: '부서명'		, name: 'PREMTL_DEPT_NM'	,	width: 170	, datatype: 'text'	, align: 'center'},
				 {caption: '귀금속부서구분'	, name: 'PREMTL_DEPT_TP'	,	width: 0	, datatype: 'text'	, align: 'center', hidden: true}
				 ];
			 break;
			 
		 case 'RK_PREMTL_MID_GRID_LIST_AU': //SC2340 , SC2341
			 gridId		= 'RK_PREMTL_MID_GRID_LIST_AU_ID';
			 if(caption_flag){
				 sCaption = '금지금';//AU
				 sItemCd = '';
			 };
			   
			 objItems = [
				 {caption: '단종코드'		, name: 'BULLION_CD'	,	width: 100	, datatype: 'lov'    	,	align: 'center'},
				 {caption: '단종'			, name: 'BULLION_NM'	,	width: 120	, datatype: 'lov'		,	align: 'center', readonly: true},
				 {caption: '수량'			, name: 'PROD_CNT'		,	width: 80	, datatype: 'number'	,	align: 'left'},
				 {caption: '중량'			, name: 'PROD_WGT'		,	width: 80	, datatype: 'number'	,	align: 'center'},
				 {caption: '단위'			, name: 'UNIT_NM'		,	width: 80	, datatype: 'lov'    	,	align: 'center'},
				 {caption: '수량(Box)'	, name: 'BOX_CNT'		,	width: 90	, datatype: 'number'	,	align: 'center'},
				 {caption: '비고'			, name: 'REMARK'		,	width: 200	, datatype: 'text'		,	align: 'left'},
				 {caption: '상차순번'		, name: 'LOAD_SEQ'		,	width: 0	, datatype: 'number'	,	align: 'center', hidden: true},
				 ];
			 //단종코드
			 fc_addDataInGettedLov("AU_BULLION_CD", {code : "AU_BULLION_CD",tags : "",alias : ""});
			 fc_addDataInSettingLov({object : gridId + ".BULLION_CD", code : "AU_BULLION_CD",format : "V",nullable : true,defval : ""});
			 //단종
			 fc_addDataInGettedLov("AU_BULLION_CD", {code : "AU_BULLION_CD",tags : "",alias : ""});
			 fc_addDataInSettingLov({object : gridId + ".BULLION_NM", code : "AU_BULLION_CD",format : "V",nullable : true,defval : ""});
			 //단위
			 fc_addDataInGettedLov("PREMTL_UNIT_CD", {code : "PREMTL_UNIT_CD",tags : "",alias : ""});
			 fc_addDataInSettingLov({object : gridId + ".UNIT_NM", code : "PREMTL_UNIT_CD",format : "V",nullable : true,defval : ""});
			 
			 fc_setKeysInCol    ( gridId, ['LOAD_SEQ'] );
			 fc_setRequiredInCol( gridId, [ 'BULLION_CD', 'PROD_WGT', 'UNIT_NM'] );
			 break;
			 
		 case 'RK_PREMTL_MID_GRID_LIST_AG': //SC2340 , SC2341
			 gridId		= 'RK_PREMTL_MID_GRID_LIST_AG_ID';
			 if(caption_flag){
				 sCaption = '은지금';//AG
				 sItemCd = '';
			 };
			   
			 objItems = [
				 {caption: '단종코드'		, name: 'BULLION_CD'	,	width: 100	, datatype: 'lov'   	,	align: 'center'},
				 {caption: '단종'			, name: 'BULLION_NM'	,	width: 120	, datatype: 'lov'    	,	align: 'center', readonly: true},
				 {caption: '수량'			, name: 'PROD_CNT'		,	width: 80	, datatype: 'number'	,	align: 'left'},
				 {caption: '중량'			, name: 'PROD_WGT'		,	width: 80	, datatype: 'number'	,	align: 'center'},
				 {caption: '단위'			, name: 'UNIT_NM_'		,	width: 80	, datatype: 'lov'    	,	align: 'center'},
				 {caption: '수량(Box)'	, name: 'BOX_CNT'		,	width: 90	, datatype: 'number'	,	align: 'center'},
				 {caption: '비고'			, name: 'REMARK'		,	width: 200	, datatype: 'text'		,	align: 'left'},
				 {caption: '상차순번'		, name: 'LOAD_SEQ'		,	width: 0	, datatype: 'number'	,	align: 'center', hidden: true},
				 ];
			 //단종코드
			 fc_addDataInGettedLov("AG_BULLION_CD", {code : "AG_BULLION_CD",tags : "",alias : ""});
			 fc_addDataInSettingLov({object : gridId + ".BULLION_CD", code : "AG_BULLION_CD",format : "V",nullable : true,defval : ""});
			 //단종
			 fc_addDataInGettedLov("AG_BULLION_CD", {code : "AG_BULLION_CD",tags : "",alias : ""});
			 fc_addDataInSettingLov({object : gridId + ".BULLION_NM", code : "AG_BULLION_CD",format : "V",nullable : true,defval : ""});
			 //단위
			 fc_addDataInGettedLov("PREMTL_UNIT_CD", {code : "PREMTL_UNIT_CD",tags : "",alias : ""});
			 fc_addDataInSettingLov({object : gridId + ".UNIT_NM_", code : "PREMTL_UNIT_CD",format : "V",nullable : true,defval : ""});
			 
			 fc_setKeysInCol    ( gridId, ['LOAD_SEQ'] );
			 fc_setRequiredInCol( gridId, [ 'BULLION_CD', 'PROD_WGT', 'UNIT_NM'] );
			 break;
			 
		 case 'RK_PREMTL_MID_GRID_LIST_ZZ': //SC2340 , SC2341
			 gridId		= 'RK_PREMTL_MID_GRID_LIST_ZZ_ID';
			 if(caption_flag){
				 sCaption = '기타지금';//ZZ
				 sItemCd = '';
			 };
			   
			 objItems = [
				 {caption: '단종코드'		, name: 'BULLION_CD'	,	width: 100	, datatype: 'lov'    	,	align: 'center'},
				 {caption: '단종'			, name: 'BULLION_NM'	,	width: 120	, datatype: 'lov'    	,	align: 'center', readonly: true},
				 {caption: '수량'			, name: 'PROD_CNT'		,	width: 80	, datatype: 'number'	,	align: 'left'},
				 {caption: '중량'			, name: 'PROD_WGT'		,	width: 80	, datatype: 'number'	,	align: 'center'},
				 {caption: '단위'			, name: 'UNIT_NM'		,	width: 80	, datatype: 'lov'		,	align: 'center'},
				 {caption: '수량(Box)'	, name: 'BOX_CNT'		,	width: 90	, datatype: 'number'	,	align: 'center'},
				 {caption: '비고'			, name: 'REMARK'		,	width: 200	, datatype: 'text'		,	align: 'left'},
				 {caption: '상차순번'		, name: 'LOAD_SEQ'		,	width: 0	, datatype: 'number'	,	align: 'center', hidden: true},
				 ];
			 //단종코드
			 fc_addDataInGettedLov("ETC_BULLION_CD", {code : "ETC_BULLION_CD",tags : "",alias : ""});
			 fc_addDataInSettingLov({object : gridId + ".BULLION_CD", code : "ETC_BULLION_CD",format : "V",nullable : true,defval : ""});
			 //단종
			 fc_addDataInGettedLov("ETC_BULLION_CD", {code : "ETC_BULLION_CD",tags : "",alias : ""});
			 fc_addDataInSettingLov({object : gridId + ".BULLION_NM", code : "ETC_BULLION_CD",format : "V",nullable : true,defval : ""});
			 //단위
			 fc_addDataInGettedLov("PREMTL_UNIT_CD", {code : "PREMTL_UNIT_CD",tags : "",alias : ""});
			 fc_addDataInSettingLov({object : gridId + ".UNIT_NM", code : "PREMTL_UNIT_CD",format : "V",nullable : true,defval : ""});
			 
			 fc_setKeysInCol    ( gridId, ['LOAD_SEQ'] );
			 fc_setRequiredInCol( gridId, [ 'BULLION_CD', 'PROD_WGT', 'UNIT_NM'] );
			 break;
			 
			 
			 
			 
		 case '2420_GRID_T': //SC2420
			 gridId		= '2420_GRID_T_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '2420_GRID_T_CD';
			 };


			 objItems = [
				 {caption: 'dummy'			, name: 'DUMMY'					,	width: '100', datatype: 'text'			,	align: 'center'		,	readonly:true, hidden:true 	},
				 {caption: '출지번호'			, name: 'DISP_ORD_NO'			,	width: 'auto', datatype: 'text'			,	align: 'center'												},
				 {caption: '판매처'			, name: 'VENDOR_CD'				,	width: '100', datatype: 'popup'			,	align: 'center'		,	required:true  						},
				 {caption: '판매처명'			, name: 'VENDOR_NM'				,	width: '200', datatype: 'text'			,	align: 'left'		,	required:true	,	readonly:true											},
				 {caption: '납품처'			, name: 'SUB_VENDOR_CD'			,	width: '100', datatype: 'popup'			,	align: 'center'		,	required:true  						},
				 {caption: '납품처명'			, name: 'SUB_VENDOR_NM'			,	width: '200', datatype: 'text'			,	align: 'left'		,	required:true	,	readonly:true											},
				 {caption: '품목'				, name: 'ITEM_CD'				,	width: '80', datatype: 'popup'			,	align: 'center'		,	required:true						},
				 {caption: '품목명'			, name: 'ITEM_NM'				,	width: '150', datatype: 'text'			,	align: 'left'		,	required:true	,	readonly:true						    				},
				 {caption: '등급'				, name: 'PROD_GRD'				,	width: '100', datatype: 'lov'			,	align: 'center'		,	required:true											},
				 {caption: '공장'				, name: 'PLANT_NO'				,	width: '80', datatype: 'lov'			,	align: 'center'		,	required:true											},
				 {caption: '중량'				, name: 'CAR_LOAD_WGT'			,	width: '120', datatype: 'number'		,	align: 'right'		,	required:true						,maxlength: 8		},
				 {caption: '미배분중량'		, name: 'DIFF_WGT'				,	width: '120', datatype: 'number'		,	align: 'right'		,	readonly:true  						},
				 {caption: '상차일자'			, name: 'CAR_LOAD_DT'			,	width: '120', datatype: 'date'			,	align: 'center'		,	required:true											},
				 {caption: '상태'				, name: 'CAR_LOAD_END_FLAG'		,	width: '100', datatype: 'text'			,	align: 'center'		,	readonly:true  						},
				 {caption: '상차코드'			, name: 'CAR_LOAD_CD'			,	width: '150', datatype: 'text'			,	align: 'center'		,	readonly:true /*, hidden:true*/  						},
				 {caption: '출하오더순번'		, name: 'DISP_ORD_SEQ'			,	width: '100', datatype: 'number'		,	align: 'center'		,	readonly:true , hidden:true  						},
				 {caption: ''		, name: 'CAR_LOAD_END_FLAG_CD'		,	width: '100', datatype: 'text'			,	align: 'center'		,	readonly:true , hidden:true	},
				 
			 ];
			 
			 	fc_addCodeList( {object: gridId+'.VENDOR_CD',	  code: 'MC_VENDOR_LIST'	 , title: '판매처 목록'		, manKey: '', cdParam:'%'	/*, setConditon:[{object:'INPUT_VAL1',colNm:'VENDOR_CD'}, {object:'INPUT_VAL2',colNm:'VENDOR_NM'}]*/ });
			 	
			 	fc_addCodeList( {object: gridId+'.SUB_VENDOR_CD',	  code: 'MC_SUB_VENDOR_LIST'	 , title: '납품처 목록'		, manKey: '', cdParam:'%'	/*, setConditon:[{object:'INPUT_VAL1',colNm:'VENDOR_CD'}, {object:'INPUT_VAL2',colNm:'VENDOR_NM'}]*/ });
			 	
			 	
			 	fc_addCodeList( {object: gridId+'.ITEM_CD'	, code: 'MC_ITEM_LIST' , title: '품목 선택'	, manKey: '', cdParam: '' });
			 	
			 	
				fc_addDataInGettedLov("PROD_GRD", {code : "PROD_GRD_ECC",tags : "MC",alias : ""});
				fc_addDataInSettingLov({object : gridId + ".PROD_GRD",code : "PROD_GRD_ECC",format : "V",nullable : false,defval : ""});
				
				fc_addDataInGettedLov("PLANT_NO", {code : "YARD_PLANT_TP",tags : "",alias : ""});
				fc_addDataInSettingLov({object : gridId + ".PLANT_NO",code : "YARD_PLANT_TP",format : "V",nullable : false,defval : ""});
			 break;
			 
		 case '2420_GRID_B': //SC2420	
			 gridId		= '2420_GRID_B_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '2420_GRID_B_CD';
			 };


			 objItems = [
				 {caption: '운송업체'			, name: 'TRSP_CMP_CD'			,	width: 'auto', datatype: 'popup'	,	align: 'center'		,	required:true						        	},
				 {caption: '운송업체명'		, name: 'TRSP_CMP_NM'			,	width: 'auto', datatype: 'text'		,	align: 'left'		,	required:true		,	readonly:true						        	},
				 {caption: '중량'			    , name: 'CAR_LOAD_WGT'			,	width: 'auto', datatype: 'number'	,	align: 'right'		,	required:true								,	maxlength: 8		    },
				 {caption: '운송구간(출발지)'	, name: 'TRSP_SECT_CD_STA'		,	width: 'auto', datatype: 'text'		,	align: 'left'		,	required:true		,	readonly:true       	},
				 {caption: '운송구간(출발지)'	, name: 'TRSP_SECT_NM_STA'		,	width: 'auto', datatype: 'lov'		,	align: 'left'		,	required:true						        	},
				 {caption: '운송구간(도착지)'	, name: 'TRSP_SECT_CD_END'		,	width: 'auto', datatype: 'text'		,	align: 'left'		,	required:true		,	readonly:true       	},
				 {caption: '운송구간(도착지)'	, name: 'TRSP_SECT_NM_END'		,	width: 'auto', datatype: 'lov'		,	align: 'left'		,	required:true						        	},
				 {caption: '상차코드'			, name: 'CAR_LOAD_CD'			,	width: 'auto', datatype: 'text'		,	align: 'center'		                        ,	readonly:true       	},
				 {caption: '상차순번'			, name: 'CAR_LOAD_SEQ'			,	width: 'auto', datatype: 'text'		,	align: 'right'		                        ,	readonly:true       	},
			 ];
			 
			 	//fc_setRequiredInCol( gridId, [ 'TRSP_CMP_CD','CAR_LOAD_WGT','TRSP_SECT_NM_STA', 'TRSP_SECT_NM_END', 'WRK_TP', 'WRKER_NM'] );
			 	
			 	fc_addCodeList( {object: gridId+'.TRSP_CMP_CD',	  code: 'MC_TRSP_CMP_LIST'	 , title: '판매처 목록'		, manKey: '', cdParam:'%'	/*, setConditon:[{object:'INPUT_VAL1',colNm:'VENDOR_CD'}, {object:'INPUT_VAL2',colNm:'VENDOR_NM'}]*/ });
			 	
				fc_addDataInGettedLov("TRSP_SECT_NM_STA", {code : "MC_TRSP_SECT_LIST",tags : "",alias : ""});
				fc_addDataInSettingLov({object : gridId + ".TRSP_SECT_NM_STA",code : "MC_TRSP_SECT_LIST",format : "V",nullable : false,defval : ""});
				
				fc_addDataInGettedLov("TRSP_SECT_NM_END", {code : "MC_TRSP_SECT_LIST",tags : "",alias : ""});
				fc_addDataInSettingLov({object : gridId + ".TRSP_SECT_NM_END",code : "MC_TRSP_SECT_LIST",format : "V",nullable : false,defval : ""});


			 break;
		
		 case 'CAR_IN_MGMT' : //SC1443
			 gridId = 'gridCarInMgmt';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = 'CAP_CAR_IN_MGMT';
			 };
			 objItems = [
				{caption: '거래처',			name:'VENDOR_CD',		width: 120, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				{caption: '거래처명',			name:'VENDOR_NM',		width: 240, datatype:'text',	isMultiLanguage:false, readonly:true},
				{caption: '품목',				name:'ITEM_CD',			width: 120, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				{caption: '품목명',			name:'ITEM_NM',			width: 200, datatype:'text',	isMultiLanguage:false, readonly:true },
				{caption: '차량번호',			name:'CAR_ID',			width: 150, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				{caption: '실중량(kg)',		name:'EMPTY_WGT',		width: 120, datatype:'number',	isMultiLanguage:false, readonly:true},
				{caption: '입차시간',			name:'CAR_IN_DTM',		width: 136, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				{caption: '출차시간',			name:'CAR_OUT_DTM',		width: 136, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				{caption: '차선번호',			name:'SCH_NO',			width: 150, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				{caption: '컨테이너번호',		name:'CONTAINER_NO',	width: 150, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				{caption: '입고번호',			name:'CAR_INOUT_NO',	width: 150, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				{caption: '중복',				name:'DUP_YN',			width: 120, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				{caption: '',				name:'CAR_IN_SEQ',		width: 0, datatype:'text',	isMultiLanguage:false, hidden:true},
			 ];
			 break;
			 
		 case 'CAR_IN_MONTH_MGMT' : //SC1444
			 gridId = 'gridIdCarInMonthMgmt';
			 if(caption_flag){
				 sCaption ='품목현황';
				 sItemCd ='CAP_CAR_IN_MONTH_MGMT';
			 };
			 objItems = [
				{caption: '품목코드', 	name:'ITEM_CD',	width: 118, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				{caption: '품목명',	name:'ITEM_NM',	width: 200, datatype:'text',	isMultiLanguage:false, readonly:true},
			 ];
			 break;
			 
		 case 'CAR_IN_MONTH_DTL' : //SC1444
			 gridId = 'gridIdCarInMonthDtl';
			 if(caption_flag){
				 sCaption ='월별현황';
				 sItemCd ='CAP_CAR_IN_MONTH_DTL';
			 };
			 objItems = [
					{caption: '입고월', 			name:'IN_MNT',		width: 250, datatype:'date',	isMultiLanguage:false, readonly:true},
					{caption: '거래처코드',		name:'VENDOR_CD',	width: 250, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '거래처명',			name:'VENDOR_NM',	width: 350, datatype:'text',	isMultiLanguage:false, readonly:true},
					{caption: '차량수',			name:'CAR_CNT',		width: 100, datatype:'number',	isMultiLanguage:false, readonly:true},
					{caption: '총입고총량(kg)',	name:'TOT_WGT',		width: 250, datatype:'number',	isMultiLanguage:false, readonly:true},
				 ];
			  break;
			  
		 case 'CAR_IN_ITEM_MGMT' : //SC1440
			 gridId = 'gridCarInItemMgmt';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = 'CAP_CAR_IN_ITME_MGMT';
			 };
			 objItems = [
				{caption: '품목',			name:'ITEM_CD',		width: 100, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				{caption: '품목명',		name:'ITEM_NM',		width: 200, datatype:'text',	isMultiLanguage:false, readonly:true},
				{caption: '거래처',		name:'VENDOR_CD',	width: 100, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				{caption: '거래처명',		name:'VENDOR_NM',	width: 200, datatype:'text',	isMultiLanguage:false, readonly:true},
				{caption: '차량대수',		name:'CAR_CNT',		width: 100, datatype:'number',	isMultiLanguage:false, readonly:true},
				{caption: '실중량(kg)',	name:'IN_WGT',		width: 95, 	datatype:'number',	isMultiLanguage:false, readonly:true},
			 ];
			 break;
		
		 case 'CAR_IN_ITEM_MGMT_DTL' : //SC1440
			 gridId = 'gridCarInItemMgmtDtl';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = 'CAP_CAR_IN_ITEM_MGMT_DTL';
			 };
			 objItems = [
				{caption: '입고일자',		name:'IN_DT',			width: 150, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				{caption: '차량번호',		name:'CAR_NO',			width: 120, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				{caption: '기사명',		name:'DRIVER_NM',		width: 110, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				{caption: '총중량(kg)',	name:'TOT_WGT',			width: 120, datatype:'number',	isMultiLanguage:false, readonly:true},
				{caption: '실중량(kg)',	name:'REAL_WGT',		width: 120, datatype:'number',	isMultiLanguage:false, readonly:true},
				{caption: '공중량(kg)',	name:'EMPTY_WGT',		width: 120, datatype:'number',	isMultiLanguage:false, readonly:true},
				{caption: '입고시간',		name:'IN_TIME',			width: 120, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				{caption: '출고시간',		name:'OUT_TIME',		width: 120, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
			 ];
			 break;
			 
	
		
		 case 'CAR_IN_ITEM_1445' : //SC1445
			 gridId = 'gridIdCarInMonthMgmt';
			 if(caption_flag){
				 sCaption ='품목현황';
				 sItemCd ='CAP_CAR_IN_MONTH_MGMT';
			 };
			 objItems = [
				{caption: 'CHECK', 	name:'CHECK_ITEM', 	width: 50, 	datatype:'checkbox', 	isMultiLanguage:false, },
				{caption: '품목코드', 	name:'ITEM_CD',		width: 100, datatype:'text',		isMultiLanguage:false, readonly:true, align:'center'},
				{caption: '품목명',	name:'ITEM_NM',		width: 215, datatype:'text',		isMultiLanguage:false, readonly:true},
			 ];
			 break;
			 
		 case 'CAR_IN_DT_ITEM': //SC1445
			 gridId = 'gridCarInDtItem';
			 if(caption_flag){
				 sCaption = '기간별 품목 집계';
				 sItemCd = 'CAP_CAR_IN_DT_ITEM';
			 };
			 objItems = [
					{caption: '코드',		name:'ITEM_CD',		width: 100, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '코드명',	name:'ITEM_NM',		width: 192, datatype:'text',	isMultiLanguage:false, readonly:true},
					{caption: '물량',		name:'REAL_WGT',	width: 100, datatype:'number',	isMultiLanguage:false, readonly:true},
				 ];
				 break;
				 
		 case 'CAR_IN_DT_ITEM_DTL': //SC1445
			 gridId = 'gridCarInDtItemDtl';
			 if(caption_flag){
				 sCaption = '총 입고량 조회(품목별)';
				 sItemCd = 'CAP_CAR_IN_DT_ITEM_DTL';
			 };
			 objItems = [
					{caption: '입고일자',		name:'IN_DT',		width: 100, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '거래처',		name:'VENDOR_CD',	width: 100, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '거래처명',		name:'VENDOR_NM',	width: 190, datatype:'text',	isMultiLanguage:false, readonly:true},
					{caption: '실중량',		name:'REAL_WGT',	width: 100, datatype:'number',	isMultiLanguage:false, readonly:true},
				 ];
				 break;
				 
		 case 'CAR_IN_DT_TOT_ITEM': //SC1446
			 gridId = 'gridCarInDtTotItem';
			 if(caption_flag){
				 sCaption = '총 입고량 조회(거래처별)';
				 sItemCd = 'CAP_CAR_IN_DT_TOT_ITEM';
			 };
			 objItems = [
					{caption: '입고일자',		name:'IN_DT',		width: 100, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '품목',			name:'ITEM_CD',		width: 100, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '품목명',		name:'ITEM_NM',		width: 163, datatype:'text',	isMultiLanguage:false, readonly:true,},
					{caption: '당일입고량',	name:'REAL_WGT',	width: 100, datatype:'number',	isMultiLanguage:false, readonly:true,},
					{caption: '차량수',		name:'CAR_CNT',		width: 80, datatype:'number',	isMultiLanguage:false, readonly:true,},
				 ];
				 break;
		
		 case 'CAR_IN_DT_TOT_VENDOR': //SC1446
			 gridId = 'gridCarInDtTotVendor';
			 if(caption_flag){
				 sCaption = '총 입고량 조회(차량별)';
				 sItemCd = 'CAP_CAR_IN_DT_TOT_VENDOR';
			 };
			 objItems = [
				 	{caption: '입고일자',		name:'ITEM_CD',		width: 0, 	datatype:'text',	isMultiLanguage:false, readonly:true, hidden:true},
				 	{caption: '입고일자',		name:'IN_DT',		width: 0, 	datatype:'text',	isMultiLanguage:false, readonly:true, hidden:true},
					{caption: '거래처코드',	name:'VENDOR_CD',	width: 143, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '거래처명',		name:'VENDOR_NM',	width: 185, datatype:'text',	isMultiLanguage:false, readonly:true,},
					{caption: '당일입고량',	name:'IN_WGT',		width: 122, datatype:'number',	isMultiLanguage:false, readonly:true,},
					{caption: '차량수',		name:'CAR_CNT',		width: 92,  datatype:'number',	isMultiLanguage:false, readonly:true,},
				 ];
				 break;
				 
		 case 'CAR_IN_DT_TOT': //SC1446
			 gridId = 'gridCarInDtTot';
			 if(caption_flag){
				 sCaption = '집계 세부 사항';
				 sItemCd = 'CAP_CAR_IN_DT_TOT';
			 };
			 objItems = [
					{caption: '차량번호',		name:'CAR_NO',		width: 150, datatype:'text',	isMultiLanguage:false, readonly:true,  align:'center'},
					{caption: '기사명',		name:'DRIVER_NM',	width: 120, datatype:'text',	isMultiLanguage:false, readonly:true,  align:'center'},
					{caption: '1차계근량',		name:'TOT_WGT',		width: 100, datatype:'number',	isMultiLanguage:false, readonly:true,},
					{caption: '실상차량',		name:'REAL_WGT',	width: 100, datatype:'number',	isMultiLanguage:false, readonly:true,},
					{caption: '공차중량',		name:'EMPTY_WGT',	width: 100, datatype:'number',	isMultiLanguage:false, readonly:true,},
					{caption: '입차시간',		name:'IN_TIME',		width: 120, datatype:'text',	isMultiLanguage:false, readonly:true,  align:'center'},
					{caption: '출차시간',		name:'OUT_TIME',	width: 120, datatype:'text',	isMultiLanguage:false, readonly:true,  align:'center'},
				 ];
				 break;

		 case '2430_GRID_T': //SC2430
			 gridId		= '2430_GRID_T_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '2430_GRID_T_CD';
			 };


			 objItems = [
				 {caption: '공장'				, name: 'plant_no'					,	width: '150', datatype: 'text'			,	align: 'center'		,	readonly:true, hidden:true},
				 {caption: '출고번호'			, name: 'car_inout_no'				,	width: '150', datatype: 'text'			,	align: 'center'		,	readonly:true},
				 {caption: '차량번호'			, name: 'car_id'					,	width: '150', datatype: 'text'			,	align: 'center'		,	readonly:true},
				 {caption: '기사명'			, name: 'driver_nm'					,	width: '80', datatype: 'text'			,	align: 'center'		,	readonly:true},
				 {caption: '입고시간'			, name: 'car_in_time'				,	width: '100', datatype: 'text'			,	align: 'center'		,	readonly:true},
				 {caption: '공차중량'			, name: 'empty_wgt'					,	width: '100', datatype: 'number'		,	align: 'right'		,	readonly:true},
				 {caption: '상차유무'			, name: 'load_yn'					,	width: '80', datatype: 'checkbox'		,	align: 'center'		,	readonly:true},
				 {caption: 'Max중량'			, name: 'max_wgt'					,	width: '150', datatype: 'number'		,	align: 'right'		,	readonly:true},
				 {caption: '품목'			    , name: 'item_cd'					,	width: '50', datatype: 'text'			,	align: 'center'		,	readonly:true},
				 {caption: '품목명'			, name: 'item_nm'					,	width: '80', datatype: 'text'			,	align: 'center'		,	readonly:true},
				 {caption: '판매처'			, name: 'vendor_cd'					,	width: '100', datatype: 'text'			,	align: 'center'		,	readonly:true},
				 {caption: '판매처명'			, name: 'vendor_nm'					,	width: '200', datatype: 'text'			,	align: 'left'		,	readonly:true},
				 {caption: '납품처'			, name: 'sub_vendor_cd'				,	width: '100', datatype: 'text'			,	align: 'center'		,	readonly:true},
				 {caption: '납품처명'			, name: 'sub_vendor_nm'				,	width: '200', datatype: 'text'			,	align: 'left'		,	readonly:true},
				 {caption: '자재코드'			, name: 'mtrl_cd'					,	width: 'auto', datatype: 'text'			,	align: 'center'		,	readonly:true},

			 ];
			 
		 break;	 
		 
		 case '2430_GRID_BL0': //SC2430
			 gridId		= '2430_GRID_BL0_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '2430_GRID_BL0_CD';
			 };


			 objItems = [
				 {caption: '출고번호'		, name: 'car_inout_no'	,	width: 'auto', datatype: 'text'			,	align: 'center'		,	required:true	,  hidden:true},
				 {caption: '제품입고번호'	, name: 'prod_in_no'	,	width: 'auto', datatype: 'text'			,	align: 'center'		,	required:true   /*,   hidden:true*/},
				 {caption: 'Lot번호'		, name: 'lot_no'		,	width: 'auto', datatype: 'text'			,	align: 'center'		,	readonly:true},
				 {caption: '등급'			, name: 'prod_grd'		,	width: 'auto', datatype: 'text'			,	align: 'center'		,	readonly:true},
				 {caption: '위치'			, name: 'yard_loc_cd'	,	width: 'auto', datatype: 'text'			,	align: 'center'		,	readonly:true},
				 {caption: '위치번호'		, name: 'yard_col'		,	width: 'auto', datatype: 'text'		    ,	align: 'center'		,	readonly:true},
				 {caption: 'PCS'			, name: 'prod_cnt'		,	width: 'auto', datatype: 'number'		,	align: 'right'		,	readonly:true},
				 {caption: 'Clinch'		    , name: 'clinch_flag'	,	width: 'auto', datatype: 'checkbox'		    ,	align: 'center'		,	readonly:true},
				 {caption: '중량'		    , name: 'real_wgt'		,	width: 'auto', datatype: 'number'		,	align: 'right'		,	readonly:true},
				];
		 break;	 
		 
		 case '2430_GRID_BL1': //SC2430
			 gridId		= '2430_GRID_BL1_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '2430_GRID_BL1_CD';
			 };


			 objItems = [
				 {caption: '생산입고번호'		, name: 'prod_in_no'	,	width: 'auto'   ,   datatype: 'text'	,	align: 'center'		,	required:true},
				 {caption: 'Lot번호'			, name: 'lot_no'		,	width: '150'    ,   datatype: 'text'	,	align: 'center'		,	readonly:true},
				 {caption: '야적위치'			, name: 'yard_loc_cd'	,	width: '100'    ,   datatype: 'text'	,	align: 'center'		,	readonly:true},
				 {caption: '중량'				, name: 'real_wgt'		,	width: '150'    ,   datatype: 'number'	,	align: 'right'		,	readonly:true},
				 {caption: '입고일자'			, name: 'prod_in_dt'	,	width: '150'    ,   datatype: 'text'  	,	align: 'center'		,	readonly:true},
				 {caption: '입출고순번'		, name: 'inout_seq'		,	width: 'auto'   ,   datatype: 'number'  ,	align: 'right'		,	readonly:true   ,   hidden:true},
				 {caption: '낱장구분'			, name: 'pcs_tp'		,	width: 'auto'   ,   datatype: 'number'  ,	align: 'right'		,	readonly:true   ,   hidden:true},
				 {caption: '제품입고일시'		, name: 'prod_in_dtm'	,	width: 'auto'   ,   datatype: 'number'  ,	align: 'right'		,	readonly:true   ,   hidden:true},
				 {caption: '제품입고근무자'		, name: 'prod_in_emp_id'		,	width: 'auto'   ,   datatype: 'number'  ,	align: 'right'		,	readonly:true   ,   hidden:true},
				 {caption: '제품출고근무자'		, name: 'prod_out_emp_id'		,	width: 'auto'   ,   datatype: 'number'  ,	align: 'right'		,	readonly:true   ,   },
				];
			  
			 
		 break;	 
		 
		 case '2430_GRID_BR': //SC2430
			 gridId		= '2430_GRID_BR_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '2430_GRID_BR_CD';
			 };

			 objItems = [
				 {caption: '구분'			    , name: 'stock_tp'			,	width: '80', datatype: 'text'			,	align: 'center'		,	readonly:true},
				 {caption: '차량입출고번호'		, name: 'car_inout_no'		,	width: '150', datatype: 'text'			,	align: 'center'		,	readonly:true},
				 {caption: '제품입고번호'		, name: 'prod_in_no'		,	width: '200', datatype: 'text'			,	align: 'center'		,	readonly:true},
				 {caption: 'Lot번호'			, name: 'lot_no'			,	width: '120', datatype: 'text'			,	align: 'center'		,	readonly:true},
				 {caption: '등급'			    , name: 'prod_grd'			,	width: '80', datatype: 'text'		    ,	align: 'center'		,	readonly:true},
				 {caption: '위치'			    , name: 'yard_loc_cd'		,	width: '80', datatype: 'text'		    ,	align: 'center'		,	readonly:true},
				 {caption: '위치번호'			, name: 'yard_col'			,	width: '100', datatype: 'text'		    ,	align: 'center'		,	readonly:true},
				 {caption: '중량'			    , name: 'real_wgt'			,	width: '100', datatype: 'number'		,	align: 'right'		,	readonly:true},
				 {caption: '입출고순번'		, name: 'inout_seq'			,	width: '100', datatype: 'number'		,	align: 'right'		,	readonly:true},
				];
			 
		 break;	 
		 
		case 'RK_RTN_SC2465_GRID_LIST': // SC2465
				gridId = 'gridRtnSC2465GridList';
				if ( caption_flag ) {
					sCaption = '';
					sItemCd  = 'gridRtnSC2465GridList';
				};
				objItems = 	[
				           	{caption: '출고일자' , name: 'car_in_dt', width: 100, datatype: 'date', isMultiLanguage:false,align: 'center'},
				           	{caption: '차량번호' , name: 'car_id', width: 100, datatype: 'text', isMultiLanguage:false,align: 'center'},
				           	{caption: '판매처코드' , name: 'vendor_cd', width: 80, datatype: 'text', isMultiLanguage:false,align: 'center'},
				           	{caption: '판매처명' , name: 'vendor_nm', width: 150, datatype: 'text', isMultiLanguage:false,align: 'left'},
				           	{caption: '납품처' , name: 'sub_vendor_cd', width: 80, datatype: 'text', isMultiLanguage:false,align: 'center'},
				           	{caption: '납품처명' , name: 'sub_vendor_nm', width: 150, datatype: 'text', isMultiLanguage:false,align: 'left'},
				           	{caption: '품목' , name: 'item_cd', width: 50, datatype: 'text', isMultiLanguage:false,align: 'center'},
				           	{caption: '품목명' , name: 'item_nm', width: 120, datatype: 'text', isMultiLanguage:false,align: 'left'},
				           	{caption: '입고시간' , name: 'car_in_dtm', width: 100, datatype: 'text', isMultiLanguage:false,align: 'center'},
				           	{caption: '상차시간' , name: 'car_load_dtm', width: 100, datatype: 'text', isMultiLanguage:false,align: 'center'},
				           	{caption: '출고시간' , name: 'car_out_dtm', width: 100, datatype: 'text', isMultiLanguage:false,align: 'center'},
				           	{caption: '상차시간-입고시간(분)' , name: 'aa', width: 150, datatype: 'text', isMultiLanguage:false,align: 'center'},
				           	{caption: '출고시간-상차시간(분)' , name: 'bb', width: 150, datatype: 'text', isMultiLanguage:false,align: 'center'},
				           	{caption: '출고시간-입고시간(분)' , name: 'cc', width: 150, datatype: 'text',align: 'center'}
				           	];  
		break;
		 
		case 'CAR_IN_GRID_SC2150': //SC2150
			 gridId = 'gridCarIn2150';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = 'CAP_CAR_IN_GRID_SC2150';
			 };
			 objItems = [
				 	{caption: '입고일자',		name:'IN_DT',		width: 150, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '차량번호',		name:'CAR_NO',		width: 150, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '기사명',		name:'WRKER_NM',	width: 138, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '거래처코드',	name:'VENDOR_CD',	width: 150, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center', hidden:true},
					{caption: '거래처명',		name:'VENDOR_NM',	width: 250, datatype:'text',	isMultiLanguage:false, readonly:true, },
					{caption: '품목코드',		name:'ITEM_CD',		width: 150, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '품목명',		name:'ITEM_NM',		width: 250, datatype:'text',	isMultiLanguage:false, readonly:true,},
					{caption: '공중량',		name:'EMPTY_WGT',	width: 150, datatype:'number',	isMultiLanguage:false, readonly:true,},
					{caption: '실중량',		name:'REAL_WGT',	width: 150, datatype:'number',	isMultiLanguage:false, readonly:true,},
					{caption: '총중량',		name:'TOT_WGT',		width: 150, datatype:'number',	isMultiLanguage:false, readonly:true, },
					{caption: '입차시간',		name:'IN_TIME',		width: 144, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '출차시간',		name:'OUT_TIME',	width: 144, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				 ];
				 break;
				 
		 case 'CAR_IN_GRID_SC2151': //SC2151
			 gridId = 'gridCarIn2151';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = 'CAP_CAR_IN_GRID_SC2151';
			 };
			 objItems = [
				 	{caption: '납품업체',		name:'SUB_VENDOR_CD',	width: 0, 	datatype:'text',	isMultiLanguage:false, readonly:true, align:'center', hidden:true},
				 	{caption: '품목코드',		name:'ITEM_CD',			width: 0, 	datatype:'text',	isMultiLanguage:false, readonly:true, align:'center', hidden:true},
				 	{caption: '일자',			name:'IN_DT',			width: 140, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				 	{caption: '차선번호',		name:'SCH_NO',			width: 140, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				 	{caption: '납품업체명',	name:'SUB_VENDOR_NM',	width: 200, datatype:'text',	isMultiLanguage:false, readonly:true,},
				 	{caption: '품목명',		name:'ITEM_NM',			width: 150, datatype:'text',	isMultiLanguage:false, readonly:true,},
					{caption: '그룹',			name:'GROUP_NO',		width: 120, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '샘플링',		name:'SAMPLE_NO',		width: 140, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '차량번호',		name:'CAR_NO',			width: 140, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '물량(T)',		name:'WMT',				width: 120, datatype:'number',	isMultiLanguage:false, readonly:true,},
					{caption: 'Cu',			name:'CU',				width: 120, datatype:'number',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '컨테이너번호',	name:'CONTAINER_NO',	width: 120, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '무게(Kg)',		name:'WGT',				width: 120, datatype:'number',	isMultiLanguage:false, readonly:true,},
					{caption: '수량',			name:'QTY',				width: 120, datatype:'number',	isMultiLanguage:false, readonly:true,},
					{caption: '비고',			name:'REMARK',			width: 200, datatype:'text',	isMultiLanguage:false, readonly:true,},
				 ];
				 break;
				 
		case 'RK_WR_WRK_STATUS': //SC2112
			 gridId		= 'RK_WR_WRK_STATUS_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '';
			 };
			   
			 objItems = [
				 {caption: '작업일자'		, name: 'WRK_DT'		, width: 0	, datatype: 'text'    	, align: 'center'	, required: true	, hidden:true	, readonly: false},
				 {caption: '작업순번'		, name: 'WRK_SEQ'		, width: 0	, datatype: 'number'    , align: 'center'	, required: true	, hidden:true	, readonly: false},
				 {caption: '구분'			, name: 'WRK_TP'		, width: 40	, datatype: 'text'    	, align: 'left'		, required: true	, hidden:false	, readonly: false	, maxlength:8},
				 {caption: '근무자'		, name: 'WRKER_NM'		, width: 60	, datatype: 'text'    	, align: 'left'		, required: true	, hidden:false	, readonly: false	, maxlength:50},
				 {caption: '작업시작시간'	, name: 'WRK_STA_TIME'	, width: 100, datatype: 'hourmin'   , align: 'center'	, required: false	, hidden:false	, readonly: false},
				 {caption: '작업종료시간'	, name: 'WRK_END_TIME'	, width: 100, datatype: 'hourmin'   , align: 'center'	, required: false	, hidden:false	, readonly: false},
				 {caption: '기간(분)'		, name: 'WRK_DUR'		, width: 60	, datatype: 'number'   	, align: 'right'	, required: false	, hidden:false	, readonly: true},
				 {caption: 'R.C'		, name: 'R_C'			, width: 40	, datatype: 'number'    , align: 'right'	, required: false	, hidden:false	, readonly: false	, maxlength:22},
				 {caption: '하역율A'		, name: 'UNLDG_RATE_A'	, width: 60	, datatype: 'number'    , align: 'right'	, required: false	, hidden:false	, readonly: true},
				 {caption: '작업시작시간'	, name: 'WRK_STA_TIME2'	, width: 100, datatype: 'hourmin'   , align: 'center'	, required: false	, hidden:false	, readonly: false},
				 {caption: '작업종료시간'	, name: 'WRK_END_TIME2'	, width: 100, datatype: 'hourmin'   , align: 'center'	, required: false	, hidden:false	, readonly: false},
				 {caption: '기간(분)'		, name: 'WRK_DUR2'		, width: 60	, datatype: 'number'   	, align: 'right'	, required: false	, hidden:false	, readonly: true},
				 {caption: '본선'			, name: 'BON_WGT'		, width: 40	, datatype: 'number'    , align: 'right'	, required: false	, hidden:false	, readonly: false	, maxlength:22},
				 {caption: '하역율B'		, name: 'UNLDG_RATE_B'	, width: 60	, datatype: 'number'    , align: 'right'	, required: false	, hidden:false	, readonly: true},
				 {caption: 'R.T'		, name: 'R_T'			, width: 40	, datatype: 'number'    , align: 'right'	, required: false	, hidden:false	, readonly: false},
				 {caption: '고장시작시간'	, name: 'TRBL_STA_TIME'	, width: 100, datatype: 'hourmin'   , align: 'center'	, required: false	, hidden:false	, readonly: false},
				 {caption: '고장종료시간'	, name: 'TRBL_END_TIME'	, width: 100, datatype: 'hourmin'   , align: 'center'	, required: false	, hidden:false	, readonly: false},
				 {caption: '기간(분)'		, name: 'TRBL_DUR'		, width: 60	, datatype: 'number'    , align: 'right'	, required: false	, hidden:false	, readonly: true	, maxlength:22},
				 {caption: '비고'			, name: 'REMARK'		, width: 110, datatype: 'text'    	, align: 'left'		, required: false	, hidden:false	, readonly: false	, maxlength:100}
				 ];
			 
			 fc_setRequiredInCol( gridId, [ 'WRK_DT', 'WRK_SEQ', 'WRK_TP', 'WRKER_NM'] );
			 fc_setKeysInCol    ( gridId, [ 'WRK_DT', 'WRK_SEQ'] );
			 break;
			 
		 case 'RK_WR_WRK_CONTENTS1': //SC2112
			 gridId		= sSubKey;
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '';
			 };
			   
			 objItems = [
				 {caption: ''		, name: 'WRK_DT'			, width: 0		, datatype: 'text'    	,	align: 'left'	, hidden:true	, readonly: true},
				 {caption: ''		, name: 'CHK_TP'			, width: 0		, datatype: 'text'    	,	align: 'left'	, hidden:true	, readonly: true},
				 {caption: ''		, name: 'CHK_SEQ'			, width: 0		, datatype: 'text'    	,	align: 'left'	, hidden:true	, readonly: true},
				 {caption: '시작시간'	, name: 'CHK_STA_TIME'		, width: 100	, datatype: 'hourmin'	,	align: 'center'	, hidden:false	, readonly: false},
				 {caption: '종료시간'	, name: 'CHK_END_TIME'		, width: 100	, datatype: 'hourmin'	,	align: 'center'	, hidden:false	, readonly: false},
				 {caption: '조업내역'	, name: 'CHK_CONTENTS'		, width: 1500	, datatype: 'text'    	,	align: 'left'	, hidden:false	, readonly: false, maxlength:200}
				 ];
			 
			 fc_setRequiredInCol( gridId, [ 'WRK_DT', 'CHK_TP', 'CHK_SEQ','CHK_CONTENTS'] );
			 fc_setKeysInCol    ( gridId, [ 'WRK_DT', 'CHK_TP', 'CHK_SEQ'] );
			 break;
			 
		 case 'RK_WR_WRK_CONTENTS2': //SC2112
			 gridId		= sSubKey;
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '';
			 };
			 
			 objItems = [
				 {caption: ''		, name: 'WRK_DT'			, width: 0		, datatype: 'text'    	, align: 'left'		, hidden:true	, readonly: true},
				 {caption: ''		, name: 'CHK_TP'			, width: 0		, datatype: 'text'    	, align: 'left'		, hidden:true	, readonly: true},
				 {caption: ''		, name: 'CHK_SEQ'			, width: 0		, datatype: 'text'    	, align: 'left'		, hidden:true	, readonly: true},
				 {caption: '시작시간'	, name: 'CHK_STA_TIME'		, width: 100	, datatype: 'hourmin'	, align: 'center'	, hidden:false	, readonly: false},
				 {caption: '종료시간'	, name: 'CHK_END_TIME'		, width: 100	, datatype: 'hourmin'	, align: 'center'	, hidden:false	, readonly: false},
				 {caption: '조업내역'	, name: 'CHK_CONTENTS'		, width: 1500	, datatype: 'text'    	, align: 'left'		, hidden:false	, readonly: false, maxlength:200}
				 ];
			 
			 fc_setRequiredInCol( gridId, [ 'WRK_DT', 'CHK_TP', 'CHK_SEQ','CHK_CONTENTS'] );
			 fc_setKeysInCol    ( gridId, [ 'WRK_DT', 'CHK_TP', 'CHK_SEQ'] );
			 break;
			 
		 case 'RK_WR_WRK_CONTENTS3': //SC2112
			 gridId		= sSubKey;
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '';
			 };
			 
			 objItems = [
				 {caption: ''		, name: 'WRK_DT'			, width: 0	, datatype: 'text'    		, align: 'left'		, hidden:true	, readonly: true},
				 {caption: ''		, name: 'CHK_TP1'			, width: 0	, datatype: 'text'    		, align: 'left'		, hidden:true	, readonly: true},
				 {caption: ''		, name: 'CHK_SEQ'			, width: 0	, datatype: 'text'    		, align: 'left'		, hidden:true	, readonly: true},
				 {caption: '시작시간'	, name: 'CHK_STA_TIME'		, width: 100	, datatype: 'hourmin'	, align: 'center'	, hidden:false	, readonly: false},
				 {caption: '종료시간'	, name: 'CHK_END_TIME'		, width: 100	, datatype: 'hourmin'	, align: 'center'	, hidden:false	, readonly: false},
				 {caption: '조업내역'	, name: 'CHK_CONTENTS'		, width: 1500	, datatype: 'text'    	, align: 'left'		, hidden:false	, readonly: false, maxlength:200}
				 ];
			 
			 fc_setRequiredInCol( gridId, [ 'WRK_DT', 'CHK_TP', 'CHK_SEQ','CHK_CONTENTS'] );
			 fc_setKeysInCol    ( gridId, [ 'WRK_DT', 'CHK_TP', 'CHK_SEQ'] );
			 break;
			 
		 case 'RK_WR_WRK_CONTENTS4': //SC2112
			 gridId		= sSubKey;
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '';
			 };
			 
			 objItems = [
				 {caption: ''		, name: 'WRK_DT'			, width: 0		, datatype: 'text'    	, align: 'left'		, hidden:true	, readonly: true},
				 {caption: ''		, name: 'CHK_TP'			, width: 0		, datatype: 'text'    	, align: 'left'		, hidden:true	, readonly: true},
				 {caption: ''		, name: 'CHK_SEQ'			, width: 0		, datatype: 'text'    	, align: 'left'		, hidden:true	, readonly: true},
				 {caption: '시작시간'	, name: 'CHK_STA_TIME'		, width: 100	, datatype: 'hourmin'	, align: 'center'	, hidden:false	, readonly: false},
				 {caption: '종료시간'	, name: 'CHK_END_TIME'		, width: 100	, datatype: 'hourmin'	, align: 'center'	, hidden:false	, readonly: false},
				 {caption: '조업내역'	, name: 'CHK_CONTENTS'		, width: 1500	, datatype: 'text'    	, align: 'left'		, hidden:false	, readonly: false, maxlength:200}
				 ];
			 
			 fc_setRequiredInCol( gridId, [ 'WRK_DT', 'CHK_TP', 'CHK_SEQ','CHK_CONTENTS'] );
			 fc_setKeysInCol    ( gridId, [ 'WRK_DT', 'CHK_TP', 'CHK_SEQ'] );
			 break;
			 
		 case 'CAR_GRID_SC2152': //SC2152
			 gridId = 'gridCar2152';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = 'CAP_CAR_GRID_SC2152';
			 };
			 objItems = [
				 	{caption: '입고일자',		name:'CAR_IN_DT',		width: 150, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				 	{caption: '차량대수',		name:'CAR_CNT',			width: 100, datatype:'text',	isMultiLanguage:false, readonly:true, align:'right'},
				 	{caption: '총중량',		name:'TOT_WGT',			width: 100, datatype:'number',	isMultiLanguage:false, readonly:true, },
					{caption: '실중량',		name:'REAL_WGT',		width: 100, datatype:'number',	isMultiLanguage:false, readonly:true,},
					{caption: '공중량',		name:'EMPTY_WGT',		width: 100, datatype:'number',	isMultiLanguage:false, readonly:true,},
					{caption: '입차시간',		name:'IN_TIME',			width: 200, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '출차시간',		name:'OUT_TIME',		width: 200, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '장소',			name:'INOUT_TP',		width: 100, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '품목코드',		name:'ITEM_CD',			width: 100, datatype:'lov',		isMultiLanguage:false, align:'center'},
					{caption: '번호',			name:'CAR_INOUT_NO',	width: 120, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '작업자',		name:'WRKER_NM',		width: 100, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '동설입고여부',	name:'CUSCRAP_IN_YN',	width: 115, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					
				 ];
				 
				 fc_addDataInGettedLov('ITEM_CD', {code : 'CUSCRAP_ITEM_CD',tags : '',alias : ''});
				 fc_addDataInSettingLov({object : gridId+'.ITEM_CD',code : 'CUSCRAP_ITEM_CD',format : 'V',nullable:false, defval : ''});
				break;
				
						
				
		 case 'SC2431GRIDL': //SC2431
			 gridId = 'SC2431GRIDL_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = 'SC2431GRIDL_CD';
			 };
			 objItems = [
				 	{caption: '입출고번호',		name:'car_inout_no',   		width: 100, datatype:'text'     ,	isMultiLanguage:false, readonly:true    ,hidden:true        , align:'center'},
				 	{caption: '공장',		    	name:'plant_no',   		    width: 100, datatype:'text'     ,	isMultiLanguage:false, readonly:true    ,hidden:true        , align:'center'},
				 	{caption: '차량번호',			name:'car_id',   		    width: 150, datatype:'text'     ,	isMultiLanguage:false, readonly:true                        , align:'center'},
				 	{caption: '품목코드',			name:'item_cd',   		    width: 100, datatype:'text'     ,	isMultiLanguage:false, readonly:true                        , align:'center'},
				 	{caption: '판매처명',			name:'vendor_nm',   		width: 'auto', datatype:'text'     ,	isMultiLanguage:false, readonly:true                        , align:'left'},
				 	{caption: '납품처명',			name:'sub_vendor_nm',   	width: 'auto', datatype:'text'     ,	isMultiLanguage:false, readonly:true                        , align:'left'},
				 	{caption: '공중량',		    name:'empty_wgt',   		width: 100, datatype:'number'   ,	isMultiLanguage:false, readonly:true                        , align:'right'},
				 	{caption: '실중량',		    name:'real_wgt',   		    width: 100, datatype:'number'   ,	isMultiLanguage:false, readonly:true                        , align:'right'},
				 	{caption: '총중량',		    name:'tot_wgt',   		    width: 100, datatype:'number'   ,	isMultiLanguage:false, readonly:true                        , align:'right'},
					
				 ];
				 
				break;
				
		 case 'SC2431GRIDR': //SC2431
			 gridId = 'SC2431GRIDR_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = 'SC2431GRIDR_CD';
			 };
			 objItems = [
				 	{caption: '구분_H',		name:'stock_tp',   		width: 100, datatype:'text'     ,	isMultiLanguage:false, readonly:true    ,hidden:true        , align:'center'},
				 	{caption: '구분',		    name:'stock_tp_nm',   	width: 80, datatype:'text'     ,	isMultiLanguage:false, readonly:true                        , align:'center'},
				 	{caption: 'Lot번호',	    name:'lot_no',   		width: 100, datatype:'text'     ,	isMultiLanguage:false, readonly:true                        , align:'center'},
				 	{caption: '등급',		    name:'prod_grd',   		width: 80, datatype:'text'     ,	isMultiLanguage:false, readonly:true                        , align:'center'},
				 	{caption: '야적위치',	    name:'yard_loc_cd',   	width: 100, datatype:'text'     ,	isMultiLanguage:false, readonly:true                        , align:'center'},
				 	{caption: '위치번호',	    name:'yard_col',   	    width: 100, datatype:'text'     ,	isMultiLanguage:false, readonly:true                        , align:'center'},
				 	{caption: '중량',		    name:'real_wgt',   		width: 100, datatype:'number'   ,	isMultiLanguage:false, readonly:true                        , align:'right'},
				 	{caption: '생산입고번호',	name:'prod_in_no',   	width: 100, datatype:'text'     ,	isMultiLanguage:false, readonly:true    ,hidden:true        , align:'center'},
				 	{caption: '입출고번호',	name:'car_inout_no',   	width: 100, datatype:'text'     ,	isMultiLanguage:false, readonly:true                        , align:'center'},
				 	{caption: '공장',		    name:'plant_no',   		width: 80, datatype:'text'     ,	isMultiLanguage:false, readonly:true                        , align:'center'},
				 	{caption: '차량번호',		name:'car_id',   		width: 'auto', datatype:'text'     ,	isMultiLanguage:false, readonly:true                        , align:'center'},
				 ];
			 
			 break;
				
		 case 'SAMPLE_GRID_SC2130' : //sc2130
			 gridId = 'gridSample2130';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = 'CAP_SAMPLE_GRID_SC2130';
			 };
			 objItems = [
				 	{caption: '거래처코드',	name:'VENDOR_CD',			width: 100, datatype:'popup',	isMultiLanguage:false, readonly:true, align:'center'},
				 	{caption: '거래처명',		name:'VENDOR_NM',			width: 150, datatype:'text',	isMultiLanguage:false, readonly:true,},
					{caption: '품목코드',		name:'ITEM_CD',				width: 100, datatype:'popup',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '품목명',		name:'ITEM_NM',				width: 150, datatype:'text',	isMultiLanguage:false, readonly:true,},
					{caption: '샘플일자',		name:'SAMPLE_DT',			width: 100, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '시작시간',		name:'SAMPLE_STA_TIME',		width: 100, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '종료시간',		name:'SAMPLE_END_TIME',		width: 100, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '사용여부',		name:'USE_YN',				width: 100, datatype:'lov',		isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '샘플주기', 		name:'SAMPLE_CYCLE',		width: 100, datatype:'lov', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '초기값',		name:'SAMPLE_STA_SEQ',		width: 60,  datatype:'text',	isMultiLanguage:false, readonly:true, align:'right'},
					{caption: '배수',			name:'SAMPLE_MULTIPLE',		width: 60,  datatype:'text',	isMultiLanguage:false, readonly:true, align:'right'},
					{caption: '차량수',		name:'SAMPLE_END_CNT',		width: 60,  datatype:'text',	isMultiLanguage:false, readonly:true, align:'right'},
					{caption: '비고',			name:'REMARK',				width: 100,  datatype:'text',	isMultiLanguage:false, readonly:true, },
					{caption: '',			name:'SEQ',					width: 100, datatype:'text',	isMultiLanguage:false, hidden:true},
					
				 ];
			 fc_addDataInGettedLov('USE_YN', {code : 'USE_YN',tags : '',alias : ''});
			 fc_addDataInSettingLov({object : gridId+'.USE_YN',code : 'USE_YN',format : 'V',nullable:false, defval : ''});
			 
			 fc_addDataInGettedLov('SAMPLE_CYCLE', {code : 'SAMPLE_CYCLE',tags : '',alias : ''});
			 fc_addDataInSettingLov({object : gridId+'.SAMPLE_CYCLE',code : 'SAMPLE_CYCLE',format : 'V',nullable:false, defval : ''});
			 
			 
			 break;
			 
		 case 'SAMPLE_CAR_GRID_SC2131' : //sc2131
			 gridId = 'gridSampleCar2131';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = 'CAP_SAMPLE_CAR_GRID_SC2131';
			 };
			 objItems = [
				 	{caption: '입출고번호',	name:'CAR_INOUT_NO',		width: 150, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				 	{caption: 'LOT_NO',		name:'LOT_NO',				width: 150, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				 	{caption: '계근자',		name:'WRKER_NM',			width: 135, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				 	{caption: '차량번호',		name:'CAR_ID',				width: 150, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				 	{caption: '기사명',		name:'DRIVER_NM',			width: 135, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				 	{caption: '거래처코드',	name:'VENDOR_CD',			width: 120, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				 	{caption: '거래처명',		name:'VENDOR_NM',			width: 200, datatype:'text',	isMultiLanguage:false, readonly:true},
					{caption: '품목코드',		name:'ITEM_CD',				width: 120, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '품목명',		name:'ITEM_NM',				width: 200, datatype:'text',	isMultiLanguage:false, readonly:true},
					{caption: '입고중량',		name:'IN_WGT',				width: 150, datatype:'number',	isMultiLanguage:false, readonly:true},
					{caption: '샘플확인유무',	name:'SAMPLE_CONFIRM',		width: 100, datatype:'text',	isMultiLanguage:false, align:'center'},
					{caption: '입고시간',		name:'IN_TIME',				width: 200, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '',			name:'INOUT_SEQ',			width: 0, 	datatype:'text',	isMultiLanguage:false, hidden:true},
					{caption: '',			name:'SAMPLE_TGT_YN',		width: 0, 	datatype:'text',	isMultiLanguage:false, hidden:true},
					
				 ];
			 break;
				 
		 case 'SAMPLE_CAR_GRID_SC2132' : //sc2132
			 gridId = 'gridSampleCar2132';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = 'CAP_SAMPLE_CAR_GRID_SC2132';
			 };
			 objItems = [
				 	{caption: '차량입출고번호',	name:'CAR_INOUT_NO',		width: 120, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				 	{caption: 'LOT_NO',		name:'LOT_NO',				width: 120, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				 	{caption: '품목코드',		name:'ITEM_CD',				width: 120, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				 	{caption: '품목명',		name:'ITEM_NM',				width: 200, datatype:'text',	isMultiLanguage:false, readonly:true},
				 	{caption: '거래처코드',	name:'VENDOR_CD',			width: 120, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				 	{caption: '거채처명',		name:'VENDOR_NM',			width: 200, datatype:'text',	isMultiLanguage:false, readonly:true},
				 	{caption: '차량번호',		name:'CAR_ID',				width: 150, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
				 	{caption: '기사명',		name:'DRIVER_NM',			width: 100, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '입고중량',		name:'REAL_WGT',			width: 120, datatype:'number',	isMultiLanguage:false, readonly:true},
					{caption: '입고시간',		name:'CAR_IN_DT',			width: 200, datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '샘플링유무',	name:'SAMPLE_TGT_YN',		width: 100, datatype:'check',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '샘플링순번',	name:'SAMPLE_SEQ',			width: 100,  datatype:'text',	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '비고',			name:'SAMPLE_REMARK',		width: 158, datatype:'text',	isMultiLanguage:false, readonly:true},
					{caption: '',			name:'INOUT_SEQ',			width: 0,   datatype:'text',	isMultiLanguage:false, hidden:true},
					
				 ];
			 break;
			 
		 case 'SAMPLE_CAR_GRID_SC2134' : //sc2134
			 gridId = 'gridSampleCar2134';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = 'CAP_SAMPLE_CAR_GRID_SC2134';
			 };
			 objItems = [
				 	{caption: '품목코드',		name:'ITEM_CD',		width: 100, datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
				 	{caption: '품목명',		name:'ITEM_NM',		width: 150, datatype:'text',	isMultiLanguage:false, readonly:true},
				 	{caption: '거래처코드',	name:'VENDOR_CD',	width: 100, datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
				 	{caption: '거래처명',		name:'VENDOR_NM',	width: 150, datatype:'text',	isMultiLanguage:false, readonly:true},
					{caption: '입고일자',		name:'IN_DT',		width: 100, datatype:'text',	isMultiLanguage:false, align:'center', hidden:true},
					{caption: '입고건수',		name:'IN_CNT',		width: 80, 	datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '샘플링건수',	name:'SAMPLE_CNT',	width: 80, 	datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '1',			name:'DAY01_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '2',			name:'DAY02_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '3',			name:'DAY03_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '4',			name:'DAY04_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '5',			name:'DAY05_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '6',			name:'DAY06_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '7',			name:'DAY07_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '8',			name:'DAY08_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '9',			name:'DAY09_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '10',			name:'DAY10_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '11',			name:'DAY11_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '12',			name:'DAY12_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '13',			name:'DAY13_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '14',			name:'DAY14_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '15',			name:'DAY15_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '16',			name:'DAY16_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '17',			name:'DAY17_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '18',			name:'DAY18_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '19',			name:'DAY19_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '20',			name:'DAY20_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '21',			name:'DAY21_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '22',			name:'DAY22_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '23',			name:'DAY23_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '24',			name:'DAY24_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '25',			name:'DAY25_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '26',			name:'DAY26_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '27',			name:'DAY27_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '28',			name:'DAY28_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '29',			name:'DAY29_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '30',			name:'DAY30_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					{caption: '31',			name:'DAY31_CNT',	width: 50,  datatype:'text',	isMultiLanguage:false, align:'center', readonly:true},
					
					
				 ];
			 break;
			 
		 case 'G_SC2111' : //SC2111
			 gridId = 'G_SC2111_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '';
			 };
			 objItems = [
				 	{caption: '저장위치'		, name:'STORE_LOC'	, width: 100, datatype:'text'},
				 	{caption: 'LOT NO'		, name:'LOT_NO'		, width: 100, datatype:'text'},
				 	{caption: '최근계량일자'	, name:'WEIGH_DT'	, width: 100, datatype:'date'},
					
				 ];
			 break;
			 
		 case 'G_SC2111_1' : //SC2111
			 gridId = 'G_SC2111_1_ID';
			 if(caption_flag){
				 sCaption = '';
				 sItemCd = '';
			 };
			 objItems = [
				 	{caption: 'Batch번호'		, name:'BAT_NO'		, width: 150, datatype:'text'},
				 	{caption: '계량일시'		, name:'WEIGH_DTM'	, width: 200, datatype:'datetime'},
				 	{caption: 'Net중량'		, name:'NET_WGT'	, width: 150, datatype:'number'},
				 	{caption: '누적Net중량'	, name:'ACC_NET_WGT', width: 150, datatype:'number'}
				 ];
			 break;
			 
			case 'RK_RTN_SC2520_LIST' : //SC2520
				   gridId		= 'gridRtnSC2520GridList';
				   if(caption_flag){
					   sCaption = '';
					   sItemCd = 'gridRtnSC2520GridList';
				   };
				   objItems = [
							   {caption: '출고일자',	   name: 'CAR_IN_DT',			width: 150, datatype: 'text',	isMultiLanguage:false, readonly:true},
							   {caption: '차량번호',	   name: 'CAR_ID',				width: 150, datatype: 'text',	isMultiLanguage:false, readonly:true},
							   {caption: '판매처 ',	   name: 'VENDOR_CD',			width: 100, datatype: 'text',	isMultiLanguage:false, readonly:true},
							   {caption: '판매처명',	   name: 'VENDOR_NM',			width: 100, datatype: 'text',   isMultiLanguage:false, readonly:true},
							   {caption: '납품처',	   name: 'SUB_VENDOR_CD',		width: 100, datatype: 'text',   isMultiLanguage:false, readonly:true},
							   {caption: '납품처명',	   name: 'SUB_VENDOR_NM',		width: 150, datatype: 'text',	isMultiLanguage:false, readonly:true},
							   {caption: '운송업체',	   name: 'TRSP_CMP_CD',			width: 150, datatype: 'text',	isMultiLanguage:false, readonly:true},
							   {caption: '운송업체명',	   name: 'TRSP_CMP_NM',			width: 150, datatype: 'text',	isMultiLanguage:false, readonly:true},
							   {caption: '공중량',	   name: 'EMPTY_WGT',			width: 200, datatype: 'number',	isMultiLanguage:false, readonly:true},
							   {caption: '실중량',	   name: 'REAL_WGT',			width: 100, datatype: 'number',	isMultiLanguage:false, readonly:true},
							   {caption: '총중량',	   name: 'TOT_WGT',				width: 150, datatype: 'number',	isMultiLanguage:false, readonly:true},
							   {caption: '계근중량',	   name: 'LINE_WGT', 			width: 100, datatype: 'number',	isMultiLanguage:false, readonly:true},
							   {caption: '오차량',	   name: 'WEIGHT_TOL_WGT',    	width: 100, datatype: 'text',	isMultiLanguage:false, readonly:true},
							   {caption: '오차원인',	   name: 'WEIGHT_TOL_CAUSE',  	width: 100, datatype: 'text',	isMultiLanguage:false, },
							   {caption: '차량입출고번호', name: 'CAR_INOUT_NO',	  	width: 100, datatype: 'text',	isMultiLanguage:false, readonly:true},
							  ];
			break;
			
			
			case 'SC2440GRIDL1' : //SC2440
				 gridId = 'SC2440GRIDL1_ID';
				 if(caption_flag){
					 sCaption = '';
					 sItemCd = 'SC2440GRIDL1_CD';
				 };
				 objItems = [
						 {caption: '제품명'	    , name:'prod_nm'         , width: 'auto'        , datatype:'text',      align:'center'     ,isMultiLanguage:false, readonly:true },
						 {caption: '등급'	    	, name:'prod_grd'        , width: 80        , datatype:'text',      align:'center'     ,isMultiLanguage:false, readonly:true },
						 {caption: '야적위치'	    , name:'yard_loc_cd'     , width: 80        , datatype:'text',      align:'center'     ,isMultiLanguage:false, readonly:true },
						 {caption: '총중량'	    , name:'tot_wgt'         , width: 150        , datatype:'number',    align:'right'      ,isMultiLanguage:false, readonly:true },
						 {caption: '지시중량'	    , name:'inst_wgt'        , width: 150        , datatype:'number',    align:'right'      ,isMultiLanguage:false, readonly:true },
						 {caption: '실작업중량'	, name:'real_wrk_wgt'    , width: 150        , datatype:'number',    align:'right'      ,isMultiLanguage:false, readonly:true },
					 ];
				 break;
				 
			case 'SC2440GRIDL2' : //SC2440
				gridId = 'SC2440GRIDL2_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd = 'SC2440GRIDL2_CD';
				};
				objItems = [
					{caption: '제품명'	    , name:'prod_nm'        , width: 100        , datatype:'text'       ,align:'center'            ,isMultiLanguage:false, readonly:true },
					{caption: 'Lot No'	    , name:'lot_no'         , width: 100        , datatype:'text'       ,align:'center'            ,isMultiLanguage:false, readonly:true },
					{caption: '등급'	    , name:'prod_grd'       , width: 50        , datatype:'text'       ,align:'center'            ,isMultiLanguage:false, readonly:true },
					{caption: '야적위치'	    , name:'yard_loc_cd'    , width: 80        , datatype:'text'       ,align:'center'            ,isMultiLanguage:false, readonly:true },
					{caption: '야적번호'	    , name:'yard_col'       , width: 80        , datatype:'text'       ,align:'center'            ,isMultiLanguage:false, readonly:true },
					{caption: 'PCS'	        , name:'prod_cnt'       , width: 80        , datatype:'number'     ,align:'right'             ,isMultiLanguage:false, readonly:true },
					{caption: 'Clinch'	    , name:'clinch_flag'    , width: 80        , datatype:'checkbox'      ,align:'center'            ,isMultiLanguage:false, readonly:true },
					{caption: '중량'	    , name:'real_wgt'       , width: 100        , datatype:'number'     ,align:'right'             ,isMultiLanguage:false, readonly:true },
					{caption: '제품입고번호'	, name:'prod_in_no'     , width: 'auto'        , datatype:'text'       ,align:'center'            ,isMultiLanguage:false, readonly:true },
					];
				break;
				
				
			case 'SC2440GRIDR' : //SC2440
				gridId = 'SC2440GRIDR_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd = 'SC2440GRIDR_CD';
				};
				objItems = [
					{caption: '제품명'	    , name:'prod_nm'        , width: 100        , datatype:'text'       ,align:'center'            ,isMultiLanguage:false, readonly:true },
					{caption: 'Lot No'	    , name:'lot_no'         , width: 100        , datatype:'text'       ,align:'center'            ,isMultiLanguage:false, readonly:true },
					{caption: '등급'	    	, name:'prod_grd'       , width: 50        , datatype:'text'       ,align:'center'            ,isMultiLanguage:false, readonly:true, hidden:true },
					{caption: '등급'	    	, name:'prod_grd_new'       , width: 50        , datatype:'text'       ,align:'center'            ,isMultiLanguage:false, readonly:true },
					{caption: '야적위치'	    , name:'yard_loc_cd'    , width: 80        , datatype:'text'       ,align:'center'            ,isMultiLanguage:false, readonly:true, hidden:true },
					{caption: '야적위치'	    , name:'yard_loc_cd_new'    , width: 80        , datatype:'text'       ,align:'center'            ,isMultiLanguage:false, readonly:true },
					{caption: '야적번호'	    , name:'yard_col'       , width: 80        , datatype:'text'       ,align:'center'            ,isMultiLanguage:false, readonly:true },
					{caption: 'PCS'	        , name:'prod_cnt'       , width: 80        , datatype:'number'     ,align:'right'             ,isMultiLanguage:false, readonly:true },
					{caption: 'Clinch'	    , name:'clinch_flag'    , width: 80        , datatype:'checkbox'      ,align:'center'            ,isMultiLanguage:false, readonly:true },
					{caption: '중량'	    	, name:'real_wgt'       , width: 100        , datatype:'number'     ,align:'right'             ,isMultiLanguage:false, readonly:true },
					{caption: '제품입고번호'	, name:'prod_in_no'     , width: 'auto'        , datatype:'text'       ,align:'center'            ,isMultiLanguage:false, readonly:true },
					];
				break;
			
			
			case 'SC2451GRID' : //SC2451
				 gridId = 'SC2451GRID_ID';
				 if(caption_flag){
					 sCaption = '';
					 sItemCd = 'SC2451GRID_CD';
				 };
				 objItems = [
					 	{caption: '작업일자'	, name:'WRK_DT'     , width: 200        , datatype:'date',      required:true, /*hidden:true,*/readonly:true,	isMultiLanguage:false, },
					 	{caption: '공장'		, name:'PLANT_NO'      , width: 100        , datatype:'text',      required:true, /*hidden:true,*/readonly:true,	isMultiLanguage:false, },
					 	{caption: '순번'		, name:'WRK_SEQ'        , width: 100        , datatype:'text',      required:true, /*hidden:true,*/readonly:true,	isMultiLanguage:false, },
					 	{caption: '업체명'	, name:'CMP_NM'     , width: 100        , datatype:'text',      isMultiLanguage:false, },
					 	{caption: '작업시간'	, name:'WRK_TIME'   , width: 200        , datatype:'number',   	isMultiLanguage:false, },
					 	{caption: '작업자수'	, name:'WRKER_CNT'  , width: 200        , datatype:'number',   	isMultiLanguage:false, },
					 	{caption: '작업명'	, name:'WRK_NM'     , width: 200        , datatype:'text',      isMultiLanguage:false, },
					 	{caption: '비고'		, name:'REMARK'     , width: 'auto'     , datatype:'text',      isMultiLanguage:false, }
					 ];
				 break;
			
			case 'G_SC2115' : //SC2115
				 gridId = 'G_SC2115_ID';
				 if(caption_flag){
					 sCaption = '';
					 sItemCd = '';
				 };
				 objItems = [
					 	{caption: '작업일자'		, name:'WRK_DT'     	, width: '10%'	, datatype:'date'		, readonly:true},
					 	{caption: '광종'			, name:'MINERAL_TP' 	, width: '10%'	, datatype:'text'		, readonly:true},
					 	{caption: '광종명'		, name:'MINERAL_TP_NM'	, width: '10%'	, datatype:'text'		, readonly:true},
					 	{caption: 'I/O'			, name:'IO_TP'     		, width: '10%'	, datatype:'text'		, readonly:true},
					 	{caption: 'Holder번호'	, name:'HOLDER_NO'   	, width: '10%'	, datatype:'text'		, readonly:true},
					 	{caption: 'Batch번호'		, name:'BAT_NO'  		, width: '10%'	, datatype:'text'		, readonly:true},
					 	{caption: 'S/L'			, name:'작업Bin'     		, width: '10%'	, datatype:'text'		, readonly:true},
					 	{caption: 'Parent'		, name:'PARENT_FL'     	, width: '10%'	, datatype:'text'		, readonly:true},
					 	{caption: 'DMT'			, name:'DMT'     		, width: '10%'	, datatype:'text'		, readonly:true},
					 	{caption: '상태'			, name:'STS'     		, width: '10%'	, datatype:'number'		, readonly:true}
					 ];
				 break;
				 
			case 'G_SC2116_L' : //SC2116 LEFT
				 gridId = 'G_SC2116_L_ID';
				 if(caption_flag){
					 sCaption = '';
					 sItemCd = '';
				 };
				 objItems = [
					 	{caption: '작업일자'		, name:'WRK_DT'			, width: '10%'	, datatype:'date'		, readonly:true, },
					 	{caption: '작업순번'		, name:'WRK_SEQ'		, width:  0		, datatype:'text'		, readonly:true, hidden:true, },
					 	{caption: 'Batch번호'		, name:'BAT_NO'			, width: '10%'	, datatype:'text'		, readonly:true, },
					 	{caption: '광종'			, name:'MINERAL_TP'		, width: '8%'	, datatype:'text'		, readonly:true, },
					 	{caption: '작업Bin'		, name:'WRK_BIN'		, width: '10%'	, datatype:'text'		, readonly:true, },
					 	{caption: 'WMT'			, name:'WMT'			, width: '10%'	, datatype:'number'		, readonly:true, },
					 	{caption: 'Hopper시작일시'	, name:'HOP_STA_DTM'    , width: '12%'	, datatype:'text'		, readonly:true, },
					 	{caption: '전송결과'		, name:'SEND_RSLT'     	, width: '10%'	, datatype:'text'		, readonly:true, },
					 	{caption: '수정일시'		, name:'UPD_DTM'     	, width: '10%'	, datatype:'text'		, readonly:true, },
					 	{caption: '메시지'		, name:'MESSAGE'		, width: '10%'	, datatype:'text'		, readonly:true, }
					 ];
				 break;
				 
			case 'G_SC2116_R' : //SC2116 RIGHT
				 gridId = 'G_SC2116_R_ID';
				 if(caption_flag){
					 sCaption = '';
					 sItemCd = '';
				 };
				 objItems = [
					 	{caption: '차선번호'	, name:'SCH_NO'			, width: '13%'	, datatype:'text'		, readonly:true, },
					 	{caption: '광종'		, name:'MINERAL_TP'		, width: 0		, datatype:'text'		, readonly:true, hidden:true, },
					 	{caption: '마감여부'	, name:'CLOSE_YN'		, width: '10%'	, datatype:'text'		, readonly:true, },
					 	{caption: '입고량'	, name:'IN_WGT'			, width: '10%'	, datatype:'number'		, readonly:true, },
					 	{caption: '장입량'	, name:'INPUT_WGT'		, width: '10%'	, datatype:'number'		, readonly:true, },
					 	{caption: 'SAP전송량'	, name:'SAP_SEND_WGT'	, width: '15%'	, datatype:'number'		, readonly:true, },
					 	{caption: '잔량'		, name:'REM_WGT'    	, width: '10%'	, datatype:'number'		, readonly:true, },
					 ];
				 break;
				 
			case 'G_SC2350' : //SC2350
				 gridId = 'G_SC2350_ID';
				 if(caption_flag){
					 sCaption = '';
					 sItemCd = '';
				 };
				 objGrpItems = [
			   			{caption: 'A TANK'	, name: 'GRP_A'			, align: 'center' },
			   			{caption: 'B TANK'	, name: 'GRP_B'			, align: 'center' },
			   			{caption: 'C TANK'	, name: 'GRP_C'			, align: 'center' },
			   			{caption: 'STOCK'	, name: 'GRP_STOCK'		, align: 'center' }
						];
				 
				 objItems = [
					 	{caption: '재고일자'	, name:'STOCK_DT'	, width: '7%'	, datatype:'date'		, align:'center'},
					 	{caption: 'LEVEL'	, name:'LVL_A'		, width: '6%'	, datatype:'number2'	, group:"GRP_A"},
					 	{caption: '제품'		, name:'PROD_A'		, width: '6%'	, datatype:'lov'		, group:"GRP_A", align:'center'},
					 	{caption: 'LEVEL'	, name:'LVL_B'		, width: '6%'	, datatype:'number2'	, group:"GRP_B"},
					 	{caption: '제품'		, name:'PROD_B'		, width: '6%'	, datatype:'lov'		, group:"GRP_B", align:'center'},
					 	{caption: 'LEVEL'	, name:'LVL_C'		, width: '6%'	, datatype:'number2'	, group:"GRP_C"},
					 	{caption: '제품'		, name:'PROD_C'    	, width: '6%'	, datatype:'lov'		, group:"GRP_C", align:'center'},
					 	{caption: '98%'		, name:'98_PER'     , width: '6%'	, datatype:'number2'	, group:"GRP_STOCK", readonly:true},
					 	{caption: '96%'		, name:'96_PER'     , width: '6%'	, datatype:'number2'	, group:"GRP_STOCK", readonly:true},
					 	{caption: '흑산'		, name:'BLK_S'		, width: '6%'	, datatype:'number2'	, group:"GRP_STOCK", readonly:true},
					 	{caption: '비고'		, name:'REMARK'		, width: '12%'	, datatype:'text'		},
					 	{caption: '입력시간'	, name:'INS_TIME'	, width: '9%'	, datatype:'datetime'	, align:'center', readonly:true},
					 	{caption: '수정시간'	, name:'UPD_TIME'	, width: '9%'	, datatype:'datetime'	, align:'center', readonly:true}
					 ];
				 
				 fc_setRequiredInCol ( gridId, [ 'STOCK_DT'] );
				 
				 fc_addDataInGettedLov('S_PROD_TP', {code : 'S_PROD_TP',tags : '',alias : ''});
				 fc_addDataInSettingLov({object : gridId+'.PROD_A',code : 'S_PROD_TP',format : 'V',nullable:false, defval : ''});
				 fc_addDataInSettingLov({object : gridId+'.PROD_B',code : 'S_PROD_TP',format : 'V',nullable:false, defval : ''});
				 fc_addDataInSettingLov({object : gridId+'.PROD_C',code : 'S_PROD_TP',format : 'V',nullable:false, defval : ''});
				 break;


			case 'SAMPLE_CAR_GRID_SC2135': //SC2135
				gridId = 'gridSampleCar2135';
				if(caption_flag){
					sCaption = '';
					sItemCd = 'CAP_SAMPLE_CAR_GRID_SC2135';
				};
				objItems = [
					{caption: '품목코드', 		name:'ITEM_CD', 	width:200, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '품목명', 		name:'ITEM_NM', 	width:250, datatype:'text', 	isMultiLanguage:false, readonly:true},
					{caption: '거래처코드',	name:'VENDOR_CD', 	width:200, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '거래처명', 		name:'VENDOR_NM', 	width:250, datatype:'text', 	isMultiLanguage:false, readonly:true},
					{caption: 'Lot번호', 		name:'LOT_NO', 		width:169, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '차량수', 		name:'CAR_CNT', 	width:120, datatype:'number', 	isMultiLanguage:false, readonly:true},
					{caption: '실중량', 		name:'REAL_WGT', 	width:150, datatype:'number', 	isMultiLanguage:false, readonly:true},
					{caption: '입고시작일시', 	name:'IN_STA_DT', 	width:250, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '입고종료일시', 	name:'IN_END_DT', 	width:250, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
				];
			break;
			
			case 'SC2441GRID_L': //SC2441
				gridId = 'SC2441GRID_L_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd = 'SC2441GRID_L_CD';
				};
				objItems = [
		            {groupname : 'divSearchGrp', caption:'B/D No'			,	name: 'bundle_no'      , width:'auto', datatype:'text'		, align:'center'    , isMultiLanguage : false   , required:true         },
		            {groupname : 'divSearchGrp', caption:'Pieces'			,	name: 'pcs_cnt'        , width:'20%', datatype:'number'	, align:'right'     , isMultiLanguage : false   , required:true         },
		            {groupname : 'divSearchGrp', caption:'Gross Weight(kg)'	,	name: 'gross_wgt'      , width:'20%', datatype:'number'	, align:'right'     , isMultiLanguage : false   , required:true         },
		            {groupname : 'divSearchGrp', caption:'Tare Weight(kg)'	,	name: 'pkg_mtrl_wgt'   , width:'20%', datatype:'number'	, align:'right'     , isMultiLanguage : false   , required:true         },
		            {groupname : 'divSearchGrp', caption:'Net Weight(kg)'	,	name: 'net_wgt'        , width:'20%', datatype:'number'	, align:'right'     , isMultiLanguage : false   , required:true         },

				];
				break;
			
			
			case 'SC2442GRID_L': //SC2441
				gridId = 'SC2442GRID_L_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd = 'SC2442GRID_L_CD';
				};
				objItems = [
		            {groupname : 'divSearchGrp',    caption: 'CONTAINER_SEQ'        , name:'CONTAINER_SEQ'  , width:'20%'		, datatype:'text'    	, required:true, hidden:true},
		            {groupname : 'divSearchGrp',    caption: 'Cont′ No'             , name:'cont_no'    	, width:'20%'		, datatype:'text'    	, required:true, align:'center'},
		            {groupname : 'divSearchGrp',    caption: 'B/D No'               , name:'bundle_no'  	, width:'auto'		, datatype:'text'     	, required:true, align:'center'},
		            {groupname : 'divSearchGrp',    caption: 'Pieces'               , name:'pcs_cnt'    	, width:'10%'		, datatype:'number'     , required:true},
		            {groupname : 'divSearchGrp',    caption: 'Gross Weight(kg)'     , name:'gross_wgt'  	, width:'20%'		, datatype:'number'     , required:true},
		            {groupname : 'divSearchGrp',    caption: 'Tare'                 , name:'pkg_mtrl_wgt'   , width:'10%'		, datatype:'number'     , required:true},
		            {groupname : 'divSearchGrp',    caption: 'Net Weight(kg)'       , name:'net_wgt'    	, width:'20%'		, datatype:'number'     , required:true},
				];
				break;
				
			case 'RK_RTN_SC4331_GRID_LIST': // SC4331
				gridId = 'gridRtnSC4331GridList';
				if (caption_flag) {
					sCaption = '';
					sItemCd = 'gridRtnSC4331GridList';
				};
				  objGrpItems = [
			   			{caption: '무게치설정'	, name: 'TP1'		, align: 'center', isMultiLanguage:false },
			   			{caption: '차량중량 오차 설정'	, name: 'TP2'		, align: 'center', isMultiLanguage:false },
			   			];
				  
				objItems = [

	                {caption : '계근대', name : 'GAUGE_CD',width:100,datatype : 'text',isMultiLanguage : false},
	                {caption : '최소무게(Kg)',name : 'MIN_WGT',width:150,datatype : 'integer',align : 'center', group: "TP1", isMultiLanguage : false,maxlength: 5},
	                {caption : '최대무게(Kg)',name : 'MAX_WGT',width:150,datatype : 'integer',align : 'center', group: "TP1", isMultiLanguage : false,maxlength: 5},
	                {caption : '최소실상차량(Kg)',name : 'MIN_LOAD_WGT',width:150,datatype : 'integer',align : 'center', group: "TP1", isMultiLanguage : false,maxlength: 5},
	                {caption : '내수전기동오차중량(Kg)',name : 'DOMESTIC_TOL_WGT',width:200,datatype : 'integer',align : 'center',isMultiLanguage : false,maxlength: 5},
	                {caption : '수출전기동오차중량(Kg)',name : 'EXPORT_TOL_WGT',width:200,datatype : 'integer',align : 'center',isMultiLanguage : false,maxlength: 5},
	                {caption : 'FerroSand중량(Kg)',name : 'FERROSAND_WGT',width:200,datatype : 'integer',align : 'center',isMultiLanguage : false,maxlength: 5},
	                {caption : '출고차량(Kg)',name : 'OUT_TOL_WGT',width:150,datatype : 'integer',align : 'center', group: "TP2", isMultiLanguage : false,maxlength: 5},
	                {caption : '입고차량(Kg)',name : 'IN_TOL_WGT',width:150,datatype : 'integer',align : 'center', group: "TP2", isMultiLanguage : false,maxlength: 5},
	            ];
				break;
				
			case 'SAMPLE_CAR_GRID_SC2136': //SC2136
				gridId = 'gridSampleCar2136';
				if(caption_flag){
					sCaption = '';
					sItemCd = 'CAP_SAMPLE_CAR_GRID_SC2136';
				};
				objItems = [
					{caption: '품목코드', 		name:'ITEM_CD', 			width:150, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '품목명', 		name:'ITEM_NM', 			width:240, datatype:'text', 	isMultiLanguage:false, readonly:true},
					{caption: '거래처코드',	name:'VENDOR_CD', 			width:150, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '거래처명', 		name:'VENDOR_NM', 			width:240, datatype:'text', 	isMultiLanguage:false, readonly:true},
					{caption: 'Lot번호', 		name:'LOT_NO', 				width:150, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '차량수', 		name:'CAR_CNT', 			width:150, datatype:'number', 	isMultiLanguage:false, readonly:true},
					{caption: '실중량', 		name:'REAL_WGT', 			width:150, datatype:'number', 	isMultiLanguage:false, readonly:true},
					{caption: '정상 입고 수', 	name:'NORMAL_IN_CNT', 		width:150, datatype:'number', 	isMultiLanguage:false, readonly:true,},
					{caption: '시간외 입고 수', 	name:'OVER_TIME_IN_CNT', 	width:150, datatype:'number', 	isMultiLanguage:false, readonly:true,},
					{caption: '정상 비율', 	name:'NORMAL_RATE', 		width:150, datatype:'number', 	isMultiLanguage:false, readonly:true,},
					{caption: '시간외 비율', 	name:'OVER_TIME_RATE', 		width:150, datatype:'number', 	isMultiLanguage:false, readonly:true,},
				];
			break;
			
			case 'SAMPLE_CAR_GRID_SC2136_DTL': //SC2136
				gridId = 'gridSampleCar2136Dtl';
				if(caption_flag){
					sCaption = '';
					sItemCd = 'CAP_SAMPLE_CAR_GRID_SC2136_DTL';
				};
				objItems = [
					{caption: '품목코드', 		name:'ITEM_CD', 		width:150, 	datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '품목명', 		name:'ITEM_NM', 		width:200, 	datatype:'text', 	isMultiLanguage:false, readonly:true},
					{caption: '거래처코드',	name:'VENDOR_CD', 		width:150, 	datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '거래처명', 		name:'VENDOR_NM', 		width:200, 	datatype:'text', 	isMultiLanguage:false, readonly:true},
					{caption: '차량번호', 		name:'CAR_ID', 			width:150, 	datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '운전자', 		name:'DRIVER', 			width:120, 	datatype:'number', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '중량', 		name:'WGT',		 		width:150, 	datatype:'number', 	isMultiLanguage:false, readonly:true},
					{caption: '입고시작일시', 	name:'IN_STA_DT', 		width:230, 	datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '입고종료일시', 	name:'IN_END_DT', 		width:230, 	datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '샘플번호', 		name:'SAMPLE_NO', 		width:120, 	datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '샘플순번', 		name:'SAMPLE_SEQ', 		width:120, 	datatype:'number', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption: '시간외여부', 	name:'OVER_TIME_FL', 	width:0, 	datatype:'text', 	isMultiLanguage:false, hidden:true, align:'center'},
					
				];
			break;
			
			case 'G_SC2351' : //SC2351
				 gridId = 'G_SC2351_ID';
				 if(caption_flag){
					 sCaption = '';
					 sItemCd = '';
				 };
				 
				 objItems = [
					 	{caption: '월'			, name:'WRK_MNT'			, width: '8%'	, datatype:'text'		, align:'center', readonly:true},
					 	{caption: 'NO'			, name:'WRK_NO'				, width: '2%'	, datatype:'text'		, align:'center', readonly:true},
					 	{caption: '선명'			, name:'VESSEL_NM'			, width: '6%'	, datatype:'text'		, align:'left'	, maxlength:50	, cellbeginedit: f_cellbeginedit},
					 	{caption: '화물량'		, name:'SHIPMT_QTY'			, width: '3%'	, datatype:'number'		, align:'right'	, maxlength:22	, cellbeginedit: f_cellbeginedit},
					 	{caption: '입항일시'		, name:'IN_PORT_DTM'		, width: '8%'	, datatype:'datetime'	, align:'center', cellbeginedit: f_cellbeginedit},
					 	{caption: '접안일시'		, name:'BRHNG_DTM'			, width: '8%'	, datatype:'datetime'	, align:'center', cellbeginedit: f_cellbeginedit},
					 	{caption: '작업완료일시'	, name:'WRK_END_DTM'		, width: '8%'	, datatype:'datetime'	, align:'center', cellbeginedit: f_cellbeginedit},
					 	{caption: '출항일시'		, name:'OUT_PORT_DTM'		, width: '8%'	, datatype:'datetime'	, align:'center', cellbeginedit: f_cellbeginedit},
					 	{caption: '접안시간(분)'	, name:'BRHNG_TIME'			, width: '5%'	, datatype:'text'		, align:'right'	, readonly:true},
					 	{caption: '작업시간(분)'	, name:'WRK_TIME'			, width: '5%'	, datatype:'text'		, align:'right'	, readonly:true},
					 	{caption: '부두'			, name:'PORT_NM'			, width: '2%'	, datatype:'text'		, align:'left'	, maxlength:50	, cellbeginedit: f_cellbeginedit},
					 	{caption: '작업방법'		, name:'WRK_MTH'			, width: '4%'	, datatype:'text'		, align:'left'	, maxlength:6	, cellbeginedit: f_cellbeginedit},
					 	{caption: '기타'			, name:'ETC_CONTENTS'		, width: '5%'	, datatype:'text'		, align:'left'	, maxlength:10	, cellbeginedit: f_cellbeginedit},
					 	{caption: '재고'			, name:'STOCK_QTY'			, width: '3%'	, datatype:'number'		, align:'right'	, maxlength:22	, cellbeginedit: f_cellbeginedit},
					 	{caption: '특이사항'		, name:'REMARK'				, width: '4%'	, datatype:'text'		, align:'left'	, maxlength:100	, cellbeginedit: f_cellbeginedit},
					 	{caption: '인수업체'		, name:'ACQSTN_CMP_NM'		, width: '4%'	, datatype:'text'		, align:'left'	, maxlength:50	, cellbeginedit: f_cellbeginedit},
					 	{caption: '인수업체주소'	, name:'ACQSTN_CMP_ADDR'	, width: '6%'	, datatype:'text'		, align:'left'	, maxlength:100	, cellbeginedit: f_cellbeginedit},
					 	{caption: '인수업체연락처'	, name:'ACQSTN_CMP_TEL_NO'	, width: '6%'	, datatype:'text'		, align:'center', maxlength:14	, cellbeginedit: f_cellbeginedit}
					 ];
				 fc_setRequiredInCol ( gridId, [ 'WRK_MNT','WRK_NO','VESSEL_NM','SHIPMT_QTY'] );
				 fc_setKeysInCol     ( gridId, [ 'WRK_MNT', 'WRK_NO'] );
				 break;
				 
			case 'G_SC2352' : //SC2351
				 gridId = 'G_SC2352_ID';
				 if(caption_flag){
					 sCaption = '';
					 sItemCd = '';
				 };
				 
				 objItems = [
					 	{caption: ''			, name:'WRK_DT'			, width: '4%'	, datatype:'text'		, align:'center', hidden:true},
					 	{caption: ''			, name:'CHK_TP'			, width: '2%'	, datatype:'text'		, align:'center', hidden:true},
					 	{caption: ''			, name:'CHK_SEQ'		, width: '6%'	, datatype:'text'		, align:'center', hidden:true},
					 	{caption: '시간'			, name:'CHK_STA_TIME'	, width: '5%'	, datatype:'text'		, align:'center', hidden:true},
					 	{caption: ''			, name:'CHK_END_TIME'	, width: '8%'	, datatype:'text'		, align:'center', hidden:true},
					 	{caption: '조업내역'		, name:'OP_CONTENTS'	, width: '40%'	, datatype:'text'		, align:'left'	}
					 ];
				 
				 fc_setRequiredInCol ( gridId, [ 'OP_CONTENTS'] );
				 fc_setKeysInCol     ( gridId, [ 'WRK_DT', 'CHK_TP', 'CHK_SEQ'] );
				 
				 break;
				 
			case 'MTRL_IN_MGMT' : //SC2210
				gridId = 'gridMtrlInMgntId';
				if(caption_flag){
					sCaption = '';
					sItemCd ='CAP_MTRL_IN_MGMT';
				};
				objItems = [
					{caption:'입고예정일', 	name:'SCH_IN_DT', 		width:100, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption:'자재그룹', 		name:'MTRL_GROUP',		width:100, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'}, //lov로 변경해야됨
					{caption:'자재코드', 		name:'MTRL_CD', 		width:100, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption:'자재명', 		name:'MTRL_NM', 		width:100, datatype:'text', 	isMultiLanguage:false, readonly:true, },
					{caption:'PO번호', 		name:'PO_HEADER_NO', 	width:100, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption:'PO라인', 		name:'PO_HEADER_REV', 	width:100, datatype:'number', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption:'단위', 			name:'UNIT_CD', 		width:100, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption:'PO수량', 		name:'PO_QTY', 			width:100, datatype:'number', 	isMultiLanguage:false, readonly:true, },
					{caption:'단가', 			name:'IN_AMT', 			width:100, datatype:'number', 	isMultiLanguage:false, readonly:true, },
					{caption:'입고량 ', 		name:'IN_QTY', 			width:100, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'right'},
					{caption:'잔량', 			name:'REM_QTY', 		width:100, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'right'},
					{caption:'예약번호', 		name:'RESV_NO', 		width:100, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption:'예약자', 		name:'RESV_EMP_NM', 	width:100, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption:'거래처코드', 	name:'VENDOR_CD', 		width:100, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption:'거래처명', 		name:'VENDOR_NM', 		width:100, datatype:'text',	 	isMultiLanguage:false, readonly:true, },
					{caption:'기술검수', 		name:'INSP_TGT_IN', 	width:100, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					{caption:'검수확인', 		name:'INSP_CONFIRM_YN', width:100, datatype:'text', 	isMultiLanguage:false, readonly:true, align:'center'},
					
				];
				break;
				
			case 'G_SC3215' : //SC3215
				 gridId = 'G_SC3215_ID';
				 if(caption_flag){
					 sCaption = '';
					 sItemCd = '';
				 };
				 
				 objGrpItems = [
			   			{caption: '선사 Container 사용료'	, name: 'GRP_CT'			, align: 'center' },
			   			{caption: 'CY사용 경과보관료'		, name: 'GRP_CY'			, align: 'center' }
						];
				 
				 objItems = [
					 	{caption: '진행상태'	, name:'PROG_STS'					, width: '3.5%'	, datatype:'text'	, align:'center', readonly:true},
					 	{caption: '품목구분'	, name:'ITEM_TP'					, width: '8.5%'	, datatype:'text'	, align:'center', readonly:true},
					 	{caption: '품목히든'	, name:'ITEM_CD'					, width: 0		, datatype:'text'	, align:'center', readonly:true, hidden:true},
					 	{caption: '품목'		, name:'ITEM_NM'					, width: '6%'	, datatype:'text'	, align:'center', readonly:true},
					 	{caption: '차선번호'	, name:'SCH_NO'						, width: '4%'	, datatype:'text'	, align:'center', readonly:true},
					 	{caption: '공급자'	, name:'SUPPLIER_NM'				, width: '9%'	, datatype:'text'	, align:'left'	, readonly:true},
					 	{caption: '광종'		, name:'MINERAL_TP'					, width: '2%'	, datatype:'text'	, align:'left'	, readonly:true},
					 	{caption: '물량'		, name:'STOCK_WMT'					, width: '3%'	, datatype:'text'	, align:'right'	, readonly:true},
					 	{caption: '도착일자'	, name:'ARRIVAL_DT'					, width: '4.5%'	, datatype:'date'	, align:'center', readonly:true},
					 	{caption: '허용일수'	, name:'CONTAINER_ALWNC_DAYS'		, width: '3.5%'	, datatype:'number'	, align:'left'	, group: "GRP_CT", cellbeginedit: f_cellbeginedit},
					 	{caption: '허용기한'	, name:'CONTAINER_ALWNC_END_DT'		, width: '4.5%'	, datatype:'date'	, align:'center', group: "GRP_CT", cellbeginedit: f_cellbeginedit},
					 	{caption: '반출예정일'	, name:'CONTAINER_TAKEOUT_SCH_DT'	, width: '4.5%'	, datatype:'date'	, align:'center', group: "GRP_CT", cellbeginedit: f_cellbeginedit},
					 	{caption: '반출일자'	, name:'CONTAINER_TAKEOUT_DT'		, width: '4.5%'	, datatype:'date'	, align:'center', group: "GRP_CT", cellbeginedit: f_cellbeginedit},
					 	{caption: '지체일수'	, name:'CONTAINER_DELAY_DAYS'		, width: '3.5%'	, datatype:'text'	, align:'right'	, group: "GRP_CT", cellbeginedit: f_cellbeginedit},
					 	{caption: '지체비용'	, name:'CONTAINER_DELAY_AMT'		, width: '4%'	, datatype:'number'	, align:'right'	, group: "GRP_CT", cellbeginedit: f_cellbeginedit},
					 	{caption: '허용일수'	, name:'CY_ALWNC_DAYS'				, width: '3.5%'	, datatype:'number'	, align:'left'	, group: "GRP_CY", cellbeginedit: f_cellbeginedit},
					 	{caption: '허용기한'	, name:'CY_ALWNC_END_DT'			, width: '4.5%'	, datatype:'date'	, align:'center', group: "GRP_CY", cellbeginedit: f_cellbeginedit},
					 	{caption: '반출예정일'	, name:'CY_TAKEOUT_SCH_DT'			, width: '4.5%'	, datatype:'date'	, align:'center', group: "GRP_CY", cellbeginedit: f_cellbeginedit},
					 	{caption: '반출일자'	, name:'CY_TAKEOUT_DT'				, width: '4.5%'	, datatype:'date'	, align:'center', group: "GRP_CY", cellbeginedit: f_cellbeginedit},
					 	{caption: '지체일수'	, name:'CY_DELAY_DAYS'				, width: '3.5%'	, datatype:'text'	, align:'right'	, group: "GRP_CY", cellbeginedit: f_cellbeginedit},
					 	{caption: '지체비용'	, name:'CY_DELAY_AMT'				, width: '4%'	, datatype:'number'	, align:'right'	, group: "GRP_CY", cellbeginedit: f_cellbeginedit},
					 	{caption: '총지체금액'	, name:'TOT_DELAY_AMT'				, width: '5%'	, datatype:'number'	, align:'right'	, cellbeginedit: f_cellbeginedit},
					 	{caption: '지체사유'	, name:'DELAY_RSN'					, width: '4%'	, datatype:'text'	, align:'left'	, cellbeginedit: f_cellbeginedit}
					 ];
				 
				 fc_setRequiredInCol ( gridId, [ 'PROG_STS','ITEM_TP','ITEM_CD','ITEM_NM','SCH_NO'] );
				 //fc_setKeysInCol     ( gridId, [ 'WRK_DT', 'CHK_TP', 'CHK_SEQ'] );
				 
				 break;
		
		case 'BUNKER_ORDER_1'://SC2160
			gridId = 'gridBunkerOrder1Id';
			if(caption_flag){
				sCaption  = '';
				sItemCd = 'CAP_BUNKER_ORDER_1';
			};
			objItems = [
				{caption:'오더일자', 		name:'ORD_DT', 		width:100, datatype:'text', 	isMultiLanguage:false, align:'center', readonly:true},
				{caption:'오더순번', 		name:'ORD_SEQ',		width:100, datatype:'text', 	isMultiLanguage:false, align:'center', readonly:true},
				{caption:'거래처코드', 	name:'VENDOR_CD', 	width:120, datatype:'popup', 	isMultiLanguage:false, align:'center'},
				{caption:'거래처명', 		name:'VENDOR_NM',	width:170, datatype:'text', 	isMultiLanguage:false, },
				{caption:'품목코드', 		name:'ITEM_CD', 	width:100, datatype:'popup', 	isMultiLanguage:false, align:'center'},
				{caption:'품목명', 		name:'ITEM_NM', 	width:170, datatype:'text', 	isMultiLanguage:false,},
				{caption:'물량(L)', 		name:'ORD_WGT', 	width:100, datatype:'number', 	isMultiLanguage:false, },
				{caption:'납품시간(h)', 	name:'DLV_TIME',	width:120, datatype:'text', 	isMultiLanguage:false, align:'right', maxlength:2, },
				{caption:'공장', 			name:'PLANT', 		width:100, datatype:'lov', 		isMultiLanguage:false, align:'center'},
				{caption:'비고', 			name:'REMARK', 		width:200, datatype:'text', 	isMultiLanguage:false, },
			];
			fc_addCodeList( {object: gridId+'.ITEM_CD', code: 'MC_ITEM_LIST', title: '품목 목록', manKey: '', cdParam:'2' });
			fc_addCodeList( {object: gridId+'.VENDOR_CD', code: 'MC_VENDOR_LIST', title: '거래처 목록', manKey: '' ,cdParam:'1'});
			
			fc_addDataInGettedLov('PLANT', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
			fc_addDataInSettingLov({object : gridId+'.PLANT',code : 'YARD_PLANT_TP',format : 'V',nullable:false, defval : ''});
			break;
				
		case 'BUNKER_ORDER_2'://SC2160
			gridId = 'gridBunkerOrder2Id';
			if(caption_flag){
				sCaption  = 'Bunker 유 배차 현황';
				sItemCd = 'CAP_BUNKER_ORDER_2';
			};
			objItems = [
				{caption:'차량번호', 		name:'CAR_NO', 			width:120, datatype:'text', 	isMultiLanguage:false, align:'center', readonly:true},
				{caption:'기사명', 		name:'DRIVER_NM', 		width:100, datatype:'text', 	isMultiLanguage:false, align:'center', readonly:true},
				{caption:'품목코드', 		name:'ITEM_CD', 		width:100, datatype:'text', 	isMultiLanguage:false, align:'center', readonly:true},
				{caption:'품목명', 		name:'ITEM_NM', 		width:150, datatype:'text', 	isMultiLanguage:false, align:'center', readonly:true},
				{caption:'공장', 			name:'ORD_WGT', 		width:90, datatype:'number', 	isMultiLanguage:false, readonly:true},
				{caption:'배차상태', 		name:'CAR_ALLOC_STS',	width:100, datatype:'lov', 		isMultiLanguage:false, align:'center', readonly:true},
			];
			 fc_addDataInGettedLov('CAR_ALLOC_STS', {code : 'CAR_ALLOC_STS',tags : '',alias : ''});
			 fc_addDataInSettingLov({object : gridId+'.CAR_ALLOC_STS',code : 'CAR_ALLOC_STS',format : 'V',nullable:false, defval : ''});
			break;
				
		case 'BUNKER_ORDER_3'://SC2160
			gridId = 'gridBunkerOrder3Id';
			if(caption_flag){
				sCaption  = 'Bunker 유 출고 현황';
				sItemCd = 'CAP_BUNKER_ORDER_3';
			};
			objItems = [
				{caption:'차량번호', 		name:'CAR_NO', 			width:120, datatype:'text', 	isMultiLanguage:false, align:'center', readonly:true},
				{caption:'기사명', 		name:'DRIVER_NM', 		width:100, datatype:'text', 	isMultiLanguage:false, align:'center', readonly:true},
				{caption:'품목코드', 		name:'ITEM_CD', 		width:100, datatype:'text', 	isMultiLanguage:false, align:'center', readonly:true},
				{caption:'품목명', 		name:'ITEM_NM', 		width:170, datatype:'text', 	isMultiLanguage:false, align:'center', readonly:true},
				{caption:'공중량(kg)', 	name:'EMPTY_WGT', 		width:100, datatype:'number', 	isMultiLanguage:false, readonly:true},
				{caption:'실중량(kg)', 	name:'REAL_WGT', 		width:100, datatype:'number', 	isMultiLanguage:false, readonly:true},
				{caption:'총중량(kg)', 	name:'TOT_WGT', 		width:100, datatype:'number', 	isMultiLanguage:false, readonly:true},
				{caption:'입고시간', 		name:'IN_TIME',			width:110, datatype:'text', 	isMultiLanguage:false, align:'center', readonly:true},
				{caption:'출고시간', 		name:'OUT_TIME',		width:110, datatype:'text', 	isMultiLanguage:false, align:'center', readonly:true},
			];
			break;
			
			case '2421_GRID_T' : //SC2421
				gridId = '2421_GRID_T_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd ='2421_GRID_T_CD';
				};
				objItems = [
					{caption:'상차코드'	, name:'CAR_LOAD_CD'		, 	width:100		, datatype:'text'      , readonly:true,    hidden:true  ,align:'center'},
					{caption:'상차일자'	, name:'CAR_LOAD_DT'		, 	width:'auto'	, datatype:'text'      , readonly:true,    hidden:true  ,align:'center'},
					{caption:'판매처코드'	, name:'VENDOR_CD'			, 	width:150		, datatype:'text'      , readonly:true  ,align:'center'},
					{caption:'판매처명'	, name:'VENDOR_NM'			, 	width:'auto'	, datatype:'text'      , readonly:true  ,align:'left'},
					{caption:'납품처코드'	, name:'SUB_VENDOR_CD'		, 	width:150		, datatype:'text'      , readonly:true  ,align:'center'},
					{caption:'납품처명'	, name:'SUB_VENDOR_NM'		, 	width:'auto'	, datatype:'text'      , readonly:true  ,align:'left'},
					{caption:'품목'		, name:'ITEM_CD'			, 	width:120		, datatype:'text'      , readonly:true,    },
					{caption:'중량(kg)'	, name:'CAR_LOAD_WGT'		, 	width:100		, datatype:'number'    , readonly:true,    },
					{caption:'출발지명'	, name:'TRSP_SECT_NM_STA'	, 	width:'auto'	, datatype:'text'      , readonly:true,    },
					{caption:'도착지명'	, name:'TRSP_SECT_NM_END'	, 	width:'auto'	, datatype:'text'      , readonly:true,    },
					{caption:'출발지'		, name:'TRSP_SECT_CD_STA'	, 	width:100		, datatype:'text'      , readonly:true,    hidden:true},
					{caption:'도착지'		, name:'TRSP_SECT_CD_END'	, 	width:100		, datatype:'text'      , readonly:true,    hidden:true},
					{caption:'공장'		, name:'PLANT_NO'			, 	width:80		, datatype:'text'      , readonly:true  ,align:'center'},
					{caption:'등급'		, name:'PROD_GRD'			, 	width:80		, datatype:'text'      , readonly:true  ,align:'center'},
					{caption:'상태'		, name:'CAR_ALLOC_STS'		, 	width:100		, datatype:'text'      , readonly:true  ,align:'center'},
					];
				break;
				
			case '2421_GRID_BL' : //SC2421
				gridId = '2421_GRID_BL_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd ='2421_GRID_BL_CD';
				};
				objItems = [
					{caption:'차량번호'   , name:'CAR_NO'       , 	width:150      , datatype:'text'   , readonly:true,},
					{caption:'운전자명'   , name:'DRIVER_NM'    , 	width:'auto'   , datatype:'text'   , readonly:true,},
					];
				break;
				
			case '2421_GRID_BR' : //SC2421
				gridId = '2421_GRID_BR_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd ='2421_GRID_BR_CD';
				};
				objItems = [
		            {caption:'배차코드'		, name:'CAR_ALLOC_CD'         , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
		            {caption:'배차일자'		, name:'CAR_ALLOC_DT'         , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
		            {caption:'판매처'			, name:'VENDOR_CD'            , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
		            {caption:'납품처'			, name:'SUB_VENDOR_CD'        , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
		            {caption:'품목'			, name:'ITEM_CD'              , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
		            {caption:'운송회사'		, name:'TRSP_CMP_CD'          , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
		            {caption:'차량번호'		, name:'CAR_NO'               , 	width:100   , datatype:'text'   , readonly:true     },
		            {caption:'운전자명'		, name:'DRIVER_NM'            , 	width:100   , datatype:'text'   , readonly:true     },
		            {caption:'적재량'			, name:'LOAD_WGT'             , 	width:100   , datatype:'text'   },
		            {caption:'단위'			, name:'TRSP_UNIT'            , 	width:100   , datatype:'text'   },
		            {caption:'컨테이너수'		, name:'CONTAINER_CNT'        , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
		            {caption:'컨테이너번호1'	, name:'CONTAINER_NO1'        , 	width:100   , datatype:'text'   },
		            {caption:'컨테이너번호2'	, name:'CONTAINER_NO2'        , 	width:100   , datatype:'text'   },
		            {caption:'운송구간코드시작'	, name:'TRSP_SEC_CD_STA'      , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
		            {caption:'운송구간코드종료'	, name:'TRSP_SEC_CD_END'      , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
		            {caption:'배차상태'		, name:'CAR_ALLOC_STS'        , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
		            {caption:'삭제여부'		, name:'DEL_FLAG'             , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
		            {caption:'상차코드'		, name:'CAR_LOAD_CD'          , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
		            {caption:'운송구간명시작'	, name:'TRSP_SEC_NM_STA'      , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
		            {caption:'운송구간명종료'	, name:'TRSP_SEC_NM_END'      , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
		            {caption:'차량입출고번호'	, name:'CAR_INOUT_NO'         , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
		            {caption:'메일유무'		, name:'MAIL_YN'              , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
		            {caption:'입출고구분'		, name:'INOUT_TP'             , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
		            {caption:'운송위임장번호'	, name:'TRSP_POA_NO'          , 	width:100   , datatype:'text'   , readonly:true     , hidden:true},
					];
				break;
				
			case 'SC2443GRID_L' : //SC2443
				gridId = 'SC2443GRID_L_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd ='SC2443GRID_L_CD';
				};
				objItems = [
					{caption:'출고번호'		, name:'CAR_INOUT_NO'       , 	width:200		, datatype:'text'   , readonly:true     ,  align:'center'},
					{caption:'입고시간'		, name:'CAR_IN_DTM'       	, 	width:200		, datatype:'text'   , readonly:true     ,  align:'center'},
					{caption:'차량번호'		, name:'CAR_ID'             , 	width:200		, datatype:'text'   , readonly:true     ,  align:'center'},
					{caption:'기사명'			, name:'WRKER_NM'           , 	width:150   	, datatype:'text'   , readonly:true     ,  align:'center'},
					{caption:'품목코드'		, name:'ITEM_CD'            , 	width:100   	, datatype:'text'   , readonly:true     ,  align:'center'},
					{caption:'품목명'			, name:'ITEM_NM'            , 	width:100   	, datatype:'text'   , readonly:true     ,  align:'center'},
					{caption:'판매처코드'		, name:'VENDOR_CD'          , 	width:'auto'   	, datatype:'text'   , readonly:true     ,  align:'left'},
					{caption:'판매처명'		, name:'VENDOR_NM'          , 	width:'auto'   	, datatype:'text'   , readonly:true     ,  align:'left'},
					{caption:'납품처코드'		, name:'SUB_VENDOR_CD'      , 	width:'auto'   	, datatype:'text'   , readonly:true     ,  align:'left'},
					{caption:'납품처명'		, name:'SUB_VENDOR_NM'      , 	width:'auto'   	, datatype:'text'   , readonly:true     ,  align:'left'},
					{caption:'공중량'			, name:'EMPTY_WGT'          , 	width:200   	, datatype:'number' , readonly:true     ,  align:'right'},
					{caption:'상차'		    , name:'LOAD_FLAG'          , 	width:100   	, datatype:'checkbox'  , readonly:true     ,  align:'center'},
					];
				break;
				
			case 'SC2443GRID_BOTTOM' : //SC2443
				gridId = 'SC2443GRID_BOTTOM_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd ='SC2443GRID_BOTTOM_CD';
				};
				objItems = [
					{caption:'일자'		        , name:'pkg_dt'             , 	width:'auto'		, datatype:'text'        ,  align:'center'},
					{caption:'위치'		        , name:'yard_loc_cd'        , 	width:80		, datatype:'text'        ,  align:'center'},
					{caption:'운송회사명'			, name:'trsp_cmp_nm'        , 	width:200		, datatype:'text'        ,  align:'left'},
					{caption:'포워딩업체'			, name:'forward_cmp_nm'     , 	width:200		, datatype:'text'        ,  align:'left'},
					{caption:'판매처코드'			, name:'vendor_cd'          , 	width:100		, datatype:'text'        ,  align:'center'},
					{caption:'판매처명'		    , name:'vendor_nm'          , 	width:200		, datatype:'text'        ,  align:'left'},
					{caption:'납품처코드'			, name:'sub_vendor_cd'      , 	width:100		, datatype:'text'        ,  align:'center'},
					{caption:'납품처명'		    , name:'sub_vendor_nm'      , 	width:200		, datatype:'text'        ,  align:'left'},
					{caption:'컨테이너순번'			, name:'container_seq'      , 	width:80		, datatype:'text'        ,  align:'center'},
					{caption:'Gross Weight'		, name:'gross_wgt'          , 	width:200		, datatype:'number'      ,  align:'right'},
					{caption:'Tare'		        , name:'tare_wgt'           , 	width:200		, datatype:'number'      ,  align:'right'},
					{caption:'Net Weight'		, name:'net_wgt'            , 	width:200		, datatype:'number'      ,  align:'right'},
					];
				break;
				
				
			case 'SC2444GRID' : //SC2444
				gridId = 'SC2444GRID_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd ='SC2444GRID_CD';
				};
				objItems = [
					{caption:'일자'   	, name:'CAR_IN_DT'       , 	width:80      , datatype:'text'   , readonly:true, align:'center'},
					{caption:'차량번호'   , name:'CAR_ID'       	 , 	width:100      , datatype:'text'   , readonly:true, align:'center'},
					{caption:'기사명'   	, name:'WRKER_NM'       , 	width:80      , datatype:'text'   , readonly:true, align:'center'},
					{caption:'품목코드'   , name:'ITEM_CD'       	 , 	width:150      , datatype:'text'   , readonly:true, align:'center'},
					{caption:'공중량'   	, name:'EMPTY_WGT'       , 	width:100      , datatype:'number'   , readonly:true, align:'right'},
					{caption:'실중량'   	, name:'REAL_WGT'        , 	width:100      , datatype:'number'   , readonly:true, align:'right'},
					{caption:'총중량'   	, name:'TOT_WGT'       	 , 	width:100      , datatype:'number'   , readonly:true, align:'right'},
					{caption:'운송회사'   , name:'TRSP_CMP_NM'     , 	width:150      , datatype:'text'   , readonly:true, align:'left'},
					{caption:'팩킹일자'   , name:'PKG_DT'       	 , 	width:80      , datatype:'text'   , readonly:true, align:'center'},
					{caption:'공장'   	, name:'PLANT_NO'        , 	width:50      , datatype:'text'   , readonly:true, align:'center'},
					{caption:'위치'   	, name:'YARD_LOC_CD'     , 	width:50      , datatype:'text'   , readonly:true, align:'center'},
					{caption:'등급'   	, name:'PROD_GRD'        , 	width:50      , datatype:'text'   , readonly:true, align:'center'},
					{caption:'Clinch'   , name:'CLINCH_FLAG'     , 	width:50      , datatype:'text'   , readonly:true, align:'center'},
					{caption:'판매처명'   , name:'VENDOR_NM'       , 	width:100      , datatype:'text'   , readonly:true, align:'left'},
					{caption:'납품처명'   , name:'SUB_VENDOR_NM'   , 	width:100      , datatype:'text'   , readonly:true, align:'left'},
					{caption:'컨테이너순번', name:'CONTAINER_SEQ'   , 	width:100      , datatype:'text'   , readonly:true, align:'center'},
					{caption:'Gross중량' , name:'GROSS_WGT'       , 	width:100      , datatype:'number'   , readonly:true, align:'right'},
					{caption:'Tare중량'  , name:'TARE_WGT'        , 	width:100      , datatype:'number'   , readonly:true, align:'right'},
					{caption:'Net중량'   , name:'NET_WGT'         , 	width:100      , datatype:'number'   , readonly:true, align:'right'},
					{caption:'컨테이너1'  , name:'CONTAINER_NO1'   , 	width:100      , datatype:'text'   , readonly:true, align:'center'},
					{caption:'Seal No'  , name:'SEAL_NO'         , 	width:150      , datatype:'text'   ,              align:'center'},
					{caption:'출고번호'   , name:'CAR_INOUT_NO'    , 	width:150      , datatype:'text'   , readonly:true, align:'center'},
					];
				break;
				
			case 'SC2445GRIDLT' : //SC2445
				gridId = 'SC2445GRIDLT_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd ='SC2445GRIDLT_CD';
				};
				objItems = [
		            {caption:'공장'   		, name:'plant_no'          , 	width:120     , datatype:'text'   		, readonly:true, align:'center',hidden:true},
		            {caption:'출고일자'   		, name:'prod_out_dt'       , 	width:120     , datatype:'text'   		, readonly:true, align:'center'},
		            {caption:'Packing일자'   	, name:'pkg_dt'        	   , 	width:120     , datatype:'text'   		, readonly:true, align:'center'},
		            {caption:'등급'   		, name:'prod_grd'          , 	width:50      , datatype:'text'    		, readonly:true, align:'center'},
		            {caption:'위치'   		, name:'yard_loc_cd'       , 	width:50      , datatype:'text'    		, readonly:true, align:'center'},
		            {caption:'번들수'   		, name:'bundle_cnt'        , 	width:80      , datatype:'number'    	, readonly:true, align:'right'},
		            {caption:'총중량'   		, name:'tot_wgt'           , 	width:'auto'  , datatype:'number'   	, readonly:true, align:'right'},
		            {caption:'CY'   		, name:'cy_send_yn'        , 	width:50      , datatype:'checkbox'   	, readonly:true, align:'center'},
		            {caption:'자재코드'   		, name:'mtrl_cd'           , 	width:100     , datatype:'text'   		, readonly:true, align:'center'},
		            {caption:'Clinch'   	, name:'clinch_flag'       , 	width:80      , datatype:'checkbox'   	, readonly:true, align:'center'},
		            {caption:'문서번호'   		, name:'doc_no'            , 	width:100     , datatype:'text'   		, readonly:true/*, hidden:true*/, align:'center'},
					];
				break;
				
			case 'SC2445GRIDR' : //SC2445
				gridId = 'SC2445GRIDR_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd ='SC2445GRIDR_CD';
				};
				objItems = [
		            {caption:'생산입고번호'   	, name:'prod_in_no'    , 	width:'auto', datatype:'text'       , readonly:true, align:'center'},
		            {caption:'Lot번호'   	    , name:'lot_no'         , 	width:200   , datatype:'text'       , readonly:true, align:'center'},
		            {caption:'등급'   	    , name:'prod_grd'       , 	width:100    , datatype:'text'       , readonly:true, align:'center'},
		            {caption:'위치번호'   	    , name:'yard_col'       , 	width:100   , datatype:'text'       , readonly:true, align:'center'},
		            {caption:'PCS'   	    , name:'prod_cnt'       , 	width:100   , datatype:'number'     , readonly:true, align:'right'},
		            {caption:'Clinch'   	, name:'clinch_flag'    , 	width:100    , datatype:'text'       , readonly:true, align:'center'},
		            {caption:'실중량'   	    , name:'real_wgt'       , 	width:150   , datatype:'number'     , readonly:true, align:'right'},
					];
				break;
				
				
				
			case 'SC2444CUSPOPUP' : //SC2444
				gridId = 'SC2444CUSPOPUP_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd ='SC2444CUSPOPUP_CD';
				};
				objItems = [
					{caption:'No'   					, name:'no'			    , 	width:50      , datatype:'text'   	 , readonly:true, align:'center'},
					{caption:'Container & Seal No'   	, name:'car_id'         , 	width:'auto'   , datatype:'text'   	 , readonly:true, align:'center'},
					{caption:'B/D No'   				, name:'bundle_no'      , 	width:100      , datatype:'text'   	 , readonly:true, align:'center'},
					{caption:'Pieces'   				, name:'pcs_cnt'        , 	width:80      , datatype:'text'   	 , readonly:true, align:'center'},
					{caption:'Gross Weight(Kg)'   		, name:'gross_wgt'      , 	width:150      , datatype:'number'   , readonly:true, align:'right'},
					{caption:'Tare'   					, name:'tare_wgt'       , 	width:80      , datatype:'number'   , readonly:true, align:'right'},
					{caption:'Net Weight(Kg)'   		, name:'net_wgt'       	, 	width:150      , datatype:'number'   , readonly:true, align:'right'},
					];
				break;
				
			case 'TRSP_COST_GRID_1310' : //sc1310
				gridId = 'gridTrspCost1310Id';
				if(caption_flag){
					sCaption = '';
					sItemCd = 'CAP_TRSP_COST_GRID_1310';
				};
				objItems = [
					{caption:'거래처코드', 		name:'VENDOR_CD', 			width:100, datatype:'text', 	align:'center'},
					{caption:'거래처명', 			name:'VENDOR_NM', 			width:100, datatype:'text'},
					{caption:'납품처코드', 		name:'SUB_VENDOR_CD', 		width:100, datatype:'text', 	align:'center'},
					{caption:'납품처명', 			name:'SUB_VENDOR_NM', 		width:100, datatype:'text'},
					{caption:'운송업체코드', 		name:'TRSP_CMP_CD', 		width:100, datatype:'text', 	align:'center'},
					{caption:'운송업체명', 		name:'TRSP_CMP_NM', 		width:100, datatype:'text'},
					{caption:'입출고구분', 		name:'INOUT_TP', 			width:100, datatype:'text', 	align:'center'},
					{caption:'입출고구분명',		name:'INOUT_TP_NM', 		width:100, datatype:'text', 	align:'center'},
					{caption:'품목코드', 			name:'ITEM_CD', 			width:100, datatype:'text', 	align:'center'},
					{caption:'품목명', 			name:'ITEM_NM', 			width:100, datatype:'text', },
					{caption:'차량입고일', 		name:'CAR_IN_DT', 			width:100, datatype:'text', 	align:'center'},
					{caption:'차량번호', 			name:'CAR_NO',				width:100, datatype:'text', 	align:'center'},
					{caption:'컨테이너수', 		name:'CONTAINER_CNT', 		width:100, datatype:'number', 	align:'center'},
					{caption:'실중량', 			name:'REAL_WGT', 			width:100, datatype:'number', },
					{caption:'운송단가', 			name:'TRSP_UNIT_COST', 		width:100, datatype:'number', },
					{caption:'기본단가', 			name:'BASE_COST', 			width:100, datatype:'number'},
					{caption:'추가비용합계', 		name:'ADD_COST_SUM', 		width:100, datatype:'number'},
					{caption:'취소비용', 			name:'CANCLE_COST', 		width:100, datatype:'number'},
					{caption:'공드럼수', 			name:'EMPTY_DRUM_CNT', 		width:100, datatype:'number'},
					{caption:'총비용', 			name:'TOT_COST', 			width:100, datatype:'number'},
					{caption:'비용마감일', 		name:'COST_CLOSE_DT', 		width:100, datatype:'text', 	align:'center'},
					{caption:'운송비코드', 		name:'TRSP_COST_CD', 		width:100, datatype:'text', 	align:'center'},
					{caption:'운송비IDX', 		name:'TRSP_COST_IDX', 		width:100, datatype:'text', 	align:'center'},
					{caption:'부가세여부', 		name:'VAT_FL', 				width:100, datatype:'text', 	align:'center'},
					{caption:'거래처코드', 		name:'VENDOR_CD2', 			width:100, datatype:'text', 	hidden:true},
					{caption:'납품처코드', 		name:'SUB_VENDOR_CD2', 		width:100, datatype:'text', 	hidden:true},
					{caption:'운송업체코드', 		name:'TRSP_CMP_CD2', 		width:100, datatype:'text', 	hidden:true},
					{caption:'품목코드', 			name:'ITEM_CD2', 			width:100, datatype:'text', 	hidden:true},
					{caption:'운송구간단위코드', 	name:'TRSP_SECT_UNIT_CD', 	width:100, datatype:'text', 	align:'center'},
					{caption:'운송구간코드시작', 	name:'TRSP_SECT_CD_STA', 	width:100, datatype:'text', 	align:'center'},
					{caption:'운송구간명시작', 		name:'TRSP_SECT_NM_STA', 	width:100, datatype:'text',		align:'center'},
					{caption:'운송구간코드종료', 	name:'TRSP_SECT_CD_END', 	width:100, datatype:'text', 	align:'center'},
					{caption:'운송구간명종료', 		name:'TRSP_SECT_NM_END', 	width:100, datatype:'text', 	align:'center'},
					{caption:'차선번호', 			name:'SCH_NO', 				width:100, datatype:'text', 	align:'center'},
					{caption:'운송단가', 			name:'TRSP_UNIT_COST2', 	width:100, datatype:'number', 	hidden:true},
					{caption:'삭제여부', 			name:'DEL_FLAG', 			width:100, datatype:'text', 	hidden:true},
					{caption:'비용마감일자', 		name:'COST_CLOSE_DT2', 		width:100, datatype:'text', 	hidden:true},
					{caption:'비용마감여부', 		name:'COST_CLOSE_YN', 		width:100, datatype:'text'},
					{caption:'SAP인터페이스일자', 	name:'SAP_IF_DT', 			width:100, datatype:'text'},
					{caption:'SAP인터페이스설명', 	name:'SAP_IF_DESCR', 		width:100, datatype:'text'},
					{caption:'PSA중량', 			name:'PSA_WGT', 			width:100, datatype:'text'},
					{caption:'추가내역1', 			name:'ADD_TEXT_01', 		width:100, datatype:'text'},
					{caption:'추가비용1', 			name:'ADD_COST_01', 		width:100, datatype:'number'},
					{caption:'추가내역2', 			name:'ADD_TEXT_02', 		width:100, datatype:'text'},
					{caption:'추가비용2', 			name:'ADD_COST_02', 		width:100, datatype:'number'},
					{caption:'추가내역3', 			name:'ADD_TEXT_03', 		width:100, datatype:'text'},
					{caption:'추가비용3', 			name:'ADD_COST_03', 		width:100, datatype:'number'},
					{caption:'추가내역4', 			name:'ADD_TEXT_04', 		width:100, datatype:'text'},
					{caption:'추가비용4', 			name:'ADD_COST_04', 		width:100, datatype:'number'},
					{caption:'추가내역5', 			name:'ADD_TEXT_05', 		width:100, datatype:'text'},
					{caption:'추가비용5', 			name:'ADD_COST_05', 		width:100, datatype:'number'},
					{caption:'추가비용유무', 		name:'ADD_COST_YN', 		width:100, datatype:'text'}
				];
				break;
			case 'G_SC3250'://SC3250
				 gridId		= 'G_SC3250_ID';
				   if(caption_flag){
					   sCaption = '';
					   sItemCd = '';
				   };
				   objItems = [
				               	{caption: '자재그룹' 		, name: 'MTRL_GROUP'		, width: '4%'	, datatype: 'text'	, align:'center'},
				               	{caption: '자재그룹명'		, name: 'MTRL_GROUP_NM'		, width: '6%'	, datatype: 'text'	, align:'left'	},
				               	{caption: '기초재고량' 	, name: 'BAS_STOCK_QTY'		, width: '8%'	, datatype: 'number3', align:'right'	},
				               	{caption: '기초재고액(원)' 	, name: 'BAS_STOCK_AMT'		, width: '8%'	, datatype: 'number3', align:'right'	},
				               	{caption: '입고수량' 		, name: 'IN_QTY'			, width: '8%'	, datatype: 'number3', align:'right'	},
				               	{caption: '입고금액(원)' 	, name: 'IN_AMT'			, width: '8%'	, datatype: 'number3', align:'right'	},
				               	{caption: '출고수량' 		, name: 'OUT_QTY'			, width: '8%'	, datatype: 'number3', align:'right'	},
				               	{caption: '출고금액(원)' 	, name: 'OUT_AMT'			, width: '8%'	, datatype: 'number3', align:'right'	},
				               	{caption: '기말재고액(원)' 	, name: 'ENDG_STOCK_AMT'	, width: '8%'	, datatype: 'number3', align:'right'	},
				               	{caption: '기말재고량' 	, name: 'ENDG_STOCK_QTY'	, width: '8%'	, datatype: 'number3', align:'right'	},
				               	{caption: '재고증감액(원)' 	, name: 'STOCK_INC_DEC_AMT'	, width: '8%'	, datatype: 'number3', align:'right'	},
				               	{caption: '재고증감량' 	, name: 'STOCK_INC_DEC_QTY'	, width: '8%'	, datatype: 'number3', align:'right'	}
				               ];
				   break;
				   
			case 'G_SC3251'://SC3251
				 gridId		= 'G_SC3251_ID';
				   if(caption_flag){
					   sCaption = '';
					   sItemCd = '';
				   };
				   objItems = [
				               	{caption: '자재코드' 		, name: 'MTRL_CD'			, width: '6%'	, datatype: 'text'		, align:'center'},
				               	{caption: '자재그룹명'		, name: 'MTRL_NM'			, width: '6%'	, datatype: 'text'		, align:'left'	},
				               	{caption: '기초재고량' 	, name: 'BAS_STOCK_QTY'		, width: '8%'	, datatype: 'number3'	, align:'right'	},
				               	{caption: '기초재고액(원)' 	, name: 'BAS_STOCK_AMT'		, width: '8%'	, datatype: 'number3'	, align:'right'	},
				               	{caption: '입고수량' 		, name: 'IN_QTY'			, width: '8%'	, datatype: 'number3'	, align:'right'	},
				               	{caption: '입고금액(원)' 	, name: 'IN_AMT'			, width: '8%'	, datatype: 'number3'	, align:'right'	},
				               	{caption: '출고수량' 		, name: 'OUT_QTY'			, width: '8%'	, datatype: 'number3'	, align:'right'	},
				               	{caption: '출고금액(원)' 	, name: 'OUT_AMT'			, width: '8%'	, datatype: 'number3'	, align:'right'	},
				               	{caption: '기말재고액(원)' 	, name: 'ENDG_STOCK_AMT'	, width: '9%'	, datatype: 'number3'	, align:'right'	},
				               	{caption: '기말재고량' 	, name: 'ENDG_STOCK_QTY'	, width: '8%'	, datatype: 'number3'	, align:'right'	},
				               	{caption: '재고증감액(원)' 	, name: 'STOCK_INC_DEC_AMT'	, width: '9%'	, datatype: 'number3'	, align:'right'	},
				               	{caption: '재고증감량' 	, name: 'STOCK_INC_DEC_QTY'	, width: '8%'	, datatype: 'number3'	, align:'right'	}
				               ];
				   break;
				   
		case 'CAR_DIESEL_MGMT': //SC2161
				  gridId = 'gridCarDieselMgmtId';
				  if(caption_flag){
					  sCaption = '';
					  sItemCd = 'CAP_CAR_DIESEL_MGMT';
				  };
				  objItems = [
					{caption:'품목', 		name:'ITEM_CD', 	width:100, datatype:'text', align:'center'},
					{caption:'품목명', 	name:'ITEM_NM', 	width:100, datatype:'text'},
					{caption:'Tank명',	name:'TANK_NM',		width:100, datatype:'text'},
					{caption:'입고량', 	name:'IN_WGT', 		width:100, datatype:'number'},
					{caption:'출고량', 	name:'OUT_WGT', 	width:100, datatype:'number'},
					{caption:'재고율', 	name:'STOCK_RATE', 	width:100, datatype:'number'}
				  ];
				 break;
				 
			case 'CAR_DIESEL_DTL_MGMT':	//SC2161
				gridId = 'gridCarDieselDtlMgmtId';
				if(caption_flag){
					sCaption = '';
					sItemCd = 'CAP_CAR_DIESEL_DTL_MGMT';
				};
				objItems = [
					{caption:'주유카드', 	name:'REFUEL_CARD_NO', 	width:100, datatype:'text', align:'center'},
					{caption:'주유일시', 	name:'REFUEL_DTM', 		width:100, datatype:'text', align:'center'},
					{caption:'품목', 		name:'ITEM_CD', 		width:100, datatype:'text', align:'center'},
					{caption:'품목명', 	name:'ITEM_NM', 		width:100, datatype:'text'},
					{caption:'업체명', 	name:'CMP_NM', 			width:100, datatype:'text', align:'center'},
					{caption:'용도', 		name:'USAGE_NM', 		width:100, datatype:'text', align:'center'},
					{caption:'차량번호', 	name:'CAR_NO', 			width:100, datatype:'text', align:'center'},
					{caption:'공정', 		name:'PROC', 			width:100, datatype:'text', align:'center'},
					{caption:'투입량', 	name:'INPUT_QTY', 		width:100, datatype:'number'}
				];
				break;
				  
			case 'DIESEL_CARD_MGMT': //SC2162
				gridId = 'gridDieselCardMgmtId';
				if(caption_flag){
					sCaption = '';
					sItemCd = 'CAP_DIESEL_CARD_MGMT';
				};
				objItems = [
						{caption:'카드번호', 	name:'CARD_NO', 	width:100, datatype:'text', align:'center'},
						{caption:'업체명', 	name:'CMP_NM', 		width:100, datatype:'text', align:'center'},
						{caption:'차량번호', 	name:'CAR_NO', 		width:100, datatype:'text', align:'center'},
						{caption:'사용용도', 	name:'USAGE_NM', 	width:100, datatype:'text', align:'center'},
						{caption:'투입공정', 	name:'INPUT_PROC', 	width:100, datatype:'text', align:'center'},
						{caption:'비고', 		name:'REMARK', 		width:100, datatype:'text'}
				];
				fc_setRequiredInCol ( gridId, [ 'CARD_NO','CMP_NM','CAR_NO', 'INPUT_PROC', 'USAGE_NM'] );
				break;
				

			case 'G_SC3257': //SC3257
				gridId = 'G_SC3257_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd = '';
				};
				objItems = [
						{caption:'자재코드'		, name:'MTRL_CD'		, width:100, datatype:'text'	, align:'center'},
						{caption:'자재내역'		, name:'MTRL_NM'		, width:100, datatype:'text'	, align:'left'},
						{caption:'자재그룹'		, name:'MTRL_GROUP'		, width:100, datatype:'text'	, align:'center'},
						{caption:'자재그룹명'		, name:'MTRL_GROUP_NM'	, width:100, datatype:'text'	, align:'left'},
						{caption:'단위'			, name:'UNIT_CD'		, width:100, datatype:'text'	, align:'center'},
						{caption:'기초재고량'		, name:'BAS_STOCK_QTY'	, width:100, datatype:'number3'	, align:'right'},
						{caption:'기초재고액(원)'	, name:'BAS_STOCK_AMT'	, width:100, datatype:'number3'	, align:'right'},
						{caption:'위치'			, name:'WH_CD'			, width:100, datatype:'text'	, align:'center'}
				];
				break;
				
			case 'SC2411GRIDTOP': //SC2411
				gridId = 'SC2411GRIDTOPId';
				if(caption_flag){
					sCaption = '';
					sItemCd = 'SC2411GRIDTOPCD';
				};
				objItems = [
					{caption:'공장', 	name:'CARD_NO', 	width:100, datatype:'text', align:'center'},
					];
				
				var cnt = 0;
				
				var now = new Date();
				var firstDate,lastDate;

				firstDate = new Date(now.getYear(),now.getMonth(),1);
				lastDate = new Date(now.getYear(),now.getMonth()+1,0);
				
				
				var sDate = Number(firstDate.getDate());
				var eDate = Number(lastDate.getDate());
				
				
				var oCnt = 1;
				for(var i = sDate; i <= eDate ; i++){
					
					var day = i < 10 ? '0'+i : i;
					
					objItems[oCnt] = {caption:day, 	name:'PLAN_DT'+day, 	width:100, datatype:'text', align:'center'}
					oCnt++;
				}
				
				
				objItems[oCnt++] = {caption:'실중량', 	name:'REAL_WGT', width:100, datatype:'text', align:'center'}
				
				
				fc_setRequiredInCol ( gridId, [ 'CARD_NO','CMP_NM','CAR_NO', 'INPUT_PROC', 'USAGE_NM'] );
				break;
				
			case 'SC2411GRIDBOTTOM': //SC2411
				gridId = 'SC2411GRIDBOTTOMId';
				if(caption_flag){
					sCaption = '';
					sItemCd = 'SC2411GRIDBOTTOMCD';
				};
				objItems = [
					{caption:'계획월'		, 	name:'PLAN_MNT'			, 	width:100	, datatype:'text'	, align:'center', readonly:true	, hidden:false},
					{caption:'계획일자'	, 	name:'PLAN_DT'			, 	width:100	, datatype:'text'	, align:'center', readonly:true	, hidden:false},
					{caption:'계획순번'	, 	name:'PLAN_SEQ'			, 	width:100	, datatype:'number'	, align:'center', readonly:true	, hidden:false},
					{caption:'판매처'		, 	name:'VENDOR_CD'		, 	width:100	, datatype:'text'	, align:'center', hidden:true},
					{caption:'판매처'		, 	name:'VENDOR_NM'		, 	width:100	, datatype:'popup'	, align:'center'},
					{caption:'클린칭'		, 	name:'CLINCH_FLAG'		, 	width:100	, datatype:'checkbox', align:'center'},
					{caption:'물량'		, 	name:'REAL_WGT'			, 	width:100	, datatype:'number'	, align:'center' , maxlength: 22},
					{caption:'공장'		, 	name:'PLANT_CD'			, 	width:100	, datatype:'lov'	, align:'center'},
					{caption:'최종수요처'	, 	name:'SUB_VENDOR_CD'	, 	width:100	, datatype:'text'	, align:'center'},
					{caption:'최종수요처'	, 	name:'SUB_VENDOR_NM'	, 	width:100	, datatype:'popup'	, align:'center'},
					{caption:'운송업체'	, 	name:'TRSP_CMP_CD'		, 	width:100	, datatype:'text'	, align:'center'},
					{caption:'운송업체'	, 	name:'TRSP_CMP_NM'		, 	width:100	, datatype:'popup'	, align:'center'},
					
					{caption:'선적지'		, 	name:'TRSP_SECT_CD'		, 	width:100	, datatype:'text'	, align:'center'},
					{caption:'선적지'		, 	name:'TRSP_SECT_NM'		, 	width:100	, datatype:'lov'	, align:'center'},
					{caption:'포워딩'		, 	name:'FORWARD_CMP_NM'	, 	width:100	, datatype:'text'	, align:'center'},
					{caption:'출항일자'	, 	name:'SHIPPING_DT'		, 	width:100	, datatype:'text'	, align:'center'},
					{caption:'Remark'	, 	name:'REMARK'			, 	width:100	, datatype:'text'	, align:'center'},
					{caption:'Confirm'	, 	name:'CONFIRM_YN'		, 	width:100	, datatype:'check'	, align:'center'},
					];
				
				
				fc_addCodeList( {object: gridId+'.VENDOR_NM'	, code: 'TRSP_CMP_NM_SC2411'		, title: '판매처'		, manKey: '', cdParam:'' });
				fc_addCodeList( {object: gridId+'.SUB_VENDOR_NM', code: 'SUB_VENDOR_NM_SC2411'	, title: '최종수요처'	, manKey: '', cdParam:'' });
				fc_addCodeList( {object: 'SC2411GRIDBOTTOMId'+'.TRSP_CMP_NM'	, code: 'TRSP_CMP_NM_SC2411'		, title: '품목 목록'	, manKey: '', cdParam:'' });

				
				
				fc_addDataInGettedLov('PLANT_CD', {code : 'YARD_PLANT_TP',tags : '',alias : ''});
				fc_addDataInSettingLov({object : gridId+'.PLANT_CD',code : 'YARD_PLANT_TP',format : 'V',nullable : false,defval : ''});
				
				fc_addDataInGettedLov('TRSP_SECT_NM', {code : 'TRSP_SECT_MGMT_SC2411',tags : '',alias : ''});
				fc_addDataInSettingLov({object : gridId+'.TRSP_SECT_NM',code : 'TRSP_SECT_MGMT_SC2411',format : 'V',nullable : false,defval : ''});

				
				break;
				
				
			case 'G_SC3260': //SC3260
				gridId = 'G_SC3260_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd = '';
				};
				objGrpItems = [
		   			{caption: '당월'			, name: 'FIND_TP01'			, align: 'center' },
		   			{caption: '1~3월'		, name: 'FIND_TP02'			, align: 'center' },
		   			{caption: '4~6월'		, name: 'FIND_TP03'			, align: 'center' },
		   			{caption: '6~12월'		, name: 'FIND_TP04'			, align: 'center' },
		   			{caption: '1~2년'		, name: 'FIND_TP05'			, align: 'center' },
		   			{caption: '2~3년'		, name: 'FIND_TP06'			, align: 'center' },
		   			{caption: '3~4년'		, name: 'FIND_TP07'			, align: 'center' },
		   			{caption: '4~5년'		, name: 'FIND_TP08'			, align: 'center' },
		   			{caption: '5~6년'		, name: 'FIND_TP09'			, align: 'center' },
		   			{caption: '6~7년'		, name: 'FIND_TP10'			, align: 'center' },
		   			{caption: '7~8년'		, name: 'FIND_TP11'			, align: 'center' },
		   			{caption: '8~9년'		, name: 'FIND_TP12'			, align: 'center' },
		   			{caption: '9~10년'		, name: 'FIND_TP13'			, align: 'center' },
		   			{caption: '10년이상'		, name: 'FIND_TP14'			, align: 'center' },
					];
				
				objItems = [
					{caption:'자재그룹'	, 	name:'MTRL_GROUP'	, 	width:70	, datatype:'text'	, align:'center'},
					{caption:'자재그룹명'	, 	name:'MTRL_GROUP_NM', 	width:100	, datatype:'text'	, align:'left'},
					{caption:'재고월'		, 	name:'STOCK_MNT'	, 	width:100	, datatype:'text'	, align:'center', hidden:true},
					
					{caption:'금액'	, 	name:'STOCK_AMT_01'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP01'},
					{caption:'항목수'	, 	name:'STOCK_QTY_01'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP01'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_02'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP02'},
					{caption:'항목수'	, 	name:'STOCK_QTY_02'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP02'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_03'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP03'},
					{caption:'항목수'	, 	name:'STOCK_QTY_03'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP03'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_04'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP04'},
					{caption:'항목수'	, 	name:'STOCK_QTY_04'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP04'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_05'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP05'},
					{caption:'항목수'	, 	name:'STOCK_QTY_05'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP05'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_06'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP06'},
					{caption:'항목수'	, 	name:'STOCK_QTY_06'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP06'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_07'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP07'},
					{caption:'항목수'	, 	name:'STOCK_QTY_07'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP07'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_08'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP08'},
					{caption:'항목수'	, 	name:'STOCK_QTY_08'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP08'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_09'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP09'},
					{caption:'항목수'	, 	name:'STOCK_QTY_09'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP09'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_10'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP10'},
					{caption:'항목수'	, 	name:'STOCK_QTY_10'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP10'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_11'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP11'},
					{caption:'항목수'	, 	name:'STOCK_QTY_11'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP11'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_12'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP12'},
					{caption:'항목수'	, 	name:'STOCK_QTY_12'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP12'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_13'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP13'},
					{caption:'항목수'	, 	name:'STOCK_QTY_13'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP13'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_14'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP14'},
					{caption:'항목수'	, 	name:'STOCK_QTY_14'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP14'}
					];
				
				break;
				
			case 'G_SC3261': //SC3261
				gridId = 'G_SC3261_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd = '';
				};
		
				objItems = [
					{caption:'자재그룹'	, 	name:'MTRL_GROUP'	, 	width:70	, datatype:'text'	, align:'center'},
					{caption:'자재그룹명'	, 	name:'MTRL_GROUP_NM', 	width:100	, datatype:'text'	, align:'left'},
					{caption:'재고월'		, 	name:'STOCK_MNT'	, 	width:100	, datatype:'text'	, align:'center', hidden:true},
					{caption:'자재코드'	, 	name:'MTRL_CD'		, 	width:100	, datatype:'text'	, align:'center'},
					{caption:'자재내역'	, 	name:'MTRL_NM'		, 	width:100	, datatype:'text'	, align:'left'},
					{caption:'최종입고일'	, 	name:'FINAL_IN_DT'	, 	width:100	, datatype:'text'	, align:'center'},
					{caption:'당월금액'	, 	name:'STOCK_AMT_01'	, 	width:100	, datatype:'number'	, align:'right'},
					{caption:'건수'		, 	name:'STOCK_QTY_01'	, 	width:100	, datatype:'number'	, align:'right'},
					
					];
				
				break;
				
			case 'G_SC3260': //SC3260
				gridId = 'G_SC3260_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd = '';
				};
				objGrpItems = [
		   			{caption: '당월'			, name: 'FIND_TP01'			, align: 'center' },
		   			{caption: '1~3월'		, name: 'FIND_TP02'			, align: 'center' },
		   			{caption: '4~6월'		, name: 'FIND_TP03'			, align: 'center' },
		   			{caption: '6~12월'		, name: 'FIND_TP04'			, align: 'center' },
		   			{caption: '1~2년'		, name: 'FIND_TP05'			, align: 'center' },
		   			{caption: '2~3년'		, name: 'FIND_TP06'			, align: 'center' },
		   			{caption: '3~4년'		, name: 'FIND_TP07'			, align: 'center' },
		   			{caption: '4~5년'		, name: 'FIND_TP08'			, align: 'center' },
		   			{caption: '5~6년'		, name: 'FIND_TP09'			, align: 'center' },
		   			{caption: '6~7년'		, name: 'FIND_TP10'			, align: 'center' },
		   			{caption: '7~8년'		, name: 'FIND_TP11'			, align: 'center' },
		   			{caption: '8~9년'		, name: 'FIND_TP12'			, align: 'center' },
		   			{caption: '9~10년'		, name: 'FIND_TP13'			, align: 'center' },
		   			{caption: '10년이상'		, name: 'FIND_TP14'			, align: 'center' },
					];
				
				objItems = [
					{caption:'자재그룹'	, 	name:'MTRL_GROUP'	, 	width:70	, datatype:'text'	, align:'center'},
					{caption:'자재그룹명'	, 	name:'MTRL_GROUP_NM', 	width:100	, datatype:'text'	, align:'left'},
					{caption:'재고월'		, 	name:'STOCK_MNT'	, 	width:100	, datatype:'text'	, align:'center', hidden:true},
					
					{caption:'금액'	, 	name:'STOCK_AMT_01'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP01'},
					{caption:'항목수'	, 	name:'STOCK_QTY_01'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP01'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_02'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP02'},
					{caption:'항목수'	, 	name:'STOCK_QTY_02'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP02'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_03'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP03'},
					{caption:'항목수'	, 	name:'STOCK_QTY_03'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP03'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_04'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP04'},
					{caption:'항목수'	, 	name:'STOCK_QTY_04'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP04'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_05'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP05'},
					{caption:'항목수'	, 	name:'STOCK_QTY_05'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP05'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_06'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP06'},
					{caption:'항목수'	, 	name:'STOCK_QTY_06'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP06'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_07'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP07'},
					{caption:'항목수'	, 	name:'STOCK_QTY_07'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP07'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_08'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP08'},
					{caption:'항목수'	, 	name:'STOCK_QTY_08'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP08'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_09'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP09'},
					{caption:'항목수'	, 	name:'STOCK_QTY_09'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP09'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_10'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP10'},
					{caption:'항목수'	, 	name:'STOCK_QTY_10'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP10'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_11'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP11'},
					{caption:'항목수'	, 	name:'STOCK_QTY_11'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP11'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_12'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP12'},
					{caption:'항목수'	, 	name:'STOCK_QTY_12'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP12'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_13'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP13'},
					{caption:'항목수'	, 	name:'STOCK_QTY_13'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP13'},
					
					{caption:'금액'	, 	name:'STOCK_AMT_14'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP14'},
					{caption:'항목수'	, 	name:'STOCK_QTY_14'	, 	width:100	, datatype:'number3', align:'right', group:'FIND_TP14'}
					];
				
				break;
				
			case 'G_SC3261': //SC3261
				gridId = 'G_SC3261_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd = '';
				};
		
				objItems = [
					{caption:'자재그룹'	, 	name:'MTRL_GROUP'	, 	width:70	, datatype:'text'	, align:'center'},
					{caption:'자재그룹명'	, 	name:'MTRL_GROUP_NM', 	width:100	, datatype:'text'	, align:'left'},
					{caption:'재고월'		, 	name:'STOCK_MNT'	, 	width:100	, datatype:'text'	, align:'center', hidden:true},
					{caption:'자재코드'	, 	name:'MTRL_CD'		, 	width:100	, datatype:'text'	, align:'center'},
					{caption:'자재내역'	, 	name:'MTRL_NM'		, 	width:100	, datatype:'text'	, align:'left'},
					{caption:'최종입고일'	, 	name:'FINAL_IN_DT'	, 	width:100	, datatype:'text'	, align:'center'},
					{caption:'당월금액'	, 	name:'STOCK_AMT_01'	, 	width:100	, datatype:'number'	, align:'right'},
					{caption:'건수'		, 	name:'STOCK_QTY_01'	, 	width:100	, datatype:'number'	, align:'right'},
					
					];
				
				break;
				
			case 'G_SC3210': //SC3210
				gridId = 'G_SC3210_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd = '';
				};
		
				objGrpItems = [
		   			{caption: '물량'			, name: 'GRP_01'	, align: 'center' },
		   			{caption: '저장기간(일)'	, name: 'GRP_02'	, align: 'center' },
		   			{caption: '투입(제련1)'	, name: 'GRP_03'	, align: 'center' },
		   			{caption: '투입(제련2)'	, name: 'GRP_04'	, align: 'center' }
					];
				
				objItems = [
					{caption:'품목'		, 	name:'ITEM_CD'			, 	width:100	, datatype:'text'	, align:'center', hidden:true},
					{caption:'품목명'		, 	name:'ITEM_NM'			, 	width:100	, datatype:'text'	, align:'left'},
					{caption:'저장위치'	, 	name:'STORE_LOC'		, 	width:100	, datatype:'text'	, align:'center', hidden:true},
					{caption:'저장위치'	, 	name:'STORE_LOC_NM'		, 	width:100	, datatype:'text'	, align:'center'},
					{caption:'Hold/Capa', 	name:'HOLD_CAPA'		, 	width:100	, datatype:'text'	, align:'center'},
					{caption:'차선'		, 	name:'SCH_NO'			, 	width:100	, datatype:'text'	, align:'center'},
					{caption:'광종'		, 	name:'MINERAL_TP'		, 	width:100	, datatype:'text'	, align:'center'},
					{caption:'조합특성'	, 	name:'COMB_CHAR'		, 	width:100	, datatype:'text'	, align:'center'},
					{caption:'입고WMT'	, 	name:'IN_WMT'			, 	width:100	, datatype:'text'	, align:'center', group:'GRP_01'},
					{caption:'재고WMT'	, 	name:'STOCK_WMT'		, 	width:100	, datatype:'text'	, align:'center', group:'GRP_01'},
					{caption:'입고일자'	, 	name:'RM_IN_DT'			, 	width:100	, datatype:'text'	, align:'center'},
					{caption:'기준'		, 	name:'STORE_DUR_BAS'	, 	width:100	, datatype:'text'	, align:'center', group:'GRP_02'},
					{caption:'실적'		, 	name:'STORE_DUR_RSLT'	, 	width:100	, datatype:'text'	, align:'center', group:'GRP_02'},
					{caption:'투입비율'	, 	name:'INPUT_RATE1'		, 	width:100	, datatype:'text'	, align:'center', group:'GRP_03'},
					{caption:'Hopper'	, 	name:'INPUT_HOPPER1'	, 	width:100	, datatype:'text'	, align:'center', group:'GRP_03'},
					{caption:'투입비율'	, 	name:'INPUT_RATE2'		, 	width:100	, datatype:'text'	, align:'center', group:'GRP_04'},
					{caption:'Hopper'	, 	name:'INPUT_HOPPER2'	, 	width:100	, datatype:'text'	, align:'center', group:'GRP_04'},
					
					];
				
                break;
                
                case 'G_SC3210_1': //SC3210 Summary
				gridId = 'G_SC3210_1_ID';
				if(caption_flag){
					sCaption = '';
					sItemCd = '';
				};
		
				objGrpItems = [
		   			{caption: '기준'			, name: 'GRP_01'	, align: 'center' }
					];
				
				objItems = [
					{caption:'구분'		, 	name:'ITEM_CD'			, 	width:100	, datatype:'text'	, align:'center'},
					{caption:'최대'		, 	name:'ITEM_NM'			, 	width:100	, datatype:'number'	, align:'left', group:'GRP_01'},
					{caption:'최소'	, 	name:'STORE_LOC'		, 	width:100	, datatype:'number'	, align:'center', group:'GRP_01'},
					{caption:'적정'	, 	name:'STORE_LOC_NM'		, 	width:100	, datatype:'number'	, align:'center', group:'GRP_01'},
					{caption:'현재고(공장)', 	name:'HOLD_CAPA'		, 	width:100	, datatype:'number'	, align:'center'},
					{caption:'적정대비'		, 	name:'SCH_NO'			, 	width:100	, datatype:'number'	, align:'center'},
					{caption:'하역대기물량'		, 	name:'MINERAL_TP'		, 	width:100	, datatype:'number'	, align:'center'}
					];
				
                break;
               
	};

	var gridCaption = fc_makeGridCaption(sCaption, sItemCd, 0);
	var ret = {
		id : gridId,
		item : objItems,
		grpItem : objGrpItems,
		caption : gridCaption,
		key : gridKey
	};

	return ret;
}; // end of fm_getGridItems
/**
 * f_setParamPopup
 * @param objData
 * @returns returnObj
 */
function f_setParamPopup(objData) {
	var returnObj = {title: '', manSearch: '', optTitle: '', optSearch: '', optResult: '', optCondition:new Object() };
	var sManSearch = '', sOptResult = '', sOptTitle = '', sOptSearch = '', sTitle = '';

	switch (objData.code) {

		case 'MC_ITEM_LIST' :
			
			if(gridId == '2420_GRID_B_ID'){
				objData.cdParam = cdParam; 
			}
			
			sManSearch = objData.cdParam;
			sTitle = '';
			sOptTitle = '품목코드,품목명';
			sOptResult = '품목코드,품목명';
			sOptSearch = '';
			break;

		case 'MC_RTN_ITEM_LIST' :
			sTitle = '';
			sOptTitle = '품목코드,품목명';
			sOptResult = '품목코드,품목명';
			sOptSearch = '';
			break;

		case 'MC_RTN_CAR_LIST' :
			sTitle = '';
			sOptTitle = '차량번호,운전자명,업체명' ;
			sOptResult = '차량번호,운전자,업체명';
			sOptSearch = '';

			break;
		case 'MC_TRSP_CMP_LIST' :
			sTitle = '';
			sOptTitle = '운송업체코드,운송업체명';
			sOptResult = '운송업체코드,운송업체명';
			sOptSearch = '';
		break;

		case 'MC_2321_POPUP': // SC2321, SC2322
			objData.cdParam = fc_getInputVal( 'PLANT_NO' );
			
			sManSearch = objData.cdParam;
			sOptTitle  = '제품위치' + "," + '등급명';
			sOptSearch = '';
			sOptResult = '제품위치' + "," + '등급명';
			break;
			
		case 'MC_FORWARD_LIST':
			sTitle = '';
			sOptTitle = '판매처';
			sOptResult = '판매처코드,판매처명';
			sOptSearch = '';
		break;
		
		case 'MC_CAR_VENDOR_LIST': //SC1420,SC1421
			sTitle = '';
			sOptTitle = '판매처코드';
			sOptResult = '판매처코드,판매처명';
			sOptSearch = fc_getInputVal( 'VENDOR_CD' );
		break;
		
		case 'MC_CAR_SUB_VENDOR_LIST': //SC1420,SC1421
			sTitle = '';
			sOptTitle = '납품처코드';
			sOptResult = '납품처코드,납품처명';
			sOptSearch = fc_getInputVal( 'SUB_VENDOR_CD' );
		break;
		
		case 'MC_CAR_TRSP_CMP_LIST' : //SC1420,SC1421
			sTitle = '';
			sOptTitle = '판매처코드, 납품처코드';
			sOptResult = '운송업체코드,운송업체명';
			sOptSearch = fc_getInputVal( 'VENDOR_CD' ) + "," +  fc_getInputVal( 'SUB_VENDOR_CD' );

		break;
		
		case 'MC_VENDOR_MGMT_LIST2' ://SC4210 ONLY
			sTitle = '';
			sOptTitle  = '업체코드,업체명';
			sOptResult = '업체코드,업체명';
			sOptSearch = '';
		break;
		
		case 'MC_VENDOR_MGMT_LIST1' ://SC4210 ONLY
			sTitle = '';
			sOptTitle  = "업체명,업체코드";
			sOptResult = '업체명,업체코드';
			sOptSearch = '';
		break;
		
		case 'MC_2310_YARD_LOC': // SC2321, SC2322
			objData.cdParam =fc_getInputVal('PLANT_NO');
			sManSearch = objData.cdParam;
			sOptTitle  = '제품위치,제품명';
			sOptSearch = '';
			sOptResult = '제품위치' + "," + '제품명';
			break;
			
		case 'MC_SALES_VENDOR_LIST' :
			sManSearch = objData.cdParam;
			sTitle = '';
			sOptTitle = '거래처,거래처명';
			sOptResult = '거래처코드,거래처명';
			sOptSearch = '';
		break;
			
		case 'MC_SUB_VENDOR_OUT_LIST' :
			sManSearch = fc_getInputVal('VENDOR_CD');
			sTitle = '';
			sOptTitle = '납품처코드,납품처명';
			sOptResult = '납품처코드,납품처명';
			sOptSearch = '';
			break;
		
		case 'MC_VENDOR_LIST' :
			sManSearch = objData.cdParam;
			sTitle = '';
			sOptTitle = '판매처코드, 판매처명';
			sOptResult = '판매처코드,판매처명';
			sOptSearch = fc_getInputVal( 'VENDOR_CD' ) + "," +  fc_getInputVal( 'VENDOR_NM' );
			break;
			
		case 'MC_SUB_VENDOR_LIST' :
			sManSearch = objData.cdParam;
			sTitle = '';
			sOptTitle = '납품처코드, 납품처명';
			sOptResult = '납품처코드,납품처명';
			sOptSearch = '';
			break;
		
		case 'MC_2413_VENDOR_LIST' :
			
			sManSearch = objData.cdParam;	
			sTitle = '';
			sOptTitle = '판매처코드';
			sOptResult = '판매처코드,판매처명';
			sOptSearch = '';
			
			break;
			
		case 'MC_2413_SUB_VENDOR_LIST' :
			sManSearch = objData.cdParam;
			sTitle = '';
			sOptTitle = '납품처코드,납품처명';
			sOptResult = '납품처코드,납품처명';
			sOptSearch = '';
			break;
		
		case 'MC_SC_TRSP_CMP_LIST' :
			sManSearch = fc_getInputVal('TRSP_CMP_CD') + "," + fc_getInputVal('TRSP_CMP_NM');
			sTitle = '';
			sOptTitle = '운송업체코드,운송업체명';
			sOptResult = '운송업체코드,운송업체명';
			sOptSearch = '';
			break;
		
		case 'MC_SECT_LIST':
			sManSearch = fc_getInputVal('TRSP_SECT_CD');
			sTitle = '';
			sOptTitle = '구간코드, 구간명';
			sOptResult = '구간코드,구간명';
			sOptSearch = '';
			break;
		
		case 'MC_TRSP_CONTRACT':
			sManSearch = fc_getInputVal('TRSP_CMP_CD') + "," + fc_getInputVal('TRSP_CMP_NM');
			sTitle = '';
			sOptTitle = '운송업체코드,운송업체명';
			sOptResult = '운송업체코드,운송업체명';
			sOptSearch = '';
			break;
			
		case 'MC_SELECT_VENDOR_LIST' :
			sManSearch = objData.cdParam;
			sTitle = '';
			sOptTitle = '판매처,판매처명';
			sOptResult = '판매처,판매처명';
			sOptSearch = '';
			break;
			
		case 'EMP_LIST' :
			sManSearch = objData.cdParam;
			sTitle = '';
			sOptTitle = '사번,성명';
			sOptResult = '사번,성명';
			sOptSearch = '';
			break;

		case 'MC_YARD_LIST' :
			sManSearch = objData.cdParam;
			sTitle = '';
			sOptTitle = '위치코드,위치코드';
			sOptResult = '위치코드,위치코드';
			sOptSearch = '';
			break;
			
		case 'MC_2430_YARD' :
			objData.cdParam = fc_getInputVal('PLANT_NO');
			sManSearch = objData.cdParam;
			sTitle = '';
			sOptTitle = '위치코드,위치코드';
			sOptResult = '위치코드,위치코드';
			sOptSearch = '';
			break;
			
		case 'MC_TRSP_SECT_DTL_LIST_2':
			sManSearch = '';
			sTitle = '';
			sOptTitle = '운송업체코드';
			sOptResult = '운송구간코드,운송구간명';
			sOptSearch = fc_getInputVal('TRSP_CMP_CD');
			break;
		
		case 'MC_TRSP_SECT_DTL_LIST':
			sManSearch = '';
			sTitle = '';
			sOptTitle = '운송업체코드';
			sOptResult = '운송구간코드,운송구간명';
			sOptSearch = fc_getInputVal('TRSP_CMP_CD');
			break;
		
		case 'MC_ITEM_LIST_2':
			sManSearch = fc_getInputVal('FIND_DT_FR') + ","+ fc_getInputVal('FIND_DT_TO');
			sTitle = '';
			sOptTitle = '운송업체코드';
			sOptResult = '품목코드,품목명';
			sOptSearch = fc_getInputVal('TRSP_CMP_CD');
			break;
			
		case 'MC_SUB_VENDOR_LIST_2' :  //SC2520
			sTitle = '';
			sOptTitle = '납품처코드';
			sOptResult = '납품처코드,납품처명';
			sOptSearch = fc_getInputVal('VENDOR_CD')  ;
			break;
		
		case 'MC_ITEM_LIST_3':
			sManSearch = '';
			sTitle = '';
			sOptTitle = '품목코드';
			sOptResult = '품목코드, 품목명';
			sOptSearch = fc_getInputVal('ITEM_CD');
			break;
		
		case 'MC_VENDOR_LIST_2':
			sManSearch = '';
			sTitle = '';
			sOptTitle = '품목코드';
			sOptResult = '거래처코드, 거래처명';
			sOptSearch = fc_getInputVal('ITEM_CD');
			break;
			
		case 'MC_YARD_LIST_SC2440' :  //SC2440
			objData.cdParam = fc_getInputVal('PLANT_NO');
			sManSearch = objData.cdParam;
			sTitle = '';
			sOptTitle = '';
			sOptResult = '위치코드,등급명';
			sOptSearch = '';
			break;
			
		case 'MC_YARD_LIST_SC2441' :  //SC2441
			objData.cdParam = fc_getInputVal('PLANT_NO');
			sManSearch = objData.cdParam;
			sTitle = '';
			sOptTitle = '';
			sOptResult = '위치코드,등급명';
			sOptSearch = '';
			break;
		case 'MC_2441_CMP_LIST' :  //SC2441
			sManSearch = objData.cdParam;
			sTitle = '';
			sOptTitle = '운송 업체코드,운송 업체명';
			sOptResult = '운송 업체코드,운송 업체명';
			sOptSearch = '';
			break;
		case 'MC_2441_VENDOR_LIST' :  //SC2441
			sManSearch = objData.cdParam;
			sTitle = '';
			sOptTitle = '포워딩 업체코드,포워딩 업체명';
			sOptResult = '포워딩 업체코드,포워딩 업체명';
			sOptSearch = '';
			break;
			
		case 'MC_VENDOR_LIST_3' :
			sTitle = '';
			sOptTitle = '판매처코드, 판매처명';
			sOptResult = '판매처코드,판매처명';
			sOptSearch = '';
			break;
			
		case 'MC_ITEM_LIST_4':
			objData.cdParam = fc_getInputVal('INOUT_TP');
			sManSearch = objData.cdParam;
			sTitle = '';
			sOptTitle = '품목코드,품목명';
			sOptResult = '품목코드,품목명';
			sOptSearch = '';
			break;
			
		case 'MC_VENDOR_LIST_4':
			sTitle = '';
			sOptTitle = '판매처코드,판매처명';
			sOptResult = '판매처코드,판매처명';
			sOptSearch = '';
			break;
			
		case 'MC_SUB_VENDOR_LIST_3':
			sTitle = '';
			sOptTitle = '판매처코드,납품처코드';
			sOptResult = '납품처코드,납품처명';
			sOptSearch = fc_getInputVal('VENDOR_CD');
			break;
		
		case 'MC_TRSP_CMP_LIST_2':
			sTitle = '';
			sOptTitle = '운송업체코드,운송업체명';
			sOptResult = '운송업체코드,운송업체명';
			sOptSearch = '';
			break;
			
		case 'MC_2413_MGMT':
			sTitle = '';
			sOptTitle = '운송업체코드,운송업체명';
			sOptResult = '운송업체코드,운송업체명';
			sOptSearch = '';
			break;
			
		case 'MC_2441_EXPORT_VENDOR_LIST':
			sTitle = '';
			sOptTitle = '최종수요처코드,최종수요처';
			sOptResult = '최종수요처코드,최종수요처';
			sOptSearch = '';
			break;
			
		case 'VENDOR_NM_SC2411':
			sTitle = '';
			sOptTitle = '판매지명,판매지코드';
			sOptResult = '판매지명,판매지코드';
			sOptSearch = '';
			break;
			
		case 'SUB_VENDOR_NM_SC2411':
			sTitle = '';
			sOptTitle = '최종수요처코드';
			sOptResult = '최종수요처코드,최종수요처명';
			sOptSearch = tes.ROW_DATA.CD_NM;
			break;
			
		case 'TRSP_CMP_NM_SC2411':
			sTitle = '';
			sOptTitle = '운송업체코드';
			sOptResult = '운송업체명,운송업체코드';
			sOptSearch = '';
			break;
			
		default:
			sTitle = fc_getMultiItem(objData.manKey);
			sOptTitle = fc_getMultiItem('CAP_CODE') + ',' + fc_getMultiItem('CAP_NM');
			sOptResult = fc_getMultiItem('CAP_CODE') + ','+ fc_getMultiItem('CAP_NM');
			sOptSearch = '';
		break;
	};
	
	returnObj['title'] = sTitle;
	returnObj['manSearch'] = sManSearch;
	returnObj['optTitle'] = sOptTitle;
	returnObj['optSearch'] = sOptSearch;
	returnObj['optResult'] = sOptResult;
	returnObj['optCondition'] = objData.setConditon; 

	return returnObj;
}; // end of f_setParamPopup

/* ==========================================================================================================
 * Common Functions
 * =========================================================================================================*/

function fm_getAllColsName(objItems) {
	var allColsName = new Array();

	for ( var key in objItems) {
		allColsName.push(objItems[key].name);
	}
	;

	return allColsName;
}

function fm_removeGridPage(arrGrid) {
	for (var loop = 0; loop < arrGrid.length; loop++) {
		$('#' + arrGrid[loop]).jqxGrid({
			pageable : false
		});
	}
	;
}

function fm_addMaxLength(objId, iMaxLth) {
	arrObjLth.push({
		id : objId,
		lth : iMaxLth
	});
};

function f_getDateObj(strData) {
	vYear = strData.substring(0, 4);
	vMonth = strData.substring(4, 6);
	vDay = strData.substring(6, 8);
	vHour = strData.substring(8, 10);
	vMinute = strData.substring(10, 12);
	vSecond = strData.substring(12, 14);

	return new Date(Number(vYear), Number(vMonth) - 1, Number(vDay),
			Number(vHour), Number(vMinute), Number(vSecond));
}

var gvNotEditCss = window.gwClass.notGridEditClass + ' ';
var gvNotEditBlueBgCss = window.gwClass.notGridEditClass + ' ' + 'blue';
var gvNotEditYelloBgCss = window.gwClass.notGridEditClass + ' ' + 'yello';
var gvNotEditGrayBgCss = window.gwClass.notGridEditClass + ' ' + 'gray';
var gvNotEditBoldFontCss = window.gwClass.notGridEditClass + ' ' + 'boldFont';
var gvNotEditGrayBgBoldFontCss = window.gwClass.notGridEditClass + ' '
		+ 'grayBgBoldFont';
var isFill = false;

function f_setColor(row, datafield, value, data) {
	if (!fc_isNull(data.MFT_NO)) {
		return gvNotEditYelloBgCss;
	}

	/*sample
	    var mftNo = data.MFT_NO;

	    if(data.PROC_CD_COPY == datafield.replace('COL_','')){
	        return gvNotEditBlueBgCss;
	    }

	 */

}