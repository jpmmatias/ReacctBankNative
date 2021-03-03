import React, { useEffect, useState, useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { Center } from '../components/Center';
import AppTabs from './AppTabs';
import Transferir from '../screens/Transferir';
import AuthRoutes from './AuthRoutes';
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import Depositar from '../components/Depositar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../utils/auth/AuthProvider';
import Login from '../screens/Login';

const RootStack = createStackNavigator();

const RootStackScreen = () => {
	const { logged, login } = useContext(AuthContext);
	const [loading, setLoading] = useState(true);
	let [fontsLoaded] = useFonts({
		'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
		'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
		'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
	});

	useEffect(() => {
		let storageToken = async () => {
			try {
				return await AsyncStorage.getItem('logged');
			} catch (err) {
				console.log(err);
			}
		};

		storageToken()
			.then((value) => {
				if (value === 'true') {
					login();
				}
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
			});
	}, []);

	if (loading && !fontsLoaded) {
		return (
			<Center>
				<ActivityIndicator size='large' color='#fff' />
			</Center>
		);
	}

	return (
		<RootStack.Navigator
			headerMode='none'
			screenOptions={{ animationEnabled: false }}
			mode='modal'
		>
			{!logged ? (
				<RootStack.Screen name='AppTabs' component={AppTabs} />
			) : (
				<RootStack.Screen name='AuthRoutes' component={AuthRoutes} />
			)}
			<RootStack.Screen
				name='ModalTransferir'
				component={Transferir}
				options={{ animationEnabled: true }}
			/>
			<RootStack.Screen
				name='ModalDepositar'
				component={Depositar}
				options={{ animationEnabled: true }}
			/>
			<RootStack.Screen name='Login' component={Login} />
		</RootStack.Navigator>
	);
};

export default RootStackScreen;
