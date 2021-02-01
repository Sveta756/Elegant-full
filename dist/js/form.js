$(document).ready(function(){
    $('.submit').on('click', function() {
        $('.overlay, #modal').fadeIn();
        $('.header__wrapper').css('z-index', '5');
    });
    $('form').submit(function(event) { 
        if ($('input').val() === "") {
          return false;
        } else {
          event.preventDefault(); 
          $('#modal').fadeOut();
          $('#thanks').fadeIn();
        }  
    });
      
      $('.modal__close').on('click', function() {
        $('.overlay, #modal, #thanks').fadeOut();
        $('.header__wrapper').css('z-index', '10');
        $('form')[0].reset();  //сбросить значения интуп при закрытии окна
      });

      $('.modal__form').validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true
          },
        }
      });


     



      
     

      $('input[name=phone]').mask("+7 (999) 999-99-99");
});


