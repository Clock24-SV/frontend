import Image from "next/image";
import classNames from "classnames/bind";
import style from "./index.module.scss";
import logo from "../../assets/Images/logo.svg";

const cx = classNames.bind(style);

export default function Home() {
  return (
    <main className={cx("page")}>
      <span>밣</span>
      <span>가</span>
      <Image src={logo} alt="" />
    </main>
  );
}
