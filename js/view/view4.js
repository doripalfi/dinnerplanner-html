/**
 * Created by dorapalfi on 10/02/17.
 */

var View4 = function (container4, model) {

    //sign up as a listener
    model.attach(this);

    this.container4 = container4;
    container4.hide();

    this.backButton = $("#backToSelectButtonT");

    this.guestNumber = $("#ingredientsDiv2");
    this.imageOfDish = $("#dishImage");
    this.imageOfText = $("#imageText");
    this.tableOfIngredients = $("#ingredientsTable");
    this.costOfIngredients = $("#ingredientsCost");
    guests = model.getNumberOfGuests();

    exampleDish = model.getFullMenu()[1];
    selectedDish = model.getDish(exampleDish.id);

    dishImage = "images/" + selectedDish.image;
    dishDescription = selectedDish.description;
    dishIngredients = selectedDish.ingredients;


    this.imageOfDish.append('<img class="imgView4" src=' + dishImage + '>');
    this.imageOfText.append("<p style='padding-bottom: 3% '>" + dishDescription + "</p>");
    this.guestNumber.append("<h4>Ingredients for " + guests + " people</h4>");



    for(var i=0; i<selectedDish.ingredients.length; i++){
        this.tableOfIngredients.append(
            '<tr>' +
            '<td>' + selectedDish.ingredients[i].quantity + selectedDish.ingredients[i].unit +  '</td>' +
            '<td>' + selectedDish.ingredients[i].name + '</td>' +
                '<td> SEK </td>' +
                '<td>' + selectedDish.ingredients[i].price*guests + '</td>' +
            '</tr>'
        )
    }


    this.costOfIngredients.append("<p>" + model.getTotalMenuPrice() + "</p><p> SEK </p>" );

        this.update = function(){

    };


    //this.guestNumber.append("<p style='margin:2%; font-size: 2.5em'> My Dinner " + guests + " people </p>");
};
