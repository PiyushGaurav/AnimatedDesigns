// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DesignOne from './src/screens/DesignOne';
import DesignTwo from './src/screens/DesignTwo';
import DesignThree from './src/screens/DesignThree';
import navigationStrings from './constants/navigationStrings';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={navigationStrings.HOME}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.DESIGN_ONE}
          component={DesignOne}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.DESIGN_TWO}
          component={DesignTwo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.DESIGN_THREE}
          component={DesignThree}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
