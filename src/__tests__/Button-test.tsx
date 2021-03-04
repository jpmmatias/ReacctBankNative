import React from 'react';
import { create } from 'react-test-renderer';
import Button from '../components/Button';

const tree = create(
	<Button
		text='Realizar Depósitos'
		handleClick={() => console.log('test')}
		textColor='#fff'
		backgroundColor='#68DE5A'
		textSize={22}
		widthSize={265.64}
		heightSize={56.97}
		textWeight='600'
	/>
);

test('button', () => {
	expect(tree).toMatchSnapshot();
});
