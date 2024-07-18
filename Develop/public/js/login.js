const username = document.querySelector('#username-blog-login').value.trim();
const password = document.querySelector('#password-blog-login').value.trim();
const blogLoginButton = document.querySelector('.blog-login-form');

const techBlogLogin = async (event) => {
    event.preventDefault();
    if (username && password) {
        const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Could not log in');
        }
    }
};
if (blogLoginButton) {
  blogLoginButton.addEventListener('submit', techbloghandler);
};