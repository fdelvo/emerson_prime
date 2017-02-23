/**
 * Created by fdelv on 12/7/2016.
 */
const app = angular.module('emersonAngularApp', ['ngRoute', 'ngAnimate']);

app
    .filter('dateInThePast', function () {
        return function (input) {
            var out = [];
            for (var o in input) {
                if (input[o].Date >= Date.now()) {
                    out.push(input[o]);
                }
            }
            return out;
        };
    })
    .controller('MainController', function ($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;

        $scope.RandomiseBackground = function () {
            var randomNumber = Math.floor(Math.random() * (4 - 0 + 1)) + 0;

            switch (randomNumber) {
                case 0:
                    $scope.navBgColorPink = true;
                    $scope.navBgColorBlue = false;
                    $scope.navBgColorPurple = false;
                    $scope.navBgColorRed = false;
                    break;
                case 1:
                    $scope.navBgColorPink = false;
                    $scope.navBgColorBlue = true;
                    $scope.navBgColorPurple = false;
                    $scope.navBgColorRed = false;
                    break;
                case 2:
                    $scope.navBgColorPink = false;
                    $scope.navBgColorBlue = false;
                    $scope.navBgColorPurple = true;
                    $scope.navBgColorRed = false;
                    break;
                default:
                    $scope.navBgColorPink = false;
                    $scope.navBgColorBlue = false;
                    $scope.navBgColorPurple = false;
                    $scope.navBgColorRed = true;
                    break;
            }

        }
    });

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../static/js/pages/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: '../static/js/pages/about.html',
            controller: 'AboutController'
        })
        .when('/photos', {
            templateUrl: '../static/js/pages/photos.html',
            controller: 'PhotosController'
        })
        .when('/music', {
            templateUrl: '../static/js/pages/music.html',
            controller: 'MusicController'
        })
        .when('/events', {
            templateUrl: '../static/js/pages/events.html',
            controller: 'EventsController'
        })
        .when('/contact', {
            templateUrl: '../static/js/pages/contact.html',
            controller: 'ContactController'
        });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });
});