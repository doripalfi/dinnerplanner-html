/**
 * Created by dorapalfi on 10/02/17.
 */
var View6 = function (container6, model) {

    //sign up as a listener
    model.attach(this);

    this.container6 = container6;
    this.container6.hide();

    this.backButton = $("#backFrom6Button");


    //this.guestNumber.append("<p style='margin:2%; font-size: 2.5em'> My Dinner:  " + guests + " people </p>");
        this.guests = model.getNumberOfGuests();
        text = 'My Dinner: '  + this.guests + " people";

    $("#numberOfGuests").text(text);

    this.generateView6 = function(){


         //this.guestNumber = $("#numberOfGuests");
        this.dishPic1 = $("#dishImage1");
        this.dishText1 = $("#dishDescription1");
        this.dishPrep1 = $("#dishPreparation1");

        this.dishPic2 = $("#dishImage1");
        this.dishText2 = $("#dishDescription1");
        this.dishPrep2 = $("#dishPreparation1");

        this.dishPic3 = $("#dishImage1");
        this.dishText3 = $("#dishDescription1");
        this.dishPrep3 = $("#dishPreparation1");

        this.dishPic1.empty();
        this.dishText1.empty();
        this.dishPrep1.empty();

        this.dishPic2.empty();
        this.dishText2.empty();
        this.dishPrep2.empty();

        this.dishPic3.empty();
        this.dishText3.empty();
        this.dishPrep3.empty();




        //get dishes using getFullMenu
        fullMenu = model.getFullMenu();

        //get images for the dishes
       // image1= "images/" + fullMenu[0].image;


       /* this.dishPic.append('<img src='+ image1 + '>' );
        this.dishText.append('<h4>' + fullMenu[0].name + '</h4><p>' + fullMenu[0].description + '</p>');
        this.dishPrep.append('<h4> Preparation </h4><p>' + fullMenu[0].description + '</p>');
*/
        for(i=0; i<fullMenu.length; i++) {
               image = "images/" + fullMenu[i].image;
               dish1price = model.getDishPrice(fullMenu[i].id);
               switch (i) {
                   case 2:
                       this.dishPic = this.dishPic3;
                       this.dishText = this.dishText3;
                       this.dishPrep = this.dishPrep3;
                       break;
                   case 1:
                       this.dishPic = this.dishPic2;
                       this.dishText = this.dishText2;
                       this.dishPrep = this.dishPrep2;
                       break;
                   default:
                       this.dishPic = this.dishPic1;
                       this.dishText = this.dishText1;
                       this.dishPrep = this.dishPrep1;
                       break;
               }

                this.dishPic.append('<img src='+ "images/"+ fullMenu[i].image + '>');
                this.dishText.append('<h4>' + fullMenu[i].name + '</h4><p>' + fullMenu[i].description + '</p>');
                this.dishPrep.append('<h4> Preparation </h4><p>' + fullMenu[i].description + '</p>');
                 }
     };

    this.update = function(args) {
        var updateArg = args;
        switch (updateArg) {
            case "switchToView6":
                this.generateView6();
                break;
            default:
                break;
        }
    }

    };



