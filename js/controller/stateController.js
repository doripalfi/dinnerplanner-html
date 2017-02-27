/**
 * Created by dorapalfi on 10/02/17.
 */

var stateControl = function(view1, view2, view3, view4, view5, view6) {

    var viewOne = view1;
    var viewTwo = view2;
    var viewThree = view3;
    var viewFour = view4;
    var viewFive = view5;
    var viewSix = view6;

    var startDinner = function(view1, view2, view3){
        view1.start_button.click(function () {

            view1.container1.hide();
            view2.container2.show();
            view3.container3.show();
        });
    };

    var switchTo4 = function(view3, view4){
        view3.Button1.click(function(){
            view3.container3.hide();
            view4.container4.show();
        });

        view3.Button2.click(function(){
            view3.container3.hide();
            view4.container4.show();
        });

        view3.Button3.click(function(){
            view3.container3.hide();
            view4.container4.show();
        });



    };

    var backTo3 = function(view3, view4){
        view4.backButton.click(function () {
            view4.container4.hide();
            view3.container3.show();
        })
    };

    var confirmDish = function(view3, view4){
        view4.confirmButton.click(function () {
            view4.container4.hide();
            view3.container3.show();
        })
    };

    var confirmDinner = function(view2, view3, view5){
        view2.confirmDinnerButton.click(function () {
            view2.container2.hide();
            view5.container5.show();

        })
    };

    var backFrom5 = function(view5, view2, view3){
        view5.backButton.click(function () {
            view5.container5.hide();
            view2.container2.show();

        })
    };

    var printDinner = function(view5, view6){
        view5.printButton.click(function(){
            view5.container5.hide();
            view6.container6.show();
        })
    };

    var backFrom6 = function(view6, view5){
        view6.backButton.click(function(){
            view6.container6.hide();
            view5.container5.show();
        })
    }

    startDinner(viewOne, viewTwo, viewThree );

    switchTo4(viewThree, viewFour);

    backTo3(viewThree, viewFour);

    confirmDish(viewThree, viewFour);

    confirmDinner(viewTwo, viewThree, viewFive);

    backFrom5(viewFive, viewTwo, viewThree);

    printDinner(viewFive, viewSix);

    backFrom6(viewSix, viewFive);


};