<?php

  // Create Conection
	$username = "root@localhost";
	$servername = "localhost";
	$conn = new mysqli($servername, $username, '');

	// Check connection
	if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
	}
	echo "<script> console.log('Connected successfully')</script>";

?>