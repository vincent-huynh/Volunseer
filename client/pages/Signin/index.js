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
import Icon from 'react-native-vector-icons/AntDesign';

import { user } from "../../config";

export default SigninView = ({navigation}) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onPressSignin = () => {
        console.log("Signing in " + email + "; " + password);
        if (global.isOrganization)
            navigation.push("Org Overview")
        else
            navigation.push("Volunteer Map");
    }

    const onPressRegister = () => {
        console.log("Signing Up");
        navigation.push("Register");
    }

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <View style={{ position: "absolute", marginTop: 50, marginLeft: 20, zIndex: 1 }}>
               <Icon name="back" size={16} color="#000" onPress={() => navigation.pop() }/>
            </View>

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