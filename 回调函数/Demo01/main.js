/**
 * Created by mengfanxu on 16/12/26.
 */
(function () {

    function myFun(num1,num2,callback) {
        callback(num1+num2);
    }

   myFun(1,2,function (num) {
       document.querySelector("#box").innerHTML=num;
   })

})();