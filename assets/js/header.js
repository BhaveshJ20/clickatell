$(document).ready(function() {

    'use strict';

    var c, currentScrollTop = 0,
        header = $('.navigation');

    $(window).scroll(function() {
        var a = $(window).scrollTop();
        var b = header.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            header.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            header.removeClass("scrollUp");
        }
        c = currentScrollTop;

        if ($(this).scrollTop() > 50) {
            $('#header').addClass('shadowHeader');
            $('#header_new').addClass('shadowHeader');
            $('body').addClass('bodycover');
        } else {
            $('#header').removeClass('shadowHeader');
            $('#header_new').removeClass('shadowHeader');
            $('body').removeClass('bodycover');
        }

    });

    if ($(window).width() > 991) {

        $('.navbar-nav > li.mega-dropdown').hover(function() {
            $('.mega-dropdown-menu', this).stop(true, false).slideDown(500);
            $(this).addClass('show');
            event.stopPropagation();

        }, function() {
            $('.mega-dropdown-menu', this).stop(true, false).slideUp(400);
            $(this).removeClass('show');
            event.stopPropagation();
        });

    }

    $('#navbarContent .dropdown').hover(function() {
        $('.contentarea').addClass('body-content-overly');
    }, function() {
        $('.contentarea').removeClass('body-content-overly');
    });

    //greenbar section
    $('[data-toggle=search-form]').click(function() {
        $('.search-form-wrapper').toggleClass('open');
        $('.search-form-tigger').toggleClass('active');
        $('.search-form-wrapper .search').focus();
        $('html').toggleClass('search-form-open');
    });
    $('[data-toggle=search-form-close]').click(function() {
        $('.search-form-wrapper').removeClass('open');
        $('.search-form-tigger').removeClass('active');
        $('html').removeClass('search-form-open');
    });
    $('.search-form-wrapper .search').keypress(function(event) {
        if ($(this).val() == "Search") $(this).val("");
    });

    $('.search-close').click(function(event) {
        $('.search-form-wrapper').removeClass('open');
        $('.search-form-tigger').removeClass('active');
        $('html').removeClass('search-form-open');
    });

    // Mobile menu backdrop
    $('.mobile-menu-open').click(function(event) {
        $('.slide-menu').addClass('open');
        $('.contentarea').addClass('body-content-overly');
    });

    $('.mobile-menu-close').click(function(event) {;
        $('.slide-menu').removeClass('open');
        $('.contentarea').removeClass('body-content-overly');
    });
});