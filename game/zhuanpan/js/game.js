$(function(){
	
})
var rotateTimeOut = function (){
	$('#rotate').rotate({
		angle:0,
		animateTo:2160,
		duration:8000,
		callback:function (){
			alert('网络超时，请检查您的网络设置！');
		}
	});
};
var bRotate = false;
var rotateFn = function (awards, angles, txt){
	bRotate = !bRotate;
	$('#rotate').stopRotate();
	$('#rotate').rotate({
		angle:0,
		animateTo:angles+1800,
		duration:8000,
		callback:function (){
			alert(txt);
			bRotate = !bRotate;
		}
	})
};
function award(){
	switch (item) {
		case 0:
			rotateFn(0, 334, '未中奖');
			break;
		case 1:
			rotateFn(1, 26, '免单4999元');
			break;
		case 2:
			rotateFn(2, 77, '免单50元');
			break;
		case 3:
			rotateFn(3, 128, '免单10元');
			break;
		case 4:
			rotateFn(4, 180, '免单5元');
			break;
		case 5:
			rotateFn(5, 231, '免分期服务费');
			break;
		case 6:
			rotateFn(6, 283, '提高白条额度');
			break;
	}
}
var count=2;//转奖次数
var item; //最终中奖位置
$('.pointer').click(function (){
	if(bRotate)return;
	count--;
	if(count>=0){
		item =Math.round(Math.random()*6) ;
		console.log(item)
		award();
	}
	else{
		alert("您已经没有抽奖机会！");
	}
	
});