/**
 * Created by Administrator on 2016/12/6.
 */
(function () {

    var app1 = new Vue({
        el: "#app-1",
        data: {
            setFont: {
                green: false,
                red: true
            }
        }
    });

    var app2 = new Vue({
        el: "#app-2",
        data: {
            red: "red",
            green: "green",
            isClick: false
        },
        methods: {
            changeColor: function () {
                this.isClick = this.isClick ? false : true;
            }
        }
    });

    var myComponent = Vue.extend({
        template: "<p>meng</p>"
    });
    Vue.component("my-component", myComponent);
    var app3 = new Vue({
        el: "#app-3"
    });

    Vue.component("my",{
        template:"<p>luo</p>"
    });
    var app4=new Vue({
       el:"#app-4"
    });
})();