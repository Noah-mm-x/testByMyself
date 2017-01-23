/**
 * Created by mengfanxu on 17/1/23.
 */

window.meng = window.meng || {};
$(function () {

    function Card() {
        this._htmlNode = $("<div class='card'></div>");
    }

    Object.defineProperty(Card.prototype, 'htmlNode', {
        get: function () {
            return this._htmlNode;
        }
    });

    Card.prototype.confirmPosition = function ($cloud) {
        var minLeft = $cloud.position().left,
            maxLeft = $cloud.position().left + $cloud.width() - this._htmlNode.width(),
            minTop = $cloud.position().top + $cloud.height() - 20,
            maxTop = $cloud.position().top + $cloud.height(),
            randLeft = Math.random() * (maxLeft - minLeft) + minLeft,
            randTop = Math.random() * (maxTop - minTop) + minTop;
        this._htmlNode.css({
            'left': randLeft + 'px',
            'top': randTop + 'px'
        });
    };

    Card.prototype.addTransition = function (callback) {
        if (typeof callback != 'function') return false;

        var speed = Math.random() * 4000 + 200;
        this._htmlNode.css({
            '-webkit-transition': 'all ,' + speed + 'ms',
            'transition': 'all ,' + speed + 'ms',
            'opacity': "0"
        });
        callback(this._htmlNode);
    };

    Card.prototype.addRotate = function () {
        var rotateDeg = Math.random() * 20 - 10;
        this._htmlNode.css({
            'transform': 'rotate(' + rotateDeg + 'deg)',
            '-webkit-transform': 'rotate(' + rotateDeg + 'deg)'
        });
    };

    Card.prototype.addTranslateY = function () {
        var maxTranslateY = Math.random() * 10 + 80;
        this._htmlNode.css({
            'transform': 'translateY(' + maxTranslateY + "px)",
            '-webkit-transform': 'translateY(' + maxTranslateY + "px)"
        })
    };

    Card.prototype.clean = function (n) {
        if (n.css('opacity') == '0') n.hide();
    };
    meng.Card = Card;

});