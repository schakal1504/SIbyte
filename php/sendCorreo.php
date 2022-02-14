<?php 
	$x         = $_POST["datos"];
	$k         = explode(",", $x);
	$tipo      = $k[0];
	$correo_u  = $k[1];
	$mensaje   = $k[2];

	$paracorreo = "contacto@sibyte.mx";
	$titulo = $tipo." CC:".$correo_u;
	$mensaje = $mensaje;
	$tucorreo = "contacto@sibyte.mx";

	if(mail($paracorreo, $titulo, $mensaje, $tucorreo))	
	{
		echo "Correo Enviado";
	}
	else
	{
		echo "Error";
	}
?>