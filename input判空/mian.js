/**
 * Created by mengfanxu on 17/2/10.
 */
$(function () {

    var a=$('.a'),
        b=$('.b'),
        c=$('.c'),

        btn=$('#btn');


    btn.click(function () {
        isNull([a,b,c],"");
    });

    function isNull(targetArr,info) {
        for (var i in targetArr){
            console.log(targetArr[i]);
            if(targetArr[i].val().length==0){
                alert('失败');
                return false;
            }else {
                alert('成功')
            }
        }
    }

});