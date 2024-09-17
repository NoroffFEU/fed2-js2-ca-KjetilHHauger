import { API_AUTH_REGISTER } from "../constants";

export async function register({
  name,
  email,
  password,
  bio,
  banner,
  avatar,
}) {
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify(
  {
    "name": name,
    "email": email,
    "password": password,
    "bio": bio, 
    "avatar": {
      "url": avatar,
      "alt": "My avatar alt text"
    },
    "banner": {
      "url": banner, 
      "alt": "My banner alt text"
    },
  }
);

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(API_AUTH_REGISTER, requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}
