/**
 * Created by Administrator on 2016/12/8.
 */
(function () {

    var app1 = new Vue({
        el: "#app-1",
        data: {
            message: "old"
        }
    });
    app1.message = "new";
    console.log(app1.$el.textContent === "new");
    //实现异步
    app1.$nextTick(function () {
        console.log(app1.$el.textContent === "new");
    });


})();