// Select the menu open and close buttons
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Add event listener to toggle the mobile menu on button click
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

// Add event listener to close the mobile menu by simulating the open button click
menuCloseButton.addEventListener("click", () => {
    menuOpenButton.click();
});
const swiper = new Swiper('.slider-wrapper', {
   
    loop: true,
    spaceBetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
              slidePerView:1
        },
        768:{
            slidePerView:2
      },
      1024:{
        slidePerView:3
  }
    }
  });