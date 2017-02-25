const app = angular.module("emersonAdminAngularApp", ["ngRoute", "ngAnimate"]);

app
    .controller("MainAdminController", function ($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    });

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "../static/js/pages/homeAdmin.html",
            controller: "AdminController"
        })
        .when("/admin/about", {
            templateUrl: "../static/js/pages/aboutAdmin.html",
            controller: "AdminController"
        })
        .when("/admin/photos", {
            templateUrl: "../static/js/pages/photosAdmin.html",
            controller: "AdminController"
        })
        .when("/admin/music", {
            templateUrl: "../static/js/pages/musicAdmin.html",
            controller: "AdminController"
        })
        .when("/admin/events", {
            templateUrl: "../static/js/pages/eventsAdmin.html",
            controller: "AdminController"
        })
        .when("/admin/contact", {
            templateUrl: "../static/js/pages/contactAdmin.html",
            controller: "AdminController"
        });

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });
});