/**
 * Created by mengfanxu on 17/2/6.
 */
$(function () {

    var box = $('.box');
    box.click(function () {
        async(box,expandedArea)(changeColor);
    });

    var callback = function (target,call) {
        expandedArea(target);
        call()
    };

    var async = function (target, before) {
        before(target);
        return function (after) {
            after(target);
        }
    };

    var expandedArea = function (target) {
        target.addClass('expandedArea');
    };

    var changeColor = function (target) {
        target.addClass('changeColor');
    };

});