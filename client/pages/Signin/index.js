import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import PageBody from '../../components/PageBody';
import Logo from '../../components/Logo';
import SubheaderText from '../../components/SubheaderText';
import TextInput from '../../components/TextInput';
import SelectionButton from '../../components/SelectionButton';
import Spacer from '../../components/Spacer';

import { SharedStyles } from '../../style';

import { user } from "../../config";

export default SigninView = ({navigation}) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onPressSignin = () => {
        console.log("Signing in " + email + "; " + password);
    }

    const onPressRegister = () => {
        console.log("Signing Up");
    }

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>

            <PageBody styles={styles.adjustedPage}>
                <View style={styles.innerContainer}>
                    <Logo />
                </View>
                <Spacer height={60} />
                <View>
                    {/* Wrapping this in a view smooths the transition, idk why*/}
                    <SubheaderText text="Sign In" />
                </View>
                <View style={styles.innerContainer}>
                    <TextInput placeholder="Email" onInputChange={setEmail} boxed={false} />
                    <TextInput placeholder="Passwword" onInputChange={setPassword} boxed={false} secureTextEntry={true} />
                    <SelectionButton buttonText="Login" btnOnPress={onPressSignin} />
                    <Spacer height={SharedStyles.elementSpacing} />
                    <SelectionButton buttonText="Registration" btnOnPress={onPressRegister} />
                </View>
            </PageBody>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    innerContainer: {
        alignItems: "center",
        padding: 0,
        margin: 0,
    },
    adjustedPage: {
        justifyContent: "center",
        height: "100%",
        marginTop: 0
    }
});