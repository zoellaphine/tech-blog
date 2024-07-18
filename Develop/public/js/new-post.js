const title = document.querySelector('#title-new-blog-post').value.trim();
const content = document.querySelector('#content-new-blog-post').value.trim();
const newPost = document.querySelector('.new-blog-post-form');

const newblogpost = async (event) => {
    event.preventDefault();
    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Could not post');
        }
    }
};

if (newPost) {
    newPost.addEventListener('submit', newblogpost);
}