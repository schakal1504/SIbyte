<?php 
	$x         = $_POST["datos"];
	$k         = explode(",", $x);
	$tipo      = $k[0];
	$correo_u  = $k[1];
	$mensaje   = $k[2];

	$paracorreo = $correo_u;
	$titulo = $tipo;
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