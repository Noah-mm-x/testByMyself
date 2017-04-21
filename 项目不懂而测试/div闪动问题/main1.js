/**
 * Created by mengfanxu on 17/4/19.
 */
(function () {

    var box = document.getElementById('box');
    var moving = false;

    box.addEventListener('mouseenter', function () {
        moving = true;
        this.style.display = 'none';
        console.log(1);
    });

    box.addEventListener('mouseleave', function () {
        if(!moving) return false;
        moving = false;
        this.style.display = 'block';
        console.log(2);
    });

})();