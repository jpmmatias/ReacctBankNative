import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { HomeDrawerNavProps, IUser } from '../types';
import Header from '../components/Header';
import CardSaldoConta from '../components/CardSaldoConta';
import CardPlanosDeConta from '../components/CardPlanosDeConta';
import CardUltimosLançamentos from '../components/CardUltimosLancamentos';
import { useStore } from 'react-redux';

const { width, height } = Dimensions.get('screen');

// Lançamentos temporario
const lancamentos = [
	{ data: '11 de Fev.', valor: 22.5 },
	{ data: '11 de Fev.', valor: -5 },
	{ data: '11 de Fev.', valor: 80 },
	{ data: '11 de Fev.', valor: 0 },
];

function HomeFeed({ navigation }: HomeDrawerNavProps<'HomeFeed'>) {
	const [nome, setNome] = useState<string>('');
	const store = useStore();
	useEffect(() => {
		const user: IUser = store.getState().user.user;
		setNome(user.nome);
	}, []);
	const handleHeaderPress = () => {
		navigation.openDrawer();
	};
	const gotToHome = () => {
		navigation.navigate('HomeFeed');
	};
	return (
		<View style={styles.container}>
			<Header name={nome} openDrawer={handleHeaderPress} goToHome={gotToHome} />
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
		maxHeight: (height * 73) / 100,
		paddingHorizontal: (width * 7) / 100,
	},
});
export default HomeFeed;
