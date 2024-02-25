document.addEventListener('DOMContentLoaded', function () {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const logoutButton = document.getElementById('logoutButton');

    const pdata = document.getElementById('profileData');
    const profileDataHTML =
     ` <div class="card">
            <h2>Profile Information</h2>
            <p><strong>First Name:</strong> ${userData.firstName}</p>
            <p><strong>Last Name:</strong> ${userData.lastName}</p>
            <p><strong>Date of Birth:</strong> ${userData.dob}</p>
            <p><strong>Gender:</strong> ${userData.gender}</p>
        </div> `;
    pdata.innerHTML = profileDataHTML;
    logoutButton.addEventListener('click', function () {
        window.location.href = 'login.html';
    });
});