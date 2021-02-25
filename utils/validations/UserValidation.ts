import * as yup from 'yup';

export const UserSchema: any = yup.object().shape({
	cpf: yup
		.string()
		.min(11, 'O CPF deve ter 11 caracteres.')
		.required('Por favor, insira seu CPF.'),
	name: yup.string().required('Por favor, insira seu nome.'),
	username: yup.string().required('Por favor, insira seu nome de usuário.'),
	password: yup
		.string()
		.min(4, 'A senha precisa ter no mínimo quatro caracteres.')
		.required('Por favor escolha uma senha.')
		.matches(
			/^.*(?=.{4,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
			'A senha precisa ter 4 letras, uma letra maiúscula, um número e um caractere especial. '
		),
	password2: yup
		.string()
		.required('Por favor, confirme sua senha.')
		.when('password', {
			is: (password: string) =>
				password && password.length > 0 ? true : false,
			then: yup
				.string()
				.oneOf([yup.ref('password')], 'As senhas informadas não são iguais.'),
		}),
});
