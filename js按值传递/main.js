/**
 * Created by Administrator on 2016/12/12.
 */
(function () {

    var arr=[0,1];
    function change(value) {
        value[0] += 1;
    }

    change(arr);
    console.log(arr);

})();