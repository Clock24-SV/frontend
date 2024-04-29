import { PressableProps, Pressable } from "react-native";
import React from "react";

interface CustomButtonProps extends PressableProps {
  children?: React.ReactNode;
}

export default function CustomButton({ children, ...props }: CustomButtonProps) {
  return <Pressable {...props}>{children}</Pressable>;
}
