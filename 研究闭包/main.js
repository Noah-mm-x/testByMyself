/**
 * Created by Administrator on 2016/12/11.
 */
(function () {

    function a() {
        var i=0;
        function b() {
            console.log(++i);
        }
        return b;
    }

    var c=a();
    c();
    
    function d(j) {
        return function () {
            return ++j;
        }
    }
    console.log(d(2)());
})();