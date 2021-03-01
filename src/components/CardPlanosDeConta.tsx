import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Card from './Card';
import { FontAwesome5 } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen');

interface ICardPlanosDeConta {
	receita: string | number;
	despesas: string | number;
}

const CardPlanosDeConta = ({ receita, despesas }: ICardPlanosDeConta) => {
	return (
		<Card>
			<View style={styles.cardTitleWrapper}>
				<FontAwesome5 name='dollar-sign' size={18} color='#9B9B9B' />
				<Text style={styles.cardTitleText}>Planos de conta</Text>
			</View>
			<View>
				<View>
					<Text style={styles.cardBody_planos__text}>
						Tipo do plano: Receita
					</Text>
					<Text style={styles.cardBody_planos_receita__text}>
						R$: {receita}
					</Text>
				</View>
				<View style={styles.cardBody_planos_divisor}></View>
				<View>
					<Text style={styles.cardBody_planos__text}>
						Tipo do plano: Despesas
					</Text>
					<Text style={styles.cardBody_planos_despesas__text}>
						- R$: {despesas}
					</Text>
				</View>
			</View>
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

export default CardPlanosDeConta;
