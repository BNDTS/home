document.addEventListener("DOMContentLoaded", function() {
    const profileName = document.getElementById("profileName");
    const profileBio = document.getElementById("profileBio");
    const profileImage = document.getElementById("profileImage");

    // Fetch GitHub user data
    fetch('https://api.github.com/users/MrBroowc')
        .then(response => response.json())
        .then(data => {
            const nameText = data.name || 'Name not available';
            profileBio.textContent = data.bio || 'Bio not available';
            profileImage.src = data.avatar_url || 'default-profile.png';

            // Set the name text along the SVG path
            const namePath = document.getElementById('namePath');
            const textPath = document.createElementNS('http://www.w3.org/2000/svg', 'textPath');
            textPath.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#namePath');
            textPath.textContent = nameText;
            profileName.querySelector('svg').appendChild(textPath);
        })
        .catch(error => {
            console.error('Error fetching GitHub user data:', error);
        });
});