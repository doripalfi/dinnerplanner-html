/**
 * Created by dorapalfi on 24/02/17.
 */
var dishDetailController = function(view, model){


    view.Button1.click( function(){
        model.setDisplayDishDetail(1);
    });

    view.Button2.on('click', function(){
        model.setDisplayDishDetail(2);
    });

    view.Button3.on('click', function(){
        model.setDisplayDishDetail(3);
    })

};