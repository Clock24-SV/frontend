import Image from "next/image";
import style from "./index.module.scss";
import logo from "../../assets/Images/logo.svg";
import classnames from "classnames/bind";

const cx = classnames.bind(style);

export default function Home() {
  return (
    <main className={cx("page")}>
      <span>밣</span>
      <span>가</span>
      <Image src={logo} alt="" />
    </main>
  );
}
