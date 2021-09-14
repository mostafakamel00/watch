$(document).ready(function () {
    "use strict";
    //scroll to top
    var scrollButton= $("#scroll-top");
    $(window).scroll(function () {
        if( $(this).scrollTop() >= 600 ) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
    scrollButton.click(function () {
        $("html,body").animate({scrollTop: 0 }, 1000);
    });
    //nice scroll
    $("html").niceScroll({
        cursorwidth:9,
        cursoropacitymin:0.6,
        cursorcolor:'#045089',
        cursorborder:'none',
        cursorborderradius:4,
        autohidemode:'leave'
    });
});