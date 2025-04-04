document.getElementById('unlockButton').addEventListener('click', function () {
  const password = document.getElementById('password').value;
  const feedback = document.getElementById('feedback');

  // Check if the password is exactly 6 digits
  const regex = /^\d{6}$/; // Regex to match exactly 6 digits

  if (regex.test(password)) {
    // If the password is 6 digits, redirect to success page
    window.location.href = "success.html?code=" + password;
  } else {
    feedback.textContent = "Please enter a valid 6-digit passcode!";
  }
});
