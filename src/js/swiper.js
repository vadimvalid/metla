import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 20,
  slidesPerView: 'auto',
  breakpoints: {
    // when window width is >= 768px
    768: {
      spaceBetween: 20,
    },
  },
});

const swiperReviews = new Swiper('.swiper-reviews', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      spaceBetween: 20,
    },
  },
});
