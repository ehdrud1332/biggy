import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors, gs} from '../../styles';
import {Ionicons} from '@expo/vector-icons';

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>ABOUT ME</Text>
            <Text style={styles.about}>
                지금은 새벽 1시 코딩공부를 하고 있는 성재민. 얼른 취직하고 싶다.
            </Text>
        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        margin: 32
    },
    about: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.darkHl,
        marginTop: 8,
        lineHeight: 22
    }
})
