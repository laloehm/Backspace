var icon = document.querySelector("#hamburguer-icon");

icon.addEventListener("click", toggleClass);

function toggleClass() {
    icon.classList.toggle("active");
}

let links = $('.nav-link');

links.on('click', function () {
    $('.collapse').removeClass('show');
    $('.hamburguer-icon').removeClass('active');
})

/* Smooth scrolling para anclas */
$("a.smooth").on("click", function (e) {
    e.preventDefault();
    var $link = $(this);
    var anchor = $link.attr("href");
    $("html, body").stop().animate({
        scrollTop: $(anchor).offset().top - 100 + "px"
    }, 1000);
});

$(function () {
    $(document).bind("contextmenu", function (e) {
        return false;
    });
});

// Funcion para barra de Menu
$(window).scroll(function () {
    let header = $("#menu");
    if ($("#menu").offset().top > 500) {
        $('.navbar-brand img').fadeIn();
    } else {
        $('.navbar-brand img').fadeOut();
    }
});


new WOW().init();