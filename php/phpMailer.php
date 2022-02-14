<?php 

$x         = $_POST["datos"];
$k         = explode(",", $x);
$nombre      = $k[0];
$apellido  = $k[1];
$correo   = $k[3];
$asunto   = $k[4];
$mensaje   = $k[5];
$paracorreo = "contacto@sibyte.mx";
$titulo = $asunto."-".$correo;
$mensaje = $nombre." ".$apellido.":".$mensaje;
$from = "contacto@sibyte.mx";
$headers = "From:".$from;
$resultado = "";
if(mail($paracorreo, $titulo, $mensaje, $headers))	
{
	$resultado = "Enviado";
}
else
{
	$resultado = "Error";
}
	print_r($resultado)

?>