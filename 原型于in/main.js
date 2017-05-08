/**
 * Created by Administrator on 2016/12/4.
 */
(function () {

    function Person() {
    }

    var p = Person.prototype;
    p.name = "晨落梦公子";
    p.age = 24;
    var person1 = new Person();
    // console.log(person1.hasOwnProperty("name"));
    // console.log("name" in person1);
    //
    // person1.name = "meng";
    // console.log(person1.hasOwnProperty("name")); //true

    Object.prototype.hasPrototypeProperty=function ( pro) {
        return !this.hasOwnProperty(pro) && (pro in this);
    };
    console.log(person1.hasPrototypeProperty("name")); //true

    person1.name = "晨落梦公子";
    console.log(person1.hasPrototypeProperty("name")); //false

})();