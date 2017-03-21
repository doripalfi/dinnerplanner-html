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

        this.Button1 = container3.find("#selectedType1");
    this.Button2 = container3.find("#selectedType2");
    this.Button3 = container3.find("#selectedType3");
    this.Button4 = container3.find("#selectedType4");

    this.searchButton = container3.find("#searchButton");

    this.generateView3 = function() {

        selected = model.getSelectedType();

        filter = "";

        model.getAllDishesNew(selected, filter, function(starters){

            console.log(starters);
            dishImages = container3.find("#selectedDishes");

            for (var i=0; i <starters.length; i++){
                dishImages.append(
                    '<div class="col-lg-3"><div class="imgContainer"><img class="centerBlock" src=' + starters[i].image + ' id="img"' + i +'>' +
						'<button type = "button" class = "btn btn-default" id=' + starters[i].id +">" + starters[i].title +"</button>" +
						'<p style="padding-top: 3%" id="par"' + i + '></p></div></div>'


            )
            };


/*            image1 =  starters[0].image;
            image2 =  starters[1].image;
            image3 =  starters[2].image;
            image4 = starters[3].image;*/

            //get dish descriptions
/*            dish1text = starters[0].title;
            dish2text = starters[1].title;
            dish3text = starters[2].title;
            dish4text = starters[3].title;*/

           // $("#img1").attr("src",image1).show();
           // $("#img2").attr("src",image2).show();
           // $("#img3").attr("src",image3).show();
           // $("#img4").attr("src",image4).show();

/*            $("#par1").text(dish1text).show();
            $("#par2").text(dish2text).show();
            $("#par3").text(dish3text).show();
            $("#par4").text(dish4text).show();*/

/*    this.Button1 = container3.find("#selectedType1");
    this.Button2 = container3.find("#selectedType2");
    this.Button3 = container3.find("#selectedType3");
    this.Button4 = container3.find("#selectedType4");

            this.Button1.html(starters[0].title);
            this.Button2.html(starters[1].title);
            this.Button3.html(starters[2].title);

            this.Button1.show();
            this.Button2.show();
            this.Button3.show();*/



        });

        this.dishImages.show();

    };

/*    this.generateView3Single = function(dishname){

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

    };*/


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