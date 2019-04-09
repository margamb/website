$(document).ready(() => {

    $('.nav-menu-top').hide();

    $(".menu-button").on('click', event => {
        $(".nav-menu-top").toggle()
    });

    /*$(".menu-button").on("click",() => { 
        $(".menu-button").css("color", "#9DDBB7");
    });*/

    $(".menu-button").on("click",() => { 
        $(".menu-button").toggleClass("active-menu");
    });


    $(".login-form").hide();

    $(".login-button").on('click', event => {
        $(".login-form").toggle()
    });

    $(".login-button").on("click",() => { 
        $(".login-button").toggleClass("active-menu");
    });


    $('.poster-details').hide();

    $(".more-details-button").on('click', event => {
        $(event.currentTarget).closest(".product-details").next().toggle(200)
        // $(event.currentTarget).parent(".container").find(".poster-details").toggle(200)
        /*$(".poster-details").toggle(200)*/
    });
  
    
    $('.poster-details li').on('click', event => {
        $(event.currentTarget).addClass('active-size');
        
        $(event.currentTarget).siblings().removeClass('active-size')
        
        $(event.currentTarget).closest('.poster-details').children().removeClass('disabled')
        
        
      });
    
      $('.more-details-button').on('click', event => {
        $(event.currentTarget).toggleClass('active');
    });
    

    //////////////////////////////////////////////////
    
    $(".hide-button").on("click", () => {
        $(".ingrid").hide();
    });

    $(".show-button").on("click", () => {
        $(".ingrid").show();
    });

    $(".toggle-button").on("click", () => {
        $(".ingrid").toggle();
    });


    $(".fade-out-button").on("click", () => {
        $(".christopherLee").fadeOut(500);
    });

    $(".fade-in-button").on("click", () => {
        $(".christopherLee").fadeIn(4000);
    });

    $(".fade-toggle-button").on("click", () => {
        $(".christopherLee").fadeToggle();
    });


    $(".up-button").on("click", () => {
        $(".ingrid2").slideUp(100);
    });

    $(".down-button").on("click", () => {
        $(".ingrid2").slideDown("slow");
    });

    $(".slide-toggle-button").on("click", () => {
        $(".ingrid2").slideToggle(400);
    });

});