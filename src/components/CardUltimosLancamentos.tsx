import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Card from './Card';
import { FontAwesome5 } from '@expo/vector-icons';
import Lancamento from './Lancamento';
const { width, height } = Dimensions.get('screen');

interface ICardUltimosLançamentos {
	lancamentos: any;
}

const CardUltimosLançamentos = ({ lancamentos }: ICardUltimosLançamentos) => {
	return (
		<Card>
			<View style={styles.cardTitleWrapper}>
				<FontAwesome5 name='dollar-sign' size={18} color='#9B9B9B' />
				<Text style={styles.cardTitleText}>Últimos lancamentos</Text>
			</View>
			{lancamentos &&
				lancamentos.map((lancamento: any) => {
					return <Lancamento data={lancamento.data} valor={lancamento.valor} />;
				})}
		</Card>
	);
};

const styles = StyleSheet.create({
	cardTitleWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 'auto',
		marginBottom: 14,
	},
	cardTitleText: {
		fontFamily: 'Roboto-Medium',
		color: '#9B9B9B',
		fontSize: 18,
		marginLeft: 10,
	},

	cardBody_planos__text: {
		fontFamily: 'Roboto-Medium',
		fontSize: 15,
		marginBottom: 6,
		color: '#9B9B9B',
	},
	cardBody_planos_receita__text: {
		fontFamily: 'Roboto-Bold',
		fontSize: 28,
		color: '#34A6E7',
	},
	cardBody_planos_divisor: {
		width: (width * 70) / 100,
		height: '0.4px',
		backgroundColor: '#878686',
		marginHorizontal: 'auto',
		marginVertical: 24,
	},
	cardBody_planos_despesas__text: {
		fontFamily: 'Roboto-Bold',
		fontSize: 28,
		color: '#F45F5F',
	},
});

export default CardUltimosLançamentos;
