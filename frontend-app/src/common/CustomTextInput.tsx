import { View, TextInput, Pressable, TextInputProps } from "react-native";
import React, { useRef } from "react";

interface CustomTextInputProps extends TextInputProps {}

export default function CustomTextInput({ ...props }: CustomTextInputProps) {
  const innerRef = useRef<TextInput | null>(null);

  const handlePressInput = () => {
    innerRef.current?.focus();
  };
  return (
    <Pressable onPress={handlePressInput}>
      <View>
        <TextInput
          autoCapitalize="none"
          spellCheck={false}
          autoCorrect={false}
          ref={innerRef}
          {...props}
        />
      </View>
    </Pressable>
  );
}
