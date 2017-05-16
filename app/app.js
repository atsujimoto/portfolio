var app = angular.module('Portfolio', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/views/home.html'
            });

        $locationProvider.html5Mode(true);
    }
]);
