import React from "react";
import { Button, Text } from "react-native";

const MainScreen = (props) => {
  return (
    <>
      <Text>Something</Text>
      <Button
        title="Button"
        onPress={() => props.navigation.navigate("Drawer")}
      />
    </>
  );
};

export default MainScreen;
