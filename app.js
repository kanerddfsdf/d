// Register Page - Save user details to localStorage
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Check if user already exists
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(user => user.email === email)) {
        alert("User already exists!");
        return;
    }

    // Save new user data to localStorage
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    window.location.href = "login.html";
});

// Login Page - Validate and login user
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful!");
        window.location.href = "notes.html"; // Redirect to the main note page (you'll need to create this page next)
    } else {
        alert("Invalid email or password.");
    }
});
