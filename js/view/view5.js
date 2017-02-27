/**
 * Created by dorapalfi on 10/02/17.
 */
//make Captial letter
var View5 = function (container5, model) {

    container5.hide();

    this.container5 = container5;

    //get elements that need to be populated with information
    //this.guestNumber = $("#numberOfGuests");
    this.firstDish = $("#1stdish");
    this.secondDish = $("#2nddish");
    this.thirdDish = $("#3rddish");

    this.totalprice = $("#totalprice");

    this.backButton = $("#backAndEditButton");

    this.printButton = $("#printButton");

    guests = model.getNumberOfGuests();

    //get dishes using getFullMenu
    fullMenu = model.getFullMenu();

    //get images for the dishes
    image1= "images/" + fullMenu[0].image;
    image2= "images/" + fullMenu[1].image;
    image3= "images/" + fullMenu[2].image;

    //get dishprice
    dish1price = model.getDishPrice(fullMenu[0].id);
    dish2price = model.getDishPrice(fullMenu[1].id);
    dish3price = model.getDishPrice(fullMenu[2].id);

    text = 'My Dinner: '  + guests + " people";

    $("#numberOfGuests").text(text);
    //this.guestNumber.append("<p style='margin:2%; font-size: 2.5em'> My Dinner:  " + guests + " people </p>");

    this.firstDish.append('<img src='+ image1 + '> <p>' + fullMenu[0].name + '</p><p>' + dish1price + '</p>');

    this.secondDish.append('<img src='+ image2 + '> <p>' + fullMenu[1].name + '</p><p>' + dish2price + '</p>');

    this.thirdDish.append('<img src='+ image3 + '><p>' + fullMenu[2].name + '</p><p>' + dish3price + '</p>');

    //get total price of the dinner and append it to the toal price element
    totalmoney = model.getTotalMenuPrice();
    this.totalprice.append("<p> The total price is: " + totalmoney + "</p>");

        this.update = function(){

    };



};