import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {Ionicons} from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome'

import HotelScreen from "./Main/HotelScreen";
import ExploreScreen from "./Main/ExploreScreen";
import ProfileScreen from "./Main/ProfileScreen";
import HomeStackScreen from "./Stack/HomeStackScreen";
import ProfileScreen2 from './Main/ProfileScreen2';

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Profile2"
        tabBarOptions={{
            inactiveBackgroundColor: "#000000",
            activeBackgroundColor: "#000000",
            activeTintColor: "#fff",
            inactiveTintColor: "#9b9b9b",
            labelStyle: {fontWeight: '600', textTransform: "uppercase"}
        }}

    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <Ionicons
                        name="ios-home"
                        color= {focused ? "#fff" : "#9b9b9b"}
                        size={26}
                    />
                )
            }}
        />


        <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <FontAwesome
                        name="search"
                        color= {focused ? "#fff" : "#9b9b9b"}
                        size={26}
                    />
                )
            }}
        />

        {/*<Tab.Screen*/}
        {/*    name="Profile2"*/}
        {/*    component={ProfileScreen2}*/}
        {/*    options={{*/}
        {/*        tabBarIcon: ({focused}) => (*/}
        {/*            <Ionicons*/}
        {/*                name="md-person"*/}
        {/*                color= {focused ? "#fff" : "#9b9b9b"}*/}
        {/*                size={26}*/}
        {/*            />*/}
        {/*        )*/}
        {/*    }}*/}
        {/*/>*/}

        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <Ionicons
                        name="md-person"
                        color= {focused ? "#ffffff" : "#9b9b9b"}
                        size={26}
                    />
                )
            }}
        />

    </Tab.Navigator>
)

export default MainTabScreen;
