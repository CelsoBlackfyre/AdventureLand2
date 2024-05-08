// function alternarFormulario() {
// 	var pegarCadastro = document.getElementById("cadastroV");
// 	var pegarLogin = document.getElementById("login");

// 	if (pegarCadastro.style.display === "none") {
// 		pegarCadastro.style.display = "block";
// 		pegarLogin.style.display = "none";
// 	} else {
// 		pegarCadastro.style.display = "none";
// 		pegarLogin.style.display = "block";
// 	}
// }

const nomeCompleto = document.getElementById("nomeCompleto");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const form = document.getElementById("form");
const erro = document.getElementById("error");

function verificar() {
	if (nomeCompleto.value === "" || email.value === "" || senha.value === "") {
		erro.innerHTML = "Preencha todos os campos";
	} else {
		erro.innerHTML = "";
		form.submit();
	}

	if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
		erro.innerHTML = "Email invalido";
	}

	if (senha.value.length < 8) {
		erro.innerHTML =
			"Senha muito curta, coloque uma senha com mais de oito digitos";
	}
}

form.onsubmit = verificar;
