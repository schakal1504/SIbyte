
$(document).ready(function () {


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

	$( ".div_pladig" ).click(function() {
	  alert( "Aqui Nuestro Div" );
	});

	$( ".div_dapp" ).click(function() {
	  alert( "Aqui Nuestro Div" );
	});

	$( ".div_prod" ).click(function() {
	  alert( "Aqui Nuestro Div" );
	});

	$( ".div_tics" ).click(function() {
	  alert( "Aqui Nuestro Div" );
	});

	$("#btnEnviarPregunta").click(function(){
		var tipo = $("#tipo_modal").val();
		var correo_u = $("#correo_usuario").val();
		var mensaje = $("#mensaje").val();
		alert("Enviado Correctamente"+ tipo);
		$("#myModal").modal('hide');

	});
});
