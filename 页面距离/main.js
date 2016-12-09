/**
 * Created by Administrator on 2016/12/4.
 */
(function () {

    function objClick(targetId) {
        document.getElementById(targetId).onclick = function (e) {
            console.log("offsetX " + e.offsetX + " offsetY " + e.offsetY);
            console.log("clientX " + e.clientX + " clientY " + e.clientY);
            console.log("pageX " + e.pageX + " pageY " + e.pageY);
            console.log("");
        }
    }

    objClick("div1");
    objClick("div2");


})();