/**
 * Created by dorapalfi on 27/02/17.
 */
//controller for view4
var confirmDishController = function(view, model){

    view.confirmButton.click(function(){
        dish_object = model.getSelectedDish();
        console.log(dish_object);
        model.addDishToMenu(dish_object);
    });

}