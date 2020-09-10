import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

import HomeScreen from "../Main/HomeScreen";

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "black"
            },
            headerTintColor: "white",
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}
    >
        <HomeStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                title: "Home",
                headerLeft: () => (
                    <Icon.Button
                        name="ios-menu"
                        size={25}
                        backgroundColor="black"
                        onPress={() => navigation.openDrawer()}
                    />
                )
            }}
        />
    </HomeStack.Navigator>
)

export default HomeStackScreen;
