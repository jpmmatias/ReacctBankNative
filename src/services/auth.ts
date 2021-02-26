import AsyncStorage from '@react-native-async-storage/async-storage';

export const isAuthenticated = (): boolean => {
	const TokenStorage = async () => {
		return await AsyncStorage.getItem('@tokenApp');
	};
	if (TokenStorage()) {
		return true;
	} else {
		return false;
	}
};
