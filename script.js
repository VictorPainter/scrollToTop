$(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()) {
        $('.top').addClass('active');
    } else {
        $('.top').removeClass('active');
    }
});