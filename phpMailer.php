<?php 

$paracorreo = "miguelin2491@gmail.com";
$titulo = "Test";
$mensaje = "Hola";
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