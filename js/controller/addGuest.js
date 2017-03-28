/**
 * Created by dorapalfi on 15/02/17.
 */
//controller for view2
var view2Controller = function(view2, model) {

    view2.selectGuestsButton.on('change', function(){
        guestNumber = view.selectGuestsButton.val();
        model.setNumberOfGuests(guestNumber);
    });

    view2.confirmDinnerButton.click(function(){
        model.confirmDinner();
    });

    table = view.sideBarTable;

    table.on('click', 'tr', function() {
        console.log($(this).attr("id"));
        dishID =  $(this).attr("id");
        model.removeDishFromMenu(dishID);
    });


    //  view.start_button.click(function () {

    //  });
};