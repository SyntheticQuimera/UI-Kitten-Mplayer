import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

function MusicScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function SearchScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = React.useState("");
  const cancelSearch = () => setSearch((prevState) => !prevState);

  React.useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        // search bar options
        autoFocus: true,
        barTintColor: "#232526",
        textColor: "white",
        headerIconColor: "white",
        hintTextColor: "gray",
        placeholder: "Search...",
        shouldShowHintSearchIcon: false,
      },
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Search Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
function MusicStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Music"
        component={MusicScreen}
        options={{
          headerShadowVisible: false,
          headerRight: () => (
            <Icon
              type="material-community"
              name="magnify"
              size={24}
              color="white"
              onPress={() => navigation.navigate("Search")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerTitle: "Search", headerShadowVisible: false }}
      />
    </Stack.Navigator>
  );
}

export default MusicStack;
