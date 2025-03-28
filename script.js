// ✅ Register User
document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  })
  .then((response) => response.json())
  .then((data) => {
    alert(data.message);
    window.location.href = "index.html"; // Redirect after registration
  })
  .catch((error) => console.error("Error:", error));
});

// ✅ Login User
