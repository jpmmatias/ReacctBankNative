import React from 'react';
import Login from '../screens/Login';
import SignIn from '../screens/SignIn';
import { AuthParamList } from '../types';
import AccountCreated from '../screens/AccountCreated';
import PasswordRecovery from '../screens/PasswordRecovery';
import PasswordRecovery2 from '../screens/PasswordRecovery2';
import PasswordChanged from '../screens/PasswordChanged';
import UserIndoScreen from '../screens/UserInfoScreen';
import Depositar from '../screens/Depositar';
import Transferir from '../screens/Transferir';
import { createStackNavigator } from '@react-navigation/stack';
import Planos from '../screens/Planos';
import Transferir from '../screens/Transferir';
const Stack = createStackNavigator<AuthParamList>();

const AuthRoutes = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='Login'
		>
			<Stack.Screen name='Login' component={Login} />
			<Stack.Screen name='SignIn' component={SignIn} />
			<Stack.Screen name='AccountCreated' component={AccountCreated} />
			<Stack.Screen name='PasswordRecovery' component={PasswordRecovery} />
			<Stack.Screen name='PasswordRecovery2' component={PasswordRecovery2} />
			<Stack.Screen name='PasswordChanged' component={PasswordChanged} />
			<Stack.Screen name='Planos' component={Planos} />
			<Stack.Screen name='Transferir' component={Transferir} />
			<Stack.Screen name='Depositar' component={Depositar} />

		

		</Stack.Navigator>
	);
};

export default AuthRoutes;
