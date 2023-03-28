var swiper = new Swiper(".mySwiper", {
    loop:true, 
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.myheader__bars');
const close = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('menu--translate');
});

close.addEventListener('click', () => {
    menu.classList.remove('menu--translate');
})

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

const bar = document.querySelector('.bar');
const wrapper = document.querySelector('.mywrapper');
let newwidth, oldwidth=0;
let rcode, gcode, bcode, r2code, g2code, b2code;
const code = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function setbarwidth(){
  newwidth = scrollY / (wrapper.scrollHeight - innerHeight) * 100;
  bar.style.width = `${newwidth}%`;
}

function setbarcolor(){
  rcode = randomCode();
  gcode = randomCode();
  bcode = randomCode();
  r2code = randomCode();
  g2code = randomCode();
  b2code = randomCode();
  bar.style.background = `linear-gradient(to right, #${rcode+gcode+bcode}, #${r2code+g2code+b2code})`;
}

function randomCode(){
  return code[Math.floor(Math.random() * (code.length))];
}

addEventListener("scroll", () => {
  setbarwidth();
  if(newwidth - oldwidth >= 5 || newwidth - oldwidth <= -5){
    oldwidth=newwidth;
    setbarcolor();
  }
});