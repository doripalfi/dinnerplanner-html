/**
 * Created by dorapalfi on 25/02/17.
 */

var view3Search = function(view,model){

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

    })

};