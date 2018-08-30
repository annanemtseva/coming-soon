$(document).ready(function () {

  $(document).click(function (e) {

    var target = $(e.target);
    if (target.is("#navbar-but") || target.parent('#navbar-but').length
    ) {

      if (!$('.navbar_menu-social-network').hasClass('navbar_menu-social-network-active')) {

        $(".navbar_menu_but-top").toggleClass("navbar_menu_but-top-active");
        $('.navbar_menu_but-midlle').toggleClass('navbar_menu_but-midlle-active');
        $('.navbar_menu_but-bottom').toggleClass('navbar_menu_but-bottom-active');
        $('.navbar_menu-social-network').toggleClass('navbar_menu-social-network-active');
      } else {

        $('.navbar_menu-social-network').removeClass('navbar_menu-social-network-active');
        $(".navbar_menu_but-top").removeClass("navbar_menu_but-top-active");
        $('.navbar_menu_but-midlle').removeClass('navbar_menu_but-midlle-active');
        $('.navbar_menu_but-bottom').removeClass('navbar_menu_but-bottom-active');
      }
    } else {
      $('.navbar_menu-social-network').removeClass('navbar_menu-social-network-active');
      $(".navbar_menu_but-top").removeClass("navbar_menu_but-top-active");
      $('.navbar_menu_but-midlle').removeClass('navbar_menu_but-midlle-active');
      $('.navbar_menu_but-bottom').removeClass('navbar_menu_but-bottom-active');
    }
  });


  $("#about_prod").on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 300);
    e.preventDefault();
    return false;
  });

  
  var contactForm = $('.form-email');
  if (contactForm.length > 0) {
    contactForm.on('submit', function () {
      var form = $(this);

      $.ajax({
        type: 'POST',
        url: 'mail.php',
        dataType: 'json',
        data: form.serialize(),
        success: function success(data) {
          if (data) {
            alert('Your message was sent to Art Nation. We will contact You shortly.');
          } else {
            alert('Something Went Wrong. Please try again later!');
          }
        },
        error: function error(xhr, ajaxOptions, thrownError) {
          // alert(xhr.status);
          // alert(thrownError);
          alert('Something Went Wrong. Please try again later!!!');
        },
      });
      return false;
    });
  }

});