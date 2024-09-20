import { deletePost as apiDeletePost } from '../../api/post/delete';  // Import API to delete post

/**
 * Attaches event listeners to all delete buttons on the page.
 */
export function setupDeletePostButtons() {
    const deleteButtons = document.querySelectorAll('.delete-btn');  // Select all delete buttons

    deleteButtons.forEach(button => {
        button.removeEventListener('click', onDeletePost);  // Remove any previous event listeners
        button.addEventListener('click', onDeletePost);      // Add a new event listener
    });
}

/**
 * Handles the post deletion logic.
 * @param {Event} event - The click event from the delete button.
 */
async function onDeletePost(event) {
    event.preventDefault();
    const postId = event.target.dataset.postId;  // Get the post ID from the data attribute

    if (confirm('Are you sure you want to delete this post?')) {  // Confirm deletion
        try {
            const success = await apiDeletePost(postId);  // Call API to delete the post

            if (success) {
                event.target.closest('.post').remove();  // Remove the post from the DOM if successful
                alert('Post deleted successfully');
            } else {
                alert('Failed to delete post.');
            }
        } catch (error) {
            console.error('Failed to delete post:', error);
            alert('Failed to delete post.');
        }
    }
}
