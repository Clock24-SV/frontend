import { Stack } from "expo-router";
import React from "react";

function AuthStackNavigator() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" />
    </Stack>
  );
}

export default AuthStackNavigator;
