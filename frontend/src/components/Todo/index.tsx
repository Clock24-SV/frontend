"use client";

import React, { createContext, useContext } from "react";
import style from "./index.module.scss";
import classNames from "classnames/bind";
import Day from "./Day";
import Progressive from "./Progressive";
import Schedule from "./Schedule";
import { useTodos } from "@/hooks/useTodo";

const cx = classNames.bind(style);

type Props = {
  children: React.ReactNode;
};

const todoContext = createContext<any | null>(null);

const Todo = ({ children }: Props) => {
  const { weather, handleWeatherClick } = useTodos();

  return (
    <todoContext.Provider value={{ weather, handleWeatherClick }}>
      <section className={cx("wrapper")}>{children}</section>
    </todoContext.Provider>
  );
};

export default Todo;

Todo.Day = Day;
Todo.Progressive = Progressive;
Todo.Schedule = Schedule;

export const useTodo = () => useContext(todoContext) as any;
