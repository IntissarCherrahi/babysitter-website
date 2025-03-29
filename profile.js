document.getElementById("submit-rating").addEventListener("click", function () {
    const selectedRating = document.getElementById("rating-select").value;
    
    // Update displayed rating
    document.getElementById("display-rating").innerText = selectedRating;
    
    // Store the rating in local storage (simulating a backend)
    localStorage.setItem("babysitterRating", selectedRating);
});

// Load stored rating if available
document.addEventListener("DOMContentLoaded", function () {
    const storedRating = localStorage.getItem("babysitterRating");
    if (storedRating) {
        document.getElementById("display-rating").innerText = storedRating;
        document.getElementById("rating-select").value = storedRating;
    }
});
