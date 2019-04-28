angular.module('myapp', [])
    .controller('MainController', ['$scope', function($scope) {
        $scope.users = [
            {"name":"taguchi", "score":52.22},
            {"name":"tanaka", "score":38.22},
            {"name":"yamada", "score":11.11},
            {"name":"tatata", "score":62.22},
            {"name":"nanana", "score":38.72},
            {"name":"yamamana", "score":11.18},
            {"name":"tagerdi", "score":52.24},
            {"name":"bhadfg", "score":38.32},
            {"name":"aeaeaer", "score":15.14}
        ];
        $scope.today = new Date();
            $scope.addUser = function() {
        }
    }])
    .controller('UserItemController', ['$scope', function($scope) {
        $scope.increment = function() {
          $scope.user.score++;
        };
    }]);