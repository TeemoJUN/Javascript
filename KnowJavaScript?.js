/*
*
* 这里收集一些好玩的js
*很多人会问为什么这样写，但这样有结果！说明必有原因
*/
//........0.........
//................................................................................................................
  var bar="Lin";
  var Obj={
    bar:"Wan",
    foo:function(){
      console.log(Obj.bar);//"Wan"
      console.log(bar)//"Lin"
      console.log(this.bar)//"Wan"
    }
  }
  Obj.foo();
//注意这里的this.bar输出的"Wan"而bar输出的是"Lin";
//我认为的原因是foo是由Obj调用的所以this绑定在Obj内，而Obj.foo()是在外层调用的所以会在外层寻找bar;
//相当于var c=Obj.foo;c();即在先是引用，在执行！！
//.................平常写的时候注意加....this......
//................................................................................................................

//.......1.......
<input type="file" id="a" onchange="foo(event,this)" multiple="multiple">
  <script type="text/javascript">
     function foo(event,that){
         console.log(arguments);
                                /*
                                [change , input#a 属性(property)值 = "5.png" 属性(attribute)值 = "null"]
                                0
                                  change 

                                1
                                  input#a 属性(property)值 = "5.png" 属性(attribute)值 = "null"

                                __proto__
                                  []
                                */
         console.log(event);// change 
         console.log(that);// <input id="a" type="file" multiple="multiple" onchange="f(event,this)">
         console.log(event.target)// <input id="a" type="file" multiple="multiple" onchange="f(event,this)">
         console.log(event.target===a);//true
         console.log(that.value);//5.png
         console.log(that.files);// FileList { 0=File,  length=1,  item=item()}
      }
  </script>
//由此可以知道event事件是event.target就是this
//.....注意.....event是change！
//.........事件委托的原因..................
//当事件执行的时候会自动传入event
//..................................................................................
//........2............
var a=1;
b=function(){
	var a=3;
	c=function(){
		console.log(a);
	}
	return c;
}
b()();//3
/*
* 闭包,外层作用域对内层作用域的一种访问;因为内层作用在执行完成后（本该gg的），但返回啦本层的某个对象，而该对象可以关联持有本层的所有域。
*/
//........................................................................................
//........3.............
$(function(){
  console.log("AAA");
})
window.onload=function(){
  console.log("BBB");
}
console.log("CCC");

//CCC
//AAA
//BBB
/*
*证明文档加载顺序为先执行js,后执行document.ready,最后执行window.onload
*/
//..........................................................................................
//.........4.................
var a={},b={key:'b'},c={key:'c'};
a[b]=123;
a[c]=456;
console.log(a[b]);//456
/*
*因为b,c本身就是一个对象;所以a[b]和a[c]相当于a["object Object"];因此就相当与给a["object Object"]赋值
*/
//..........................................................................................
//.........5..................
console.log(foo);
function foo(){

  console.log("函数提升");
}

var foo="as";
/*
*Output:foo()
*
*	function foo() {
*  		console.log('函数提升');
*	}
*	var foo;
*	console.log(foo);
*	foo = 'as';
*函数会优先提升，在是变量
*
*/




















