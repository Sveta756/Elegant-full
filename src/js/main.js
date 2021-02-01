$(document).ready(function(){


  $('.icon').click(function() {
    $('.icon').toggleClass('active');
    $('.header__nav').toggleClass('show');
    if ($('.header__nav').hasClass('show')) {
      $('.overlay').fadeIn();
      $('.icon').css('position','fixed');
      $('.header__text').css('display', 'none');
    } else {
      $('.overlay').fadeOut();
      $('.header__text').css('display', 'block');
      $('.icon').css('position','absolute');
    }
  });

      $('.btn_mini').click(function() {
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        );
      });
});
