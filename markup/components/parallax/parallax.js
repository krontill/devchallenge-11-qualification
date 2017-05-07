(function () {
    window.onscroll = () => {
        document.querySelectorAll('[data-scroll="true"]').forEach((item) => {
            let scrolled = window.pageYOffset || document.documentElement.scrollTop;
            let yPos = -(scrolled / item.dataset.speed); // вычисляем коэффициент
            // Создаем эффект Parallax Scrolling
            item.style.transform = 'translateY(' + yPos + 'px)';
        });
    };
})();
