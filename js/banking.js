const loginSubmit = document.getElementById("login-submit").addEventListener("click", function () {
    const inputEmail = document.getElementById("user-email");
    const userEmail = inputEmail.value;
    const inputPassword = document.getElementById("user-password");
    const userPassword = inputPassword.value;
    if (userEmail == "sontankebap@gmail.com" && userPassword == "bapkebata007") {
        window.location.href = "banking.html";
    }

});