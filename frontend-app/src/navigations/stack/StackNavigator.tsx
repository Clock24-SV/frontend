import React from "react";
import { Stack } from "expo-router";

function StackNavigator() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default StackNavigator;
