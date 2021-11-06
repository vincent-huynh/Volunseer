import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";

import SelectionButton from "../../components/SelectionButton/index";
import HeaderText from "../../components/HeaderText";
import SubheaderText from "../../components/SubheaderText";
import PageBody from "../../components/PageBody";
import Spacer from "../../components/Spacer";
import Logo from "../../components/Logo";

import { SharedStyles } from "../../style";

export default LandingView = ({ navigation }) => {
    const onPressVolunteer = () => {
        console.log("Volunteer Button Pressed");
    };

    const onPressOrganization = () => {
        console.log("Organization Button Pressed");
    }

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" />
            <PageBody styles={styles.adjustedPage}>
                <View style={styles.innerContainer}>
                <HeaderText text="Volunseer" />
                <Spacer height={SharedStyles.elementSpacing} />
                    <SubheaderText text="Help Your Community" />
                    <Spacer height={60} />
                    <SelectionButton buttonText="Volunteer" btnOnPress={onPressVolunteer} />
                    <Spacer height={SharedStyles.elementSpacing} />
                    <SelectionButton buttonText="Organization" btnOnPress={onPressOrganization} />
                    <Spacer height={40} />
                    <Logo />
                </View>
            </PageBody>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    innerContainer: {
        alignItems: "center",
    },
    adjustedPage: {
        marginTop: 60
    }
});