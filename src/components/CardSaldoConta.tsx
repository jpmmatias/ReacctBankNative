import React from 'react';
import { PixelRatio, StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import { FontAwesome5 } from '@expo/vector-icons';

interface ICardSaldoConta {
	saldoDaConta: string | number;
	lancamentoDeDebito: string | number;
}

const CardSaldoConta = ({
	saldoDaConta,
	lancamentoDeDebito,
}: ICardSaldoConta) => {
	return (
		<Card>
			<View style={styles.cardTitleWrapper}>
				<FontAwesome5 name='dollar-sign' size={18} color='#9B9B9B' />
				<Text style={styles.cardTitleText}>Saldo da conta</Text>
			</View>
			<View style={styles.cardBody_saldo}>
				<Text style={styles.cardBody_saldo__text}>R$: {saldoDaConta}</Text>
				<Text style={styles.cardBody_saldo__text_2}>
					Lançamentos de débito: R$ {lancamentoDeDebito}
				</Text>
			</View>
		</Card>
	);
};

export default CardSaldoConta;

const styles = StyleSheet.create({
	cardTitleWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		height: PixelRatio.getPixelSizeForLayoutSize(15),
		marginBottom: 14,
	},
	cardTitleText: {
		fontFamily: 'Roboto-Medium',
		color: '#9B9B9B',
		fontSize: 18,
		marginLeft: 10,
	},
	cardBody_saldo: {},
	cardBody_saldo__text: {
		color: '#34A6E7',
		fontFamily: 'Roboto-Bold',
		fontSize: 28,
		marginBottom: 10,
	},
	cardBody_saldo__text_2: {
		color: '#9B9B9B',
		fontFamily: 'Roboto-Medium',
		fontSize: 15,
	},
});
