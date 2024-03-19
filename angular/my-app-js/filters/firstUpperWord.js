var myAppModule = angular.module("myApp", ["ngRoute"]);
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
