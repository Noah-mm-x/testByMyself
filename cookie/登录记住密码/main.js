/**
 * Created by Administrator on 2016/12/6.
 */

window.meng = window.meng || {};
(function () {

    function setCookie() {
        var username = $("#username").val();
        var pwd = $("#password").val();
        var isChecked = $("[id='isChecked']:checked");
        console.log(isChecked);

        if (username && pwd) {
            if (isChecked && isChecked.length > 0) {
                $.cookie("username", username);
                $.cookie("password", $.base64.encode(pwd));
            }
        } else {
            alert("用户名或密码不能为空");
            $("[id='isChecked']").prop({"checked": false});
        }


    }

    function getCookie() {
        var username = $.cookie("username");
        var pwd = $.cookie("password");
        if (username && pwd) {
            $("[id='isChecked']").prop({"checked": true});
        }

        if ($("[id='isChecked']").is(":checked")) {
            $("#username").val(username);
            $("#password").val($.base64.decode(pwd));
        }
    }

    meng.setCookie = setCookie;

    function init() {
        getCookie();
    }

    init();
})();