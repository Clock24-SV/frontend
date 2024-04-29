import { View, Text, Image } from "react-native";
import React from "react";
import CustomButton from "@/src/common/CustomButton";
import { css } from "@emotion/native";
import { colors } from "@/src/constants/Colors";
import CustomText from "@/src/common/CustomText";

interface ButtonProps {
  menu: string;
}

export const Button = ({ menu }: ButtonProps) => {
  const follow = menu === "팔로워" ? "팔로우" : "팔로잉";
  const buttonColor = menu === "팔로워" ? colors.PURPLE : colors.GRAY;
  const followIcon =
    menu === "팔로워"
      ? require("../../../../assets/images/plus.png")
      : require("../../../../assets/images/check.png");
  return (
    <>
      <CustomButton style={[ButtonStyle, { backgroundColor: buttonColor }]}>
        <CustomText style={TextStyle}>{follow}</CustomText>
        <Image source={followIcon} />
      </CustomButton>
    </>
  );
};

const ButtonStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 30px;
  border-radius: 10px;
  color: ${colors.WHITE};
`;

const TextStyle = css`
  color: ${colors.WHITE};
  margin-right: 8px;
`;
