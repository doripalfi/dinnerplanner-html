/**
 * Created by dorapalfi on 10/02/17.
 */
var View5 = function (container5, model) {

    container5.hide();

    this.container5 = container5;


    this.backButton = container5.find("#backAndEditButton");

    this.printButton = container5.find("#printButton");

   this.generateView5 = function(){



       this.totalprice = container5.find("#totalprice");
       this.totalprice.empty();

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

       totalmoney = 0;
       for(i=0; i<fullMenu.length; i++) {
           image = fullMenu[i].image;
           dish1price = 0;
           for (j=0; j<fullMenu[i].extendedIngredients.length; j++){
               dish1price = dish1price + fullMenu[i].extendedIngredients[j].amount
           }
           totalmoney = totalmoney + dish1price;

           //dish1price = fullMenu[i].amount*guests;
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

           this.container.append('<img src=' + image + '> <p>' + fullMenu[i].title + '</p><p>' + dish1price*guests + ' SEK</p>');
       }

        this.totalprice.append("<p> The total price is: " + totalmoney*guests + " SEK</p>");

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