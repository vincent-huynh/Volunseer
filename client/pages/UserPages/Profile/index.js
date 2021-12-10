import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Share,
} from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";
import Icon from "react-native-vector-icons/AntDesign";

import PageBody from "../../../components/PageBody";
import SubheaderText from "../../../components/SubheaderText";
import NormalText from "../../../components/NormalText";
import SubText from "../../../components/SubText";
import Spacer from "../../../components/Spacer";
import SelectionButton from "../../../components/SelectionButton";
import BubbleButton from "../../../components/BubbleButton";
import axios from "axios";
import setAuthToken from "../../../util/setAuthToken";

import { SharedStyles } from "../../../style";

export default ProfileView = ({ navigation }) => {
  const [name, setName] = useState("Default Name");
  const [email, setEmail] = useState("loading@email.com");
  const [phoneNumber, setPhoneNumber] = useState("678-999-8212");
  const [affiliatedOrganizations, setAffiliatedOrganizations] = useState([]);
  useEffect(() => {
    setAuthToken(global.token);
    let tempName,
      tempEmail,
      tempPhoneNumber,
      tempAO = null;
    axios.get("http://159.223.142.127:3001/api/users/me").then((res) => {
      if (res.data.name) {
        tempName = res.data.name;
      }
      if (res.data.email) {
        tempEmail = res.data.email;
      }
      if (res.data.phoneNumber) {
        tempPhoneNumber = res.data.phoneNumber;
      }
      if (res.data.affiliatedOrganizations) {
        tempAO = res.data.affiliatedOrganizations;
      }
    });
    if (tempName) {
      setName(tempName);
    }
    if (tempEmail) {
      setEmail(tempEmail);
    }
    if (tempPhoneNumber) {
      setPhoneNumber(tempPhoneNumber);
    }
    if (tempAO) {
      setAffiliatedOrganizations(tempAO);
    }
  }, [name, email, phoneNumber, affiliatedOrganizations]);
  const onPressEdit = () => {
    console.log("Press edit profile button");

    navigation.push("Edit Profile");
  };

  const formatPhoneNum = (number) => {
    return number
      .replace(/\D+/g, "")
      .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  };

  const affiliatedOrgs = global.affiliatedOrgs ?? [
    "Atlanta Humane Society",
    "Trees ATL",
    "Georgia Tech",
    "ATL United",
  ];
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
          <View>
            <SubheaderText text='My Profile' />
          </View>

          <View style={styles.container}>
            <Spacer height={SharedStyles.elementSpacing} />
            <Image
              style={styles.profiePic}
              source={require("../../../assets/profile.png")}
            />
            <Spacer height={SharedStyles.elementSpacing} />
            <NormalText text={name ?? "Nicholas Zhang"} />
            <Spacer height={SharedStyles.elementSpacing} />
            <SubText text={email ?? "nicholas_zhang@gmail.com"} />
            <Spacer height={SharedStyles.elementSpacing / 2} />
            <SubText
              text={
                global.phoneNumber
                  ? formatPhoneNum(phoneNumber)
                  : formatPhoneNum("4701111111")
              }
            />
            <Spacer height={SharedStyles.elementSpacing} />
            <NormalText text='Affiliated Organizations' />
            <View style={styles.horizontalContainer}>
              {affiliatedOrganizations.map((e, i) => (
                <BubbleButton
                  buttonText={e}
                  btnOnPress={() => console.log("Sample handler")}
                  key={i}
                  style={styles.bubbleContainer}
                />
              ))}
            </View>
            <Spacer height={SharedStyles.elementSpacing} />
            <SelectionButton
              buttonText='Edit Profile'
              btnOnPress={onPressEdit}
            />
          </View>
        </PageBody>
      </ScrollView>
    </View>
  );
};

const windowsWidth = Dimensions.get("window").width;
const windowsHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  profiePic: {
    width: windowsWidth * 0.6,
    height: windowsWidth * 0.6,
    aspectRatio: 1,
    resizeMode: "contain",
    borderRadius: (windowsWidth * 0.6) / 2,
    borderWidth: 1,
    overflow: "hidden",
  },
  horizontalContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  bubbleContainer: {
    width: "auto",
    margin: "2%",
    padding: "3%",
  },
});
