$('body').append("<div id='overlay' onclick='hideLight()'></div><div id='tipBox'><div class='tipBoxCon'></div></div><div class='loadBox' id='loadBox'><div class='loadCon'><span class='loading'></span><span>加载中</span></div></div>");

/*比例缩放*/
function resize() {
    var wWidth = document.body.clientWidth;
    var wHeight=document.body.clientHeight
    var Fsize = wWidth / 7.5 < 50 ? wWidth / 7.5 : 50;
    document.querySelector('html').style.fontSize = Fsize + 'px';
};
window.onload = function() {
    resize();
    btnGray();
}
window.onresize = resize;

$('.field').focus(function() {
    $('#footerBar').hide()
}).blur(function() {
    $('#footerBar').show()
});;

//加载中
function showLoadding() {
    $('body').on('touchmove', function(event) { event.preventDefault(); });
    $("#loadBox").show();
}

function hideLoadding() {
    $("#loadBox").hide();
    $('body').unbind("touchmove"); 
}
//加载中end


//显示文字提示框
function showTipBox(message, callback) {
    $(".tipBoxCon").html(message);
    $("#tipBox").fadeIn();
    var marginTop = (-$(".tipBoxCon").outerHeight(true)) / 2;
    var marginLeft = (document.body.clientWidth - $(".tipBoxCon").width() - 90) / 2
    $(".tipBoxCon").css({ "margin-top": marginTop, "margin-left": marginLeft });
    $('body').on('touchmove', function(event) { event.preventDefault(); });
    setTimeout(function() { 
    	$("#tipBox").fadeOut(300);
        $('body').unbind("touchmove"); 
    }, 2000);
    if (typeof callback === "function") {
        callback();
    }
}


//显示灯箱
function showLight(cla) {
    $("#overlay").show();
    var marginTop = (-$("#" + cla).outerHeight()) / 2;
    $("#" + cla).css({ "margin-top": marginTop });
    $("#" + cla).show();
    $('body').on('touchmove', function(event) { event.preventDefault(); });
}
//隐藏灯箱
function hideLight() {
    $("#overlay").hide();
    $(".lightBox").hide();
    $('body').unbind("touchmove");
}


/*表单按钮颜色变化*/
function valF() {
    var val = true;
    $(".field.mustFill").each(function(i) {
        var len = $(this).attr("data-length");
        if (len == undefined) {
            if (!$(this).val()) return val = false
        } else {
            if ($(this).val().trim().length != len) return val = false
        }
    })
    return val;
}

function btnGray() {
    $(".field.mustFill").on("input", function() {
        valF() ? $(".btnMain").removeClass("btnGray") : $(".btnMain").addClass("btnGray")
    })
}
/*表单按钮颜色变化end*/

/*表单按钮位置*/
function btnFixedBottom() {
    var wWidth = document.body.clientWidth;
    var Fsize = wWidth / 7.5 < 50 ? wWidth / 7.5 : 50;
    var mt = $(window).height() - $(".formWrap").height() - Fsize * 1 - 50;
    var paddingTop = (mt > 0) ? mt - 50 : 50;
    $("#btnMainCon").css({ "padding-top": paddingTop, "padding-bottom": "50px" });
}
/*表单按钮位置end*/

/*输入银行卡号格式化*/
function formatBankcardNum(obj) {
    var value = obj.value;
    value = value.replace(/\s*/g, "");
    var result = [];
    for (var i = 0; i < value.length; i++) {
        if (i % 4 == 0 && i != 0) {
            result.push(" " + value.charAt(i));
        } else {
            result.push(value.charAt(i));
        }

    }
    obj.value = result.join("");
}

/*输入手机号格式化*/
function formatMobile(obj) {
    var value = obj.value;
    value = value.replace(/\s*/g, "");
    var result = [];
    for (var i = 0; i < value.length; i++) {
        if (i == 3 || i == 7) {
            result.push(" " + value.charAt(i));
        } else {
            result.push(value.charAt(i));
        }
    }
    obj.value = result.join("");
}


/*校验手机号*/
function isMobile(cla) {
    var mobile = /^1[3456789]\d{9}$/;
    var flag = mobile.test(cla.replace(/\s+/g, ""))
    return flag
}

/*校验用户名*/
function isusername(cla){
    return (cla.search(/^\w{6,20}$/)>-1)
}

function isPassword(cla){
    if (cla.search(/^\w{6,12}$/)>-1) {
        //(/^[A-Z]+$|^[a-z]+$|^[\d]+$|^[_]+$/g).test(cla) 必须包含大写字母、小写字母、数字、下划线的最少两种，6-12个字符
        if ((/^[A-Z]+$|^[a-z]+$|^[\d]+$/g).test(cla)) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}



