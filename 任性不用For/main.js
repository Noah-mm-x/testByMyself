/**
 * Created by mengfanxu on 17/2/14.
 */

$(function () {

    var $btn = $('#btn'),
        $checkBox = $('input[name="hobby"]');

    function isChecked(target) {
        return target.checked;
    }

    function getValue(target) {
        return target.value;
    }

    $btn.on('click', function () {
        var checkedItems = $checkBox.toArray().filter(isChecked).map(getValue);
        console.log(checkedItems);
    });

});
