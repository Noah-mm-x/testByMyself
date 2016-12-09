/**
 * Created by Administrator on 2016/12/6.
 */
(function () {

    var app1 = new Vue({
        el: "#app-1",
        data: {
            list: [
                {message: "1"},
                {message: "2"},
                {message: "3"}
            ]
        }
    });

    var app2 = new Vue({
        el: "#app-2",
        data: {
            family: "A",
            list: [
                {firstName: "a", lastName: "1"},
                {firstName: "b", lastName: "2"},
                {firstName: "c", lastName: "3"}
            ]
        }
    });


    // var data={name:"meng"};
    // Vue.component("goodslist", {
    //     template:"<ul v-for='i in list'><li>名称 ：{{i.name}}</li><li>价格 ：{{i.price}}</li></ul>",
    //     data:function () {
    //         return data;
    //     }
    // });
    // var app3 = new Vue({
    //     el: "#app-3"
    // });

})();