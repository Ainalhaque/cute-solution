
AOS.init();

// Move to top button

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}






// start sticky navbar////

window.addEventListener('scroll',function (){
    let navbar = document.querySelector('nav');
    if(this.window.pageYOffset > 0){
        navbar.classList.add('sticky_nav');
    }
    else{
        navbar.classList.remove('sticky_nav');
    }
});

// end sticky navbar////



// hero swiper start ////

var swiper1 = new Swiper(".mySwiper1", {
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: true,
    speed: 2500,
  });

// hero swiper start ////


// Button Hover JS start ///

$(function() {
  $('.default-btn, .default-btn-one')
  .on('mouseenter', function(e) {
      var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
  })
  .on('mouseout', function(e) {
      var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
  });
});

// Button Hover JS end ///


//gallery start js
$ (document) .ready (function(){
  $('.buttons').click(function(){

      $(this).addClass('active').siblings().removeClass('active');

      var filter = $(this).attr('data-filter')

      if(filter == 'all') {
          $('.images').show(400);
      } else{
          $('.images').not('.'+filter).hide(300);
          $('.images').filter('.'+filter).show(400);
      }
  });

  $('.gallery').magnificPopup({

      delegate: 'a',
      type: 'image',
      gallery: {
          enabled: true
      }
  });
});
//gallery end js


// progress bar

// Get all elements with class ".progress" and ".text"
// Define array of target percentages for each progress bar
let targets = [95, 80, 60]; // Add more percentages as needed

// Get all elements with class ".progress" and ".text"
let bars = document.querySelectorAll(".progress");
let texts = document.querySelectorAll(".text");

// Initialize counters and intervals

let per = 6;
let red = setInterval(() => {
    // Iterate over each progress bar
    bars.forEach((bar, index) => {
        // Calculate current target percentage
        let target = targets[index];

        // Update percentage text
        let percentage = setInterval(() => {
            per += 1;
            if (per >= target) clearInterval(percentage);
            texts[index].innerHTML = `<p>${per}%</p>`;
        }, 100);

        // Update width of the progress bar
        let width = (per / 100) * target; // Calculate width relative to target
        bar.style.width = width + "%";
    });

    // Check if all progress bars have reached their targets
    if (per >= Math.max(...targets)) clearInterval(red);
}, 1000);

// progress bar end


// testimonial swiper

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });



// trust swiper slider

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },


  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});