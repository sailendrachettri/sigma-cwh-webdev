let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('.navbar');

hamburger.onclick = function(){
    navbar.classList.toggle('openmenu');
}