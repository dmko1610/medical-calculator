import React from "react";
import { Button } from "react-native";

const DrawerBar = (props) => {
  navigationOptions = {
    drawerLabel: "Someshit",
  };
  return (
    <Button onPress={() => props.navigation.closeDrawer()} title="Go back" />
  );
};

export default DrawerBar;
