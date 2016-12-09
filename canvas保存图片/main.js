/**
 * Created by Administrator on 2016/11/10.
 */
(function () {


    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    /*Canvas转换成图像*/
    function canvasToImage(canvas) {
        var image = document.createElement("img");
        image.src = canvas.toDataURL("image/png");
        return image;
    }

    /*绘制图画*/
    function upEventHandle() {
        canvas.removeEventListener("mousemove", moveEventHandle);
        canvas.removeEventListener("mouseup", upEventHandle);
    }

    function moveEventHandle(moveEvent) {
        context.lineTo(moveEvent.offsetX, moveEvent.offsetY);
        context.stroke();
    }

    canvas.addEventListener("mousedown", function (downEvent) {
        context.moveTo(downEvent.offsetX, downEvent.offsetY);
        canvas.addEventListener("mousemove", moveEventHandle);
        canvas.addEventListener("mouseup", upEventHandle);
    });

    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function createPanting() {
        var canvasTemp = document.createElement("canvas");
        var contextTemp = canvasTemp.getContext("2d");
        contextTemp.drawImage(canvas, 0, 0);
        return canvasTemp;
    }

    var btn=document.getElementById("btn");
    btn.onclick=function () {
        document.body.appendChild(canvasToImage(canvas));
    };
})();