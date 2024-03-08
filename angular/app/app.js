var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/home.html",
      })
      .when("/directory", {
        templateUrl: "views/directory.html",
        controller: "Controller",
      })
      .otherwise({ redirectTo: "/home" });
  },
]); //prima dell'esecuzione

// myApp.run(function () {}); //dopo l'esecuzione
myApp.controller("Controller", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $http.get("app/data/apps.json").then(function (response) {
      $scope.apps = response.data;
    });

    $scope.removeApp = function (app) {
      var removeApp = $scope.apps.indexOf(app);
      $scope.apps.splice(removeApp, 1);
    };

    $scope.addApp = function () {
      $scope.apps.push({
        name: $scope.newApp.name,
        year: parseInt($scope.newApp.year),
        boss: $scope.newApp.boss,
      });
      $scope.newApp = "";
      console.log($scope.apps);
    };
  },
]);
