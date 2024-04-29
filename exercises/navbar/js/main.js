$(document).ready(function () {
    $("#navbar-toggle").click(function () {
        $("#responsive-menu").slideToggle();
    });

    function hide_responsive_menu() {
        $("#responsive-menu").slideUp();
    }

    $(window).resize(function () {
        hide_responsive_menu();
    });

    $(window).scroll(function () {
        hide_responsive_menu();
    });
})