


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// this works on the drop down menu on top right corner.
menu.onclick = () => {
    navbar.classList.toggle('active');
}

// this will remove navigation bar after clicking on any of the navbar.
window.onscroll = () => {
    navbar.classList.remove('active');
}
