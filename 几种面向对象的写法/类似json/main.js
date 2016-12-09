/**
 * Created by Administrator on 2016/12/3.
 */
(function () {

    var player = {
        obj: "meng",
        start: function () {
            console.log("start");
        },
        end: function () {
            console.log("end");
        },
        sayHello: function (name) {
            console.log("hello" + name);
        }
    };
    player.start();
    player.sayHello(player.obj);
    console.log("");

})();