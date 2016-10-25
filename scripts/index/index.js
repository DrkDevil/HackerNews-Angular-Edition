'use strict';
angular.module('baseApp.index', [
  'ngRoute',
  'index.controllers',
  'index.directives'
])
.run(['$rootScope', '$route', '$location', '$anchorScroll', function($rootScope, $route, $location, $anchorScroll) {
  $rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) {
    if (oldVal !== newVal) {
      document.title = $route.current.title;
      // AnchrScroll to the top of the page on route change
      //$location.hash('top');
      //$anchorScroll();
    }
  });
}])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', { 
      title: 'Hacker News', 
      templateUrl: 'main.html', 
      controller: 'IndexCtrl' 
    })
    .when('/welcome', { 
      title: 'Hacker News - Welcome', 
      templateUrl: 'welcome.html', 
      controller: 'IndexCtrl' 
    })
    .when('/new', { 
      title: 'Hacker News - New Articles', 
      templateUrl: 'new.html', 
      controller: 'IndexCtrl' 
    })
	.when('/threads', { 
      title: 'Hacker News - Threads', 
      templateUrl: 'threads.html', 
      controller: 'IndexCtrl' 
    })
	.when('/comments', { 
      title: 'Hacker News - Comments', 
      templateUrl: 'comments.html', 
      controller: 'IndexCtrl' 
    })
	.when('/ask', { 
      title: 'Hacker News - Ask', 
      templateUrl: 'ask.html', 
      controller: 'IndexCtrl' 
    })
	.when('/jobs', { 
      title: 'Hacker News - Jobs', 
      templateUrl: 'jobs.html', 
      controller: 'IndexCtrl' 
    })
	.when('/soon', { 
      title: 'Under Construction', 
      templateUrl: 'soon.html', 
      controller: 'IndexCtrl' 
    })
    .otherwise({ redirectTo: '/' });

  //$locationProvider.html5Mode(true);
}]);
 $("#left-toggle").click(function(e) {
     e.preventDefault();
     $("#pageWrapper").toggleClass("left-toggled");
 });
 $("#right-toggle").click(function(e) {
     e.preventDefault();
     $("#pageWrapper").toggleClass("right-toggled");
 });