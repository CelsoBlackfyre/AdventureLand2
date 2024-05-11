//SCRIPTS DO SITE

//container-criar-conta
//container-login

var swiper = new Swiper(".swipertwo", {
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

//mostrar alerta da lojas
document.getElementById("alerta").addEventListener("click", mostrarAlerta);

function mostrarAlerta() {
	if (
		document.querySelector(".notifications-container").style.display === "none"
	) {
		document.querySelector(".notifications-container").style.display = "block";
	} else {
		document.querySelector(".notifications-container").style.display = "none";
	}
}
