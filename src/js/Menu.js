$(window).scroll(function(e){
    const y = window.scrollY;
    if(y >= 200){
        $("#menu_container").removeClass("menu_container");
        $("#menu_container").addClass("fixed");
        $(".botonInicio").css("opacity", "1");
    }else{
        $("#menu_container").removeClass("fixed");
        $("#menu_container").addClass("menu_container");
        $(".botonInicio").css("opacity", "0");
    }
})
$(".botonInicio").click(function(e){
    $('body, html').animate({
        scrollTop: '0px'
    }, 1000);
});