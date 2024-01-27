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

// -------------------------get form data-------------------------
let firstName, lastName, email, password, confirmPassword, country;

firstName = document.getElementById('first-name');
lastName = document.getElementById('last-name');
email = document.getElementById('email');
password = document.getElementById('password');
confirmPassword = document.getElementById('confirm-password');
country = document.getElementById('country');

function register(){
        if(firstName.value.length < 3)
            alert("First name length should be greater than 3.");
        else if(password.value.length < 6)
            alert("Password length should greater than 6.")
        else if((password.value) !== (confirmPassword.value))
            alert("Passowrd doesn't match");
        
        else{
            let main = document.getElementById('main');
            main.innerHTML = "Thanks for registration.";
        } 
}
