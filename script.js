let slider = document.querySelector('.swiper__container');
let mySwiper;

function mobileSlider() {
    if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
            slidesPerView: 2,
            spaceBetween: 200,
            loop: false,
            allowTouchMove:true,
            slideClass: 'swiper__container-slide',
            pagination: {
                el: '.swiper__pagination',
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
let showMoreButton = document.querySelector('.showmore-btn')
let brandClass = document.querySelector('ul:first-child')

function showMore() {
    let brandHeight = window.getComputedStyle(brandClass, null).getPropertyValue("height");
    if (brandHeight == '170px') {
        brandClass.classList.add('swiper__container-wrapper__height-auto');
        showMoreButton.textContent = 'Скрыть';
        showMoreButton.className = 'showmore-btn__hide';
    } else {
        brandClass.className = 'swiper__container-wrapper';
        showMoreButton.textContent = 'Показать все';
        showMoreButton.className = 'showmore-btn';
    }
}
