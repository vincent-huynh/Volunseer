import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";

import SubheaderText from "../../components/SubheaderText";
import PageBody from "../../components/PageBody";
import TextInput from "../../components/TextInput";
import SelectionButton from "../../components/SelectionButton";
import Spacer from "../../components/Spacer";
import axios from "axios";

export default RegistrationView = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [organizations, setOrganizations] = React.useState("");

  const onPressRegister = () => {
    console.log(
      "Press Register Button " +
        name +
        " " +
        email +
        " " +
        password +
        " " +
        organizations
    );

    axios
      .post("http://159.223.142.127:3001/api/users", {
        name,
        email,
        password,
        isVolunteer: true,
      })
      .then((res) => {
        global.token = res.data.token;
        navigation.pop();
      })
      .catch((err) => {
        console.error(err.response.data);
        // TODO TODO TODO
        // WE NEED SOMETHING HERE TO SHOW POPUP ERRORS
      });
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content' />
      <View style={{ position: "absolute", marginTop: 50, marginLeft: 20 }}>
        <Icon
          name='back'
          size={16}
          color='#000'
          onPress={() => navigation.pop()}
        />
      </View>
      <PageBody>
        <SubheaderText text='Register' />
        <TextInput placeholder='Name' onInputChange={setName} />
        <TextInput placeholder='Email' onInputChange={setEmail} />
        <TextInput
          secureTextEntry={true}
          placeholder='Password'
          onInputChange={setPassword}
        />
        <TextInput
          placeholder='Affiliated Organizations'
          onInputChange={setOrganizations}
        />
        <Spacer height={50} />
        <SelectionButton buttonText='Register' btnOnPress={onPressRegister} />
      </PageBody>
    </SafeAreaView>
  );
};
