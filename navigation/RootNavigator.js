import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import DrawerBar from "./DrawerBar";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: "#4a148c",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerTintColor: "#4a148c",
  headerTitle: "A Screen",
};

const MainNavigator = createStackNavigator(
  {
    Main: MainScreen,
  },
  {
    defaultNavigationOptions,
  },
);

const RootNavigator = createDrawerNavigator(
  {
    Main: MainNavigator,
    /*     Drawer: {
      screen: DrawerBar,
      navigationOptions: {
        drawerLabel: "Drawer",
      },
      drawerPosition: "left",
      drawerType: "slide",
    }, */
  },
  {
    defaultNavigationOptions,
  },
);

export default createAppContainer(RootNavigator);
