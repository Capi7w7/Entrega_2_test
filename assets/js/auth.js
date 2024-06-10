// assets/js/auth.js

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const registerEmailInput = document.getElementById('registerEmail');
    const registerPasswordInput = document.getElementById('registerPassword');
    const loginEmailInput = document.getElementById('loginEmail');
    const loginPasswordInput = document.getElementById('loginPassword');
    const backButton = document.querySelector('.b-back');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = registerEmailInput.value;
            const password = registerPasswordInput.value;
            // Add your registration logic here
            console.log('Register:', { email, password });
            // Consider using a more user-friendly notification system
            alert('Registration successful!');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = loginEmailInput.value;
            const password = loginPasswordInput.value;
            // Add your login logic here
            console.log('Login:', { email, password });
            // Consider using a more user-friendly notification system
            alert('Login successful!');
        });
    }

    if (backButton) {
        backButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.history.back();
        });
    }
});