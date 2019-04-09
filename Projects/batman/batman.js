//batman-joker

$(".turn-off").on('click', function(){
    $(".dark-curtain").toggle();
    // $(".dark-curtain").css("background", "transparent");
    $(".light-ball").toggleClass("light-ball--on");
    $(".light-reflections").css("background", "radial-gradient(white, yellow)");
    $(".batman-ear-left-light").toggleClass("batman-ear-left-light--on");
    $(".batman-ear-right-light").toggleClass("batman-ear-right-light--on");
    $(".batman-circle-face-light").toggleClass("batman-circle-face-light--on");
    $(".joker-hair-back-light").toggleClass("joker-hair-back-light--on");
})