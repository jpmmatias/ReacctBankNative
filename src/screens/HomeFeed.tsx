import React from 'react';
import Card from '../components/Card';
import { StyleSheet, View, ScrollView, Dimensions, PixelRatio } from 'react-native';
import { HomeDrawerNavProps } from '../types';
import Header from '../components/Header';
import CardSaldoConta from '../components/CardSaldoConta';
import CardPlanosDeConta from '../components/CardPlanosDeConta';
import CardUltimosLançamentos from '../components/CardUltimosLancamentos';
const { width, height } = Dimensions.get('screen');

// Lançamentos temporario
const lancamentos = [
	{ data: '11 de Fev.', valor: 22.5 },
	{ data: '11 de Fev.', valor: -5 },
	{ data: '11 de Fev.', valor: 80 },
	{ data: '11 de Fev.', valor: 0 },
];

function HomeFeed({ navigation }: HomeDrawerNavProps<'HomeFeed'>) {
	const handleHeaderPress = () => {
		navigation.openDrawer();
	};
	return (
		<View style={styles.container}>
			<Header name='Usuário' onPress={handleHeaderPress} />
			<ScrollView style={styles.scrollWrapper}>
				<CardSaldoConta saldoDaConta={0} lancamentoDeDebito={0} />
				<CardPlanosDeConta receita={0} despesas={0} />
				<CardUltimosLançamentos lancamentos={lancamentos} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#8C52E5',
	},
	font: {
		fontFamily: 'Roboto-Regular',
	},
	scrollWrapper: {
		maxHeight: PixelRatio.getPixelSizeForLayoutSize((height * 75) / 100),
		paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize((width * 1.5) / 100)
	},
});
export default HomeFeed;
