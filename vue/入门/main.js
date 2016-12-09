/**
 * Created by Administrator on 2016/12/6.
 */
(function () {

    var app1 = new Vue({
        el: "#app-1",
        data: {
            message: "hello vue"
        }
    });

    var app2 = new Vue({
        el: "#app-2",
        data: {
            message: new Date()
        }
    });

    var app3 = new Vue({
        el: "#app-3",
        data: {
            show: false
        }
    });

    var app4 = new Vue({
        el: "#app-4",
        data: {
            todos: [
                {text: "a"},
                {text: "b"},
                {text: "c"}
            ]
        }
    });

    var app5 = new Vue({
        el: "#app-5",
        data: {
            message: "chenluomenggongzi"
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split("").reverse().join("");
            }
        }
    });

    var app6 = new Vue({
        el: "#app-6",
        data: {
            message: "hello vue"
        }
    });

    Vue.component("item", {
        //props 用于接受外部参数
        props: ["content"],
        template: "<li>{{content.text}}</li>"
    });
    var app7 = new Vue({
        el: "#app-7",
        data: {
            list: [
                {text: "1"},
                {text: "2"},
                {text: "3"}
            ]
        }
    });

    var app8 = new Vue({
        el: "#app-8",
        filters: {
            firstToUpCase: function (value) {
                value = value.toString();
                return value.charAt(0).toUpperCase() + value.slice(1);
            }
        },
        data:{
            message:"hello"
        }
    });

    var app9=new Vue({
        el:"#app-9",
        methods:{
            methodsReturn:function () {
                return Date.now();
            }
        },
        computed:{
            computedReturn:function () {
                return Date.now();
            }
        }
    })
})();