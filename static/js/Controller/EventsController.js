app
    .controller('EventsController', ["dateInThePastFilter", "$scope", "$routeParams", function (dateInThePastFilter, $scope, $routeParams) {
        $scope.name = 'EventsController';
        $scope.params = $routeParams;

        $scope.eventsTemp = [
            {Name: "Broncos", Date: new Date(2017, 9, 18), Location: "Hannover"},
            {Name: "Loca Hero Halbfinale (Musikzentrum)", Date: new Date(2017, 8, 23), Location: "Hannover"},
            {Name: "Bandnacht", Date: new Date(2017, 8, 22), Location: "Osnabrück"},
            {Name: "Holzhauser Kirmes", Date: new Date(2017, 8, 15), Location: "Holzhausen"},
            {Name: "Straßenparty", Date: new Date(2017, 8, 9), Location: "Rheine"},
            {Name: "Konzertmuschel", Date: new Date(2017, 6, 2), Location: "Heringsdorf"},
            {Name: "Strandpromenade", Date: new Date(2017, 6, 1), Location: "Zempin"},
            {Name: "Fête de la Musique", Date: new Date(2017, 5, 21), Location: "Hannover"},
            {Name: "Band Mash-Up (Kulturpalast)", Date: new Date(2017, 5, 20), Location: "Hannover"},
            {Name: "Helmerkämper Open Air", Date: new Date(2017, 5, 17), Location: "Helmerkamp"},
            {Name: "Lange Nacht der Museen (Kubus)", Date: new Date(2017, 5, 10), Location: "Hannover"},
            {Name: "Jazz Club", Date: new Date(2017, 4, 20), Location: "Nienburg (Weser)"},
            {Name: "Zauber von Os", Date: new Date(2017, 3, 25), Location: "Osnabrück"},
            {Name: "Club VEB", Date: new Date(2017, 3, 12), Location: "Hildesheim"},
            {Name: "Kulturcafé Lichtung", Date: new Date(2017, 3, 7), Location: "Köln"},
            {Name: "Wohnzimmer", Date: new Date(2017, 3, 6), Location: "Wiesbaden"},
            {Name: "Kaffee Burger", Date: new Date(2017, 3, 5), Location: "Berlin"},
            {Name: "Freundlich & Kompetent", Date: new Date(2017, 3, 1), Location: "Hamburg"}];
        $scope.events = dateInThePastFilter($scope.eventsTemp);
    }]);

