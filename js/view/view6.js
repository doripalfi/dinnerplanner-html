/**
 * Created by dorapalfi on 10/02/17.
 */
var view6 = function (container, model) {
    this.guestNumber = $("#numberOfGuests");
    guests = model.getNumberOfGuests();

    this.guestNumber.append("<p style='margin:2%; font-size: 2.5em'> My Dinner " + guests + " people </p>");
}
