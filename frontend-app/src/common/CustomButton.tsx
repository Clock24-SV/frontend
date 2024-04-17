import { View, Text, PressableProps, Pressable } from "react-native";
import React from "react";
import CustomText from "./CustomText";

interface CustomButtonProps extends PressableProps {
  label: string;
}

export default function CustomButton({ label, ...props }: CustomButtonProps) {
  return (
    <Pressable {...props}>
      <View>
        <CustomText>{label}</CustomText>
      </View>
    </Pressable>
  );
}
