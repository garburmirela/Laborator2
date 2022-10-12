var app = angular.module('myApp', []);


app.service('square', function () {
    this.squareFunction = function (x) {
        return x * x;
    }
});


app.controller('myCtrl', function ($scope, square) {
    $scope.getSquare = function (x) {
        $scope.result = square.squareFunction(x);
    }

    $scope.getProduct = function (a, b) {
        $scope.productResult = a * b;
    }
});
