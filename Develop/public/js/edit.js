const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

const editblogpost = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title-update-blog-post').value.trim();
    const content = document.querySelector('#content-update-blog-post').value.trim();
    if (title && content) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content })
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Could not update post');
        }
    }
};

const updatePostForm = document.querySelector('.update-blog-post-form');
if (updatePostForm) {
    updatePostForm.addEventListener('submit', editblogpost);
}