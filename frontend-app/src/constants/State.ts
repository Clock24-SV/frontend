import { StateType } from "../types/todo";

export type StateInfo = {
  [k in StateType]: {
    name: string;
    color: string;
  };
};

export const STATUS_INFO = {
  "Not Started": {
    text: "시작 전",
    color: "#FF9190",
  },
  "In Progress": {
    text: "진행 중",
    color: "#70A9FF",
  },
  Completed: {
    text: "완료됨",
    color: "#70E08F",
  },
};
