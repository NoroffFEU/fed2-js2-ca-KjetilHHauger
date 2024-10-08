import { getKey } from "../auth/key";
import { API_KEY, API_SOCIAL_POSTS } from "../constants";

API_KEY

/**
 * Deletes a post by its ID using an API call.
 * 
 * @param {string} id - The ID of the post to delete.
 * @returns {Promise<boolean>} - Returns true if the deletion was successful.
 */
export async function deletePost(id) {
    const myHeaders = new Headers();
    myHeaders.append("X-Noroff-API-Key", API_KEY);

    const token = await getKey();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow"
    };

    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, requestOptions);

        if (!response.ok) {
            throw new Error(`Failed to delete post: ${response.statusText}`);
        }
        return true; 
    } catch (error) {
        console.error("Error deleting post:", error);
        throw error;
    }
}


