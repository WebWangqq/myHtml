$('body').append("<div id='overlay'></div><div id='tipBox'><div class='tipBoxCon'></div></div><div class='loadBox' id='loadBox'><div class='loadCon'><span class='loading'></span><span>加载中</span></div></div>");

/*比例缩放*/
function resize(){
	var wWidth = document.body.clientWidth;
	Fsize=wWidth/7.5;
	document.querySelector('html').style.fontSize = Fsize + 'px';
};
$(document).ready(function(){resize();btnGray();});
resize();
window.onresize = resize;

//加载中
function showLoadding() {
    $("#loadBox").show();
}
function hideLoadding() {
    $("#loadBox").hide();
}
//加载中end


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
//显示协议弹框
function showAgreementBox(cla){
	$("#overlay").show();
	$("#"+cla).show();
	var h=$(".agreementBox").height()-$(window).width()/7.5*1.8;
	$(".textCon").css("height",h);
	var agreementBoxCon = new IScroll('#'+cla+' .textCon', { mouseWheel: true, click: true });
	$('body').on('touchmove', function (event) { event.preventDefault(); });
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


/*表单按钮颜色变化*/
function valF(){
	var val=true;
	$(".field.mustFill").each(function(i){
		var len=$(this).attr("data-length");
		if(len==undefined){
			if(!$(this).val()) return val=false
		}
		else{
			if($(this).val().trim().length!=len) return val=false
		}
	})
	return val;
}
function btnGray(){
	$(".field.mustFill").on("input",function(){
		valF() ? $(".btnMain").removeClass("btnGray") : $(".btnMain").addClass("btnGray")
	})
}
/*表单按钮颜色变化end*/


/*校验手机号*/
function isMobile(cla){
	var mobile=/^1[34578]\d{9}$/;
	var flag=mobile.test(cla.replace(/\s+/g, ""))
	return flag
}

function formatNumber(n){
	n=n.toString()
	return n[1] ? n : '0'+n
}