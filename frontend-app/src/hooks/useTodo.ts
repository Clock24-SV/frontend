import { useState } from "react";
import { formatDate } from "../utils";
import { StateType, TodoType } from "../types/todo";

const TODO_DATA: TodoType[] = [
  { id: 1, state: "Not Started", content: "할일1" },
  { id: 2, state: "In Progress", content: "할일2" },
  { id: 3, state: "Completed", content: "할일3" },
  { id: 4, state: "Not Started", content: "할일1" },
  { id: 5, state: "In Progress", content: "할일2" },
  { id: 6, state: "Completed", content: "할일3" },
  { id: 7, state: "Not Started", content: "할일1" },
  { id: 8, state: "In Progress", content: "할일2" },
  { id: 9, state: "Completed", content: "할일3" },
];

export default function useTodo() {
  const [todoList, setTodoList] = useState<TodoType[]>(TODO_DATA);
  const [selectedDay, setSelectedDay] = useState<string>(formatDate()); // "2024-04-25"

  const markedDates = {
    "2024-04-21": { marked: true },
    "2024-04-22": { marked: true },
    "2024-04-24": { marked: true },
  };

  const subtractWeek = () => {
    const date = new Date(selectedDay);
    date.setDate(date.getDate() - 7);
    setSelectedDay(formatDate(date));
  };

  const addWeek = () => {
    const date = new Date(selectedDay);
    date.setDate(date.getDate() + 7);
    setSelectedDay(formatDate(date));
  };

  const handleDropdownChange = (id: number, newState: StateType) => {
    setTodoList((currentTodoList) =>
      currentTodoList.map((todo) => (todo.id === id ? { ...todo, state: newState } : todo))
    );
  };

  return {
    todoList,
    markedDates,
    selectedDay,
    setSelectedDay,
    subtractWeek,
    addWeek,
    handleDropdownChange,
  };
}
