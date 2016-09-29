'use strict';
angular.module('project_name', ['ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider
      .state('index', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller:'HomeCtrl'
      })

      $stateProvider
      .state('users', {
        url: '/users',
        templateUrl: 'views/users.html',
        controller:'UsersCtrl'
      });


      $urlRouterProvider.otherwise('/home');

  });
