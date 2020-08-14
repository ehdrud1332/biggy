import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from "./SplashScreen";
import SignUpScreen from "./SignUpScreen";
import SignInScreen from "./SignInScreen";

const RootStack = createStackNavigator();

const RootStackNavigation = () => (
    <RootStack.Navigator
        screenOptions={{
            headerBackTitleVisible: false,
            headerTransparent: true,
        }}
    >
        <RootStack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{
                headerTitleStyle: {
                    color: "white"
                }
            }}
        />
        <RootStack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
                headerTitleStyle: {
                    color: "white"
                }
            }}
        />
        <RootStack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{
                headerTitleStyle: {
                    color: "white"
                }
            }}
        />

    </RootStack.Navigator>
)

export default RootStackNavigation;
