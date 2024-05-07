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

// function adicionarImagem() {
// 	let img = new Image();
// 	img.classList("col-md-4");
// 	img.src = "/imgs/funfaimg.jpg";
// 	document.getElementById("divimages").appendChild(img);
// }

//alterar paragrafo
// function editarParagrafo () {
// 	document.getElementById("textoExemplo").innerHTML
// }

//Swiper
var swiper = new Swiper(".swipertwo", {
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const nomeCompleto = document.querySelector("#nomeCompleto");
const idade = document.querySelector("#endereco");
const sexo = document.querySelector("#sexo");
const email = document.querySelector("#email");
const nomeUsuario = document.querySelector("#nomeUsuario");
const senha = document.querySelector("#telefone");
const confirmarSenha = document.querySelector("#confirmarSenha");

const form = document.querySelector("cadastro");

form.addEventListener("criar", function (e) {
	e.preventDefault();
});

const obrigatorio = (value) => (value === "" ? "" : true);

const verificarTamanho = (length, min, max) =>
	length < min || length > max ? false : true;

const emailValido = (email) => {
	const em = /^([a-z0-9.]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;
	return em.test(email);
};

const senhaSegura = (password) => {
	const em = new RegExp(
		"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
	);
	return em.test(password);
};

const mostrarErro = (input, message) => {
	const formGroup = input.parentElement;
	formGroup.classList.remove("sucesso");
	formGroup.classList.add("erro");

	const erro = formGroup.querySelector("small");
	erro.textContent = message;
};

const formGroup = input.parentElement;

formGroup.classList.remove("sucesso");
formGroup.classList.add("erro");

const erro = formGroup.querySelector("small");

erro.textContent = message;

const mostrarSucesso = (input) => {
	const formGroup = input.parentElement;
	formGroup.classList.remove("erro");
	formGroup.classList.add("sucesso");

	const erro = formGroup.querySelector("small");
	erro.textContent = "";
};

const verificarNomeUsuario = () => {
	let valido = false;
	const min = 3,
		max = 25;
	const nomeUsuario = nomeUsuarioEl.value.trim();

	if (!obrigatorio(nomeUsuario)) {
		mostrarErro(nomeUsuarioEl, "O nome de usuário é obrigatório");
	} else if (!verificarTamanho(nomeUsuario.length, min, max)) {
		mostrarErro(
			nomeUsuarioEl,
			`O nome de usuário deve ter entre ${min} e ${max} caracteres`
		);
	} else {
		mostrarSucesso(nomeUsuarioEl);
		valido = true;
	}
	return valido;
};

const verificarEmail = () => {
	let valido = false;
	const email = emailEl.value.trim();
	if (!obrigatorio(email)) {
		mostrarErro(emailEl, "O email é obrigatório");
	} else if (!emailValido(email)) {
		mostrarErro(emailEl, "Email inválido");
	} else {
		mostrarSucesso(emailEl);
		valido = true;
	}
	return valido;
};

const verificarSenha = () => {
	let valido = false;
	const senha = senhaEl.value.trim();
	if (!obrigatorio(senha)) {
		mostrarErro(senhaEl, "A senha é obrigatória");
	} else if (!verificarSenhaSegura(senha)) {
		mostrarErro(
			senhaEl,
			"A senha deve conter pelo menos 8 caracteres, um número, uma letra maiúscula, uma letra minúscula e um caractere especial"
		);
	} else {
		mostrarSucesso(senhaEl);
		valido = true;
	}
	return valido;
};

const verificarConfirmarSenha = () => {
	let valido = false;
	const confirmarSenha = confirmarSenhaEl.value.trim();
	if (!obrigatorio(confirmarSenha)) {
		mostrarErro(confirmarSenhaEl, "A confirmação de senha é obrigatória");
	} else if (confirmarSenha !== senhaEl.value) {
		mostrarErro(confirmarSenhaEl, "As senhas devem ser iguais");
	} else {
		mostrarSucesso(confirmarSenhaEl);
		valido = true;
	}
	return valido;
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let nomeUsuarioValido = verificarNomeUsuario(),
		emailValido = verificarEmail(),
		senhaValida = verificarSenha(),
		confirmarSenhaValida = verificarConfirmarSenha();

	let formularioValido =
		nomeUsuarioValido && emailValido && senhaValida && confirmarSenhaValida;

	if (formularioValido) {
		//mandar para o servidor
	}
});

form.addEventListener("input", (e) => {
	switch (e.target.id) {
		case "nomeCompleto":
			verificarNomeUsuario();
			break;
		case "email":
			verificarEmail();
			break;
		case "senha":
			verificarSenha();
			break;
		case "confirmarSenha":
			verificarConfirmarSenha();
			break;
	}
});
