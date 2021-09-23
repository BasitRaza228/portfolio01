$(document).ready(function () {
        //Activate animation on scroll
        AOS.init();

        // // Activate Carousel
        $(document).click(function () {
            // if($(".navbar-collapse").hasClass("in")){
              $('.navbar-collapse').collapse('hide');
            // }
         });
    $("#MainPage-carousel").carousel({interval: 4000});

        // Enable Carousel Controls
        $(".carousel-control-prev").click(function () {
            $("#MainPage-carousel").carousel("prev");
        });
        $(".carousel-control-next").click(function () {
            $("#MainPage-carousel").carousel("next");
        });
        
    });