
$(document).ready(function () {
	console.log("ON READU");

	

	$(".div_pladig").click(function() {
	  	$(".modal-title").text('');
		$(".modal-title").text('Plataformas Dígitales');
		$("#img_modal_icon").attr("src", "assets/images/service-icon-02.png");
		$("#tipo_modal").val("PLDI");
	  	$("#myModal").modal('show');
	});

	$( ".div_dapp" ).click(function() {
		$(".modal-title").text('');
		$(".modal-title").text('Desarrollo de Aplicaciones');
		$("#img_modal_icon").attr("src", "assets/images/programacion.png");
		$("#tipo_modal").val("dapp");
	  	$("#myModal").modal('show');
	});

	$( ".div_prod" ).click(function() {
	  	$(".modal-title").text('');
		$(".modal-title").text('Productos');
		$("#img_modal_icon").attr("src", "assets/images/productos.png");
		$("#tipo_modal").val("prod");
	  	$("#myModal").modal('show');
	});

	$( ".div_tics" ).click(function() {
	  	$(".modal-title").text('');
		$(".modal-title").text("TIC'S");
		$("#img_modal_icon").attr("src", "assets/images/tics.png");
		$("#tipo_modal").val("tics");
	  	$("#myModal").modal('show');
	});

	$("#btnEnviarPregunta").click(function(){
		var tipo = $("#tipo_modal").val();
		var correo_u = $("#correo_usuario").val();
		var mensaje = $("#mensaje").val();
		//Aqui ira el Ajax a phpMailer.php
		alert("Enviado Correctamente"+ tipo);
		$("#myModal").modal('hide');

	});
});

$( ".div_ci" ).click(function() {
		$(".modal-title").text('');
		$(".modal-title").text('Control Interno');
		$("#img_modal_icon").attr("src", "assets/images/service-icon-01.png");
		$("#tipo_modal").val("CI");
	  	$("#myModal").modal('show');
	});

	$( ".div_conta" ).click(function() {
	  	$(".modal-title").text('');
		$(".modal-title").text('Contabilidad e Impuestos');
		$("#img_modal_icon").attr("src", "assets/images/service-icon-02.png");
		$("#tipo_modal").val("CO");
	  	$("#myModal").modal('show');
	});
