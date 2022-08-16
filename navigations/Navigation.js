import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import PlayerStack from "./PlayerStack";
import MusicStack from "./MusicStack";

const Tab = createBottomTabNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: "black",
    background: "white",
    card: "transparent",
    text: "black",
    border: "transparent",
    notification: "#FF4545",
  },
};
export default function Navigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar barStyle="dark-content" backgroundColor={"white"} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
          tabBarShowLabel: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0,
          },
        })}
      >
        <Tab.Screen name="MusicStack" component={MusicStack} options={{}} />
        <Tab.Screen
          name="PlayerStack"
          component={PlayerStack}
          options={{ headerShadowVisible: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case "MusicStack":
      iconName = "musical-notes-outline";
      break;
    case "PlayerStack":
      iconName = "play-outline";
      break;
    default:
      break;
  }
  return <Icon type="ionicon" name={iconName} size={28} color={color} />;
}
