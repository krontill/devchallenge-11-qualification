(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const slider = document.querySelector('.js_slider');
        lory(slider, {
            infinite: 1,
            enableMouseEvents: true
        });

        const current = slider.querySelector('.js-current');
        slider.addEventListener('after.lory.slide', (e) => {
            current.innerText = e.detail.currentSlide;
        });
    });
})();
