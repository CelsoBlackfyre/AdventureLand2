$(document).ready(function () {
	//validar nome
	$("#verificarNomeCompleto").hide();
	let nomeCompletoErro = true;
	$("#nomeCompleto").keyup(function () {
		validarNomeCompleto();
	});

	function validarNomeCompleto() {
		let nomeCompleto = $("#nomeCompleto").val();
		if (nomeCompleto == "") {
			$("#verificarNomeCompleto").show();
			nomeCompletoErro = false;
			return false;
		} else if (nomeCompleto.length <= 5) {
			$("#verificarNomeCompleto").show();
			$("#verificarNomeCompleto").html("Escreva o nome completo");
			nomeCompletoErro = false;
			return false;
		} else {
			$("#verificarNomeCompleto").hide();
		}
	}
});
