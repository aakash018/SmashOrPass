import LandingPage from './screens/LandingPage';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SwipingPage from './screens/SwipingPage';
import LeaderBoard from './screens/LeaderBoard';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Swiping" component={SwipingPage} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
