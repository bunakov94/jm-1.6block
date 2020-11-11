let callOpenHeaderButton = document.getElementById("callHeaderOpen");
let callOpenSideButton = document.getElementById("callOpenSide");
let callCloseButton = document.getElementById("callClose");
let callModal = document.getElementById("call");
let main = document.getElementById('main');
let nav = document.getElementById('side-nav');
const body = document.querySelector("body");

function callOpen() {
    callModal.classList.add("call-modal--visible");
    main.classList.add('main-content--blured');
    nav.classList.add('side-nav--blured');
    body.style.position="fixed"
}

function callClose() {
    callModal.classList.remove("call-modal--visible");
    main.classList.remove('main-content--blured');
    nav.classList.remove('side-nav--blured');
    body.style.position="static"
}

callCloseButton.addEventListener("click", callClose);
callOpenHeaderButton.addEventListener("click", callOpen);
callOpenSideButton.addEventListener("click", callOpen);
