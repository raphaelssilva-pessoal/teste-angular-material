angular.module("gaiaApp").config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/dashboard/template1.html',
    controller: 'dashboardCtrl'
    
  })
   .when('/dashboard/template1', {
    templateUrl: 'views/dashboard/template1.html',
    controller: 'dashboardCtrl'
    
  })
  .when('/dashboard/template2', {
    templateUrl: 'views/dashboard/template2.html',
    controller: 'dashboardCtrl'
  }).otherwise({ redirectTo: '/' });;
});