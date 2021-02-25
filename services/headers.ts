import AsyncStorage from '@react-native-async-storage/async-storage';

const Headers = {
	headers: {
		'Content-Type': 'application/json',
		Authorization: AsyncStorage.getItem('@tokenApp'),
	},
};
export default Headers;
