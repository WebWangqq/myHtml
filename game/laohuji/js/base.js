function init(){
	var screenWidth = $(window).width();
	if(screenWidth > 720){
		$("html").css({"font-size":"100px"})
	}else {
		$("html").css({"font-size":100*screenWidth/720 +"px"});
	};
};
$(document).ready(function(){
	init();
});
window.onresize = init;
