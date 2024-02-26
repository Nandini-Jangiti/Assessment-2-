
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

        
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!password.match(passwordRegex)) {
            alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&).');
            return;
        }

        if (password !== confirmPassword) {
            alert('Password and Confirm Password must match!');
            return;
        }
        const usernameRegex = /^[a-zA-Z0-9]+$/;
        if (!username.match(usernameRegex)) {
            alert('Username must contain only alphanumeric characters.');
            return;
        }
        const firstNameRegex = /^[a-zA-Z]+$/;
        if (!firstName.match(firstNameRegex)) {
            alert('First name must contain only alphabetic characters.');
            return;
        }

        const lastNameRegex = /^[a-zA-Z]+$/;
        if (!lastName.match(lastNameRegex)) {
            alert('Last name must contain only alphabetic characters.');
            return;
        }
        const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dob.match(dobRegex)) {
            alert('Date of Birth must be in the format YYYY-MM-DD.');
            return;
        }

        const userData = {
            oldUsername: username,
            oldPassword: password,
            username,
            firstName,
            lastName,
            dob,
            gender,
            password
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        window.location.href = 'profile.html';
    });

    document.getElementById('confirmPassword').addEventListener('input', function () {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            this.setCustomValidity("Passwords don't match");
        } else {
            this.setCustomValidity('');
        }
    });
});
