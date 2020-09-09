import React , { useReducer } from 'react';
import { StyleSheet , Text , View , FlatList , Button } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const color_increment = 15;

const reducer = ( state,action ) => {
	//state === { red:number, green:number, blue:number };
	//action === { type:'change_red' || 'change_blue' || 'change_green' , payload:15 }

	switch(action.type)
	{
		case 'change_red':
			return state.red + action.payload > 255 || state.red + action.payload < 0 
			? state : { ...state, red: state.red + action.payload };
			 	
		case 'change_green':
			return state.green + action.payload > 255 || state.green + action.payload < 0  
			? state : { ...state, green: state.green + action.payload };

		case 'change_blue':
			return state.blue + action.payload > 255 || state.blue + action.payload < 0 
			? state : { ...state, blue: state.blue + action.payload };

		default:
			return state;
	}
}

export default function SquareScreen() {
	
	const [ state,runMyReducer ] = useReducer(reducer , { red:0,green:0,blue:0 });
	const {red,green,blue} = state;


	return (
	     <View>
	 		<Text>Square Screen </Text>
	 		<ColorCounter 
	 			onIncrease={() => runMyReducer({ type:'change_red',payload:color_increment }) }
	 			onDecrease={() => runMyReducer({ type:'change_red',payload:-1*color_increment }) }
	 			color="Red" />
	 		<ColorCounter
	 			onIncrease={() => runMyReducer({ type:'change_blue',payload:color_increment }) }
	 			onDecrease={() => runMyReducer({ type:'change_blue',payload:-1*color_increment }) }
	 			color="Blue" />
	 		<ColorCounter 
	 			onIncrease={() => runMyReducer({ type:'change_green',payload:color_increment }) }
	 			onDecrease={() => runMyReducer({ type:'change_green',payload:-1*color_increment }) }
	 			color="Green" />
	 		<View 
	 			style={{
	 				height: 150,
	 				width: 150,
	 				backgroundColor: `rgb(${red}, ${green} ,${blue})`
	 			}} />
	     </View>
	);
};

const styles = StyleSheet.create({});