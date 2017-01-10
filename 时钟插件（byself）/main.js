/**
 * Created by mengfanxu on 16/12/26.
 */
$(function () {

    var $meng=$.fn;
    $meng.extend({
        /**
         *
         * @param mil 毫秒
         */
        //将毫秒转换成时间 00：00：00
        formatTime: function (mil) {
            var hou, min, sec;
            mil = parseInt(mil);
            sec = Math.floor(mil / 1000 % 60);
            min = Math.floor(mil / 1000 / 60 % 60);
            hou = Math.floor(mil / 1000 / 60 / 60);
            return [$meng.formatNum(hou), $meng.formatNum(min), $meng.formatNum(sec)].join(":");
        },
        //数码钟表
        digitalClock: function () {
            return $meng.formatTime($meng.getNowTimeMillisecond());
        },
        //获取当前时间的毫秒数
        getNowTimeMillisecond: function () {
            var now = new Date();
            return 1000 * (now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds())
        },
        //前面添0
        formatNum: function (num) {
            num = parseInt(num);
            return num > 10 ? num : "0" + num;
        }
    });


    setTimeout(function () {
        $("#time").html($.fn.digitalClock());
    }, 0);
    setInterval(function () {
        $("#time").html($.fn.digitalClock());
    }, 1000);


});