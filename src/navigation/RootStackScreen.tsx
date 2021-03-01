import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Center } from '../components/Center';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppTabs from './AppTabs';
import Transferir from '../screens/Transferir';
import AuthRoutes from './AuthRoutes';
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import Depositar from '../components/Depositar';

const RootStack = createStackNavigator();

const RootStackScreen = () => {
	const [loading, setLoading] = useState(true);
	const [logged, setlogged] = useState<any>('');
	let [fontsLoaded] = useFonts({
		'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
		'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
		'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
	});

	useEffect(() => {
		let storageToken = async () => {
			try {
				return await AsyncStorage.getItem('@tokenApp');
			} catch (err) {
				console.log(err);
			}
		};

		storageToken()
			.then((value) => {
				setlogged(value);
				setLoading(false);
			})
			.catch((err) => {
				setlogged(err);
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
			{logged ? (
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
		</RootStack.Navigator>
	);
};

export default RootStackScreen;
