/**
 * Created by Administrator on 2016/12/3.
 */
(function () {

    var player=function () {
        var obj=new Object();
        obj.name="meng";
        obj.sayHello=function (name) {
            console.log("hello "+name);
        };
        return obj;
    };
    var p=new player();
    p.sayHello(p.name);

})();