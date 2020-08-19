
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootStackNavigation from "./screen/RootStackNavigation";
import MainTabScreen from "./screen/MainTabScreen";
import DrawerContent from './screen/Main/DrawerContent';

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}
