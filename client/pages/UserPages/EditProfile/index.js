import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, StyleSheet, Dimensions, ScrollView, Share } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import PageBody from '../../../components/PageBody';
import SubheaderText from '../../../components/SubheaderText';
import NormalText from '../../../components/NormalText';
import SubText from '../../../components/SubText';
import Spacer from '../../../components/Spacer';
import SelectionButton from '../../../components/SelectionButton';
import BubbleButton from '../../../components/BubbleButton';
import TextInput from '../../../components/TextInput';

import { SharedStyles } from '../../../style';


export default EditProfileView = ({ navigation }) => {
    const formatPhoneNum = (number) => {
        return number.replace(/\D/g, '');
    }

    const [name, setName] = React.useState(global.name ?? "Nicholas Zhang");
    const [email, setEmail] = React.useState(global.email ?? "nicholas_zhang@gmail.com");
    const [phoneNumber, setPhoneNumber] = React.useState(global.phoneNumber ? formatPhoneNum(global.phoneNnumber) : formatPhoneNum("4701111111"));
    const onPressSave = () => {
        console.log("Press save changes");
        if (name.length == 0)
            setName(global.name ?? "Nicholas Zhang");
        if (email.length == 0)
            setEmail(global.email ?? "nicholas_zhang@gmail.com");
        if (phoneNumber.length == 0)
            setPhoneNumber(global.phoneNumber ? formatPhoneNum(global.phoneNnumber) : formatPhoneNum("4701111111"));

        global.name = name;
        global.email = email;
        global.phoneNnumber = formatPhoneNum(phoneNumber).replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');;

        console.log(global.name + " " + global.email + " " + global.phoneNnumber);

        navigation.pop();
    }


    const affiliatedOrgs = global.affiliatedOrgs ?? ["Atlanta Humane Society", "Trees ATL", "Georgia Tech", "ATL United"];
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" />

            <ScrollView style={{ marginTop: SharedStyles.topPageMargin }}>
                <PageBody>
                    <View>
                        <SubheaderText text="My Profile" />
                    </View>

                    <View style={styles.container}>
                        <Spacer height={SharedStyles.elementSpacing} />
                        <Image style={styles.profiePic} source={require("../../../assets/profile.png")} />
                        <Spacer height={SharedStyles.elementSpacing} />
                        <TextInput placeholder={name} onInputChange={setName} />
                        <TextInput placeholder={email} onInputChange={setEmail} />
                        <TextInput placeholder={phoneNumber} onInputChange={setPhoneNumber} />
                        <Spacer height={SharedStyles.elementSpacing / 2} />
                        <NormalText text="Affiliated Organizations" />
                        <View style={styles.horizontalContainer}>
                            {affiliatedOrgs.map((e, i) => <BubbleButton buttonText={e} btnOnPress={() => console.log("Sample handler")} key={i} style={styles.bubbleContainer} />)}
                        </View>
                        <Spacer height={SharedStyles.elementSpacing * 2} />
                        <SelectionButton buttonText="Save Changes" btnOnPress={onPressSave} />
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