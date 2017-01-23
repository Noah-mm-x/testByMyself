/**
 * Created by mengfanxu on 17/1/23.
 */
(function () {

    /*function controlArray() {
        var arr=[];
        for (var i = 0; i < 10; i++) {
            arr.push(i);
        }
        for (var j = 0,length=arr.length; j < length; j++) {
           arr[j]++;
        }
        return arr;
    }
    var arr1=controlArray();
    console.log(arr1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]*/

    function loadingArray(callback) {
        if(typeof callback != "function") return false;
        var arr=[];
        for (var i = 0; i < 10; i++) {
            if(callback){
                arr.push(callback(i));
            }
        }
        return arr;
    }

    function addNum(target) {
       return target += 1;
    }

    var arr1=loadingArray(addNum);
    console.log(arr1); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

})();