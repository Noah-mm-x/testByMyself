/**
 * Created by Administrator on 2016/12/6.
 */
(function () {

    navigator.getBattery().then(function (battery) {
        console.log(battery.charging);
        console.log(battery.chargingTime);
        console.log(battery.dischargingTime);
        console.log(battery.level);
    })

})();