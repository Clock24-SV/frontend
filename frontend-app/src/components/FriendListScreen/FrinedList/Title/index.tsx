import { View, Text } from "react-native";
import React from "react";
import styled from "@emotion/native";

export const Title = () => {
  return (
    <Wrapper>
      <Text>친구</Text>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  margin-bottom: 5px;
`;
