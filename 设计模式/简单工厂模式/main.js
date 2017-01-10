/**
 * Created by mengfanxu on 17/1/5.
 */
(function () {

    //简单工厂模式
    function Person(name,age) {
        var per=new Object();
        per.name=name;
        per.age=age;
        per.getName=function () {
            return this.name;
        };
        return per;
    }
    
    var person1=new Person('a',20);
    console.log(person1.getName());

})();