/**
 * Created by Administrator on 2016/11/28.
 */
(function () {
    onmessage = function (e) {
        var num = e.data;
        var result = 0;
        for (var i = 0; i < num.length; i++) {
            result += i;
        }
        postMessage(result);
    };
})();
