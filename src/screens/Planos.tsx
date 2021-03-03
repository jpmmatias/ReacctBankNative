import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Center } from '../components/Center';
import Card from '../components/Card';
import Button from '../components/Button';
import api from '../services/api';
import Toast from 'react-native-toast-message';
import { IListData, IPlanoconta } from '../types';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-community/picker';
import { Ionicons } from '@expo/vector-icons';
import { AppTabNavProps } from '../types';

const { width, height } = Dimensions.get('window');

const Planos = ({ navigation, route }: AppTabNavProps<'Planos'>) => {
	const [listData, setListData] = useState<IListData[]>([])
	const [planosConta, setPlanosConta] = useState<IPlanoconta[]>([])
	const [descricao, setDescricao] = useState('')
	const [tipoMovimento, setTipoMovimento] = useState('')
	const [novoPlano, setNovoPlano] = useState<IPlanoconta>({
		descricao: '',
		id: 0,
		login: 'chris',
		tipoMovimento: '',
		padrao: false,
	});



	function handleChange(method: any, campo: string, value: string) {
		method(value)
		setNovoPlano({ ...novoPlano, [campo]: value })
	}

	function adicionarPlanoContas() {
		let id = planosConta[planosConta.length - 1].id + 1;
		let plano = { ...novoPlano, id };
		api.post('lancamentos/planos-conta?login=chris', plano, {
			headers: {
				Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaHJpcyIsImlkVXN1YXJpbyI6NDMxLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjE0NjQ5NDQyLCJleHAiOjE2MTQ2NTMwNDJ9.jCmz-kkCvbb4dK6fkQR_ZcyOriDI_gJi_RHYkAnsC533ihAiI7FvaC7UbTdsE-kgLibUbHeq-8d4Y0CmECrrbQ",
			}
		}).then(res => {
			Toast.show({
				type: 'success',
				position: 'top',
				text1: "sucesso",
			});
		}).catch(err => {
			Toast.show({
				type: 'error',
				position: 'top',
				text1: err.message,
			});
		})

	}

	useEffect(() => {
		api.get("/lancamentos/planos-conta?login=chris", {
			headers: {
				Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaHJpcyIsImlkVXN1YXJpbyI6NDMxLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjE0NjQ5NDQyLCJleHAiOjE2MTQ2NTMwNDJ9.jCmz-kkCvbb4dK6fkQR_ZcyOriDI_gJi_RHYkAnsC533ihAiI7FvaC7UbTdsE-kgLibUbHeq-8d4Y0CmECrrbQ",
			}
		}).then(res => {
			Toast.show({
				type: 'success',
				position: 'top',
				text1: "sucesso",
			});

			let planosContaAux: IPlanoconta[] = res.data
			let result: IListData[] = []
			for (let i = 0; i < planosContaAux.length; i++) {
				result.push({ key: planosContaAux[i].descricao + " (" + planosContaAux[i].tipoMovimento + ")" })
			}

			setListData(result)
			setPlanosConta(res.data)

		}).catch(err => {
			Toast.show({
				type: 'error',
				position: 'top',
				text1: err.message,
			});
		})

	}, [])
	navigation.setOptions({ tabBarVisible: false });
	const handleSubmit = () => { };
	return (

		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={require('../assets/images/logo-gamaacademy.png')}
			/>
			<View
				style={{
					width: width,
					paddingLeft: (width * 10) / 100,
					marginBottom: 10,
				}}
			>
				<TouchableOpacity
					onPress={() => {
						navigation.goBack();
					}}
				>
					<Ionicons name='arrow-back' color='#fff' size={22} />
				</TouchableOpacity>
			</View>
			<ScrollView style={styles.scrollWrapper}>
				<Card>
					<View style={styles.cardBody}>
						<Text style={styles.planos}>Planos de Contas</Text>
						<TextInput
							placeholderTextColor='#878686'
							placeholder='Nome'
							textContentType='name'
							blurOnSubmit={false}
							style={[styles.input, { marginBottom: 40 }]}
							value={descricao}
							onChangeText={(text: string) => handleChange(setDescricao, "descricao", text)}
						></TextInput>
						{/* <Picker selectedValue={tipoMovimento} onValueChange={(value) => handleChange(setTipoMovimento, "tipoMovimento", value.toString())}>
						{planosConta.map(planoConta =>{
							if(planoConta.padrao){
								return(
									<Picker.Item label={planoConta.descricao+" ("+planoConta.tipoMovimento+") "} value={planoConta.tipoMovimento}/>	
								)
							}
							
						})}
						
					</Picker> */}
						{/* <Button title="Adicionar" onPress={adicionarPlanoContas}/> */}
						<Button
							text={'Adicionar'}
							handleClick={handleSubmit}
							textColor='#fff'
							backgroundColor='#68DE5A'
							textSize={22}
							widthSize={265.64}
							heightSize={56.97}
							textWeight='600'

						/>

						{/* <FlatList data={listData}  renderItem={({item}) => <Text>{item.key} </Text>}/> */}
					</View>
				</Card>
			</ScrollView>
		</View>

	);
};

const styles = StyleSheet.create({
	container: {
		fontFamily: 'Roboto-Regular',
		flex: 1,
		backgroundColor: '#8C52E5',
		alignItems: 'center',
	},
	logo: {
		height: 55,
		width: 249,
		marginTop: 40,
		marginBottom: 60,
	},
	input: {
		padding: 5,
		borderBottomWidth: 1,
		borderBottomColor: '#878686',
	},
	planos: {
		marginTop: 50,
		textAlign: 'center',
		marginBottom: 60,
		fontSize: 21
	},
	cardBody: {
		width: (width * 70) / 100,
		height: (height * 66) / 100,
	},
	scrollWrapper: {
		maxHeight: (height * 73) / 100,
		paddingHorizontal: (width * 7) / 100,
	},

})

export default Planos;
