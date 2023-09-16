$(document).ready(function () {
  $('.slider-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    adaptiveHeight: true
  });

  handleClickItemIcon = function (e) {
    const parentElement = e.currentTarget.parentElement;
    parentElement.classList.toggle('sp-show');
  };
  let number = 0;
  const awardYoutube = 218000;
  const awardTiktok = 423500;
  const awardFacebook = 224000;
  var intervalYoutube = setInterval(function () {
    number += 500;
    $('#award-youtube').text(
      number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    );
    if (number >= awardYoutube) clearInterval(intervalYoutube);
  }, 1);
  var intervalTiktok = setInterval(function () {
    number += 4000;
    $('#award-tiktok').text(
      number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    );
    if (number >= awardTiktok) clearInterval(intervalTiktok);
  }, 1);
  var intervalFacebook = setInterval(function () {
    number += 500;
    $('#award-facebook').text(
      number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    );
    if (number >= awardFacebook) clearInterval(intervalFacebook);
  }, 1);

  $('.customer-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    customPaging: function (slider, i) {
      return '<span class="slick-custom-bullet"></span>';
    },
  });

  $('.services-portfolios').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 575,
        settings: 'unslick',
      },
    ],
  });
  $(window).resize(function () {
    $('.services-portfolios').slick('unslick');
    $('.services-portfolios').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 575,
          settings: 'unslick',
        },
      ],
    });
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 333) {
      $('.button-scroll-up').addClass('active')
    } else {
      $('.button-scroll-up').removeClass('active')
    }
  });

  handleClickExpandedCategory = function (e) {
    const currentTarget = e.currentTarget;
    currentTarget.classList.toggle('expanded');
  };

  handleScrollToTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  handleExpandedContent = function (e) {
    var currentTarget = e.currentTarget;
    var paragraph = currentTarget.closest('.customer-body').querySelector('.customer-content');
    if (paragraph.classList.contains('expanded')) {
      paragraph.classList.remove('expanded');
      currentTarget.textContent = "Read more"
    } else {
      paragraph.classList.add('expanded');
      currentTarget.textContent = "Read less"
    }
  }

  const theme = localStorage.getItem("nhile-theme") || "light";
  document.documentElement.setAttribute("data-theme", theme);
  document.querySelector("#switch-theme").checked = theme === "light"
  if(theme === "dark") {
    document.querySelector("#header-logo-img").src = "./images/logo-light.jpeg"
  }

  handleChangeTheme = function (e) {
    var isChecked = e.target.checked;
    localStorage.setItem("nhile-theme", isChecked ? "light" : "dark");
    if(isChecked) {
      document.documentElement.setAttribute("data-theme", "light");
      document.querySelector("#header-logo-img").src = "./images/logo.png"
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      document.querySelector("#header-logo-img").src = "./images/logo-light.jpeg"
    }
  }
});
