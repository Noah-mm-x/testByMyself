/**
 * Created by Administrator on 2016/10/25.
 */
window.meng = window.meng || {};
(function () {
    
    /**
     *
     * @param {Number}width
     * @param {Number}height
     * @param {String}color
     * @constructor
     */
    function CreateDiv(width, height, color) {
        this.oWidth = width;
        this.oHeight = height;
        this.oColor = color;
        if (!(this instanceof CreateDiv)) {
            return new CreateDiv(width, height, color);
        }
    }

    CreateDiv.prototype.render = function () {
        var div = document.createElement("div");
        div.style.width = this.oWidth + "px";
        div.style.height = this.oHeight + "px";
        div.style.backgroundColor = this.oColor;
        return div;
    };
    meng.CreateDiv = CreateDiv;
})();