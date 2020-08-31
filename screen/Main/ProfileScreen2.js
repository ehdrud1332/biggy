import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {colors, gs} from '../../styles';

import Header from "../../components/Profile/Header";
import Stats from '../../components/Profile/Stats';

const MyComponent = () => {
    return (
        <ScrollView style={{
            backgroundColor: colors.darkBg
        }}>
            <Header />
            <Stats />
        </ScrollView>
    );
};

export default MyComponent;
