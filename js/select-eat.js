$(document).ready(function(){
var rutaLocal = '../assets/img/';
var arrImagenes = [
    { url: 'a-germinando-vida-1.jpg' },
    { url: 'b-abdiel-vegan-1.jpg' },
    { url: 'c-la-chacra-01.jpg' },
    { url: 'd-vrinda-peru-1.jpg' },
    ];
    var index = 0;
    var $mous = $('#btn-img');
    var $map = $('.map');
    var $img = $('#img');    
    var $select = $('#select-control');   
   var $prueba = $('#prueba')
  /*var $arrSelect = $.makeArray($select)
  console.log($.isArray($arrSelect)); 
  $.each($arrSelect, function (i, val) {
    $select.eq(i).on('click', function () {
      $img.attr('src', rutaLocal + arrImagenes[i].url);
    })
  });*/

/*$('.box-wrapper').mouseover(function () {
  $(this).find('.content').addClass('animate zoomIn').show();
}).mouseleave(function(){
$(this).find('.content').fadeOut();
});*/






  /*  $img.on('click',function(){
    if($img.attr('src', rutaLocal + arrImagenes[0].url)){

      window.location.href = 'register.html';
    }
    else if ($img.attr('src', rutaLocal + arrImagenes[1].url)){
      window.location.href = 'register.html';
    }
    else if ($img.attr('src', rutaLocal + arrImagenes[2].url)) {
      window.location.href = 'register.html';
    }
    else if ($img.attr('src', rutaLocal + arrImagenes[3].url)) {
      window.location.href = 'register.html';
    }
    })*/

    $select.change(function () {  
      $('#img').mouseover(function () {
        $(this).animate({
          opacity: 0.7,
          fontSize: "6em",
        }, 2000);
      });

      $('#img').mouseout(function () {
        $(this).animate({
          opacity: 1,

        });
      });
       
      if ($select.val() == "vegano-one") {     
       $img.attr('src', rutaLocal + arrImagenes[0].url)     
                
       }
      else if ($select.val() == "vegano-two") {      
          $img.attr('src', rutaLocal + arrImagenes[1].url)
       }
      else if ($select.val() == "vegano-three") {
                $img.attr('src', rutaLocal + arrImagenes[2].url)
              }     
      else if ($select.val() == "vegano-four") {
                       $img.attr('src', rutaLocal + arrImagenes[3].url)
                    }
        
});


/*$select.change(function () {

       if ($select.val()) {
         
         $img.attr('src', rutaLocal + arrImagenes(i).url)
       }

});*/
});
