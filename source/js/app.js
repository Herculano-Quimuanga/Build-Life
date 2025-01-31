const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu Show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu Hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* CHANGE BACKGROUND HEADER  */
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)
scrollHeader()
/*
const swiperServices = new Swiper('.services__swiper',{
    loop:true,
    grabCursor:true,
    spaceBetween:24,
    slidePerView: 'auto',

    navigation:{
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev',
    },
})*/

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
scrollUp()

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href="#' + sectionId + '"]');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            if (sectionClass) sectionClass.classList.add('active-link');
        } else {
            if (sectionClass) sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);
