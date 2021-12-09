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
} from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";
import Icon from "react-native-vector-icons/Octicons";

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

export default VolunteerMapView = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [eventVisible, setEventVisible] = React.useState(false);
  const [markerData, setMarkerData] = React.useState({});
  const [region, setRegion] = React.useState({
    latitude: 33.7756178,
    longitude: -84.3984737,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [markers, setMarkers] = React.useState([]);

  const onPressMenuBar = () => {
    console.log("Menu bar pressed");
    setMenuVisible(!menuVisible);
  };

  const navigateOut = (pageName, params={}) => {
    setMenuVisible(false);
    navigation.push(pageName, params);
  };

  const findEventsNearSpot = () => {
    let argsV = {
      lng: region.longitude,
      lat: region.latitude,
      miles: 5,
    };
    if (global.token) {
      setAuthToken(global.token);
    }
    axios
      .post("http://159.223.142.127:3001/api/events/near", argsV)
      .then((res) => {
        setMarkers(res.data);
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  // const sampleRewardsInfo = [
  //   {
  //       name: "Reward 1",
  //       description: "$5 Starbucks",
  //       points: 70
  //   },
  //   {
  //       name: "Reward 2",
  //       description: "10% Macy Discount",
  //       points: 500
  //   },
  //   {
  //       name: "Reward 3",
  //       description: "$5 Starbucks",
  //       points: 70
  //   },
  //   {
  //       name: "Reward 4",
  //       description: "Small Coffee",
  //       points: 50
  //   },
  //   {
  //       name: "Reward 5",
  //       description: "Donate $1 to Charity of Choice",
  //       points: 10
  //   },
  //   {
  //       name: "Reward 6",
  //       description: "$1 McDonalds",
  //       points: 30
  //   },
  //   {
  //       name: "Reward 7",
  //       description: "$10 Gift Card",
  //       points: 1000
  //   },
  //   {
  //       name: "Reward 8",
  //       description: "Lottery Entry",
  //       points: 50
  //   },
  //   {
  //       name: "Reward 9",
  //       description: "Ice Cream Voucher",
  //       points: 500
  //   },
  // ];
  // if (global.token) {
  //   setAuthToken(global.token);
  // }
  // sampleRewardsInfo.forEach((item) => {
  //     axios.post("http://159.223.142.127:3001/api/rewards", item)
  //     .then((res) => {
  //         console.log("Added rewards");
  //     })
  //     .catch((err) => {
  //         console.log(err.response.data);
  //     });
  // });

  const markerClick = (marker) => {
    console.log(marker);
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={{ position: "absolute", marginTop: 50, marginLeft: 20 }}>
        <Icon
          name="three-bars"
          size={30}
          color="#000"
          onPress={onPressMenuBar}
        />
      </View>
      <PageBody>
        <SubheaderText text="Volunteer Map" />
        <BubbleButton
          style={{ borderRadius: 7 }}
          buttonText="search"
          btnOnPress={findEventsNearSpot}
        />
      </PageBody>

      <MapView
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={setRegion}
      >
        {markers.map((marker) => {
          let coord = {
            longitude: marker.location.coordinates[0],
            latitude: marker.location.coordinates[1],
          };
          return (
            <Marker
              key={marker._id}
              coordinate={coord}
              title={marker.name}
              description={marker.description}
              onPress={() => {
                setEventVisible(true);
                setMarkerData(marker);
              }}
            >
              <Callout tooltip style={styles.customView}>
                {/* <TouchableHighlight onPress={() => markerClick(marker._id)}>
                  <View style={styles.customText}>
                    <Text>
                      {"Random" + marker.name}
                      {"\n"}
                      {marker.description}
                    </Text>
                  </View>
                </TouchableHighlight> */}
              </Callout>
            </Marker>
          );
        })}
      </MapView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => {
          setMenuVisible(!menuVisible);
        }}
      >
        <TouchableOpacity
          style={styles.modalBox}
          onPress={() => setMenuVisible(false)}
        >
          <View style={styles.innerModalBox}>
            <BubbleButton
              style={{ borderRadius: 7 }}
              buttonText="Rewards"
              btnOnPress={() => navigateOut("Rewards")}
            />
            <Spacer height={SharedStyles.elementSpacing / 2} />
            <BubbleButton
              style={{ borderRadius: 7 }}
              buttonText="Personal Activity"
              btnOnPress={() => navigateOut("Personal Activity")}
            />
            <Spacer height={SharedStyles.elementSpacing / 2} />
            <BubbleButton
              style={{ borderRadius: 7 }}
              buttonText="My Profile"
              btnOnPress={() => navigateOut("My Profile")}
            />
            <Spacer height={SharedStyles.elementSpacing / 2} />
            <BubbleButton
              style={{ borderRadius: 7 }}
              buttonText="Back"
              btnOnPress={() => setMenuVisible(false)}
            />
            <Spacer height={SharedStyles.elementSpacing / 2} />
          </View>
        </TouchableOpacity>
      </Modal>


      <Modal
        animationType="slide"
        transparent={true}
        visible={eventVisible}
        onRequestClose={() => setEventVisible(!eventVisible)}
        style={{backgroundColor: "yellow"}}
        >
          <TouchableOpacity style={{width: "100%", height: "100%"}} onPress={() => setEventVisible(!eventVisible)}>
            <TouchableOpacity style={styles.eventModalBox}>
              <View style={styles.eventInfoBox}>
                {/* <SubheaderText text={markers.name ?? ""} /> */}
                {/* <Text>{markerData.name}</Text>
                <Text>{markerData.description}</Text> */}

                <SubheaderText text={markerData.name} />
                <Spacer height={20} />
                <SubText text={markerData.description} />
                <Spacer height={30} />
                <BubbleButton style={{ borderRadius: 7, backgroundColor: "deepskyblue", width: "100%"}} btnOnPress={() => {setEventVisible(false); global.markerData = markerData; navigateOut("Event"), {markerData}}} buttonText="Open" />
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  bubbleContainer: {
    width: "auto",
    margin: "2%",
    padding: "3%",
  },
  modalBox: {
    margin: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  innerModalBox: {
    paddingTop: "5%",
    paddingBottom: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: windowWidth,
    height: windowHeight,
  },
  customView: {
    // width: "100%",
    // // flex: 1,
    // padding: 24,
    // alignItems: "center",
    // justifyContent: "center",
    // // backgroundColor: "#eaeaea",
    // backgroundColor: "green",
  },
  eventModalBox: {
    height: "50%",
    width: "80%",
    // margin: "10%",
    // padding: "5%",
    // flex: 1,
    // justifyContent: "flex-end",
    backgroundColor: "white",
    position: "absolute",
    bottom: "25%",
    left: "10%",
    borderRadius: 20
  },
  eventInfoBox: {
    // paddingTop: 30,
    // paddingBottom: 20,
    padding: 10,
    // height: "45%",
    // width: "100%",
    // justifyContent: "flex-end"
  }
});
