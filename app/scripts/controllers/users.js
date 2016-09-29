'use strict';
angular.module('project_name')
	.controller('UsersCtrl', function ($scope, $location) {
        $scope.msg = 'Hello World';

       $scope.users = [
       		{ name: 'Manuel', lastname: 'Otero', phone: '47568922' },
       		{ name: 'Mario', lastname: 'Perez', phone: '453069' }
       ];


       $scope.addUser = function (user) {
       	$scope.users.push(user);
       	//Limpio el formulario
       	$scope.user = {};
       }
});