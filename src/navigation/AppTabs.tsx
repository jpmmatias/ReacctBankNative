import React, { useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppParamList } from '../types';
import HomeDrawer from './HomeDrawer';
import Planos from '../screens/Planos';
import Lancamentos from '../screens/Lancamentos';
import { Center } from '../components/Center';
import LancamentosDrawer from './LancamentosDrawer';
import TabBar from '../components/TabBar';
import { AuthContext } from '../utils/auth/AuthProvider';
import { useNavigation } from '@react-navigation/native';
import Depositar from '../components/Depositar';

const Tabs = createBottomTabNavigator<AppParamList>();

const TransferirPlaceholder = () => <Center></Center>;
const AppTabs = () => {
	const navigation = useNavigation();
	const { logged } = useContext(AuthContext);
	useEffect(() => {
		navigation.goBack();
	}, [logged]);
	return (
		<Tabs.Navigator
			tabBar={(props) => {
				return <TabBar {...props} />;
			}}
		>
			<Tabs.Screen name='Home' component={HomeDrawer} />
			<Tabs.Screen name='Transferir' component={TransferirPlaceholder} />
			<Tabs.Screen name='Lançamentos' component={LancamentosDrawer} />
			<Tabs.Screen name='Depositar' component={Depositar} />
			<Tabs.Screen name='Planos' component={Planos} />
		</Tabs.Navigator>
	);
};

export default AppTabs;
