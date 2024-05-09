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

const formT = document.getElementById("formT");
const mensagensErro = document.getElementById("mensagensErro");

formT.addEventListener("submit", (e) => {
	e.preventDefault();

	const { nomeCompleto, email, senha } = formT.element;

	mensagensErro.innerHTML = "";

	if (!nomeCompleto.value.trim()) {
		displayError("Nome ncessario");
		return;
	}
	if (!email.value.trim() || !emailValido(email.value)) {
		displayError("Email invalido");
		return;
	}
	if (!senha.value.trim() || !senhaFraca(senha.value)) {
		displayError("A senha precisa ter 8 caracteres");
	}
	return
}
alert("Registro com sucesso");
formT.reset();
});

function displayError(message) {
	error.Messages.innerHTML += <div class = "error>${message}"</div>
}

function emailValido(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function senhaFraca(senha) {
	return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(senha);
}