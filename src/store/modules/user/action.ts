export function LoginUser(user: any) {
	return {
		type: 'LOGIN',
		payload: {
			user: user,
			logged: true,
		},
	};
}

export function Logout() {
	return {
		type: 'LOGOUT',
	};
}
