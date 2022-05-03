import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// COMPONENTS
import Intro from '../intro/RootIntro';
import Rules from '../intro/Rules';
import Home from '../home/components';

const Stack = createNativeStackNavigator();
const MyTheme = {colors: {background: '#fff'}};

const AppNavigation = () => {
  // RENDER
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Rules" component={Rules} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
