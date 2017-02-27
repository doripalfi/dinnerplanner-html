/**
 * Created by dorapalfi on 27/02/17.
 */
var confirmDinnerController = function(view2, model){
    view2.confirmDinnerButton.click(function(){
        console.log("button clicked");
        model.confirmDinner();
    });
};