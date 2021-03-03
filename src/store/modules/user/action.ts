import { IUser } from "../../../types";

export function LoginUser(user: IUser) {
	return {
	  type: 'LOGIN',
	  payload: {
		user
	  }
	}
  }
