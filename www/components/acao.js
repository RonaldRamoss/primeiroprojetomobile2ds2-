var v1 ,v2 ,op;

$(document).on("click","#nm1",function(){
 var nm1 = 1;
 var resu = $("#resultado").val();
 $("#resultado").val(resu + nm1);
});

$(document).on("click","#nm2",function(){
var resu = $("#resultado").val();
var nm2 =2;
$("#resultado").val(resu +nm2);
});

$(document).on("click","#nm3",function(){
var nm3 = 3;
var resu = $("#resultado").val();
$("#resultado").val(resu + nm3);
})

$(document).on("click","#nm4",function(){
var nm4 = 4;
var resu = $("#resultado").val();
$("#resultado").val(resu + nm4);
})

$(document).on("click","#nm5",function(){
var nm5 = 5;
var resu = $("#resultado").val();
$("#resultado").val(resu + nm5);
})

$(document).on("click","#nm6",function(){
var nm6 = 6;
var resu = $("#resultado").val();
$("#resultado").val(resu + nm6);

});

$(document).on("click","#nm7",function(){
var nm7 =7;
var resu = $("#resultado").val();
$("#resultado").val(resu + nm7);
})

$(document).on("click","#nm8",function(){
var nm8 = 8;
var resu = $("#resultado").val();
$("#resultado").val(resu + nm8);
})

$(document).on("click","#nm9",function(){
var nm9 = 9;
var resu = $("#resultado").val();
$("#resultado").val(resu + nm9); 
})

$(document).on("click","#soma",function(){

  v1 = parseFloat($("#resultado").val());
  $("#resultado").val("");
  op = "soma";
  $("#op").text($(this).val());
});

$(document).on("click","#subtracao",function(){
v1 = $("#resultado").val();
$("#resultado").val("");
op = "subtracao";
$("#op").text($(this).val());

});

$(document).on("click","#igual",function(){
  
    v2 = parseFloat($("#resultado").val());

    if(op =="soma"){
      $("#resultado").val(v1 + v2);
    }
    if(op=="subtracao"){
      $("#resultado").val(v1 - v2);
    }
  
})



$(document).on("click","#limpar",function(){

  $("#resultado").val("");

});