document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        console.log("Login", username);
        const userData = JSON.parse(localStorage.getItem('userData'));
        console.log("Stored User Data:", userData);

        if (userData && userData.username === username && userData.password === password) {
            console.log("Login successful!");
            window.location.href = 'profile.html';
        } else {
            console.log("Login failed!");
            errorMessage.innerText = "Invalid username or password. Please try again.";
            errorMessage.style.display = 'block';
        }
    });
    loginForm.addEventListener('input', function () {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username.trim() !== '' && password.trim() !== '') {
            loginBtn.disabled = false;
            errorMessage.style.display = 'none';
        } else {
            loginBtn.disabled = true;
            errorMessage.innerText = "Please enter both username and password.";
            errorMessage.style.display = 'block';
        }
    });
});
