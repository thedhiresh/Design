const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const toggleIcon = document.getElementById('toggleIcon');
const loginForm = document.getElementById('loginForm');
const submitBtn = document.getElementById('submitBtn');
const loadingSpinner = document.getElementById('loadingSpinner');

togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    toggleIcon.classList.toggle('fa-eye');
    toggleIcon.classList.toggle('fa-eye-slash');
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission
    submitBtn.disabled = true; // Disable button
    loadingSpinner.style.display = 'inline-block'; // Show loading spinner
    
    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
        alert('Login successful!'); // Show success message
        submitBtn.disabled = false; // Re-enable button
        loadingSpinner.style.display = 'none'; // Hide spinner
        loginForm.reset(); // Reset form fields
    }, 2000); // Simulate a 2-second delay for submission
});