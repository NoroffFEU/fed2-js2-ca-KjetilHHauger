import { API_AUTH_REGISTER } from "../constants";

export async function register({ name, email, password, bio, banner, avatar }) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const rawData = {
    name: name, 
    email: email, 
    password: password, 
  };

  if (bio) {
    rawData.bio = bio; 
  }

  if (avatar) {
    rawData.avatar = {
      url: avatar, 
      alt: "My avatar alt text",
    };
  }

  if (banner) {
    rawData.banner = {
      url: banner, 
      alt: "My banner alt text",
    };
  }

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(rawData), 
    redirect: "follow"
  };


  return fetch(API_AUTH_REGISTER, requestOptions)
    .then((response) => response.json()) 
    .then((result) => {
      console.log(result);
      return result; 
    })
    .catch((error) => {
      console.error(error);
      throw error; 
    });
}

