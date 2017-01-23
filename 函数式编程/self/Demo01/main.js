/**
 * Created by mengfanxu on 17/1/11.
 */
(function () {

    var hello=function (name) {
        console.log('hello '+name);
    };
    // var greet=hello;
    // greet('meng')
    var greet= hello.call('meng');
   console.log(greet);
   
})();