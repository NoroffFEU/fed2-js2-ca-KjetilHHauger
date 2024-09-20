/**
 * Deletes a post by its ID using an API call.
 * 
 * @param {string} id - The ID of the post to delete.
 * @returns {Promise<boolean>} - Returns true if the deletion was successful.
 */
export async function deletePost(id) {
    try {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` // If your API requires authentication
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete post');
        }

        return true;
    } catch (error) {
        console.error('Error deleting post:', error);
        return false;
    }
}
