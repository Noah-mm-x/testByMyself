/**
 * Created by Administrator on 2016/12/16.
 */
(function ($) {

    $.fn.extend({
        check:function () {
            return this.each(function () {
                $(this).prop({"checked":true});
            })
        }
    });

    $("input[type='checkbox']").check();
})(jQuery);