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
const swiper = new Swiper(".mySwiper", {
	direction: "horizontal",
	loop: true,

	pagination: {
		el: ".swiper-pagination",
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	scrollbar: {
		el: ".swiper-scrollbar",
	},
});
