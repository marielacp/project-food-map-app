$(document).ready(function(){
$('.featured').hover(function(){
  hdesc = $(this).find('.desc').height()+28;
  $(this).find('.tittle').animate({'bottom':hdesc})
  $(this).find('.desc').fadeIn()
  $(this).find('.tittle').css({'padding-bottom':'0'})

},function(){
  $(this).find('.tittle').css({ 'padding-bottom': '16px' })
  $(this).find('.tittle').animate({ 'bottom':'0' })
  $(this).find('.desc').fadeOut()

});
});