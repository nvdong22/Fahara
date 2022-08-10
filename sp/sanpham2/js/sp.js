$(document).ready(function(){
    $('.grid__row-same').slick({
        slidesToShow: 5,
        slidesToScroll: 4,
        
        infinite:false,
        prevArrow:`<button type='button' class='slick-prev pull-left'> <i class="fa-solid fa-angle-left" ></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'> <i class="fa-solid fa-angle-right"></i></button`,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
              
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
        maxHeight.style.maxHeight = "70px";
        if (showMore) {
          showLess.style.display = "none";
          showMore.style.display = "inline-block";
        }
      }
    };
  }
  console.log("ACD");
  

  $(document).ready(function(){
    $('.content_sale-list-ticket').slick({
        slidesToShow: 3,
        infinite:false,
        arrows:false,
        prevArrow:`<button type='button' class='slick-prev pull-left'> <i class="fa-solid fa-angle-left" ></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'> <i class="fa-solid fa-angle-right"></i></button`,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          },
          {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
              }
            }
      ]
    });
  });