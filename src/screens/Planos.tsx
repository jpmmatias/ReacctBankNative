import React, { useEffect, useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Button,
	ScrollView,
	Dimensions,
} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import api from '../services/api';
import Toast from 'react-native-toast-message';
import { IListData, IPlanoconta, IUser, PlanosDrrawerNavProps } from '../types';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-community/picker';
import { useDispatch, useStore } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { putPlanoConta, savePlanosConta } from '../store/modules/user/action';
const { width, height } = Dimensions.get('screen');

const Planos = ({ navigation, route }: PlanosDrrawerNavProps<'Planos'>) => {
	const store = useStore();
	const user: IUser = store.getState().user.user;
	const globalPlanosConta: IPlanoconta[] = store.getState().user.planosConta;
	const dispatch = useDispatch();

	const [listData, setListData] = useState<IListData[]>([]);
	const [planosConta, setPlanosConta] = useState<IPlanoconta[]>([]);
	const [descricao, setDescricao] = useState('');
	const [nome, setNome] = useState('');
	const [tipoMovimento, setTipoMovimento] = useState('');

	const [novoPlano, setNovoPlano] = useState<IPlanoconta>({
		descricao: '',
		id: 0,
		login: user.login,
		tipoMovimento: 'R',
		padrao: false,
	});

	function handleChange(method: any, campo: string, value: string) {
		method(value);
		setNovoPlano({ ...novoPlano, [campo]: value });
	}

	async function adicionarPlanoContas() {
		let id = globalPlanosConta[globalPlanosConta.length - 1].id + 1;
		let plano = { ...novoPlano, id };
		api
			.post(`lancamentos/planos-conta?login=${plano.login}`, plano, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: await AsyncStorage.getItem('@tokenApp'),
				},
			})
			.then((res) => {
				Toast.show({
					type: 'success',
					position: 'top',
					text1: 'sucesso',
				});

				dispatch(putPlanoConta(plano));
				let result = converToListData(res.data);
				setListData(result);
				setPlanosConta(res.data);
				
			})
			.catch((err) => {
				Toast.show({
					type: 'error',
					position: 'top',
					text1: err.message,
				});
				
			})
	}

	function converToListData(planosConta:IPlanoconta[]){
		let planosContaAux: IPlanoconta[] = planosConta
				let result: IListData[] = [];
				for (let i = 0; i < planosContaAux.length; i++) {
					result.push({
						key:
							planosContaAux[i].descricao +
							' (' +
							planosContaAux[i].tipoMovimento +
							')',
					});
				}
		return result;
	}

	useEffect(()=>{
		let result = converToListData(globalPlanosConta)
		setListData(result)
	},[globalPlanosConta])

	useEffect(() => {
		setNome(user.nome);
		async function load() {
			api
				.get(`/lancamentos/planos-conta?login=${user.login}`, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: await AsyncStorage.getItem('@tokenApp'),
					},
				})
				.then((res) => {
					Toast.show({
						type: 'success',
						position: 'top',
						text1: 'sucesso',
					});

					let planosContaAux: IPlanoconta[] = res.data;
					dispatch(savePlanosConta(planosContaAux));
					let result: IListData[] = [];
					for (let i = 0; i < planosContaAux.length; i++) {
						result.push({
							key:
								planosContaAux[i].descricao +
								' (' +
								planosContaAux[i].tipoMovimento +
								')',
						});
					}

					setListData(result);
					setPlanosConta(res.data);
				})
				.catch((err) => {
					Toast.show({
						type: 'error',
						position: 'top',
						text1: err.message,
					});
				});
		}

		load();
	}, []);

	const handleHeaderPress = () => {
		navigation.openDrawer();
	};
	const gotToHome = () => {
		navigation.navigate('Home');
	};

	return (
		<View style={styles.container}>
			{console.log(planosConta)}
			<Header name={nome} openDrawer={handleHeaderPress} goToHome={gotToHome} />
			<ScrollView style={styles.scrollWrapper}>
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						flex: 1,
					}}
				>
					<Card>
						<Text>Plano de Contas</Text>
						<TextInput
							placeholderTextColor='#878686'
							placeholder='Nome'
							textContentType='name'
							blurOnSubmit={false}
							style={[styles.input, { marginBottom: 40 }]}
							value={descricao}
							onChangeText={(text: string) =>
								handleChange(setDescricao, 'descricao', text)
							}
						></TextInput>
						<Picker
							selectedValue={tipoMovimento}
							onValueChange={(value) =>
								handleChange(
									setTipoMovimento,
									'tipoMovimento',
									value.toString()
								)
							}
						>
							{globalPlanosConta.map((planoConta) => {
								if (planoConta.padrao) {
									return (
										<Picker.Item
											label={
												planoConta.descricao +
												' (' +
												planoConta.tipoMovimento +
												') '
											}
											value={planoConta.tipoMovimento}
										/>
									);
								}
								return null
							})}
						</Picker>
						<Button title='Adicionar' onPress={adicionarPlanoContas} />
						<FlatList
							data={listData}
							renderItem={({ item }) => <Text>{item.key} </Text>}
						/>
					</Card>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		padding: 5,
		borderBottomWidth: 1,
		borderBottomColor: '#878686',
	},
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

export default Planos;
