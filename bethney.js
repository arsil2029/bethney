
let navbar = document.querySelector('.navbar')

window.onscroll = function () {
  if (document.documentElement.scrollTop > 120) {
    navbar.classList.add('scroll')
  }
  else {
    navbar.classList.remove('scroll')
  }
}

let header = document.getElementById("navbarNav");
let btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// counting js



//    scroll button

let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

scrollToTopBtn.addEventListener("click", scrollToTop)

//   fillter gallary

$(document).ready(function () {

  $(".filter-button").click(function () {
    var value = $(this).attr('data-filter');

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $('.filter').show('1000');
    }
    else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');

    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");

});

// end

// slider home page
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

// theme color

let navspan = document.querySelectorAll('.nav-span');

navspan.forEach(color => {
  color.addEventListener('click', () => {
    let datacolor = color.getAttribute('data-color');
    document.querySelector(':root').style.setProperty('--green-bg', datacolor)
  });
});

new WOW().init();

let loder = document.querySelector('.preloder')
window.addEventListener("load",function(){
  loder.style.display = "none"
});







