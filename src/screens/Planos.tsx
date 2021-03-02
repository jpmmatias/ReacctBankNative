import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, Button} from 'react-native';
import { Center } from '../components/Center';
import Card from '../components/Card';
import api from '../services/api';
import Toast from 'react-native-toast-message';
import { IListData, IPlanoconta, IUser } from '../types';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';
import { useStore } from 'react-redux';

const Planos = () => {
	const store = useStore()
	const user:IUser = store.getState().user
	const logged = store.getState().logged

	const [listData, setListData] = useState<IListData[]>([])
	const [planosConta, setPlanosConta] = useState<IPlanoconta[]>([])
	const [descricao, setDescricao] = useState('')
	const [tipoMovimento, setTipoMovimento] = useState('')
	const [novoPlano, setNovoPlano] = useState<IPlanoconta>({
		descricao: '',
		id: 0,
		login:user.login,
		tipoMovimento: '',
		padrao: false,
	});

	function handleChange(method:any, campo:string, value:string){
		method(value)
		setNovoPlano({...novoPlano, [campo]:value})
	}

	async function adicionarPlanoContas(){
		let id = planosConta[planosConta.length - 1].id + 1;
		let plano = { ...novoPlano, id };
		api.post(`lancamentos/planos-conta?login=${user.login}`,plano,{
			headers: {
				Authorization: await logged()
			}
		}).then(res =>{
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

	useEffect(() =>{
		 api.get("/lancamentos/planos-conta?login=chris",{
			headers: {
				Authorization: await logged(),
			}
		}).then(res =>{
			Toast.show({
				type: 'success',
				position: 'top',
				text1: "sucesso",	 			
			});
			
			let planosContaAux:IPlanoconta[] = res.data
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
		
	},[])

	return (
		<Center>
			<Card>
				<Text>Planos de Contas</Text>
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
						{planosConta.map(planoConta =>{
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
	input:{
		padding: 5,
		borderBottomWidth: 1,
		borderBottomColor: '#878686',
	}

})

export default Planos;
