/**
 * Created by mengfanxu on 17/2/4.
 */
$(function () {

    // var data = [{'name': 'a', 'age': 12}, {'name': 'b', 'age': 12},{'name': 'c', 'age': 11}];
    // $.each(data,function (index,domEle) {
    //     console.log(index,domEle);
    // });
    //
    // $.map(data,function (a,b) {
    //     console.log(a,b);
    // });

    // $('ul li').each(function () {
    //     console.log($(this).html());
    // })

    $('ul li').map(function () {
        console.log($(this).html());
    })
});