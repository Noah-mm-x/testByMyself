/**
 * Created by mengfanxu on 17/2/6.
 */
/**
 * 1、观察者模式其实是回调函数的表现
 * 2、观察者模式其实是用了一个 缓存列表 先存入所有事件，用的时候取出执行。也就达到了回调的目的
 * 3、观察者模式因为上述的2条，也就露出了他的缺点，因为缓存，所以浪费时间
 */
var event = {
    list: [], //定义缓存列表
    listen: function (key, fn) {  //监听事件
        if (!this.list[key]) {  //key用来做 分别，开判断用户是否订阅此消息
            this.list[key] = [];
        }
        this.list[key].push(fn);
    },
    trigger: function () {
        var evs = Array.prototype.shift.call(arguments); //取出所有事件的key
        var fns = this.list[evs]; //取出所有事件
        if (!fns || fns.length === 0) return;
        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments); //依次执行缓存中的函数
        }
    },
    remove: function (key, fn) {
        var fns = this.list[key];
        if (!fns) return false;
        if (!fn) {
            fn && (fns.length = 0);
        } else {
            for (var i = fns.length - 1; i >= 0; i--) {
                var _fn = fns[i];
                if (_fn === fn) fns.splice(i, 1);
            }
        }
    }
};

