/**
 * Created by mengfanxu on 17/1/10.
 */
(function () {

    /*function add(x, y) {
        if (x != null && y != null) return x + y;
        else if (x != null && y == null) return function (y) {
            return x + y;
        };
        else if (x == null && y != null) return function (x) {
            return x + y;
        }
    }

    var a = add(1,2);
    console.log(a);
    var b = add(1);
    console.log(b);
    var c = b(10);
    console.log(c);*/
    function test(func) {
        return function () {
            var let=func.apply(this,arguments);
            return let;
        }
    }
    function add(a,b) {
        return a+b;
    }

})();