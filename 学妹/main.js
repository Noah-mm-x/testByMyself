/**
 * Created by mengfanxu on 17/4/26.
 */
;$(function () {

    var content = $('.content');
    $('.select-content li a').on('click', function (e) {
        e.preventDefault();
        var _self = $(this),
            data = _self.data('content');

       content.find('li.'+data).removeClass('hide').addClass('show')
           .siblings().removeClass('show').addClass('hide');
    })

});