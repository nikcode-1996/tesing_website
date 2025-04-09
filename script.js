
document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.querySelector(".back-to-top");

    // Show/hide button on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = "1";
            backToTopBtn.style.visibility = "visible";
        } else {
            backToTopBtn.style.opacity = "0";
            backToTopBtn.style.visibility = "hidden";
        }
    });

    // Smooth scroll to top
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('nav');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


  $(document).ready(function(){
    $("#owl_testimonials").owlCarousel({
      items: 1,
      loop: true,
      margin: 40,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      dots: true,
      nav: false,
      responsive: {
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  });

  $(document).ready(function(){
    $("#import_car").owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      dots: false,
      nav: false,
      responsive: {
        768: {
          items: 1
        },
        992: {
          items: 1
        }
      }
    });
  });

  $(document).ready(function(){
    $("#export_car").owlCarousel({
      items: 1,
      loop: true,
      margin: 40,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      dots: false,
      nav: false,
      responsive: {
        768: {
          items: 1
        },
        992: {
          items: 1
        }
      }
    });
  });
  
  