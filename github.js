document.addEventListener("DOMContentLoaded", function() {
    const profileName = document.getElementById("profileName");
    const profileBio = document.getElementById("profileBio");
    const profileImage = document.getElementById("profileImage");

    // Fetch GitHub user data
    fetch('https://api.github.com/users/MrBroowc')
        .then(response => response.json())
        .then(data => {
            profileName.textContent = data.name || 'Name not available';
            profileBio.textContent = data.bio || 'Bio not available';
            profileImage.src = data.avatar_url || 'default-profile.png';
        })
        .catch(error => {
            console.error('Error fetching GitHub user data:', error);
        });
});