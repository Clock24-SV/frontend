import React from "react";
import styled, { css } from "@emotion/native";
import { colors } from "@/src/constants/Colors";
import CustomTextInput from "@/src/common/CustomTextInput";
import CustomButton from "@/src/common/CustomButton";
import CustomText from "@/src/common/CustomText";
import { Button, Image, ScrollView } from "react-native";
import { isEmptyArr } from "@/src/utils/friendSearch";

interface FriendSearchProps {
  search: string;
  changeSearch: (text: string) => void;
  saveData: () => void;
  getData: () => void;
  searchedData: string[];
  removeData: (index: number) => void;
}

export default function FriendSearch({
  search,
  changeSearch,
  saveData,
  getData,
  searchedData,
  removeData,
}: FriendSearchProps) {
  return (
    <>
      <TextInputBox>
        <TextSearchImage source={require("../../assets/images/Search.png")} />
        <CustomTextInput
          style={FriendSearchStyle}
          placeholder="친구를 찾아보세요!"
          value={search}
          onChangeText={(text) => changeSearch(text)}
          maxLength={20}
          keyboardType="default"
          onSubmitEditing={async () => {
            await saveData();
            await getData();
          }}
        />
      </TextInputBox>
      {!isEmptyArr<string>(searchedData) && (
        <SearchedScrollBox horizontal>
          {searchedData.map((data, index) => {
            return (
              <CustomButton
                key={index}
                onPress={() => changeSearch(data)}
                style={SearchedButton}
              >
                <CustomText style={SearchedText}>{data}</CustomText>
                <CustomButton onPress={() => removeData(index)}>
                  <Image source={require("../../assets/images/close.png")} />
                </CustomButton>
              </CustomButton>
            );
          })}
        </SearchedScrollBox>
      )}
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
  margin-bottom: 10px;
`;

const FriendSearchStyle = css`
  padding: 10px;
  font-size: 15px;
`;

const SearchedScrollBox = styled.ScrollView`
  display: flex;
  flex-direction: row;
  width: 90%;
  max-height: 50px;
  margin: 0 auto;
`;

const SearchedButton = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  padding: 0px 10px;
  min-width: 50px;
  height: 30px;
  border: 1px solid ${colors.PURPLE};
  border-radius: 10px;
`;

const SearchedText = css`
  padding: 0 10px;
  font-size: 16px;
`;
