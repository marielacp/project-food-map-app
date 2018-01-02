$(document).ready(function(){
  var rutaLocal = '../assets/img/';
  var arrImagenes = [
    { url: 'gv.jpg' },
    { url: 'yv.jpg' },
    { url: 'av.jpg' },
    { url: 'sr.png' },
    { url: 'sv.png' },
  ];
  var index = 0;
  var $img = $('#img');    
  var $select = $('#select-control');     
  var $featured = $('.cont-img');
  /* Agregando eventos mouseover y recorriendo el select */
  $select.change (function () {  
    $('.featured').mouseover(function () {
      $(this).find('.title').fadeIn()
      $(this).find('.title').animate({ 'top': '0' })
      $(this).find('.title').animate({ 'left': '70%' })
      }).mouseout(function () {
      $(this).find('.title').fadeOut();
      });       
        if ($select.val() == "vegano-one") {     
          $img.attr('src', rutaLocal + arrImagenes[0].url)
          window.location.href = 'colecction-germinando-vida.html';  
          }
      else if ($select.val() == "vegano-two") {      
          $img.attr('src', rutaLocal + arrImagenes[1].url)
        window.location.href = 'colecction-yami-vegetal.html';
       }
      else if ($select.val() == "vegano-three") {
        $img.attr('src', rutaLocal + arrImagenes[2].url)
        window.location.href = 'colecction-abdiel-vegetal.html';
              }     
      else if ($select.val() == "vegano-four") {
          $img.attr('src', rutaLocal + arrImagenes[3].url)
        window.location.href = 'colecction-sagra-restaurant.html';
                    } 
      else if ($select.val() == "vegano-five") {
        $img.attr('src', rutaLocal + arrImagenes[4].url)
        window.location.href = 'colecction-sabor-vida.html';
      }               
});
//Agregando efecto a galeria de imagenes
  $('.featured').hover(function () {
    hdesc = $(this).find('.desc').height() + 28;
    $(this).find('.tittle').animate({ 'bottom': hdesc })
    $(this).find('.desc').fadeIn()
    $(this).find('.tittle').css({ 'padding-bottom': '0' })
  }, function () {
    $(this).find('.tittle').css({ 'padding-bottom': '16px' })
    $(this).find('.tittle').animate({ 'bottom': '0' })
    $(this).find('.desc').fadeOut()
  });
});
