/**
 * Created by mengfanxu on 17/2/3.
 */
$(function () {

    var showBox = $('.box');

    $.getJSON('data/package.json', function (data) {
        console.log(data.items.length);
        var item = data.items,length = data.items.length, pageIndex ;
        //默认页面显示内容
        showBox.html('姓名：'+item[0]['name']+'\n'+'年龄：'+item[0]['age']);
        $(".M-box").pagination({
            pageCount: length,
            jump: true,
            coping: true,
            homePage: '首页',
            endPage: '末页',
            preContent: '上页',
            nextContent: '下页',
            callback: function (index) {
                pageIndex = index.getCurrent()-1;
                showBox.html('姓名：'+item[pageIndex]['name']+'\n'+'年龄：'+item[pageIndex]['age']);
            }
        })
    });


});