import React, {useState} from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
import DismissKeyboard from "../../components/DismissKeyboard";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Header = styled.View`
  flex: 1;
  justify-content: flex-end;
  paddingHorizontal: 20px;
  paddingBottom: 50px;
`;

const TextHeader = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
`;

const TextFooter = styled.Text`
  color: #000000;
  font-size: 18px;
`;

const Action = styled.View`
  flex-direction: row;
  margin-top: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  padding-bottom: 5px;
`;

const TextInput = styled.TextInput`
  flex:1;
  margin-top: 0;
  padding-left: 10px;
  color: #000000;
`;

const TextPrivate = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Button = styled.View`
  align-items: center;
  margin-top: 20px;
`;

const TextSign = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ColorTextPrivate = styled.Text`
  color: #b3b3b3;
`;


const SignInScreen = ({navigation}) => {

    const [data, setData] = useState({
        email: "",
        password: "",
        confirm_password: "",
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    })

    const textInputChange = (val) => {
        if(val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }


    return (
        <DismissKeyboard>
            <Container>
                <StatusBar backgroundColor="#009387" barStyle="light-content" />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome
                        name="arrow-left"
                        size={25}
                        color="#fff"
                        style={{marginTop:60, marginLeft:30}}
                    />
                </TouchableOpacity>
                <Header>
                    <TextHeader>Login Now</TextHeader>
                </Header>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={{
                        flex: 3,
                        backgroundColor: '#fff',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        paddingHorizontal: 20,
                        paddingVertical: 30
                    }}
                >
                    <TextFooter>Email</TextFooter>
                    <Action>
                        <FontAwesome
                            name="envelope"
                            color="black"
                            size={20}
                        />
                            <TextInput
                                placeholder="Your Email"
                                autoCapitalize="none"
                                onChange={(val) => textInputChange(val)}
                            />
                        {data.check_textInputChange ? (
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                        ) : (null)}

                    </Action>

                    <TextFooter style={{marginTop: 35}}>Password</TextFooter>
                    <Action>
                        <FontAwesome
                            name="lock"
                            color="black"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            autoCapitalize="none"
                            onchangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ? (
                                <Feather
                                    name="eye-off"
                                    color={"grey"}
                                    size={20}
                                />
                            ) : (
                                <Feather
                                    name="eye"
                                    color="green"
                                    size={20}
                                />
                            )}
                        </TouchableOpacity>
                    </Action>
                    <Button>
                        <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}
                              style={{
                                  width: '100%',
                                  height: 50,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  borderRadius: 10
                              }}
                        >
                            <LinearGradient
                                colors={['#4e4e4e', '#111111']}
                                style={{
                                    width: '100%',
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 10
                                }}
                            >
                                <TextSign style={{color: '#fff'}}>
                                    Sign Up
                                </TextSign>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{
                                width: '100%',
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10,
                                borderColor: '#000000',
                                borderWidth: 1,
                                marginTop: 15
                            }}
                        >
                            <TextSign style={{color: "black"}}>
                                Sign In
                            </TextSign>
                        </TouchableOpacity>
                    </Button>
                </Animatable.View>
            </Container>
        </DismissKeyboard>
    );
};

export default SignInScreen;
