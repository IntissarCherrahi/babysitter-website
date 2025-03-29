// Function to store babysitter data in localStorage
function saveBabysitter(babysitter) {
    let babysitters = JSON.parse(localStorage.getItem("babysitters")) || [];
    babysitters.push(babysitter);
    localStorage.setItem("babysitters", JSON.stringify(babysitters));
}

// Function to load babysitters from localStorage and display them
function loadBabysitters() {
    const babysitterList = document.getElementById("babysitter-list");
    const storedBabysitters = JSON.parse(localStorage.getItem("babysitters")) || [];
    babysitterList.innerHTML = ""; // Clear previous list

    if (storedBabysitters.length === 0) {
        babysitterList.innerHTML = "<p>No babysitters found.</p>";
    } else {
        storedBabysitters.forEach(babysitter => {
            const babysitterCard = document.createElement("div");
            babysitterCard.classList.add("babysitter-card");
            babysitterCard.innerHTML = `
                <img src="${babysitter.img || 'default.jpg'}" alt="Babysitter Profile">
                <h3>${babysitter.name}</h3>
                <p>Experience: ${babysitter.experience} years</p>
                <p>Rating: ${babysitter.rating}</p>
                <a href="profile.html?id=${babysitter.id}">View Profile</a>
            `;
            babysitterList.appendChild(babysitterCard);
        });
    }
}

// Event listener for page load
document.addEventListener("DOMContentLoaded", loadBabysitters);
