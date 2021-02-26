import React from 'react';
import { ImageSourcePropType } from 'react-native';
import {
	StyleSheet,
	Image,
	Dimensions,
	TouchableHighlight,
	View,
	Text,
} from 'react-native';

interface ButtonProps {
	text: string;
	textColor: string;
	textSize: number;
	icon?: ImageSourcePropType;
	backgroundColor: string;
	textColorHover?: string;
	widthSize: number;
	heightSize: number;
	textWeight:
		| 'normal'
		| 'bold'
		| '100'
		| '200'
		| '300'
		| '400'
		| '500'
		| '600'
		| '700'
		| '800'
		| '900';
	LinkTo?: string;
	handleClick?: () => void;
}

const Button = ({
	text,
	textColor,
	textSize,
	icon,
	backgroundColor,
	widthSize,
	heightSize,
	textWeight,
	LinkTo,
	handleClick,
}: ButtonProps) => {
	if (LinkTo) {
		return (
			<TouchableHighlight onPress={handleClick}>
				<View
					style={[
						{
							width: widthSize,
							backgroundColor: backgroundColor,
							height: heightSize,
							borderRadius: 20,
						},
					]}
				>
					<Text
						style={[
							{
								fontSize: textSize,
								color: textColor,
								fontWeight: textWeight,
							},
						]}
					>
						{text}
					</Text>
					{icon && <Image style={styles.icon} source={icon} />}
				</View>
			</TouchableHighlight>
		);
	}

	return (
		<TouchableHighlight
			activeOpacity={0.6}
			style={{
				width: widthSize,
				height: heightSize,
				borderRadius: 20,
			}}
			onPress={handleClick}
		>
			<View
				style={[
					{
						width: widthSize,
						backgroundColor: backgroundColor,
						height: heightSize,
						borderRadius: 20,
						justifyContent: icon ? 'space-around' : 'center',
						alignItems: 'center',
					},
				]}
			>
				<Text
					style={[
						{
							fontSize: textSize,
							color: textColor,
							fontWeight: textWeight,
						},
					]}
				>
					{text}
				</Text>
				{icon && <Image style={styles.icon} source={icon} />}
			</View>
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	icon: {
		height: 50,
		width: 50,
	},
	title: {
		marginTop: 5,
		fontSize: 21,
		textAlign: 'center',
		fontWeight: '500',
		color: '#1d1d1d',
		lineHeight: 24.61,
		marginBottom: 60,
	},
});

export default Button;
