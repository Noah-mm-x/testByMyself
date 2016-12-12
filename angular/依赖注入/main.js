/**
 * Created by Administrator on 2016/12/12.
 */
(function () {

    var app = angular.module("app", []);
    app.value({"number1": 1, "number2": 1, "result": 2});
    app.config(function ($provide) {
        $provide.provider("addService", function () {
            this.$get = function () {
                var factory = {};
                factory.add = function (a, b) {
                    return a + b;
                };
                return factory;
            }
        });
    });
    app.factory("addService",function () {
        var factory = {};
        factory.add = function (a, b) {
            return a + b;
        };
        return factory;
    });
    app.service("calcService",function (addService) {
        this.addResult=function (num1,num2) {
            return addService.add(num1,num2);
        }
    });
    app.controller("ctrl1", function ($scope,calcService, number1, number2, result) {
        $scope.number1 = number1;
        $scope.number2 = number2;
        $scope.result = result;
        $scope.add =function () {
            $scope.result=calcService.addResult($scope.number1,$scope.number2);
        } 
    })


})();