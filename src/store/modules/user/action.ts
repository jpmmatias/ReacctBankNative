export function UserInfo(user: any) {
	return {
		type: 'ADD_USER',
		payload: {
			user,
		},
	};
}
