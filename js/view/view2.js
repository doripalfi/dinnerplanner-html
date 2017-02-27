/**
 * Created by dorapalfi on 10/02/17.
 */

var View2 = function (container2, model) {

    this.container2 = container2;
    container2.hide();


    this.selectGuestsButton = $("#numbPeople");
    this.sideBarTable = $("#sidebarTable");

    this.totalMenu = model.getFullMenu();

    this.updateSideBarMenu = function(){

        guestNumber = model.getNumberOfGuests();


        for(i=0; i<this.totalMenu.length; i++){
            console.log(model.getDishPrice(this.totalMenu[i].id)*guestNumber);
            this.sideBarTable.find('tbody').append(
                "<tr> <td>" + this.totalMenu[i].name +"</td><td>" + model.getDishPrice(this.totalMenu[i].id)*guestNumber +"</td></tr>"
        )}
    };


    this.update = function(args) {
        var updateArg = args;
        switch (updateArg){
            case "addToSideBar":
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