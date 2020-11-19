/*
import React from 'react';
import { StyleSheet , Text , View } from 'react-native';

export default function LocationBar() {
	return (
	     <View>
	 		<Text> </Text>
	     </View>
	);
};

const styles = StyleSheet.create({}); */

import React , { useState } from 'react';
import { StyleSheet , TextInput , View , Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function LocationBar() {
	const [text, setText] = useState('');
	return (
	     <View style={ styles.backgroundStyle } >

	     	<Image source={require('./dine.jpg')} style={{ marginHorizontal:70, marginTop:10 }} />

	     	<View style={ styles.innerbackgroundStyle1 }>
	 			<Entypo 
	 				name="location-pin" 
	 				//size={24} 
	 				style={ styles.iconStyle } />
	 			<TextInput 
	 				label="Email"
      				value={text}
      				onChangeText={text => setText(text)} />
      		</View>

	     </View>
	);
};

const styles = StyleSheet.create({

	backgroundStyle: {
		flexDirection:'column',
		flex:1,
	},
	innerbackgroundStyle1: {
		backgroundColor: 'grey',
		height: 20,
		borderRadius: 5,
		flexDirection:'row',
		flex:1,
		marginVertical:20,
		marginBottom:330,
		marginHorizontal:10,
	},
	inputStyle: {
		flex:1,
		fontSize:18,
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15,
	},
});

