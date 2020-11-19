import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';

export default function HomeScreen({navigation}) {

  return (
    <View style={styles.container}>
      <Text style={styling.text}>Hello Everyone!</Text>
      <Button
        onPress={() => navigation.navigate('Components')} 
        title="Go to Components" />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List" />
      <Button
        onPress={() => navigation.navigate('Images')}
        title='Go to Images' />
      <Button
        onPress={() => navigation.navigate('Counting')}
        title='Go to Counter' />
      <Button
        onPress={() => navigation.navigate('Color')}
        title='Go to Color' />
      <Button
        onPress={() => navigation.navigate('Square')}
        title='Go to Square Color' />
      <Button
        onPress={() => navigation.navigate('Text')}
        title='Go to Text' />
      <Button
        onPress={() => navigation.navigate('Box')}
        title='Go to Box' />
      <Button
        onPress={() => navigation.navigate('Loc')}
        title='Go to Location Bar' />
    </View>
  );
}

const styling=StyleSheet.create({
    text: {
        fontSize:30
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
