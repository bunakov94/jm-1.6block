let showMorePost = document.getElementById('show-more');
let posts = document.getElementsByClassName('post__text--additional');

showMorePost.addEventListener('click', function () {
    showMorePost.classList.toggle('show-more-btn--active');

    for (let i = 0; i < posts.length; i++) {
        posts[i].classList.toggle('post__text--visible');
    }

    if (showMorePost.classList.contains("show-more-btn--active")) {
        showMorePost.innerHTML = "Скрыть";
    } else {
        showMorePost.innerHTML = "Читать далее";

    }

});