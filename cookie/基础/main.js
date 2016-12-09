/**
 * Created by Administrator on 2016/12/6.
 */
window.meng = window.meng || {};
(function () {

    function saveCookie() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        var date = new Date();
        date.setTime(date.getTime() + 5000);

        setCookie("userName", username, date.toUTCString(), "", "");
        setCookie("password", password, date.toUTCString(), "", "");
        showCookie();
    }

    function setCookie(name, value, expires, path, domain, secure) {
        document.cookie = name + "=" + encodeURI(value) +
            ((expires) ? ";expires=" + expires : "") +
            ((path) ? ";path=" + path : "") +
            ((domain) ? ";domain=" + domain : "") +
            ((secure) ? ";secure=" + secure : "");
    }

    function getCookie(cName) {
        var cookieString = decodeURI(document.cookie);
        console.log(cookieString);
        var cookieArray = cookieString.split("; ");
        console.log(cookieArray);
        for (var i = 0; i < cookieArray.length; i++) {
            var cookieNum = cookieArray[i].split("=");
            var cookieName = cookieNum[0];
            var cookieValue = cookieNum[1];

            if (cookieName == cName) {
                return cookieValue;
            }
        }
    }

    function showCookie() {
        var txt = document.getElementById("show");
        txt.value = "用户名：" + getCookie("userName") + "\n密码：" + getCookie("password");
    }

    function deleteCookie() {
        var date = new Date();
        date.setTime(date.getTime() - 1000);
        setCookie("userName", "", date.toUTCString(), "", "", "");
        setCookie("password", "", date.toUTCString(), "", "", "");
        showCookie();
    }

    meng.saveCookie = saveCookie;
    meng.deleteCookie = deleteCookie;

})();