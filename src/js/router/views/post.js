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

readPost(postID)

