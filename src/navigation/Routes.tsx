import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { Center } from '../components/Center';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppTabs from './AppTabs';
import AuthRoutes from './AuthRoutes';
import { useFonts } from 'expo-font';
import RootStackScreen from './RootStackScreen';

const Routes = () => {
	return (
		<NavigationContainer>
			<RootStackScreen />
		</NavigationContainer>
	);
};

export default Routes;
