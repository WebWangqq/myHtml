$('body').append("<div id='overlay'></div><div id='tipBox'><div class='tipBoxCon'></div></div><div class='loadBox' id='loadBox'><div class='loadCon'><span class='loading'></span><span>加载中</span></div></div>");

/*比例缩放*/
function resize() {
    var wWidth = document.body.clientWidth;
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
    $('body').css({'overflow':'hidden'})
    $('body').on('touchmove', function(event) { event.preventDefault(); });
}
//隐藏灯箱
function hideLight() {
    $("#overlay").hide();
    $(".lightBox").hide();
    $('body').unbind("touchmove");
    $('body').css({'overflow':'auto'})
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
    $(".field.mustFill").on("input propertychange", function() {
        valF() ? $(".btnMain").removeClass("btnGray") : $(".btnMain").addClass("btnGray")
    })
}
/*表单按钮颜色变化end*/

/*输入手机号格式化*/
function inputMobile(obj) {
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

//去除字符算中的空格
function Trim(cla){
    var obj = cla.replace(/\s+/g, "")
    return obj
}

/*手机号格式化*/
function formatMobile(obj) {
    var value = obj.replace(/\s*/g, "");
    var result = [];
    for (var i = 0; i < value.length; i++) {
        if (i == 3 || i == 7) {
            result.push(" " + value.charAt(i));
        } else {
            result.push(value.charAt(i));
        }
    }
    return result.join("");
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function getApiUrl(){
    var url='http://sale.byjf365.com/SaleInterfaces/'
    return url.toString()
}
function getHtmlUrl () {
    return 'http://sale.byjf365.com/SaleInterfaces/h5/'
}

function ajaxData(string){
    var time = new Date();
    time =time.getFullYear()+ ""+formatNumber((time.getMonth()+1))+""+formatNumber(time.getDate())+""+formatNumber(time.getHours())+""+formatNumber(time.getMinutes())+""+formatNumber(time.getSeconds());
    var mydata={
        "data": string,
        "msgid": time,
        "sign": "asfasdfasfasfasfasdf"
    }
    return JSON.stringify(mydata)
}