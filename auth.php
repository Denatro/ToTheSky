<?php

	$login = filter_var(trim($_POST['login']),
	FILTER_SANITIZE_STRING);
	$pass = filter_var(trim($_POST['pass']),
	FILTER_SANITIZE_STRING);

	$pass = md5($pass."dqldjfehwo1275");
	
	$mysql = new mysqli('localhost','root','root','register-bd');
	
	$result = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login' AND `pass`= '$pass'");
	$user=$result->fetch_assoc();
	if(count($user)==0){
		header('Location: reg.html');
		$a=false;
		exit();
	}
	
	setcookie('user', $user['name'],time()+3600, "/");
	
	$mysql->close();
	
	header('Location: index2.php');
?>