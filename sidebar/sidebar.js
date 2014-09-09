function showSidebar($element) {
    var active = $element.data('sidebar-active');
    var state = $element.data('sidebar-state');
    if ((!active || active == 'false') && (!state || state == 'hide')) {
        $element.data('sidebar-active', 'true').data('sidebar-state', 'show').animate({
            left: '0'
        }, {
            complete: function () {
                $element.data('sidebar-active', 'false');
            }
        });
    }
}

function hideSidebar($element) {
    var offset = $element.hasClass('child') ? '-340' : '-268';
    var active = $element.data('sidebar-active');
    var state = $element.data('sidebar-state');
    if ((!active || active == 'false') && (!state || state == 'show')) {
        $element.data('sidebar-active', 'true').data('sidebar-state', 'hide').animate({
            left: offset
        }, {
            complete: function () {
                $element.data('sidebar-active', 'false');
            }
        });
    }
}

function toggleSidebar($element) {
    var state = $element.data('sidebar-state');
    if (state == 'show') {
        hideSidebar($element);
    } else {
        showSidebar($element);
    }
}

$('[data-sidebar-show]').click(function (e) {
    showSidebar($($(this).data('sidebar-show')));
    e.preventDefault();
});

$('[data-sidebar-hide]').click(function (e) {
    hideSidebar($($(this).data('sidebar-hide')));
    e.preventDefault();
});

$('.sidebar:not(.child)').mouseenter(function (e) {
    showSidebar($(this));
});

$('.sidebar:not(.child)').mouseleave(function (e) {
    hideSidebar($(this));
});

$('.sidebar.child').mouseenter(function (e) {
    showSidebar($(this));
});

$('.sidebar.child').mouseleave(function (e) {
    hideSidebar($(this));
});

$('[data-sidebar-toggle]').click(function (e) {
    toggleSidebar($($(this).data('sidebar-toggle')));
    e.preventDefault();
});