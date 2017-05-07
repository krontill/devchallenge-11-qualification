(function () {
    window.onscroll = () => {
        const mas = document.querySelectorAll('[data-scroll="true"]');
        for (let i = 0; i < mas.length; i++) {
            let scrolled = window.pageYOffset || document.documentElement.scrollTop;
            let yPos = -(scrolled / mas[i].dataset.speed); // вычисляем коэффициент
            // Создаем эффект Parallax Scrolling
            mas[i].style.transform = 'translateY(' + yPos + 'px)';
        }
    };
})();
