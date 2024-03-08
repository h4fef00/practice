let ngApp = angular.module("ngApp", ["ngRoute"]);
ngApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/home.html",
        controller: "homeController",
      })
      .otherwise({
        redirectTo: "/",
      });
  },
]);

ngApp.controller(
  "homeController",
  [
    "LoginService",
    function (LoginService) {
      var self = this;
      self.onLogin = function () {
        if(LoginService.login(self.email, self.password){
          
        })
      };
    },
  ].factory("LoginService", [
    function () {
      var username = "";
      var password = "";
      var isLogged = false;
      return {
        login: function (user, psw) {
          isLogged = user == username && psw == password;
          return isLogged;
        },
      };
    },
  ])
);
