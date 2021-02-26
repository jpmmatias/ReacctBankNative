export function Auth(user: any) {
	return {
		type: 'Loggin',
		payload: {
			user,
		},
	};
}
