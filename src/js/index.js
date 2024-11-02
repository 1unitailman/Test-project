document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger-menu')
  const nav = document.querySelector('.nav-links')
  const body = document.querySelector('body')

  const toggleMenu = () => {
    nav.classList.toggle('active')
    burger.classList.toggle('open')
	body.classList.toggle('overflow')
  }

  burger.addEventListener('click', toggleMenu)

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('active')
      burger.classList.remove('open')
	  body.classList.remove('overflow')
    })
  })
})

AOS.init()

new Swiper('.swiper', {
  spaceBetween: 40,
  slidesPerView: 2.5,
  navigation: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  navigation: {
    nextEl: '.next-slide',
    prevEl: '.prev-slide'
  }
})
