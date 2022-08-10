$(document).ready(function(){
  $('.grid__row-list').slick({
      slidesToShow: 5,
      slidesToScroll: 4,
      infinite:false,
      prevArrow:`<button type='button' class='slick-prev trai'> <i class="fa-solid fa-angle-left" ></i></button>`,
      nextArrow:`<button type='button' class='slick-next phai'> <i class="fa-solid fa-angle-right"></i></button`,
      responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
            arrows:false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows:false,
            }
          },
          {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              arrows:false,

              }
            }
      ]
  
  });
});