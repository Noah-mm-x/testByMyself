/**
 * Created by mengfanxu on 16/12/28.
 */
(function () {

    document.write(moment("1995-12-14"));
    document.write("<br/>");
    document.write(moment.unix(13242342131.12));
    document.write("<br/>");
    document.write(moment(["2014", "2", "32"]).isValid());
    document.write("<br/>");
    document.write(moment(["2014", "1", "32"]).invalidAt());
    document.write("<br/>");
    document.write(moment().date());
    document.write("<br/>");
    document.write(moment().isoWeekday(2));
    document.write("<br/>");
    //当前时间减去7天
    document.write(moment().isoWeekday(2).subtract(7,"days"));
    document.write("<br/>");
    //计算年开始的第一天
    document.write(moment().startOf("year"));
    document.write("<br/>");


})();