import { View, Image } from "react-native";
import React from "react";
import styled from "@emotion/native";

export const Profile = () => {
  return (
    <Wrapper>
      <Image source={require("../../../../assets/images/profile.png")} />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  margin-right: 10px;
`;
