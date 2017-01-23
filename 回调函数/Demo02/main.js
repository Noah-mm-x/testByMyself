/**
 * Created by mengfanxu on 17/1/23.
 */
(function () {

    function outputName(callback) {
        callback('chenluomenggongzi');
    }

    function myName(n) {
        console.log(n);
    }

    outputName(myName);
})();