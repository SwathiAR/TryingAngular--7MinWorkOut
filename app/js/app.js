'use strict';

angular.module("app" , ['7MinWorkout' , 'ngRoute' ]).config(function ($routeProvider , $sceDelegateProvider) {
    $routeProvider.when('/start' , {
        templateUrl: 'partials/start.html'
    });

    $routeProvider.when('/finish' , {
        templateUrl: 'partials/finish.html'
    });

    $routeProvider.when('/workout' , {
        templateUrl: 'partials/workout.html' ,
        controller: 'workoutCtrl'
    });

    $routeProvider.otherwise({
        redirectTo: '/start'
    });

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        '*://www.youtube.com/**']);

});


angular.module("7MinWorkout" , []);

// In the AngularJS world, any configurations
// required before the app becomes usable are defined using the module API's config method

