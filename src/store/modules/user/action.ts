import { IPlanoconta, IUser, IDepositoConta, IPagamentoConta } from '../../../types';

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

export function DepositoContaInfo (DepositoConta: IDepositoConta){
	return{
	  type:"ADD_DEPOSITO_CONTA",
	  payload:{
		DepositoConta
	  }
	}
  }

  export function PagamentoContaInfo (PagamentoConta: IPagamentoConta){
	return{
	  type:"ADD_PAGAMENTO_CONTA",
	  payload:{
		PagamentoConta
	  }
	}
  }
