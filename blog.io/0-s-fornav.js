//------------------------------------------------------------------------------------
// bolg导航 -------------------从这里开始------------------------------------------

function scrollTo(self, tagName, text) {
	var iframe = $("#content");
	var target = iframe.find(tagName + ":contains(" + text + ")");
	
	// 找到是第几个
	// 在nav是第几个
	var navs = $('#postNavContent [data-a="' + tagName + '-' + encodeURI(text) + '"]');
	var len = navs.size();
	for(var i = 0; i < len; ++i) {
		if(navs[i] == self) {
			break;
		}
	}
	
	if (target.size() >= i+1) {
		target = target.eq(i);
		// 之前插入, 防止多行定位不准
		var top = target.offset().top;
		if(LEA.isMobile) {
			top -= 50;
		}
		var nowTop = $(document).scrollTop();
		// 用$("body").scrllTop(10)没反应 firefox下
		$('html,body').animate({scrollTop: top}, 200);
		return;
	}
}
function genNav() {
	var $con = $("#content");
	var html = $con.html();
	// 构造一棵树
	// {"h1-title":{h2-title:{}}}
	var tree = [];//[{title: "xx", children:[{}]}, {title:"xx2"}];
	var hs = $con.find("h1,h2,h3,h4,h5,h6").toArray();
	var titles = '<ul>';
	for(var i = 0; i < hs.length; ++i) {
		var text = $(hs[i]).text(); 
		var tagName = hs[i].tagName.toLowerCase();
		// scrollTo在page.js中定义
		titles += '<li class="nav-' + tagName + '"><a data-a="' + tagName + '-' + encodeURI(text)+'" onclick="scrollTo(this, \'' + tagName + '\', \'' + text + '\')">' + text + '</a></li>';
	}
	titles += "</ul>";
	$("#postNavContent").html(titles);
	if(!hs.length) {
		$("#postNavContent").html("无");
		return false;
	}
	return true;
}

function initNav() {
	var hasNav = genNav();
	if(!hasNav) {
		return;
	}

	$("#postNavNav").click(function() {
		var $o = $("#postNavContent");
		if($o.is(":hidden")) {
			$o.show();
		} else {
			$o.hide();
		}
	});
	
	var $d = $(document);
	function reNav() {
		var vtop = $d.scrollTop();
		if(vtop <= top) {
			$("#postNav").css("top", top-vtop);
		} else {
			if(LEA.isMobile) {
				$("#postNav").css("top", 50);
			} else {
				$("#postNav").css("top", 10);
			}
		}
	}
	reNav();
	$(window).scroll(reNav);
}

// bolg导航 -------------------到这里结束------------------------------------------
//------------------------------------------------------------------------------------