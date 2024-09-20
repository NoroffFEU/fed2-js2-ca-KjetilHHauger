import { API_SOCIAL_PROFILES } from "../constants";

export async function updateProfile(bio, { avatar, banner }) {
  const myHeaders = new Headers();
  myHeaders.append("X-Noroff-API-Key", API_KEY);

  const token = await getKey();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");

  const rawData = {
    bio: bio,
    banner: {
      url: banner,
      alt: "banner alt",
    },
    avatar: {
      url: avatar,
      alt: "avatar alt",
    },
  };

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify(rawData),
    redirect: "follow",
  };

  return fetch(API_SOCIAL_PROFILES, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
