import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home.js";
import Check from "./Check.js";
//test
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
    <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Check' component={Check} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Navigation;
