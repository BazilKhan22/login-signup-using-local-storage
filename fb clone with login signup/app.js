var loginButton = document.getElementById("loginButton");
var signupButton = document.getElementById("signupButton");

// Handle Signup
signupButton.addEventListener("click", function () {
    var name = prompt("Enter your Full Name:");
    var email = prompt("Enter your Email Address:");
    var password = prompt("Enter a Password:");

    if (name && email && password) {
        // Check if email already exists in Local Storage
        if (localStorage.getItem("email:" + email)) {
            alert("This email is already registered. Please use a different email.");
        } else {
            // Save name, email, and password as separate keys
            localStorage.setItem("name:" + email, name);
            localStorage.setItem("email:" + email, email);
            localStorage.setItem("password:" + email, password);
            alert("Signup Successful! You can now log in.");
        }
    } else {
        alert("All fields are required for signup.");
    }
});

// Handle Login
loginButton.addEventListener("click", function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if email exists in Local Storage
    if (!localStorage.getItem("email:" + email)) {
        alert("You are not registered. Redirecting to signup page...");
        window.location.href = "signup.html"; // Redirect to signup page
    } else {
        var storedPassword = localStorage.getItem("password:" + email);
        if (storedPassword && storedPassword === password) {
            var userName = localStorage.getItem("name:" + email);
            alert("Login Successful! Welcome, " + userName);
        } else {
            alert("Invalid password. Please try again.");
        }
    }
});
