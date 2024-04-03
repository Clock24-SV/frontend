import { ReactNode } from "react";
import Nav from "@/common/Nav";

type Prop = { children: ReactNode };

const TodoLayout = ({ children }: Prop) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
  
export default TodoLayout;
