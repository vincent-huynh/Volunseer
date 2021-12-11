import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import PageBody from "../../../components/PageBody";
import Spacer from "../../../components/Spacer";
import SelectionButton from "../../../components/SelectionButton";
import SubheaderText from "../../../components/SubheaderText";
import axios from "axios";
import setAuthToken from "../../../util/setAuthToken";

import { SharedStyles } from "../../../style";

export default OrgOverviewView = ({ navigation }) => {
  const [events, setEvents] = useState([]);
  const [eventC, setEventC] = useState([]);
  useEffect(() => {
    if (global.token) {
      setAuthToken(global.token);
    }
    let tempEvents;
    axios
      .get("http://159.223.142.127:3001/api/events/all/mine")
      .then((res) => {
        tempEvents = res.data;
      })
      .catch((err) => {
        console.error(err);
      });

    setEvents(tempEvents);
  }, [events]);

  useEffect(() => {
    let eventC = events.map((eve) => eve.name);
    setEventC(eventC);
  }, [events]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='dark-content' />
      <View
        style={{
          position: "absolute",
          marginTop: 50,
          marginLeft: 20,
          zIndex: 1,
        }}
      >
        <Icon
          name='back'
          size={16}
          color='#000'
          onPress={() => navigation.pop()}
        />
      </View>

      <ScrollView style={{ marginTop: SharedStyles.topPageMargin }}>
        <PageBody>
          <SubheaderText text='Upcoming Events' />
          <Spacer height={SharedStyles.elementSpacing} />
          {eventC.map((e, i) => (
            <SubText style={styles.listText} text={e} key={i} />
          ))}
          <Spacer height={SharedStyles.elementSpacing} />

          <SelectionButton
            buttonText='Create New Events'
            btnOnPress={() => navigation.push("Create Event")}
          />
          <Spacer height={SharedStyles.elementSpacing} />
          <SelectionButton
            buttonText='View Profile'
            btnOnPress={() => navigation.push("Org Profile")}
          />
        </PageBody>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  listText: {
    padding: SharedStyles.elementSpacing / 4,
    borderWidth: 1,
    borderColor: "lightgray",
    minHeight: "10%",
  },
});
