import { ReactNode } from "react";

type Prop = { children: ReactNode };

const TodoLayout = ({ children }: Prop) => {
  return <div>{children}</div>;
};

export default TodoLayout;
