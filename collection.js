


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





