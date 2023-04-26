/*-------------------------------

	PRE_LOADER.JS

-------------------------------*/
$(window).on("load", function() {
    $(".preloader-icon").delay(100).fadeOut(), setTimeout(function() {
        $(".preloader").addClass("loaded"), setTimeout(function() {
            $(".preloader").hide()
        }, 1500)
    }, 800)
});

/*-------------------------------

	IMPORT HTML.JS

-------------------------------*/
$(document).ready(function() {
    $('#header').load("component/header.html");
    $('#footer').load("component/footer.html");
    $('#header_new').load("component/header-new.html");
    $('#footer_new').load("component/footer-new.html");
});