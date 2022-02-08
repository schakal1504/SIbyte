<?php 
	$x         = $_POST["datos"];
	$k         = explode(",", $x);
	$tipo      = $k[0];
	$correo_u  = $k[1];
	$mensaje   = $k[2];

	$tucorreo = $correo_u;
	$titulo = $tipo;
	$mensaje = $mensaje;
	$paracorreo = "contacto@sibyte.mx";

	if(mail($paracorreo, $titulo, $mensaje, $tucorreo))	
	{
		echo "Correo Enviado";
	}
	else
	{
		echo "Error";
	}
?>