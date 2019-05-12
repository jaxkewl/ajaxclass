(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {

	var signupCtrl = this;

	signupCtrl.firstname = "";
	signupCtrl.lastname = "";
	signupCtrl.email = "";
	signupCtrl.phone = "";
	signupCtrl.favItem = "";
	signupCtrl.registered = null;
	signupCtrl.displayMessage = "";

	signupCtrl.send = function () {

		var promise = SignupService.getMenuItem(signupCtrl.favItem);

			promise.then(function (response) {
				signupCtrl.registered = true;
				SignupService.setFirstName(signupCtrl.firstname);
				SignupService.setLastName(signupCtrl.lastname);
				SignupService.setEmail(signupCtrl.email);
				SignupService.setPhone(signupCtrl.phone);
				SignupService.setFavItem(signupCtrl.favItem);
				SignupService.setTitle(response.name);
				SignupService.setDescription(response.description);
				SignupService.setRegistered(true);
			})
			.catch(function (error) {

				signupCtrl.displayMessage = "Does not exist";
				signupCtrl.registered = false;
				SignupService.setRegistered(false);
			});
	};

	signupCtrl.isFavoriteItem = function () {

		var promise = SignupService.validateFavoriteItem(signupCtrl.favItem);

			promise.then(function (response) {
				console.log("Success...");
				signupCtrl.displayMessage = "";
		    })
			.catch(function (error) {
				console.log("Failure...");
				signupCtrl.displayMessage = "No such menu number exists.";
				signupCtrl.registered = false;
				SignupService.setRegistered(false);
			});
	};
}

})();
