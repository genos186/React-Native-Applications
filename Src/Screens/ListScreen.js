import React from 'react';
import { StyleSheet , Text , View , FlatList } from 'react-native';

export default function ListScreen() {
	const friends = [               //keys must be unique and a string datatype
		{name: 'friend #1', Age: 'Age 25' }, //key : '1'
		{name: 'friend #2', Age: 'Age 56' }, //key : '2' .....
		{name: 'friend #3', Age: 'Age 74' },
		{name: 'friend #4', Age: 'Age 89' },
		{name: 'friend #5', Age: 'Age 57' },
		{name: 'friend #6', Age: 'Age 69' },
		{name: 'friend #7', Age: 'Age 44' },
		{name: 'friend #8', Age: 'Age 35' },
		{name: 'friend #9', Age: 'Age 91' },
	];
	return (
		<FlatList 
			horizontal={false}                   //displaying the list in a horizontal way
			//showsHorizontalScrollIndicator={false}
			keyExtractor={(friend) => friend.Age}
			data={friends} 
			renderItem={ ({item}) => {
				return <Text style={styles.textstyle}>{item.name} - {item.Age}</Text>
			}} 
		/>
		);	
};

const styles = StyleSheet.create({
	textstyle: {
		marginVertical: 30,
	}
});
