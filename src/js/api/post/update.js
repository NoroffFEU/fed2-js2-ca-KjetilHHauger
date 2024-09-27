import { API_SOCIAL_POSTS } from "../constants";
import { API_KEY } from "../constants";
import { getKey } from "../auth/key";

/**
 * Updates a post by sending a PUT request to the API with the given post ID and data.
 *
 * @async
 * @function updatePost
 * @param {string} id - The ID of the post to update.
 * @param {Object} postData - The data to update the post with.
 * @param {string} postData.title - The new title of the post.
 * @param {string} postData.body - The new body of the post.
 * @param {string} [postData.tags] - Optional tags to add to the post.
 * @param {string} [postData.media] - Optional media URL to add to the post.
 * @returns {Promise<void>} A promise that resolves when the post is updated.
 * @throws Will throw an error if the update fails.
 */
export async function updatePost(id, { title, body, tags, media }) {
    const myHeaders = new Headers(); 
    myHeaders.append("Content-Type", "application/json");

    const token = await getKey(); 
    myHeaders.append("Authorization", `Bearer ${token}`); 

    const apiKeyHeader = customHeaders();
    const [key, value] = apiKeyHeader.entries().next().value;
    myHeaders.append(key, value); 

    const postData = {
      title: title,
      body: body,
    };

    if (tags) {
      postData.tags = [tags]; 
    }

    if (media) {
      postData.media = {
        url: media,
        alt: "Image alt text",
      };
    }

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(postData),
      redirect: "follow"
    };
    const url = `${API_SOCIAL_POSTS}/${id}`;

    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();

      if (response.ok) {
        alert("Post successfully updated!");
        window.location.href = "/";
      } else {
        console.error(result);
        alert("Error updating post: " + result.message);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Failed to update post. Please try again later.");
    }
}
