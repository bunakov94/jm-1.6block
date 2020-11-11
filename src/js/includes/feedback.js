let feedbackOpenHeaderButton = document.getElementById("feedbackOpenHeader");
let feedbackOpenSideButton = document.getElementById("feedbackOpenSide");
let feedbackCloseButton = document.getElementById("feedbackClose");
let feedbackModal = document.getElementById("feedback");
const body = document.querySelector("body");
let main = document.getElementById('main');
let nav = document.getElementById('side-nav');



function feedbackOpen() {
    feedbackModal.classList.add("feedback--visible");
    main.classList.add('main-content--blured');
    nav.classList.add('side-nav--blured');
    body.style.position="fixed"
}

function feedbackClose() {
    feedbackModal.classList.remove("feedback--visible");
    main.classList.remove('main-content--blured');
    nav.classList.remove('side-nav--blured');
    body.style.position="static"
}

feedbackCloseButton.addEventListener("click", feedbackClose);
feedbackOpenHeaderButton.addEventListener("click", feedbackOpen);
feedbackOpenSideButton.addEventListener("click", feedbackOpen);
