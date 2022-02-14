<?php 
	$x         = $_POST["datos"];
	$k         = explode(",", $x);
	$tipo      = $k[0];
	$correo_u  = $k[1];
	$mensaje   = $k[2];

	$paracorreo = "contacto@sibyte.mx";
	$titulo = $tipo;
	$mensaje = $correo_u.":".$mensaje;
	$from = "contacto@sibyte.mx";
	$headers = "From:".$from;

	if(mail($paracorreo, $titulo, $mensaje, $headers))	
	{
		echo "Correo Enviado";
	}
	else
	{
		echo "Error";
	}
?>