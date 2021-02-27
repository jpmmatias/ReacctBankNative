import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { Center } from '../components/Center';
import AppTabs from './AppTabs';
import AuthRoutes from './AuthRoutes';
import { useStore } from 'react-redux';

const Routes = () => {
	const [loading, setLoading] = useState(true);
	const [logged, setlogged] = useState<any>('');
	const store = useStore();
	const user = store.getState().user;

	useEffect(() => {
		console.log(store.getState());
		setlogged(store.getState().user.logged);
		setLoading(false);
	}, []);

	useEffect(() => {
		console.log('saiu');
		console.log(store.getState().user);
		setlogged(store.getState().user.logged);
	}, [store.getState().user.logged]);

	if (loading) {
		return (
			<Center>
				<ActivityIndicator size='large' color='#fff' />
			</Center>
		);
	}
	return (
		<NavigationContainer>
			{logged !== false ? <AppTabs /> : <AuthRoutes />}
		</NavigationContainer>
	);
};

export default Routes;
