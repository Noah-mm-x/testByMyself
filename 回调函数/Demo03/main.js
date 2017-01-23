/**
 * Created by mengfanxu on 17/1/23.
 */
(function () {

   /* function Ting(name) {
        this.name=name;
    }

    Ting.prototype.do=function (callback) {
        callback.call(this);
    }

    function outputName() {
        console.log(this.name);
    }

    var t=new Ting('chenluomenggongzi');
    t.do(outputName);*/
    
   function Ting(name) {
       this.name=name;
   }
   
   Ting.prototype.do=function (callback,greetings) {
       callback.call(this,greetings);
   }
   
   function toGreet(greeting) {
       console.log(greeting+" "+this.name);
   }

   var sayHi=new Ting('chenluomenggongzi');
   sayHi.do(toGreet,"Hi"); //Hi chenluomenggongzi
})();