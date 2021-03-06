/**
 * Created by dorapalfi on 10/02/17.
 */
var View6 = function (container6, model) {

    //sign up as a listener
    model.attach(this);

    this.container6 = container6;
    this.container6.hide();

    this.backButton = container6.find("#backFrom6Button");


    //this.guestNumber.append("<p style='margin:2%; font-size: 2.5em'> My Dinner:  " + guests + " people </p>");


    this.generateView6 = function(){

        this.guests = model.getNumberOfGuests();
        text = 'My Dinner: '  + this.guests + " people";

        $("#numberOfGuests").text(text);


         //this.guestNumber = $("#numberOfGuests");
        this.dishPic1 = $("#dishImage1");
        this.dishText1 = $("#dishDescription1");
        this.dishPrep1 = $("#dishPreparation1");

        this.dishPic2 = $("#dishImage2");
        this.dishText2 = $("#dishDescription2");
        this.dishPrep2 = $("#dishPreparation2");

        this.dishPic3 = $("#dishImage3");
        this.dishText3 = $("#dishDescription3");
        this.dishPrep3 = $("#dishPreparation3");

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


        for(i=0; i<fullMenu.length; i++) {
               image = "images/" + fullMenu[i].image;
               //dish1price = model.getDishPrice(fullMenu[i].id);
                dish1price = 3;
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

                this.dishPic.append('<img src='+  fullMenu[i].image + '>');
                this.dishText.append('<h4>' + fullMenu[i].title + '</h4><p> By ' + fullMenu[i].sourceName + '</p>');
                this.dishPrep.append('<h4> Preparation </h4><p>' + fullMenu[i].instructions + '</p>');
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



