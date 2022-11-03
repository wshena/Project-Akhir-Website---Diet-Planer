<?php 
	require 'function.php';
	if (isset($_POST['sign-in'])) {
		if (registrasi($_POST) > 0) {
			echo "<script> alert('Berhasil sign in')</script>";
            header("Location: ../login_page/login_page.php");
		} else {
			echo mysqli_error($conn);
		}
	}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diet Yuk</title>

    <link rel="stylesheet" href="./css/signin_page.css">
</head>
<body>
    <main id="main">
        <div class="main-img"></div>

        <div class="form-container">
            <h1>SIGN IN</h1>
            <form action="" method="post">
                <div class="column">
                    <input type="text" name="first-name" id="first-name" placeholder="First Name" class="short">
                    <input type="text" name="last-name" id="last-name" placeholder="Last Name" class="short">
                </div>
                <input type="email" name="email" id="email" placeholder="Email Address" autocomplete="off">
								<input type="password" name="password" id="password" placeholder="Password" autocomplete="off">
                <input type="submit"  name="sign-in" value="SIGN-IN" class="btn-blue">

                <div class="links">
                    <p>or sign up with</p>
                    <div class="social-media">
                        <img src="./images/icons/Facebook F.png" alt="facebook-icon">
                        <img src="./images/icons/Google.png" alt="google-icon">
                        <img src="./images/icons/Twitter.png" alt="twiter-icon">
                    </div>
                </div>
            </form>
        </div>
    </main>
</body>
</html>