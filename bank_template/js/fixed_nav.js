if ($(window).width() > 992) {
    $(window).scroll(function(){  
        // $('.okkk').hide();
       if ($(this).scrollTop() > 40) {
         
          $('#navbar_top').addClass("fixed-top");
         
          // add padding top to show content behind navbar
          $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        }else{
          $('#navbar_top').removeClass("fixed-top");
        //   $('.okkk').show();
           // remove padding top from body
          $('body').css('padding-top', '0');
        }   
    });
  } 