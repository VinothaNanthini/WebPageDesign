function register() {
    // Display the success message
    var registerMessage = document.getElementById('registerMessage');
    registerMessage.classList.remove('hidden');

    // Hide the message after 2 seconds
    setTimeout(function() {
        registerMessage.classList.add('hidden');
    }, 2000);

    // Reset the form
    document.getElementById('registerForm').reset();
}
