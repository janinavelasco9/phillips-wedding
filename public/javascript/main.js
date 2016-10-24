$( document ).ready(function() {
    $(function(){
       $("a").each(function(){
           if ($(this).attr("href") == window.location.pathname){
                   $(this).addClass("active");
           }
       });

       $('.js-mobile-nav').on('click', function(e) {
              e.preventDefault();
              $('.nav').slideToggle();
        });
    });

    //material contact form animation
    $('.form').find('.text-input').each(function() {
      var targetItem = $(this).parent();
      if ($(this).val()) {
        $(targetItem).find('label').css({
          'top': '10px',
          'fontSize': '14px'
        });
      }
    })
    $('.form').find('.text-input').focus(function() {
      $(this).parent('.input-field').addClass('focus');
      $(this).parent().find('label').animate({
        'top': '10px',
        'fontSize': '14px'
      }, 300);
    })
    $('.form').find('.text-input').blur(function() {
      if ($(this).val().length == 0) {
        $(this).parent('.input-field').removeClass('focus');
        $(this).parent().find('label').animate({
          'top': '25px',
          'fontSize': '1.15rem'
        }, 300);
      }
    })
});
