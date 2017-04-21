/**
 * Created by mengfanxu on 17/4/18.
 */
//全局注册
Vue.component('com1', {
    template: '<div>这就是个组件</div>'
});
new Vue({
    el: '#app-1'
});

//局部注册
var com1 = {
    template: '<div>局部注册的组件1</div>'
};
var com2 = {
    template: '<div>局部注册的组件2</div>'
}
new Vue({
    el: '#app-2',
    components: {
        'com1': com1,
        'com2': com2
    }
});

//数据组件
Vue.component('data-component', {
    template: '<div>{{msg}}</div>',
    data: function () {
        return {
            msg: 'hello'
        }
    }
});

new Vue({
    el: '#app-3'
});

//使用prop
Vue.component('prop-component', {
    props: ['msg'],
    template: '<div>{{msg}}</div>'
});

new Vue({
    el: '#app-4'
});

// 动态prop组件
Vue.component('dynamic-prop', {
    props: ['msg'],
    template: '<div>{{msg}}</div>'
});

new Vue({
    el: '#app-5',
    data: function () {
        return {
            info: 'hello'
        }
    }
});

//自定义事件
Vue.component('btn-counter', {
    template: '<button @click="add">{{num}}</button>',
    data: function () {
        return {
            num: 0
        }
    },
    methods: {
        add: function () {
            this.num += 1;
            this.$emit('add');
        }
    }
});

new Vue({
    el: '#app-6',
    data: {
        total: 0
    },
    methods: {
        parentAddOne: function () {
            this.total += 1;
        }
    }
});

//编译作用域
new Vue({
    el: '#app-7',
    data: {
        msg: '点我消失',
        isShow: true
    },
    methods: {
        scopeHidden: function () {
            this.isShow = !this.isShow;
            this.msg = this.msg == '点我消失' ? '点我出现' : '点我消失';
        }
    },
    components: {
        'scope-component': {
            props: ['show'],
            template: '<div v-if="show">lalala</div>'
        }
    }
});

//单个slot
new Vue({
    el: '#app-8',
    components: {
        'slot-component': {
            template: '<div>' +
            '<h3>我是副标题</h3>' +
            '<slot>没有内容吧？没有我就出来</slot>' +
            '</div>'
        }
    }
});

// 具名slot
new Vue({
    el: '#app-9',
    components: {
        'name-slot': {
            template: '<div>' +
            '<div class="header"><slot name="header"></slot></div>' +
            '<div class="main"><slot></slot></div>' +
            '<div class="footer"><slot name="footer"></slot></div>' +
            '</div>'
        }
    }
});

//动态组件
new Vue({
    el: '#app-10',
    data: {
        currentView: 'two'
    },
    components: {
        one: {
            template: '<div>one</div>'
        },
        two: {
            template: '<div>two</div>'
        },
        three: {
            template: '<div>three</div>'
        }
    }
});

//组件套组件
new Vue({
    el: '#app-11',
    data: {
        msg: 'hello'
    },
    components: {
        xu1: {
            template: '<div><slot name="xu"></slot></div>'
        },
        xu2: {
            props: ['comMsg'],
            template: '<div>{{comMsg}}</div>'
        }
    }
});

//组件列表
new Vue({
    el: '#app-12',
    data: {
        liData: '11111',
        items: ['11111', '22222', '33333', '44444', '55555']
    },
    methods: {
        showLiContent: function (msg) {
            this.liData = msg;
        }
    },
    components: {
        'list': {
            props: ['comItems'],
            template: '<ul>' +
            '<li v-for="item in comItems" @click="logName(item)">{{item}}</li>' +
            '</ul>',
            methods: {
                logName: function (item) {
                    this.$emit('log-name', item);
                //    这里得用横线 不能驼峰
                }
            }
        }
    }
});