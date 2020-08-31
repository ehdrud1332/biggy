import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {colors, gs} from '../../styles';
import {Ionicons} from '@expo/vector-icons';

const MyComponent = () => {
    return (
        <LinearGradient
            colors={[colors.orange, colors.pink]}
            start={[0, 0]}
            end={[1, 1]}
        >
            <View style={{marginHorizontal: 32, paddingVertical:64}}>
                <View style={styles.imageContainer}>
                    <View>
                        <View style={styles.check}>
                        </View>
                        <Image
                            source={require('../../assets/food-banner2.jpg')}
                            style={{width: 150, height: 150, borderRadius: 75}}
                        />
                    </View>
                </View>


                <View style={[gs.center, {marginVertical: 12}]}>
                    <Text style={gs.title}>
                        JaeMin Seong
                    </Text>
                    <Text style={[gs.subTitle, {marginVertical: 12}]}>Movile developoer</Text>

                    <TouchableOpacity style={styles.follow} onPress={() => alert("clicked follow btn")}>
                        <Text style={styles.followText}>Follow</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

export default MyComponent;

const styles = StyleSheet.create({
    imageContainer : {
        ...gs.center,
        marginTop: 16,
        shadowColor: colors.darkBg,
        shadowOffset: {height: 3, width: 1},
        shadowOpacity: 0.5
    },
    check: {
        ...gs.center,
        backgroundColor: colors.text,
        borderRadius: 100,
        width: 32,
        height: 32,
        shadowColor: colors.darkBg,
        shadowOffset: {height: 3, width: 1},
        shadowOpacity: 0.3,
        position: 'absolute',
        zIndex: 1,
        right: 0,
        bottom: 10
    },
    follow: {
        ...gs.button,
        ...gs.rowCenter,
        paddingHorizontal: 24,
        paddingVertical: 8,
        marginTop: 16,
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderWidth: 2

    },
    followText: {
        fontSize: 16,
        color: colors.text,
        fontWeight: "600",
        marginLeft:4
    },

})
