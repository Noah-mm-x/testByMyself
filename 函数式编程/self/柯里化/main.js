/**
 * Created by mengfanxu on 17/1/22.
 */
(function () {

    var add = function (x) {
        return function (y) {
            return x + y;
        }
    };

    var a = add(1);
    console.log(a(2)); //3

})();