import React, { useEffect, useState } from "react";
import { Button, ImageBackground, SafeAreaView, Text, TextInput, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { StyleSheet } from "react-native";

import useUser from "../api/useUser";

const usersCollection = firestore().collection("Users");
const styles = StyleSheet.create({
  container: {
    flex: 1, // This ensures the container takes up the whole screen
  },
  background: {
    flex: 1, // This makes the background take up the whole screen
    resizeMode: "center",
    width: "100%", // Ensure it covers the entire width of the screen
    height: "100%", // Ensure it covers the entire height of the screen
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
});

export default function HomeScreen() {
  const userId = "oSyb1pRJCsCCTjf3pB6D";

  const { user, events, friends } = useUser(userId);

  console.log("user", user);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={require("./Frame.png")}
        style={styles.background}
      >
        <Text
          style={{
            fontSize: 70,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Login
        </Text>
        <View>
          <TextInput
            style={{
              height: 40,
              width: 200,
              borderColor: "gray",
              borderWidth: 1,
              backgroundColor: "white",
              borderRadius: 10,
              textAlign: "center",
            }}
            placeholder="Username"
          />
          <View
            style={{
              height: 10,
            }}
          ></View>
          <TextInput
            style={{
              height: 40,
              width: 200,
              borderColor: "gray",
              borderWidth: 1,
              backgroundColor: "white",
              borderRadius: 10,
              textAlign: "center",
            }}
            placeholder="Password"
          />
        </View>
        <Button
          title="Sign in"
          onPress={() => {
            console.log("Sign in");
            navigator.navigate("Friends");
          }}
        />

      </ImageBackground>
    </View>

  );
}
