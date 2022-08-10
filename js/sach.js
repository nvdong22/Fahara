


$(document).ready(function(){
  $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots:true,
      autoplay:true,
      autoplaySpeed:4000,
      prevArrow:`<button type='button' class='pull-left'> <i class="fa-solid fa-angle-left" ></i></button>`,
      nextArrow:`<button type='button' class='pull-right'> <i class="fa-solid fa-angle-right"></i></button`,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          arrows:false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          arrows:false,

          }
        },
        {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          arrows:false,
              
            }
          }
    ]
  });
});


$(document).ready(function(){
  $('.content_end-taitro').slick({
      slidesToShow: 8,
      slidesToScroll:4,
      infinite:false,
      prevArrow:`<button type='button' class='slick-left'> <i class="fa-solid fa-angle-left" ></i></button>`,
      nextArrow:`<button type='button' class='slick-right'> <i class="fa-solid fa-angle-right"></i></button`,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            }
          }
    ]
    });
  });
    

const showMore = document.getElementById("show-more");
const maxHeight = document.querySelector(".max-height");
const showLess = document.getElementById("show-less");
if (showMore) {
  showMore.onclick = () => {
    if (maxHeight) {
      maxHeight.style.maxHeight = "max-content";
      if (showLess) {
        showLess.style.display = "inline-block";
        showMore.style.display = "none";
      }
    }
  };
}
if (showLess) {
  showLess.onclick = () => {
    console.log("call show less");
    if (maxHeight) {
      maxHeight.style.maxHeight = "40px";
      if (showMore) {
        showLess.style.display = "none";
        showMore.style.display = "inline-block";
      }
    }
  };
}


console.log("ACD");

$(document).ready(function(){
  $('.grid__row-trend').slick({
      slidesToShow: 5,
      slidesToScroll: 4,
      draggable:false,
      infinite:false,
      prevArrow:`<button type='button' class='button-prev'> <i class="fa-solid fa-angle-left" ></i></button>`,
      nextArrow:`<button type='button' class='button-next'> <i class="fa-solid fa-angle-right"></i></button`,
      responsive: [
        {
          breakpoint: 2230,
          settings: {
            display:none,
          }
        },
          {
            breakpoint: 1230,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
      ]
  
  });
});

$('.content_game-header-list').slick({
  infinite: false,
  arrows:false,
  slidesToShow: 1,
  variableWidth: true
});
    

$('.content_list-header-bag').slick({
  infinite: false,
  arrows:false,
  slidesToShow: 1,
  variableWidth: true
});

$('.content_list-header-trend').slick({
  infinite: false,
  arrows:false,
  slidesToShow: 1,
  variableWidth: true
});





