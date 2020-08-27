import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from "./Auth/SplashScreen";
import SignUpScreen from "./Auth/SignUpScreen";
import SignInScreen from "./Auth/SignInScreen";
import FindPassword from "./Auth/FindPassword";

const RootStack = createStackNavigator();

const RootStackNavigation = () => (
    <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="FindPassword" component={FindPassword}/>

    </RootStack.Navigator>
)

export default RootStackNavigation;
