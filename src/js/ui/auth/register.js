import { register } from '../../api/auth/register.js';

export async function onRegister(event) {
    event.preventDefault(); 


    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        bio: document.getElementById('bio') ? document.getElementById('bio').value : null, 
        avatar: document.getElementById('avatar') ? document.getElementById('avatar').value : null, 
        banner: document.getElementById('banner') ? document.getElementById('banner').value : null,
    };

    try {
        const result = await register(formData);

        if (result) {
            alert('Registration successful! Redirecting to login...');
            window.location.href = '/auth/login/'; 
        }
    } catch (error) {
        console.error(error);
        alert(`Registration failed: ${error.message}`);
    }
}
