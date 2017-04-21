/**
 * Created by mengfanxu on 17/4/18.
 */
(function () {

    // 普通写法

    console.log(520 - 11 + 520 - 1);

    function sum(a, b) {
        return a + b;
    }

    function sub(a, b) {
        return a - b;
    }

    console.log(sub(sum(sub(520, 11), 520), 1));

    // 链式写法

    var chain = {
        setValue: function (a) {
            this._temp = a;
            return this;
        },
        sum: function (b) {
            this._temp += b;
            return this;
        },
        sub: function (c) {
            this._temp -= c;
            return this;
        },
        getValue: function () {
            return this._temp;
        }
    };
    console.log(chain.setValue(520).sub(11).sum(520).sub(1).getValue());

})();