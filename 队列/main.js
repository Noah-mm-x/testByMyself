/**
 * Created by Administrator on 2016/10/19.
 */
(function () {

    function logA() {
        console.log("A");
    }

    function logB() {
        console.log("B");
    }

    function logC() {
        console.log("C");
    }

    function queue() {
        meng.queue.addItem(logA);
        meng.queue.addItem(logC);
        meng.queue.addItem(logC);
        meng.queue.removeAllItem(logB);
        meng.queue.removeItem(logA);
        meng.queue.removeAll();
        meng.queue.removeItem();

        meng.queue.runItem();
    }

    function init() {
        console.log("排序之前");
        logA();
        logB();
        logC();
        console.log("排序之后");

        queue();
    }

    init();
    
    
})();