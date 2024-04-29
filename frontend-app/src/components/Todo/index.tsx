import React, { ReactNode, createContext, useContext } from "react";
import ProgressBar from "./ProgressBar";
import TodoList from "./TodoList";
import styled from "@emotion/native";
import { TodoType } from "@/src/types/todo";

interface TodoProps {
  children: ReactNode;
  date: string; // 예시 "2024-04-21"
  todoData: TodoType[];
}

type TodoContextType = Omit<TodoProps, "children">;

const todoContext = createContext<TodoContextType | null>(null);

export default function Todo({ children, date, todoData }: TodoProps) {
  return (
    <todoContext.Provider value={{ date, todoData }}>
      <Container>{children}</Container>
    </todoContext.Provider>
  );
}

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

Todo.ProgressBar = ProgressBar;
Todo.TodoList = TodoList;

export const useTodoContext = () => useContext(todoContext) as any;
