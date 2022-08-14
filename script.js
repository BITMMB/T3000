function initSlider() {
    new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 170,
        slidesPerView: 2,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
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

function showMore() {
    let brandClass = document.querySelector('.brand-buttons');
    let brandHeight = window.getComputedStyle(brandClass, null).getPropertyValue("height");
    let showMoreButton = document.querySelector('.showmore-btn');
    if (brandHeight == '170px') {
        brandClass.style.height = 'auto';
        showMoreButton.textContent = 'Скрыть';
        // showMoreButtonIcon.style.transform = 'rotate(180deg)';
        // console.log(showMoreButtonIcon)
        showMoreButton.classList.add('showmore-btn__rotate::before');
    } else {
        brandClass.style.height = '170px';
        showMoreButton.textContent = 'Показать все';
    }
}




