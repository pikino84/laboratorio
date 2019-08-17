$(document).on("click", "#lanza_selector_id", function(){
    $("#cubo_id").css("border", "5px solid black");
});
$(document).on("click", "#lanza_selector_etiqueta", function(){
    $("figure").css({"width":"50%"});
});
$(document).on("click", ".lanza_selector_clase", function(){
    $(".mi_figura").css({"width":"80px","border-radius":"50%"});
});
$(document).on("click", ".desendientes", function(){
    $(".padre *").css("background", "#ffc0cb");
});
$(document).on("click", ".selecthijos", function(){
    $(".padre > *").css("background", "#00b0ff");
});
$(document).on("click", ".selecthermanos", function(){
    $("li.uno ~ li").css("background", "#a5d6a7");
});
$(document).on("click", ".selecsiguiente", function(){
    $("li.uno + li").css("background", "#ff9800");
});
$(document).on("click", ".first", function(){
    $(".lista li:first").css("background", "#ff9800");
});
$(document).on("click", ".last", function(){
    $(".lista li:last").css("background", "#e1bee7");
});
$(document).on("click", ".even", function(){
    $(".lista li:even").css("background", "#f8bbd0");
});
$(document).on("click", ".odd", function(){
    $(".lista li:odd").css("background", "#bbdefb");
});
$(document).on("click", ".eq", function(){
    $(".lista li:eq(3)").css("background", "#b2ebf2");
});
$(document).on("click", ".gt", function(){
    $(".lista li:gt(3)").css("background", "#4db6ac");
});
$(document).on("click", ".lt", function(){
    $(".lista li:lt(3)").css("background", "#e6ee9c");
});
$(document).on("click", ".head", function(){
    $(":header").css("background", "#ffd600");
});
$(document).on("click", ".not", function(){
    $(".lista li:not(:eq(3) )").not().css("background", "#d7ccc8");
});
$(document).on("click", ".texto", function(){
    $("li:contains('elemento')").css("background", "#ffab91");
});
$(".figura_1").click(function(){
    $(".figura_1").css({"background":"#e1bee7","color":"#fff"});
});
$(".figura_2").dblclick(function(){
    $(".figura_2").css({"background":"#ba68c8","color":"#fff"});
});
$(".figura_3").focus(function(){
    $(".figura_3").css({"background":"#9c27b0","color":"#fff"});
});
$(".figura_3").blur(function(){
    $(".figura_3").css({"background":"#663399","color":"#fff"});
});
$(".figura_4").focusin(function(){
    $(".figura_4").css({"background":"#ea80fc","color":"#fff"});
});
$(".figura_4").focusout(function(){
    $(".figura_4").css({"background":"#663399","color":"#fff"});
});
$(".figura_5").mousedown(function(){
    $(".displa_msj").text('mousedown');
});
$(".figura_5").mouseup(function(){
    $(".displa_msj").text('mouseup');
});
$(".figura_6").mouseover(function(){
    $(".msj").text('mouseover');
});
$(".figura_6").mouseout(function(){
    $(".msj").text('mouseout');
});
$(document).on("click", ".animate", function(){
    $(".cuadrado_1").animate({right: '250px',opacity: '0.5',height: '150px',width: '150px'});
    setTimeout(function(){  
        $(".cuadrado_1").remove();
        $(".wrapper_animations").append('<div class="cuadrado cuadrado_1"></div>');
    }, 3000);
});
$(document).on("click", ".fadeIn", function(){
    $(".cuadrado_2").fadeIn(3000);
    setTimeout(function(){  
        $(".cuadrado_2").remove();
        $(".wrapper_animations").append('<div class="cuadrado cuadrado_2"></div>');
    }, 5000);
});
$(document).on("click", ".fadeOut", function(){
    $(".cuadrado_3").fadeOut(3000);
    setTimeout(function(){  
        $(".cuadrado_3").remove();
        $(".wrapper_animations").append('<div class="cuadrado cuadrado_3"></div>');
    }, 5000);
});
$(document).on("click", ".fadeToggle", function(){
    $(".cuadrado_4").fadeToggle('quick');
});
$(document).on("click", ".ocultar", function(){
    $(".cuadrado_5").hide('quick');
});
$(document).on("click", ".mostrar", function(){
    $(".cuadrado_5").show('quick');
});
$(document).on("click", ".slideDown", function(){
    $(".cuadrado_6").slideDown();
});
$(document).on("click", ".slideUp", function(){
    $(".cuadrado_6").slideUp();
});
$(document).on("click", ".toggle", function(){
    $(".cuadrado_7").toggle();
});