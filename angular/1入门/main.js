/**
 * Created by Administrator on 2016/12/9.
 */
(function () {


    var app = angular.module("app", []);
    app.controller("ctrl", function ($scope) {
        $scope.name = "meng";
    });
    app.controller("ctrl1", function ($scope) {
        $scope.name = "meng1";
    });
    app.controller("ctrl2", function ($scope) {
        $scope.list = [
            {name: "a", age: 12},
            {name: "b", age: 11},
            {name: "c", age: 12}
        ]
    });
    app.controller("ctrl3", function ($scope, $location) {
        $scope.myUrl = $location.absUrl();
    });
    app.controller("ctrl4", function ($scope, $http) {
        $http.get("other.htm").then(function (response) {
            console.log(response);
            $scope.otherData = response.data;
        })
    });
    app.controller("ctrl5", function ($scope, $timeout) {
        $scope.say = "hello";
        $timeout(function () {
            $scope.say = "hi";
        }, 2000)
    });
    app.controller("ctrl6", function ($scope, $interval) {
        $scope.now = new Date().toLocaleDateString();
        $interval(function () {
            $scope.now = new Date().toLocaleDateString();
        }, 1000)
    });
    /*自定义服务*/
    app.service("addOne", function () {
        this.func = function (num) {
            return Object.prototype.toString.call(num).slice(8, -1) == "Number" ? num + 1 : num;
        }
    });
    app.controller("ctrl7", function ($scope, addOne) {
        $scope.num = addOne.func("dhfkiasdhf");
    });
    /*自定义过滤器*/
    app.filter("addOneFilter",["addOne",function (addOne) {
        return function (x) {
            return addOne.func(x);
        }
    }]);
    app.controller("ctrl8",function ($scope,$http) {
        $http.get("data.json").success(function (response) {
            console.log(response);
            $scope.names=response.students;
        })
    });
    app.controller("ctrl9",function ($scope) {
        $scope.names = ["a","b","c"];
    });
    app.directive("meng", function () {
        return {
            template: "<h1>meng</h1>"
        }
    })
})();