document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),  // 🔥 Remove `name`
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Invalid response from server");
        }
        return response.json();
    })
    .then((data) => {
        if (data.user) {
            alert("Login successful!");
            localStorage.setItem("userName", data.user.name);
            window.location.href = "index.html";
        } else {
            alert("Invalid email or password.");
        }
    })
    .catch((error) => console.error("Error:", error));
});