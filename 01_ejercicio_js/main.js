//Para colocar el ratón sobre la imagen
$("#img1").on("mouseover", function(){
    $("#img1").attr("src","img/rio.jpg");
});

//Al sacar el ratón de la imagen
$("#img1").on("mouseout", function(){
    $("#img1").attr("src","img/arbol.jpg");
});