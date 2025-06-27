// Custom scripts for Seemati Mayiladuthurai static site 

// Smooth scroll for nav links and buttons
$(document).on('click', 'a.nav-link, .btn[href^="#"]', function(e) {
  var target = $(this.getAttribute('href'));
  if(target.length) {
    e.preventDefault();
    $('html, body').animate({scrollTop: target.offset().top - 70}, 700);
  }
});

// Fade/slide-in on scroll
function revealOnScroll() {
  $('.fade-in-up, .fade-in-zoom').each(function() {
    var elemTop = $(this).offset().top;
    var winBottom = $(window).scrollTop() + $(window).height();
    if(winBottom > elemTop + 100) {
      $(this).addClass('show');
    }
  });
}
$(window).on('scroll', revealOnScroll);
$(window).on('load', revealOnScroll);

// Extra: Animate floating icons
$('.floating-icon').each(function(i) {
  $(this).css('animation-delay', (i * 0.7) + 's');
});

// Simple contact form validation (if you add a form)
$(document).on('submit', '#contact-form', function(e) {
  var valid = true;
  $(this).find('input[required], textarea[required]').each(function() {
    if(!$(this).val()) {
      $(this).addClass('is-invalid');
      valid = false;
    } else {
      $(this).removeClass('is-invalid');
    }
  });
  if(!valid) {
    e.preventDefault();
    alert('Please fill all required fields.');
  }
});

// Add hover-zoom and card-hover-shadow classes to cards/images
$(function() {
  $('.card').addClass('card-hover-shadow');
  $('img').addClass('hover-zoom');
  $('.gallery-img').addClass('hover-zoom');
}); 