/**
 * Created by Administrator on 2016/12/7.
 */
(function () {

    Vue.component("app1-component", {
        template: "<p>meng</p>"
    });
    var app1 = new Vue({
        el: "#app-1"
    });


    var myName = {
        template: "<p>晨落梦公子</p>"
    };
    new Vue({
        el: "#app-2",
        components: {
            'app2-component': myName
        }
    });


    var oneTr = {
        template: "<tr>行</tr>"
    };
    new Vue({
        el: "#app-3",
        components: {
            'app3-component': oneTr
        }
    });


    var app4Data = {name: "meng"};
    var app4Component = {
        template: "<p>{{name}}</p>",
        data: function () {
            return app4Data
        }
    };
    new Vue({
        el: "#app-4",
        components: {
            'app4-component': app4Component
        }
    });

    var app5Data = {msg: "meng"};
    var app5Component = {
        props: ["message"],
        template: "<p>{{message}}</p>"
    };
    new Vue({
        el: "#app-5",
        components: {
            'app5-component': app5Component
        },
        data: function () {
            return app5Data
        }
    });


    var app6Component = {
        template: "<button v-on:click='clicktoadd'>{{counter}}</button>",
        data: function () {
            return {
                counter: 0
            };
        },
        methods: {
            clicktoadd: function () {
                this.counter += 1;
                this.$emit('clicktoadd');
            }
        }
    };
    new Vue({
        el: "#app-6",
        data: {
            total: 0
        },
        components: {
            'app6-component': app6Component
        },
        methods: {
            incrementTotal: function () {
                this.total += 1;
                console.log("1");
            }
        }

    });


    var app7Component = {
        template: "<div class='container'>" +
        "<header>" +
        "<slot name='header'></slot>" +
        "</header>" +
        "<main>" +
        "<slot></slot>" +
        "</main>" +
        "<footer>" +
        "<slot name='footer'></slot>" +
        "</footer>" +
        "</div>"
    };
    new Vue({
        el: "#app-7",
        components: {
            'app7-component': app7Component
        }
    });

    var app8Component = {
        props: ['content'],
        template: "<div><p>name:{{content.name}}</p><span>age:{{content.age}}</span></div>"
    };
    new Vue({
        el: "#app-8",
        data: {
            list: [
                {name: "a", age: 12},
                {name: "c", age: 14},
                {name: "b", age: 11}
            ]
        },
        components: {
            "app8-component": app8Component
        }
    });
})();