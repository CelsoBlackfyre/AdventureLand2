$(function () {
	$("form[name='formT']").validate({
		rules: {
			nomeCompleto: {
				required: true,
			},
			email: {
				required: true,
				email: true,
			},
			idade: {
				required: true,
			},
			telefone: {
				required: true,
			},
			endereco: {
				required: true,
			},
			nomeUsuario: {
				required: true,
			},
			senha: {
				required: true,
				minlength: 8,
			},
		},
		messages: {
			nomeCompleto: "Por favor, insira seu nome completo.",
			email: "Por favor, insira seu email.",
			idade: "Coloque sua idade",
			telefone: "Por favor, insira seu telefone.",
			endereco: "Por favor, insira seu endereço.",
			nomeUsuario: "Por favor, insira seu nome de usuário.",
			senha: {
				required: "Por favor, insira sua senha.",
				minlength: "Sua senha deve ter pelo menos 8 caracteres.",
			},
		},
		submitHandler: function (form) {
			// submit variables to local storage
			localStorage.setItem("novoForm", form.data);
			form.submit();
		},
	});
});
