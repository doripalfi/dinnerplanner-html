/**
 * Created by dorapalfi on 10/02/17.
 */

var stateControl = function(view1, view2, view3, view4, view5, view6) {

    var viewOne = view1;
    var viewTwo = view2;
    var viewThree = view3;
    var viewFour = view4;

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

    startDinner(viewOne, viewTwo, viewThree );

    switchTo4(viewThree, viewFour);

    backTo3(viewThree, viewFour);



};