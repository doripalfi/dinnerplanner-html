/**
 * Created by dorapalfi on 10/02/17.
 */

var View2 = function (container2, model) {

    this.container2 = container2;
    container2.hide();


    this.selectGuestsButton = container2.find("#numbPeople");
    this.sideBarTable = container2.find("#sidebarTable");
    this.confirmDinnerButton = container2.find("#confirmDinner");
    this.totalCost = container2.find("#totalCost");



    //function that is called when new meal is added to the menu
    this.updateSideBarMenu = function(){
        this.totalMenu = model.getFullMenu();

        this.sideBarTable.empty();
        this.sideBarTable.append("<tr> <th>Dish Name</th> <th>Cost</th> </tr>");

        guestNumber = model.getNumberOfGuests();

        totalmoney = 0;
        for(i=0; i<this.totalMenu.length; i++){
            dish1price = 0;
            for (j=0; j<this.totalMenu[i].extendedIngredients.length; j++){
               dish1price = dish1price + this.totalMenu[i].extendedIngredients[j].amount
           }
            totalmoney = totalmoney + dish1price;
            this.sideBarTable.find('tbody').append(
                "<tr id='" + this.totalMenu[i].id + "'> <td>" + this.totalMenu[i].title +"</td><td>" + dish1price*guestNumber +"</td></tr>"
        )

            this.totalCost.empty();
            this.totalCost.append("<h5>" + totalmoney*guestNumber+ " SEK<h5>");
        }
    };


    //updating the menu
    this.update = function(args) {
        var updateArg = args;
        switch (updateArg){
            case "addToSideBar":
                this.updateSideBarMenu();
                break;
            case "dishRemoved":
                this.updateSideBarMenu();
                break;
            case "numberChanged":
                this.updateSideBarMenu();
                break;
            default:
                break;
        }
    };
};