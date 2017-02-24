app
    .controller('PhotosController', ["$scope", "$routeParams", function ($scope, $routeParams) {
        $scope.name = 'PhotosController';
        $scope.params = $routeParams;

        $scope.photos = [
            "13435576_1079820508756669_6908563851934078137_n.jpg",
            "DSC_0896.jpg",
            "DSC_0990-schnellbearbeitet.jpg",
            "Emerson Prime - Live 1 .jpg",
            "emerson-prime-bei-lindenlegendz-atglocksee-6651.jpg",
            "Publikumspreis_Emerson-Prime.jpg",
            "rock-in-der-region-finale2016_201612041054_full.jpg"
        ];

        $scope.showImage = function (img) {
            $scope.fullImage = true;
            $scope.img = img;
        }

        $scope.hideImage = function () {
            $scope.fullImage = false;
        }
    }]);


