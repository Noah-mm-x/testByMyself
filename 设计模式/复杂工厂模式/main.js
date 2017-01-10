/**
 * Created by mengfanxu on 17/1/5.
 */
(function () {

    var BicycleShop=function () {};
    BicycleShop.prototype={
        constructor:BicycleShop,
        sellBicycle:function (model) {
            var bicycle=this.createBicycle(model);
            //A逻辑事件
            bicycle.A();
            //B逻辑事件
            bicycle.B();
            return bicycle;
        },
        createBicycle:function (model) {
            throw new Error('父类是抽象类不能直接调用，需要子类重写方法');
        }
    }


})();