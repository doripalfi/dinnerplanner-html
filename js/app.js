$(function() {
	//We instantiate our model
	var model = new DinnerModel();


	model.addDishToMenu(103);
	//model.addDishToMenu(1);
	//model.addDishToMenu(202);



	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"), model);
	var viewOne = new View1($("#view1"),model);
	var viewTwo = new View2($("#view2"),model);
	var viewFive = new View5($("#view5"), model);
	var viewThree = new View3($("#view3"), model);
	var viewFour = new View4($("#view4"), model);
	var viewSix = new View6($("#view6"), model);


	var overallController = new stateControl(viewOne, viewTwo, viewThree, viewFour, viewFive, viewSix);
	//var overallController = new stateControl(viewOne, viewTwo, viewThree, viewFour, viewFive, viewSix);
	//create controllers in separate file, and instantiate them here. and also pass the view variables from here to the controller. don't use
	//new createDinnerController($("#view1"),model);
	var viewOneController = new createDinnerController(viewOne, model);
	var addGuest = new addGuestController(viewTwo, model);
	var selectedMeal = new selectMealTypeController(viewThree, model);
	var dishDetail = new dishDetailController(viewThree, model);
	var search = new view3Search(viewThree, model);
	var backButton = new backToSelectController(viewFour, model);
	var confirmDishButton = new confirmDishController(viewFour, model);
	var confirmDinner = new confirmDinnerController(viewTwo, model);

	model.attach(viewOne);
	model.attach(viewTwo);
	model.attach(viewThree);
	model.attach(viewFour);
	model.attach(viewFive);
	model.attach(viewSix);


});