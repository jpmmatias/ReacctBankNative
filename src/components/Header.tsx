import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen');
import { IHeader } from '../types';
const Header = ({ name, onPress }: IHeader) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Olá {name}</Text>
			<TouchableOpacity onPress={onPress}>
				<FontAwesome5 name='user-circle' size={24} color='white' />
			</TouchableOpacity>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		width,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: (height * 5) / 100,
		paddingHorizontal: (width * 7) / 100,
	},
	text: {
		fontFamily: 'Roboto-Medium',
		fontSize: 22,
		color: '#fff',
	},
});
