var text1 = 'Vengo de la variable text1 y estoy en comillas SENCILLAS: Escribe un numero';
var text2 = "Vengo de la variable text2 y estoy en comillas DOBLES: Escribe un numero";
document.getElementById('text1').innerHTML = text1;
$(document).on("submit", "#subir_numero", function(e){
    e.preventDefault();
    $("#text1Result").html("Hola vengo del input de la izquierda y soy el número: <b>" + $("#first_text").val() + "</b>");
});
$(document).on("click", "#lanza_prompt", function(){
    var mensaje;
    var opcion = prompt(text2);
    if (opcion == null || opcion == "") {
        mensaje = "Has cancelado o introducido un valor vacío";
    } else {
        mensaje = "Hola vengo de prompt <b>" + opcion + "</b>";
    }
    document.getElementById("text2Result").innerHTML = mensaje;
});
$(document).on("click", "#lanza_alert", function(){
    for(var i = 1; i <= 3; i++){
        alert("Soy el mensaje numeró " + i + " del ciclo for ");
    } 
});
$(document).on("click", "#recorrer_array", function(){
    var soyUnArray = ["Elmento 1, posición 0", "Elmento 2 posición 1", "Elmento 3 posición 2", "Elmento 4 posición 3"];
    for(i in soyUnArray){
        alert(soyUnArray[i]);
    }
});
$(document).on("click", "#recorrer_colores", function(){
    var colores=["Rojo", "Verde", "Azul", "Negro"], i = 0; 
    while(i < colores.length  ){
        alert(colores[i]);
        i++
    }
});

function Animal(nombre, especie, numerodepatas, tienecola) { 
    //Variables privadas 
    var _nombreCompleto; var _color; 
    // Propiedades 
    this.Nombre = nombre; 
    this.Especie = especie; 
    this.NumeroDePatas = numerodepatas; 
    this.TieneCola = tienecola; 
    // Metodos 
    this.setColor = function (color) { 
        _color = color; 
    } 
    this.getColor = function () { 
        return _color; 
    } 
    this.setNombreCompleto = function() { 
        _nombreCompleto = "Este Animal es un " + this.Nombre + " de la especie de los " + this.Especie; 
    } 
    this.getNombreCompleto = function() { 
        this.setNombreCompleto(); 
        return _nombreCompleto; 
    } 
}

function Vaca(nombre, especie, numerodepatas, tienecola, lecherestante) {   
    Animal.call(this,nombre, especie, numerodepatas, tienecola); 
    this.LecheRestante = lecherestante; 
    //Metodos 
    this.ordenhar = function (litros) { 
        this.LecheRestante -= litros; 
    } 
} 
Vaca.prototype = new Animal(); 

function Tigre(nombre, especie, numerodepatas, tienecola, victimas) {
    Animal.call(this,nombre, especie, numerodepatas, tienecola); 
    this.Victimas = victimas; 
    // Metodos 
    this.comerpersonas = function (victimas) { 
        this.Victimas += victimas; 
    } 
} 
Tigre.prototype = new Animal();
$(document).ready(function () {
    $(document).on("click", "#herencia", function(){
        // Creo una vaca y la orde&ntilde;o
        var animal = new Vaca("Antonia", "Rumiantes", 4, true, 50);
        $("#wrapper_herencia").append($("<p></p>").html("Creo la vaca: " + JSON.stringify(animal)));
        animal.ordenhar(20);
        $("#wrapper_herencia").append($("<p></p>").html("Si le ordeño 20 litros la vaca queda: " + JSON.stringify(animal)));
        $("#wrapper_herencia").append($("<p></p>").html("Como puedo comprobar he creado una vaca llamando al constructor de la superclase y le he quitado 20 litros de leche").css("color","green"));
        
        //Recupero el nombre completo de la vaca
        $("#wrapper_herencia").append($("<p></p>").html("El nombre completo de la vaca es: " + animal.getNombreCompleto()));
        $("#wrapper_herencia").append($("<p></p>").html("He recuperado el nombre completo, esto demuestra que puedo acceder a los métodos de la superclase").css("color","green"));
        
        //Modifico el color de la vaca
        animal.setColor("Blanca y Negra");
        $("#wrapper_herencia").append($("<p></p>").html("El color de la vaca es: " + animal.getColor()));
        $("#wrapper_herencia").append($("<p></p>").html("He cambiado el color de la vaca accediendo tambien a metodos de la superclase").css("color","green"));			
        $("#wrapper_herencia").append($("<p></p>").html("Ademas se ve como mantengo el estado de las variables privadas").css("color","green"));			
        
        //Creo un tigre
        var animal2 = new Tigre("Pedro", "Felinos", 4, true, 0);
        $("#wrapper_herencia").append($("<p></p>").html("Creo el Tigre:" + JSON.stringify(animal2)));
        
        //El tigre se come a tres personas
        animal2.comerpersonas(3);
        $("#wrapper_herencia").append($("<p></p>").html("El numero de victimas del Tigre es: " + animal2.Victimas).css("color","green"));
        $("#wrapper_herencia").append($("<p></p>").html("He creado un Tigre que se ha comido a tres personas").css("color","green"));			
        
    });
});