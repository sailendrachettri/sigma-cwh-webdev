let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".navbar");

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
    console.log("clicked");
})