//SCRIPTS DO SITE

//container-criar-conta
//container-login

function alternarFormulario() {
	var pegarCadastro = document.getElementById("cadastroV");
	var pegarLogin = document.getElementById("login");

	if (pegarCadastro.style.display === "none") {
		pegarCadastro.style.display = "block";
		pegarLogin.style.display = "none";
	} else {
		pegarCadastro.style.display = "none";
		pegarLogin.style.display = "block";
	}
}

const form = document.getElementById("form");
const nomeCompleto = document.getElementById("nomeCompleto");
const idade = document.getElementById("idade");
const email = document.getElementById("email");
const endereco = document.getElementById("endereco");
const telefone = document.getElementById("telefone");
const nomeUsuario = document.getElementById("nomeUsuario");
const senha = document.getElementById("senha");
const senha2 = document.getElementById("senha2");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	validarDados();
});

const erroMensagem = (element, message) => {
	const controleEntrada = element.parentElement;
	const mostrarErro = controleEntrada.querySelector(".erro");

	mostrarErro.innerHTML = message;
	controleEntrada.classList.add("erro");
	controleEntrada.classList.remove("sucesso");
};

const sucessoMensagem = (element, message) => {
	const controleEntrada = element.parentElement;
	const mostrarSucesso = controleEntrada.querySelector(".erro");

	mostrarSucesso.innerHTML = message;
	controleEntrada.classList.add("sucesso");
	controleEntrada.classList.remove("erro");
};

const emailValido = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const validarDados = function () {
	const nomeL = nomeCompleto.value.trim();
	const emailL = email.value.trim();
	const idadeL = idade.value.trim();
	const telefoneL = telefone.value.trim();
	const enderecoL = endereco.value.trim();
	const nomeUsuarioL = nomeUsuario.value.trim();
	const senhaL = senha.value.trim();
	const senha2L = senha2.value.trim();

	if (nomeL === "") {
		erroMensagem(nomeCompleto, "O nome completo deve ser preenchido");
	} else {
		sucessoMensagem(nomeCompleto);
	}

	if (emailL === "") {
		erroMensagem(email, "O email deve ser preenchido");
	} else if (!emailValido(emailL)) {
		erroMensagem(email, "Email invalido");
	} else {
		sucessoMensagem(email);
	}

	if (idadeL === "") {
		erroMensagem(idade, "A idade deve ser preenchida");
	} else if (idadeL < 18 || idadeL > 120) {
		erroMensagem(idade, "A pessoa necessita ter mais de 18 anos");
	} else {
		sucessoMensagem(idade);
	}

	if (telefoneL === "") {
		erroMensagem(telefone, "O telefone deve ser preenchido");
	} else if (telefoneL.length < 11) {
		erroMensagem(telefone, "Telefone invalido, digite apenas os 11 numeros");
	} else {
		sucessoMensagem(telefone);
	}

	if (enderecoL === "") {
		erroMensagem(endereco, "O endereço deve ser preenchido");
	} else {
		sucessoMensagem(endereco);
	}

	if (nomeUsuarioL === "") {
		erroMensagem(nomeUsuario, "O nome de usuario deve ser preenchido");
	} else {
		sucessoMensagem(nomeUsuario);
	}

	if (senhaL === "") {
		erroMensagem(senha, "A senha deve ser preenchida");
	} else if (senhaL.length < 8) {
		erroMensagem(senha, "A senha deve ter pelo menos 8 digitos");
	} else {
		sucessoMensagem(senha);
	}

	if (senha2L === "") {
		erroMensagem(senha2, "A senha deve ser confirmada");
	} else if (senha2L !== senhaL) {
		erroMensagem(senha2, "As senhas devem ser iguais");
	} else {
		sucessoMensagem(senha2);
	}
};
