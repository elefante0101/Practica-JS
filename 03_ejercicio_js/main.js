//Para añadir o quitar estilo al texto 1
$("#elem1").mouseover (function(){
    $("#elem1").addClass("destacar");
    $("img").attr("src","img/arbol.jpg").show();
});

$("#elem1").on("mouseout", function(){
    $("#elem1").removeClass("destacar");
    $("img").attr("src","img/arbol.jpg").hide();
});



//Para añadir o quitar estilo al texto 2
$("#elem2").mouseover (function(){
    $("#elem2").addClass("destacar");
    $("img").attr("src","img/lago.jpg").show();
});

$("#elem2").on("mouseout", function(){
    $("#elem2").removeClass("destacar");
    $("img").attr("src","img/lago.jpg").hide();
});



//Para añadir o quitar estilo al texto 3
$("#elem3").mouseover (function(){
    $("#elem3").addClass("destacar");
    $("img").attr("src","img/rio.jpg").show();
});

$("#elem3").on("mouseout", function(){
    $("#elem3").removeClass("destacar");
    $("img").attr("src","img/rio.jpg").hide();
});



//Para añadir o quitar estilo al texto 4
$("#elem4").mouseover (function(){
    $("#elem4").addClass("destacar");
    $("img").attr("src","img/sol.jpg").show();
});

$("#elem4").on("mouseout", function(){
    $("#elem4").removeClass("destacar");
    $("img").attr("src","img/sol.jpg").hide();
});
