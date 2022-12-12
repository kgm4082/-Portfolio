// 커피베이 포트폴리오 메인 JS - main.js

$(() => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 사이즈별 슬라이드 개수, 간격 동적변경셋팅
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 200px
          200: {
              slidesPerView: 1,
              spaceBetween: 0,
          },
          740: {
              slidesPerView: 2,
              spaceBetween: 0,
          },
          // when window width is >= 700px
          1080: {
              slidesPerView: 3,
              spaceBetween: 10,
          },
          // when window width is >= 1000px
          1440: {
              slidesPerView: 4,
              spaceBetween: 20,
          },
          1800: {
            slidesPerView: 5,
              spaceBetween: 20,
          }

      },
        
      });
}); //////////////////// jQB ////////////////////