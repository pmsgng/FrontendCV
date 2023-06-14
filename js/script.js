'use strict';

document.addEventListener('DOMContentLoaded', () => {

//     const hero = document.querySelector('.hero');
//     const foto = document.querySelector('.header__pic');
//     window.addEventListener('scroll', () => {
//         let scrollTop = window.scrollY;
//         console.log(scrollTop);
//         hero.style.transform = `translateX(${scrollTop*0.1}rem)`;
//     });
        $(window).scroll(function(){
        if ( $(this).scrollTop() > el.offset().top - 200 ) {
            el.addClass('animation_car8');
    }
});
});

