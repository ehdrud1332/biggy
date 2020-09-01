import React from 'react';
import {ScrollView} from 'react-native';
import {colors, gs} from '../../styles';

import Header from "../../components/Profile/Header";
import Stats from '../../components/Profile/Stats';
import About from '../../components/Profile/About';
import Location from '../../components/Profile/Location';
import Movies from "../../components/Profile/Movies";

const MyComponent = () => {
    return (
        <ScrollView style={{
            backgroundColor: colors.darkBg
        }}>
            <Header />
            <Stats />
            <About />
            <Location />
            <Movies />
        </ScrollView>
    );
};

export default MyComponent;
