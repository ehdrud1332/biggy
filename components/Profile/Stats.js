import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, gs} from '../../styles';

const Stats = () => {
    return (
        <View style={styles.container}>
            <View style={styles.stateContainer}>
                <Text style={styles.statNumber}>111K</Text>
                <Text style={styles.stat}>Posts</Text>
            </View>
            <View style={[styles.stateContainer, styles.divider]}>
                <Text style={styles.statNumber}>745</Text>
                <Text style={styles.stat}>Followers</Text>
            </View>
            <View style={styles.stateContainer}>
                <Text style={styles.statNumber}>327</Text>
                <Text style={styles.stat}>Following</Text>
            </View>
        </View>
    );
};

export default Stats;

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        ...gs.rowBetween,
        marginHorizontal: 16,
        borderRadius: 16,
        marginTop: -48
    },
    stateContainer: {
        ...gs.center,
        flex: 1
    },
    statNumber: {
        fontSize:20,
        fontWeight:"600",
        color: colors.text
    },
    stat: {
        fontSize: 11,
        fontWeight:"600",
        letterSpacing: 1,
        textTransform: "uppercase",
        color: colors.lightHl,
        marginTop: 6
    },
    divider: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: colors.darkHl
    }
})
