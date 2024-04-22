import React from "react";
import { View, Text, Image } from "react-native";
import styled from "@emotion/native";

const CustomHeader = styled(View)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10,
});

const HeaderTitle = styled(Text)({
  fontSize: 18,
  fontWeight: "bold",
});

const ProfileImage = styled(Image)({
  width: 40,
  height: 40,
  borderRadius: 20,
});

const StyledImage = styled(Image)({
  width: 25,
  height: 25,
  padding: 5,
  resizeMode: "contain",
});

const HomeScreen = () => {
  return (
    <View>
      <CustomHeader>
        <HeaderTitle>홈</HeaderTitle>
        <ProfileImage source={{ uri: "https://example.com/profile.jpg" }} />
      </CustomHeader>
      {/* Content of the Home screen */}
    </View>
  );
};

export default HomeScreen;
