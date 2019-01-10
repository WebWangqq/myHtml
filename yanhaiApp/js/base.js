$('body').append("<div id='overlay'></div><div id='tipBox'><div class='tipBoxCon'></div></div><div class='loadBox' id='loadBox'><div class='loadCon'><span class='loading'></span><span>加载中</span></div></div>");
/*比例缩放*/
function resize(){
	var wWidth = document.body.clientWidth;
	if(wWidth > 1080) wWidth=1080;
	Fsize=wWidth/7.5;
	if(Fsize>100) Fsize=100;
	document.querySelector('html').style.fontSize = Fsize + 'px';
};
$(document).ready(function(){resize();btnGray();});
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
    $('body').on('touchmove', function (event) { event.preventDefault(); });
    setTimeout(function () { $("#tipBox").fadeOut(300);$('body').unbind("touchmove"); }, 1000);
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
	setTimeout(function(){$('#overlay').hide()},200);
	$("#"+cla).hide();
	$('body').unbind("touchmove");
}

//显示协议弹框
function showAgreementBox(cla){
	$("#overlay").show();
	$("#"+cla).show();
	var h=$(".agreementBox").height()-$(window).width()/7.5*1.8;
	$(".textCon").css("height",h);
	var agreementBoxCon = new IScroll('#'+cla+' .textCon', { mouseWheel: true, click: true });
	$('body').on('touchmove', function (event) { event.preventDefault(); });
}

//左侧导航
$(".icoPerson").bind("touchend",function(){
	var leftH=$(window).height()-$(window).width()/7.5*1.2;
	$("#leftNavItem .content").css("height",leftH);
	$('#leftOverlay').show();
	$("#leftNavItem").css("left",0);
	// var left = new IScroll('#leftNavItem .content', { mouseWheel: true, click: true });
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
    $('body').on('touchmove', function (event) { event.preventDefault(); });
}
function hideLoadding() {
    $("#loadBox").hide();
    $('body').unbind("touchmove");
}
//加载中end

/*输入银行卡号格式化*/
function formatBankcardNum(obj){
	var value=obj.value;
	value = value.replace(/\s*/g, "");
	var result = [];
	for(var i = 0; i < value.length; i++)
    {
    	if (i%4==0 && i!=0){
            result.push(" " + value.charAt(i));
        }else{
            result.push(value.charAt(i));
        }
        
    }
    obj.value = result.join("");
}

/*输入手机号格式化*/
function formatMobile(obj){
    var value = obj.value;
    value = value.replace(/\s*/g, "");
    var result = [];
    for(var i = 0; i < value.length; i++)
    {
        if (i==3 || i==7){
            result.push(" " + value.charAt(i));
        }else{
            result.push(value.charAt(i));
        }
    }
    obj.value = result.join("");
}

/*表单按钮颜色变化*/
function valF(){
	var val=!0;
	$(".formInfo .mustFill").each(function(i){
		if(!$(this).val()) return val=!1
	})
	return val;
}
function btnGray(){
	var flag = !1;
	valF();
	$(".formInfo .mustFill").on("input",function(){
		flag || (valF() ? $(".btnMain").removeClass("btnGray") : $(".btnMain").addClass("btnGray"))
	})
}
/*表单按钮颜色变化end*/

/*表单按钮位置*/
function btnFixedBottom(){
	var mt=$(window).height()-$(".formWrap").height()-$(window).width()/7.5*2.8;
	marginTop=(mt>50) ? mt : 50;
	marginBottom=(mt>50)? 0 :50
	$(".btnMain").css({"margin-top":marginTop,"margin-bottom":marginBottom});
}
/*表单按钮位置end*/
/*

*/