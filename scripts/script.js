//SCRIPTS DO SITE

//container-criar-conta
//container-login

function alternarFormulario() {
	var pegarCadastro = document.getElementById("cadastro");
	var pegarLogin = document.getElementById("login");

	if (pegarCadastro.style.display === "none") {
		pegarCadastro.style.display = "block";
		pegarLogin.style.display = "none";
	} else {
		pegarCadastro.style.display = "none";
		pegarLogin.style.display = "block";
	}
}
