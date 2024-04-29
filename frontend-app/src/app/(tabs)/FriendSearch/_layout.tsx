import React from "react";
import styled, { css } from "@emotion/native";
import FriendList from "@/src/components/FriendListScreen/FrinedList";
import FriendSearch from "@/src/components/FriendSearchScreen";
import CustomText from "@/src/common/CustomText";
import useSearch from "@/src/hooks/FriendSearchScreen/useSearch";
import { isEmptyArr } from "@/src/utils/friendSearch";

export default function FriendSearchScreen() {
  const { search, changeSearch, saveData, getData, searchedData, removeData } =
    useSearch();

  console.log(isEmptyArr(searchedData));
  return (
    <Container>
      <FriendSearch
        search={search}
        changeSearch={changeSearch}
        saveData={saveData}
        getData={getData}
        searchedData={searchedData}
        removeData={removeData}
      />
      <CustomText style={RecommendFriend}>추천 친구</CustomText>
      <FriendList>
        <FriendList.Profile />
        <Inform>
          <FriendList.Title />
          <FriendList.Introduce />
        </Inform>
        <FriendList.Button menu={"팔로워"} />
      </FriendList>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const Inform = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 10px;
`;

const RecommendFriend = css`
  width: 90%;
  margin: 0 auto;
  padding-left: 10px;
  margin-bottom: 10px;
`;
