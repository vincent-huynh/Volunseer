import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native-elements';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import SubheaderText from '../../components/SubheaderText';
import PageBody from '../../components/PageBody';
import TextInput from '../../components/TextInput';
import SelectionButton from '../../components/SelectionButton';
import Spacer from '../../components/Spacer';

export default RegistrationView = ({navigation}) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [organizations, setOrganizations] = React.useState("");

    const onPressRegister = () => {
        console.log("Press Register Button " + name + " " + email + " " + phoneNumber + " " + organizations);
    }

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <PageBody>
                <SubheaderText text="Register" />
                <TextInput placeholder="Name" onInputChange={setName} />
                <TextInput placeholder="Email" onInputChange={setEmail} />
                <TextInput placeholder="Phone Number" onInputChange={setPhoneNumber} />
                <TextInput placeholder="Affiliated Organizations" onInputChange={setOrganizations} />
                <Spacer height={50} />
                <SelectionButton buttonText="Register" btnOnPress={onPressRegister} />
            </PageBody>
        </SafeAreaView>
    );
}