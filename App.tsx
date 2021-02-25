import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Toast from 'react-native-toast-message';
import { StyleSheet, View } from 'react-native';
import Routes from './navigation/Routes';

export default function App() {
	return (
		<>
			<Routes />
			<Toast ref={(ref) => Toast.setRef(ref)} />
		</>
	);
}
