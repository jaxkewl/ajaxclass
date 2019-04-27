(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemsController', CategoryItemsController);

CategoryItemsController.$inject = ['items'];
function CategoryItemsController(items) {
  this.allItems = items
  this.category = this.allItems.data.category['name']
  this.items = this.allItems.data.menu_items;
  console.log(this.items)
}

})();
