import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Center } from '../components/Center';
import Card from '../components/Card';
import api from '../services/api';
import Toast from 'react-native-toast-message';
import {  AppTabNavProps, IListData, IPlanoconta, IUser } from '../types';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';
import { useDispatch, useStore } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { putPlanoConta, savePlanosConta } from '../store/modules/user/action';

const Planos = ({ navigation, route }: AppTabNavProps<'Planos'>) => {
	const store = useStore()
	const user:IUser = store.getState().user.user
	const globalPlanosConta:IPlanoconta[] = store.getState().user.planosConta
	const dispatch = useDispatch()

	console.log(globalPlanosConta)

	const [listData, setListData] = useState<IListData[]>([])
	const [planosConta, setPlanosConta] = useState<IPlanoconta[]>([])
	const [descricao, setDescricao] = useState('')
	const [tipoMovimento, setTipoMovimento] = useState('')

	const [novoPlano, setNovoPlano] = useState<IPlanoconta>({
		descricao: '',
		id: 0,
		login: user.login,
		tipoMovimento: '',
		padrao: false,
	});

	function handleChange(method: any, campo: string, value: string) {
		method(value);
		setNovoPlano({ ...novoPlano, [campo]: value });
	}
  
	async function adicionarPlanoContas(){
		let id = globalPlanosConta[globalPlanosConta.length - 1].id + 1;
		let plano = { ...novoPlano, id };
		api.post(`lancamentos/planos-conta?login=${plano.login}`,plano,  {
			headers: {
				'Content-Type': 'application/json',
				Authorization: await AsyncStorage.getItem('@tokenApp'),
			},
		})
		.then(res =>{
			Toast.show({
				type: 'success',
				position: 'top',
				text1: "sucesso",	 			
			});
			dispatch(putPlanoConta(plano))
		}).catch(err => {
		})
	
	}

useEffect(()=>{
		async function load(){
			console.log(await AsyncStorage.getItem('@tokenApp'))
			api.get(`/lancamentos/planos-conta?login=${user.login}`,{
				headers: {
					'Content-Type': 'application/json',
					Authorization: await AsyncStorage.getItem('@tokenApp'),
				},
			})
			.then(res =>{
				Toast.show({
					type: 'success',
					position: 'top',
					text1: "sucesso",	 			
				});
				
				let planosContaAux:IPlanoconta[] = res.data
				dispatch(savePlanosConta(planosContaAux))
				let result:IListData[] = []
				for(let i=0; i<planosContaAux.length; i++){
					result.push({key:planosContaAux[i].descricao+" ("+planosContaAux[i].tipoMovimento+")"})
				}
	
				setListData(result)
				setPlanosConta(res.data)
							
			}).catch(err =>{
				Toast.show({
					type: 'error',
					position: 'top',
					text1: err.message,	 			
				});
			})
		}

		load()
		
		
	},[])

	return (
		<Center>
			<Card>
				<Text>Plano de Contas</Text>
					<TextInput		
						placeholderTextColor='#878686'
						placeholder='Nome'
						textContentType='name'
						blurOnSubmit={false}
						style={[styles.input, { marginBottom: 40 }]}
						value={descricao}
						onChangeText={(text:string)=>handleChange(setDescricao, "descricao", text)}
					></TextInput>
					<Picker selectedValue={tipoMovimento} onValueChange={(value) => handleChange(setTipoMovimento, "tipoMovimento", value.toString())}>
						{globalPlanosConta.map(planoConta =>{
							if(planoConta.padrao){
								return(
									<Picker.Item label={planoConta.descricao+" ("+planoConta.tipoMovimento+") "} value={planoConta.tipoMovimento}/>	
								)
							}
							
						})}
						
					</Picker>
					<Button title="Adicionar" onPress={adicionarPlanoContas}/>
				<FlatList data={listData}  renderItem={({item}) => <Text>{item.key} </Text>}/>
			</Card>
		</Center>
	);
};

const styles = StyleSheet.create({
	input: {
		padding: 5,
		borderBottomWidth: 1,
		borderBottomColor: '#878686',
	},
});

export default Planos;
