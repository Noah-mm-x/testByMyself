/**
 * Created by Administrator on 2016/12/12.
 */
;(function () {

    var app = angular.module("app", []);
    app.controller("ctrl", function ($scope) {
        $scope.data = {};
        $scope.data.show = true;
        $scope.data.name = "meng"
    })

})();