/**
 * Created by Administrator on 2016/9/13.
 */
window.meng = window.meng || {};
(function () {

    function clearCanvas(idName, ox, oy, width, height) {
        var c = document.querySelector(idName);
        var con = c.getContext("2d");
        con.clearRect(ox, oy, width, height);
        return con;
    }

    meng.clearCanvas = clearCanvas;

    function createText(idName, fontSize, color, text, ox, oy) {
        var c = document.querySelector(idName);
        var con = c.getContext("2d");

        con.save();
        con.beginPath();
        con.font = fontSize + "px 宋体";
        con.fillStyle = color;
        con.fillText(text, ox, oy);
        con.closePath();
        con.restore();
        return con;
    }

    meng.createText = createText;

    function drawSector(idName, ox, oy, r, angleStart, angleEnd, bol, color) {
        var c = document.querySelector(idName);
        var con = c.getContext("2d");
        con.save();
        con.beginPath();
        con.moveTo(ox, oy);
        con.lineTo(r * (Math.cos(angleStart * Math.PI / 180) + 1), r * (Math.sin(angleStart * Math.PI / 180) + 1));

        con.arc(ox, oy, r, angleStart * Math.PI / 180, angleEnd * Math.PI / 180, bol);
        con.lineTo(ox, oy);
        con.fillStyle = color;
        con.fill();
        con.closePath();
        con.restore();
        return con;
    }

    meng.drawSector = drawSector;

    function drawRound(idName, ox, oy, r, color) {
        var c = document.querySelector(idName);
        var con = c.getContext("2d");
        con.save();
        con.beginPath();
        con.arc(ox, oy, r, 0, 2 * Math.PI);
        con.fillStyle = color || {};
        con.fill();
        con.closePath();
        con.restore();
        return con;
    }

    meng.drawRound = drawRound;

    function drawLine(idName, startX, startY, endX, endY, color, lineWidth) {
        var c = document.querySelector(idName);
        var con = c.getContext("2d");
        con.save();
        con.beginPath();
        con.moveTo(startX, startY);
        con.lineTo(endX, endY);
        con.lineWidth = lineWidth;
        con.strokeStyle = color || null;
        con.stroke();
        con.closePath();
        con.restore();
        return con;
    }

    meng.drawLine = drawLine;

    function drawRect(idName, ox, oy, width, height, color) {
        var c = document.querySelector(idName);
        var con = c.getContext("2d");
        con.save();
        con.beginPath();
        con.rect(ox, oy, width, height);
        con.fillStyle = color;
        con.fill();
        con.closePath();
        con.restore();
        return con;
    }

    meng.drawRect = drawRect;

    function fivePointedStar(idName, startX, startY, r, pointX, pointY, color) {
        var c = document.querySelector(idName);
        var con = c.getContext("2d");
        con.save();
        con.beginPath();
        con.moveTo(startX, startY);
        for (var i = 0; i < 6; i++) {
            var ox = r * (Math.cos(144 * i * Math.PI / 180 - Math.PI / 2)) + pointX;
            var oy = r * (Math.sin(144 * i * Math.PI / 180 - Math.PI / 2)) + pointY;
            con.lineTo(ox, oy);
        }
        con.stroke();
        con.fillStyle = color;
        con.fill();
        con.closePath();
        con.restore();
        return con;
    }

    meng.fivePointedStar = fivePointedStar;

    function clickToConsolePoints(idName) {
        var c = document.querySelector(idName);
        document.onclick = function (e) {
            var oe = e || event;
            console.log("x坐标：" + parseInt(oe.pageX - c.offsetLeft), "y坐标：" + parseInt(oe.pageY - c.offsetTop));
        }
    }

    meng.clickToConsolePoints = clickToConsolePoints;

    function percentToAngle(per) {
        return (per / 100) * 2 * Math.PI;
    }

    meng.percentToAngle = percentToAngle;

    function angleToPercent(ang) {
        return (ang * 2 * Math.PI) / 100;
    }

    meng.angleToPercent = angleToPercent;
})();