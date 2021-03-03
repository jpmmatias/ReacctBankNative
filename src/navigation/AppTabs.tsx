import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppParamList } from '../types';
import HomeDrawer from './HomeDrawer';
import PlanosDrawer from './PlanosDrawer';
import { Center } from '../components/Center';
import LancamentosDrawer from './LancamentosDrawer';
import TabBar from '../components/TabBar';

import Depositar from '../components/Depositar';

const Tabs = createBottomTabNavigator<AppParamList>();

const TransferirPlaceholder = () => <Center></Center>;
const AppTabs = () => {
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
			<Tabs.Screen name='Planos' component={PlanosDrawer} />
		</Tabs.Navigator>
	);
};

export default AppTabs;
