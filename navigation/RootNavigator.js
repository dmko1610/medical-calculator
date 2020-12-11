import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import InfusomatScreen from "./../screens/InfusomatScreen";
import InjectionScreen from "./../screens/InjectionScreen";

const InfusomatNavigator = createStackNavigator(
  {
    Infusomat: InfusomatScreen,
  },
  {
    headerStyle: {
      backgroundColor: "#fff",
    },
  },
);

const RootNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Infusomat: InfusomatNavigator,
    Injection: InjectionScreen,
  },
  {
    headerMode: "none",
  },
);

export default createAppContainer(RootNavigator);
