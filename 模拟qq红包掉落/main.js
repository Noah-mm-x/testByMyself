/**
 * Created by mengfanxu on 17/1/23.
 */
$(function () {

    var $box = $('.box'), $cloud = $('.cloud');

    function n() {
        for (var i = 0; i < 10; i++) {
            var card=new meng.Card(),
                cardHtmlNode=card.htmlNode;
            $box.prepend(cardHtmlNode);
            console.log(cardHtmlNode);
            card.confirmPosition($cloud);
            card.addTransition(card.clean);
            card.addRotate();
            card.addTranslateY();
        }

    }
    // requestAnimationFrame(n);
    // setInterval(n,1000)
});