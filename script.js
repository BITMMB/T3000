const slider = document.querySelector('.slider-container');
let mySwiper;

function mobileSlider() {
    if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
            slidesPerView: 2,
            spaceBetween: 190,
            loop: false,
            slideClass: 'card',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        slider.dataset.mobile = 'true';
    }
    if (window.innerWidth > 768) {
        slider.dataset.mobile = 'false';
        if (slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
    }
}

mobileSlider()
window.addEventListener('resize', () => {
    mobileSlider();
});

function showMore() {
    let brandClass = document.querySelector('.swiper-wrapper');
    let brandHeight = window.getComputedStyle(brandClass, null).getPropertyValue("height");
    if (brandHeight == '170px') {
        let showMoreButton = document.querySelector('.showmore-btn');
        brandClass.classList.add('swiper-wrapper__height-auto');
        showMoreButton.textContent = 'Скрыть';
        showMoreButton.className = 'showmore-btn__hide';
    } else {
        let showMoreButton = document.querySelector('.showmore-btn__hide');
        brandClass.className = 'swiper-wrapper';
        showMoreButton.textContent = 'Показать все';
        showMoreButton.className = 'showmore-btn';
    }
}
