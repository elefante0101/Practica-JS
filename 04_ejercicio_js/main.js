let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"]

//Cómo se inicia
$("document").ready(function(){
    $("#anuncio").text("¡CLICK! para cambiar de color")
    .width(500)
    .height(500)
    .hide()
    .fadeIn(3000)
});


$("#anuncio").on("click", function(){
    let color = colores[Math.floor(Math.random() * colores.length)];
    $("div").css("background",color);
});


//Colores aleatorios


