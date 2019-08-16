var objeto_html = document.documentElement;
var objeto_head = objeto_html.childNodes[0];
var objeto_body = objeto_html.childNodes[1];
var objeto_firts = objeto_html.firstChild;
var objeto_last = objeto_html.lastChild;
var objeto_nextSibling = objeto_head.nextSibling;
var objeto_previousSibling = objeto_body.previousSibling;
var objeto_parentNode = objeto_head.parentNode;

$(document).on("click", "#lanzar_dom", function(){
    console.log(objeto_html);
});
$(document).on("click", "#lanzar_head", function(){
    console.log(objeto_head);
});
$(document).on("click", "#firts_child", function(){
    console.log(objeto_firts);
});
$(document).on("click", "#last_child", function(){
    console.log(objeto_last);
});
$(document).on("click", "#next_child", function(){
    console.log(objeto_nextSibling);
});
$(document).on("click", "#previousSibling", function(){
    console.log(objeto_previousSibling);
});
$(document).on("click", "#parentNode", function(){
    console.log(objeto_parentNode);
});
$(document).on("click", "#get_id", function(){
    var p = document.getElementById("parrafo");
    var elId = p.getAttribute("id");
    console.log("El ID del la etiqueta p es: " + elId);
});
$(document).on("click", "#get_tagname", function(){
    var parrafos = document.getElementsByTagName("p");
    var primerParrafo = parrafos[0];
    console.log(primerParrafo);
});
$(document).on("click", "#get_class", function(){
    var parrafo = document.getElementById("parrafo");
    console.log(parrafo.className); // muestra "normal"
});