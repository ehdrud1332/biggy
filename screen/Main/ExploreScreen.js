import React from 'react';
import {View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';
import {colors} from '../../styles';

import Header from '../../components/Header'
import Bookmark from "../../components/Bookmark";
import About from "../../components/About";
import Stats from "../../components/Stats"

const ExploreScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <Header />
            <View>
                <Bookmark />
                <About />
                <Stats />
            </View>
        </ScrollView>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
})
