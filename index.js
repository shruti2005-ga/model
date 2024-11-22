const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const username = usernameInput.value;
  const password = passwordInput.value; 
  const isAuthenticated = authenticate(username, password); // Replace with your authentication function

  if (isAuthenticated) {
    // Login successful
    window.location.href = "main.html"; // Redirect to main page
  } else {
    // Login failed
    alert('Invalid username or password.');
  }
});

// **Placeholder authentication function (replace with your actual implementation)**
function authenticate(username, password) {
  // Simulate an authentication check (replace with actual validation against a secure backend)
  return username === 'student' && password === '1234';
}