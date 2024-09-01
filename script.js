document.getElementById("loginButton").addEventListener("click", function() {
    // Get the username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if both fields are filled
    if (username && password) {
        // Display a success message
        const loginMessage = document.getElementById("loginMessage");
        loginMessage.textContent = "Login successfully completed!";
        loginMessage.classList.remove("hidden");
        setTimeout(function() {
            loginMessage.classList.add("hidden");
        }, 1000);
        
        // Reset the form fields
        document.getElementById("loginForm").reset();
    } else {
        // Alert if fields are missing (optional, since fields are required)
        alert("Please enter both username and password.");
    }
});
