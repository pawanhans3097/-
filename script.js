let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuicon.onclick=()=>{
  menuicon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
  sections.forEach(sec =>{
    let top=window.scrollY;
    let offset=sec.offsetTop-150;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');
    if(top>=offset && top<offset+height){
      navlinks.forEach(link=>{
        link.classList.remove('active');
        document.querySelector('header nav a[href*='+id+']').classList.add('active');
      });
    };
  });
  let header=document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY>100);
  menuicon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
ScrollReveal().reveal('.home-content, h1, h2', {
    distance: '88px',
    duration: 2000,
    delay: 100,
    origin: 'top'
});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', {
    origin: 'bottom'
});

ScrollReveal().reveal('.home-contact h1, .about-img', {
    origin: 'left'
});

ScrollReveal().reveal('.home-contact p, .about-content', {
    origin: 'right'
});