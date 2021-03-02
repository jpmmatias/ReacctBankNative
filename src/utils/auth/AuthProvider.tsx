import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const AuthContext = React.createContext({
	logged: false,
	login: () => {},
	logout: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
	const [logged, setLogged] = useState<boolean>(false);
	return (
		<AuthContext.Provider
			value={{
				logged,
				login: () => {
					setLogged(true);
					AsyncStorage.setItem('logged', JSON.stringify(true));
				},
				logout: () => {
					AsyncStorage.removeItem('logged');
				},
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

const styles = StyleSheet.create({});
