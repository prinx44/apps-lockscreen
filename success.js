// Get the password from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const password = urlParams.get('code');

// Display the entered password on the success page
document.getElementById('codeDisplay').textContent = `You entered: ${password}`;
