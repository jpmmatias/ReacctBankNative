import React, { useRef } from 'react';
import { View, Text, } from 'react-native';
import Card from '../components/Card';
import Button from '../components/Button';
import { AppTabNavProps } from '../types';
import { StyleSheet, Image, Dimensions, TextInput } from 'react-native';

const { width, height } = Dimensions.get('window');
const Depositar = ({ navigation, route }: AppTabNavProps<'Depositar'>) => {

	navigation.setOptions({ tabBarVisible: false });
	const handleSubmit = () => { };
	const inputRef = useRef<TextInput>(null);
	return (
		
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={require('../assets/images/logo-gamaacademy.png')}
			/>
			<Card>
				<View style={styles.cardBody}>
					<Image
						style={styles.account}
						source={require('../assets/images/account.png')}
					/>
					<Text style={styles.depos}>Depósitos</Text>
					<View style={styles.form}>
						<TextInput
							placeholder="Destinatário"
							style={[styles.input, { marginBottom: 20 }]}
						></TextInput>
						<TextInput
							placeholder="Plano de conta"
							style={[styles.input, { marginBottom: 20 }]}
						></TextInput>
						<TextInput
							placeholder="Tipo de transação"
							style={[styles.input, { marginBottom: 20 }]}
						></TextInput>
						<TextInput
							placeholder="Valor de depósito"
							style={[styles.input, { marginBottom: 70 }]}
						></TextInput>
						<Button
							text='Realizar Depósitos'
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
	account: {
		width: 30,
		height:30,
		marginBottom: -5
		


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
	depos:{
		marginTop:-20,
		textAlign: 'center',
		marginBottom: 60,
		fontSize: 21
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

export default Depositar;