<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Connect to MySQL database
    $conn = new mysqli("localhost", "postgres", "asdfghj3","");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve user data from database
    $query = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($query);

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        // Verify password
        if (password_verify($password, $row['password'])) {
            // Password is correct, set session variables
            $_SESSION['username'] = $row['username'];
            echo "Login successful. Welcome, " . $row['username'];
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "Username not found.";
    }

    $conn->close();
}
?>
