import React from "react";
import { TextProps } from "../components/Themed";
import styled from "@emotion/native";

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
}

export default function CustomText(props: CustomTextProps) {
  return (
    <Text {...props} style={[props.style]}>
      {props.children}
    </Text>
  );
}

const Text = styled.Text`
  font-family: "Jua";
`;
