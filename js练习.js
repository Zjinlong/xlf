//隐式
/*	var a="小孩";
	var b=11;
	var x=a+b;
	document.write(x);//小孩11

	var a="22";
var b=true;
var x=a+b;
document.write(x);//2211

var a = 11, b = '小孩';
var c = a - b;
alert(c);//NaN

var a = 11, b = '5';
var c = a - b;
alert(c);//6

var a = 11, b = true;
var c = a - b;
alert(c);//10

                  
var a = 11, b = false;
var c = a - b;
alert(c);//11

var a = 11, b = null;
var c = a - b;
alert(c);//110p9o;l.,-;l;l-;l-;l-;l-;l-;l-;l-;l-;l-;l-;l-;l-;l-;l-;l-;l-;l-;l-;l-;l-;l-;l-;l-;l-;l-;l-/ 

var a = 11, b = undefined;
var c = a - b;
alert(c);//NAN

var a = 11, b = undefined;
var c = a - b;
alert(c);//NAN

//显示转换

//对布尔类型的转换
var a=true;
alert(Number(a));//1
var a=false;
alert(Number(a));//1

//对字符类型的转换
var a="333";
alert(Number(a));//333

var a="333阿迪";
alert(Number(a));//nan

var a="赵勃斌";
alert(Number(a));//nan

var a=null;
alert(Number(a));//0

var a=undefined;
alert(Number(a));//nan

//parseInt
var a=true;
alert(parseInt(a));//nan

var a="333迪欧";
alert(parseInt(a));//333

var a="迪4欧";
alert(parseInt(a));//nan  从首字母开始识别

var a="124.656";
alert(parseInt(a));//124

var a=" ";
alert(parseInt(a));//nan

//parseFloat(string)
var a="12233.333";
alert(parseFloat(a));//12233.333

//将其他类型转换为字符串

var num=98;//数字型
alert(typeof num.toString());

var num=true;//布尔
alert(typeof num.toString());

var num=null;//null，undefined报错
alert(typeof num.toString());

var num={};//object
alert(typeof num.toString());

//String()

var num=undefined;//
alert(String(num));//undefined

var num=null;//
alert(String(num));//null
*/

//var message="hello world";
//var messageAsBoolean=Boolean(message)
//alert(messageAsBoolean);

//var message=false
//var messageAsBoolean=Boolean(message)
//alert(messageAsBoolean);
//var a="false";
////var messageAsBoolean=Boolean(message)
//alert(Boolean(a));
//var a=3;
//var b=5;
//var c=a*b
//alert(c)

//表达式
//var a=1
//var b=5
//var c=a+b
//alert(c)
//var a="1"
//var b="5"
//var c=a+b
//alert(c)


//  function startTime(){
//	var today=new Date();
//	var h=today.getHours();
//	var m=today.getMinutes();
//	var s=today.getSeconds();
//	m=checkTime(m)
//	s=checkTime(s)
//	document.getElementById("a").innerHTML=h+":"+m+":"+s;
//	t=setTimeout(function(){startTime()},500)}
//
//  function checkTime(i){if(i<10){i="0"+i;}return i;}
////
//var a=1
//  b=3
//alert(a+b)
//	请写出代码，将字符串var str = “abcde”,倒序输出到页面中为“edcba”
 var atr="abcde"
 var arr=atr.split("")
 console.log(arr.reverse(),jojn(""))
