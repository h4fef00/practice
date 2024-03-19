var myAppModule = angular.module("myApp", ["ngRoute"]);

myAppModule.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/home-component/home.html",
        controller: "homeController",
      })
      .when("/clothing", {
        templateUrl: "views/clothing-component/clothing.html",
        controller: "clothingController",
      })
      .when("/electronics", {
        templateUrl: "views/electronics-component/electronics.html",
        controller: "electronicsController",
      })
      .when("/login", {
        templateUrl: "views/login-component/login.component.html",
        controller: "userController",
      })
      .when("/signin", {
        templateUrl: "views/signin-component/signin.component.html",
        controller: "userController",
      })

      .when("/cart", {
        templateUrl: "views/cart-component/cart.component.html",
        controller: "cartController",
        resolve: {
          auth: [
            "$location",
            "authService",
            function ($location, authService) {
              return authService.isAuthenticated().then(
                function (success) {
                  console.log(success);
                  $location.path("/home");
                },
                function (error) {
                  $location.path("/login");
                  console.log(error);
                  $location.replace();
                }
              );
            },
          ],
        },
      })
      .when("/:idProd", {
        templateUrl: "views/product-component/product.html",
        controller: "productController",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);

myAppModule.filter("firstUpperWord", [
  function () {
    return function (input) {
      return !!input
        ? input
            .split(" ")
            .map(function (wrd) {
              return wrd.charAt(0).toUpperCase() + wrd.substr(1).toLowerCase();
            })
            .join(" ")
        : "";
    };
  },
]);

myAppModule.factory("productService", [
  "$http",
  function ($http) {
    let service = {};
    service.getProducts = () => {
      return $http.get("https://fakestoreapi.com/products");
    };

    service.getProduct = (productId) =>
      $http.get("https://fakestoreapi.com/products/" + productId);

    return service;
  },
]);

myAppModule.factory("localStorageService", [
  "$window",
  function ($window) {
    let service = {};
    service.getLocal = (key) => {
      return $window.localStorage.getItem(key);
    };

    service.setLocal = (key, value) => {
      $window.localStorage.setItem(key, JSON.stringify(value));
    };
    return service;
  },
]);

myAppModule.factory("sessionStorageService", [
  "$window",
  function ($window) {
    let service = {};
    service.getSession = (key) => {
      return $window.sessionStorage.getItem(key);
    };

    service.setSession = (key, value) => {
      $window.sessionStorage.setItem(key, JSON.stringify(value));
    };
    return service;
  },
]);

myAppModule.factory("authService", [
  function () {
    var isAuth = false;
    return {
      isAuthenticated: function () {
        return isAuth;
      },

      setAuth: function (status) {
        isAuth = status;
      },
    };
  },
]);

myAppModule.controller("homeController", [
  "$scope",
  "productService",
  "$window",

  function ($scope, productService, $window) {
    try {
      $scope.getProducts = () => {
        productService.getProducts().then(function (response) {
          $scope.products = response.data;
        });
      };
      $scope.getProducts();
    } catch (err) {
      console.log(err);
    }
  },
]);

myAppModule.controller("productController", [
  "$scope",
  "$routeParams",
  "productService",
  function ($scope, $routeParams, productService) {
    let productId = $routeParams.idProd;
    try {
      $scope.getProduct = () => {
        productService.getProduct(productId).then(function (response) {
          $scope.product = response.data;
        });
      };
      $scope.getProduct();
    } catch (err) {
      console.log(err);
    }
  },
]);

myAppModule.controller("clothingController", [
  "$scope",
  "productService",
  function ($scope, productService) {
    try {
      $scope.getProducts = () => {
        productService.getProducts().then(function (response) {
          const productsAsArray = Object.entries(response.data);
          const productsFiltered = productsAsArray.filter(
            ([key, value]) =>
              value.category === "men's clothing" ||
              value.category === "women's clothing"
          );
          const productsFilteredObj = Object.fromEntries(productsFiltered);

          $scope.products = productsFilteredObj;
        });
      };
      $scope.getProducts();
    } catch (err) {
      console.log(err);
    }
  },
]);

myAppModule.controller("electronicsController", [
  "$scope",
  "productService",
  function ($scope, productService) {
    try {
      $scope.getProducts = () => {
        productService.getProducts().then(function (response) {
          const productsAsArray = Object.entries(response.data);
          const productsFiltered = productsAsArray.filter(
            ([key, value]) => value.category === "electronics"
          );
          const productsFilteredObj = Object.fromEntries(productsFiltered);
          $scope.products = productsFilteredObj;
          console.log($scope.products);
        });
      };
      $scope.getProducts();
    } catch (err) {
      console.log(err);
    }
  },
]);

myAppModule.controller("userController", [
  "$scope",
  "$location",
  "localStorageService",
  "sessionStorageService",
  "authService",
  function (
    $scope,
    $location,
    localStorageService,
    sessionStorageService,
    authService
  ) {
    $scope.users = [];
    $scope.isLogged = false;
    let usersString = localStorageService.getLocal("users");
    let usersObj = JSON.parse(usersString) || [];
    $scope.signin = () => {
      let emailExists = usersObj.some(
        (user) => user.email === $scope.user.email
      );
      console.log(emailExists);
      if (emailExists) {
        return ($scope.error = "Email esistente, accedi");
      }

      $scope.users.push($scope.user);
      usersObj.push($scope.user);
      localStorageService.setLocal("users", usersObj);
      $scope.user = {};
    };

    $scope.login = () => {
      let emailExists = usersObj.some(
        (user) =>
          user.email === $scope.user.email &&
          user.password === $scope.user.password
      );
      if (emailExists) {
        authService.setAuth(true);
        sessionStorageService.setSession("user", $scope.user);
        if ($scope.isLogged) {
          // $location.path("/home");
          console.log("ok");
        }
      } else {
        $scope.error = `Nessun utente esistente con email ${$scope.user.email}. Registrati.`;
      }
    };
  },
]);
