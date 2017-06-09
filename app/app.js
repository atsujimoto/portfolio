var app = angular.module('Portfolio', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/views/home.html'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/views/projectList.html',
        controller: 'ProjectListCtrl'
      })
      .state('projectShow', {
        url: '/project/:id',
        templateUrl: 'app/views/projects.html',
        controller: 'ProjectShowCtrl'
      });
  }
]);

app.controller('ProjectListCtrl', ['$scope', 'Projects', function($scope, Projects) {
  $scope.projects = Projects;
}]);

app.controller('ProjectShowCtrl', ['$scope', 'Projects', '$stateParams',
  function($scope, Projects, $stateParams) {
  $scope.project = Projects[$stateParams.id];
}])


app.factory('Projects', function() {
  return {
    '1': {
      title: 'Cat Fight!',
      cover: '/img/cat-fight.png',
      github: 'https://github.com/jigglor/u1-project-game',
      img: ['/img/cat-fight1.png',
            '/img/cat-fight2.png'],
      desc: 'A JavaScript, Pokemon-style battle game.  2 players pick 2 cats each and battle to the death!',
      longDesc: 'This was this very first website I ever designed on my own.  I played Pokemon a lot as a kid and I had a ton of fun trying to code a battle system that was reminiscent of those games.  It\'s certainly not as robust or polished, but I hope you have fun playing it nonetheless.',
      link: 'https://jigglor.github.io/u1-project-game/'
    },
    '2': {
      title: 'Brewzaar',
      cover: '/img/brewzaar.png',
      github: 'https://github.com/jigglor/brewzaar',
      img: ['/img/brewzaar1.png',
            '/img/brewzaar2.png'],
      desc: 'A web app designed to help people trade the beer they have for the beer they want.',
      longDesc: 'Having worked in the beer industry for a couple years, I\'ve been fairly blessed when it comes to getting my hands on rare or out-of-state beers.  Not everyone can be so lucky, however, so I wanted to design a website that would connect beer enthusiasts and make it easy for them to track down the beers they desire most.',
      link: 'https://brewzaar.herokuapp.com/home'
    },
    '3': {
      title: 'Dogglegänger',
      cover: '/img/doggleganger.png',
      github: 'https://github.com/jigglor/project-3',
      img: ['/img/doggleganger1.png',
            '/img/doggleganger2.png',
            '/img/doggleganger3.png',
            '/img/doggleganger4.png'],
      desc: 'Ready to adopt a pet?  Search for a pet and then compare your face with the animals to see how good of a match you are.',
      longDesc: 'I love animals and it upsets me to hear about so many going unadopted.  Designing a web app that encourages people to rescue animals from shelters was both fun and rewarding.  Search for a pet you might like to adopt and then compare their photo to a photo of yourself.  Find your doggleganger today!',
      link: 'http://doggleganger.herokuapp.com/'
    }
    // '4': {
    //     title: 'Project 4',
    //     cover: '/img/folder.png',
    //     github: '#!',
    //     img: [],
    //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur adipisci officia beatae.',
    // longDesc: '',
    //     link: '#!'
    // },
    // '5': {
    //     title: 'Project 5',
    //     cover: '/img/folder.png',
    //     github: '#!',
    //     img: [],
    //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur adipisci officia beatae.',
    // longDesc: '',
    //     link: '#!'
    // },
    // '6': {
    //     title: 'Project 6',
    //     cover: '/img/folder.png',
    //     github: '#!',
    //     img: [],
    //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur adipisci officia beatae.',
    // longDesc: '',
    //     link: '#!'
    // }
  };
});
