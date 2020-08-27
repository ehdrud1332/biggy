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


const FindPassword2 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign style={styles.BackBtn} name="left" size={28}/>
            </TouchableOpacity>

            <View style={styles.container2}>
                <Text style={{fontSize: 26, fontWeight: "300"}}>인증 코드 입력</Text>
                <Text style={styles.descText}>ehdrud1332@gmail.com번으로 전송된 6자리 코드를 입력하세요.</Text>

            </View>

            <TextInput style={styles.textInput}
                       placeholder={"  인증 코드"}
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

export default FindPassword2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    BackBtn: {
        top: 30,
        left: 8
    },
    container2: {
        top: 30,
        marginHorizontal: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    descText: {
        marginTop: 15,
        textAlign: "center",
        fontSize: 15
    },
    textInput: {
        marginTop: 50,
        color: "#1c1c1c",
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "#ababab",
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
