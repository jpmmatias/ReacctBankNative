import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './RootStackScreen';

const Routes = () => {
	return (
		<NavigationContainer>
			<RootStackScreen />
		</NavigationContainer>
	);
};

export default Routes;
