//DinnerModel Object constructor
var DinnerModel = function() {

	// number of guests and selected dinner options for dinner menu
	this.numberOfGuests = 1;
	this.dinnerOptions = [];
	this.resultOfSearch = "starter";
	this.dishToDisplay = "";
	this.searchFoundValue = '';

	//Lab 3
	this._listeners = [];

	this.attach = function(listener) {
		this._listeners.push(listener);
	};


	this.notify = function (args) {
		for (var i=0; i<this._listeners.length; i++){
			//this._listeners[i](this, args);
			this._listeners[i].update(args);
		}
		
	};

	//in View 4 we want to display the ingredients of the dish that was selected in View3
	this.getDishToDisplay = function(){
		return this.dishToDisplay;
	}

	//in View 3 this tells the view whether we want to see starters, mains or desserts
	this.getSelectedType = function(){
		return this.resultOfSearch;
	};

	this.confirmDinner = function(){
		this.notify("switchToView5")
	};

	this.printDinner = function(){
		this.notify("switchToView6")
	};


	//depending on what we choose is View 3 this updates the variable that stores the starter/ main dish / dessert value
	this.changeSelectedType = function(searchResult){
		this.resultOfSearch = searchResult;
		this.notify("selectedTypeChanged");

	};

	this.setDisplayDishDetail = function(buttonClicked){
		currentDishes = this.getAllDishes(this.resultOfSearch);
		this.dishToDisplay = currentDishes[buttonClicked-1];
		this.notify("switchToView4");
	};

	this.getDisplayDishDetail = function(){
		return(this.dishToDisplay);
	};

	this.searchFoundFunction = function(searchValue){
		this.searchFoundValue = searchValue;
		this.notify("searchFound");
	};

	this.searchDisplay = function(){
		this.notify("searchDisplay");
	};



	this.setNumberOfGuests = function(num) {
		this.numberOfGuests = num;
		console.log(this.numberOfGuests);
		this.notify("numberChanged");
	};

	// should return 
	this.getNumberOfGuests = function() {
		console.log(this.numberOfGuests);
		return this.numberOfGuests;
	};

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		var ourMenu = this.getFullMenu();
		var selected = [];
		for(var i=0; i < ourMenu.length; i++){
			if(ourMenu[i].type === type){
				selected.push(ourMenu[i])
			}
		}
		return selected;
	};

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return this.dinnerOptions;
	};

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var ourMenu = this.getFullMenu();
		var ourIngredients = [];
		for(var i = 0; i< ourMenu.length; i++ ){
			ourIngredients.push(ourMenu[i].ingredients)
		}
		return ourIngredients;
	};

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		this.totalPrice = 0;
		var guests = this.numberOfGuests;
		var ourIngredients = this.getAllIngredients();
		for(var i = 0; i< ourIngredients.length; i++ ){
			for(var j=0; j<ourIngredients[i].length; j++){
				this.totalPrice = this.totalPrice + (ourIngredients[i][j].price)*guests;
			}
		}

		return this.totalPrice;
	};



	this.getDishPrice = function(dishID){
		this.totalCost =0;
		//guests = this.numberOfGuests;
		//console.log(guests);
		var ourMenu = this.getEveryDish();
		console.log(ourMenu);
		for(var i=0; i< ourMenu.length; i++){
			console.log(dishID);
			if (dishID === ourMenu[i].id){
				console.log("inside if");
				for(var j=0; j<ourMenu[i].ingredients.length; j++){
					console.log("adding ingredient");
					this.totalCost = this.totalCost + (ourMenu[i].ingredients[j].price);
					console.log(this.totalCost);

				}
			}
		}
		console.log(this.totalCost);
		return this.totalCost;

	};

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		var selectedMeal = this.getDish(id);
		this.dinnerOptions.push(selectedMeal);
		this.notify("addToSideBar");
	};

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		var ourMenu = this.getFullMenu();
		for(var i = 0; i< ourMenu.length; i++ ){
			if(String(ourMenu[i].id) === id){
				this.dinnerOptions.splice(i,1);
			}
		}
		console.log(this.dinnerOptions);
		this.notify("dishRemoved");
	};

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
	  return dishes.filter(function(dish) {
		var found = true;
		if(filter){
			found = false;
			dish.ingredients.forEach(function(ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });	
	};

	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	};

	this.getEveryDish = function(){
		return dishes;
	};

		//function that returns a dish of specific name
	this.getDishByName = function (dishName) {
	  for(key in dishes){
			if(dishes[key].name == dishName) {
				return dishes[key];
			}
		}
	};

	this.getEveryDish = function(){
		return dishes;
	};


	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

};
