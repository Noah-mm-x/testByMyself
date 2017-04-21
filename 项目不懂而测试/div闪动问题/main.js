(function () {
    var box1 = document.querySelector(".box1");
    var box2 = document.querySelector(".box2");

    box2.addEventListener("mouseenter", function () {
        box1.style.display = "none";
    });
    box2.addEventListener("mouseleave", function () {
        box1.style.display = "block";
    });

})();