import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const name = 'Franklyn';
	return (
		<View>
			<Text style={styles.bigText}>
				Getting started with React Native!
			</Text>
			<Text style={styles.smallText}>
				My name is {name}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	bigText: {
		fontSize: 45,
	},
	smallText: {
		fontSize: 20,
	},
});

export default ComponentsScreen;
