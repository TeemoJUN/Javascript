


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
