import React, { useRef } from 'react';
import { View, Text, } from 'react-native';
import Card from '../components/Card';
import Button from '../components/Button';
import { AppTabNavProps } from '../types';
import { StyleSheet, Image, Dimensions, TextInput } from 'react-native';

const { width, height } = Dimensions.get('window');
const Transferir = ({ navigation, route }: AppTabNavProps<'Transferir'>) => {
	navigation.setOptions({ tabBarVisible: false });
	const handleSubmit = () => { };
	const inputRef = useRef<TextInput>(null);
	return (
		//<Card>
		//<View style={{ width: '200px', height: '100px' }}>
		//<Button onPress={() => navigation.navigate('Home')} title='sair' />
		//<Text>Transferir</Text>
		//</View>
		//</Card>
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={require('../assets/images/logo-gamaacademy.png')}
			/>
			<Card>
				<View style={styles.cardBody}>
					<Text style={styles.title}>Transferências</Text>
					<View style={styles.form}>
						<TextInput

						></TextInput>
						<TextInput

						></TextInput>
						<TextInput

						></TextInput>
						<TextInput

						></TextInput>
						<Button
							text='Realizar Transferência'
							handleClick={handleSubmit}
							textColor='#fff'
							backgroundColor='#68DE5A'
							textSize={22}
							widthSize={265.64}
							heightSize={56.97}
							textWeight='600'
						/>
					</View>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		fontFamily: 'Roboto-Regular',
		flex: 1,
		backgroundColor: '#8C52E5',
		alignItems: 'center',
	},
	form: {
		marginBottom: 37,
	},
	logo: {
		height: 55,
		width: 249,
		marginTop: 40,
		marginBottom: 60,
	},
	cardBody: {
		width: (width * 70) / 100,
		height: (height * 66) / 100,
	},
	title: {
		marginTop: 5,
		fontSize: 21,
		textAlign: 'center',
		fontWeight: '500',
		color: '#1d1d1d',
		lineHeight: 24.61,
		marginBottom: 60,
	},
	link: {
		fontWeight: '500',
		fontSize: 13,
		marginBottom: 20,
		color: '#8C52E5',
		textAlign: 'center',
	},
	input: {
		padding: 5,
		borderBottomWidth: 1,
		borderBottomColor: '#878686',
	},
});

export default Transferir;
