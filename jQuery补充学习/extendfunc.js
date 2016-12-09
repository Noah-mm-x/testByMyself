/**
 * Created by Administrator on 2016/10/3.
 */

(function ($) {
    $.extend({
        sayHello: function (name) {
            // alert(name + ": hello");
        }
    });

    $.fn.redBg = function () {
        $(this).css("background", "red");
    };

    $.fn.changeFontColorAndSize = function (options) {
        var defaults = {
            "color": "white",
            "fontSize": "24px"
        };
        var settings = $.extend({}, defaults, options);
        return this.css({
            "color": settings.color,
            "fontSize": settings.fontSize
        })
    }
})(jQuery);


