/**
 * Created by mengfanxu on 17/1/5.
 */
(function () {

    /**
     *
     * @param arr{Array}
     */
    function clearRepeat(arr) {
        var arrTmp = [];
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++)
                if (arr[i] == arr[j]) j = ++i;
            arrTmp.push(arr[i]);
        }
        return arrTmp;
    }

    var arr1 = [1, 1, 2, 2, 2, 2, 3, 3,2];
    console.log(clearRepeat(arr1));
})();