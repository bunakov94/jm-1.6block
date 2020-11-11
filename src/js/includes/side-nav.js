let open = document.getElementById('openMenu');
let close = document.getElementById('closeMenu');
let nav = document.getElementById('side-nav');
let main = document.getElementById('main');
const body = document.querySelector("body");


open.addEventListener('click', function () {
    nav.classList.add('side-nav--visible');
    main.classList.add('main-content--blured');
    body.style.position="fixed"
});

close.addEventListener('click', function () {
    nav.classList.remove('side-nav--visible');
    main.classList.remove('main-content--blured');
    body.style.position="static"
});