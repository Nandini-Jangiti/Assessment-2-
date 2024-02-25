document.addEventListener('DOMContentLoaded', function () {

    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');
    const loginError = document.getElementById('loginError');

    loginForm.addEventListener('input', function () {

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username.trim() !== '' && password.trim() !== '') {
            loginBtn.disabled = false;
        } else {
            loginBtn.disabled = true;
            loginError.textContent = 'Please enter details';
        }
    });
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username.trim() !== '' && password.trim() !== '') {
            window.location.href = 'profile.html';
        } else {
            loginError.textContent = 'Please enter details.';
        }
    });
    function login() {
        var username = document.getElementById("loginUsername").value;
        var password = document.getElementById("loginPassword").value;

        // Retrieve user data from localStorage
        var userData = JSON.parse(localStorage.getItem(username, password));

        if (userData && userData.password === password) {
            alert("Login successful!");
            // Redirect to another page or perform other actions after successful login
        } else {
            // Show error message
            document.getElementById("errorMessage").style.display = "block";
        }
    }

});
