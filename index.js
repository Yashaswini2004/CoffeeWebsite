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
