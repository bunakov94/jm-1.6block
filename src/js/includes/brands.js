import debounce from '../includes/debounce'
import Swiper, { Pagination } from 'swiper';
Swiper.use( Pagination);

//=======================Слайдер=========================

let brandsSwiper = undefined;

const returnedFunction = debounce(function () {

    if (window.matchMedia("(max-width: 767px)").matches && brandsSwiper === undefined) {

        brandsSwiper = new Swiper('.brands-slider', {
            init: false,
            loop: true,
            slidesPerView: 1.25,
            loopedSlides: 0,
            spaceBetween: 16,
            breakpoints: {
                480: {
                    slidesPerGroup: 2,
                    slidesPerView: 2,
                    dynamicMainBullets: true
                }
            },
            pagination: {
                el: '.brands-pagination',
                clickable: true
            }
        });

        brandsSwiper.init();

    } else if (window.matchMedia("(max-width: 767px)").matches && brandsSwiper !== undefined) {
        brandsSwiper.pagination.render();
        brandsSwiper.pagination.update();

    } else if (brandsSwiper !== undefined) {
        brandsSwiper.destroy();
        brandsSwiper = undefined;
    }
}, 250);

returnedFunction();
window.addEventListener('resize', returnedFunction);

//=======================Скриваем/Показываем кнопки=========================

const hideElement = debounce(function () {
    let brands = Array.from(document.getElementsByClassName("brands-slider__item--hidden"));

    brands.forEach(function (brand) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            brand.classList.remove("visually-hidden");
        } else {
            brand.classList.add("visually-hidden");
        }
    });
}, 250);

hideElement();
window.addEventListener('resize', hideElement);

//============Show more btn===============================================

let btn = document.getElementById("show-more-brands");

btn.addEventListener("click", function () {
    btn.classList.toggle("show-more__btn--active");
    console.log('btn');
    if (btn.classList.contains("show-more__btn--active")) {
        btn.innerHTML = "Скрыть";
    } else {
        btn.innerHTML = "Показать всё";

    }
});

//=======================Скриваем/Показываем элементы=========================
let brands = Array.from(document.getElementsByClassName("brands-slider__item"));

btn.addEventListener("click", function () {
    showMore();
});

const showMore = debounce(function () {

    if (window.matchMedia("(max-width: 767px)").matches) {
        brands.forEach(function (brand, i) {
            brand.style.display = "flex"
        })
    } else if (window.matchMedia("(min-width: 768px) and (max-width: 1119px)").matches) {
        if (btn.classList.contains("show-more__btn--active")) {
            brands.forEach(function (brand, i) {
                if (i > 5) {
                    brand.style.display = "flex"
                }
            })
        } else {
            brands.forEach(function (brand, i) {
                if (i > 5) {
                    brand.style.display = "none"
                }
            })
        }
    } else if (window.matchMedia("(min-width: 1120px)").matches) {

        if (btn.classList.contains("show-more__btn--active")) {
            brands.forEach(function (brand, i) {

                if (i > 7) {
                    brand.style.display = "flex"
                }
            })
        } else {
            brands.forEach(function (brand, i) {

                brand.style.display = "flex";
                if (i > 7) {
                    brand.style.display = "none"
                }
            })
        }
    }
}, 100);

window.addEventListener('resize', showMore);
