//var canvas = document.getElementById("myCanvas");
var canvas = $("#myCanvas").get(0);
var ctx = canvas.getContext('2d');

//1.画矩形
ctx.fillStyle = '#FF0000';
ctx.fillRect(0,0,300,300);

ctx.fillStyle = "rgba(0,0,255,0.5)";
ctx.fillRect(200,200,500,500);

//2.画直线
ctx.moveTo(10,10);
ctx.lineTo(150,150);
ctx.lineTo(300,0);
//结束划线
ctx.stroke();

//3.画圆
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(200,200,30,0,Math.PI*2,true);
ctx.closePath();
//结束渲染
ctx.fill();


//4.颜色渐变
var grad = ctx.createLinearGradient(100,100,175,50);
grad.addColorStop(0,"yellow");
grad.addColorStop(0.5,"red");
grad.addColorStop(0.8,"black");
grad.addColorStop(1,"blue");
ctx.fillStyle = grad;
ctx.fillRect(100,100,175,50);

//5.图形载入
var img = new Image();
img.src = "img/HBuilder.png";
ctx.drawImage(img,300,50);
img.onload = function(){
	ctx.drawImage(img,300,50);
}
function mousexy(event){
	var x = event.clientX;
	var y = event.clientY;
	document.getElementById("locationxy").innerHTML = "x的坐标为：" + x + ",y的坐标为："+y;
}
