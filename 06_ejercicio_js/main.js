//Para despejar el banner
$("#cerrar").on("click", function(){
    $("#banner").remove()
});

//Para añadir a carrito la imagen 1
$("#imagen1").on("click", function(){
    $("#imagen1").replaceWith("<div class='texto'>Agregado al carro</div>")
});


//Para añadir a carrito la imagen 2
$("#imagen2").on("click", function(){
    $("#imagen2").replaceWith("<div class='texto'>Agregado al carro</div>")
});


//Para añadir a carrito la imagen 3
$("#imagen3").on("click", function(){
    $("#imagen3").replaceWith("<div class='texto'>Agregado al carro</div>")
});


//Para añadir a carrito la imagen 4
$("#imagen4").on("click", function(){
    $("#imagen4").replaceWith("<div class='texto'>Agregado al carro</div>")
});