import styled from "@emotion/native";
import React from "react";
import { useTodoContext } from "../index";
import TodoItem from "./TodoItem";
import { TodoType } from "@/src/types/todo";
import { Dimensions } from "react-native";

export default function TodoList() {
  const { todoData } = useTodoContext();
  return (
    <Container>
      <ListContainer
        data={todoData}
        renderItem={(item) => <TodoItem item={item.item as TodoType} />}
      ></ListContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  min-height: 150px;
`;

const ListContainer = styled.FlatList`
  width: 90%;
`;
