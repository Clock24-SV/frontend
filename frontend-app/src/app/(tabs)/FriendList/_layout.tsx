import { View, Text } from "react-native";
import React from "react";
import ToggleBox from "@/src/components/FriendList/ToggleBox";
import styled from "@emotion/native";

export default function FriendListScreen() {
  const [menu, setMenu] = React.useState("팔로워");

  const changeMenu = (menu: string) => {
    setMenu(menu);
  };
  return (
    <Container>
      <ToggleBox menu={menu} onClick={changeMenu} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
