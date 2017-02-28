/**
 * Created by dorapalfi on 10/02/17.
 */
//make Captial letter
var View5 = function (container5, model) {

    container5.hide();

    this.container5 = container5;


    this.backButton = container5.find("#backAndEditButton");

    this.printButton = container5.find("#printButton");

   this.generateView5 = function(){



       this.totalprice = container5.find("#totalprice");

       this.firstDish = container5.find("#1stdish");
       this.secondDish = container5.find("#2nddish");
       this.thirdDish = container5.find("#3rddish");

       this.firstDish.empty();
       this.secondDish.empty();
       this.thirdDish.empty();

        guests = model.getNumberOfGuests();

        //get dishes using getFullMenu
        fullMenu = model.getFullMenu();

        text = 'My Dinner: '  + guests + " people";

        $("#numberOfGuests").text(text);

       for(i=0; i<fullMenu.length; i++) {
           image = "images/" + fullMenu[i].image;
           dish1price = model.getDishPrice(fullMenu[i].id);
           switch (i) {
               case 2:
                   this.container = this.thirdDish;
                   break;
               case 1:
                   this.container = this.secondDish;
                   break;
               default:
                   this.container = this.firstDish;
                   break;
           }

           this.container.append('<img src=' + image + '> <p>' + fullMenu[i].name + '</p><p>' + dish1price + '</p>');
       }


/*        //get images for the dishes
        image1= "images/" + fullMenu[0].image;
        image2= "images/" + fullMenu[1].image;
        image3= "images/" + fullMenu[2].image;

        //get dishprice
        dish1price = model.getDishPrice(fullMenu[0].id);
        dish2price = model.getDishPrice(fullMenu[1].id);
        dish3price = model.getDishPrice(fullMenu[2].id);


        //this.guestNumber.append("<p style='margin:2%; font-size: 2.5em'> My Dinner:  " + guests + " people </p>");

       console.log(fullMenu[0].name);

        this.firstDish.append('<img src='+ image1 + '> <p>' + fullMenu[0].name + '</p><p>' + dish1price + '</p>');

        this.secondDish.append('<img src='+ image2 + '> <p>' + fullMenu[1].name + '</p><p>' + dish2price + '</p>');

        this.thirdDish.append('<img src='+ image3 + '><p>' + fullMenu[2].name + '</p><p>' + dish3price + '</p>');*/

        //get total price of the dinner and append it to the toal price element
        totalmoney = model.getTotalMenuPrice();
        this.totalprice.append("<p> The total price is: " + totalmoney + "</p>");

    };

    this.update = function(args) {
        var updateArg = args;
        switch (updateArg) {
            case "switchToView5":
                		         console.log("inside generateView5");
                this.generateView5();
                break;
            default:
                break;
        }
    }


};