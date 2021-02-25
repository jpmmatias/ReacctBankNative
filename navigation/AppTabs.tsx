import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppParamList } from '../types';
import Home from '../screens/Home';

import Lancamentos from '../screens/Lancamentos';

const Tabs = createBottomTabNavigator<AppParamList>();

const AppTabs = () => {
	return (
		<Tabs.Navigator
			// screenOptions={({ route }) => ({
			//   tabBarIcon: ({ focused, color, size }) => {
			//     let iconName;

			//     if (route.name === 'Home') {
			//       iconName = focused
			//         ? 'ios-information-circle'
			//         : 'ios-information-circle-outline';
			//     } else if (route.name === 'Settings') {
			//       iconName = focused ? 'ios-list-box' : 'ios-list';
			//     }

			//     // You can return any component that you like here!
			//     return <Ionicons name={iconName} size={size} color={color} />;
			//   },
			// })}
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
			}}
		>
			<Tabs.Screen name='Home' component={Home} />
			<Tabs.Screen name='Lançamentos' component={Lancamentos} />
		</Tabs.Navigator>
	);
};

export default AppTabs;
