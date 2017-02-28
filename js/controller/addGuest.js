/**
 * Created by dorapalfi on 15/02/17.
 */
var addGuestController = function(view, model) {


    view.selectGuestsButton.on('change', function(){
        guestNumber = view.selectGuestsButton.val();
        console.log(guestNumber);
        console.log("guest number changed");
        model.setNumberOfGuests(guestNumber);
    });

    view.confirmDinnerButton.click(function(){
        console.log("button clicked");
        model.confirmDinner();
    });


    //  view.start_button.click(function () {

    //  });
};