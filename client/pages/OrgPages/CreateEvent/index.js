import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import PageBody from '../../../components/PageBody';
import Spacer from '../../../components/Spacer';
import SelectionButton from '../../../components/SelectionButton';
import TextInput from '../../../components/TextInput';
import SubheaderText from '../../../components/SubheaderText';

import { SharedStyles } from '../../../style';

export default CreateEventView = ({ navigation }) => {
    const [eventName, setEventName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [numPointsAward, setNumPointsAward] = React.useState("");
    const [numVolunteers, setNumVolunteers] = React.useState("");

    const onCreateEvent = () => {
        
        navigation.pop();
    }

    return <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <View style={{ position: "absolute", marginTop: 50, marginLeft: 20, zIndex: 1 }} >
            <Icon name="back" size={16} color="#000" onPress={() => navigation.pop()} />
        </View>

        <ScrollView style={{ marginTop: SharedStyles.topPageMargin }}>
            <PageBody>
                <SubheaderText text="Create Event" />
                <TextInput placeholder="Event Name" onInputChange={setEventName} />
                <TextInput placeholder="Description" style={{height: "30%", flexWrap: "wrap"}} onInputChange={setDescription} />
                <TextInput placeholder="Number of Points to Award" onInputChange={setNumPointsAward} />
                <TextInput placeholder="Number of Volunteers Needed" onInputChange={setNumVolunteers} />
                <Spacer height={SharedStyles.elementSpacing} />
                <SelectionButton buttonText="Create Event" btnOnPress={ onCreateEvent } />
                <Spacer height={SharedStyles.elementSpacing} />
                <SelectionButton buttonText="Cancel" btnOnPress={() => navigation.pop()} />
            </PageBody>
        </ScrollView>
    </View>
}