/**
 * Created by mengfanxu on 16/12/26.
 */
$(function () {
    var reg=/^\d{1,5}/g;
    var regIn6_12=/^[A-Za-z0-9]{6,12}$/g;
    console.log("/^\d{1,5}/g test fdsfsfsfs   "+reg.test("fdsfsfsfs"));
    console.log("/^\d{1,5}/g test aaa   "+reg.test("aaa"));
    console.log("/^\d{1,5}/g test 123   "+reg.test("123"));

    console.log("/^[A-Za-z0-9]{6,12}$/g test dfsfsdfsfsfdsfs   "+regIn6_12.test("dfsfsdfsfsfdsfs"));
    console.log("/^[A-Za-z0-9]{6,12}$/g test ddddd    "+regIn6_12.test("ddddd"));
    console.log("/^[A-Za-z0-9]{6,12}$/g test 12345df12   "+regIn6_12.test("12345df12"));
});