import React from 'react';
import { ScrollView, StatusBar, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import PageBody from '../../../components/PageBody';
import Spacer from '../../../components/Spacer';
import SelectionButton from '../../../components/SelectionButton';
import TextInput from '../../../components/TextInput';
import SubheaderText from '../../../components/SubheaderText';
import NormalText from '../../../components/NormalText';
import SubText from '../../../components/SubText';

import { SharedStyles } from '../../../style';

export default OrgProfileView = ({ navigation }) => {
    const tempMissionStatement = "Georgia Tech's mission is to develop leaders who advance technology and improve the human condition. Its mission and strategic plan are focused on making a positive impact in the lives of people everywhere.";

    return <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <View style={{ position: "absolute", marginTop: 50, marginLeft: 20, zIndex: 1 }} >
            <Icon name="back" size={16} color="#000" onPress={() => navigation.pop()} />
        </View>

        <ScrollView style={{ marginTop: SharedStyles.topPageMargin }}>
            <PageBody>
                <SubheaderText text="Organization Profile" />
                <Spacer height={SharedStyles.elementSpacing} />
                <NormalText style={{ textAlign: "center" }} text="Georgia Institute of Technology" />
                <Spacer height={SharedStyles.elementSpacing} />
                <SubText style={styles.textUnderlines} text="random_ord@gatech.edu" />
                <Spacer height={SharedStyles.elementSpacing} />
                <SubText style={styles.textUnderlines} style={{flexWrap: "wrap"}} text={tempMissionStatement} />
                <Spacer height={SharedStyles.elementSpacing} />
                <SubText style={styles.textUnderlines} text="NorthAve NW, Atlanta, GA 30332" />
                <Spacer height={SharedStyles.elementSpacing * 2} />
                <SelectionButton buttonText="Edit Profile" btnOnPress={() => navigation.push("Edit Org Profile")}/>
            </PageBody>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    textUnderlines: {
        borderBottomWidth: 1,
    }
});