import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppParamList } from '../types';
import HomeDrawer from './HomeDrawer';
import Planos from '../screens/Planos';
import Lancamentos from '../screens/Lancamentos';
import Transferir from '../screens/Transferir';
import { Center } from '../components/Center';
import LancamentosDrawer from './LancamentosDrawer';

const Tabs = createBottomTabNavigator<AppParamList>();

const TransferirPlaceholder = () => <Center></Center>;
const AppTabs = () => {
	return (
		<Tabs.Navigator>
			<Tabs.Screen name='Home' component={HomeDrawer} />
			<Tabs.Screen name='Transferir' component={Transferir} />
			<Tabs.Screen name='Lançamentos' component={LancamentosDrawer} />
			<Tabs.Screen name='Depositar' component={Lancamentos} />
			<Tabs.Screen name='Planos' component={Planos} />
		</Tabs.Navigator>
	);
};

export default AppTabs;
