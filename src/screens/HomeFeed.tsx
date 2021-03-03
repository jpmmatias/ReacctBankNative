import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { HomeDrawerNavProps, IUser } from '../types';
import Header from '../components/Header';
import CardSaldoConta from '../components/CardSaldoConta';
import CardPlanosDeConta from '../components/CardPlanosDeConta';
import CardUltimosLançamentos from '../components/CardUltimosLancamentos';
import { useStore } from 'react-redux';
//@ts-ignore
import styled from 'styled-components/native';
const { width, height } = Dimensions.get('screen');

const Container = styled.View`
	flex: 1;
	background-color: #8c52e5;
`;

const ScrolView = styled.ScrollView`
	max-height: ${(height * 73) / 100}px;
	padding-left: ${(width * 7) / 100}px;
	padding-right: ${(width * 7) / 100}px;
`;

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
		<Container>
			<Header name={nome} openDrawer={handleHeaderPress} goToHome={gotToHome} />
			<ScrolView>
				<CardSaldoConta saldoDaConta={0} lancamentoDeDebito={0} />
				<CardPlanosDeConta receita={0} despesas={0} />
				<CardUltimosLançamentos lancamentos={lancamentos} />
			</ScrolView>
		</Container>
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
