import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {Ionicons} from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome'

import HotelScreen from "./Main/HotelScreen";
import ExploreScreen from "./Main/ExploreScreen";
import ProfileScreen from "./Main/ProfileScreen";
import HomeStackScreen from "./Stack/HomeStackScreen";

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: "Home",
                tabBarColor: "black",
                tabBarIcon: () => (
                    <Ionicons name="ios-home"
                          color="white"
                          size={26}
                    />
                )
            }}
        />

        <Tab.Screen
            name="Hotel"
            component={HotelScreen}
            options={{
                tabBarLabel: "Hotel",
                tabBarColor: "black",
                tabBarIcon: () => (
                    <FontAwesome name="hotel"
                          color="white"
                          size={26}
                    />
                )
            }}
        />

        <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
                tabBarLabel: "Explore",
                tabBarColor: "black",
                tabBarIcon: () => (
                    <FontAwesome name="search"
                          color="white"
                          size={26}
                    />
                )
            }}
        />

        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: "Profile",
                tabBarColor: "black",
                tabBarIcon: () => (
                    <Ionicons name="md-person"
                          color="white"
                          size={26}
                    />
                )
            }}
        />


    </Tab.Navigator>
)

export default MainTabScreen;
