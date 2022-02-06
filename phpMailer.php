<?php 
	
	if(isset($_POST['subject']) && !empty($_POST['subject']) && isset($_POST['message']) && !empty($_POST['message']))
	{
		$destino = "miguel.angel.dominguez.serrano@gmail.com";
		$desde = "From:". "SiByte";
		$asunto = $_POST['subject'];
		$mensaje = $_POST['message'];
		mail($destino, $asunto, $mensaje, $desde);
		echo "Correo Enviado";
	}
	else
	{
		echo "Problemas al enviar";
	}
?>