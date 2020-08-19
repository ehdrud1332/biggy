import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;


const T1 = styled.Text`
  font-weight: bold;
  font-size: 30px;
`;



const HomeScreen = () => {
    return (
        <Container>
            <StatusBar backgroundColor="#009387" barStyle="light-content"/>
            <T1>대희쌉변태</T1>
        </Container>
    );
};

export default HomeScreen;
