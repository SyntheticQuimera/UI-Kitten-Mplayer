import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon, Slider, Image } from "react-native-elements";
import { BlurView } from "expo-blur";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";

function PlayerScreen() {
  const [value, setValue] = useState(0);
  const [playIcon, setPlayIcon] = useState(true);
  const changePlayIcon = () => setPlayIcon((prevState) => !prevState);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image
        source={require("../assets/pexels-efrain-alonso-3584283.jpg")}
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <BlurView
          intensity={100}
          tint="dark"
          style={{
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            width: "90%",
            height: "40%",
            marginBottom: "20%",
          }}
        >
          <View
            style={{
              paddingHorizontal: "10%",
              width: "100%",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <Text
              style={{
                alignSelf: "flex-start",
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              This is the song name
            </Text>
            <Text
              style={{
                alignSelf: "flex-start",
                color: "gray",
              }}
            >
              This is the artist
            </Text>
            <Slider
              value={value}
              onValueChange={setValue}
              maximumValue={10}
              minimumValue={0}
              step={1}
              allowTouchTrack
              trackStyle={{ height: 5, backgroundColor: "transparent" }}
              thumbStyle={{
                height: 20,
                width: 20,
                backgroundColor: "transparent",
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Text style={{ color: "white" }}>00:00</Text>
              <Text style={{ color: "white" }}>00:00</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              paddingTop: "10%",
              paddingHorizontal: "10%",
            }}
          >
            <Icon
              name="play-skip-back-outline"
              type="ionicon"
              size={28}
              color="white"
              onPress={() => {}}
            />
            <Icon
              name="play-back-outline"
              type="ionicon"
              size={28}
              color="white"
              onPress={() => setValue(value - 1)}
            />
            <Icon
              name={playIcon ? "play-outline" : "pause-outline"}
              type="ionicon"
              size={42}
              color="white"
              onPress={() => changePlayIcon()}
            />
            <Icon
              name="play-forward-outline"
              type="ionicon"
              size={28}
              color="white"
              onPress={() => setValue(value + 1)}
            />
            <Icon
              name="play-skip-forward-outline"
              type="ionicon"
              size={28}
              color="white"
              onPress={() => {}}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              paddingTop: "5%",
              paddingHorizontal: "5%",
            }}
          >
            <Icon
              name="repeat-outline"
              type="ionicon"
              size={28}
              color="white"
              onPress={() => {}}
            />
            <Icon
              name="shuffle-outline"
              type="ionicon"
              size={28}
              color="white"
              onPress={() => {}}
            />
          </View>
        </BlurView>
      </Image>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function PlayerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Player"
        component={PlayerScreen}
        options={{ headerShadowVisible: false, headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default PlayerStack;
