import Image from "next/image";
import classNames from "classnames/bind";
import style from "./index.module.scss";
import logo from "../../assets/Images/logo.svg";
import KakaoLoginButton from "@/components/KakaoLoginButton";

const cx = classNames.bind(style);

export default function Home() {
  return (
    <main className={cx("page")}>
      <div className={cx("imgWrapper")}>
        <Image src={logo} alt="logo" priority={true} fill={true} />
      </div>

      <h1 className={cx("title")}>Clock24</h1>

      <div className={cx("subWrapper")}>
        <span className={cx("sub")}>하루 24시간,</span>
        <span className={cx("sub")}>달성 실패 시 메시지가 전송돼요.</span>
      </div>

      <KakaoLoginButton />
    </main>
  );
}
