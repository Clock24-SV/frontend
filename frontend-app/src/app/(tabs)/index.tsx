import { View } from "@/src/components/Themed";
import CustomText from "@/src/common/CustomText";
import { useState } from "react";
import CustomTextInput from "@/src/common/CustomTextInput";
import { css } from "@emotion/native";

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  return (
    <View>
      <CustomText>Tab On22e</CustomText>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <CustomText>{count}</CustomText>
      <CustomTextInput style={base} placeholder="안녕" />
    </View>
  );
}

const base = css`
  background-color: blue;
  padding: 10px;
  color: white;
  font-size: 20px;
`;
