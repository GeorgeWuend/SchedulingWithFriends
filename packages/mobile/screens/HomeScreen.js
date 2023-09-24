import React, { useEffect, useState } from "react";

import {
  Button,
  Pressable,
  ImageBackground,
  Text,
  TextInput,
  View,
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import { StyleSheet } from "react-native";

import { normalizeWidth, normalizeHeight } from "./Responsive";


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

  title: {
    fontSize: 70,
    color: "black",
    fontFamily: "JetBrainsMono-Regular",
  },

  text: {
    fontSize: 16,
    fontFamily: "JetBrainsMono-Regular",
  },

  input: {
    height: normalizeHeight(40), // 40
    width: normalizeWidth(200), // 200
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    textAlign: "center",
    fontFamily: "JetBrainsMono-Regular",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  buttonPressed: {
    opacity: 0.6,
  },
  google: {
    backgroundColor: "white", // Google blue color
    padding: 8,
    width: normalizeWidth(200), // 200
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
    alignSelf: "center",
    marginTop: 20,
    fontFamily: "JetBrainsMono-Regular",
  },
});

export default function HomeScreen() {
  const userId = "oSyb1pRJCsCCTjf3pB6D";


  // console.log("user", user);

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
        <View
          style={{
            marginBottom: normalizeHeight(300), // 100
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>Login</Text>
          <View>
            <TextInput style={styles.input} placeholder="Username" />
            <View
              style={{
                height: 10,
              }}
            ></View>
            <TextInput style={styles.input} placeholder="Password" />
          </View>
          <View
            style={{
              height: 5,
            }}
          ></View>

          <Pressable onPress={() => console.log("pressed")}>
            {({ pressed }) => (
              <Text style={[styles.button, pressed && styles.buttonPressed]}>
                Forgot Password
              </Text>
            )}
          </Pressable>
          <View
            style={{
              height: 10,
            }}
          ></View>


          <Text style={styles.text}>Or</Text>

          <Pressable onPress={() => (console.log("pressed")
                                    navigator.navigate("Friends"))}>
            {({ pressed }) => (
              <Text style={[styles.google, pressed && styles.buttonPressed]}>
                Sign in with Google
              </Text>
            )}
          </Pressable>
        </View>

      </ImageBackground>
    </View>

  );
}
