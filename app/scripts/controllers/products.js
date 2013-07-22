'use strict';

angular.module('angularPlaygroundApp')
  .controller('ProductsCtrl', function ($scope) {
    $scope.products = [
      {
        id: 1,
        slug: "sht1",
        title: "Штендер"
      },
      {
        id: 2,
        slug: "shmender",
        title: "Шмендер"
      }
    ];
  });
