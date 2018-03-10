//Para ocultar el cuadro de texto
$("document").ready(function(){
    $("#mensaje_img1").hide()
});


$("img").hover(function(){
    $("#mensaje_img1").show();
}, function(){
    $("#mensaje_img1").hide();
});