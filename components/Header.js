import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {AntDesign, Entypo} from '@expo/vector-icons';
import {gs} from '../styles';

const Header = () => {
    return (
        <View>
            <Image
                source={require('../assets/food-banner1.jpg')}
                style={{width: "100%", height: 400}}
            />
            <View style={styles.topButtons}>
                <AntDesign name="close" size={24} color='#fff'/>
                <View style={gs.rowCenter}>
                    <AntDesign name="save" size={24} style={styles.topButtonRight}/>
                    <AntDesign name="sharealt" size={24} style={styles.topButtonRight} />
                    <Entypo name="dots-three-vertical" size={18} style={styles.topButtonRight}/>
                </View>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    topButtons: {
        ...gs.rowBetween,
        position: 'absolute',
        top: 30,
        left: 32,
        right: 32
    },
    topButtonRight: {
        marginLeft: 12,
        color: "#fff"
    }
})
