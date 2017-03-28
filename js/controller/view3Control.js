/**
 * Created by dorapalfi on 24/02/17.
 * This is for View3
 */
var view3Controller = function(view, model) {



    view.dishImages.on('click', ':button', function(){
        model.setDishToDisplay(this.id);
       // model.getRecipe(this.id, cb)
    });

    view.selectMealType.on('change', function(){
        selectedMeal = view.selectMealType.val();
        model.changeSelectedType(selectedMeal);
    });


    view.searchButton.click(function(){
        var searchValue = view.searchInput.val();
        console.log(searchValue);
        model.searchFilter = searchValue;
        view.generateView3();
/*        var type = model.getSelectedType();
        console.log(type);

       model.getAllDishes(type, searchValue);
        console.log(model.getAllDishes(type, searchValue));*/

    });


/*
    view.searchInput.change(function(){
        var searchValue = view.searchInput.val();
        console.log(searchValue);
        model.searchFilter = searchValue;
        });
*/


};