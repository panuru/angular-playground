'use strict';

angular.module('angularPlaygroundApp')
  .controller('MainCtrl', function ($scope, $http) {
      $http.get('http://freshapp.freshintel.ru/api/menus').success(function(data) {
        $scope.menus = data;
      }).error(function(err) {
        alert(err);
      });
    // $scope.menus = [
    //     {
    //       id: 1,
    //       url: "top",
    //       title: "Верхнее меню",
    //       description: "Верхнее меню",
    //       ancestry: null
    //     },
    //     {
    //       id: 2,
    //       url: "home",
    //       title: "Главная",
    //       description: "",
    //       ancestry: "1"
    //     },
    //     {
    //       id: 3,
    //       url: "about",
    //       title: "О компании",
    //       description: "",
    //       ancestry: "1"
    //     },
    //     {
    //       id: 4,
    //       url: "portfolio",
    //       title: "Портфолио",
    //       description: "",
    //       ancestry: "1"
    //     },
    //     {
    //       id: 5,
    //       url: "blog",
    //       title: "Блог",
    //       description: "Список новостей",
    //       ancestry: "1"
    //     },
    //     {
    //       id: 6,
    //       url: "main",
    //       title: "Основное меню",
    //       description: "Основное меню",
    //       ancestry: null
    //     },
    //     {
    //       id: 7,
    //       url: "products",
    //       title: "Продукты",
    //       description: "",
    //       ancestry: "6"
    //     },
    //     {
    //       id: 8,
    //       url: "services",
    //       title: "Услуги",
    //       description: "",
    //       ancestry: "6"
    //     },
    //     {
    //       id: 9,
    //       url: "techreqs",
    //       title: "Тех.требования",
    //       description: "",
    //       ancestry: "6"
    //     },
    //     {
    //       id: 10,
    //       url: "pricelist",
    //       title: "Прайс",
    //       description: "",
    //       ancestry: "6"
    //     },
    //     {
    //       id: 11,
    //       url: "contacts",
    //       title: "Контакты",
    //       description: "",
    //       ancestry: "6"
    //     },
    //     {
    //       id: 12,
    //       url: "products/shtendery",
    //       title: "Штендеры (стритлайны)",
    //       description: "",
    //       ancestry: "6/7"
    //     }
    //   ];
  });
