import React from "react";
import { Tabs } from "expo-router";
import { colors } from "@/src/constants/Colors";
import { useColorScheme } from "@/src/components/useColorScheme";
import { useClientOnlyValue } from "@/src/components/useClientOnlyValue";
import styled, { css } from "@emotion/native";
import CustomText from "@/src/common/CustomText";
import { TABLISTS } from "@/src/constants/tab";

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
            header: () => (
              <Header>
                <InlineHeader>
                  <CustomText style={HeaderText}>{title}</CustomText>
                  <ProfileImage
                    source={require("../../assets/images/profile.png")}
                    resizeMode="contain"
                  />
                </InlineHeader>
              </Header>
            ),
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

const ProfileImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const Header = styled.SafeAreaView`
  background-color: ${colors.WHITE};
`;

const InlineHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  height: 50px;
`;

const HeaderText = css`
  font-size: 20px;
`;
