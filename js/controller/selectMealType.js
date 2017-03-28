/**
 * Created by dorapalfi on 24/02/17.
 * This is for View3
 */
var selectMealTypeController = function(view, model) {



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

        var type = model.getSelectedType();
        console.log(type);

       model.getAllDishes(type, searchValue);
        console.log(model.getAllDishes(type, searchValue));

    });


    view.searchInput.change(function(){
        var searchValue = view.searchInput.val();
        var everyDish = model.getEveryDish();
        for(i=0; i<everyDish.length; i++){
            if(searchValue===everyDish[i].name){
                model.searchFoundFunction(searchValue);
            };
        }

    });

};