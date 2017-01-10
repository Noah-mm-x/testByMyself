/**
 * Created by mengfanxu on 17/1/10.
 */

window.meng = window.meng || {};
$(function () {
    function send() {
        var barrage = $('.barrage'),
            maxWidth = barrage.width(),
            maxHeight = barrage.height(),
            txt = $('.txt'),
            txtVal = txt.val(),
            verDir = Math.random() * (maxHeight - 100) + 50,//竖直
            horDir = maxWidth,//水平
            barrageText = $('<span class="barrageText"></span>').css({
                top: verDir + 'px',
                right: -20 + 'px',
                color: getColor()
            });

        if (txtVal.length > 15) {
            alert('长度不能超过15');
            txt.val('');
            return;
        }

        barrageText.html(txtVal);
        barrage.prepend(barrageText);
        barrageText.animate({right: horDir + 'px'}, 5000,'linear', function () {
            $(this).remove();
        });
        txt.val('');
    }

    var txtSubmit = $('.txt');
    txtSubmit.on('keypress', function (e) {
        if (e.keyCode == 13) {
            send();
        }
    });
    var btn = $('.btn');
    btn.on('click', function (e) {
        e.preventDefault();
        send();
    });

    function getColor() {
        var finalColor = '#',
            value = '0123456789ABCDEF'.split('');

        for (var i = 0; i < 6; i++) {
            var randomPosition = Math.floor(Math.random() * value.length);
            finalColor += value[randomPosition];
        }
        return finalColor;
    }

    meng.send = send;
});

