let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle("active");
    hamburger.classList.toggle("active");
})

document.querySelectorAll('.nav-item').forEach(n => n.addEventListener("click", ()=>{
    navbar.classList.remove("active");
    hamburger.classList.remove("active");
}))

