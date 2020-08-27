import React from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

const FindPassword = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <TouchableOpacity onPress={() => navigation.goBack()}>
               <AntDesign style={styles.BackBtn} name="left" size={28}/>
            </TouchableOpacity>

            <View style={styles.lockIcon}>
                <AntDesign
                    name="lock"
                    size={120}
                />
                <Text style={styles.title}>로그인에 문제가 있나요?</Text>
                <Text style={styles.titleDesc}>사용자 이메일을 입력하면 다시 계정에 로그인 할 수 있는 링크를 보내드립니다.</Text>

                <Text style={styles.userEmail}>사용자 이메일</Text>
            </View>
            <View style={styles.bottomLine}/>
            <TextInput style={styles.textInput}
                       placeholder={"  Your Email"}
                       autoCapitalize="none"
            />

            <TouchableOpacity
                style={{
                    marginTop: 16,
                    color: "#1c1c1c",
                    borderRadius: 7,
                    borderColor: "#444",
                    height: 90/2,
                    backgroundColor: "#000000",
                    marginHorizontal: 50,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text style={styles.btnText}>다음</Text>
            </TouchableOpacity>

        </View>
    );
};

export default FindPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    BackBtn: {
        top: 30,
        left: 8
    },
    lockIcon: {
        top: 20,
        alignItems: "center",
        justifyContent: "center"

    },
    title: {
        fontSize: 17,
        fontWeight: "500"
    },
    titleDesc: {
        marginTop: 20,
        marginHorizontal: 50,
        fontSize: 14,
        fontWeight: "300",
        textAlign: "center"
    },
    userEmail: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: "600",
    },
    bottomLine: {
        borderBottomColor: "#444",
        borderBottomWidth: 1,
        marginHorizontal: 50,
        top: 30
    },
    textInput: {
        marginTop: 50,
        color: "#1c1c1c",
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "#444",
        height: 90/2,
        backgroundColor: "#efefef",
        marginHorizontal: 50,
    },
    btnText: {
        color: "#fff",
        fontWeight: "500",
        fontSize: 13
    }
})
