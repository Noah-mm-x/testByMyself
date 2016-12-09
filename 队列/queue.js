/**
 * Created by Administrator on 2016/10/19.
 */
window.meng = window.meng || {};
(function () {

    var items = [];

    meng.queue = {
        /**
         *
         * @param {Function} item
         */
        addItem: function (item) {
            items.push(item);
        },
        /**
         *
         * @param {Function} item
         */
        removeItem: function (item) {
            if (item) {
                var index = items.indexOf(item);
                if (index != -1) {
                    items.splice(index, 1);
                }
            } else {
                items.pop();
            }

        },
        removeAllItem: function (item) {
            while (true) {
                var index = items.indexOf(item);
                if (index != -1) {
                    items.splice(index, 1);
                } else {
                    return false;
                }
            }

        },
        removeAll: function () {
            items.splice(0, items.length);
        },
        runItem: function () {
            for (var i = 0; i < items.length; i++) {
                (function (i) {
                    items[i]();
                })(i);
            }
        }
    }

})();