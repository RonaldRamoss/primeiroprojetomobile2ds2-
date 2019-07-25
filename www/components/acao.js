$(document).on("click","#btnsoma",function(){
var valor1 = $("#valor1").val();
var valor2 = $("#valor2").val();
var resul = parseFloat(valor1) + parseFloat(valor2);
$("#resultado").val(resul);


})

