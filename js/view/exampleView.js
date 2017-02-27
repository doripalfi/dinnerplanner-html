//ExampleView Object constructor
var ExampleView = function (container1,  model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container1.find("#numberOfGuests");
	this.plusButton = container1.find("#plusGuest");
	this.minusButton = container1.find("#minusGuest");

	this.numberOfGuests.html("Number of guests");



	
}

var View1Controller = function (container, model){
	//when we click the button in view 1 we should hide view 1 and add view 2 & 3
	this.button.onclick()
}
 
