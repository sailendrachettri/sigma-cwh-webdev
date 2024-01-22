let hamburger, navbar;

hamburger = document.querySelector('.hamburger');
navbar = document.querySelector('.navbar');
hamburger.onclick = function(){
    navbar.classList.toggle('active');
}