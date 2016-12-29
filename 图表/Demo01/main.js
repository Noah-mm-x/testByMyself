/**
 * Created by mengfanxu on 16/12/27.
 */
$(function () {

    $("#container").highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'my chart'
        },
        xAxis: {
            categories: ["昨日", "今日", "明天"]
        },
        yAxis: {
            title: {
                text: "something"
            }
        },
        series: [{
            name: "java",
            data: [1, 10, 4]
        }, {
            name: "js",
            data: [2, 3, 4]
        }]

    });


});