(function () {
'use strict';

angular.module('public')
.service('SignupService', SignupService);

SignupService.$inject = ['$http', 'ApiBasePath']
function SignupService($http, ApiBasePath) {

	var service = this;
	var firstName = "";
	var lastName = "";
	var favItem = "";
	var title = "";
	var description = "";
	var registered = false;
	var email = "";
	var phone = "";

	service.setFirstName = function(first_name) {
		firstName = first_name;
	};
	service.getFirstName = function () {
		return firstName;
	};

	service.setLastName = function(last_name) {
		lastName = last_name;
	};
	service.getLastName = function () {
		return lastName;
	};

	service.setFavItem = function(fav_item) {
		favItem = fav_item;
	};
	service.getFavItem = function () {
		return favItem;
	};

	service.setEmail = function(electronic_mail) {
		email = electronic_mail;
	};
	service.getEmail = function () {
		return email;
	};

	service.setPhone = function(phone_number) {
		phone = phone_number;
	};
	service.getPhone = function () {
		return phone;
	};

	service.setTitle = function(name) {
		title = name;
	};
	service.getTitle = function () {
		return title;
	};

	service.setDescription = function(describe) {
		description = describe;
	};
	service.getDescription = function () {
		return description;
	};

	service.setRegistered = function(reg) {
		registered = reg;
	};
	service.getRegistered = function() {
		return registered;
	};

	service.getMenuItem = function (favItem) {
		return $http({
			method: "GET",
			url: (ApiBasePath + "/menu_items/" + favItem + ".json")
		}).then(function (response) {
			return response.data;
		});
	};

	service.validateFavoriteItem = function (favItem) {
		return $http({
			method: "GET",
			url: (ApiBasePath + "/menu_items/" + favItem + ".json")
		}).then(function (response) {
			return response.data;
		});
	};
}

})();
