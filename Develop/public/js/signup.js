const username = document.querySelector('#username').value.trim();
const password = document.querySelector('#password').value.trim();
const email = document.querySelector('#email').value.trim();
const signup = document.querySelector('.blog-signup-form');

const techblogSignUphandler = async (event) => {
    event.preventDefault();

    if (username && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, email })
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Could not sign up');
        }
    }
    };
if (signup) {
    signup.addEventListener('submit',  techblogSignUphandler);
}