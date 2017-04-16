'use strict';

angular.module('myApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app', {
        url:'/',
        views: {
          'content': {
            templateUrl: 'views/main.html'
          }
        }
      })

      .state ('app.form', {
        url:'form',
        views: {
          'content@': {
            templateUrl: 'views/form.html',
          }
        }
      })
    ;

    $urlRouterProvider.otherwise('/');
  }])
;