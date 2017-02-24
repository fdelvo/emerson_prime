app
    .controller('EventsController', ["dateInThePastFilter", "$scope", "$routeParams", function (dateInThePastFilter, $scope, $routeParams) {
        $scope.name = 'EventsController';
        $scope.params = $routeParams;

        $scope.eventsTemp = [
            {Name: "Broncos", Date: new Date(2017, 9, 18), Location: "Hannover", Link: "n/a"},
            {Name: "Loca Hero Halbfinale (Musikzentrum)", Date: new Date(2017, 8, 23), Location: "Hannover", Link: "n/a"},
            {Name: "Bandnacht", Date: new Date(2017, 8, 22), Location: "Osnabrück", Link: "n/a"},
            {Name: "Holzhauser Kirmes", Date: new Date(2017, 8, 15), Location: "Holzhausen", Link: "n/a"},
            {Name: "Straßenparty", Date: new Date(2017, 8, 9), Location: "Rheine", Link: "n/a"},
            {Name: "Konzertmuschel", Date: new Date(2017, 6, 2), Location: "Heringsdorf", Link: "n/a"},
            {Name: "Strandpromenade", Date: new Date(2017, 6, 1), Location: "Zempin", Link: "n/a"},
            {Name: "Fête de la Musique", Date: new Date(2017, 5, 21), Location: "Hannover", Link: "n/a"},
            {Name: "Band Mash-Up (Kulturpalast)", Date: new Date(2017, 5, 20), Location: "Hannover", Link: "n/a"},
            {Name: "Helmerkämper Open Air", Date: new Date(2017, 5, 17), Location: "Helmerkamp", Link: "n/a"},
            {Name: "Lange Nacht der Museen (Kubus)", Date: new Date(2017, 5, 10), Location: "Hannover", Link: "n/a"},
            {Name: "Jazz Club", Date: new Date(2017, 4, 20), Location: "Nienburg (Weser)", Link: "n/a"},
            {Name: "Zauber von Os", Date: new Date(2017, 3, 25), Location: "Osnabrück", Link: "n/a"},
            {Name: "Club VEB", Date: new Date(2017, 3, 12), Location: "Hildesheim", Link: "n/a"},
            {Name: "Kulturcafé Lichtung", Date: new Date(2017, 3, 7), Location: "Köln", Link: "n/a"},
            {Name: "Wohnzimmer", Date: new Date(2017, 3, 6), Location: "Wiesbaden", Link: "n/a"},
            {Name: "Kaffee Burger", Date: new Date(2017, 3, 5), Location: "Berlin", Link: "n/a"},
            {Name: "Freundlich & Kompetent", Date: new Date(2017, 3, 1), Location: "Hamburg", Link: "n/a"}];
        $scope.events = dateInThePastFilter($scope.eventsTemp);
    }]);

