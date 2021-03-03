import { IPlanoconta, IUser } from '../../../types';

export function LoginUser(user: IUser) {
	return {
		type: 'LOGIN',
		payload: {
			user,
		},
	};
}

export function savePlanosConta(planosConta: IPlanoconta[]) {
	return {
		type: 'ADD_PLANOS_CONTA',
		payload: {
			planosConta,
		},
	};
}

export function putPlanoConta(planoConta: IPlanoconta) {
	return {
		type: 'PUT_PLANO_CONTA',
		payload: {
			planoConta,
		},
	};
}
