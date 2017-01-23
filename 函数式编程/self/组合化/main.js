/**
 * Created by mengfanxu on 17/1/22.
 */
(function () {

    var compose=function (f,g) {
        return function (x) {
            return f(g(x));
        }
    };

    var getHead=function (x) {return x[0]};
    var toUpperCase=function (x) {return x.toUpperCase();};

    var controlString=compose(getHead,toUpperCase);

    var str='meng';
    console.log(controlString(str));
})();