/**
 * Created by dorapalfi on 15/02/17.
 */
var addGuestController = function(view, model) {


    view.selectGuestsButton.on('change', function(){
        guestNumber = view.selectGuestsButton.val();
        console.log("guest number changed");
        model.setNumberOfGuests(guestNumber);
    });



    //  view.start_button.click(function () {

    //  });
};