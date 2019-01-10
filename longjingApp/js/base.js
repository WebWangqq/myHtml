$('body').append("<div id='overlay'></div><div id='tipBox'><div class='tipBoxCon'></div></div><div class='loadBox' id='loadBox'><div class='loadCon'><span class='loading'></span><span>加载中</span></div></div>");
/*比例缩放*/
function resize(){
	var wWidth = document.body.clientWidth;
	if(wWidth > 1080) wWidth=1080;
	document.querySelector('html').style.fontSize = wWidth / 7.5 + 'px';
};
$(document).ready(function(){
	resize();
	btnGray();//按钮颜色变化方法
});
resize();
window.onresize = resize;
/*比例缩放end*/

//显示文字提示框
function showTipBox(message, callback) {
	$(".tipBoxCon").html(message);
    $("#tipBox").fadeIn();
    var marginTop = (- $(".tipBoxCon").outerHeight(true))/2;
    var marginLeft = (document.body.clientWidth-$(".tipBoxCon").width()-document.body.clientWidth/7.5)/2
    $(".tipBoxCon").css({"margin-top":marginTop,"margin-left":marginLeft});
    setTimeout(function () { $("#tipBox").fadeOut(300) }, 1000);
    if (typeof callback === "function") {
        //alert(callback);
        callback();
    }
}
//显示灯箱
function showLight(cla){
	$("#overlay").show();
	var marginTop = (- $("#"+cla).outerHeight())/2;
	$("#"+cla).css({"margin-top":marginTop});
	$("#"+cla).show();
	$('body').on('touchmove', function (event) { event.preventDefault(); });
}
//隐藏灯箱
function hideLight(cla){
	$("#overlay").hide();
	$("#"+cla).hide();
	$('body').unbind("touchmove");
}
//显示协议弹框
function showAgreementBox(cla){
	$("#overlay").show();
	$("#"+cla).show();
	var agreementBoxCon = new IScroll('#'+cla+' .content', { mouseWheel: true, click: true });
	$('body').on('touchmove', function (event) { event.preventDefault(); });
}

//左侧导航
$(".icoPerson").click(function(){
	var leftH=$(window).height()-$(window).width()/7.5*1.2;
	$("#leftNavItem .content").css("height",leftH);
	$('#leftOverlay').show();
	$("#leftNavItem").css("left",0);
	var left = new IScroll('#leftNavItem .content', { mouseWheel: true, click: true });
	$('body').on('touchmove', function (event) { event.preventDefault(); });
})
$('#leftOverlay').bind("touchend",function(){
	setTimeout(function(){$('#leftOverlay').hide()},200);
	$("#leftNavItem").css("left","-6rem");
	$('body').unbind("touchmove");
})
//加载中
function showLoadding() {
    $("#loadBox").show();
}
function hideLoadding() {
    $("#loadBox").hide();
}
//加载中end


/*填表单按钮颜色变化*/
function valF(){
	var val=!0;
	$(".formInfo .field").each(function(){
		if(!$(this).val()) return val=!1
	})
	return val;
}
function btnGray(){
	var flag = !1;
	valF();
	$(".formInfo .field").on("input",function(){
		flag || (valF() ?$(".btnMain").removeClass("btnGray"):$(".btnMain").addClass("btnGray"))
	})
}
/*填表单按钮颜色变化end*/