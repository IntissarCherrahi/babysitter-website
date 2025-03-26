document.getElementById('user-type').addEventListener('change', function () {
    let extraFields = document.getElementById('extra-fields');
    extraFields.style.display = this.value === 'babysitter' ? 'block' : 'none';
});

document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let userType = document.getElementById('user-type').value;

    if (!name || !email || !password) {
        alert("Please fill out all required fields.");
        return;
    }

    // If babysitter, validate additional fields
    if (userType === "babysitter") {
        let phone = document.getElementById('phone').value;
        let experience = document.getElementById('experience').value;
        let rate = document.getElementById('rate').value;

        if (!phone || !experience || !rate) {
            alert("Please fill out all babysitter-related fields.");
            return;
        }
    }

    alert('Signup successful!');
    window.location.href = 'find-babysitter.html';
});
