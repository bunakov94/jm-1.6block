import debounce from '../includes/debounce'
import Swiper, { Pagination } from 'swiper';
Swiper.use( Pagination);

//=======================Слайдер=========================

let priceSwiper = undefined;

const returnedFunction = debounce(function () {

    if (window.matchMedia("(max-width: 767px)").matches && priceSwiper === undefined) {

        priceSwiper = new Swiper('.price-slider', {
            init: false,
            loop: true,
            slidesPerView: 1.18,
            loopedSlides: 0,
            spaceBetween: 16,
            breakpoints: {
                560: {
                    slidesPerGroup: 2,
                    slidesPerView: 2,
                    dynamicMainBullets: true
                }
            },
            pagination: {
                el: '.price-pagination',
                clickable: true
            }
        });

        priceSwiper.init();

    } else if (window.matchMedia("(max-width: 767px)").matches && priceSwiper !== undefined) {
        priceSwiper.pagination.render();
        priceSwiper.pagination.update();

    } else if (priceSwiper !== undefined) {
        priceSwiper.destroy();
        priceSwiper = undefined;
    }
}, 250);

returnedFunction();
window.addEventListener('resize', returnedFunction);
