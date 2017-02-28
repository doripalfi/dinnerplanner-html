/**
 * Created by dorapalfi on 10/02/17.
 */

var View3 = function (container3, model) {

    this.container3 = container3;
    container3.hide();


    this.selectMealType = container3.find("#selectMealType");

    this.searchInput = container3.find("#searchDish");

    this.dishImages = container3.find("#selectedDishes");
    this.dishImages.hide();

    this.Button1 = container3.find("#selectedType1");
    this.Button2 = container3.find("#selectedType2");
    this.Button3 = container3.find("#selectedType3");

    this.searchButton = container3.find("#searchButton");

    this.generateView3 = function() {

        selected = model.getSelectedType();

        starters = model.getAllDishes(selected);

        image1 = "images/" + starters[0].image;
        image2 = "images/" + starters[1].image;
        image3 = "images/" + starters[2].image;

        //get dish descriptions
        dish1text = starters[0].description;
        dish2text = starters[1].description;
        dish3text = starters[2].description;

        $("#img1").attr("src",image1).show();
        $("#img2").attr("src",image2).show();
        $("#img3").attr("src",image3).show();

        $("#par1").text(dish1text).show();
        $("#par2").text(dish2text).show();
        $("#par3").text(dish3text).show();

        this.Button1.html(starters[0].name);
        this.Button2.html(starters[1].name);
        this.Button3.html(starters[2].name);

        this.Button1.show();
        this.Button2.show();
        this.Button3.show();

        this.dishImages.show();

    };

    this.generateView3Single = function(dishname){

        dishName = model.getDishByName(dishname);

        image = "images/" + dishName.image;
        dishText = dishName.description;

        $("#img2").attr("src",image);
        $("#img1").hide();
        $("#img3").hide();
        $("#img2").show();

        $("#par2").text(dishText);
        $("#par1").hide();
        $("#par3").hide();
        $("#par2").show();

        this.Button1.hide();
        this.Button2.html(dishName.name);
        this.Button3.hide();
        this.Button2.show();

        this.dishImages.show();

    };


    this.update = function(args) {
        var updateArg = args;
        switch (updateArg){
            case "selectedTypeChanged":
                this.generateView3();
                break;
            case "searchFound":
                this.generateView3Single(model.searchFoundValue);
                break;
            default:
                break;
        }
    };



};