import {StyleSheet} from 'react-native';

export const colors = {
    darkBg : "#222",
    lightBg : "#333",
    darkHl : "#666666",
    lightHl : "#888",
    pink: "#ea3372",
    text: "#fff",
    textsec: "#aaa"
};

export const gs = StyleSheet.create({
    sectionContainer : {
        paddingVertical: 24,
        paddingHorizontal: 32,
        marginBottom: 8,
    },
    sectionTitle: {
        fontWeight: "700",
        color: colors.text,
        fontSize: 15
    },
    rowCenter: {
        top: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowBetween : {

    },
    center: {
        alignItems: "center",
        justifyContent: "center"
    },
    divider: {
        borderBottomColor: "#444",
        borderBottomWidth: 1,
        marginVertical: 24
    },
    title: {
        color: colors.text,
        fontSize: 30
    }
})
