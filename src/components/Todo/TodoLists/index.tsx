import React from "react";
import TodoData from "./TodoData";
import ClearButton from "./ClearButton";
import DeleteButton from "./DeleteButton";
import styles from "./index.module.scss";
import classNames from "classnames/bind";

type Props = {
  children: React.ReactNode;
};

const cx = classNames.bind(styles);

const TodoLists = ({ children }: Props) => {
  return <div className={cx("todo-lists")}>{children}</div>;
};

TodoLists.TodoData = TodoData;
TodoLists.ClearButton = ClearButton;
TodoLists.DeleteButton = DeleteButton;

export default TodoLists;
