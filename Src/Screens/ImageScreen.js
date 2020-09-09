import React from 'react';
import { StyleSheet , Text , View } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

export default function ImageScreen() {
	return (
		<View style={styles.container}>
	 		<Text style={styles.textstyle}>Image Screen </Text>
	 		<ImageDetail 
	 			title="Beach" 
	 			Score="ImageScore-9" 
	 			ImageSource={require('../../assets/beach.jpg')} /> 
	 		<ImageDetail 
	 			title="Forest" 
	 			Score="ImageScore-6"
	 			ImageSource={require('../../assets/forest.jpg')} />
	 		<ImageDetail 
	 			title="Mountain" 
	 			Score="ImageScore-7"
	 			ImageSource={require('../../assets/mountain.jpg')} /> 
	 	</View>
	);
};

const styles = StyleSheet.create({
	textstyle :{
		fontSize: 30
	},
	container: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
  }
});