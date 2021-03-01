import React from 'react';
import { Dimensions, View, ScrollView, StyleSheet } from 'react-native';
import CardUltimosLançamentos from '../components/CardUltimosLancamentos';
import Header from '../components/Header';
import { LancamentosDrawerNavProps } from '../types';
const { width, height } = Dimensions.get('screen');

// Lançamentos temporario
const lancamentos = [
	{ data: '11 de Fev.', valor: 22.5 },
	{ data: '11 de Fev.', valor: -5 },
	{ data: '11 de Fev.', valor: 80 },
	{ data: '11 de Fev.', valor: 0 },
];

const Lancamentos = ({
	navigation,
}: LancamentosDrawerNavProps<'Lancamentos'>) => {
	const handleHeaderPress = () => {
		navigation.openDrawer();
	};
	return (
		<View style={styles.container}>
			<Header name='Usuário' onPress={handleHeaderPress} />
			<ScrollView style={styles.scrollWrapper}>
				<CardUltimosLançamentos lancamentos={lancamentos} />
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#8C52E5',
	},
	font: {
		fontFamily: 'Roboto-Regular',
	},
	scrollWrapper: {
		maxHeight: (height * 73) / 100,
		paddingHorizontal: (width * 7) / 100,
	},
});
export default Lancamentos;
