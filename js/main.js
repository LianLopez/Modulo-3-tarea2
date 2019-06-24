var app = new Vue({
	el: "#app",
	data: {
		juegos: {},
		partidoSeleccionado: {}
	}
});

app.juegos = games;

function mostrar(mes) {
	$(".juego").hide();
	$("#" + mes.id).show();
}

window.onload = function() {
	$(".juego").hide();
	$("#" + app.juegos[0].mes).show();
};

function seleccionarPartido(boton) {
	app.partidoSeleccionado = app.juegos[boton.id].partidos[boton.value];
	$(".home").hide();
	$(".juegoSeleccionado").show();
}
$("#volver").click(function() {
	$(".juegoSeleccionado").hide();
	$(".home").show();
});
