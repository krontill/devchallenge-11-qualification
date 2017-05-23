(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const slider3 = document.querySelector('.js_slider3');
        const partnersSlider = lory(slider3, {
            infinite: 6,
            enableMouseEvents: true
        });

        setTimeout(function run() {
            partnersSlider.next();
            setTimeout(run, 6000);
        }, 6000);

    });
})();
