var myAppModule = angular.module("myApp", ["ngRoute"]);
myAppModule.factory("productService", [
  "$http",
  "$window",
  function ($http, $window) {
    let service = {};
    service.getProducts = () => {
      return $http.get("https://fakestoreapi.com/products");
    };

    service.getProduct = (productId) =>
      $http.get("https://fakestoreapi.com/products/" + productId);

    return service;
  },
]);
