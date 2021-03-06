import React from 'react';
import Login from '../screens/Login';
import SignIn from '../screens/SignIn';
import { AuthParamList } from '../types';
import AccountCreated from '../screens/AccountCreated';
import PasswordRecovery from '../screens/PasswordRecovery';
import PasswordRecovery2 from '../screens/PasswordRecovery2';
import PasswordChanged from '../screens/PasswordChanged';
import { createStackNavigator } from '@react-navigation/stack';
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
		</Stack.Navigator>
	);
};

export default AuthRoutes;
