
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from "./screen/SplashScreen";
import RootStackNavigation from "./screen/RootStackNavigation";


export default function App() {
  return (
    <NavigationContainer>
        <RootStackNavigation />
    </NavigationContainer>
  );
}
