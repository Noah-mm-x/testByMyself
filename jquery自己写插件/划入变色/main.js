/**
 * Created by Administrator on 2016/12/16.
 */
(function ($) {

    $.fn.changeColor = function (options) {
        var defaults = {
            "hoverColor": "red",
            "color": "black"
        };
        var settings = $.extend({}, defaults, options);
        return this.hover(function () {
            $(this).css({
                "color": settings.hoverColor
            })
        }, function () {
            $(this).css({
                "color": settings.color
            })
        });
    };
    $("#box").changeColor({});

})(jQuery);