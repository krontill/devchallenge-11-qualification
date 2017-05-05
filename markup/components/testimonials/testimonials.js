(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const slider2 = document.querySelector('.js_slider2');
        const dot_count         = slider2.querySelectorAll('.js_slide').length;
        const dot_container     = slider2.querySelector('.js_dots');
        const dot_list_item     = document.createElement('li');

        function handleDotEvent(e) {
            if (e.type === 'before.lory.init') {
                for (let i = 0, len = dot_count; i < len; i++) {
                    let clone = dot_list_item.cloneNode(false);
                    dot_container.appendChild(clone);
                }
                dot_container.childNodes[0].classList.add('active');
            }
            if (e.type === 'after.lory.init') {
                for (let i = 0, len = dot_count; i < len; i++) {
                    dot_container.childNodes[i].addEventListener('click', function(e) {
                        dot_navigation_slider.slideTo(Array.prototype.indexOf.call(dot_container.childNodes, e.target));
                    });
                }
            }
            if (e.type === 'after.lory.slide') {
                for (let i = 0, len = dot_container.childNodes.length; i < len; i++) {
                    dot_container.childNodes[i].classList.remove('active');
                }
                dot_container.childNodes[e.detail.currentSlide - 1].classList.add('active');
            }
            if (e.type === 'on.lory.resize') {
                for (let i = 0, len = dot_container.childNodes.length; i < len; i++) {
                    dot_container.childNodes[i].classList.remove('active');
                }
                dot_container.childNodes[0].classList.add('active');
            }
        }

        slider2.addEventListener('before.lory.init', handleDotEvent);
        slider2.addEventListener('after.lory.init', handleDotEvent);
        slider2.addEventListener('after.lory.slide', handleDotEvent);
        slider2.addEventListener('on.lory.resize', handleDotEvent);

        const dot_navigation_slider = lory(slider2, {
            infinite: 1,
            enableMouseEvents: true
        });

    });
})();
