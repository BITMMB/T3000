import '../scss/container.scss'
import '../scss/side.scss'
import '../scss/brand-section.scss'
import '../scss/button-order.scss'
import '../scss/lastoffer.scss'
import '../scss/nav.scss'
import '../scss/content-section.scss'
import '../scss/footer.scss'
import '../scss/header.scss'
import '../scss/showmore-btn.scss'
import '../scss/icon-btn.scss'
import '../scss/popup.scss'

import '../../node_modules/swiper/swiper-bundle.min.scss'

import '../../node_modules/swiper/swiper.min.js'

import Swiper, { Pagination } from 'swiper'
Swiper.use([Pagination])
///////////////////////////////////////////////////////////////////////////////

// function Swipers ()

//////////////////////////////////////////////////////////////////////

// let swipers = document.querySelectorAll('.swiper__container')

// console.log(swipers)

// for (i = 0; i < swipers.length; i++){

// }

/////////////////////////
mobileSlider()
window.addEventListener('resize', function () {
  mobileSlider()
})

let swiper
let swiper2
let swiper3

function mobileSlider() {
  let slider = document.querySelector('.swiper__container')
  if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
    swiper = new Swiper('.mySwiper', {
      spaceBetween: 16,
      width: 240,
      wrapperClass: 'swiper__container-wrapper',
      slideClass: 'swiper__container-slide',
      pagination: {
        el: '.swiper__pagination',
        clickable: true,
        bulletClass: 'swiper__pagination-bullet',
        bulletActiveClass: 'swiper__pagination-bullet__active'
      }
    })

    swiper2 = new Swiper('.mySwiper2', {
      spaceBetween: 16,
      wrapperClass: 'swiper__container-wrapper',
      slideClass: 'swiper__container-slide',
      width: 240,
      pagination: {
        el: '.swiper__pagination',
        clickable: true,
        bulletClass: 'swiper__pagination-bullet',
        bulletActiveClass: 'swiper__pagination-bullet__active'
      }
    })
    swiper3 = new Swiper('.mySwiper3', {
      wrapperClass: 'swiper__container-wrapper',
      slideClass: 'swiper__container-slide',
      spaceBetween: 16,
      width: 260,
      pagination: {
        el: '.swiper__pagination',
        clickable: true,
        bulletClass: 'swiper__pagination-bullet',
        bulletActiveClass: 'swiper__pagination-bullet__active'
      }
    })

    slider.dataset.mobile = 'true'
  }

  if (window.innerWidth > 768) {
    slider.dataset.mobile = 'false'
    if (slider.classList.contains('swiper-initialized')) {
      swiper.destroy()
      swiper2.destroy()
      swiper3.destroy()
    }
  }
}

////////////////////////////////////////////////////////////////////////

// showmore

/////////////////////////////////////////////////////////////////////////
let showMoreButton = document.querySelectorAll('.showmore-btn')

let showMoreButton1 = showMoreButton[0]
let showMoreButton2 = showMoreButton[1]
let showMoreButton3 = showMoreButton[2]

showMoreButton1.addEventListener('click', function () {
  let brandClass = document.querySelector('.content__block-text')
  if (brandClass.className == 'content__block-text') {
    brandClass.classList.add('content__block-text--height')
    showMoreButton1.textContent = 'Скрыть'
    showMoreButton1.classList.add('showmore-btn__hide')
  } else {
    brandClass.className = 'content__block-text'
    showMoreButton1.textContent = 'Читать далее'
    showMoreButton1.className = 'showmore-btn'
  }
})
showMoreButton2.addEventListener('click', function () {
  let brandClass = document.querySelector('.showMoreButton2')
  if (brandClass.className == 'swiper__container-wrapper showMoreButton2') {
    brandClass.classList.add('swiper__container-wrapper--height')
    showMoreButton2.textContent = 'Скрыть'
    showMoreButton2.classList.add('showmore-btn__hide')
  } else {
    brandClass.className = 'swiper__container-wrapper showMoreButton2'
    showMoreButton2.textContent = 'Показать все'
    showMoreButton2.className = 'showmore-btn'
  }
})
showMoreButton3.addEventListener('click', function () {
  let brandClass = document.querySelector('.showMoreButton3')
  if (brandClass.className == 'swiper__container-wrapper showMoreButton3') {
    brandClass.classList.add('swiper__container-wrapper--heightBig')
    showMoreButton3.textContent = 'Скрыть'
    showMoreButton3.classList.add('showmore-btn__hide')
  } else {
    brandClass.className = 'swiper__container-wrapper showMoreButton3'
    showMoreButton3.textContent = 'Показать все'
    showMoreButton3.className = 'showmore-btn'
  }
})
let mainCloseBtn = document.querySelector('.mainCloseBtn')
let buttonBurger = document.querySelector('.button-burger')
let sideMenu = document.querySelector('.side')
let blurClass = document.querySelector('.container__main-content')
buttonBurger.addEventListener('click', function () {
  sideMenu.classList.add('side--surfaced')
  blurClass.classList.add('container__main-content__blur')
  mainCloseBtn.classList.add('blurButton')
})

let feedbackPopup = document.querySelector('.feedback')
let sendMesBth = document.querySelectorAll('.sendMesBth')
let sendMesBth1 = sendMesBth[0]
let sendMesBth2 = sendMesBth[1]
sendMesBth1.addEventListener('click', OpenMessForm)
sendMesBth2.addEventListener('click', OpenMessForm)
function OpenMessForm() {
  feedbackPopup.classList.add('feedback__surfaced')
  blurClass.classList.add('container__main-content__blur')
  buttonClose3.classList.add('feedback__title-closebtn--hide')
  mainCloseBtn.classList.add('blurButton')
  sideMenu.className = 'side'
}

let callBackPopup = document.querySelector('.callback')
let callBackbtn = document.querySelectorAll('.callBtn')
let callBackbtn1 = callBackbtn[0]
let callBackbtn2 = callBackbtn[1]
callBackbtn1.addEventListener('click', OpenCallForm)
callBackbtn2.addEventListener('click', OpenCallForm)
function OpenCallForm() {
  callBackPopup.classList.add('feedback__surfaced')
  blurClass.classList.add('container__main-content__blur')
  buttonClose4.classList.add('feedback__title-closebtn--hide')
  mainCloseBtn.classList.add('blurButton')
  sideMenu.className = 'side'
}

let buttonSideClose = document.querySelectorAll('.closeBtn')
let buttonClose1 = buttonSideClose[0]
let buttonClose2 = buttonSideClose[1]
let buttonClose3 = buttonSideClose[2]
let buttonClose4 = buttonSideClose[3]

buttonClose1.addEventListener('click', ClosePopup)
buttonClose2.addEventListener('click', ClosePopup)
buttonClose3.addEventListener('click', ClosePopup)
buttonClose4.addEventListener('click', ClosePopup)
function ClosePopup() {
  sideMenu.className = 'side'
  feedbackPopup.className = 'feedback'
  callBackPopup.className = 'callback'

  blurClass.className = 'container__main-content'
  buttonClose3.className = 'icon closeBtn feedback__title-closebtn'
  buttonClose4.className = 'icon closeBtn feedback__title-closebtn'
  mainCloseBtn.className = 'mainCloseBtn closeBtn'
}
