/**
 * Created by Administrator on 2016/10/19.
 */
(function () {

    var canvas = document.getElementById("canvas");
    var con = canvas.getContext("2d");
    var img = document.querySelector(".blur");

    canvas.style.width = img.clientWidth+"px";
    canvas.style.height = img.clientHeight+"px";

    var getPixelRatio = function(context) {
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    };
    var ratio = getPixelRatio(con);
    function render() {
        con.drawImage(img, 0, 0,img.clientWidth*ratio,img.clientHeight*ratio);
        requestAnimationFrame(render);
    }

    function init() {
        render();
    }

    init();
})();