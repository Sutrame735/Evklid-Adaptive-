const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 800,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        // when window width is >= 320px
        1024: {
            slidesPerView: 'auto'
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 'auto'
        },
        // when window width is >= 640px
        320: {
            slidesPerView: 'auto',
        }
    }
});


$(function () {
    $("#accordion").accordion({
        collapsible: true
    });
});


$(window).keyup(function(e){
    var target = $('label input[type=checkbox]:focus');
    if (e.keyCode == 9 && $(target).length){
        $(target).parent().addClass('focused');
    }
});

$('label input[type=checkbox]').focusout(function(){
    $(this).parent().removeClass('focused');
});

/* work-tabs */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.work__btn').forEach(function (e) {
        e.addEventListener('click', function (e) {
            const tab = e.currentTarget.dataset.path;
            document.querySelectorAll('.tab-content').forEach(function (e) {
                e.classList.remove('tab-content--active')
                document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
            });
        });

        e.addEventListener('click', function (e) {
            const tabDefault = e.currentTarget.dataset.default;
            document.querySelectorAll('.work__btn').forEach(function (e) {
                e.classList.remove('work__btn--default')
                document.querySelector(`[data-path='${tabDefault}']`).classList.add('work__btn--default');
            });
        });

    });
})