<?php 
	require 'function.php';
	if (isset($_POST['login'])) {
		// Get data from form
		$email = $_POST['email'];
		$password = $_POST['password'];
		

		// Get data from database
		$result = mysqli_query($conn, "SELECT * FROM user WHERE email = '$email'");

		// $row = mysqli_fetch_assoc($result);
		// if(mysqli_num_rows($result) === 1) {
		// 	// store record to row[]
		// 	if (password_verify($password, $row["password"])) {
		// 		// if password match, send to next page
		// 		header("location : index.php");
		// 		exit;
		// 	}
		// }

		if (mysqli_num_rows($result) > 0) {
			header("Location: index.php");
		}else {
			$error = true;
		}

		// $error = true;
	}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diet Yuk</title>

    <link rel="stylesheet" href="./css/login_page.css">
</head>
<body>
  <main id="main">
		<div class="container">
			<div class="main-img"></div>

			<!-- display error massage -->
			<?php if(isset($error)) : ?>
				<p style="color: red; font-style: italic">Email atau Password anda salah!</p>
			<?php endif; ?>

			<div class="form-container">
				<h1>LOG IN</h1>
				<form action="" method="post" class="form">
					<input type="email" name="email" id="email" placeholder="Email Address" autocomplete="off">
					<input type="password" name="password" id="password" placeholder="Password">

					<input type="submit" name="login" value="LOG IN" class="btn-blue">

					<h3>Don't have an account? <span>Create on now!</span></h3>

					<div class="line">
						<span></span>
						<p>OR</p>
						<span></span>
					</div>

					<a href="../signin_page/signin_page.php">
						<input type="button" value="SIGN IN" class="btn-blue">
					</a>
				</form>
			</div>
		</div>
	</main>
</body>
</html>