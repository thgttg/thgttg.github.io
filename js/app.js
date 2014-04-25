var tt = window.tt || {};
tt.app = angular.module('thgttg-app', ['ngResource', 'ngRoute', 'ngCookies', 'geolocation']);
//tt.apiUrl = 'https://api.github.com'
//tt.apiToken = 'xxx'
//tt.appRepo = 'thgttg/data'

tt.app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'homeController',
            templateUrl: 'home.html',
            activeRoute: 'home'
        })
        /*
        .when('/order/:initials', {
            controller: 'orderController',
            templateUrl: 'order.html',
            activeRoute: 'orders'
        })
        */
        .otherwise({ redirectTo: '/' });
});

/*
tt.app.run(function($http) {
  $http.defaults.headers.common.Authorization = 'token ' + tt.apiToken
});
*/
