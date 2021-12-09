import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  ScrollView,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  Text,
  Image,
  Linking,
  Platform,
} from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";
import Icon from "react-native-vector-icons/AntDesign";

import PageBody from "../../../components/PageBody";
import SubheaderText from "../../../components/SubheaderText";
import SubText from "../../../components/SubText";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";

import BubbleButton from "../../../components/BubbleButton";
import Spacer from "../../../components/Spacer";
import { SharedStyles } from "../../../style";
import axios from "axios";
import setAuthToken from "../../../util/setAuthToken";

import image0 from "../../../assets/event_images/0.jpg";
import image1 from "../../../assets/event_images/1.jpg";
import image2 from "../../../assets/event_images/2.jpg";
import image3 from "../../../assets/event_images/3.jpg";
import image4 from "../../../assets/event_images/4.jpg";

export default EventView = ({ routes, navigation }) => {
  console.log(global.markerData);
  console.log(global.markerData.location.coordinates[0]);

  const images = [image0, image1, image2, image3, image4];
  const scheme = Platform.select({ ios: "maps:0,0?q=", android: "geo:0,0?q=" });
  const latLng = `${global.markerData.location.coordinates[1]},${global.markerData.location.coordinates[0]}`;
  const label = global.markerData.name;
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  return (
    <SafeAreaView>
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

      <PageBody>
        <SubheaderText text={global.markerData.name} />
        <Spacer height={20} />
        <Image
          style={styles.eventImage}
          source={images[Math.floor(Math.random() * 5)]}
        />
        <Spacer height={20} />
        <SubText text={global.markerData.description} />
        <Spacer height={30} />

        <BubbleButton
          style={{ backgroundColor: "transparent", color: "blue" }}
          buttonText='Directions'
          btnOnPress={() => Linking.openURL(url)}
        />
        <BubbleButton
          style={{ backgroundColor: "#A9DE90" }}
          buttonText='RSVP'
          btnOnPress={() => {
            if (global.token) {
              setAuthToken(global.token);
            }
            axios
              .put(
                `http://159.223.142.127:3001/api/events/rsvp/${global.markerData._id}`
              )
              .then((res) => console.log("good"))
              .catch((err) => console.error(err));
          }}
        />
      </PageBody>
    </SafeAreaView>
  );
};

const windowsWidth = Dimensions.get("window").width;
const windowsHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  bubbleContainer: {
    width: "auto",
    margin: "2%",
    padding: "3%",
  },

  eventImage: {
    width: windowsWidth * 0.9,
    height: windowsWidth * 0.6,
  },
});
