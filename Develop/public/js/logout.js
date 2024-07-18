const blogLogoutButton = document.querySelector('#blog-logout');

const techBlogLogout =async()=>{
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.replace('/');
    } else {   
        alert('Could not log out');
    }
};

if (blogLogoutButton) {
  blogLogoutButton.addEventListener('click', techbloglogout);
}