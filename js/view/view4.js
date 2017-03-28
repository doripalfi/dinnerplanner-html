/**
 * Created by dorapalfi on 10/02/17.
 */

var View4 = function (container4, model) {

    //sign up as a listener
    model.attach(this);

    this.container4 = container4;
    container4.hide();

    this.backButton = container4.find("#backToSelectButton");
    this.confirmButton = container4.find("#confirm_dish");
    $("#loadingContainer2").hide()


    this.generateView4 = function () {

        container4.hide();
        $("#loadingContainer2").show();
         guests = model.getNumberOfGuests();

         //exampleDish = model.getDishToDisplay();

            model.getRecipe(model.getDishToDisplay(), function(exampleDish){

                model.setSelectedDish(exampleDish);

                this.guestNumber = container4.find("#ingredientsDiv2");
                this.imageOfDish = container4.find("#dishImage");
                this.imageOfText = container4.find("#imageText");
                this.tableOfIngredients = container4.find("#ingredientsTable");
                this.costOfIngredients = container4.find("#ingredientsCost");

                this.guestNumber.empty();
                this.imageOfDish.empty();
                this.imageOfText.empty();
                this.tableOfIngredients.empty();
                this.costOfIngredients.empty();


                dishImage = exampleDish.image;
                dishDescription = exampleDish.instructions;
                dishTitle = exampleDish.title;

                dishIngredients = exampleDish.extendedIngredients;

                this.imageOfDish.append('<img class="imgView4" src=' + dishImage + '>');
                this.imageOfText.append("<h3 style='padding-bottom: 3% '>" + dishTitle + "</h3>");
                this.imageOfText.append("<p style='padding-bottom: 3% '>" + dishDescription + "</p>");
                this.guestNumber.append("<h4>Ingredients for " + guests + " people</h4>");

                totalPrice = 0;

                for(var i=0; i<dishIngredients.length; i++){
                    this.tableOfIngredients.append(
                        '<tr>' +
                        '<td>' + dishIngredients[i].amount*guests + ' ' + dishIngredients[i].unit +  '</td>' +
                        '<td>' + dishIngredients[i].name + '</td>' +
                            '<td> SEK </td>' +
                            '<td>' + dishIngredients[i].amount*guests + '</td>' +
                        '</tr>'
                    )
                    totalPrice = totalPrice + dishIngredients[i].amount
                }

                    //console.log(model.getDishPrice(selectedDish*guests));

             this.costOfIngredients.append("<p>" + totalPrice*guests + "</p><p> SEK </p>" );
                $("#loadingContainer2").hide();
                container4.show();
            })

    };


    this.update = function(args) {
        var updateArg = args;
        switch (updateArg){
            case "switchToView4":
                this.generateView4();
                break;
            case "numberChanged":
                this.generateView4();
                break;
            default:
                break;
        }
    };

    //this.guestNumber.append("<p style='margin:2%; font-size: 2.5em'> My Dinner " + guests + " people </p>");
};
