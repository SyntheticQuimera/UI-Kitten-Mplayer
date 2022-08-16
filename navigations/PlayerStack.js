import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Card, Icon, Slider } from "react-native-elements";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImageBlurShadow from "react-native-image-blur-shadow";

function PlayerScreen() {
  const [value, setValue] = useState(0);
  const [playIcon, setPlayIcon] = useState(true);
  const changePlayIcon = () => setPlayIcon((prevState) => !prevState);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.buttonsContainer3}>
        <Icon
          name="list-outline"
          type="ionicon"
          size={28}
          color="gray"
          onPress={() => {}}
        />
      </View>
      <ImageBlurShadow
        style={styles.img}
        source={require("../assets/wp11310013-james-webb-wallpapers.jpg")}
        imageWidth={300}
        imageHeight={300}
        imageBorderRadius={22}
        shadowOffset={40}
        shadowBlurRadius={18}
        shadowBackgroundColor={"#ffffff"}
      />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textSong}>This is the song name</Text>
          <Text style={styles.textArtist}>This is the artist</Text>
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
          <View style={styles.trackTimer}>
            <Text style={{ color: "black" }}>00:00</Text>
            <Text style={{ color: "black" }}>00:00</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Icon
            name="play-skip-back-outline"
            type="ionicon"
            size={28}
            color="black"
            onPress={() => {}}
          />
          <Icon
            name="play-back-outline"
            type="ionicon"
            size={28}
            color="black"
            onPress={() => setValue(value - 1)}
          />
          <Icon
            name={playIcon ? "play-outline" : "pause-outline"}
            type="ionicon"
            size={42}
            color="black"
            onPress={() => changePlayIcon()}
          />
          <Icon
            name="play-forward-outline"
            type="ionicon"
            size={28}
            color="black"
            onPress={() => setValue(value + 1)}
          />
          <Icon
            name="play-skip-forward-outline"
            type="ionicon"
            size={28}
            color="black"
            onPress={() => {}}
          />
        </View>
        <View style={styles.buttonsContainer2}>
          <Icon
            name="repeat-outline"
            type="ionicon"
            size={28}
            color="gray"
            onPress={() => {}}
          />
          <Icon
            name="shuffle-outline"
            type="ionicon"
            size={28}
            color="gray"
            onPress={() => {}}
          />
        </View>
      </View>
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

const styles = StyleSheet.create({
  img: {
    justifyContent: "center",
    alignSelf: "center",
  },
  container: {
    width: "90%",
    height: "40%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginBottom: "10%",
    paddingHorizontal: "5%",
    flex: 1,
  },
  textContainer: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
  },
  textSong: {
    fontSize: 20,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  textArtist: {
    alignSelf: "flex-start",
    color: "gray",
  },
  trackTimer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonsContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonsContainer2: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonsContainer3: {
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
  },
});
