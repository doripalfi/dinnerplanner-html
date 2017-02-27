/**
 * Created by dorapalfi on 10/02/17.
 */
var View6 = function (container6, model) {

    //sign up as a listener
    model.attach(this);

    this.container6 = container6;
    this.container6.hide();

    this.backButton = $("#backFrom6Button");

    //this.guestNumber = $("#numberOfGuests");
    this.dishPic = $("#dishImage1");
    this.dishText = $("#dishDescription1");
    this.dishPrep = $("#dishPreparation1");


    guests = model.getNumberOfGuests();

    //get dishes using getFullMenu
    fullMenu = model.getFullMenu();

    //get images for the dishes
    image1= "images/" + fullMenu[0].image;

    //this.guestNumber.append("<p style='margin:2%; font-size: 2.5em'> My Dinner:  " + guests + " people </p>");

        text = 'My Dinner: '  + guests + " people";

    $("#numberOfGuests").text(text);

    this.dishPic.append('<img src='+ image1 + '>' );
    this.dishText.append('<h4>' + fullMenu[0].name + '</h4><p>' + fullMenu[0].description + '</p>');
    this.dishPrep.append('<h4> Preparation </h4><p>' + fullMenu[0].description + '</p>');

    //we need to have an update method in each view
    //should this be this.update?
    //this.update = funtion(args){
    //    // function is called in the dinner model notify listeners
    //    guests = model.getNumberOfGuests();
    //    $("#numberOfGuests").text(text);

        this.update = function(){

    };
    };



