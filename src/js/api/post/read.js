import { API_SOCIAL_POSTS } from "../constants";
import { getKey } from "../auth/key";
import { headers as customHeaders } from "../headers";

export async function readPost(id) {}

export async function readPosts(limit = 12, page = 1) {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", getKey()); 

    const apiKeyHeader = customHeaders();
    const [key, value] = apiKeyHeader.entries().next().value;
    myHeaders.append(key, value); 

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    try {
        const response = await fetch(`${API_SOCIAL_POSTS}?limit=${limit}&page=${page}`, requestOptions);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
