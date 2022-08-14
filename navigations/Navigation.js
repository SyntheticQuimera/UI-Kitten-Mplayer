import React, { useState } from "react";
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
    primary: "white",
    background: "#232526",
    card: "transparent",
    text: "white",
    border: "transparent",
    notification: "#FF4545",
  },
};
export default function Navigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar backgroundColor={"black"} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
          tabBarShowLabel: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "grey",
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            borderTopWidth: 0,
            elevation: 0,
          },
        })}
      >
        <Tab.Screen
          name="Player"
          component={PlayerStack}
          options={{ headerShadowVisible: false }}
        />
        <Tab.Screen name="Music" component={MusicStack} options={{}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case "Music":
      iconName = "musical-notes-outline";
      break;
    case "Player":
      iconName = "play-outline";
      break;
    default:
      break;
  }
  return <Icon type="ionicon" name={iconName} size={28} color={color} />;
}
