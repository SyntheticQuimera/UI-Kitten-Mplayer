import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon, SearchBar } from "react-native-elements";
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
  const cancelSearch = () => setSearch((prevState) => !prevState);

  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {"."}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert("Id : " + item.id + " Title : " + item.title);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Icon
            name="return-up-back-outline"
            type="ionicon"
            size={28}
            color="black"
            onPress={() => navigation.navigate("Music")}
          />
          <SearchBar
            lightTheme
            round
            clearIcon={{ color: "black" }}
            inputStyle={{ color: "black" }}
            searchIcon={{ size: 24, color: "black" }}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction("")}
            placeholder="Type Here..."
            value={search}
            containerStyle={{
              width: "80%",
              backgroundColor: "transparent",
              borderBottomColor: "transparent",
              borderTopColor: "transparent",
            }}
            inputContainerStyle={{
              backgroundColor: "#f8f8f8",
            }}
          />
        </View>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
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
              color="black"
              onPress={() => navigation.navigate("Search")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MusicStack;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  itemStyle: {
    padding: 10,
  },
});
