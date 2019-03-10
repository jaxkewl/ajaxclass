(function () {
'use strict';

console.log("Martin Hong Assignment 6");

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  console.log("setting up controller...")
  $scope.userInput = "list lunch items, separated by a comma. (, , , does not count as an item towards to the count)";
  $scope.feedbackMsg = "";

  function getFeedbackMsgCss(color) {
    var style = {}
    style['border'] = "3px solid ", color;
    style['color'] = color
    console.log(style)
    return style
  }

  $scope.checkUserInput = function () {
    console.log("button was clicked");

    var numberOfItems = calculateNumberOfItems($scope.userInput)
    if (numberOfItems > 0 && numberOfItems <= 3) {
      $scope.myStyle = getFeedbackMsgCss("green")
      $scope.feedbackMsg = "Enjoy!"
    } else if (numberOfItems > 3) {
      $scope.myStyle = getFeedbackMsgCss("green")
      $scope.feedbackMsg = "Too much!"
    } else if (numberOfItems == 0) {
      $scope.myStyle = getFeedbackMsgCss("red")
      $scope.feedbackMsg = "Please enter data first"
    } else {
      $scope.myStyle = getFeedbackMsgCss("red")
      $scope.feedbackMsg = "unknown error"
    }

  };

  function calculateNumberOfItems(items) {
    console.log(items)
    if (items == "") {
      return 0
    }
    var splitString = items.split(',')
    console.log(splitString)

    var bonus = splitString.filter(function(n){ return n.trim() != ""})
    console.log(bonus)

    return bonus.length
  }



}

})();
