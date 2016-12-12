/**
 * Created by Administrator on 2016/12/11.
 */
(function () {

    function deepClone(oldObj,newObj) {
        var newObj = newObj || {};
        for (var i in oldObj) {
            if (typeof oldObj[i] == "object") {
                newObj[i]=(oldObj[i].constructor==Array)?[]:{};
                arguments.callee(oldObj[i],newObj[i]);
            }else {
                newObj[i]=oldObj[i];
            }
        }
        return newObj;
    }

    var user={
        name:"晨落梦公子",
        tag:["html","css","js"]
    };

    var meng=deepClone(user);
    console.log(meng.tag);
    meng.tag.push("java");
    console.log(meng.tag);
    var xu=deepClone(user);
    console.log(xu.tag);
})();