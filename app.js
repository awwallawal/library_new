const eyePassword = document.getElementById('eye-password');
const inputPassword = document.getElementById('password');
const showPassword = document.getElementById("show-password");
const eyeIcon = document.getElementById('eye-icon');
const email = document.getElementById('email');
const form = document.getElementById("form");
const loginBtn = document.getElementById("login-btn");

eyePassword.addEventListener('click', ()=>{
    // Logic to show or hide password on the page.
    if (inputPassword.type === "password") {
        inputPassword.type = "text"
    } else {
        inputPassword.type = "password"
    }
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    /*
    Email Validation not needed currently

    if(!validator.isEmail(email.value)){
        alert("Invalid Email. Please check the email address");
        return false
    } else {
        alert ("Correct values!")
    }
    */
})
