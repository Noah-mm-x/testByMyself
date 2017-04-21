/**
 * Created by mengfanxu on 17/4/19.
 */
$(function () {

    var slider = $('<div class="slider-box"></div>');
    var positionArray = [];


    $('.photos-box li').each(function (index, ele) {
        var positionItem = {
            left: 0,
            top: 0
        };
        positionItem.left = $(ele).offset().left;
        positionItem.top = $(ele).offset().top;
        positionArray.push(positionItem);
    });


    $(document).on('mousemove', '.photos-box', function (e) {
        e.stopImmediatePropagation();
        var _self = e;
        if ($('body').find(slider).length == 0) $('body').append(slider);
        $(positionArray).each(function (index, ele) {
            if (_self.pageX > ele.left  && _self.pageY > ele.top) {
                slider.css({
                    'left': ele.left + 'px',
                    'top': ele.top + 'px'
                })
            }
        });

    });

});