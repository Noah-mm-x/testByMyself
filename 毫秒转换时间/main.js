/**
 * Created by mengfanxu on 16/12/26.
 */
$(function () {

    $.fn.extend({
        /**
         *
         * @param mil 毫秒
         */
        formatTime: function (mil) {
            var hou, min, sec;
            mil = parseInt(mil);
            sec = Math.floor(mil / 1000 % 60);
            min = Math.floor(mil / 1000 / 60 % 60);
            hou = Math.floor(mil / 1000 / 60 / 60);
            return [$.fn.formatNum(hou), $.fn.formatNum(min), $.fn.formatNum(sec)].join(":");
        },
        digitalClock: function () {
            return $.fn.formatTime($.fn.getNowTimeMillisecond());
        },
        getNowTimeMillisecond: function () {
            var now = new Date();
            return 1000 * (now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds())
        },
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

    console.log($.fn.self());

});