// Javascript Code.
$(document).ready(function () {
// $.get("_posts/2014-11-09.json", function(data){
//
// var posts = JSON.parse(data);
// $(".posts").html(posts['posts'][0]['title']);
//
// });
$(this).load("_posts/posts.json", function(data){
var posts = JSON.parse(data);
$(".posts").html(posts['posts'][0]['content']);
$(".posts2").html(posts['posts'][1]['content']);
$(".posts3").html(posts['posts'][2]['content']);
//
//*****************************************************************************
//************************** ocultar cuerpo ***********************************
});
$(document).ready(function() {
$('.boton').click(function() {
$('.cuerpo').fadeOut('slow');
});
});
//******************************************************************************
//*************************** boton 2 ******************************************
$(document).ready(function() {
$('.boton2').click(function() {
$('.cuerpo').hide('slow');
$('.posts').show('slow');
$('.post_uno').show('slow');
$('.coment_uno').show('slow');
});
});
//******************************************************************************
//*************************** boton 3 ******************************************
$(document).ready(function() {
$('.boton3').click(function() {
$('.cuerpo').fadeOut('slow');
$('.posts2').show('slow');
$('.post_dos').show('slow');
$('.post-comentario-dos').show('slow');
$('.coment_dos').show('slow');
});
});
//******************************************************************************
//*************************** boton 4 ******************************************
$(document).ready(function() {
$('.boton4').click(function() {
$('.cuerpo').fadeOut('slow');
$('.posts3').show('slow');
$('.post_tres').show('slow');
$('.coment_tres').show('slow');
});
});
//******************************************************************************

//******************************************************************************
//***************************** boton older post********************************

$(document).ready(function() {
$('.post').mouseenter(function() {
$(this).animate({
height: '+=10px'
});
});
$('.post').mouseleave(function() {
$(this).animate({
height: '-=10px'
});
});
$('.post').click(function() {
$(this).toggle(1000);
});
});

//******************************************************************************
//*****************************boton buscar*************************************

$(document).ready(function() {
    $('input').focus(function() {
        $(this).css('outline-color', '#FF0000');
    });
});
//******************************************************************************
//******************************************************************************

//******************************************************************************
//************************** COMENTARIOS post uno*******************************
$(document).ready(function() {
    $('.boton-comentario-uno').click(function() {
      var toAdd = $("input[name=message]").val();
        $('.mensaje_uno').append("<p>"+toAdd+"</p>");
    });
});
//******************************************************************************
//******************************************************************************

//******************************************************************************
//************************** COMENTARIOS post dos*******************************
$(document).ready(function() {
    $('.boton-comentario-dos').click(function() {
      var toAdd = $("input[name=message2]").val();
        $('.mensaje_dos').append("<p>"+toAdd+"</p>");
    });
});
//******************************************************************************
//***************************   BUSCADOR****************************************
$.expr[':'].icontains = function(obj, index, meta, stack){
return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
};
$(document).ready(function(){  
    $('#buscador').keyup(function(){
                 buscar = $(this).val();
                 $('#lista p').removeClass('resaltar');
                        if(jQuery.trim(buscar) != ''){
                           $("#lista p:icontains('" + buscar + "')").addClass('resaltar');
                        }
        });
});  

//******************************************************************************
//******************************************************************************


//******************************************************************************
//************************** COMENTARIOS post tres******************************
$(document).ready(function() {
    $('.boton-comentario-tres').click(function() {
      var toAdd = $("input[name=message3]").val();
        $('.mensaje_tres').append("<p>"+toAdd+"</p>");
    });
});
//******************************************************************************
//**************************buscador*************************************

//******************************************************************************
//******************************** PROBANDO*************************************
$(document).ready(function() {
$('div.menu>div').hide();
})
//******************************************************************************


//******************************************************************************
//******************************************************************************
});