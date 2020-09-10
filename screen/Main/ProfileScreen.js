import React, {useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const ProfileScreen = () => {

    const getPermissionsAsync = async() => {
        if(Constants.platform === 'ios') {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if(status !== "granted") {
                alert ("Sorry, We need camera roll permissions to make this work!")
            }
        }
    }

    const pickerImage = async() => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaType : ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1
            })
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        getPermissionsAsync();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.titleBar}>
                    <Ionicons name="ios-arrow-back" size={24} color="#52575D"/>
                    <Ionicons name="md-more" size={24} color="#52575D"/>
                </View>

                <View style={{alignSelf: 'center'}}>
                    <View style={styles.profileImage}>
                        <Image source={require('../../assets/S1.png')} />
                    </View>
                    <View style={styles.dm}>
                        <MaterialIcons name="chat" size={18} color="#DFD8C8"/>
                    </View>
                    <TouchableOpacity onPress={pickerImage}>
                        <View style={styles.add}>
                            <Ionicons name="ios-add" size={48} color="#DFD8C8" style={{marginTop: 6, marginLeft: 2}}/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, {fontWeight: "200", fontSize: 36}]}>Jaemin</Text>
                    <Text style={[styles.text, {color: "#AEB5BC", fontSize: 14}]}>Full Stack Developer</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, {fontSize: 25}]}>326</Text>
                        <Text style={[styles.text, styles.subText]}>Posts</Text>
                    </View>
                    <View style={[styles.statsBox, {borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1}]}>
                        <Text style={[styles.text, {fontSize: 25}]}>1,115</Text>
                        <Text style={[styles.text, styles.subText]}>Followers</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, {fontSize: 25}]}>556</Text>
                        <Text style={[styles.text, styles.subText]}>Following</Text>
                    </View>
                </View>

                <View style={{marginTop: 32}}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.mediaImageContainer}>
                            <Image
                                source={require('../../assets/food-banner1.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image
                                source={require('../../assets/food-banner2.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image
                                source={require('../../assets/food-banner3.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image
                                source={require('../../assets/food-banner4.jpg')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                    </ScrollView>

                    <Text style={[styles.recent, styles.subText]}>Recent Activity</Text>
                    <View style={{alignItems: "center", marginTop: 20}}>
                        <View style={styles.recentItem}>
                            <View style={styles.activityIndicator}></View>
                            <View style={{width: 300}}>
                                <Text style={[styles.text, {color: "#41444B", fontWeight: "300"}]}>
                                    Started Following
                                    <Text style={{fontWeight: "500"}}> SeongJaeMin </Text>
                                    and
                                    <Text style={{fontWeight: "500"}}> Teddy</Text>
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{alignItems: "center", marginTop: 20}}>
                        <View style={styles.recentItem}>
                            <View style={styles.activityIndicator}></View>
                            <View style={{width: 300}}>
                                <Text style={[styles.text, {color: "#41444B", fontWeight: "300"}]}>
                                    Started Following
                                    <Text style={{fontWeight: "500"}}> SeongJaeMin </Text>
                                    and
                                    <Text style={{fontWeight: "500"}}> Teddy</Text>
                                </Text>
                            </View>
                        </View>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    titleBar : {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },

    profileImage : {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer : {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 16
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D"
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    statsContainer : {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer : {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    image : {
        flex: 1,
        height: undefined,
        width: undefined
    },
    // 작은 사이즈 이미지만들때 꽉 채우는 스타일링.

    recent : {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 20,
        fontWeight: '600'
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    },
    recentItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16
    }
})
