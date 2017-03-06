/**
 * Created by dorapalfi on 27/02/17.
 */
var confirmDishController = function(view, model){

    view.confirmButton.click(function(){
        console.log("inside confirmDishCOntroller");
        id = model.getDishToDisplay().id;
        console.log(id);
        model.addDishToMenu(id);
    });

}