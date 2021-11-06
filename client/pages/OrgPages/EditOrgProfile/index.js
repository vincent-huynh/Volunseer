import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import PageBody from '../../../components/PageBody';
import Spacer from '../../../components/Spacer';
import SelectionButton from '../../../components/SelectionButton';
import TextInput from '../../../components/TextInput';
import SubheaderText from '../../../components/SubheaderText';

import { SharedStyles } from '../../../style';

export default EditOrgProfileView = ({ navigation }) => {
    const [orgName, setOrgName] = React.useState("");
    const [orgEmail, setOrgEmail] = React.useState("");
    const [orgMissionStatement, setOrgMissionStatement] = React.useState("");
    const [orgAddress, setOrgAddress] = React.useState("");

    const tempMissionStatement = "Georgia Tech's mission is to develop leaders who advance technology and improve the human condition. Its mission and strategic plan are focused on making a positive impact in the lives of people everywhere.";

    const onSaveProfile = () => {
        navigation.pop();
    }

    return <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <View style={{ position: "absolute", marginTop: 50, marginLeft: 20, zIndex: 1 }} >
            <Icon name="back" size={16} color="#000" onPress={() => navigation.pop()} />
        </View>

        <ScrollView style={{ marginTop: SharedStyles.topPageMargin }}>
            <PageBody>
                <SubheaderText text="Organization Profile" />
                <TextInput placeholder="Georgia Institute of Technology" onInputChange={setOrgName} />
                <TextInput placeholder="random_ord@gatech.edu" onInputChange={setOrgEmail} />
                <TextInput style={{height: "30%", flexWrap: "wrap"}} placeholder={tempMissionStatement} onInputChange={setOrgMissionStatement} />
                <TextInput placeholder="NorthAve NW, Atlanta, GA 30332" onInputChange={setOrgAddress} />
                <Spacer height={SharedStyles.elementSpacing} />
                <SelectionButton buttonText="Save Changes" btnOnPress={onSaveProfile} />
                <Spacer height={SharedStyles.elementSpacing} />
                <SelectionButton buttonText="Cancel" btnOnPress={() => navigation.pop() } />
            </PageBody>
        </ScrollView>
    </View>
}