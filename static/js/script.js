// saving user information to localStorage
document.getElementById('signup_form').addEventListener('submit', function(e) {
    e.preventDefault();

    // collecting the values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // saves data to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // clears form submission
    this.reset();

    alert('Data saved to localStorage!');
});