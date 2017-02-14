$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	model.setNumberOfGuests(8);
	model.addDishToMenu(103);
	model.addDishToMenu(1);
	model.addDishToMenu(202);
	console.log(model.getFullMenu());
	console.log(model.getTotalMenuPrice());



	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"), model);


	var viewFive = new view5($("#view5"), model);
	var viewThree = new view3($("#view3"), model);
	var viewFour = new view4($("view4"), model);
	//var viewSix = new view6($("#view6"), model);




});