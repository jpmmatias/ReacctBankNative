import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { Center } from '../components/Center';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppTabs from './AppTabs';
import AuthRoutes from './AuthRoutes';

const Routes = () => {
	const [loading, setLoading] = useState(true);
	const [logged, setlogged] = useState<any>('');

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

	if (loading) {
		return (
			<Center>
				<ActivityIndicator size='large' color='#fff' />
			</Center>
		);
	}
	return (
		<NavigationContainer>
			{!logged ? <AppTabs /> : <AuthRoutes />}
		</NavigationContainer>
	);
};

export default Routes;
