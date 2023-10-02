var rating  = 1;

$(".btn").click(function(){
    $("#"+rating).removeClass("selected");    

    rating =$(this).attr("id");
    console.log(rating);
    animatePressedColour(rating);
    selectedRating = true;});



    function animatePressedColour(colour){
        $("#"+colour).addClass("selected");
        $(".submit-btn").click(function() {
          $(".page-1").addClass("hide");
          $(".page-2").removeClass("hide");
        });
          submitted();
       
    }
    
    function submitted(){
        $('.acknowledgement').text("You selected " + rating + " out of 5");

    }

  