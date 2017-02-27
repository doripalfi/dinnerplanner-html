/**
 * Created by dorapalfi on 24/02/17.
 */
var selectMealTypeController = function(view, model) {


    view.selectMealType.on('change', function(){
        selectedMeal = view.selectMealType.val();
        model.changeSelectedType(selectedMeal);
    });



    //  view.start_button.click(function () {

    //  });
};