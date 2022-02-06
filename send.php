<?php
	require "PHPMailer/Exception.php";
	require "PHPMailer/PHPMailer.php";
	require "PHPMailer/SMTP.php";
	require "PHPMailer"

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	$oMail = new PHPMailer();
	$oMail->isSMTP();
	$oMail->Host ="smtp.gmail.com"; 
	$oMail->Port=465;
	$oMail->SMTPSecure="ssl";
	$oMail->SMTPAuth=true;
	$oMail->Username="miguel.angel.dominguez.serrano@gmail.com";
	$oMail->Password="2491selim2491";
	$oMail->setFrom("miguelin2491@gmail.com","SibYte Test 2");
	$oMail->AddAddress("miguelin2491@gmail.com","SibYte Test");
	$oMail->Subject="Hola pruebas";
	$oMail->msgHTML("HOLA AQUI VA EL PRUEBA");

	if(!$oMail->send())
		echo $oMail->ErrorInfo;
?>