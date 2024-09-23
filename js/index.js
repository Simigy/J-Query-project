/// <reference types="../@types/jquery"/>



$('#main .openbtn').on('click' , function(){
$('#leftMenu').width ("250px") , $('#main').css("marginLeft") = "250px";
})

$('#leftMenu .closebtn').on('click' , function(){
  $('#leftMenu').width ("0") , $('#main').css("marginLeft") = "0";
  })

 
 
      
  $(function() {
	
    //BEGIN
    $("h3").on("click", function(e) {
  
      e.preventDefault();
      var $this = $(this);
  
      if (!$this.hasClass("accordion-active")) {
        $("p").slideUp(400);
        $("h3").removeClass("accordion-active");
        $('.accordion__arrow').removeClass('accordion__rotate');
      }
  
      $this.toggleClass("accordion-active");
      $this.next().slideToggle();
      $('.accordion__arrow',this).toggleClass('accordion__rotate');
    });
    //END
  });
  
 

 

  $('#count').countdown('2030/01/01', function(event) {
    $('.days').html(event.strftime('%D D'));
    $('.hours').html(event.strftime('%H h '));
    $('.minutes').html(event.strftime('%M m '));
    $('.seconds').html(event.strftime('%S s'));
  });
  