var app = angular.module('Portfolio', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/views/home.html'
            })
            .state('projects', {
                url: '/projects',
                templateUrl: 'app/views/projectList.html',
                controller: 'ProjectListCtrl'
            });
    }
]);

app.controller('ProjectListCtrl', ['$scope', 'Projects', function($scope, Projects) {
    $scope.projects = Projects;
}]);

app.factory('Projects', function() {
    return {
        '1': {
            title: 'Cat Fight!',
            cover: '/img/folder.png',
            github: '#!',
            img: [],
            desc: 'A Pokemon-style battle game designed in javascipt.',
            link: {
                title: 'Live Site',
                url: '#!'
            }
        },
        '2': {
            title: 'Brewzaar',
            cover: '/img/folder.png',
            github: '#!',
            img: [],
            desc: 'A web app designed to help people trade the beer they have for the beer they want.',
            link: {
                title: 'Live Site',
                url: '#!'
            }
        },
        '3': {
            title: 'Project 3',
            cover: '/img/folder.png',
            github: '#!',
            img: [],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur adipisci officia beatae.',
            link: {
                title: 'Live Site',
                url: '#!'
            }
        },
        '4': {
            title: 'Project 4',
            cover: '/img/folder.png',
            github: '#!',
            img: [],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur adipisci officia beatae.',
            link: {
                title: 'Live Site',
                url: '#!'
            }
        },
        '5': {
            title: 'Project 5',
            cover: '/img/folder.png',
            github: '#!',
            img: [],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur adipisci officia beatae.',
            link: {
                title: 'Live Site',
                url: '#!'
            }
        },
        '6': {
            title: 'Project 6',
            cover: '/img/folder.png',
            github: '#!',
            img: [],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur adipisci officia beatae.',
            link: {
                title: 'Live Site',
                url: '#!'
            }
        }
    };
});
