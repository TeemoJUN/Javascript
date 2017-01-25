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
