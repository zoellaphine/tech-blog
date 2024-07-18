const newCommentForm = document.querySelector('.new-blog-comment-form');
const commentText = document.querySelector('#content-new-blog-comment').value.trim();

const blogcomment = async (event) => {
    event.preventDefault();
    if (commentText) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ commentText, post_id})
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Could not comment');
        }
    }
};

if (newCommentForm) {
    newCommentForm.addEventListener('submit',  blogcomment);
}