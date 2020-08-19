
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigation from "./screen/RootStackNavigation";
import MainTabScreen from "./screen/MainTabScreen";


export default function App() {
  return (
    <NavigationContainer>
        {/*<RootStackNavigation />*/}
        <MainTabScreen />
    </NavigationContainer>
  );
}
