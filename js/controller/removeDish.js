/**
 * Created by dorapalfi on 28/02/17.
 */
var removeDishController = function(view2, model){

    table = view2.sideBarTable;

    table.on('click', 'tr', function() {
        console.log($(this).attr("id"));
        dishID =  $(this).attr("id");
        model.removeDishFromMenu(dishID);
    });


}