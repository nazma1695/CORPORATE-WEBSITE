$(document).ready(function(){
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll >= 50){
            $(".sticky").addClass("stickyadd");
        }else{
            $(".sticky").removeClass("stickyadd");
        }
        
    })
    $('.navbar-nav a[href^="#"]').on('click', function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    particlesJS.load("particles-js", "assets/lib/particlesjs-config.json");

    AOS.init();

});