"use client";

import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Nav from "@/common/Nav";
import Todo from "@/components/Todo";

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <main className={cx("main")}>
      <Todo>
        <Todo.Day />
        <Todo.Progressive />
        <Todo.Schedule />
      </Todo>
    </main>
  );
};

export default Main;
