import React from 'react';
import { StyleSheet , Text , View , Image } from 'react-native';

export default function ImageDetail({ ImageSource,title,Score }) { //assets folder stores all static files
	return (
		<View style={styles.container}>
			<Image source={ ImageSource } style={styles.marginVertical} />
	 		<Text>{ title }</Text>
	 		<Text>{ Score }</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	Imagestyle: {
		marginVertical:10	
	},
	container: {
    	backgroundColor: 'lightblue',
    	alignItems: 'center',
  }
});
