const app = angular.module("emersonAngularAdminApp", ["ngRoute", "ngAnimate"]);

app
    .controller("AdminMainController", function ($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    });

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "../static/js/Admin/Pages/home.html",
            controller: "AdminController"
        })
        .when("/home", {
            templateUrl: "../static/js/Admin/Pages/home.html",
            controller: "AdminController"
        })
        .when("/about", {
            templateUrl: "../static/js/Admin/Pages/about.html",
            controller: "AdminController"
        })
        .when("/photos", {
            templateUrl: "../static/js/Admin/Pages/photos.html",
            controller: "AdminController"
        })
        .when("/music", {
            templateUrl: "../static/js/Admin/Pages/music.html",
            controller: "AdminController"
        })
        .when("/events", {
            templateUrl: "../static/js/Admin/Pages/events.html",
            controller: "AdminController"
        })
        .when("/contact", {
            templateUrl: "../static/js/Admin/Pages/contact.html",
            controller: "AdminController"
        })
        .when("/news", {
            templateUrl: "../static/js/Admin/Pages/news.html",
            controller: "AdminController"
        });

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });
});
