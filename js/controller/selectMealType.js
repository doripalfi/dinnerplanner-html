/**
 * Created by dorapalfi on 24/02/17.
 */
var selectMealTypeController = function(view, model) {


    view.selectMealType.on('change', function(){
        selectedMeal = view.selectMealType.val();
        model.changeSelectedType(selectedMeal);
    });

    view.Button1.click( function(){
        model.setDisplayDishDetail(1);
    });

    view.Button2.on('click', function(){
        model.setDisplayDishDetail(2);
    });

    view.Button3.on('click', function(){
        model.setDisplayDishDetail(3);
    });

    view.searchButton.click(function(){
        var searchValue = view.searchInput.val();
        console.log(searchValue);

        var type = model.getSelectedType();
        console.log(type);
        model.getAllDishes(type, searchValue);
        console.log(model.getAllDishes(type, searchValue));

    });

/*    view.searchInput.change(function(){
        var searchValue = view.searchInput.val();
        model.getAllDishes(model.resultOfSearch, searchValue);
        console.log(model.getAllDishes((model.resultOfSearch , "Meat")));
    });*/

    view.searchInput.change(function(){
        var searchValue = view.searchInput.val();
        var everyDish = model.getEveryDish();
        for(i=0; i<everyDish.length; i++){
            if(searchValue===everyDish[i].name){
                model.searchFoundFunction(searchValue);
            };
        }

    });

    //  view.start_button.click(function () {

    //  });
};