/**
 * Created by dorapalfi on 10/02/17.
 */

var view3 = function (container, model) {

    this.dishImages = $("#selectedDishes");

    starters = model.getAllDishes('starter');

    image1= "images/" + starters[0].image;
    image2= "images/" + starters[1].image;
    image3= "images/" + starters[2].image;

    //get dish descriptions
    dish1text = starters[0].description;
    dish2text = starters[1].description;
    dish3text = starters[2].description;


    this.dishImages.append('<div class="col-lg-3 empty"></div><div class="col-lg-3"><div class="imgContainer">' +
        '<img class="centerBlock" src=' +image1+ '> <p style="padding-top: 3%">' +dish1text + '</p></div></div><div class="col-lg-3"><div class="imgContainer"> ' +
        '<img class="centerBlock" src=' + image2 + '><p style="padding-top: 3%">' + dish2text + '</p> </div> </div> <div class="col-lg-3"> <div class="imgContainer"> ' +
        '<img class="centerBlock" src=' +image3 + '> <p style="padding-top: 3%">' + dish3text + '</p> </div> </div>');
}