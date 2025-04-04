const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Yash1012", // Change if you have set a password
  database: "hackMate",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

// API Route to Insert Data
app.post("/register", (req, res) => {
  console.log("Function called", req.body); 
  const { name, email, password } = req.body; 

  const query = "INSERT INTO hack (name, email, pass) VALUES (?, ?, ?)";
  db.query(query, [name, email, password], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err); 
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "User registered successfully" });
  });
});

// API Route to Fetch Users
app.get("/hack", (req, res) => {
  db.query("SELECT * FROM hack", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// API Route for User Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM hack WHERE email = ? AND pass = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error fetching user:", err);
      return res.status(500).json({ error: err.message });
    }

    if (results.length > 0) {
      res.json({ message: "Login successful", user: results[0] });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  });
});


// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
<<<<<<< HEAD
});
=======
});
>>>>>>> 414802f065954021eb2dafa212b4a607b0d356e6
