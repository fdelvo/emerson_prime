app
    .controller("EventsController", ["dateInThePastFilter", "$scope", "$routeParams", function (dateInThePastFilter, $scope, $routeParams) {
        $scope.name = "EventsController";
        $scope.params = $routeParams;

        $scope.RandomiseBackgroundEvent = function () {
            var randomNumber = Math.floor(Math.random() * (4 - 0 + 1)) + 0;

            switch (randomNumber) {
                case 0:
                    $scope.navBgColorEventPink = true;
                    $scope.navBgColorEventBlue = false;
                    $scope.navBgColorEventPurple = false;
                    $scope.navBgColorEventRed = false;
                    break;
                case 1:
                    $scope.navBgColorEventPink = false;
                    $scope.navBgColorEventBlue = true;
                    $scope.navBgColorEventPurple = false;
                    $scope.navBgColorEventRed = false;
                    break;
                case 2:
                    $scope.navBgColorEventPink = false;
                    $scope.navBgColorEventBlue = false;
                    $scope.navBgColorEventPurple = true;
                    $scope.navBgColorEventRed = false;
                    break;
                default:
                    $scope.navBgColorEventPink = false;
                    $scope.navBgColorEventBlue = false;
                    $scope.navBgColorEventPurple = false;
                    $scope.navBgColorEventRed = true;
                    break;
            }

        };

        $scope.eventsTemp = [
            {Location: "Broncos", Date: new Date(2017, 9, 18), City: "Hannover", Link: "n/a"},
            {
                Location: "Loca Hero Halbfinale (Musikzentrum)",
                Date: new Date(2017, 8, 23),
                City: "Hannover",
                Link: "n/a"
            },
            {Location: "Bandnacht", Date: new Date(2017, 8, 22), City: "Osnabrück", Link: "n/a"},
            {Location: "Holzhauser Kirmes", Date: new Date(2017, 8, 15), City: "Holzhausen", Link: "n/a"},
            {Location: "Straßenparty", Date: new Date(2017, 8, 9), City: "Rheine", Link: "n/a"},
            {Location: "Konzertmuschel", Date: new Date(2017, 6, 2), City: "Heringsdorf", Link: "n/a"},
            {Location: "Strandpromenade", Date: new Date(2017, 6, 1), City: "Zempin", Link: "n/a"},
            {Location: "Fête de la Musique", Date: new Date(2017, 5, 21), City: "Hannover", Link: "n/a"},
            {Location: "Band Mash-Up (Kulturpalast)", Date: new Date(2017, 5, 20), City: "Hannover", Link: "n/a"},
            {Location: "Helmerkämper Open Air", Date: new Date(2017, 5, 17), City: "Helmerkamp", Link: "n/a"},
            {Location: "Lange Nacht der Museen (Kubus)", Date: new Date(2017, 5, 10), City: "Hannover", Link: "n/a"},
            {Location: "Jazz Club", Date: new Date(2017, 4, 20), City: "Nienburg (Weser)", Link: "n/a"},
            {Location: "Zauber von Os", Date: new Date(2017, 3, 25), City: "Osnabrück", Link: "n/a"},
            {Location: "Club VEB", Date: new Date(2017, 3, 12), City: "Hildesheim", Link: "n/a"},
            {Location: "Kulturcafé Lichtung", Date: new Date(2017, 3, 7), City: "Köln", Link: "n/a"},
            {Location: "Wohnzimmer", Date: new Date(2017, 3, 6), City: "Wiesbaden", Link: "n/a"},
            {Location: "Kaffee Burger", Date: new Date(2017, 3, 5), City: "Berlin", Link: "n/a"},
            {Location: "Freundlich & Kompetent", Date: new Date(2017, 3, 1), City: "Hamburg", Link: "n/a"}];
        $scope.events = dateInThePastFilter($scope.eventsTemp);
    }]);

