import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/Ionicons';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 12px;
  margin-left: 5px;
  color: #444;
`;

const Rating = (props) => {

    let starts = [];

    for (var i = 1; i <= 5; i++) {
        let name = 'ios-star';

        if(i > props.ratings) {
            name = 'ios-star-outline'
        }

        starts.push((<Icon name={name} size={15} key={i} style={{color: "#FF8C00"}}/>));
    }

    return (
        <Container>
            {starts}
            <Text>({props.reviews})</Text>
        </Container>
    );
};

export default Rating;
