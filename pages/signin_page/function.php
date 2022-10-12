<?php 
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

	function registrasi($data) {
		global $conn;

		// Post data store to variable
		$firstName = strtolower(stripslashes($data['first-name']));
		$lastName = strtolower(stripslashes($data['last-name']));
		$email = $data['email'];
		$password = mysqli_real_escape_string($conn, $data['password']);

		// check if data alredy exist
		$result = mysqli_query($conn, "SELECT first_name, last_name  FROM user WHERE first_name = '$firstName'");

		if (mysqli_fetch_assoc($result)) {
			echo "<script> alert('Username sudah terdaftar')</script>";
			return false;
		}

		// password encription
		$password = password_hash($password, PASSWORD_DEFAULT);

		// Insert data to database
		mysqli_query($conn, "INSERT INTO user VALUES(
			'',
			'$firstName',
			'$lastName',
			'$email',
			'$password'
		)");

		// check if success return 1, else return -1
		return mysqli_affected_rows($conn);
	}
?>
