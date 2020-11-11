import debounce from '../includes/debounce'
import Swiper, { Pagination } from 'swiper';
Swiper.use( Pagination);


let repairSwiper = undefined;

const returnedFunction = debounce(function () {

    if (window.matchMedia("(max-width: 767px)").matches && repairSwiper === undefined) {

        repairSwiper = new Swiper('.repair-slider', {
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
                el: '.repair-pagination',
                clickable: true
            }
        });

        repairSwiper.init();

    } else if (window.matchMedia("(max-width: 767px)").matches && repairSwiper !== undefined) {
        repairSwiper.pagination.render();
        repairSwiper.pagination.update();

    } else if (repairSwiper !== undefined) {
        repairSwiper.destroy();
        repairSwiper = undefined;
    }
}, 250);

returnedFunction();
window.addEventListener('resize', returnedFunction);

//=======================Скриваем/Показываем кнопки=========================

const hideElement = debounce(function () {
    let brands = Array.from(document.getElementsByClassName("repair-slider__item--hidden"));

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

let btn = document.getElementById("show-more-repair");

btn.addEventListener("click", function () {
    btn.classList.toggle("show-more__btn--active");

    if (btn.classList.contains("show-more__btn--active")) {
        btn.innerHTML = "Скрыть";
    } else {
        btn.innerHTML = "Показать всё";

    }
});

//=======================Скриваем/Показываем элементы=========================
let brands = Array.from(document.getElementsByClassName("repair-slider__item"));

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
                if (i > 2) {
                    brand.style.display = "flex"
                }
            })
        } else {
            brands.forEach(function (brand, i) {
                if (i > 2) {
                    brand.style.display = "none"
                }
            })
        }
    } else if (window.matchMedia("(min-width: 1120px)").matches) {

        if (btn.classList.contains("show-more__btn--active")) {
            brands.forEach(function (brand, i) {

                if (i > 3) {
                    brand.style.display = "flex"
                }
            })
        } else {
            brands.forEach(function (brand, i) {

                brand.style.display = "flex";
                if (i > 3) {
                    brand.style.display = "none"
                }
            })
        }
    }
}, 100);

window.addEventListener('resize', showMore);
