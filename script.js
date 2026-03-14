// script.js

// Navigation functionality
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Smooth scrolling
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation functionality
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const errorMessage = document.querySelector('#error-message');

    errorMessage.textContent = '';

    if (name === '' || email === '') {
        e.preventDefault();
        errorMessage.textContent = 'All fields are required!';
    } else if (!validateEmail(email)) {
        e.preventDefault();
        errorMessage.textContent = 'Please enter a valid email address.';
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Interactive elements functionality
const interactiveElements = document.querySelectorAll('.interactive');

interactiveElements.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
    });
});