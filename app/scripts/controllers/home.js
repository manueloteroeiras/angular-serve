'use strict';
angular.module('project_name')
	.controller('HomeCtrl', function ($scope, $location) {
        $scope.msg = 'Hello World';

        $scope.changeMsg = function () {
            $scope.msg = 'Message Changed';
        }
});