import { View, Text } from "react-native";
import React from "react";
import styled from "@emotion/native";
import CustomText from "@/src/common/CustomText";

export const Title = () => {
  return (
    <Wrapper>
      <CustomText>친구</CustomText>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  margin-bottom: 5px;
`;
