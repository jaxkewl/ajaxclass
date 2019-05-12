(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignupService'];
function MyInfoController(SignupService) {

	var myInfoCtrl = this;
	myInfoCtrl.firstname = SignupService.getFirstName();
	myInfoCtrl.lastname = SignupService.getLastName();
	myInfoCtrl.favItem = SignupService.getFavItem();
	myInfoCtrl.title = SignupService.getTitle();
	myInfoCtrl.description = SignupService.getDescription();
	myInfoCtrl.registered = SignupService.getRegistered();
	myInfoCtrl.email = SignupService.getEmail();
	myInfoCtrl.phone = SignupService.getPhone();

	// this.hasFavItem = false
  // console.log("MyInfoController: favItem = " + this.favItem)
  // if this.favItem != "NONE" {
  //   this.hasFavItem = true
  // }
	
}

})();
