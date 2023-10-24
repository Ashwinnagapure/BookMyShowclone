function openLoginWindow() {
    // Set the desired height and width
    var newWindow = window.open('login.htm', '_blank', 'height=557,width=428');
    if (window.focus) {
        newWindow.focus();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var inputBox = document.getElementById("mobileInput");
    var continueButton = document.getElementById("continueButton");

    inputBox.addEventListener("input", function () {
        // Remove any non-numeric characters
        inputBox.value = inputBox.value.replace(/[^0-9]/g, '');
        checkInputLength(inputBox.value);
    });

    inputBox.addEventListener("blur", function () {
        checkInputLength(inputBox.value);
    });

    continueButton.addEventListener("click", function () {
        showLoginSuccess();
    });
    continueButton.style.display = "none";
    privacyDiv.style.display = "block";
});
function validateInput(input) {
// Remove any non-numeric characters
input.value = input.value.replace(/[^0-9]/g, '');
checkInputLength(input.value);
}
function checkInputLength(inputValue) {
    var continueButton = document.getElementById("continueButton");
    var privacyDiv = document.querySelector(".privacy");

    if (inputValue.length === 10) {
        continueButton.style.backgroundColor = "#f84464";
        continueButton.style.pointerEvents = "auto"; // Enable button clicks
        continueButton.style.display = "block"; // Show the button
        privacyDiv.style.display = "none"; // Hide the privacy message
    } else {
        continueButton.style.backgroundColor = "#f5f5f5";
        continueButton.style.pointerEvents = "none"; // Disable button clicks
        continueButton.style.display = "none"; // Hide the button
        privacyDiv.style.display = "block"; // Show the privacy message
    }
}
function openGoogleLoginWindow() {
    // Open a new window for Google login
    var googleLoginWindow = window.open('google_login.htm', '_blank', 'height=400,width=400');
    if (window.focus) {
        googleLoginWindow.focus();
    }
}
function showLoginSuccess() {
// Show a simple alert message
alert("You are logged in successfully!");
}