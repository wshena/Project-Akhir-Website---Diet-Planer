<?php

  // Create Conection
	$hostname = "localhost";
	$databasename = "diet_yuk";
	$username = "root";
	$password = "";
	$conn = new mysqli($hostname, $username, $password, $databasename);

	// Check connection
	if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
	}
	echo "<script> console.log('Connected successfully')</script>";

?>