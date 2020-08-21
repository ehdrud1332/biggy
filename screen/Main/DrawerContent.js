import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
    Avatar,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';


const DrawerCon = styled.View`
  flex: 1;
`;

const UserInfoSection = styled.View`
  padding-left: 20px;
`;

const Title = styled.Text`
  font-size: 16px;
  margin-top: 3px;
  font-weight: 600;
`;

const Caption = styled.Text`
  font-size: 12px;
  line-height: 15px;
  color: #303030;
`;

const Row  = styled.View`
   margin-top: 20px;
   flex-direction: row;
   align-items: center;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;

const Preference = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-Vertical: 12px;
  padding-Horizontal: 16px;

`;

export function DrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }


    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <DrawerCon>
                    <UserInfoSection>
                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <Avatar.Image
                                size={50}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title>JaeminSeong</Title>
                                <Caption>@ehdrud1332</Caption>
                            </View>
                        </View>

                        <Row>
                            <Section>
                                <Paragraph
                                    style={{
                                        fontWeight: 'bold',
                                        marginRight: 3,
                                        fontSize: 14,
                                        lineHeight: 14
                                    }}
                                >80</Paragraph>
                                <Caption>Following</Caption>
                            </Section>

                            <Section>
                                <Paragraph
                                    style={{
                                        fontWeight: 'bold',
                                        marginRight: 3,
                                        fontSize: 14,
                                        lineHeight: 14
                                    }}
                                >100</Paragraph>
                                <Caption>Followers</Caption>
                            </Section>
                        </Row>

                        <Drawer.Section style={{
                            marginTop: 15
                        }}>
                            <DrawerItem
                                icon={() => (
                                    <Icon
                                        name="bookmark"
                                        size={26}
                                    />
                                )}
                                label="Bookmark"
                                onPress={() => {props.navigation.navigate("Bookmark")}}
                            />

                        </Drawer.Section>

                        <Drawer.Section style={{
                            marginTop: 15
                        }}>
                            <DrawerItem
                                icon={() => (
                                    <Icon
                                        name="account-outline"
                                        size={26}
                                    />
                                )}
                                label="Profile"
                                onPress={() => {props.navigation.navigate("Bookmark")}}
                            />

                        </Drawer.Section>

                        <Drawer.Section style={{
                            marginTop: 15
                        }}>
                            <DrawerItem
                                icon={() => (
                                    <Icon
                                        name="account-check-outline"
                                        size={26}
                                    />
                                )}
                                label="Support"
                                onPress={() => {props.navigation.navigate("Bookmark")}}
                            />

                        </Drawer.Section>

                        <Drawer.Section title="Preferences">
                            <TouchableRipple onPress={() => {toggleTheme()}}>
                                <Preference>
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents="none">
                                        <Switch value={isDarkTheme}/>
                                    </View>
                                </Preference>
                            </TouchableRipple>
                        </Drawer.Section>
                    </UserInfoSection>
                </DrawerCon>
            </DrawerContentScrollView>
        </View>
    );
};

export default DrawerContent;

