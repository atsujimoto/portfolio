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
            cover: '/img/cat-fight.png',
            github: 'https://github.com/jigglor/u1-project-game',
            img: [],
            desc: 'A JavaScript, Pokemon-style battle game.  2 players pick 2 cats each and battle to the death!',
            link: {
                title: 'Live Site',
                url: 'https://jigglor.github.io/u1-project-game/'
            }
        },
        '2': {
            title: 'Brewzaar',
            cover: '/img/brewzaar.png',
            github: 'https://github.com/jigglor/brewzaar',
            img: [],
            desc: 'A web app designed to help people trade the beer they have for the beer they want.',
            link: {
                title: 'Live Site',
                url: 'https://brewzaar.herokuapp.com/home'
            }
        },
        '3': {
            title: 'Dogglegänger',
            cover: '/img/doggleganger.png',
            github: 'https://github.com/jigglor/project-3',
            img: [],
            desc: 'Ready to adopt a pet?  Search for a pet and then compare your face with the animals to see how good of a match you are.',
            link: {
                title: 'Live Site',
                url: 'http://doggleganger.herokuapp.com/'
            }
        }
        // '4': {
        //     title: 'Project 4',
        //     cover: '/img/folder.png',
        //     github: '#!',
        //     img: [],
        //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur adipisci officia beatae.',
        //     link: {
        //         title: 'Live Site',
        //         url: '#!'
        //     }
        // },
        // '5': {
        //     title: 'Project 5',
        //     cover: '/img/folder.png',
        //     github: '#!',
        //     img: [],
        //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur adipisci officia beatae.',
        //     link: {
        //         title: 'Live Site',
        //         url: '#!'
        //     }
        // },
        // '6': {
        //     title: 'Project 6',
        //     cover: '/img/folder.png',
        //     github: '#!',
        //     img: [],
        //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur adipisci officia beatae.',
        //     link: {
        //         title: 'Live Site',
        //         url: '#!'
        //     }
        // }
    };
});
