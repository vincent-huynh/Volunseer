import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/AntDesign';

import PageBody from '../../components/PageBody';
import SubheaderText from '../../components/SubheaderText';
import NormalText from '../../components/NormalText';
import SubText from '../../components/SubText';
import { SharedStyles } from '../../style';
import PercentProgressBar from '../../components/ProgressBar';
import Spacer from '../../components/Spacer';

export default ActivityView = ({ navigation }) => {

    const coinGoal = 50;
    const coinEarned = 23;
    const numVolunteer = 7;
    const goalVolunteer = 8;

    const recentActivity = global.recentActivity ?? ["Helped at local food kitchen", "Cleaned up local park", "Animal shelter dog watching"];
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" />
            <View style={{ position: "absolute", marginTop: 50, marginLeft: 20 }}>
               <Icon name="back" size={16} color="#000" onPress={() => navigation.pop() }/>
            </View>
            
            <PageBody>
                <SubheaderText text="Personal Activity" />
                <Spacer height={SharedStyles.elementSpacing * 2} />

                <View style={styles.horizontalContainer}>
                    <PercentProgressBar text={coinEarned + "/" + coinGoal} percent={coinEarned / coinGoal * 100} radius={70} description="Goal: Places Volunteered" />
                    <Spacer width={SharedStyles.elementSpacing} />
                    <PercentProgressBar text={numVolunteer + "/" + goalVolunteer} percent={numVolunteer / goalVolunteer * 100} radius={70} description="Goal: Coins Earned" />
                </View>

                <Spacer height={SharedStyles.elementSpacing * 2} />
                <NormalText text="Recent Activity" />
                {recentActivity.map((e, i) => <SubText style={styles.listText} text={e} key={i} />)}
            </PageBody>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    listText: {
        padding: SharedStyles.elementSpacing / 4,
        borderWidth: 1,
        borderColor: "lightgray"
    },
    horizontalContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center"
    }
});