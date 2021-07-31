const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    elemClose = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay')

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
})

elemClose.addEventListener('click', () => {
    menu.classList.remove('active');
})

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
})

const count = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

count.forEach((item, i) => {
    lines[i].style.width = item.innerHTML
})
