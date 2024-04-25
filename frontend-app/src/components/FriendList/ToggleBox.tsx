import { View, Text } from "react-native";
import React from "react";
import CustomText from "@/src/common/CustomText";
import styled, { css } from "@emotion/native";
import { colors } from "@/src/constants/Colors";

interface ToggleBoxProps {
  menu: string;
  onClick: (menu: string) => void;
}

export default function ToggleBox({ menu, onClick }: ToggleBoxProps) {
  return (
    <Wrapper>
      <Toggle>
        <CustomText
          onPress={() => onClick("팔로워")}
          style={menu === "팔로워" ? SelectToggleText : NoNSelectToggleText}
        >
          팔로워
        </CustomText>
        <CustomText
          onPress={() => onClick("팔로잉")}
          style={menu === "팔로잉" ? SelectToggleText : NoNSelectToggleText}
        >
          팔로잉
        </CustomText>
      </Toggle>
      <Line>
        <SelectLine menu={menu} />
      </Line>
    </Wrapper>
  );
}

const Wrapper = styled.View``;

const Toggle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Line = styled.View`
  position: relative;
  width: 90%;
  height: 2px;
  border-radius: 5px;
  background-color: ${colors.GRAY};
  margin: 0 auto;
`;

const SelectLine = styled.View<{ menu: string }>`
  position: absolute;
  top: 0;
  width: 50%;
  height: 2px;
  border-radius: 5px;
  background-color: ${colors.PURPLE};
  ${({ menu }) => (menu === "팔로워" ? left : right)}
`;

const left = css`
  left: 0;
`;

const right = css`
  left: 50%;
`;

const SelectToggleText = css`
  padding: 10px;
  color: ${colors.PURPLE};
  font-size: 24px;
  font-weight: bold;
`;

const NoNSelectToggleText = css`
  padding: 10px;
  color: ${colors.GRAY};
  font-size: 24px;
  font-weight: bold;
`;
