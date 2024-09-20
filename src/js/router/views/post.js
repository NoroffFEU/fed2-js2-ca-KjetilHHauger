import { readPost } from '../../api/post/read';
import { setLogoutListener } from '../../ui/global/logout';
document.addEventListener('DOMContentLoaded', () => {
    setLogoutListener(); 
});

function getPostIDFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('postID');
}
const postID = getPostIDFromURL()

const postData = readPost(postID)
console.log(postData)

function displayPostByID(post) {
    const postData = post.data; // Extract the 'data' property

    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';

    const postMedia = postData.media && postData.media.url
        ? `<img class="post-media" src="${postData.media.url}" alt="${postData.media.alt || 'Post media'}">`
        : '';

    const authorAvatar = postData.author.avatar && postData.author.avatar.url
        ? `<img class="author-img" src="${postData.author.avatar.url}" alt="${postData.author.name}'s avatar">`
        : '<img class="author-img" src="/images/default-avatar.png" alt="Default avatar">';

    const postHTML = `
    <div class="post">
        ${authorAvatar}
        <div class="author" data-authorID="${postData.author.name}">
            <span class="author-name">${postData.author.name}</span>
        </div>
        <a href="/post/?postID=${postData.id}" data-postID="${postData.id}">
            ${postMedia}
            <h2 class="post-title">${postData.title}</h2>
            <p class="post-body">${postData.body}</p>
        </a>
    </div>
    `;

    postContainer.innerHTML += postHTML;
}


displayPostByID(postData);

