function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    emailError.textContent = "";
    passwordError.textContent = "";
    let valid = true;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }
    if (password.trim() === "") {
        passwordError.textContent = "Please enter a password.";
        valid = false;
    }
    if (valid) {
        const useremail=localStorage.getItem("useremail");
        const userpassword=localStorage.getItem("password");
        if(email === useremail && password === userpassword){
            alert("Login Successfully!!!");
            window.location.href="./home.html";
        }
        else{
            alert("Invalid data");
        }
    }
}