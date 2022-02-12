<?php 

$paracorreo = "contacto@sibyte.mx";
$titulo = $_POST['subject']."-".$_POST['email'];
$mensaje = $_POST['name']." ".$_POST['surname'].":".$_POST['message'];
$tucorreo = "contacto@sibyte.mx";
$resultado = "";
if(mail($paracorreo, $titulo, $mensaje, $tucorreo))	
{
	$resultado = "Enviado";
}
else
{
	$resultado = "Error";
}
	print_r($resultado)

?>