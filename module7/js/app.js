
(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckoffService', ShoppingListCheckoffService)
  .filter('CustomPrice', CustomPriceFilterFactory)

  ToBuyController.$inject = ['$scope', 'ShoppingListCheckoffService'];
  function ToBuyController($scope, ShoppingListCheckoffService) {
    this.title = "To Buy:"
    this.toBuyItems = ShoppingListCheckoffService.getToBuyItems();

    this.buyAnItem = function(index) {
      ShoppingListCheckoffService.buyAnItem(index)
    }
  }

  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckoffService'];
  function AlreadyBoughtController($scope, ShoppingListCheckoffService) {
    this.title = "Already Bought:"
    this.boughtItems = ShoppingListCheckoffService.getBoughtItems();
  }

  function ShoppingListCheckoffService() {
    var toBuyItems = [
      {
        name: "Beer",
        quantity: "12",
        pricePer: 30.0
      },
      {
        name: "Donuts",
        quantity: "12",
        pricePer: 10.0
      },
      {
        name: "Mac&Cheese",
        quantity: "9",
        pricePer: 5.0
      },
      {
        name: "Pickles",
        quantity: "1",
        pricePer: 2.50
      },
      {
        name: "Lunchables",
        quantity: "3",
        pricePer: 6.0
      }
    ];

    var alreadyBoughtItems = []
    this.getBoughtItems = function () {
      return alreadyBoughtItems;
    }

    this.buyAnItem = function(toBuyItemIndex) {
      alreadyBoughtItems.push(toBuyItems[toBuyItemIndex])
      var numberToDelete = 1
      toBuyItems.splice(toBuyItemIndex, numberToDelete)
    }

    this.getToBuyItems = function () {
      return toBuyItems;
    }





  }

  function CustomPriceFilterFactory() {
    return function (input) {
      var totalPrice = input.quantity * input.pricePer
      var returnPriceString = "$$$" + String(totalPrice)
      return returnPriceString
    };
  }

})();
