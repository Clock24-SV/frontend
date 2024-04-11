import React from "react";
import stlyes from "./index.module.scss";
import classNames from "classnames/bind";

type Props = {
  children: React.ReactNode;
};

const cx = classNames.bind(stlyes);

const Title = ({ children }: Props) => {
  return <div className={cx("title")}>{children}</div>;
};

export default Title;
