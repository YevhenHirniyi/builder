$(function () {
    $('.portfolio__slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: true,
        asNavFor: '.portfolio__slider-nav',
        prevArrow: '<button class="slider-button slider-button__left"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 26L2 14L14 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button class="slider-button slider-button__right"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 26L14 14L2 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
    });
    $('.portfolio__slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.portfolio__slider-for',
        arrows: false,
        vertical: true
    });

    $('.reviews__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="slider-button slider-button__left"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 26L2 14L14 2"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button class="slider-button slider-button__right"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 26L14 14L2 2"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        infinite: false
    });

    $('.second-menu__btn').on('click', function(){
        $('.second-menu').toggleClass('second-menu--open');
    });

})