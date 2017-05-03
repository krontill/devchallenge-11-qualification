(function () {
    function Tab(options) {
        let elem = options.elem || [];

        elem.onclick = function (event) {
            if (event.target.closest('[data-toggle=tab]')) {
                elem.querySelectorAll('[data-toggle=tab]').forEach(function (item) {
                    item.classList.remove('tabs__link--active');
                });
                event.target.classList.add('tabs__link--active');

                elem.querySelectorAll('[data-target=tab]').forEach(function (item) {
                    item.classList.remove('tabs__pane--active');
                });
                document.querySelector(event.target.hash).classList.add('tabs__pane--active');

                return false;
            }
        };
    }

    new Tab({
        elem: document.querySelector('[data-id=tabs]')
    });

})();
