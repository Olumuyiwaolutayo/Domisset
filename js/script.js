var swiper = new Swiper(".image-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop:true,
    autoplay: {
            delay: 2000,
            disableOnInteraction: false,
    },
});    

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault(); // Prevent the form from submitting normally

  // Send the form data to Formspree
  fetch('https://formspree.io/f/mrgvaykj', {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    // Handle the response from Formspree
    alert('Thank you for your submission!, Check your mail soon for our response');
         form.reset(); // Reset the form
    setTimeout(() => {
      form.reset(); // Reset the form after a delay
    }, 1000);
  })
  .catch(error => {
    // Handle any errors
    alert('Thank you for your submission!, Check your mail soon for our response');
  });
});


//AOS Instance
AOS.init();