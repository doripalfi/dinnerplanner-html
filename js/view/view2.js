/**
 * Created by dorapalfi on 10/02/17.
 */

var View2 = function (container2, model) {

    this.container2 = container2;
    container2.hide();


    this.selectGuestsButton = container2.find("#numbPeople");
    this.sideBarTable = $("#sidebarTable");
    this.confirmDinnerButton = $("#confirmDinner");




    //function that is called when new meal is added to the menu
    this.updateSideBarMenu = function(){
        this.totalMenu = model.getFullMenu();

        this.sideBarTable.empty();
        this.sideBarTable.append("<tr> <th>Dish Name</th> <th>Cost</th> </tr>");

        guestNumber = model.getNumberOfGuests();

        for(i=0; i<this.totalMenu.length; i++){
            console.log(model.getDishPrice(this.totalMenu[i].id)*guestNumber);
            this.sideBarTable.find('tbody').append(
                "<tr id='" + this.totalMenu[i].id + "'> <td>" + this.totalMenu[i].name +"</td><td>" + model.getDishPrice(this.totalMenu[i].id) +"</td></tr>"
        )}
    };


    //updating the menu
    this.update = function(args) {
        var updateArg = args;
        switch (updateArg){
            case "addToSideBar":
                this.updateSideBarMenu();
                break;
            case "dishRemoved":
                console.log("inside dishRemoved");
                this.updateSideBarMenu();
                break;
            default:
                break;
        }
    };
/*    if(model.update === "numberChanged"){
        container2.($("#peopleP")).append("<p> adding to people</p>")
    }*/

    //we need to have an update method in each view
    //update = funtion(args)
    //{
        // function is called in the dinner model notify listeners

    //}

};