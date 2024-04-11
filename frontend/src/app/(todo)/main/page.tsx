"use client";

import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Todo from "@/components/Todo";
import TodoCalendar from "@/components/TodoCalendar";
import CountdownTimer from "@/components/CountdownTimer";
import Title from "@/components/Title";

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <main className={cx("main")}>
      <Title>000의 TODO</Title>
      <div className={cx("container")}>
        <div className={cx("left-container")}>
          <TodoCalendar />
          <CountdownTimer />
        </div>
        <Todo>
          <Todo.Day />
          <Todo.Progressive />
          <Todo.Schedule />
        </Todo>
      </div>
    </main>
  );
};

export default Main;
