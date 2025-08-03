function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleText = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleText.textContent = "Hide Password";
  } else {
    passwordInput.type = "password";
    toggleText.textContent = "Show Password";
  }
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Login successful!");
});
