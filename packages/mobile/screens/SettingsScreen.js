import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

export default function SettingsScreen() {
  //Maybe just add some images in here to make it look nicer?
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{backgroundColor:"#ff0"}}>
        Settings
      </Text>
      {createSettings("Push Notifications", test())}
      {createSettings("set", test())}
      {createSettings("set", test())}
      {createSettings("set", test())}
      {createSettings("set", test())}

    </View>
  );
}

function createSettings(text, func) {
  return (
    <View style={{flex:0, justifyContent: "flex-end"}}>
      <Text>
        {text}
      </Text>
      {func}
    </View>
  );
}

function test()  {
  const [buttonState, onPress] = () => useState(false)


  return (
    <Switch
      value={buttonState}
      onValueChange={onPress}
    />
  );
}
