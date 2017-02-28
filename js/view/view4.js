/**
 * Created by dorapalfi on 10/02/17.
 */

var View4 = function (container4, model) {

    //sign up as a listener
    model.attach(this);

    this.container4 = container4;
    container4.hide();

    this.backButton = $("#backToSelectButton");

    this.confirmButton = $("#confirm_dish");



    //exampleDish = model.getFullMenu()[1];

    this.displayIngredients = function () {



    this.guestNumber = $("#ingredientsDiv2");
    this.imageOfDish = $("#dishImage");
    this.imageOfText = $("#imageText");
    this.tableOfIngredients = $("#ingredientsTable");
    this.costOfIngredients = $("#ingredientsCost");

    this.guestNumber.empty();
    this.imageOfDish.empty();
    this.imageOfText.empty();
    this.tableOfIngredients.empty();
    this.costOfIngredients.empty();

     guests = model.getNumberOfGuests();

     exampleDish = model.getDishToDisplay();
     console.log(exampleDish);
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
            '<td>' + selectedDish.ingredients[i].quantity*guests + ' ' + selectedDish.ingredients[i].unit +  '</td>' +
            '<td>' + selectedDish.ingredients[i].name + '</td>' +
                '<td> SEK </td>' +
                '<td>' + selectedDish.ingredients[i].price*guests + '</td>' +
            '</tr>'
        )
    }

    console.log(model.getDishPrice(selectedDish*guests));

    this.costOfIngredients.append("<p>" + model.getDishPrice(selectedDish)*guests + "</p><p> SEK </p>" );

    };


    this.update = function(args) {
        var updateArg = args;
        switch (updateArg){
            case "switchToView4":
                this.displayIngredients();
                break;
            case "numberChanged":
                this.displayIngredients();
            default:
                break;
        }
    };

    //this.guestNumber.append("<p style='margin:2%; font-size: 2.5em'> My Dinner " + guests + " people </p>");
};
