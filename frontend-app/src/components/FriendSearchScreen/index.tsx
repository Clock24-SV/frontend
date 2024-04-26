import React from "react";
import styled, { css } from "@emotion/native";
import { colors } from "@/src/constants/Colors";
import CustomTextInput from "@/src/common/CustomTextInput";
import CustomButton from "@/src/common/CustomButton";
import CustomText from "@/src/common/CustomText";

export default function FriendSearch() {
  return (
    <>
      <TextInputBox>
        <TextSearchImage source={require("../../assets/images/Search.png")} />
        <CustomTextInput
          style={FriendSearchStyle}
          placeholder="친구를 찾아보세요!"
          maxLength={20}
        />
      </TextInputBox>
      <SearchedInfo>
        <CustomButton style={SearchedButton}>
          <CustomText>은주</CustomText>
        </CustomButton>
        <CustomButton style={SearchedButton}>
          <CustomText>은주</CustomText>
        </CustomButton>
        <CustomButton style={SearchedButton}>
          <CustomText>은주</CustomText>
        </CustomButton>
        <CustomButton style={SearchedButton}>
          <CustomText>은주</CustomText>
        </CustomButton>
        <CustomButton style={SearchedButton}>
          <CustomText>은주</CustomText>
        </CustomButton>
      </SearchedInfo>
    </>
  );
}

const TextSearchImage = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const TextInputBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  width: 90%;
  margin: 0 auto;
  border-bottom-color: ${colors.BLACK};
  border-bottom-width: 1.5px;
`;

const FriendSearchStyle = css`
  padding: 10px;
  font-size: 15px;
`;

const SearchedInfo = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  padding: 10px;
`;

const SearchedButton = css`
  padding: 10px;
`;
