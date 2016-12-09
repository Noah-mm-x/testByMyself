/**
 * Created by Administrator on 2016/10/24.
 */
(function () {

    function showOne() {
        $.ajax({
            url: "data1.txt",
            async:false,
            success: function (data) {
                console.log(data);
            }
        });
    }

    function showTwo() {
        $.ajax({
            url: "data2.txt",
            async:false,
            success: function (data) {
                console.log(data);
            }
        });
    }

    function showThree() {
        $.ajax({
            url: "data3.txt",
            async:false,
            success: function (data) {
                console.log(data);
            }
        })
    }

    function queue() {
        meng.queue.addItem(showOne);
        meng.queue.addItem(showTwo);
        meng.queue.addItem(showThree);
        meng.queue.runItem();
    }

    function init() {
        showOne();
        showTwo();
        showThree();
        console.log("");
        queue();
    }

    init();
})();