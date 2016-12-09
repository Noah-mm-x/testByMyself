/**
 * Created by Administrator on 2016/12/5.
 */
(function () {

    function calleeDemo() {
        console.log(arguments.callee);
    }

    calleeDemo();

    function judgeParameterLength(arg1, arg2) {
        if (arguments.length == arguments.callee.length) {
            console.log("形参与实参长度一致");
        } else {
            console.log("实参长度" + arguments.length, "形参长度" + arguments.callee.length);
        }
    }

    judgeParameterLength(1, 2); //形参与实参长度一致
    judgeParameterLength(1); //实参长度1 形参长度2

    // function sum(n) {
    //     if (n == 1)
    //         return 1;
    //     else
    //         return n + arguments.callee(n - 1);
    // }
    // console.log(sum(10)); //55

    function sum(n) {
        if (1 == n)
            return 1;
        else
            return n + sum(n - 1);
    }
    console.log(sum(10)); //55
})();