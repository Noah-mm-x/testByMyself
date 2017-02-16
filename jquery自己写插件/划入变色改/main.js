/**
 * Created by mengfanxu on 17/1/11.
 */
$(function () {

    $.fn.changeColor=function (options) {
        var settings=$.extend({
            'color':'red'
        },options);

        return this.each(function () {
            $(this).css({
                'color':settings.color
            })
        })
    };

    $('#box').changeColor({
        'color':'blue'
    });
});