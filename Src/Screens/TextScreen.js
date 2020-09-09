import React , { useState } from 'react';
import { StyleSheet , Text , View , TextInput } from 'react-native';

export default function TextScreen() {
	const [ name,setName ] = useState('');

	return (
	     <View>
	     	<Text>Enter Name:</Text>
	 		<TextInput 
	 			style={styles.input}
	 			autoCapitalize="none" 
	 			autoCorrect={false}
	 			value={name}
	 			onChangeText={newValue => setName(newValue)} />
	 		<Text>Your Name is {name}</Text>
	 		{ name.length < 4 ? <Text>Must have atleast 4 characters</Text> : <Text> </Text> } 
	     </View> //jsx conditional statement used for checking the length of the string entered
	);
};

const styles = StyleSheet.create({
	input: {
		margin:15,
		borderColor:'black',
		borderWidth:1,
	}
});
 
