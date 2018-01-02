$(document).ready(function() {
  var ruta = '../assets/img/yv2/';
  var arrImagenes = [{ url: 'yv1.jpg' },
    { url: 'yv2.jpg' },
    { url: 'yv3.jpg' },
    { url: 'yv4.jpg' },
    { url: 'yv5.jpg' }
  ];
  var index = 0;
  /* Declarando variables */
  var $img = $('#img');
  var $slider = $('.slider');
  var $divControl = $('.controles');

  /* Inicializamos con la primera imagen */
  $img.attr('src', ruta + arrImagenes[0].url);

  /* Creamos botones para cada imagen del array */
  for (var i in arrImagenes) {
    $divControl.append('<button class="control"/>');
  }

  /* Creo la variable jquery con los botones de la clase control */
  var $buttonControl = $('button.control');
  console.log($buttonControl);
  /* Como necesito recorrerlo entonces requiero que sea un array, por lo tanto utilizo el método jQuery.makeArray */
  /* que es lo mismo que $.makeArray */
  var $arrButton = $.makeArray($buttonControl);
  /* Compruebo si efectivamente es un array con el método jQuery.isArray que es lo mismo que $.isArray */    
  console.log($.isArray($arrButton));
  /* Ahora recorro el array de los botones para que al momento de dar click en el boton de control cambie la imagen */ 
  /* correspondiente según el indice, para ello, se utiliza el método jQuery.each que es lo mismo que $.each */
  $.each($arrButton, function(i, val) {
    $buttonControl.eq(i).on('click', function() {
      $img.attr('src', ruta + arrImagenes[i].url);
    });
  });

  /* Cuando se escuche el click en los botones de back y next */
  $slider.on('click', '#next', function(event) {
    event.preventDefault();
    index++;
    index = (index >= arrImagenes.length) ? 0 : index;
    $img.attr('src', ruta + arrImagenes[index].url);
  });

  $slider.on('click', '#back', function(event) {
    event.preventDefault();
    index--;
    index = (index < 0) ? arrImagenes.length - 1 : index;
    $img.attr('src', ruta + arrImagenes[index].url);
  });
});

