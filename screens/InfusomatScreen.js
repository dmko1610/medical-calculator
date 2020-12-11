import React from "react";
import { Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const InfusomatScreen = (props) => (
  <>
    <TextInput placeholder="Number" />
    <Button
      title="Go to Main"
      onPress={() => props.navigation.navigate("Main")}
    />
  </>
);

InfusomatScreen.navigationOptions = {
  headerTitle: "",
};

export default InfusomatScreen;
