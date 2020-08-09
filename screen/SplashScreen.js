import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity, Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import {Ionicons} from '@expo/vector-icons';

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Header = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const Text = styled.Text`
  color: #626262;
  margin-top: 5px;
`;

const Button = styled.View`
  align-items: flex-end;
  margin-top: 30px;
`;

const TextSign = styled.Text`
   color: white;
   font-weight: bold;
`;

const SplashScreen = ({navigation}) => {
    return (
        <Container>
            <Header>
                <Animatable.Image
                    animation="bounceIn"
                    duration="1500"
                    source={require('../assets/png.png')}
                    resizeMode="stretch"
                    style={{
                        width: height_logo,
                        height: height_logo
                    }}
                />
            </Header>
            <Animatable.View
                animation="fadeInUpBig"
                style={{
                    flex:1,
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    paddingVertical: 50,
                    paddingHorizontal: 30
                }}
            >
                <Title>Stay connect with everyone</Title>
                <Text>Sign in with account</Text>
                <Button>
                    <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
                        <LinearGradient
                            colors={['#4e4e4e', '#111111']}
                            style={{
                                width: 150,
                                height: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 20,
                                flexDirection: 'row'
                            }}
                        >
                            <TextSign>Get Started    </TextSign>
                            <Ionicons
                                name="ios-arrow-forward"
                                color="#fff"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </Button>
            </Animatable.View>
        </Container>
    );
};

export default SplashScreen;
