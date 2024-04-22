import React from "react";
import { Tabs } from "expo-router";
import { colors } from "@/src/constants/Colors";
import { useColorScheme } from "@/src/components/useColorScheme";
import { useClientOnlyValue } from "@/src/components/useClientOnlyValue";
import styled, { css } from "@emotion/native";
import { TABLISTS } from "@/src/constants/tab";
import Header from "@/src/common/Header";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          backgroundColor: colors[colorScheme ?? "light"].background,
          paddingTop: 3,
          paddingBottom: 3,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      {TABLISTS.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            header: () => <Header title={title} />,
            tabBarIcon: ({ focused }) => (
              <StyledImage focused={focused} source={icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

const StyledImage = styled.Image<{ focused: boolean }>(({ focused }) => ({
  width: 25,
  height: 25,
  padding: 5,
  resizeMode: "contain",
  opacity: focused ? 1 : 0.5,
}));
