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
    // '1': {
    //   title: 'Cat Fight!',
    //   cover: '/img/cat-fight.png',
    //   github: 'https://github.com/jigglor/u1-project-game',
    //   img: ['/img/cat-fight1.png',
    //         '/img/cat-fight2.png'],
    //   desc: 'A JavaScript, Pokemon-style battle game.  2 players pick 2 cats each and battle to the death!',
    //   longDesc: 'This was this very first website I ever designed on my own.  I played Pokemon a lot as a kid and I had a ton of fun trying to code a battle system that was reminiscent of those games.  It\'s certainly not as robust or polished, but I hope you have fun playing it nonetheless.',
    // tech: [],
    //   link: 'https://jigglor.github.io/u1-project-game/'
    // },
    '2': {
      title: 'Brewzaar',
      cover: '/img/brewzaar.png',
      github: 'https://github.com/jigglor/brewzaar',
      img: ['/img/brewzaar1.png',
            '/img/brewzaar2.png'],
      desc: 'A web app designed to help people trade the beer they have for the beer they want.',
      longDesc: 'Having worked in the beer industry for a couple years, I\'ve been fairly blessed when it comes to getting my hands on rare or out-of-state beers.  Not everyone can be so lucky, however, so I wanted to design a website that would connect beer enthusiasts and make it easy for them to track down the beers they desire most.',
      tech: ['BreweryDB API',
             'HTML/EJS Layouts',
             'CSS/Materialize',
             'JavaScript/jQuery',
             'Node.js/Express',
             'MongoDB/Mongoose'],
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
      longDesc: 'I love animals and it upsets me to hear about so many going unadopted.  Designing a web app that encourages people to rescue animals from shelters was both fun and rewarding.  I worked on this project with 2 other developers and was mainly responsible for building our backend, utilizing the Petfinder API.  I also built our Profile page and coded the media queries for the entire app.',
      tech: ['Petfinder API',
             'GraphicsMagick Node Module',
             'HTML',
             'CSS',
             'JavaScript',
             'Angular',
             'Node.js/Express',
             'MongoDB/Mongoose'],
      link: 'http://doggleganger.herokuapp.com/'
    },
    '4': {
      title: 'Chronotron',
      cover: '/img/chronotron.png',
      github: 'https://github.com/jigglor/Chronotron',
      img: ['/img/chronotron1.png',
            '/img/chronotron2.png',
            '/img/chronotron3.png',
            '/img/chronotron4.png'],
      desc: 'Have some free time?  Chronotron can help you waste it.  Give it a length of time you\'d like to waste and choose a category.  Chronotron will provide you with content to fill that void.',
      longDesc: 'Chronotron utilizes 5 different APIs:  Youtube, Spotify, OpenTrivia, Trails and OpenWeather.  I worked on this in with a group of 4 other developers and 1 UX/UI consultant.  I was responsible for utilizing the OpenTrivia API to create a trivia game we could use within the app.  I built the backend in Ruby on Rails and used JavaScript and jQuery to create the trivia game.',
      tech: ['Youtube, Spotify, Trails, OpenTrivia, and OpenWeather APIs',
             'HTML',
             'CSS',
             'JavaScript/jQuery',
             'Ruby on Rails'],
      link: 'https://chronotron.herokuapp.com/'
    }
    // '5': {
    //     title: 'Project 5',
    //     cover: '/img/folder.png',
    //     github: '#!',
    //     img: [],
    //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur adipisci officia beatae.',
    // longDesc: '',
    // tech: [],
    //     link: '#!'
    // },
    // '6': {
    //     title: 'Project 6',
    //     cover: '/img/folder.png',
    //     github: '#!',
    //     img: [],
    //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur adipisci officia beatae.',
    // longDesc: '',
    // tech: [],
    //     link: '#!'
    // }
  };
});
