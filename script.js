// const swiper = new Swiper('.swiper', {
//     direction: 'horizontal',
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//     },
//
// });
//
//


function initSlider() {
    new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination'
        }
    })
}

function detectWidth() {
    if (window.innerWidth <= 768) {
        initSlider();
    } else {
    }
}

detectWidth();


//
// let mySwiper;
//
//
// function mobileSlider() {
//     if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
//         mySwiper = new Swiper(slider, {
//             slidesPerView: 1,
//             spaceBetween: 10,
//             loop: true,
//             slideClass: 'card',
//             // pagination: {
//             // 	el: '.swiper-pagination',
//             // 	clickable: true,
//             // },
//         });
//
//         slider.dataset.mobile = 'true';
//     }
//
//     if (window.innerWidth > 600) {
//         slider.dataset.mobile = 'false';
//         if (slider.classList.contains('swiper-container-initialized')) {
//             mySwiper.destroy();
//         }
//     }
// }
//
// mobileSlider()
//
// window.addEventListener('resize', () => {
//     mobileSlider();
// });

//
// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//
//     setTimeout(function () {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//     }, 2000);
// }