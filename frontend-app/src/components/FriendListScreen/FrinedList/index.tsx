import { View } from "react-native";
import React from "react";
import { Profile } from "./Profile";
import { Introduce } from "./Introduce";
import { Title } from "./Title";
import { Button } from "./Button";
import styled from "@emotion/native";

interface FriendListProps {
  children: React.ReactNode;
}

type FriendListContextType = {};

export const FriendListContext =
  React.createContext<FriendListContextType | null>;

export default function FriendList({ children }: FriendListProps) {
  return <List>{children}</List>;
}

// export const useFriendListContext = () => {
//   const context = React.useContext(FriendListContext);
//   if (!context) {
//     throw new Error("Cannot find FriendListContext");
//   }
//   return context;
// };

FriendList.Profile = Profile;
FriendList.Title = Title;
FriendList.Introduce = Introduce;
FriendList.Button = Button;

const List = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 100px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #00000029;
  padding: 20px;
  margin-bottom: 20px;
`;
