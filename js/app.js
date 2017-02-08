$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	model.setNumberOfGuests(6);

	model.addDishToMenu(101);
	model.addDishToMenu(1);
	model.addDishToMenu(3);
	console.log(model.getFullMenu());

	//console.log(model.getAllIngredients());
	//console.log(model.getSelectedDish('starter'));

	model.removeDishFromMenu(3);
	//console.log(model.getFullMenu())
	console.log(model.getTotalMenuPrice());
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));

});