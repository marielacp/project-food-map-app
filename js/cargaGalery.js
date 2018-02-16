function begin() {
  var $container = $('.container-search');
  $('input').prop('disabled', true);  
  function showPoints() {
    var str = '';
    var template = '<figure>' +
      '<img class="img-fluid" src="__img__" alt="__alt__" data-pos="__pos__">' +
      '</figure>';

    $container.html('');
    for (var i = 0; i < data.length; i++) {            
        if(i===0){
          for (var j = 0; j < data[i]['platos'].length; j++) {
          str += template
            .replace('__img__', (data[i]['platos']).img)
            .replace('__alt__',(data[i]['platos']).nombrePlato)
            .replace('__pos__', j);           
        }         
      }
    }
    $container.html(str);    
  }   
  showPoints();
}
$(document).ready(begin);
