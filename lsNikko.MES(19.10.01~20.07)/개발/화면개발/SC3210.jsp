<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<%@ include file="./include/include.jsp"%>
<title>동정광 재고 현황 조회</title>
<script type="text/javascript">
//*********************************************************************************************
// ********** Declare public variable
//*********************************************************************************************
    var gridMain, gridMainId, gridSum, gridSumId;

//*********************************************************************************************
// ********** Function Ready Section
//*********************************************************************************************
    $(document).ready(function () {
    	f_initSreen();
        f_initSearchForm();
        f_initContents();
        f_lastProc();
    }); // end of ready

//*********************************************************************************************
// ********** initialize screen Section
//*********************************************************************************************
    function f_initSreen() {
    	serviceName = 'SC3210-service';
    }; // end of f_initSreen

//*********************************************************************************************
// ********** Initialize Search Condition Section
//*********************************************************************************************
	function f_initSearchForm() {
 		//fc_makeSearch( '', 'S_SC3210', '' );
	}; // end of f_initSearchForm

//*********************************************************************************************
// ********** Initialize data Section
//*********************************************************************************************
    function f_initContents() {
    	gridMain   = fc_makeGrid( 'divResult_Grid', 'search', 'G_SC3210', '', false );
        gridMainId = gridMain.getGridId();
        
        gridSum   = fc_makeGrid( 'divResult_Grid', 'search', 'G_SC3210_1', '', false );
    	gridSumId = gridSum.getGridId();

    	fc_setGridParam( gridMainId, { selectionmode:'singlerow', clipboard: true } );
    	fc_setGridParam( gridSumId, { selectionmode:'singlerow', clipboard: true } );

        //fc_makeSplitter( 'divMain', '60%', '40%' );
    }; // end of f_initContents

//*********************************************************************************************
// ********** Last Process Job
//*********************************************************************************************
    function f_lastProc() {
		fc_lastProc();
    }; // end of f_lastProc

//*********************************************************************************************
// ********** Screen Button Event Section
//*********************************************************************************************
    function f_cust1() { // 기간별조회
    	
    }; // end of f_search
    
    function f_cust2() { // 위치별조회
    	
    }; // end of f_search

    function f_search() {
    	fc_addParamForm( 'divSearchCondition' );
    	fc_searchGrid( [ { gridId: gridMainId, resultKey: 'RK_RTN_ITEM_LIST' } ], serviceName, 'searchRtnItem' );
    }; // end of f_search
//*********************************************************************************************
// ********** User Defined Function Section
//*********************************************************************************************v

</script>
</head>
<body>
	<div id="divContainer">
		<div id="divTitle">
			<%@ include file="./include/includeTitle.jsp" %>
		</div>
		<div id="divSearchCondition"></div>
		<div id="divContents">
			<div id="divMain">
				<div id="divResult_Grid" style="width:100%; height:80%;" ></div>
				<div id="divResult_Summary" style="width:100%; height:20%;" ></div>
			</div>
		</div>
	</div>
	<div id="divMessage">
		<%@ include file="./include/includeMessage.jsp" %>
	</div>
</body>
</html>