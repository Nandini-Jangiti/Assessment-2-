document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Password and Confirm Password must match!');
            return;
        }
        const userData = {
            username,
            firstName,
            lastName,
            dob,
            gender,
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        window.location.href = 'profile.html';
    });

});

function check() {
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var strengthBadge = document.getElementById('strength-badge');
    var strength = checkStrength(password.value);
    strengthBadge.className = 'password-strength';
    if (strength == 'weak') {
        strengthBadge.classList.add('password-weak');
        strengthBadge.textContent = 'Weak';
    } else if (strength == 'medium') {
        strengthBadge.classList.add('password-medium');
        strengthBadge.textContent = 'Medium';
    } else {
        strengthBadge.classList.add('password-strong');
        strengthBadge.textContent = 'Strong';
    }
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords don't match");
    } else {
        confirmPassword.setCustomValidity('');
    }
}

function checkStrength(password) {

    if (password.length < 8) {
        return 'weak';
    } else if (password.length < 12) {
        return 'medium';
    } else {
        return 'strong';
    }
}
function register() {
    var username = document.getElementById("username").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var password = document.getElementById("password").value;

    // Here you can save the data to local storage or send it to a server for registration
    // For example, you can use localStorage.setItem() to store the data locally

    // Redirect to login page after registration
    window.location.href = "login.html";
}