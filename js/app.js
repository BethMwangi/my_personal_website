//$(document).foundation();
//
//$('a[href^="#"]').on('click', function (event) {
//    var target = $($(this).attr('href'));
//
//    if (target.length) {
//        event.preventDefault();
//        $('html, body').animate({
//            scrollTop: target.offset().top
//        }, 1000);
//    }
//})
$(function () {
    var sticky_navigation_offset_top = $('#header').offset().top;
    var sticky_navigation = function () {
        var scroll_top = $(window).scrollTop();
        if (scroll_top > sticky_navigation_offset_top) {
            $('#header').css({
                'position': 'fixed',
                'top': 0,
                'left': 0
            });
        } else {
            $('#header').css({
                'position': 'relative'
            });
        }
    };

    // run our function on load
    sticky_navigation();

    // and run it again every time you scroll
    $(window).scroll(function () {
        sticky_navigation();
    });
    $('a[href="#"]').click(function (event) {
        event.preventDefault();
    });

});

$(document).foundation()
$('a[href^="#"]').on('click', function (event) {
    var target = $($(this).attr('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
