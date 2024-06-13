// assets/js/auth.js
$(document).ready(function() {
    const registerForm = $('#registerForm');
    const loginForm = $('#loginForm');
    const registerEmailInput = $('#registerEmail');
    const registerPasswordInput = $('#registerPassword');
    const loginEmailInput = $('#loginEmail');
    const loginPasswordInput = $('#loginPassword');
    const backButton = $('.b-back');

    if (registerForm.length) {
        registerForm.on('submit', function(e) {
            e.preventDefault();
            const email = registerEmailInput.val();
            const password = registerPasswordInput.val();
            // Add your registration logic here
            console.log('Register:', { email, password });
            // Consider using a more user-friendly notification system
            alert('Registro exitoso!');
        });
    }

    if (loginForm.length) {
        loginForm.on('submit', function(e) {
            e.preventDefault();
            const email = loginEmailInput.val();
            const password = loginPasswordInput.val();
            // Add your login logic here
            console.log('Login:', { email, password });
            // Consider using a more user-friendly notification system
            alert('Login exitoso!');
        });
    }

    if (backButton.length) {
        backButton.on('click', function(e) {
            e.preventDefault();
            window.history.back();
        });
    }
});