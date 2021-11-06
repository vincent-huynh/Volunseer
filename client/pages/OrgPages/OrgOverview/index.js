import React from 'react';
import { ScrollView, StatusBar, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import PageBody from '../../../components/PageBody';
import Spacer from '../../../components/Spacer';
import SelectionButton from '../../../components/SelectionButton';
import SubheaderText from '../../../components/SubheaderText';

import { SharedStyles } from '../../../style';

export default OrgOverviewView = ({ navigation }) => {

    const upcomingEvents = global.upcomingEvents ?? ["(01/13) Park Cleanup", "(01/23) Bake Sale"];
    const previousEvents = global.previousEvents ?? ["(11/03) Food Bank Volunteer", "(12/15) Library Book Sorting"];

    return <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <View style={{ position: "absolute", marginTop: 50, marginLeft: 20, zIndex: 1 }} >
            <Icon name="back" size={16} color="#000" onPress={() => navigation.pop()} />
        </View>

        <ScrollView style={{ marginTop: SharedStyles.topPageMargin }}>
            <PageBody>
                <SubheaderText text="Upcoming Events" />
                <Spacer height={SharedStyles.elementSpacing} />
                {upcomingEvents.map((e, i) => <SubText style={styles.listText} text={e} key={i} />)}
                <Spacer height={SharedStyles.elementSpacing} />
                <SubheaderText text="Previous Events" />
                <Spacer height={SharedStyles.elementSpacing} />
                {previousEvents.map((e, i) => <SubText style={styles.listText} text={e} key={i} />)}
                <Spacer height={SharedStyles.elementSpacing * 3} />

                
                <SelectionButton buttonText="Create New Events" btnOnPress={() => navigation.push("Create Event")} />
                <Spacer height={SharedStyles.elementSpacing} />
                <SelectionButton buttonText="View Profile" btnOnPress={() => navigation.push("Org Profile")} />
            </PageBody>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    listText: {
        padding: SharedStyles.elementSpacing / 4,
        borderWidth: 1,
        borderColor: "lightgray",
        minHeight: "10%",
    }
});