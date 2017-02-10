/**
 * Created by mengfanxu on 17/2/7.
 */
(function () {

    function getRemainingTime() {
        var endTime = new Date('2017/2/9 00:00:00'),
            nowTime = new Date(),
            remainingTime = endTime - nowTime,
            d, h, m, s;
        if (remainingTime > 0) {
            d = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
            h = Math.floor(remainingTime / 1000 / 60 / 60 % 24);
            m = Math.floor(remainingTime / 1000 / 60 % 60);
            s = Math.floor(remainingTime / 1000 % 60);
        }
        console.log('day:' + d + '\n' + 'hour:' + h + '\n' + 'minutes:' + m + '\n' + 'second:' + s);
    }

    getRemainingTime();
})();