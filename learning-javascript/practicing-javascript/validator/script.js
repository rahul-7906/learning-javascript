let form = document.querySelector("form");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let emailError=document.querySelector("#emailError");
let passwordError=document.querySelector("#passwordError");

form.addEventListener("submit",function(dets){
    dets.preventDefault();

    const emailRegex = /^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,64}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);
    
    if(!emailans){
        email.classList.add("invalid");
        email.classList.remove("valid");
        emailError.textContent="invalid email";
    }else{
        email.classList.add("valid");
        email.classList.remove("invalid");
        emailError.textContent="";
    }
    if(!passwordans){
        password.classList.add("invalid");
        password.classList.remove("valid");
        passwordError.textContent="invalid password";
    }else{
        password.classList.add("valid");
        password.classList.remove("invalid");
        passwordError.textContent="";
    }

})