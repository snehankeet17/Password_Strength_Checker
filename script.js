// script.js
document.getElementById("password").addEventListener("input", function() {
    var password = this.value;
    var strengthBar = document.getElementById("strength-bar");
    var strengthText = document.getElementById("strength-text");

    var strength = getPasswordStrength(password);

    // Update strength bar and text based on the strength
    strengthBar.className = ""; // Reset class
    if (strength < 2) {
        strengthBar.classList.add("strength-weak");
        strengthText.textContent = "Weak";
        strengthText.style.color = "red";
    } else if (strength === 2) {
        strengthBar.classList.add("strength-medium");
        strengthText.textContent = "Medium";
        strengthText.style.color = "orange";
    } else if (strength > 2) {
        strengthBar.classList.add("strength-strong");
        strengthText.textContent = "Strong";
        strengthText.style.color = "green";
    }

    // Update the width of the strength bar
    strengthBar.style.width = (strength / 3) * 100 + "%";
});

// Function to calculate password strength
function getPasswordStrength(password) {
    var strength = 0;

    // Check password length
    if (password.length >= 8) strength++;

    // Check if password contains both lower and upper case characters
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;

    // Check if password contains numbers and special characters
    if (password.match(/[0-9]/) && password.match(/[\W]/)) strength++;

    return strength; // Strength is a value from 0 to 3
}
