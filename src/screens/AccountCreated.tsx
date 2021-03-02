import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { AuthNavProps } from '../types';
// @ts-ignore
import like from '../assets/images/like.png';
import { Center } from '../components/Center';
const { width, height } = Dimensions.get('window');

const AccountCreated = ({
	navigation,
	route,
}: AuthNavProps<'AccountCreated'>) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('Login');
		}, 5000);
	}, []);
	return (
		<Center>
			<Image style={styles.like} source={like} />
			<Text style={styles.text}>Conta criada com sucesso!</Text>
		</Center>
	);
};

const styles = StyleSheet.create({
	text: {
		fontFamily: 'Roboto-Medium',
		color: '#fff',
		fontSize: 20,
	},

	like: {
		height: 162,
		width: 162,
		marginBottom: 30,
	},
});

export default AccountCreated;
