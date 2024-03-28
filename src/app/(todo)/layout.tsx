import Nav from "@/common/Nav";
import { ReactNode } from "react";

type Prop = { children: ReactNode };

export default function TodoLayout({ children }: Prop) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
