import React from 'react';
import {
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Image,
    Text
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';
import Icon from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Rating from "../../components/Rating";


const SliderCon = styled.View`
  height: 250px;
  width: 90%;
  margin-top: 20px;
  justify-content: center;
  align-self: center;
  border-radius: 8px;
`;

const Slide = styled.View`
  flex: 1;
  justify-content: center;
  background-color: transparent;
  border-radius: 8px;
`;

const CategoryCon = styled.View`
  flex-direction: row;
  width: 90%;
  align-self: center;
  margin-top: 25px;
  margin-bottom: 10px;
`;

const CategoryIcon = styled.View`
  border-width: 0;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 70px;
  height: 70px;
  background-color: #fdeae7;
  border-radius: 50px;
`;

const CategoryBtnText = styled.Text`
  align-self: center;
  margin-top: 5px;
  color: #de4f35;
`;

const CardsWrapper = styled.View`
  margin-top: 20px;
  width: 90%;
  align-self: center;
`;

const Cards = styled.View`
  height: 150px;
  margin-Vertical: 10px;
  flex-direction: row;
`;

const CardImgWrapper = styled.View`
  flex: 1;
`;

const CardInfo = styled.View`
  flex: 2;
  padding: 15px;
  border-color: #ccc;
  border-width: 0.5px;
  border-left-width: 0;
  background-color: #fff;
`;

const CardTitle = styled.Text`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 10px;
`;

const CardDetails = styled.Text`
  font-size: 13px;
  color: #444;
  margin-top: 10px;
`;

const HomeScreen = () => {

    const theme = useTheme();

    return (
        <ScrollView style={{flex:1}}>
            <StatusBar backgroundColor="#009387" barStyle="light-content"/>
            <SliderCon>
                <Swiper
                    autoplay
                    horizontal={false}
                    height={250}
                    activeDotColor="#FF6347"
                >
                    <Slide>
                        <Image
                            source={require('../../assets/food-banner1.jpg')}
                            resizeMode="cover"
                            style={{
                                height: '100%',
                                width: "100%",
                                alignSelf: 'center',
                                borderRadius: 8
                            }}
                        />
                    </Slide>
                    <Slide>
                        <Image
                            source={require('../../assets/food-banner2.jpg')}
                            resizeMode="cover"
                            style={{
                                height: '100%',
                                width: "100%",
                                alignSelf: 'center',
                                borderRadius: 8
                            }}
                        />
                    </Slide>
                    <Slide>
                        <Image
                            source={require('../../assets/food-banner3.jpg')}
                            resizeMode="cover"
                            style={{
                                height: '100%',
                                width: "100%",
                                alignSelf: 'center',
                                borderRadius: 8
                            }}
                        />
                    </Slide>
                    <Slide>
                        <Image
                            source={require('../../assets/food-banner4.jpg')}
                            resizeMode="cover"
                            style={{
                                height: '100%',
                                width: "100%",
                                alignSelf: 'center',
                                borderRadius: 8
                            }}
                        />
                    </Slide>
                    <Slide>
                        <Image
                            source={require('../../assets/food-banner5.jpg')}
                            resizeMode="cover"
                            style={{
                                height: '100%',
                                width: "100%",
                                alignSelf: 'center',
                                borderRadius: 8
                            }}
                        />
                    </Slide>
                </Swiper>
            </SliderCon>

            <CategoryCon>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        width: "30%",
                        marginHorizontal: 0,
                        alignSelf: "center"
                    }}
                >
                    <CategoryIcon>
                        <Icon name="ios-restaurant" size={35} color="#FF6347"/>
                    </CategoryIcon>
                    <CategoryBtnText>Restaurant</CategoryBtnText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        width: "30%",
                        marginHorizontal: 0,
                        alignSelf: "center"
                    }}
                >
                    <CategoryIcon>
                        <MaterialCommunityIcons name="food-fork-drink" size={35} color="#FF6347"/>
                    </CategoryIcon>
                    <CategoryBtnText>FastFood Center</CategoryBtnText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        width: "30%",
                        marginHorizontal: 0,
                        alignSelf: "center"
                    }}
                >
                    <CategoryIcon>
                        <MaterialCommunityIcons name="food" size={35} color="#FF6347"/>
                    </CategoryIcon>
                    <CategoryBtnText>Snacks Corner</CategoryBtnText>
                </TouchableOpacity>
            </CategoryCon>

            <CategoryCon>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        width: "30%",
                        marginHorizontal: 0,
                        alignSelf: "center"
                    }}
                >
                    <CategoryIcon>
                        <Fontisto name="hotel" size={35} color="#FF6347"/>
                    </CategoryIcon>
                    <CategoryBtnText>Hotels</CategoryBtnText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        width: "30%",
                        marginHorizontal: 0,
                        alignSelf: "center"
                    }}
                >
                    <CategoryIcon>
                        <Icon name="md-restaurant" size={35} color="#FF6347"/>
                    </CategoryIcon>
                    <CategoryBtnText>Dineouts</CategoryBtnText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        width: "30%",
                        marginHorizontal: 0,
                        alignSelf: "center"
                    }}
                >
                    <CategoryIcon>
                        <MaterialIcons name="expand-more" size={35} color="#FF6347"/>
                    </CategoryIcon>
                    <CategoryBtnText>Show more</CategoryBtnText>
                </TouchableOpacity>
            </CategoryCon>

            <CardsWrapper>
                <Text
                    style={{
                        alignSelf: "center",
                        fontSize: 25,
                        fontWeight: "bold",
                        color: "#333",
                        margin: 20
                    }}
                >
                    Recently Viewed
                </Text>
                <Cards>
                    <CardImgWrapper>
                        <Image
                            source={require('../../assets/food-banner1.jpg')}
                            resizeMode="cover"
                            style={{
                                height: "100%",
                                width: "100%",
                                alignSelf: "center"
                            }}
                        />
                    </CardImgWrapper>
                    <CardInfo>
                        <CardTitle>Amazing Food Place</CardTitle>
                        <Rating rating={4} reviews={99}/>
                        <CardDetails>
                            Amazing desc for this amaing place
                        </CardDetails>
                    </CardInfo>
                </Cards>

                <Cards>
                    <CardImgWrapper>
                        <Image
                            source={require('../../assets/food-banner2.jpg')}
                            resizeMode="cover"
                            style={{
                                height: "100%",
                                width: "100%",
                                alignSelf: "center"
                            }}
                        />
                    </CardImgWrapper>
                    <CardInfo>
                        <CardTitle>Amazing Food Place</CardTitle>
                        <Rating rating={4} reviews={99}/>
                        <CardDetails>
                            Amazing desc for this amazing place
                        </CardDetails>
                    </CardInfo>
                </Cards>
            </CardsWrapper>
        </ScrollView>
    );
};

export default HomeScreen;
