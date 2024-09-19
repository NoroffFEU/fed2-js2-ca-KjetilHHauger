import { API_SOCIAL_POSTS, API_KEY } from "../constants";
import { getKey } from "../auth/key";
import { headers as customHeaders } from "../headers";

export async function readPost(id) {}

export async function readPosts(limit = 12, page = 1,) {
  const myHeaders = new Headers();
  myHeaders.append("X-Noroff-API-Key", API_KEY); 

  const token = await getKey(); 
  myHeaders.append("Authorization", `Bearer ${token}`); 

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(API_SOCIAL_POSTS+`?limit=${limit}&page=${page}&_author=true`, requestOptions);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const result = await response.json();
    return result; 
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}


export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
