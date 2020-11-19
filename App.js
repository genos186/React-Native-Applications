import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Src/Screens/HomeScreen';
import ComponentScreen from './Src/Screens/ComponentScreen';
import ListScreen from './Src/Screens/ListScreen';
import ImageScreen from './Src/Screens/ImageScreen';
import Counter from './Src/Screens/CounterScreen';
import ColorScreen from './Src/Screens/ColorScreen';
import SquareScreen from './Src/Screens/SquareScreen';
import TextScreen from './Src/Screens/TextScreen';
import BoxScreen from './Src/Screens/BoxScreen';
import LocationBar from './Src/Screens/Location';

const Navigator = createStackNavigator (
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List:ListScreen,
    Images:ImageScreen,
    Counting:Counter,
    Color:ColorScreen,
    Square:SquareScreen,
    Text:TextScreen,
    Box:BoxScreen,
    Loc:LocationBar,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title:'App'
    }
  }
);

export default createAppContainer(Navigator); 