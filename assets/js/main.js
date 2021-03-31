$(document).ready(function() {
  $('a.myLinkModal').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297,	function(){
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#myModal__close, #myOverlay').click( function(){
    $('#myModal').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });
});

$(document).ready(function() {
  $('a.myLinkModal2').click( function(event){
    event.preventDefault();
    $('#myOverlay2').fadeIn(297,	function(){
      $('#myModal2') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#myModal__close2, #myOverlay2').click( function(){
    $('#myModal2').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay2').fadeOut(297);
    });
  });
});

$(document).ready(function() {
  $('a.myLinkModal3').click( function(event){
    event.preventDefault();
    $('#myOverlay3').fadeIn(297,	function(){
      $('#myModal3') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#myModal__close3, #myOverlay3').click( function(){
    $('#myModal3').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay3').fadeOut(297);
    });
  });
});

