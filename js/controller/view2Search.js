/**
 * Created by dorapalfi on 25/02/17.
 */

var view3Search = function(view,model){

    view.searchInput.change(function(){
        var searchValue = view.searchInput.val();
        model.getAllDishes(model.resultOfSearch, searchValue);
    });

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