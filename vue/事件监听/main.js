/**
 * Created by Administrator on 2016/12/7.
 */
(function () {

    var app1 = new Vue({
        el: "#app-1",
        data: {
            counter: 0
        }
    });


    var app2 = new Vue({
        el: "#app-2",
        data: {
            name: "vue"
        },
        methods: {
            hello: function () {
                alert("hello " + this.name);
            }
        }
    });

    var app3 = new Vue({
        el: "#app-3",
        methods: {
            say: function (value) {
                alert(value);
            }
        }
    });

    var app4 = new Vue({
        el: "#app-4",
        methods: {
            test: function () {
                alert("您点击了enter");
            }
        }
    });

    var app5 = new Vue({
        el: "#app-5",
        data: {
            checkedNames:[]
        }
    });
})();