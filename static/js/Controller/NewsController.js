 app.controller('NewsController', function($scope, $routeParams) {
     $scope.name = 'NewsController';
     $scope.params = $routeParams;

     $scope.ShowWholeArticle = function() {
         $scope.wholeArticle = !$scope.wholeArticle;
     };
 });/**
 * Created by fdelv on 12/7/2016.
 */
/**
 * Created by fdelv on 12/7/2016.
 */
