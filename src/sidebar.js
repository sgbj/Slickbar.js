var slickbar;
(function (slickbar) {
    function showSidebar(element, test) {
        if (!element) return;
        if (!element.classList.contains('active')) {
            element.classList.add('active');
        }
    }

    function hideSidebar(element) {
        if (!element) return;
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        }
    }

    function toggleSidebar(element) {
        if (!element) return;
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        } else {
            element.classList.add('active');
        }
    }

    function onShowSidebar(e) {
        e.preventDefault();
        var selector = this.getAttribute('data-sidebar-show');
        showSidebar(selector ? document.querySelector(selector) : this, e.touches);
    }

    function onHideSidebar(e) {
        e.preventDefault();
        var selector = this.getAttribute('data-sidebar-hide');
        var sidebar = document.querySelector(selector);
        console.log('hiding ', sidebar, selector, this)
        if ((sidebar && sidebar.classList.contains('active')) || this.classList.contains('active')) {
            hideSidebar(selector ? document.querySelector(selector) : this);
        } else {
            var triggers = this.querySelectorAll('[data-sidebar-show]');
            for (var i = 0; i < triggers.length; i++) {
                hideSidebar(document.querySelector(triggers[i].getAttribute('data-sidebar-show')));
            }
        }
    }

    function onToggleSidebar(e) {
        e.preventDefault();
        toggleSidebar(document.querySelector(this.getAttribute('data-sidebar-toggle')));
    }
    
    slickbar = {
        init: function () {
            var sidebarShowers = document.querySelectorAll('[data-sidebar-show]');
            for (var i = 0; i < sidebarShowers.length; i++) {
                sidebarShowers[i].addEventListener('click', onShowSidebar.bind(sidebarShowers[i]));
            }

            var sidebarHiders = document.querySelectorAll('[data-sidebar-hide]');
            for (var i = 0; i < sidebarHiders.length; i++) {
                sidebarHiders[i].addEventListener('click', onHideSidebar.bind(sidebarHiders[i]));
            }
            
            var parentSidebars = document.querySelectorAll('.sidebar:not(.child)');
            for (var i = 0; i < parentSidebars.length; i++) {
                //parentSidebars[i].addEventListener('touchstart', onShowSidebar.bind(parentSidebars[i]));
            }

            var sidebars = document.querySelectorAll('.sidebar');
            for (var i = 0; i < sidebars.length; i++) {
                sidebars[i].addEventListener('mouseenter', onShowSidebar.bind(sidebars[i]));
                sidebars[i].addEventListener('mouseleave', onHideSidebar.bind(sidebars[i]));
                //sidebars[i].addEventListener('touchend', onHideSidebar.bind(sidebars[i]));
            }

            var sidebarTogglers = document.querySelectorAll('[data-sidebar-toggle]');
            for (var i = 0; i < sidebarTogglers.length; i++) {
                sidebarTogglers[i].addEventListener('click', onToggleSidebar.bind(sidebarTogglers[i]));
            }
        }
    }
    
    slickbar.init();
})(slickbar);