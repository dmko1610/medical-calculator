import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import MainScreen from "../screens/MainScreen";
import DrawerBar from "./DrawerBar";

/* const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: "#4a148c",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerTintColor: "#4a148c",
  headerTitle: "A Screen",
}; */

const AppNavigator = createDrawerNavigator({
  Main: MainScreen,
  Drawer: {
    screen: DrawerBar,
    navigationOptions: {
      drawerLabel: "Drawer",
    },
    drawerPosition: "left",
    drawerType: "slide",
  },
});

export default createAppContainer(AppNavigator);
