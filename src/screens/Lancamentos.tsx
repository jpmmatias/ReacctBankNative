import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import CardUltimosLançamentos from '../components/CardUltimosLancamentos';
import Header from '../components/Header';
import { LancamentosDrawerNavProps, IUser } from '../types';
const { width, height } = Dimensions.get('screen');
import { useStore } from 'react-redux';
//@ts-ignore
import styled from 'styled-components/native';

const Container = styled.View`
	flex: 1;
	background-color: #8c52e5;
`;
const ScrollView = styled.ScrollView`
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

const Lancamentos = ({
	navigation,
}: LancamentosDrawerNavProps<'Lancamentos'>) => {
	const [nome, setNome] = useState<string>('');
	const store = useStore();
	useEffect(() => {
		const user: IUser = store.getState().user.user;
		setNome(user.nome);
	}, []);
	const handleHeaderPress = () => {
		navigation.openDrawer();
	};
	const goToHome = () => {
		navigation.navigate('Home');
	};
	return (
		<Container>
			<Header name={nome} openDrawer={handleHeaderPress} goToHome={goToHome} />
			<ScrollView>
				<CardUltimosLançamentos lancamentos={lancamentos} />
			</ScrollView>
		</Container>
	);
};

export default Lancamentos;
