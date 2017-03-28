//DinnerModel Object constructor
var DinnerModel = function() {

	// number of guests and selected dinner options for dinner menu
	this.numberOfGuests = 1;
	this.dinnerOptions = [];
	this.resultOfSearch = "starter";
	this.dishToDisplay = "";
	this.selectedDish = '';
	this.searchFoundValue = '';

	//Lab 3
	this._listeners = [];

	this.attach = function (listener) {
		this._listeners.push(listener);
	};


	this.notify = function (args) {
		for (var i = 0; i < this._listeners.length; i++) {
			//this._listeners[i](this, args);
			this._listeners[i].update(args);
		}

	};

	//in View 4 we want to display the ingredients of the dish that was selected in View3
	this.getDishToDisplay = function () {
		return this.dishToDisplay;
	};

	this.setDishToDisplay = function (selectedID) {
		this.dishToDisplay = selectedID;
		this.notify("switchToView4");
	};

	//in View 3 this tells the view whether we want to see starters, mains or desserts
	this.getSelectedType = function () {
		return this.resultOfSearch;
	};

	this.confirmDinner = function () {
		this.notify("switchToView5")
	};

	this.printDinner = function () {
		this.notify("switchToView6")
	};

	this.setSelectedDish = function (dish) {

		this.selectedDish = dish;
	};

	this.getSelectedDish = function () {
		return this.selectedDish;
	};

	//depending on what we choose is View 3 this updates the variable that stores the starter/ main dish / dessert value
	this.changeSelectedType = function (searchResult) {
		this.resultOfSearch = searchResult;
		this.notify("selectedTypeChanged");

	};


	this.searchFoundFunction = function (searchValue) {
		this.searchFoundValue = searchValue;
		this.notify("searchFound");
	};

	this.searchDisplay = function () {
		this.notify("searchDisplay");
	};


	this.setNumberOfGuests = function (num) {
		this.numberOfGuests = num;
		console.log(this.numberOfGuests);
		this.notify("numberChanged");
	};

	// should return 
	this.getNumberOfGuests = function () {
		return this.numberOfGuests;
	};


	//Returns all the dishes on the menu.
	this.getFullMenu = function () {
		return this.dinnerOptions;
	};



	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function (id) {
		//var selectedMeal = this.getDish(id);
		this.dinnerOptions.push(id);
		this.notify("addToSideBar");
	};

	//Removes dish from menu
	this.removeDishFromMenu = function (id) {
		var ourMenu = this.getFullMenu();
		for (var i = 0; i < ourMenu.length; i++) {
			if (String(ourMenu[i].id) === id) {
				this.dinnerOptions.splice(i, 1);
			}
		}
		console.log(this.dinnerOptions);
		this.notify("dishRemoved");
	};


	//new getAllDishes function
	this.getAllDishesNew = function (type, filter, callBack) {

		$.ajax({
			url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search',
			headers: {
				'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
			},
			data: {
				'type': type,
				'number': '6',
				'query': filter
			},
			success: function (data) {
				//callBack(data.results);
				return callBack(data.results);
			},
			error: function (data) {
				console.log(data)
			}
		})
		return "hello";
	};

	this.getRecipe = function (id, callBack) {
		$.ajax({
			url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + String(id) + '/information?includeNutrition=false',
			headers: {
				'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
			},
			data: {
				'id': String(id)
			},
			success: function (data) {
				callBack(data);
			},
			error: function (data) {
				console.log(data)
			}

		})
	}


	//ajax call
	this.getSpoonacular = function () {
		$.ajax({
			url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?type=dessert',
			headers: {
				'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
			},
			success: function (data) {
				return data.results;
			},
			error: function (data) {
				console.log(data)
			}
		})
	};


	this.getEveryDish = function () {
		return dishes;
	};


};