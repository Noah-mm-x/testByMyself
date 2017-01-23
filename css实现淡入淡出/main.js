/**
 * Created by mengfanxu on 17/1/23.
 */
(function () {

    var fade=$('.fade');
    fade.on('click',function () {
        console.log(1);
    })
    $(document).on('scroll',function () {
        if($(this).scrollTop()>500){
            fade.addClass('fadeIn').removeClass('fadeOut');
        }else{
            fade.addClass('fadeOut').removeClass('fadeIn');
            fade.trigger('click');
        }
    });
    


})();