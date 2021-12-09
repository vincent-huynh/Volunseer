import React from "react";
import {
  ScrollView,
  StatusBar,
  View,
  Modal,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import PageBody from "../../../components/PageBody";
import Spacer from "../../../components/Spacer";
import SelectionButton from "../../../components/SelectionButton";
import TextInput from "../../../components/TextInput";
import SubheaderText from "../../../components/SubheaderText";
import BubbleButton from "../../../components/BubbleButton";

import MapView, { Marker } from "react-native-maps";
import axios from "axios";
import setAuthToken from "../../../util/setAuthToken";

import { SharedStyles } from "../../../style";

export default CreateEventView = ({ navigation }) => {
  const [eventName, setEventName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [numPointsAward, setNumPointsAward] = React.useState("");
  const [numVolunteers, setNumVolunteers] = React.useState("");
  const [latitude, setLatitude] = React.useState(33.7756178);
  const [longitude, setLongitude] = React.useState(-84.3984737);

  const [region, setRegion] = React.useState({
    latitude: 33.7756178,
    longitude: -84.3984737,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [isMapOpen, setIsMapOpen] = React.useState(false);

  const onCreateEvent = () => {
    if (global.token) {
      setAuthToken(global.token);
    }
    let dateBody = new Date("12/16/2021 2:00:00 PM").toISOString();
    let argsV = {
      name: eventName,
      lat: latitude,
      lng: longitude,
      description: description,
      date: dateBody,
    };
    axios
      .post("http://159.223.142.127:3001/api/events", argsV)
      .then((res) => {
        console.log("good");
      })
      .catch((err) => {
        console.error(err);
      });
    navigation.pop();
  };

  const showMap = () => {
    setIsMapOpen(!isMapOpen);
  };

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
          <SubheaderText text='Create Event' />
          <TextInput placeholder='Event Name' onInputChange={setEventName} />
          <TextInput
            placeholder='Description'
            style={{ height: "30%", flexWrap: "wrap" }}
            onInputChange={setDescription}
          />
          <TextInput
            placeholder='Number of Points to Award'
            onInputChange={setNumPointsAward}
          />
          <TextInput
            placeholder='Number of Volunteers Needed'
            onInputChange={setNumVolunteers}
          />
          <BubbleButton
            style={{ borderRadius: 10 }}
            btnOnPress={showMap}
            buttonText='Set Location'
          />
          <Spacer height={SharedStyles.elementSpacing} />
          <SelectionButton
            buttonText='Create Event'
            btnOnPress={onCreateEvent}
          />
          <Spacer height={SharedStyles.elementSpacing} />
          <SelectionButton
            buttonText='Cancel'
            btnOnPress={() => navigation.pop()}
          />
        </PageBody>
      </ScrollView>

      <Modal
        animationType='slide'
        transparent={true}
        visible={isMapOpen}
        onRequestClose={() => setIsMapOpen(!isMapOpen)}
      >
        <View style={styles.modalContainer}>
          <MapView
            style={styles.map}
            initialRegion={region}
            onRegionChangeComplete={setRegion}
          >
            <Marker
              draggable
              coordinate={{ longitude, latitude }}
              onPress={(e) => {
                setLongitude(e.nativeEvent.coordinate.longitude);
                setLatitude(e.nativeEvent.coordinate.latitude);
                setRegion({
                  longitude: longitude,
                  latitude: latitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                });
              }}
            />
          </MapView>
          <SelectionButton
            buttonText='Finish Location Selection'
            btnOnPress={() => {
              setIsMapOpen(!isMapOpen);
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  map: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContainer: {
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
});
