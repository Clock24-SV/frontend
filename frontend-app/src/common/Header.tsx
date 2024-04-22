import React from "react";
import CustomText from "./CustomText";
import styled, { css } from "@emotion/native";
import { colors } from "../constants/Colors";
import { TitleType } from "../constants/tab";

interface HeaderProps {
  title: TitleType;
}

export default function Header({ title }: HeaderProps) {
  return (
    <HeaderContainer>
      <InlineHeader>
        <CustomText style={HeaderText}>{title}</CustomText>
        <ProfileImage
          source={require("../assets/images/profile.png")}
          resizeMode="contain"
        />
      </InlineHeader>
    </HeaderContainer>
  );
}

const ProfileImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const HeaderContainer = styled.SafeAreaView`
  background-color: ${colors.WHITE};
`;

const InlineHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  height: 50px;
`;

const HeaderText = css`
  font-size: 20px;
`;
