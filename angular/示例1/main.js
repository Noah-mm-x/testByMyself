/**
 * Created by Administrator on 2016/12/12.
 */
(function () {

    var app = angular.module("questions", []);
    var inputs=document.getElementsByTagName("input");
    var questions;

    app.controller("ctrl", function ($scope, $http) {
        
        // $scope.isCorrectAnswer=function () {
        //     for (var i = 0; i < inputs.length; i++) {
        //         if (inputs[i].checked){
        //             console.log(inputs[i].value);
        //         }
        //     }
        // };
        
        
        $http.get("data.json").success(function (response) {
            $scope.questions=response.questions;
            console.log($scope.questions);
        })
    });
})();