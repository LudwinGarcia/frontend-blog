// Javascript Code.
$(document).ready(function () {
// $.get("_posts/2014-11-09.json", function(data){
//
// var posts = JSON.parse(data);
// $(".posts").html(posts['posts'][0]['title']);
//
// });
$(this).load("https://raw.githubusercontent.com/LudwinGarcia/frontend-blog/master/_posts/posts.json", function(data){
var posts = JSON.parse(data);
$(".posts").html(posts['posts'][0]['content']);
$(".posts2").html(posts['posts'][1]['content']);
$(".posts3").html(posts['posts'][2]['content']);
$(".posts4").html(posts['posts'][3]['content']);
$(".posts5").html(posts['posts'][4]['content']);
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
//******************** boton 2 post related to human envy...!!******************
$(document).ready(function() {
$('.boton2').click(function() {
$('.cuerpo').hide('slow');
$('.posts').show('slow');
$('.post_uno').show('slow');
$('.coment_uno').show('slow');
});
});
//******************************************************************************
//******************* boton 3 post related to human strength...!!***************
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
//*********************boton 4 post related the story of Naruto*****************
$(document).ready(function() {
$('.boton4').click(function() {
$('.cuerpo').fadeOut('slow');
$('.posts3').show('slow');
$('.post_tres').show('slow');
$('.coment_tres').show('slow');

});
});
//******************************************************************************
//*********************boton 5 post related cognits values**********************
$(document).ready(function() {
$('.boton5').click(function() {
$('.cuerpo').fadeOut('slow');
$('.posts4').show('slow');
$('.post_cuatro').show('slow');
$('.coment_cuatro').show('slow');
$('.post_extras').hide('slow');
});
});

//******************************************************************************
//******************** boton 6 post related to test personality...!!******************
$(document).ready(function() {
$('.boton6').click(function() {
$('.cuerpo').hide('slow');
$('.posts5').show('slow');
$('.post_cinco').show('slow');
$('.coment_cinco').show('slow');
$('.post_extras').hide('slow');
});
});
//******************************************************************************
//******************** boton post uno dos y tres retorno ***********************
$(document).ready(function() {
$('.boton_post_uno_retorno').click(function() {
$('.posts').hide('slow');
$('.cuerpo').show('slow');
$('.post_uno').hide('slow');
$('.coment_uno').hide('slow');


});
});
//******************************************************************************
//******************** boton post cuatro retorno ***********************
$(document).ready(function() {
$('.boton_post_cuatro_retorno').click(function() {
$('.posts4').hide('slow');
$('.cuerpo').show('slow');
$('.post_cuatro').hide('slow');
$('.coment_cuatro').hide('slow');


});
});
//******************************************************************************
//******************** boton post cinco retorno ***********************
$(document).ready(function() {
$('.boton_post_cinco_retorno').click(function() {
$('.posts5').hide('slow');
$('.cuerpo').show('slow');
$('.post_cinco').hide('slow');
$('.coment_cinco').hide('slow');


});
});
//******************************************************************************
//*********************boton  older post***************************************

$(document).ready(function() {
$('.boton_older').click(function() {
$('.cuerpo').fadeOut('slow');
$('.post_extras').show('slow');
$('.posts').hide('slow');
$('.posts2').hide('slow');
$('.posts3').hide('slow');
$('.posts4').hide('slow');
$('.posts5').hide('slow');
$('.post_uno').hide('slow');
$('.coment_uno').hide('slow');
$('.post_dos').hide('slow');
$('.coment_dos').hide('slow');
$('.post_tres').hide('slow');
$('.coment_tres').hide('slow');
$('.post_cuatro').hide('slow');
$('.coment_cuatro').hide('slow');
$('.post_cinco').hide('slow');
$('.coment_cinco').hide('slow');
});
});



//******************************************************************************
//************************** COMENTARIOS post uno*******************************
$(document).ready(function() {
    $('.boton-comentario-uno').click(function() {
      var toAdd = $("input[name=message]").val();
        $('.mensaje_uno').append("<p>"+toAdd+"</p>");
    });
});

//******************************************************************************
//************************** COMENTARIOS post dos*******************************
$(document).ready(function() {
    $('.boton-comentario-dos').click(function() {
      var toAdd = $("input[name=message2]").val();
        $('.mensaje_dos').append("<p>"+toAdd+"</p>");
    });
});

//******************************************************************************
//************************** COMENTARIOS post tres******************************
$(document).ready(function() {
    $('.boton-comentario-tres').click(function() {
      var toAdd = $("input[name=message3]").val();
        $('.mensaje_tres').append("<p>"+toAdd+"</p>");
    });
});
//******************************************************************************
//************************** COMENTARIOS post cuatro******************************
$(document).ready(function() {
    $('.boton-comentario-cuatro').click(function() {
      var toAdd = $("input[name=message4]").val();
        $('.mensaje_cuatro').append("<p>"+toAdd+"</p>");
    });
});
//******************************************************************************
//************************** COMENTARIOS post cinco******************************
$(document).ready(function() {
    $('.boton-comentario-cinco').click(function() {
      var toAdd = $("input[name=message5]").val();
        $('.mensaje_cinco').append("<p>"+toAdd+"</p>");
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
//***************************** boton older post********************************
//$(document).ready(function() {
//$('.post').mouseenter(function() {
//$(this).animate({
//height: '+=10px'
//});
//});
//$('.post').mouseleave(function() {
//$(this).animate({
//height: '-=10px'
//});
//});
//$('.post').click(function() {
//$(this).toggle(1000);
//});
//});
//******************************************************************************
//******************************************************************************
//******************************************************************************
});
