import React from "react";
import { Button, StatusBar, View } from "react-native";

const MainScreen = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          margin: 5,
        }}>
        <Button
          title="Infusomat"
          onPress={() => props.navigation.navigate("Infusomat")}
          style={{ flex: 1, height: 50 }}
        />
        <Button
          title="Injection"
          onPress={() => props.navigation.navigate("Injection")}
          // style={{ flex: 1, height: 50, width: 100, margin: 20 }}
        />
      </View>
    </>
  );
};

export default MainScreen;
