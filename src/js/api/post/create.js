import { API_SOCIAL_POSTS } from "../constants";
import { headers as customHeaders } from "../headers"; 
import { getKey } from "../auth/key";

export async function createPost({ title, body, tags, media }) {

  const myHeaders = new Headers(); 
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", getKey()); 

  const apiKeyHeader = customHeaders();
  const [key, value] = apiKeyHeader.entries().next().value;
  myHeaders.append(key, value); 

  const raw = JSON.stringify({
    "title": title,
    "body": body,
    "tags": [tags],
    "media": {
      "url": media,
      "alt": "string"
    }
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch(API_SOCIAL_POSTS, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
