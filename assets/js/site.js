
$(document).ready(function () {
	console.log("ON READU");

	

	$(".div_pladig").click(function() {
		$("#descripcion_m").empty();
	  	$(".modal-title").text('');
		$(".modal-title").text('Plataformas Dígitales');
		//$("#img_modal_icon").attr("src", "assets/images/service-icon-02.png");
		$("#descripcion_m").append("<p>Asesoría en plataformas de ventas (Amazon y Mercado libre)</p>"+
							"<p>Creación de reportes de utilidades</p>"+
							"<p>Asesoría en surtimiento de stock</p>"+
							"<p>Control financiero/contable ante SAT y plataformas</p>");
		$("#tipo_modal").val("Plataformas Dígitales");
	  	$("#myModal").modal('show');
	});

	$( ".div_dapp" ).click(function() {
		$("#descripcion_m").empty();
		$(".modal-title").text('');
		$(".modal-title").text('Desarrollo de Aplicaciones');
		$("#descripcion_m").append("<p>Diseño y programación de páginas web y/o tienda online</p>"+
									"<p>Administración de sitios web (WordPress)</p>"+
									"<p>Creación de aplicaciones móviles (IOS y Android)</p>"+
									"<p>Programas personalizados a la medida</p>");
		$("#tipo_modal").val("Desarrollo de Aplicaciones");
	  	$("#myModal").modal('show');
	});

	$( ".div_prod" ).click(function() {
		$("#descripcion_m").empty();
	  	$(".modal-title").text('');
		$(".modal-title").text('Productos');
		$("#descripcion_m").append("<p>Equipos y accesorios de cómputo, impresoras,</p>"+
					"<p>consumibles para impresoras (originales y genéricos)</p>"+
					"<p>y más variedad solicita una cotización</p>");
		$("#tipo_modal").val("Productos");
	  	$("#myModal").modal('show');
	});

	$( ".div_tics" ).click(function() {
		$("#descripcion_m").empty();
	  	$(".modal-title").text('');
		$(".modal-title").text("TIC'S");
		$("#descripcion_m").append("<p>Instalación de cámaras CCTV</p>"+
				"<p>Infraestructura de red</p>"+
				"<p>Reparación y mantenimiento de equipo de cómputo e impresoras</p>"+
				"<p>Digitalización de control de horario</p>"+ 
				"<p>Administración de servidores</p>");
		$("#tipo_modal").val("TIC'S");
	  	$("#myModal").modal('show');
	});

	$("#btnEnviarPregunta").click(function(){
		var tipo = $("#tipo_modal").val();
		var correo_u = $("#correo_usuario").val();
		var mensaje = $("#mensaje").val();
		//Aqui ira el Ajax a phpMailer.php
		$("#myModal").modal('hide');
		t3=tipo+","+correo_u+","+mensaje+","+new Date().getTime();
	    $.post("php/sendCorreo.php",{datos:t3, a:"A1D6B6D7"},function(respuesta){
	    	console.log(respuesta);
	    	if(respuesta == "Correo Enviado")
	    		alert("Enviado Correctamente");
	    	else
	    		alert("Ocurrio un error");
	    });

	});
});

$( ".div_ci" ).click(function() {
		$("#descripcion_m").empty();
		$(".modal-title").text('');
		$(".modal-title").text('Control Interno');
		$("#descripcion_m").append("<p>Gestión de la Información</p>"+ 
			"<p>Reingeniería de procesos</p>"+
			"<p>Controlaría Interna</p>"+
			"<p>Control y rotación de inventarios</p>"+
			"<p>Punto de equilibrio</p>"+
			"<p>Elaboración de manuales de operación y funciones</p>"+
			"<p>Automatización de reportes (Excel)</p>");
		$("#tipo_modal").val("Control Interno");
	  	$("#myModal").modal('show');
	});

	$( ".div_conta" ).click(function() {
		$("#descripcion_m").empty();
	  	$(".modal-title").text('');
		$(".modal-title").text('Contabilidad e Impuestos');
		$("#descripcion_m").append("<p>Revisiones a los controles de los procesos financieros</p>"+
						"<p>Asesoría Fiscal y control de obligaciones</p>"+
						"<p>Presentación de declaraciones de impuestos</p>"+
						"<p>Presentación de declaraciones informativas</p>"+
				      	"<p>Firma electrónica, facturas digitales y nóminas digitales</p>"+ 
				 		"<p>Atención a cartas de invitación del SAT</p>"+
				      	"<p>Altas, bajas o modificaciones ante el IMSS</p>");
		$("#tipo_modal").val("Contabilidad e Impuestos");
	  	$("#myModal").modal('show');
	});
