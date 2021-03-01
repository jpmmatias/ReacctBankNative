import React from 'react';
import { View, Text, Button } from 'react-native';
import Card from '../components/Card';
import { AppTabNavProps } from '../types';
const Depositar = ({ navigation, route }: AppTabNavProps<'Depositar'>) => {
	navigation.setOptions({ tabBarVisible: false });
	return (
		<Card>
			<View style={{ width: '200px', height: '100px' }}>
				<Button onPress={() => navigation.navigate('Home')} title='sair' />
				<Text>Depositarrr</Text>
			</View>
		</Card>
	);
};

export default Depositar;
