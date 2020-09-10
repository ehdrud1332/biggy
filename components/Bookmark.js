import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Feather, FontAwesome} from '@expo/vector-icons';
import {gs, colors} from '../styles';

const Bookmark = () => {

    const [inPress, setInPress] = useState({
        check_bookMark : false
    })

    const inPressBookmark = (click) => {
        setInPress({
            ...inPress,
            check_bookMark: !inPress.check_bookMark
        })
    }

    return (
        <TouchableOpacity onPress={inPressBookmark}
            style={{zIndex: 10}}
        >
            {inPress.check_bookMark ? (
                <View style={styles.bookmark}>
                    <FontAwesome
                        name="bookmark"
                        size={24}
                        color="black"
                    />
                </View>
            ) : (
                <View style={styles.bookmark2}>
                    <FontAwesome
                        name="bookmark-o"
                        size={24}
                        color="#444"
                    />
                </View>
            )}

        </TouchableOpacity>
    );
};

export default Bookmark;

const styles = StyleSheet.create({
    bookmark: {
        position: 'absolute',
        width: 56,
        height: 56,
        right: 32,
        top: -52 / 2,
        backgroundColor: colors.text,
        ...gs.center,
        borderRadius: 56/2,
        zIndex: 10,
    },
    bookmark2: {
        position: 'absolute',
        width: 56,
        height: 56,
        right: 32,
        top: -52 / 2,
        backgroundColor: "white",
        ...gs.center,
        borderRadius: 56/2,
        zIndex: 10,

    }
})
