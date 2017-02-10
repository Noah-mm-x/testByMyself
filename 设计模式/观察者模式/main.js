/**
 * Created by mengfanxu on 17/2/6.
 */
(function () {

    var initEvent = function (obj) {
        for (var i in event) {
            obj[i] = event[i];
        }
    };
    var shoeObj = {};
    initEvent(shoeObj);
    shoeObj.listen('red', fn1 = function (size) {
        console.log('尺码是:' + size);
    });

    shoeObj.listen('blue', function (size) {
        console.log('尺码是:' + size);
    });

    shoeObj.remove('red', fn1);
    shoeObj.trigger('red', 40);
    shoeObj.trigger('blue', 42);

})();

