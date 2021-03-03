import React from 'react';
import Card from './Card';
import { FontAwesome5 } from '@expo/vector-icons';
import Lancamento from './Lancamento';
import * as Random from 'expo-random';
//@ts-ignore
import styled from 'styled-components/native';

interface ICardUltimosLançamentos {
	lancamentos: any;
}

const TitleWrapper = styled.View`
	flex-direction: row;
	align-items: center;
	height: auto;
	margin-bottom: 14px;
`;

const Title = styled.Text`
	font-family: 'Roboto-Medium';
	color: #9b9b9b;
	font-size: 18px;
	margin-left: 10px;
`;

const CardUltimosLançamentos = ({ lancamentos }: ICardUltimosLançamentos) => {
	return (
		<Card>
			<TitleWrapper>
				<FontAwesome5 name='dollar-sign' size={18} color='#9B9B9B' />
				<Title>Últimos lancamentos</Title>
			</TitleWrapper>
			{lancamentos &&
				lancamentos.map((lancamento: any) => {
					return (
						<Lancamento
							key={`${Random.getRandomBytes(5)}`}
							data={lancamento.data}
							valor={lancamento.valor}
						/>
					);
				})}
		</Card>
	);
};

export default CardUltimosLançamentos;
