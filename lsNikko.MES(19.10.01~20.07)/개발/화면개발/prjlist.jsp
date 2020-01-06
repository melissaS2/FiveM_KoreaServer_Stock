<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head><title>DWSF Project</title>
	<style type="text/css">
	<!--
	label{cursor:hand;color:#4A4A4A; letter-spacing:-0.6; 
		; line-height:160%;text-decoration:underline;}
	-->
	</style>
	<script language="javascript">
	function goPage(pageName){
		//window.open(pageName,"","width=1580, height=785 fullscreen=yes,menubar=no,status=no,toolbar=no,titlebar=no,location=no,scrollbar=yes");
		window.open(pageName,"","width=1580, height=1000 fullscreen=yes,menubar=no,status=no,toolbar=no,titlebar=no,location=no,scrollbar=yes");

	}

	function goPage1(pageName){
		window.open("prjlist_.jsp?pageName="+pageName,"","width=350, height=100 fullscreen=no,menubar=no,status=no,toolbar=no,titlebar=no,location=no,scrollbar=yes");
	}

	</script>
	</head>
	<body>
	<B>SMC PROJECT</B>
	<Br><br>
	<br><B>================================</B><Br>
		<label onclick="javascript:goPage( 'SC3210.do' )">SC3210 : 동정광재고현황조회</label><br><br>
	<B>기준관리</B><Br><br>
		<label onclick="javascript:goPage( 'SC4110.do' )">SC4110 : 물품등록</label><br><br>
		<label onclick="javascript:goPage( 'SC4212.do' )">SC4210 : 수출업체등록</label><br><br>
		<label onclick="javascript:goPage( 'SC4212.do' )">SC4210 : 수출업체등록</label><br><br>
		<label onclick="javascript:goPage( 'SC4220.do' )">SC4220 : 차량번호등록</label><br><br>
		<label onclick="javascript:goPage( 'SC4221.do' )">SC4221 : 출입금지차량관리</label><br><br>
		<label onclick="javascript:goPage( 'SC4220.do' )">SC4230 : 운송업체등록</label><br><br>
		<label onclick="javascript:goPage( 'SC4240.do' )">SC4240 : 운송선박관리</label><br><br>
	<br><B>================================</B><Br>
		<B>재고관리</B><Br><br>
		<label onclick="javascript:goPage( 'SC2610.do' )">SC2610 : 소내Return물품목등록</label><br><br>
		<label onclick="javascript:goPage( 'SC2620.do' )">SC2620 : 소내Return물차량번호등록</label><br><br>
		<label onclick="javascript:goPage( 'SC2630.do' )">SC2630 : 소내Return물계근등록</label><br><br>
		<label onclick="javascript:goPage( 'SC2640.do' )">SC2640 : 소내Return물계근현황</label><br><br>
		<label onclick="javascript:goPage( 'SC2452.do' )">SC2452 : 전기동Clinch출고현황</label><br><br>
		<label onclick="javascript:goPage( 'SC2460.do' )">SC2460 : 전기동출고현황전송</label><br><br>
		<label onclick="javascript:goPage( 'SC2461.do' )">SC2461 : 품목별출고현황  </label><br><br>
		<label onclick="javascript:goPage( 'SC2464.do' )">SC2464 : 월별출고현황 </label><br><br>
		<label onclick="javascript:goPage( 'SC2469.do' )">SC2469 : 출고상세현황</label><br><br>
		<label onclick="javascript:goPage( 'SC2510.do' )">SC2510 : 계근실적현황</label><br><br>
		<label onclick="javascript:goPage( 'SC2340.do' )">SC2340 : 귀금속제품등록</label><br><br>
		<label onclick="javascript:goPage( 'SC2341.do' )">SC2341 : 소재생산Unit등록</label><br><br>
		<label onclick="javascript:goPage( 'SC2110.do' )">SC2110 : 저광사일지</label><br><br>
		<label onclick="javascript:goPage( 'SC2111.do' )">SC2111 : 부두Weighing List</label><br><br>
		<label onclick="javascript:goPage( 'SC2112.do' )">SC2112 : 저광사작업일지</label><br><br>
		<label onclick="javascript:goPage( 'SC2116.do' )">SC2116 : 동정광SAP인터페이스조회</label><br><br>
		<label onclick="javascript:goPage( 'SC2350.do' )">SC2350 : 부두황산재고현황입력</label><br><br>
		<label onclick="javascript:goPage( 'SC2351.do' )">SC2351 : 황산선박작업</label><br><br>
		<label onclick="javascript:goPage( 'SC2352.do' )">SC2352 : 황산작업일지</label><br><br>
	<br><B>================================</B><Br>
		<B>재고관리</B><Br><br>
		<label onclick="javascript:goPage( 'SC3215.do' )">SC3215 : 부산항재고관리</label><br><br>
	<br><B>================================</B><Br>
		<B>Dashboard</B><Br><br>
		<label onclick="javascript:goPage( 'SC3110.do' )">SC3110 : 동정광운송관제Dashboard</label><br><br>
		<label onclick="javascript:goPage( 'SC3250.do' )">SC3250 : 저장품재고현황조회(기간별)</label><br><br>
		<label onclick="javascript:goPage( 'SC3253.do' )">SC3253 : 저장품재고현황조회(연별)</label><br><br>
		<label onclick="javascript:goPage( 'SC3255.do' )">SC3255 : 저장품재고현황조회(월별)</label><br><br>
		<label onclick="javascript:goPage( 'SC3257.do' )">SC3257 : 고액저장품리스트조회</label><br><br>
		<label onclick="javascript:goPage( 'SC3260.do' )">SC3260 : 저장품보유기간별현황조회</label><br><br>

	<br><B>================================</B><Br>
	</body>
</html>