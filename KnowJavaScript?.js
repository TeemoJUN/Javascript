/*
*
* 这里收集一些好玩的js
*
*/
//................................................................................................................
  var bar="Lin";
  var Obj={
    bar:"Wan",
    foo:function(){
      console.log(Obj.bar);//"Wan"
      console.log(bar)//"Eilc"
      console.log(this.bar)//"Wan"
    }
  }
  Obj.foo();
//注意这里的this.bar输出的"Wan"而bar输出的是"Lin";
//我认为的原因是foo是由Obj调用的所以this绑定在Obj内，而Obj.foo()是在外层调用的所以会在外层寻找bar;
//相当于var c=Obj.foo;c();即在先是引用，在执行！！
//................................................................................................................