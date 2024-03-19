var myAppModule = angular.module("myApp", ["ngRoute"]);
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
