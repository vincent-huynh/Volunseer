import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Modal, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/Octicons';

import PageBody from '../../components/PageBody';
import SubheaderText from '../../components/SubheaderText';
import MapView from 'react-native-maps';

import BubbleButton from '../../components/BubbleButton';
import Spacer from '../../components/Spacer';
import { SharedStyles } from '../../style';

export default VolunteerMapView = ({ navigation }) => {

    const [menuVisible, setMenuVisible] = React.useState(false);

    const onPressMenuBar = () => {
        console.log("Menu bar pressed");
        setMenuVisible(!menuVisible);
    }

    const navigateOut = (pageName) => {
        setMenuVisible(false);
        navigation.push(pageName);
    }

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" />
            <View style={{ position: "absolute", marginTop: 50, marginLeft: 20 }}>
                <Icon name='three-bars' size={30} color='#000' onPress={onPressMenuBar} />
            </View>
            <PageBody>
                <SubheaderText text="Volunteer Map" />
            </PageBody>

            <MapView style={styles.map} initialRegion={{
                latitude: 33.7756178,
                longitude: -84.3984737,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }} />

            <Modal animationType="slide" transparent={true} visible={menuVisible} onRequestClose={() => { setMenuVisible(!menuVisible) }}>
                <TouchableOpacity style={styles.modalBox} onPress={() => setMenuVisible(false)}>
                    <View style={styles.innerModalBox}>
                        <BubbleButton style={{ borderRadius: 7 }} buttonText="Rewards" btnOnPress={() => navigateOut("Rewards")} />
                        <Spacer height={SharedStyles.elementSpacing / 2} />
                        <BubbleButton style={{ borderRadius: 7 }} buttonText="Personal Activity" btnOnPress={() => navigateOut("Personal Activity")} />
                        <Spacer height={SharedStyles.elementSpacing / 2} />
                        <BubbleButton style={{ borderRadius: 7 }} buttonText="My Profile" btnOnPress={() => navigateOut("My Profile")} />
                        <Spacer height={SharedStyles.elementSpacing / 2} />
                        <BubbleButton style={{ borderRadius: 7 }} buttonText="Back" btnOnPress={() => setMenuVisible(false)} />
                        <Spacer height={SharedStyles.elementSpacing / 2} />
                    </View>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    )
}


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    bubbleContainer: {
        width: "auto",
        margin: "2%",
        padding: "3%",
    },
    modalBox: {
        margin: 10,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    innerModalBox: {
        paddingTop: "5%",
        paddingBottom: "5%",
        alignItems: "center",
        justifyContent: "center"
    },
    map: {
        width: windowWidth,
        height: windowHeight
    }
});