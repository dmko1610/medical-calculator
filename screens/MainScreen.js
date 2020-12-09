import React from "react";
import { Button, Text, View } from "react-native";

const MainScreen = (props) => {
  return (
    <>
      <Text>Something</Text>
      <Button title="Button" onPress={() => props.navigation.openDrawer()} />
    </>
  );
};

MainScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Somescreen",
    headerLeft: (
      <Button
        onPress={() => navData.navigation.toggleDrawer()}
        title="D"
        color="#fff"
      />
    ),
  };
};

export default MainScreen;
