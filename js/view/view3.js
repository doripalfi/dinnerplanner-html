/**
 * Created by dorapalfi on 10/02/17.
 */

var View3 = function (container3, model) {

    this.container3 = container3;
    this.container3.hide();

    this.selectMealType = container3.find("#selectMealType");
    this.searchInput = container3.find("#searchDish");
    this.dishImages = container3.find("#selectedDishes");
    this.dishImages.hide();


    this.searchButton = container3.find("#searchButton");

    this.loadingContainer = container3.find("#loadingContainer");
    this.loadingContainer.hide();


    this.generateView3 = function() {

        selected = model.getSelectedType();

        filter = model.searchFilter;

        dishImages = container3.find("#selectedDishes");
        dishImages.empty();
        this.loadingContainer.show();

        model.getAllDishesNew(selected, filter, function(starters){

            dishImages = container3.find("#selectedDishes");
            loadingContainer = container3.find("#loadingContainer");
            loadingContainer.hide();

            for (var i=0; i <starters.length; i++){
                image = "https://spoonacular.com/recipeImages/" + String(starters[i].image);
                title = starters[i].title;
                if (title.length > 40){
                    title = title.slice(0,40) + "...";
                }
                dishImages.append(
                    '<div class="col-lg-3"><div class="imgContainer"><img class="centerBlock" src=' + image + ' id="img"' +i +'>' +
						'<button type = "button" class = "btn btn-default" id=' + starters[i].id +">" + title +"</button>" +
						'<p style="padding-top: 3%" id="par"' + i + '></p></div></div>'
            )
            };


        });

        this.dishImages.show();

    };

    this.generateView3();


    this.update = function(args) {
        var updateArg = args;
        switch (updateArg){
            case "selectedTypeChanged":
                this.generateView3();
                break;
            case "searchFound":
                break;
            default:
                break;
        }
    };



};