import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Card from '../components/Card';
import { AppTabNavProps } from '../types';
const Depositar = ({ navigation, route }: AppTabNavProps<'Depositar'>) => {
	navigation.setOptions({ tabBarVisible: false });
	return (
		<Card>
			<View style={{ width: 200, height: 100 }}>
        <View style={depositHeader}>
          <Text>Depósitos</Text>
        </View>
        <View style={styles.depositContentWrapper}>
          <Text>
            Depósitos
          </Text>
        </View>
				<Button onPress={() => navigation.navigate('Home')} title='sair' />
			</View>
		</Card>
	);
};

const styles = StyleSheet.create({
  depositHeader: {

  },
  depositContentWrapper: {
    display: 'flex',
    
  }
})

export default Depositar;
