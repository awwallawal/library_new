const eyePassword = document.getElementById('eye-password');
const inputPassword = document.getElementById('password');
const stdLogin = document.getElementById("std-login");
const stdLoginSubmitBtn = document.getElementById("stdLogin-submit");

eyePassword.addEventListener('click', ()=>{
    // Logic to show or hide password on the page.
    if (inputPassword.type === "password") {
        inputPassword.type = "text"
    } else {
        inputPassword.type = "password"
    }
});

stdLogin.addEventListener('submit', (e)=>{
    e.preventDefault();
    stdLogin.reset()
})

stdLoginSubmitBtn.addEventListener('submit', (e)=>{
    e.preventDefault();
    stdLogin.reset()
})

// Clears the form on hitting the refresh browser button 
stdLogin.reset()