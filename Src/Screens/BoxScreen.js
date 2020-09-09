import React from 'react';
import { StyleSheet , Text , View } from 'react-native';

export default function BoxScreen () {
	return (
	     <View style={styles.viewStyle} >
	 		<Text style={styles.textStyle1} > Child#1 </Text>
	 		<Text style={styles.textStyle2} > Child#2 </Text>
	 		<Text style={styles.textStyle3} > Child#3 </Text>
	     </View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth:4,
		borderColor:'red',
		//margin:30,
		//alignItems:'center',    //stretch(default),flex-start(left),flex-end(right)
		//flexDirection:'row',      //column(default),row
		//justifyContent:'center',  //flex-start(default),center,flex-end(bottom),space-between,space-around
		height:550,
	},
	textStyle1: {
		borderWidth:2,
		borderColor:'blue',
		margin:5,	
		flex:1, //total flex of all styles can add upto 10 to divide them (random proportions each /100)
				//so flex={1...9} any value
	},
	textStyle2: {
		borderWidth:4,
		borderColor:'blue',
		margin:5,	
		flex:1,
		alignSelf:'center', //flex-start,flex-end,center
		//position:'absolute',
		//...StyleSheet.absoluteFillObject //filling up the whole with one child
		//top:20,
	},
	textStyle3: {
		borderWidth:2,
		borderColor:'blue',
		margin:5,
		flex:1,	
	},
});

//alignItems,flexDirection,justfyContent are always applied on parent 
//flex,alignSelf are always applied on child
//top,left,right,bottom are spacing applied on child properties