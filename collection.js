


/*
*   先后加载函数时使用的
*/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}
/*
*   创建XMLHttpRequest这个方法还是很棒的，
*   判断window下有没有XMLHttpRequest,没有就在里面加一个 
*/
function getHTTPObject(){
	if(typeof XMLHttpRequest == "undefined"){
    	//这个就是加的
    	XMLHttpRequest = function(){
		return	new ActiveXObject("Microsoft.XMLHTTP");
	}
	}
	return new XMLHttpRequest();
}
/*
*  创建ajax和它的回掉函数
*/
function ajax(url,func){
	var xhr=getHTTPObject();
	
	xhr.open("POST",url,true);
	
	xhr.onreadystatechange=func();
	
	xhr.send(null);
}

/*
*惰性加载入函数addEvenet被声明为一个不同函数，但在第一次进入函数后addEvent会被重写。
*一次判断在也不用再进行判断
*/

var addEvent=function(elem,type,handler){
	if(window.addEventListener){
		addEvent=function(elem,type,handler){
			elem.addEventListener(type,handler,false);
		}
	}
	else if(window.attachEvent){
		addEvent=function(elem,type,handler){
			elem.attachevent("on"+type,handler);
		}
	}
	addEvent(elem,type,handler);
};
//浏览器全屏，来自MDN
(function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
})();

//测试log函数

function log() {
  try {
    console.log.apply(console, arguments);
  } 
  catch (e) {
    try {
      opera.postError.apply(opera, arguments);//兼容opera
    } 
    catch (e) {
      alert(Array.prototype.join.call(arguments, " "));
    }
  }
}

//javascript 实现重载----测试在test.html
 function addMethod(object,name,fn){
    var old=object[name];
    object[name]=function(){
        if(fn.length==arguments.length){
            return fn.apply(this,arguments);
        }
        else if(typeof old=='function'){
            return old.apply(this,arguments);
        }
     }
 }


// 绑定事件-------------------------测试在test.html文件中
//绑定addEventListener中绑定时this会指向标签，不会指向想要的对象
 function bindEvent(context,name){
     return function(){
         return context[name].apply(context,arguments);
     }
 }



//更优雅的上传
var xhr = getHTTPObject();
var formData = new FormData();
var fileInput = document.getElementById("myFile");
var file = fileInput.files[0];
formdata.append('myFile', file);

xhr.open("POST", "/upload.php");

xhr.onload = function(){
    if(this.status === 200){
        //对请求成功的处理
    }
}

xhr.send(formData);
xhr = null;








