import React from 'react';
import { View , Text , StyleSheet } from 'react-native';

const ComponentScreen = () => {
	const variable= 'Amogh';
	return(
		<View style={styles.container}>
			<Text style={styles.textStyle1}>Getting started with ReactNative!</Text>
			<Text style={styles.textStyle2}>My Name is {variable}</Text>
		</View>
		) 
};

const styles =StyleSheet.create ({
	textStyle1: {
		fontSize:45
	},
	textStyle2: {
		fontSize:20
	},
	container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

export default ComponentScreen;