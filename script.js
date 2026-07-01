// =======================
// LOGIN VALIDATION
// =======================

function validateLogin() {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if(email === "" || password === ""){

        alert("Please fill all required fields.");

        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert("Please enter a valid email address.");

        return false;
    }

    if(password.length < 8){

        alert("Password must be at least 8 characters.");

        return false;
    }

    alert("Login Successful!");

    return false;
}


// =======================
// REGISTER VALIDATION
// =======================

function validateRegister(){

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPassword").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    if(name==="" || email==="" || password==="" || confirmPassword===""){

        alert("Please fill all required fields.");

        return false;
    }

    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert("Please enter a valid email address.");

        return false;
    }

    if(password.length<8){

        alert("Password must be at least 8 characters.");

        return false;
    }

    if(password!==confirmPassword){

        alert("Passwords do not match.");

        return false;
    }

    alert("Registration Successful!");

    return false;
}



// =======================
// DARK MODE
// =======================

function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

    let btn=document.getElementById("themeBtn");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        if(btn){
            btn.innerHTML="☀️";
        }

    }

    else{

        localStorage.setItem("theme","light");

        if(btn){
            btn.innerHTML="🌙";
        }

    }

}



// =======================
// LOAD SAVED THEME
// =======================

window.onload=function(){

    let btn=document.getElementById("themeBtn");

    if(localStorage.getItem("theme")==="dark"){

        document.body.classList.add("dark-mode");

        if(btn){
            btn.innerHTML="☀️";
        }

    }

}