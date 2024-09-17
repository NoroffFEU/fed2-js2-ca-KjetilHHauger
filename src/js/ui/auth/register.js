import { register } from '../../api/auth/register.js';

export async function onRegister(event) {
    event.preventDefault(); 


    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        bio: '', 
        avatar: '',
        banner: '' 
    };

    try {
        
        const result = await register(formData);
        console.log(result); 

       
        if (result) {
            alert('Registration successful! Redirecting to login...');
            window.location.href = '/auth/login'; 
        }
    } catch (error) {
        
        console.error(error);
        alert(`Registration failed: ${error.message}`);
    }
}
