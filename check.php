<?php
	$login = filter_var(trim($_POST['login']),
	FILTER_SANITIZE_STRING);
	$name = filter_var(trim($_POST['name']),
	FILTER_SANITIZE_STRING);
	$pass = filter_var(trim($_POST['pass']),
	FILTER_SANITIZE_STRING);
	$ml = filter_var(trim($_POST['ml']),
	FILTER_SANITIZE_STRING);
	
	if (mb_strlen($login) < 5 || mb_strlen($login) > 90){
		echo "Недопустимая длина логина";
		exit();
	}
	if(mb_strlen($name)<3 || mb_strlen($name)>50){
		echo "Недопустимая длина имени";
		exit();
	}
	if(mb_strlen($pass)<2 || mb_strlen($pass)>20){
		echo "От 2 до 20";
		exit();
	}
	
	$pass = md5($pass."dqldjfehwo1275");
	
	$mysql = new mysqli('localhost','root','root','register-bd');
	$mysql->query("INSERT INTO `users`(`login`, `pass`, `name`,`ml`)	VALUES('$login', '$pass', '$name', '$ml')");
	
	$mysql->close();
	
	header('Location: /reg.html');
?>