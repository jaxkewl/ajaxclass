(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
  function NarrowItDownController($scope, MenuSearchService) {
    this.searchTerm = "";
    this.found = [];

    this.narrowItDown = function () {
      var filteredMenuItemsPromise = MenuSearchService.getMatchedMenuItems(this.searchTerm)
      filteredMenuItemsPromise.then(function(result) {
        $scope.Narrow.found = result
      })
      .catch(function(error) {
        console.log(error)
      })
    }

    this.removeItem = function (indexOfItem) {
      this.found.splice(indexOfItem, 1)
    }
  } //controller

  MenuSearchService.$inject = ['$q', '$http']
  function MenuSearchService($q, $http) {

    this.getMatchedMenuItems = function (searchTerm) {

      var allMenuItemsPromise = this.getAllMenuItems();
      return allMenuItemsPromise.then(
        function (allMenuItemData) {

          var menuItems = allMenuItemData.data.menu_items;
          var foundItems = [];

          for (var i = 0; i < menuItems.length; i++) {
            if (menuItems[i].description.match(searchTerm)) {
              foundItems.push(menuItems[i]);
            }
          }

          return foundItems;
        })
        .catch(function (error) {
          console.log(error);
        });

      }

    this.getAllMenuItems = function (shortName) {
      var response = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
      });

      return response;
    };
  } //menu search service

  function FoundItemsDirective() {
    var fidDo = {
      templateUrl: 'itemsFound.html',
      scope: {
        found: '<',
        onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'ItemsFound',
        bindToController: true
      };
      return fidDo;
    }

    function FoundItemsDirectiveController() {}

})();
