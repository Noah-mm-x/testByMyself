/**
 * Created by Administrator on 2016/11/28.
 */
(function () {
    var work=new Worker("work.js");
    work.postMessage("ab");
    work.onmessage=function (e) {
        console.log(e.data);
    }
})();