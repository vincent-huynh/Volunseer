import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, StyleSheet, Dimensions, ScrollView, Share } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/AntDesign';

import PageBody from '../../components/PageBody';
import SubheaderText from '../../components/SubheaderText';
import NormalText from '../../components/NormalText';
import SubText from '../../components/SubText';
import Spacer from '../../components/Spacer';
import SelectionButton from '../../components/SelectionButton';
import BubbleButton from '../../components/BubbleButton';

import { SharedStyles } from '../../style';


export default ProfileView = ({ navigation }) => {

    const onPressEdit = () => {
        console.log("Press edit profile button");

        navigation.push("Edit Profile");
    }

    const formatPhoneNum = (number) => {
        return number.replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }

    const affiliatedOrgs = global.affiliatedOrgs ?? ["Atlanta Humane Society", "Trees ATL", "Georgia Tech", "ATL United"];
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" />
            <View style={{ position: "absolute", marginTop: 50, marginLeft: 20, zIndex: 1 }} >
                <Icon name="back" size={16} color="#000" onPress={() => navigation.pop()} />
            </View>

            <ScrollView style={{ marginTop: SharedStyles.topPageMargin }}>
                <PageBody>
                    <View>
                        <SubheaderText text="My Profile" />
                    </View>

                    <View style={styles.container}>
                        <Spacer height={SharedStyles.elementSpacing} />
                        <Image style={styles.profiePic} source={require("../../assets/profile.png")} />
                        <Spacer height={SharedStyles.elementSpacing} />
                        <NormalText text={global.name ?? "Nicholas Zhang"} />
                        <Spacer height={SharedStyles.elementSpacing} />
                        <SubText text={global.email ?? "nicholas_zhang@gmail.com"} />
                        <Spacer height={SharedStyles.elementSpacing / 2} />
                        <SubText text={global.phoneNumber ? formatPhoneNum(global.phoneNnumber) : formatPhoneNum("4701111111")} />
                        <Spacer height={SharedStyles.elementSpacing} />
                        <NormalText text="Affiliated Organizations" />
                        <View style={styles.horizontalContainer}>
                            {affiliatedOrgs.map((e, i) => <BubbleButton buttonText={e} btnOnPress={() => console.log("Sample handler")} key={i} style={styles.bubbleContainer} />)}
                        </View>
                        <Spacer height={SharedStyles.elementSpacing} />
                        <SelectionButton buttonText="Edit Profile" btnOnPress={onPressEdit} />
                    </View>
                </PageBody>
            </ScrollView>
        </View>
    )
}


const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    profiePic: {
        width: windowsWidth * 0.6,
        height: windowsWidth * 0.6,
        aspectRatio: 1,
        resizeMode: "contain",
        borderRadius: windowsWidth * 0.6 / 2,
        borderWidth: 1,
        overflow: "hidden"
    },
    horizontalContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    bubbleContainer: {
        width: "auto",
        margin: "2%",
        padding: "3%"
    }
});