
document.addEventListener('DOMContentLoaded', function () {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const profileData = document.getElementById('profileData');
    const logoutButton = document.getElementById('logoutButton');

    if (userData) {
        const profileDataHTML =
            `<div class="card">
                <h2>Profile Information</h2>
                <p><strong>First Name:</strong> ${userData.firstName}</p>
                <p><strong>Last Name:</strong> ${userData.lastName}</p>
                <p><strong>Date of Birth:</strong> ${userData.dob}</p>
                <p><strong>Gender:</strong> ${userData.gender}</p>
            </div> `;
        profileData.innerHTML = profileDataHTML;
    } else {
        profileData.innerHTML = "<p>No profile data found.</p>";
    }
    logoutButton.addEventListener('click', function () {
        window.location.href = 'login.html';
    });
});
