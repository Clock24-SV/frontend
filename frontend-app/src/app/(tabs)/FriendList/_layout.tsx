import { View, Text } from "react-native";
import React from "react";
import ToggleBox from "@/src/components/FriendListScreen/ToggleBox";
import styled from "@emotion/native";
import FriendList from "@/src/components/FriendListScreen/FrinedList";

export default function FriendListScreen() {
  const [menu, setMenu] = React.useState("팔로워");

  const changeMenu = (menu: string) => {
    setMenu(menu);
  };
  return (
    <Container>
      <ToggleBox menu={menu} onClick={changeMenu} />
      <FriendList>
        <FriendList.Profile />
        <Inform>
          <FriendList.Title />
          <FriendList.Introduce />
        </Inform>
        <FriendList.Button menu={menu} />
      </FriendList>

      <FriendList>
        <FriendList.Profile />
        <Inform>
          <FriendList.Title />
          <FriendList.Introduce />
        </Inform>
        <FriendList.Button menu={menu} />
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
