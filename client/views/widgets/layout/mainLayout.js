Template.mainLayout.rendered = function(context, options) {
    // If a hash is specified, navigate to the corresponding section
    var hash = Router.current(true).params.hash;
    if (hash == null || hash === 'undefined') {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    } else {
        $('html, body').animate({
            scrollTop: $('#' + hash).offset().top
        }, 600);
    }

    // Highlight corresponding navigation item on the main nav
    var currentUrl = Router.current(true).path,
        $currentActiveNav = $('.main-nav .nav-item.active');
    if (currentUrl === '/') {
        if (typeof $currentActiveNav !== 'undefined') {
            $currentActiveNav.removeClass('active');
        }
    } else if (currentUrl.indexOf('/report') != -1) {
        if (typeof $currentActiveNav !== 'undefined') {
            $currentActiveNav.removeClass('active');
        }
        $currentActiveNav = $('#navReport .nav-item').addClass('active');
    } else if (currentUrl.indexOf('/about') != -1) {
        if (typeof $currentActiveNav !== 'undefined') {
            $currentActiveNav.removeClass('active');
        }
        $currentActiveNav = $('#navAbout .nav-item').addClass('active');
    }

    var $window = $(window);

    /* ========== PARALLAX BACKGROUND ========== */
    // Don't apply effects to mobile devices
    if ($window.width() > 991) {
        var $navbar = $('#header .navbar'),
            $parallax = $('.parallax');
        $window.scroll(function(e) {
            if ($parallax.length == 0) {
                return;
            }
            var scrollPosition = $window.scrollTop();
            $parallax.css('top',(0 - (scrollPosition * 0.3)) + 'px' ); // bg image moves at 30% of scrolling speed
            if (scrollPosition <= 100) {
                $navbar.addClass('navbar-transparent-bg');
            } else if (scrollPosition > 100) {
                $navbar.removeClass('navbar-transparent-bg');
            }
        }).scroll();
    }

    $('#toggle').removeClass('toggle-checked');

    /* ========== RESIZE HERO TO MAKE SURE IT'S FULL PAGE VIEW ========== */
    $window.resize(function(e) {
        var height = $window.height();
        $('#hero').css('height', height);

        var $intro = $('#hero .intro');
        $intro.css('padding-top', (height - $intro.height()) / 2 - 20);

        $('#customerLogos').css('margin-top', height / 4 - $intro.height() / 2 - 10);
    }).resize();

    /* ========== BOOTSTRAP CAROUSEL ========== */
    $('.carousel').carousel({
        interval: 6000
    });
};
