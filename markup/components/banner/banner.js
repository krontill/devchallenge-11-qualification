(function () {
    let arrow = document.querySelector('[data-scroll="true"]');

    function scrollArrow() {
        let height = arrow.getBoundingClientRect().top + arrow.offsetHeight;
        if (height > 20) {
            window.scrollBy(0, 20);
        } else {
            window.scrollBy(0, height + 1);
        }
        if (height > 0) {
            requestAnimationFrame(scrollArrow);
        }
    }

    arrow.addEventListener('click', function () {
        scrollArrow();
    });

})();
